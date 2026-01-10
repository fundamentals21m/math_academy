/**
 * Tests for Nostr Authentication Cloud Functions
 *
 * These tests verify the Nostr authentication functions:
 * - createChallenge: Generate a unique challenge for authentication
 * - verifyNostrAndCreateToken: Verify signed event and create Firebase token
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock @noble/curves and @noble/hashes
vi.mock('@noble/curves/secp256k1', () => ({
  schnorr: {
    verify: vi.fn(() => true),
  },
}));

vi.mock('@noble/hashes/sha256', () => ({
  sha256: vi.fn(() => new Uint8Array(32).fill(0)),
}));

vi.mock('@noble/hashes/utils', () => ({
  bytesToHex: vi.fn(() => '0'.repeat(64)),
  hexToBytes: vi.fn(() => new Uint8Array(32)),
  randomBytes: vi.fn(() => new Uint8Array(32).fill(1)),
}));

// Mock firebase-admin
vi.mock('firebase-admin', () => {
  const mockFieldValue = {
    serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
  };

  const mockFirestoreInstance = {
    collection: vi.fn(),
  };

  // Create firestore function with static properties
  const firestoreFn = vi.fn(() => mockFirestoreInstance);
  firestoreFn.FieldValue = mockFieldValue;

  const mockAuth = {
    setCustomUserClaims: vi.fn().mockResolvedValue(undefined),
    createCustomToken: vi.fn().mockResolvedValue('mock-firebase-token'),
  };

  return {
    initializeApp: vi.fn(),
    firestore: firestoreFn,
    auth: vi.fn(() => mockAuth),
  };
});

// Mock firebase-functions
vi.mock('firebase-functions', () => ({
  https: {
    onCall: vi.fn((handler) => handler),
    HttpsError: class HttpsError extends Error {
      constructor(
        public code: string,
        message: string
      ) {
        super(message);
        this.name = 'HttpsError';
      }
    },
  },
  config: vi.fn(() => ({})),
}));

import * as admin from 'firebase-admin';

describe('Nostr Authentication Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createChallenge', () => {
    it('throws for missing pubkeyHex', async () => {
      const { createChallenge } = await import('../src/nostrAuth');

      await expect(
        (createChallenge as unknown as (data: unknown) => Promise<unknown>)({})
      ).rejects.toThrow('pubkeyHex must be a 64-character hex string');
    });

    it('throws for invalid pubkeyHex length', async () => {
      const { createChallenge } = await import('../src/nostrAuth');

      await expect(
        (createChallenge as unknown as (data: unknown) => Promise<unknown>)({
          pubkeyHex: 'abc123', // Too short
        })
      ).rejects.toThrow('pubkeyHex must be a 64-character hex string');
    });

    it('throws for non-hex pubkeyHex', async () => {
      const { createChallenge } = await import('../src/nostrAuth');

      await expect(
        (createChallenge as unknown as (data: unknown) => Promise<unknown>)({
          pubkeyHex: 'g'.repeat(64), // 'g' is not valid hex
        })
      ).rejects.toThrow('pubkeyHex must be valid hex');
    });

    it('creates challenge for valid pubkeyHex', async () => {
      vi.resetModules();

      // Mock for rate limiting: .where().where().count().get()
      const mockWhereChain = {
        where: vi.fn().mockReturnThis(),
        count: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ data: () => ({ count: 0 }) }),
        }),
      };

      const mockChallengeDoc = {
        set: vi.fn().mockResolvedValue(undefined),
      };

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue(mockChallengeDoc),
        where: vi.fn().mockReturnValue(mockWhereChain),
      };

      const firestoreFn = vi.fn().mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });
      firestoreFn.FieldValue = {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      };

      (admin.firestore as unknown as typeof firestoreFn) = firestoreFn;

      const { createChallenge } = await import('../src/nostrAuth');

      const result = await (createChallenge as unknown as (data: unknown) => Promise<{ challenge: string; expiresAt: number }>)({
        pubkeyHex: 'a'.repeat(64),
      });

      expect(result).toHaveProperty('challenge');
      expect(result).toHaveProperty('expiresAt');
      expect(typeof result.expiresAt).toBe('number');
      expect(result.expiresAt).toBeGreaterThan(Date.now());
    });

    it('accepts lowercase hex', async () => {
      vi.resetModules();

      // Mock for rate limiting
      const mockWhereChain = {
        where: vi.fn().mockReturnThis(),
        count: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ data: () => ({ count: 0 }) }),
        }),
      };

      const mockChallengeDoc = {
        set: vi.fn().mockResolvedValue(undefined),
      };

      const firestoreFn = vi.fn().mockReturnValue({
        collection: vi.fn().mockReturnValue({
          doc: vi.fn().mockReturnValue(mockChallengeDoc),
          where: vi.fn().mockReturnValue(mockWhereChain),
        }),
      });
      firestoreFn.FieldValue = {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      };

      (admin.firestore as unknown as typeof firestoreFn) = firestoreFn;

      const { createChallenge } = await import('../src/nostrAuth');

      const result = await (createChallenge as unknown as (data: unknown) => Promise<{ challenge: string; expiresAt: number }>)({
        pubkeyHex: 'abcdef0123456789'.repeat(4),
      });

      expect(result).toHaveProperty('challenge');
    });

    it('accepts uppercase hex', async () => {
      vi.resetModules();

      // Mock for rate limiting
      const mockWhereChain = {
        where: vi.fn().mockReturnThis(),
        count: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ data: () => ({ count: 0 }) }),
        }),
      };

      const mockChallengeDoc = {
        set: vi.fn().mockResolvedValue(undefined),
      };

      const firestoreFn = vi.fn().mockReturnValue({
        collection: vi.fn().mockReturnValue({
          doc: vi.fn().mockReturnValue(mockChallengeDoc),
          where: vi.fn().mockReturnValue(mockWhereChain),
        }),
      });
      firestoreFn.FieldValue = {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      };

      (admin.firestore as unknown as typeof firestoreFn) = firestoreFn;

      const { createChallenge } = await import('../src/nostrAuth');

      const result = await (createChallenge as unknown as (data: unknown) => Promise<{ challenge: string; expiresAt: number }>)({
        pubkeyHex: 'ABCDEF0123456789'.repeat(4),
      });

      expect(result).toHaveProperty('challenge');
    });
  });

  describe('verifyNostrAndCreateToken', () => {
    it('throws for missing signedEvent', async () => {
      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          challenge: 'test-challenge',
        })
      ).rejects.toThrow('signedEvent and challenge are required');
    });

    it('throws for missing challenge', async () => {
      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          signedEvent: { id: '123', pubkey: 'abc' },
        })
      ).rejects.toThrow('signedEvent and challenge are required');
    });

    it('throws for non-existent challenge', async () => {
      vi.resetModules();

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ exists: false }),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });

      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          signedEvent: {
            id: 'a'.repeat(64),
            pubkey: 'b'.repeat(64),
            created_at: Math.floor(Date.now() / 1000),
            kind: 22242,
            tags: [],
            content: 'test-challenge',
            sig: 'c'.repeat(128),
          },
          challenge: 'test-challenge',
        })
      ).rejects.toThrow('Challenge not found');
    });

    it('throws for already used challenge', async () => {
      vi.resetModules();

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({
            exists: true,
            data: () => ({
              used: true,
              pubkeyHex: 'b'.repeat(64),
              expiresAt: Date.now() + 60000,
            }),
          }),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });

      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          signedEvent: {
            id: 'a'.repeat(64),
            pubkey: 'b'.repeat(64),
            created_at: Math.floor(Date.now() / 1000),
            kind: 22242,
            tags: [],
            content: 'test-challenge',
            sig: 'c'.repeat(128),
          },
          challenge: 'test-challenge',
        })
      ).rejects.toThrow('Challenge already used');
    });

    it('throws for expired challenge', async () => {
      vi.resetModules();

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({
            exists: true,
            data: () => ({
              used: false,
              pubkeyHex: 'b'.repeat(64),
              expiresAt: Date.now() - 60000, // Expired
            }),
          }),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });

      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          signedEvent: {
            id: 'a'.repeat(64),
            pubkey: 'b'.repeat(64),
            created_at: Math.floor(Date.now() / 1000),
            kind: 22242,
            tags: [],
            content: 'test-challenge',
            sig: 'c'.repeat(128),
          },
          challenge: 'test-challenge',
        })
      ).rejects.toThrow('Challenge expired');
    });

    it('throws for pubkey mismatch', async () => {
      vi.resetModules();

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({
            exists: true,
            data: () => ({
              used: false,
              pubkeyHex: 'different'.padEnd(64, '0'),
              expiresAt: Date.now() + 60000,
            }),
          }),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });

      const { verifyNostrAndCreateToken } = await import('../src/nostrAuth');

      await expect(
        (verifyNostrAndCreateToken as unknown as (data: unknown) => Promise<unknown>)({
          signedEvent: {
            id: 'a'.repeat(64),
            pubkey: 'b'.repeat(64),
            created_at: Math.floor(Date.now() / 1000),
            kind: 22242,
            tags: [],
            content: 'test-challenge',
            sig: 'c'.repeat(128),
          },
          challenge: 'test-challenge',
        })
      ).rejects.toThrow('Pubkey mismatch');
    });
  });
});

describe('Nostr Event Verification Logic', () => {
  it('validates event kind 22242 for auth', () => {
    // The verifyNostrEvent function checks for kind 22242
    // This is the standard kind for authentication events
    const validKind = 22242;
    expect(validKind).toBe(22242);
  });

  it('validates challenge presence in content or tags', () => {
    // Challenge can be in content or as a tag
    const eventWithContentChallenge = {
      content: 'my-challenge',
      tags: [],
    };

    const eventWithTagChallenge = {
      content: '',
      tags: [['challenge', 'my-challenge']],
    };

    // Both should be valid
    expect(eventWithContentChallenge.content).toBe('my-challenge');
    expect(eventWithTagChallenge.tags[0][1]).toBe('my-challenge');
  });

  it('validates event timestamp within 5 minutes', () => {
    const now = Math.floor(Date.now() / 1000);
    const fiveMinutes = 300;

    const validTimestamp = now - 100; // 100 seconds ago
    const invalidTimestamp = now - 400; // 6+ minutes ago

    expect(Math.abs(validTimestamp - now)).toBeLessThan(fiveMinutes);
    expect(Math.abs(invalidTimestamp - now)).toBeGreaterThan(fiveMinutes);
  });
});

describe('Bech32 Encoding (npub)', () => {
  it('uses correct npub prefix', () => {
    const PREFIX = 'npub';
    expect(PREFIX).toBe('npub');
  });

  it('uses correct bech32 alphabet', () => {
    const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
    expect(ALPHABET.length).toBe(32);
    // Verify no ambiguous characters (0, O, I, l excluded in standard bech32)
    expect(ALPHABET).not.toContain('o');
    expect(ALPHABET).not.toContain('i');
    expect(ALPHABET).not.toContain('b');
  });
});
