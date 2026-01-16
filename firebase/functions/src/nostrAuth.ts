import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { schnorr } from '@noble/curves/secp256k1.js';
import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex, hexToBytes, randomBytes } from '@noble/hashes/utils';
import { logSecurityEvent, logAuthSuccess, logAuthFailure, logRateLimitHit } from './securityLogger';

const CHALLENGE_EXPIRY_MS = 60 * 1000; // 60 seconds
const RATE_LIMIT_MAX_CHALLENGES = 10; // Max challenges per pubkey per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

// IP-based rate limiting
const IP_RATE_LIMIT_MAX_CHALLENGES = 50; // Max challenges per IP per hour
const IP_RATE_LIMIT_MAX_FAILURES = 10; // Max auth failures per IP per 5 minutes
const IP_RATE_LIMIT_FAILURE_WINDOW_MS = 5 * 60 * 1000; // 5 minute window

/**
 * Get client IP address from Firebase function context
 */
function getClientIP(context: functions.https.CallableContext): string {
  const request = context.rawRequest;
  const ip = request?.headers['x-forwarded-for'] ||
             request?.headers['x-real-ip'] ||
             request?.ip ||
             'unknown';
  // Handle multiple IPs in x-forwarded-for (take first one)
  return (typeof ip === 'string' ? ip : ip?.[0] || 'unknown').split(',')[0].trim();
}

interface NostrEvent {
  id: string;
  pubkey: string;
  created_at: number;
  kind: number;
  tags: string[][];
  content: string;
  sig: string;
}

/**
 * Generate a unique challenge for Nostr authentication
 */
export const createChallenge = functions.https.onCall(
  async (data: { pubkeyHex?: string }, context: functions.https.CallableContext): Promise<{ challenge: string; expiresAt: number }> => {
    const { pubkeyHex } = data || {};

    if (!pubkeyHex || typeof pubkeyHex !== 'string' || pubkeyHex.length !== 64) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'pubkeyHex must be a 64-character hex string'
      );
    }

    // Validate hex format
    if (!/^[0-9a-f]{64}$/i.test(pubkeyHex)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'pubkeyHex must be valid hex'
      );
    }

    const normalizedPubkey = pubkeyHex.toLowerCase();
    const clientIP = getClientIP(context);

    // IP-based rate limiting: count challenges per IP
    const ipWindowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
    const ipRateKey = `challenge_ip_${clientIP}`;
    const ipRateRef = admin.firestore().collection('rateLimits').doc(ipRateKey);
    const ipRateDoc = await ipRateRef.get();

    const ipRecentChallenges = ipRateDoc.exists
      ? ((ipRateDoc.data() as { timestamps?: number[] }).timestamps || []).filter(
          (ts: number) => ts > ipWindowStart.getTime()
        )
      : [];

    if (ipRecentChallenges.length >= IP_RATE_LIMIT_MAX_CHALLENGES) {
      await logSecurityEvent('rate_limit_ip_challenge', 'warning', {
        ipAddress: clientIP,
        pubkeyHex: normalizedPubkey,
        metadata: { requestCount: ipRecentChallenges.length, window: '1 hour' }
      });
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Too many authentication attempts from this IP address. Please try again later.'
      );
    }

    // Rate limiting: count recent challenges for this pubkey
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
    const recentChallenges = await admin.firestore()
      .collection('challenges')
      .where('pubkeyHex', '==', normalizedPubkey)
      .where('createdAt', '>=', windowStart)
      .count()
      .get();

    if (recentChallenges.data().count >= RATE_LIMIT_MAX_CHALLENGES) {
      await logRateLimitHit(normalizedPubkey, recentChallenges.data().count);
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Too many authentication attempts. Please try again later.'
      );
    }

    const challenge = bytesToHex(randomBytes(32));
    const expiresAt = Date.now() + CHALLENGE_EXPIRY_MS;

    // Store challenge in Firestore
    await admin.firestore().collection('challenges').doc(challenge).set({
      pubkeyHex: normalizedPubkey,
      expiresAt,
      used: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Update IP rate limit tracking
    await ipRateRef.set({
      timestamps: [...ipRecentChallenges, Date.now()].slice(-IP_RATE_LIMIT_MAX_CHALLENGES),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { challenge, expiresAt };
  }
);

/**
 * Verify Nostr signed event and return Firebase custom auth token
 */
export const verifyNostrAndCreateToken = functions.https.onCall(
  async (data: { signedEvent?: NostrEvent; challenge?: string }, context: functions.https.CallableContext): Promise<{ token: string; npub: string }> => {
    const { signedEvent, challenge } = data || {};
    const clientIP = getClientIP(context);

    if (!signedEvent || !challenge) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'signedEvent and challenge are required'
      );
    }

    // IP-based rate limiting for failed auth attempts
    const ipFailureKey = `auth_failure_${clientIP}`;
    const ipFailureRef = admin.firestore().collection('rateLimits').doc(ipFailureKey);
    const ipFailureDoc = await ipFailureRef.get();

    const ipFailureWindow = Date.now() - IP_RATE_LIMIT_FAILURE_WINDOW_MS;
    const ipRecentFailures = ipFailureDoc.exists
      ? (ipFailureDoc.data() as { timestamps?: number[] }).timestamps || [].filter(
          (ts: number) => ts > ipFailureWindow
        )
      : [];

    if (ipRecentFailures.length >= IP_RATE_LIMIT_MAX_FAILURES) {
      await logSecurityEvent('rate_limit_ip_auth_failure', 'warning', {
        ipAddress: clientIP,
        metadata: { failureCount: ipRecentFailures.length, window: '5 minutes' }
      });
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Too many failed authentication attempts from this IP address. Please wait 5 minutes.'
      );
    }

    // Fetch and validate challenge
    const challengeDoc = await admin.firestore()
      .collection('challenges')
      .doc(challenge)
      .get();

    if (!challengeDoc.exists) {
      await logAuthFailure('auth_failure_challenge_not_found', undefined, { challenge });
      throw new functions.https.HttpsError(
        'not-found',
        'Challenge not found'
      );
    }

    const challengeData = challengeDoc.data()!;

    if (challengeData.used) {
      await logAuthFailure('auth_failure_challenge_reused', challengeData.pubkeyHex, { challenge });
      throw new functions.https.HttpsError(
        'already-exists',
        'Challenge already used'
      );
    }

    if (Date.now() > challengeData.expiresAt) {
      await logAuthFailure('auth_failure_expired_challenge', challengeData.pubkeyHex, { challenge });
      throw new functions.https.HttpsError(
        'deadline-exceeded',
        'Challenge expired'
      );
    }

    if (signedEvent.pubkey.toLowerCase() !== challengeData.pubkeyHex) {
      await logAuthFailure('auth_failure_pubkey_mismatch', signedEvent.pubkey, {
        expected: challengeData.pubkeyHex,
        received: signedEvent.pubkey.toLowerCase(),
      });
      throw new functions.https.HttpsError(
        'permission-denied',
        'Pubkey mismatch'
      );
    }

    // Verify the signed event
    if (!verifyNostrEvent(signedEvent, challenge)) {
      await logAuthFailure('auth_failure_invalid_signature', signedEvent.pubkey, {
        eventId: signedEvent.id,
        eventKind: signedEvent.kind,
      });
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Invalid signature'
      );
    }

    // Mark challenge as used
    await challengeDoc.ref.update({ used: true });

    // Clear IP failure rate limit on successful auth
    await ipFailureRef.set({
      timestamps: [],
      lastCleared: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Convert pubkey hex to npub
    const npub = hexToNpub(signedEvent.pubkey);

    // Create or update user document
    const userRef = admin.firestore().collection('users').doc(npub);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      await userRef.set({
        pubkeyHex: signedEvent.pubkey.toLowerCase(),
        displayName: null,
        totalXP: 0,
        scores: { ba: 0, crypto: 0, aa: 0 },
        level: 1,
        banned: false,
        isAdmin: false,
        lastSeen: admin.firestore.FieldValue.serverTimestamp(),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      await userRef.update({
        lastSeen: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    // Check if user is banned
    const userData = userDoc.exists ? userDoc.data() : null;
    if (userData?.banned) {
      await logSecurityEvent('auth_banned_user_attempt', 'error', {
        npub,
        pubkeyHex: signedEvent.pubkey.toLowerCase(),
        ipAddress: clientIP,
      });
      throw new functions.https.HttpsError(
        'permission-denied',
        'User is banned from the leaderboard'
      );
    }

    // Get admin status from Firestore (source of truth) to sync with Auth claims
    // This ensures admin status set via admin functions is reflected in the token
    let isAdmin = false;
    try {
      const userDoc = await admin.firestore().collection('users').doc(npub).get();
      if (userDoc.exists) {
        isAdmin = userDoc.data()?.isAdmin === true;
      }
    } catch {
      // User doc doesn't exist - not an admin
    }

    // Sync admin status to Firebase Auth claims (for client-side checking)
    await admin.auth().setCustomUserClaims(npub, {
      isAdmin,
    });

    // Create Firebase custom token with npub as UID
    const token = await admin.auth().createCustomToken(npub, {
      pubkeyHex: signedEvent.pubkey.toLowerCase(),
      isAdmin,
    });

    // Log successful authentication with IP address
    await logAuthSuccess(npub, signedEvent.pubkey.toLowerCase(), clientIP);

    return { token, npub };
  }
);

/**
 * Verify a Nostr event signature
 */
function verifyNostrEvent(event: NostrEvent, expectedChallenge: string): boolean {
  try {
    // Verify event kind (we use kind 22242 for auth)
    if (event.kind !== 22242) {
      return false;
    }

    // Verify challenge is in the content or tags
    const hasChallenge =
      event.content === expectedChallenge ||
      event.tags.some(tag => tag[0] === 'challenge' && tag[1] === expectedChallenge);

    if (!hasChallenge) {
      return false;
    }

    // Verify event is recent (within challenge expiry window)
    // Allow same window as challenge expiry (60 seconds) for consistency
    const now = Math.floor(Date.now() / 1000);
    const CHALLENGE_EXPIRY_SECONDS = 60;
    if (Math.abs(event.created_at - now) > CHALLENGE_EXPIRY_SECONDS) {
      return false;
    }

    // Compute event ID
    const serialized = JSON.stringify([
      0,
      event.pubkey,
      event.created_at,
      event.kind,
      event.tags,
      event.content,
    ]);
    const hash = sha256(new TextEncoder().encode(serialized));
    const computedId = bytesToHex(hash);

    if (computedId !== event.id) {
      return false;
    }

    // Verify Schnorr signature
    const pubkeyBytes = hexToBytes(event.pubkey);
    const sigBytes = hexToBytes(event.sig);
    const msgBytes = hexToBytes(event.id);

    return schnorr.verify(sigBytes, msgBytes, pubkeyBytes);
  } catch {
    return false;
  }
}

/**
 * Convert hex pubkey to npub (bech32)
 */
function hexToNpub(hex: string): string {
  const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
  const PREFIX = 'npub';

  // Convert hex to 5-bit groups
  const bytes = hexToBytes(hex);
  const bits: number[] = [];

  for (const byte of bytes) {
    for (let i = 7; i >= 0; i--) {
      bits.push((byte >> i) & 1);
    }
  }

  // Pad to multiple of 5
  while (bits.length % 5 !== 0) {
    bits.push(0);
  }

  // Convert to 5-bit groups
  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 5) {
    let value = 0;
    for (let j = 0; j < 5; j++) {
      value = (value << 1) | bits[i + j];
    }
    data.push(value);
  }

  // Compute checksum
  const checksum = bech32Checksum(PREFIX, data);

  // Encode
  let result = PREFIX + '1';
  for (const d of data) {
    result += ALPHABET[d];
  }
  for (const c of checksum) {
    result += ALPHABET[c];
  }

  return result;
}

function bech32Checksum(prefix: string, data: number[]): number[] {
  const GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

  function polymod(values: number[]): number {
    let chk = 1;
    for (const v of values) {
      const top = chk >> 25;
      chk = ((chk & 0x1ffffff) << 5) ^ v;
      for (let i = 0; i < 5; i++) {
        if ((top >> i) & 1) {
          chk ^= GENERATOR[i];
        }
      }
    }
    return chk;
  }

  function hrpExpand(hrp: string): number[] {
    const result: number[] = [];
    for (const c of hrp) {
      result.push(c.charCodeAt(0) >> 5);
    }
    result.push(0);
    for (const c of hrp) {
      result.push(c.charCodeAt(0) & 31);
    }
    return result;
  }

  const values = [...hrpExpand(prefix), ...data, 0, 0, 0, 0, 0, 0];
  const mod = polymod(values) ^ 1;

  const checksum: number[] = [];
  for (let i = 0; i < 6; i++) {
    checksum.push((mod >> (5 * (5 - i))) & 31);
  }

  return checksum;
}
