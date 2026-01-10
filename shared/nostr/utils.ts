/**
 * Nostr utility functions
 * bech32 encoding/decoding for npub/nsec/note
 */

import { DEFAULT_RELAYS, FALLBACK_RELAYS, RELAY_TIMEOUT_MS } from '../constants';
import { getLogger } from '../utils/logger';

const logger = getLogger('NostrUtils');

const BECH32_ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const BECH32_GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

/**
 * Bech32 polymod checksum calculation
 */
function polymod(values: number[]): number {
  let chk = 1;
  for (const v of values) {
    const top = chk >> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ v;
    for (let i = 0; i < 5; i++) {
      if ((top >> i) & 1) {
        chk ^= BECH32_GENERATOR[i];
      }
    }
  }
  return chk;
}

/**
 * Expand human-readable part for checksum
 */
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

/**
 * Verify bech32 checksum
 */
function verifyChecksum(hrp: string, data: number[]): boolean {
  return polymod([...hrpExpand(hrp), ...data]) === 1;
}

/**
 * Create bech32 checksum
 */
function createChecksum(hrp: string, data: number[]): number[] {
  const values = [...hrpExpand(hrp), ...data, 0, 0, 0, 0, 0, 0];
  const mod = polymod(values) ^ 1;
  const checksum: number[] = [];
  for (let i = 0; i < 6; i++) {
    checksum.push((mod >> (5 * (5 - i))) & 31);
  }
  return checksum;
}

/**
 * Convert bytes to 5-bit groups
 */
function convertBits(
  data: Uint8Array,
  fromBits: number,
  toBits: number,
  pad: boolean
): number[] | null {
  let acc = 0;
  let bits = 0;
  const result: number[] = [];
  const maxv = (1 << toBits) - 1;

  for (const value of data) {
    if (value < 0 || value >> fromBits !== 0) {
      return null;
    }
    acc = (acc << fromBits) | value;
    bits += fromBits;
    while (bits >= toBits) {
      bits -= toBits;
      result.push((acc >> bits) & maxv);
    }
  }

  if (pad) {
    if (bits > 0) {
      result.push((acc << (toBits - bits)) & maxv);
    }
  } else if (bits >= fromBits || ((acc << (toBits - bits)) & maxv)) {
    return null;
  }

  return result;
}

/**
 * Encode bytes to bech32
 */
export function bech32Encode(hrp: string, data: Uint8Array): string {
  const data5bit = convertBits(data, 8, 5, true);
  if (!data5bit) {
    throw new Error('Failed to convert data to 5-bit groups');
  }

  const checksum = createChecksum(hrp, data5bit);
  let result = hrp + '1';

  for (const d of data5bit) {
    result += BECH32_ALPHABET[d];
  }
  for (const c of checksum) {
    result += BECH32_ALPHABET[c];
  }

  return result;
}

/**
 * Decode bech32 to bytes
 */
export function bech32Decode(bech: string): { hrp: string; data: Uint8Array } | null {
  const lowerBech = bech.toLowerCase();
  const upperBech = bech.toUpperCase();

  // Must be either all lowercase or all uppercase
  if (bech !== lowerBech && bech !== upperBech) {
    return null;
  }

  const b = lowerBech;
  const pos = b.lastIndexOf('1');

  if (pos < 1 || pos + 7 > b.length || b.length > 90) {
    return null;
  }

  const hrp = b.slice(0, pos);
  const dataChars = b.slice(pos + 1);

  const data5bit: number[] = [];
  for (const c of dataChars) {
    const idx = BECH32_ALPHABET.indexOf(c);
    if (idx === -1) {
      return null;
    }
    data5bit.push(idx);
  }

  if (!verifyChecksum(hrp, data5bit)) {
    return null;
  }

  // Remove checksum (last 6 characters)
  const data5bitNoChecksum = data5bit.slice(0, -6);
  const data8bit = convertBits(new Uint8Array(data5bitNoChecksum), 5, 8, false);

  if (!data8bit) {
    return null;
  }

  return { hrp, data: new Uint8Array(data8bit) };
}

/**
 * Convert hex string to Uint8Array
 */
export function hexToBytes(hex: string): Uint8Array {
  if (hex.length % 2 !== 0) {
    throw new Error('Hex string must have even length');
  }
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

/**
 * Convert Uint8Array to hex string
 */
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Convert hex-encoded public key to Nostr bech32 npub format.
 *
 * Nostr public keys are 32-byte (64-character hex) values that get encoded
 * into human-readable bech32 format with 'npub' prefix for sharing and display.
 *
 * @param hex - 64-character hexadecimal public key string
 * @returns Bech32-encoded npub string (e.g., 'npub1abc...xyz')
 * @throws Error if input is not exactly 64 hex characters
 *
 * @example
 * ```ts
 * const hexKey = '3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d';
 * hexToNpub(hexKey); // Returns 'npub1...'
 * ```
 *
 * @see npubToHex for reverse conversion
 * @see isValidHexPubkey for validation
 */
export function hexToNpub(hex: string): string {
  if (hex.length !== 64) {
    throw new Error('Pubkey must be 32 bytes (64 hex characters)');
  }
  const bytes = hexToBytes(hex);
  return bech32Encode('npub', bytes);
}

/**
 * Convert npub (bech32) to hex pubkey
 */
export function npubToHex(npub: string): string {
  const decoded = bech32Decode(npub);
  if (!decoded || decoded.hrp !== 'npub') {
    throw new Error('Invalid npub');
  }
  return bytesToHex(decoded.data);
}

/**
 * Check if a string is a valid npub
 */
export function isValidNpub(npub: string): boolean {
  try {
    const decoded = bech32Decode(npub);
    return decoded !== null && decoded.hrp === 'npub' && decoded.data.length === 32;
  } catch {
    return false;
  }
}

/**
 * Fetch a user's Nostr profile from multiple relays with improved parallel fetching and failover.
 *
 * Implements proper error handling, timeout management, and graceful degradation.
 *
 * Enhanced with expanded relay pool for better availability.
 *
 * @param npub - User's Nostr public key in bech32 npub format
 * @returns Promise resolving to user profile or null if not found
 *
 * @example
 * ```ts
 * const profile = await fetchNostrProfile('npub1...');
 * // Returns user profile if found, null otherwise
 * ```
 *
 * @see DEFAULT_RELAYS for relay list configuration
 * @see fetchProfileFromRelay for single-relay implementation
 * @see getAllRelays for complete relay management
 */
export async function fetchNostrProfile(npub: string): Promise<NostrProfile | null> {
  try {
    const pubkeyHex = npubToHex(npub);

    // Get all available relays (defaults + fallbacks)
    const allRelays = getAllRelays();

    // Try relays in parallel with timeout for each
    const relayPromises = allRelays.map(async (relayUrl) => {
      try {
        const profile = await Promise.race([
          fetchProfileFromRelay(relayUrl, pubkeyHex),
          // Timeout after 2 seconds per relay
          new Promise<null>((resolve) => setTimeout(() => resolve(null), 2000))
        ]);
        return profile;
      } catch (err) {
        logger.debug(`Failed to fetch profile from relay ${relayUrl}:`, err);
        return null;
      }
    });

    // Wait for any relay to return a profile
    const results = await Promise.allSettled(relayPromises);
    const profiles = results
      .filter((result): result is PromiseFulfilledResult<NostrProfile | null> =>
        result.status === 'fulfilled' && result.value !== null
      )
      .map(result => result.value);

    if (profiles.length > 0) {
      // Return the first successful profile found
      return profiles[0];
    }

    logger.debug(`No profile found for npub across ${allRelays.length} relays`);
    return null;
  } catch (err) {
    logger.debug('Failed to convert npub to hex:', err);
    return null;
  }
}

/**
 * Get all available relays (defaults + fallbacks) for comprehensive relay management.
 */
function getAllRelays(): readonly string[] {
  return [...DEFAULT_RELAYS, ...FALLBACK_RELAYS];
}

/**
 * Check if a Nostr relay is healthy and responding to requests.
 * Useful for relay monitoring and health checks.
 */
export async function checkRelayHealth(relayUrl: string): Promise<boolean> {
  return new Promise((resolve) => {
    let cleaned = false;
    const timeout = setTimeout(() => {
      if (!cleaned) {
        cleaned = true;
        resolve(false);
      }
    }, 2000); // 2 second timeout

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      clearTimeout(timeout);
    };

    try {
      const ws = new WebSocket(relayUrl);

      ws.onopen = () => {
        cleanup();
        try {
          ws.close();
        } catch (e) {
          // Ignore close errors
        }
        resolve(true);
      };

      ws.onerror = () => {
        cleanup();
        resolve(false);
      };

      ws.onclose = () => {
        if (!cleaned) {
          cleanup();
          resolve(false);
        }
      };
    } catch (err) {
      cleanup();
      resolve(false);
    }
  });
}

/**
 * Shorten npub for display (npub1abc...xyz)
 */
export function shortenNpub(npub: string, chars: number = 8): string {
  if (npub.length <= chars * 2 + 3) {
    return npub;
  }
  return `${npub.slice(0, chars)}...${npub.slice(-chars)}`;
}

/**
 * Fetch a user's Nostr profile from multiple relays with improved parallel fetching and failover.
 *
 * Includes enhanced error handling, timeout management, and graceful degradation.
 *
 * Returns first successful profile found or null if none found.
 *
 * @param npub - User's Nostr public key in bech32 npub format
 * @returns Promise resolving to user profile or null if not found
 *
 * @example
 * ```ts
 * const profile = await fetchNostrProfile('npub1...');
 * if (profile) {
 *   console.log('User:', profile.display_name || profile.name);
 *   console.log('NIP-05:', profile.nip05);
 * }
 * ```
 *
 * @see DEFAULT_RELAYS for relay list configuration
 * @see fetchProfileFromRelay for single-relay functionality
 * @see getAllRelays for complete relay management
 */

/**
 * Check if a Nostr browser extension (NIP-07) is available
 */
export function hasNostrExtension(): boolean {
  return typeof window !== 'undefined' && typeof window.nostr !== 'undefined';
}

/**
 * Wait for nostr extension to be injected (some extensions inject after page load)
 */
export function waitForNostrExtension(timeout: number = 3000): Promise<boolean> {
  return new Promise((resolve) => {
    if (hasNostrExtension()) {
      resolve(true);
      return;
    }

    const start = Date.now();
    const interval = setInterval(() => {
      if (hasNostrExtension()) {
        clearInterval(interval);
        resolve(true);
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        resolve(false);
      }
    }, 100);
  });
}

/**
 * Nostr profile metadata (kind 0)
 */
export interface NostrProfile {
  name?: string;
  display_name?: string;
  nip05?: string;
  picture?: string;
  about?: string;
}

/**
 * Fetch profile from a single relay with improved error handling
 *
 * Implements proper WebSocket cleanup to prevent connection leaks.
 * Returns null on any error to enable relay failover.
 */
export function fetchProfileFromRelay(
  relayUrl: string,
  pubkeyHex: string
): Promise<NostrProfile | null> {
  return new Promise((resolve) => {
    let cleaned = false;
    let ws: WebSocket | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    // Cleanup function to prevent leaks and double-cleanup
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (ws && ws.readyState !== WebSocket.CLOSED && ws.readyState !== WebSocket.CLOSING) {
        try {
          ws.close();
        } catch (err) {
          logger.debug(`Error closing WebSocket for ${relayUrl}:`, err);
        }
      }
    };

    timeoutId = setTimeout(() => {
      logger.debug(`WebSocket timeout for relay: ${relayUrl}`);
      cleanup();
      resolve(null);
    }, RELAY_TIMEOUT_MS);

    try {
      ws = new WebSocket(relayUrl);
    } catch (err) {
      logger.debug(`Failed to create WebSocket for relay ${relayUrl}:`, err);
      cleanup();
      resolve(null);
      return;
    }

    const subId = Math.random().toString(36).substring(2, 15);

    ws.onopen = () => {
      if (cleaned || !ws) return;
      try {
        const req = JSON.stringify([
          'REQ',
          subId,
          { kinds: [0], authors: [pubkeyHex], limit: 1 },
        ]);
        ws.send(req);
      } catch (err) {
        logger.debug(`Failed to send subscription to ${relayUrl}:`, err);
        cleanup();
        resolve(null);
      }
    };

    ws.onmessage = (event) => {
      if (cleaned) return;
      try {
        const data = JSON.parse(event.data);
        if (data[0] === 'EVENT' && data[1] === subId) {
          const content = JSON.parse(data[2].content);
          cleanup();
          resolve({
            name: content.name || content.display_name,
            display_name: content.display_name,
            nip05: content.nip05,
            picture: content.picture,
            about: content.about,
          });
        } else if (data[0] === 'EOSE') {
          cleanup();
          resolve(null);
        }
      } catch (err) {
        logger.debug(`Failed to parse WebSocket message from ${relayUrl}:`, err);
        // Continue listening for valid messages instead of failing immediately
      }
    };

    ws.onerror = (err) => {
      logger.debug(`WebSocket error for relay ${relayUrl}:`, err);
      cleanup();
      resolve(null);
    };

    ws.onclose = (event) => {
      // Only resolve if we haven't already resolved and it wasn't a clean close
      if (!cleaned) {
        logger.debug(`WebSocket closed for ${relayUrl}, code: ${event.code}, reason: ${event.reason}`);
        cleanup();
        resolve(null);
      }
    };
  });
}

/**
 * Check if a Nostr relay is healthy by attempting a WebSocket connection.
 *
 * Performs a basic connectivity test by opening a WebSocket connection to the relay.
 * Does not perform any Nostr protocol validation, just checks if the relay is reachable.
 *
 * @param relayUrl - WebSocket URL of the Nostr relay (e.g., 'wss://relay.damus.io')
 * @returns Promise resolving to true if relay is reachable, false otherwise
 *
 * @example
 * ```ts
 * const isHealthy = await checkRelayHealth('wss://relay.damus.io');
 * if (!isHealthy) {
 *   console.log('Relay is down, trying fallback...');
 * }
 * ```
 *
 * @see DEFAULT_RELAYS for commonly used relay URLs
 * @see fetchProfileFromRelay for full relay functionality testing
 */

/**
 * Fetch multiple profiles in parallel (with concurrency limit)
 */
export async function fetchNostrProfiles(
  npubs: string[]
): Promise<Map<string, NostrProfile>> {
  const results = new Map<string, NostrProfile>();

  // Fetch up to 10 profiles in parallel
  const batchSize = 10;
  for (let i = 0; i < npubs.length; i += batchSize) {
    const batch = npubs.slice(i, i + batchSize);
    const promises = batch.map(async (npub) => {
      const profile = await fetchNostrProfile(npub);
      if (profile) {
        results.set(npub, profile);
      }
    });
    await Promise.all(promises);
  }

  return results;
}
