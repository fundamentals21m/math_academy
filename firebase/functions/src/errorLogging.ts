import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

interface ClientErrorLog {
  message: string;
  details?: string;
  recoverable?: boolean;
  userAgent?: string;
  url?: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
}

const COLLECTION_NAME = 'errors';
const RETENTION_DAYS = 90;

/**
 * Cloud Function: Log client-side errors for monitoring
 */
export const logClientError = functions.https.onCall(
  async (data: ClientErrorLog, context) => {
    // Optional: Require authentication for error logging
    // Uncomment below to require auth
    // if (!context.auth) {
    //   throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
    // }

    const { message, details, recoverable, userAgent, url, severity } = data;

    if (!message || typeof message !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'message is required'
      );
    }

    const db = admin.firestore();
    const docRef = db.collection(COLLECTION_NAME).doc();
    const now = admin.firestore.FieldValue.serverTimestamp();

    // Determine severity based on message content if not specified
    let finalSeverity = severity || 'error';
    if (!severity) {
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('critical') || lowerMessage.includes('fatal')) {
        finalSeverity = 'critical';
      } else if (lowerMessage.includes('warning') || lowerMessage.includes('deprecated')) {
        finalSeverity = 'warning';
      }
    }

    const errorEntry = {
      id: docRef.id,
      timestamp: now,
      message: message.substring(0, 1000), // Truncate long messages
      details: details?.substring(0, 5000), // Truncate long details
      recoverable: recoverable ?? true,
      userAgent: userAgent?.substring(0, 500),
      url: url?.substring(0, 500),
      severity: finalSeverity,
      // Include user ID if authenticated (helps with debugging)
      userId: context.auth?.uid || null,
    };

    await docRef.set(errorEntry);

    // Schedule deletion for 90 days from now
    const deleteAt = new Date();
    deleteAt.setDate(deleteAt.getDate() + RETENTION_DAYS);
    await db.collection('errorsTTL').doc(docRef.id).set({
      deleteAt: admin.firestore.Timestamp.fromDate(deleteAt),
    });

    // Update error stats asynchronously
    updateErrorStatsAsync(finalSeverity).catch(err => {
      console.error('Failed to update error stats:', err);
    });

    return { success: true };
  }
);

/**
 * Update error statistics
 */
async function updateErrorStatsAsync(severity: string): Promise<void> {
  const db = admin.firestore();
  const statsRef = db.collection('errors').doc('stats');

  await db.runTransaction(async (transaction) => {
    const statsDoc = await transaction.get(statsRef);

    if (!statsDoc.exists) {
      // Create initial stats document
      transaction.set(statsRef, {
        id: 'stats',
        totalErrors: 1,
        errorsBySeverity: { [severity]: 1 },
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
      return;
    }

    const data = statsDoc.data()!;
    const newTotal = (data.totalErrors || 0) + 1;
    const newErrorsBySeverity = { ...data.errorsBySeverity };
    newErrorsBySeverity[severity] = (newErrorsBySeverity[severity] || 0) + 1;

    transaction.update(statsRef, {
      totalErrors: newTotal,
      errorsBySeverity: newErrorsBySeverity,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
}

/**
 * Cloud Function: Get error statistics (admin only)
 */
export const getErrorStats = functions.https.onCall(
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

    const db = admin.firestore();
    const statsDoc = await db.collection('errors').doc('stats').get();

    if (!statsDoc.exists) {
      return { stats: null };
    }

    return { stats: statsDoc.data() };
  }
);

/**
 * Cloud Function: Get recent errors (admin only)
 */
export const getRecentErrors = functions.https.onCall(
  async (data: { limit?: number; severity?: string }, context) => {
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

    const { limit = 50, severity } = data || {};
    const db = admin.firestore();

    let query = db.collection('errors')
      .orderBy('timestamp', 'desc')
      .limit(Math.min(limit, 100));

    if (severity) {
      query = query.where('severity', '==', severity);
    }

    const snapshot = await query.get();
    const errors = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore Timestamp to ISO string for JSON serialization
      timestamp: doc.data().timestamp?.toDate?.()?.toISOString() || doc.data().timestamp,
    }));

    return { errors };
  }
);

/**
 * Scheduled function to clean up old errors (runs daily)
 */
export const cleanupOldErrors = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async () => {
    const db = admin.firestore();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - RETENTION_DAYS);

    const expiredDocs = await db.collection('errorsTTL')
      .where('deleteAt', '<=', admin.firestore.Timestamp.fromDate(cutoff))
      .limit(500)
      .get();

    if (expiredDocs.empty) {
      return null;
    }

    const batch = db.batch();
    expiredDocs.forEach(doc => {
      batch.delete(doc.ref);
      // Also delete the actual error entry
      batch.delete(db.collection('errors').doc(doc.id));
    });

    await batch.commit();
    console.log(`Cleaned up ${expiredDocs.size} expired error entries`);
    return null;
  });
