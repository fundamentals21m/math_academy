import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Admin action types for audit logging
type AdminAction = 
  | 'ban' 
  | 'unban' 
  | 'reset_scores' 
  | 'update_xp' 
  | 'create_course' 
  | 'update_course' 
  | 'delete_course'
  | 'create_section'
  | 'update_section'
  | 'delete_section'
  | 'reorder_sections'
  | 'reorder_courses'
  | 'add_course_admin'
  | 'remove_course_admin';

interface AdminAuditLog {
  id: string;
  timestamp: admin.firestore.FieldValue;
  action: AdminAction;
  adminNpub: string;
  targetNpub?: string;
  targetCourseId?: string;
  reason?: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
}

// Stats interface - exported for potential future use
export interface AdminAuditStats {
  id: string;
  totalActions: number;
  actionsByType: Record<string, number>;
  actionsByAdmin: Record<string, number>;
  recentActions: AdminAuditLog[];
  lastUpdated: admin.firestore.FieldValue;
}

const COLLECTION_NAME = 'adminAuditLog';
const STATS_DOC_ID = 'stats';
const RETENTION_DAYS = 90;

/**
 * Log an admin action to Firestore for audit purposes
 */
export async function logAdminAction(
  action: AdminAuditLog['action'],
  adminNpub: string,
  options: {
    targetNpub?: string;
    targetCourseId?: string;
    reason?: string;
    metadata?: Record<string, unknown>;
    ipAddress?: string;
  } = {}
): Promise<string> {
  const db = admin.firestore();
  const docRef = db.collection(COLLECTION_NAME).doc();
  const now = admin.firestore.FieldValue.serverTimestamp();

  const logEntry: Partial<AdminAuditLog> = {
    id: docRef.id,
    timestamp: now,
    action,
    adminNpub,
  };

  // Only add optional fields if they are defined
  if (options.targetNpub !== undefined) logEntry.targetNpub = options.targetNpub;
  if (options.targetCourseId !== undefined) logEntry.targetCourseId = options.targetCourseId;
  if (options.reason !== undefined) logEntry.reason = options.reason;
  if (options.metadata !== undefined) logEntry.metadata = options.metadata;
  if (options.ipAddress !== undefined) logEntry.ipAddress = options.ipAddress;

  await docRef.set(logEntry as AdminAuditLog);

  // Update stats asynchronously (non-blocking)
  updateStatsAsync(action, adminNpub).catch(err => {
    console.error('Failed to update admin audit stats:', err);
  });

  // Schedule deletion for 90 days from now
  const deleteAt = new Date();
  deleteAt.setDate(deleteAt.getDate() + RETENTION_DAYS);
  await db.collection('adminAuditLogTTL').doc(docRef.id).set({
    deleteAt: admin.firestore.Timestamp.fromDate(deleteAt),
  });

  return docRef.id;
}

/**
 * Update statistics for admin actions (async, non-blocking)
 */
async function updateStatsAsync(action: string, adminNpub: string): Promise<void> {
  const db = admin.firestore();
  const statsRef = db.collection(COLLECTION_NAME).doc(STATS_DOC_ID);

  await db.runTransaction(async (transaction) => {
    const statsDoc = await transaction.get(statsRef);

    if (!statsDoc.exists) {
      // Create initial stats document
      transaction.set(statsRef, {
        id: STATS_DOC_ID,
        totalActions: 1,
        actionsByType: { [action]: 1 },
        actionsByAdmin: { [adminNpub]: 1 },
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
      return;
    }

    const data = statsDoc.data()!;
    const newTotal = (data.totalActions || 0) + 1;
    const newActionsByType = { ...data.actionsByType };
    newActionsByType[action] = (newActionsByType[action] || 0) + 1;

    const newActionsByAdmin = { ...data.actionsByAdmin };
    newActionsByAdmin[adminNpub] = (newActionsByAdmin[adminNpub] || 0) + 1;

    transaction.update(statsRef, {
      totalActions: newTotal,
      actionsByType: newActionsByType,  // Fixed: was incorrectly using newActionsByAdmin
      actionsByAdmin: newActionsByAdmin,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
}

/**
 * Get recent admin audit logs
 */
export async function getRecentAuditLogs(limit: number = 50): Promise<AdminAuditLog[]> {
  const db = admin.firestore();
  const snapshot = await db.collection(COLLECTION_NAME)
    .orderBy('timestamp', 'desc')
    .limit(limit)
    .get();

  return snapshot.docs.map(doc => doc.data() as AdminAuditLog);
}

/**
 * Get audit stats
 */
export async function getAuditStats(): Promise<AdminAuditLog | null> {
  const db = admin.firestore();
  const doc = await db.collection(COLLECTION_NAME).doc(STATS_DOC_ID).get();
  return doc.exists ? doc.data() as AdminAuditLog : null;
}

/**
 * Cloud Function: Get admin audit logs
 */
export const getAdminAuditLogs = functions.https.onCall(
  async (data: { limit?: number }, context) => {
    // Verify admin
    if (!context.auth?.uid) {
      throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
    }

    const userDoc = await admin.firestore()
      .collection('users')
      .doc(context.auth.uid)
      .get();

    if (!userDoc.exists || !userDoc.data()?.isAdmin) {
      throw new functions.https.HttpsError('permission-denied', 'Admin privileges required');
    }

    const limit = Math.min(data.limit || 50, 100);
    const logs = await getRecentAuditLogs(limit);

    return { logs };
  }
);

/**
 * Cloud Function: Get admin audit stats
 */
export const getAdminAuditStats = functions.https.onCall(
  async (_data, context) => {
    // Verify admin
    if (!context.auth?.uid) {
      throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
    }

    const userDoc = await admin.firestore()
      .collection('users')
      .doc(context.auth.uid)
      .get();

    if (!userDoc.exists || !userDoc.data()?.isAdmin) {
      throw new functions.https.HttpsError('permission-denied', 'Admin privileges required');
    }

    const stats = await getAuditStats();
    return { stats };
  }
);

/**
 * Scheduled function to clean up old audit logs (runs daily)
 */
export const cleanupOldAuditLogs = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async () => {
    const db = admin.firestore();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - RETENTION_DAYS);

    const expiredDocs = await db.collection('adminAuditLogTTL')
      .where('deleteAt', '<=', admin.firestore.Timestamp.fromDate(cutoff))
      .limit(500)
      .get();

    if (expiredDocs.empty) {
      return null;
    }

    const batch = db.batch();
    expiredDocs.forEach(doc => {
      batch.delete(doc.ref);
      // Also delete the actual log entry
      batch.delete(db.collection(COLLECTION_NAME).doc(doc.id));
    });

    await batch.commit();
    console.log(`Cleaned up ${expiredDocs.size} expired audit log entries`);
    return null;
  });
