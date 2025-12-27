/**
 * Tests for Admin Cloud Functions
 *
 * These tests verify the admin functions for user management:
 * - banUser: Ban a user from the leaderboard
 * - unbanUser: Unban a user
 * - resetUserScores: Reset a user's scores (for cheating)
 * - getAdminLogs: Retrieve admin action logs
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock firebase-admin before importing functions
vi.mock('firebase-admin', () => {
  const mockFieldValue = {
    serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
  };

  const mockFirestore = {
    collection: vi.fn(),
    batch: vi.fn(),
    FieldValue: mockFieldValue,
  };

  const mockAuth = {
    setCustomUserClaims: vi.fn().mockResolvedValue(undefined),
    createCustomToken: vi.fn().mockResolvedValue('mock-token'),
  };

  return {
    initializeApp: vi.fn(),
    firestore: vi.fn(() => mockFirestore),
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

describe('Admin Functions', () => {
  let mockUserDoc: { exists: boolean; data: () => Record<string, unknown> | undefined; ref: { update: ReturnType<typeof vi.fn> } };
  let mockCollectionRef: { doc: ReturnType<typeof vi.fn>; add: ReturnType<typeof vi.fn>; where: ReturnType<typeof vi.fn>; orderBy: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    vi.clearAllMocks();

    // Setup default mock user document
    mockUserDoc = {
      exists: true,
      data: () => ({ isAdmin: false, banned: false }),
      ref: { update: vi.fn().mockResolvedValue(undefined) },
    };

    // Setup collection mock
    mockCollectionRef = {
      doc: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue(mockUserDoc),
        update: vi.fn().mockResolvedValue(undefined),
      }),
      add: vi.fn().mockResolvedValue({ id: 'log-id' }),
      where: vi.fn().mockReturnThis(),
      orderBy: vi.fn().mockReturnThis(),
    };

    (admin.firestore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      collection: vi.fn().mockReturnValue(mockCollectionRef),
      batch: vi.fn().mockReturnValue({
        update: vi.fn(),
        delete: vi.fn(),
        commit: vi.fn().mockResolvedValue(undefined),
      }),
      FieldValue: {
        serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP'),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('banUser', () => {
    it('throws if not authenticated', async () => {
      const { banUser } = await import('../src/admin');

      await expect(
        (banUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123', reason: 'test' },
          { auth: undefined }
        )
      ).rejects.toThrow('Authentication required');
    });

    it('throws if targetNpub is missing', async () => {
      const { banUser } = await import('../src/admin');

      // Mock admin check to pass
      mockUserDoc.data = () => ({ isAdmin: true });

      await expect(
        (banUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { reason: 'test' },
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow('targetNpub is required');
    });

    it('throws if target user does not exist', async () => {
      const { banUser } = await import('../src/admin');

      // First call returns admin, second call returns non-existent user
      let callCount = 0;
      mockCollectionRef.doc.mockImplementation(() => ({
        get: vi.fn().mockImplementation(() => {
          callCount++;
          if (callCount === 1) {
            return Promise.resolve({ exists: true, data: () => ({ isAdmin: true }) });
          }
          return Promise.resolve({ exists: false, data: () => undefined });
        }),
      }));

      await expect(
        (banUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123' },
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow('User not found');
    });

    it('throws if trying to ban an admin', async () => {
      const { banUser } = await import('../src/admin');

      // Both admin check and target are admins
      mockCollectionRef.doc.mockReturnValue({
        get: vi.fn().mockResolvedValue({
          exists: true,
          data: () => ({ isAdmin: true }),
        }),
      });

      await expect(
        (banUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123' },
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow('Cannot ban an admin');
    });
  });

  describe('unbanUser', () => {
    it('throws if not authenticated', async () => {
      const { unbanUser } = await import('../src/admin');

      await expect(
        (unbanUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123' },
          { auth: undefined }
        )
      ).rejects.toThrow('Authentication required');
    });

    it('throws if targetNpub is missing', async () => {
      const { unbanUser } = await import('../src/admin');

      // Mock admin check to pass
      mockUserDoc.data = () => ({ isAdmin: true });

      await expect(
        (unbanUser as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          {},
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow('targetNpub is required');
    });
  });

  describe('resetUserScores', () => {
    it('throws if not authenticated', async () => {
      const { resetUserScores } = await import('../src/admin');

      await expect(
        (resetUserScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123', reason: 'cheating' },
          { auth: undefined }
        )
      ).rejects.toThrow('Authentication required');
    });

    it('throws if targetNpub is missing', async () => {
      const { resetUserScores } = await import('../src/admin');

      mockUserDoc.data = () => ({ isAdmin: true });

      await expect(
        (resetUserScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { reason: 'cheating' },
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow('targetNpub is required');
    });

    it('throws if trying to reset admin scores', async () => {
      const { resetUserScores } = await import('../src/admin');

      mockCollectionRef.doc.mockReturnValue({
        get: vi.fn().mockResolvedValue({
          exists: true,
          data: () => ({ isAdmin: true }),
        }),
      });

      await expect(
        (resetUserScores as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { targetNpub: 'npub123' },
          { auth: { uid: 'admin-npub' } }
        )
      ).rejects.toThrow("Cannot reset an admin's scores");
    });
  });

  describe('getAdminLogs', () => {
    it('throws if not authenticated', async () => {
      const { getAdminLogs } = await import('../src/admin');

      await expect(
        (getAdminLogs as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { limit: 50 },
          { auth: undefined }
        )
      ).rejects.toThrow('Authentication required');
    });

    it('throws if caller is not an admin', async () => {
      const { getAdminLogs } = await import('../src/admin');

      mockUserDoc.data = () => ({ isAdmin: false });

      await expect(
        (getAdminLogs as unknown as (data: unknown, context: unknown) => Promise<unknown>)(
          { limit: 50 },
          { auth: { uid: 'regular-user' } }
        )
      ).rejects.toThrow('Admin privileges required');
    });
  });
});
