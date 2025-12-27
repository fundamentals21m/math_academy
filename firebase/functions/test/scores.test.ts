/**
 * Tests for Scores Cloud Functions
 *
 * These tests verify the score management functions:
 * - syncScores: Update user scores from client sync
 * - getLeaderboard: Get leaderboard for a specific course or overall
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock firebase-admin before importing functions
vi.mock('firebase-admin', () => {
  const mockFieldValue = {
    serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
  };

  const mockFieldPath = {
    documentId: vi.fn(() => '__name__'),
  };

  const mockFirestoreInstance = {
    collection: vi.fn(),
    batch: vi.fn(),
  };

  // Create firestore function with static properties
  const firestoreFn = vi.fn(() => mockFirestoreInstance);
  firestoreFn.FieldValue = mockFieldValue;
  firestoreFn.FieldPath = mockFieldPath;

  const mockAuth = {
    setCustomUserClaims: vi.fn().mockResolvedValue(undefined),
    createCustomToken: vi.fn().mockResolvedValue('mock-token'),
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

describe('Scores Functions', () => {
  let mockUserDoc: {
    exists: boolean;
    data: () => Record<string, unknown> | undefined;
    ref: { update: ReturnType<typeof vi.fn> };
  };
  let mockBatch: {
    set: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    commit: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockUserDoc = {
      exists: true,
      data: () => ({ banned: false, totalXP: 100, level: 1 }),
      ref: { update: vi.fn().mockResolvedValue(undefined) },
    };

    mockBatch = {
      set: vi.fn(),
      update: vi.fn(),
      commit: vi.fn().mockResolvedValue(undefined),
    };

    const mockCollectionRef = {
      doc: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue(mockUserDoc),
        set: vi.fn().mockResolvedValue(undefined),
      }),
      where: vi.fn().mockReturnThis(),
      orderBy: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      get: vi.fn().mockResolvedValue({ docs: [] }),
      count: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue({ data: () => ({ count: 0 }) }),
      }),
    };

    (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      collection: vi.fn().mockReturnValue(mockCollectionRef),
      batch: vi.fn().mockReturnValue(mockBatch),
      FieldValue: {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      },
      FieldPath: {
        documentId: vi.fn(() => '__name__'),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('syncScores', () => {
    it('throws if not authenticated', async () => {
      const { syncScores } = await import('../src/scores');

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: [{ courseId: 'crypto', xp: 100 }] },
          { auth: undefined }
        )
      ).rejects.toThrow('Authentication required');
    });

    it('throws if scores is not an array', async () => {
      const { syncScores } = await import('../src/scores');

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: 'not-an-array' },
          { auth: { uid: 'npub123' } }
        )
      ).rejects.toThrow('scores must be an array');
    });

    it('throws if user does not exist', async () => {
      const { syncScores } = await import('../src/scores');

      mockUserDoc.exists = false;

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: [{ courseId: 'crypto', xp: 100 }] },
          { auth: { uid: 'npub123' } }
        )
      ).rejects.toThrow('User not found. Please authenticate first.');
    });

    it('throws if user is banned', async () => {
      const { syncScores } = await import('../src/scores');

      mockUserDoc.data = () => ({ banned: true });

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: [{ courseId: 'crypto', xp: 100 }] },
          { auth: { uid: 'npub123' } }
        )
      ).rejects.toThrow('User is banned');
    });

    it('throws for invalid courseId', async () => {
      const { syncScores } = await import('../src/scores');

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: [{ courseId: 'invalid-course', xp: 100 }] },
          { auth: { uid: 'npub123' } }
        )
      ).rejects.toThrow('Invalid courseId: invalid-course');
    });

    it('throws for negative XP', async () => {
      const { syncScores } = await import('../src/scores');

      await expect(
        (syncScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { scores: [{ courseId: 'crypto', xp: -100 }] },
          { auth: { uid: 'npub123' } }
        )
      ).rejects.toThrow('xp must be a non-negative number');
    });

    it('accepts valid course IDs', async () => {
      const validCourses = ['ba', 'crypto', 'aa', 'linalg', 'advlinalg'];

      for (const courseId of validCourses) {
        // Reset mocks for each iteration
        vi.clearAllMocks();

        mockUserDoc = {
          exists: true,
          data: () => ({ banned: false }),
          ref: { update: vi.fn().mockResolvedValue(undefined) },
        };

        const mockCollectionRef = {
          doc: vi.fn().mockReturnValue({
            get: vi.fn().mockResolvedValue(mockUserDoc),
            set: vi.fn().mockResolvedValue(undefined),
          }),
        };

        const firestoreFn = vi.fn().mockReturnValue({
          collection: vi.fn().mockReturnValue(mockCollectionRef),
          batch: vi.fn().mockReturnValue(mockBatch),
        });
        firestoreFn.FieldValue = {
          serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
        };
        firestoreFn.FieldPath = {
          documentId: vi.fn(() => '__name__'),
        };

        (admin.firestore as unknown as typeof firestoreFn) = firestoreFn;

        // Re-import to get fresh module with new mocks
        vi.resetModules();
        const { syncScores } = await import('../src/scores');

        const result = await (syncScores as unknown as (data: unknown, context: unknown) => Promise<{ success: boolean; totalXP: number }>)(
          { scores: [{ courseId, xp: 100 }] },
          { auth: { uid: 'npub123' } }
        );

        expect(result.success).toBe(true);
      }
    });
  });

  describe('getLeaderboard', () => {
    it('throws for invalid courseId', async () => {
      const { getLeaderboard } = await import('../src/scores');

      await expect(
        (getLeaderboard as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { courseId: 'invalid' },
          {}
        )
      ).rejects.toThrow('courseId must be "ba", "crypto", "aa", "linalg", "advlinalg", or "overall"');
    });

    it('throws for missing courseId', async () => {
      const { getLeaderboard } = await import('../src/scores');

      await expect(
        (getLeaderboard as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          {},
          {}
        )
      ).rejects.toThrow('courseId must be "ba", "crypto", "aa", "linalg", "advlinalg", or "overall"');
    });

    it('accepts overall as courseId', async () => {
      vi.resetModules();

      const mockUsersSnapshot = {
        docs: [
          {
            id: 'npub1',
            data: () => ({ displayName: 'User1', totalXP: 500, level: 5 }),
          },
          {
            id: 'npub2',
            data: () => ({ displayName: 'User2', totalXP: 300, level: 3 }),
          },
        ],
      };

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ exists: false }),
        }),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue(mockUsersSnapshot),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
        FieldPath: {
          documentId: vi.fn(() => '__name__'),
        },
      });

      const { getLeaderboard } = await import('../src/scores');

      const result = await (getLeaderboard as unknown as (data: unknown, context: unknown) => Promise<{ rankings: unknown[]; userRank: number | null }>)(
        { courseId: 'overall', limit: 10 },
        {}
      );

      expect(result.rankings).toHaveLength(2);
      expect(result.rankings[0]).toEqual({
        rank: 1,
        npub: 'npub1',
        displayName: 'User1',
        xp: 500,
        level: 5,
      });
    });

    it('accepts valid course-specific leaderboard requests', async () => {
      vi.resetModules();

      const mockScoresSnapshot = {
        docs: [
          {
            data: () => ({ npub: 'npub1', courseId: 'crypto', xp: 200 }),
          },
        ],
      };

      const mockUserDocs = {
        docs: [
          {
            id: 'npub1',
            data: () => ({ displayName: 'CryptoMaster', level: 4, banned: false }),
          },
        ],
      };

      const mockCollectionRef = {
        doc: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ exists: false }),
        }),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue(mockScoresSnapshot),
        }),
        get: vi.fn().mockResolvedValue(mockUserDocs),
      };

      const firestoreFn = vi.fn().mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });
      firestoreFn.FieldPath = {
        documentId: vi.fn(() => '__name__'),
      };
      firestoreFn.FieldValue = {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      };

      (admin.firestore as unknown as typeof firestoreFn) = firestoreFn;

      const { getLeaderboard } = await import('../src/scores');

      const result = await (getLeaderboard as unknown as (data: unknown, context: unknown) => Promise<{ rankings: unknown[]; userRank: number | null }>)(
        { courseId: 'crypto', limit: 50 },
        {}
      );

      expect(result.rankings).toHaveLength(1);
      expect(result.userRank).toBeNull();
    });

    it('enforces limit maximum of 100', async () => {
      vi.resetModules();

      const mockCollectionRef = {
        doc: vi.fn(),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnValue({
          get: vi.fn().mockResolvedValue({ docs: [] }),
        }),
      };

      (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
        collection: vi.fn().mockReturnValue(mockCollectionRef),
      });

      const { getLeaderboard } = await import('../src/scores');

      await (getLeaderboard as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
        { courseId: 'overall', limit: 500 },
        {}
      );

      // Verify limit was capped at 100
      expect(mockCollectionRef.limit).toHaveBeenCalledWith(100);
    });
  });
});
