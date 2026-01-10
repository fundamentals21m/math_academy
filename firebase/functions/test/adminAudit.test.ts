/**
 * Tests for Admin Audit Cloud Functions
 *
 * These tests verify the admin audit logging functionality:
 * - logAdminAction: Log admin actions to Firestore
 * - getAdminAuditLogs: Retrieve audit logs
 * - getAdminAuditStats: Get audit statistics
 */

import { describe, it, expect, beforeEach, afterEach, vi, Mock } from 'vitest';

// Mock firebase-admin
vi.mock('firebase-admin', () => {
  const mockFieldValue = {
    serverTimestamp: vi.fn(() => ({ toDate: () => new Date() })),
    increment: vi.fn((n: number) => ({ __type: 'increment', value: n })),
  };

  const mockFirestore = {
    collection: vi.fn(),
    batch: vi.fn(),
    FieldValue: mockFieldValue,
  };

  return {
    initializeApp: vi.fn(),
    firestore: vi.fn(() => mockFirestore),
    auth: vi.fn(),
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

describe('Admin Audit Functions', () => {
  let mockLogsCollection: {
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
        totalActions: 100,
        actionCounts: { ban: 10, unban: 5, reset_scores: 3 },
        adminCounts: { 'admin-1': 18 },
        lastUpdated: new Date(),
      }),
    };

    mockLogsCollection = {
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
      add: vi.fn().mockResolvedValue({ id: 'log-123' }),
      where: vi.fn().mockReturnThis(),
      orderBy: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      get: vi.fn().mockResolvedValue({
        docs: [
          {
            id: 'log-1',
            data: () => ({
              adminId: 'admin-1',
              action: 'ban',
              targetId: 'user-123',
              timestamp: new Date(),
              details: { reason: 'Spam' },
            }),
          },
          {
            id: 'log-2',
            data: () => ({
              adminId: 'admin-1',
              action: 'reset_scores',
              targetId: 'user-456',
              timestamp: new Date(),
              details: {},
            }),
          },
        ],
        size: 2,
      }),
    };

    (admin.firestore as unknown as Mock).mockReturnValue({
      collection: vi.fn((path: string) => {
        if (path === 'adminAuditLog') return mockLogsCollection;
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

  describe('getAdminAuditLogs', () => {
    it('throws if not authenticated', async () => {
      const { getAdminAuditLogs } = await import('../src/adminAudit');

      await expect(
        getAdminAuditLogs({ data: { limit: 10 } }, { auth: null } as any)
      ).rejects.toThrow('Authentication required');
    });

    it('throws if not admin', async () => {
      const { getAdminAuditLogs } = await import('../src/adminAudit');

      await expect(
        getAdminAuditLogs({ data: { limit: 10 } }, { auth: { uid: 'user-1' } } as any)
      ).rejects.toThrow('Admin privileges required');
    });

    it('returns audit logs for admin', async () => {
      const { getAdminAuditLogs } = await import('../src/adminAudit');
      
      const result = await getAdminAuditLogs(
        { data: { limit: 50 } },
        { auth: { uid: 'admin-1' } } as any
      );

      expect(result.logs).toHaveLength(2);
      expect(result.logs[0].adminId).toBe('admin-1');
      expect(result.logs[0].action).toBe('ban');
    });

    it('respects limit parameter', async () => {
      const { getAdminAuditLogs } = await import('../src/adminAudit');

      await getAdminAuditLogs(
        { limit: 10 },
        { auth: { uid: 'admin-1' } } as any
      );

      expect(mockLogsCollection.limit).toHaveBeenCalledWith(10);
    });
  });

  describe('getAdminAuditStats', () => {
    it('throws if not authenticated', async () => {
      const { getAdminAuditStats } = await import('../src/adminAudit');

      await expect(
        getAdminAuditStats({}, { auth: null } as any)
      ).rejects.toThrow('Authentication required');
    });

    it('returns statistics for admin', async () => {
      const { getAdminAuditStats } = await import('../src/adminAudit');

      const result = await getAdminAuditStats(
        {},
        { auth: { uid: 'admin-1' } } as any
      );

      expect(result.stats.totalActions).toBe(100);
      expect(result.stats.actionCounts).toEqual({ ban: 10, unban: 5, reset_scores: 3 });
      expect(result.stats.adminCounts).toEqual({ 'admin-1': 18 });
    });
  });
});
