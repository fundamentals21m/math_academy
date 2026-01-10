/**
 * Tests for Error Logging Cloud Functions
 *
 * These tests verify the client-side error logging functionality:
 * - logClientError: Log client errors to Firestore
 * - getErrorStats: Retrieve error statistics
 * - getRecentErrors: Get recent errors
 */

import { describe, it, expect, beforeEach, afterEach, vi, Mock } from 'vitest';

// Mock firebase-admin
vi.mock('firebase-admin', () => {
  const mockFieldValue = {
    serverTimestamp: vi.fn(() => ({ toDate: () => new Date() })),
    increment: vi.fn((n: number) => ({ __type: 'increment', value: n })),
  };

  return {
    initializeApp: vi.fn(),
    firestore: vi.fn(),
    auth: vi.fn(),
    FieldValue: mockFieldValue,
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
  pubsub: {
    schedule: vi.fn(() => ({
      onRun: vi.fn((handler) => handler),
    })),
  },
  config: vi.fn(() => ({})),
  logger: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  },
}));

import * as admin from 'firebase-admin';

describe('Error Logging Functions', () => {
  let mockErrorsCollection: {
    doc: ReturnType<typeof vi.fn>;
    add: ReturnType<typeof vi.fn>;
    where: ReturnType<typeof vi.fn>;
    orderBy: ReturnType<typeof vi.fn>;
    limit: ReturnType<typeof vi.fn>;
    get: ReturnType<typeof vi.fn>;
  };
  let mockStatsDoc: {
    exists: boolean;
    data: () => Record<string, unknown> | undefined;
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockStatsDoc = {
      exists: true,
      data: () => ({
        totalErrors: 50,
        errorCounts: { TypeError: 20, ReferenceError: 10 },
        severityCounts: { high: 5, medium: 25, low: 20 },
        lastUpdated: new Date(),
      }),
    };

    mockErrorsCollection = {
      doc: vi.fn((docId: string) => {
        // Return stats document when accessing 'stats' doc
        if (docId === 'stats') {
          return {
            get: vi.fn().mockResolvedValue(mockStatsDoc),
            set: vi.fn().mockResolvedValue(undefined),
            update: vi.fn().mockResolvedValue(undefined),
          };
        }
        return {
          set: vi.fn().mockResolvedValue(undefined),
          get: vi.fn().mockResolvedValue({ exists: false }),
        };
      }),
      add: vi.fn().mockResolvedValue({ id: 'error-123' }),
      where: vi.fn().mockReturnThis(),
      orderBy: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      get: vi.fn().mockResolvedValue({
        docs: [
          {
            id: 'error-1',
            data: () => ({
              message: 'TypeError: Cannot read property of undefined',
              stack: 'at line 10',
              severity: 'high',
              timestamp: new Date(),
              url: '/quiz',
              userAgent: 'Mozilla/5.0',
            }),
          },
        ],
        size: 1,
      }),
    };

    (admin.firestore as unknown as Mock).mockReturnValue({
      collection: vi.fn((path: string) => {
        if (path === 'errors') return mockErrorsCollection;
        if (path === 'users') return {
          doc: vi.fn((uid: string) => ({
            get: vi.fn().mockResolvedValue({
              exists: true,
              data: () => ({ isAdmin: uid === 'admin-1' }),
            }),
          })),
        };
        return {
          doc: vi.fn().mockReturnValue({
            get: vi.fn().mockResolvedValue({ exists: false }),
            set: vi.fn().mockResolvedValue(undefined),
          }),
        };
      }),
      batch: vi.fn().mockReturnValue({
        set: vi.fn(),
        update: vi.fn(),
        commit: vi.fn().mockResolvedValue(undefined),
      }),
      FieldValue: {
        serverTimestamp: vi.fn(() => ({ toDate: () => new Date() })),
        increment: vi.fn((n: number) => ({ __type: 'increment', value: n })),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getErrorStats', () => {
    it('throws if not authenticated', async () => {
      const { getErrorStats } = await import('../src/errorLogging');

      await expect(
        getErrorStats({ data: {} }, { auth: null } as any)
      ).rejects.toThrow('Authentication required');
    });

    it('throws if not admin', async () => {
      const { getErrorStats } = await import('../src/errorLogging');

      await expect(
        getErrorStats({ data: {} }, { auth: { uid: 'user-1' } } as any)
      ).rejects.toThrow('Admin privileges required');
    });

    it('returns statistics for admin', async () => {
      const { getErrorStats } = await import('../src/errorLogging');

      const result = await getErrorStats(
        { data: {} },
        { auth: { uid: 'admin-1' } } as any
      );

      expect(result.stats).toBeDefined();
      expect(result.stats.totalErrors).toBe(50);
    });
  });

  describe('getRecentErrors', () => {
    it('throws if not authenticated', async () => {
      const { getRecentErrors } = await import('../src/errorLogging');

      await expect(
        getRecentErrors({ data: { limit: 10 } }, { auth: null } as any)
      ).rejects.toThrow('Authentication required');
    });

    it('throws if not admin', async () => {
      const { getRecentErrors } = await import('../src/errorLogging');

      await expect(
        getRecentErrors({ data: { limit: 10 } }, { auth: { uid: 'user-1' } } as any)
      ).rejects.toThrow('Admin privileges required');
    });

    it('returns recent errors for admin', async () => {
      const { getRecentErrors } = await import('../src/errorLogging');

      const result = await getRecentErrors(
        { data: { limit: 20 } },
        { auth: { uid: 'admin-1' } } as any
      );

      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].message).toBe('TypeError: Cannot read property of undefined');
    });

    it('respects limit parameter', async () => {
      const { getRecentErrors } = await import('../src/errorLogging');

      await getRecentErrors(
        { data: { limit: 50 } },
        { auth: { uid: 'admin-1' } } as any
      );

      expect(mockErrorsCollection.limit).toHaveBeenCalledWith(50);
    });
  });
});
