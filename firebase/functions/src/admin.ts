import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

interface AuthContext {
  uid: string;
  token?: Record<string, unknown>;
}

/**
 * Check if the caller is an admin
 */
async function requireAdmin(auth: AuthContext | undefined): Promise<void> {
  if (!auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Authentication required'
    );
  }

  const userDoc = await admin.firestore()
    .collection('users')
    .doc(auth.uid)
    .get();

  if (!userDoc.exists || !userDoc.data()?.isAdmin) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Admin privileges required'
    );
  }
}

/**
 * Ban a user from the leaderboard
 */
export const banUser = functions.https.onCall(
  async (
    data: { targetNpub?: string; reason?: string },
    context
  ): Promise<{ success: boolean }> => {
    await requireAdmin(context.auth);

    const { targetNpub, reason } = data || {};

    if (!targetNpub || typeof targetNpub !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'targetNpub is required'
      );
    }

    const userRef = admin.firestore().collection('users').doc(targetNpub);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'User not found'
      );
    }

    // Cannot ban another admin
    if (userDoc.data()?.isAdmin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Cannot ban an admin'
      );
    }

    await userRef.update({
      banned: true,
      bannedAt: admin.firestore.FieldValue.serverTimestamp(),
      bannedBy: context.auth!.uid,
      banReason: reason || null,
    });

    // Log the action
    await admin.firestore().collection('adminLogs').add({
      action: 'ban',
      targetNpub,
      adminNpub: context.auth!.uid,
      reason: reason || null,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  }
);

/**
 * Unban a user
 */
export const unbanUser = functions.https.onCall(
  async (
    data: { targetNpub?: string },
    context
  ): Promise<{ success: boolean }> => {
    await requireAdmin(context.auth);

    const { targetNpub } = data || {};

    if (!targetNpub || typeof targetNpub !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'targetNpub is required'
      );
    }

    const userRef = admin.firestore().collection('users').doc(targetNpub);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'User not found'
      );
    }

    await userRef.update({
      banned: false,
      unbannedAt: admin.firestore.FieldValue.serverTimestamp(),
      unbannedBy: context.auth!.uid,
    });

    // Log the action
    await admin.firestore().collection('adminLogs').add({
      action: 'unban',
      targetNpub,
      adminNpub: context.auth!.uid,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  }
);

/**
 * Reset a user's scores (for cheating)
 */
export const resetUserScores = functions.https.onCall(
  async (
    data: { targetNpub?: string; reason?: string },
    context
  ): Promise<{ success: boolean }> => {
    await requireAdmin(context.auth);

    const { targetNpub, reason } = data || {};

    if (!targetNpub || typeof targetNpub !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'targetNpub is required'
      );
    }

    const userRef = admin.firestore().collection('users').doc(targetNpub);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'User not found'
      );
    }

    // Cannot reset another admin
    if (userDoc.data()?.isAdmin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Cannot reset an admin\'s scores'
      );
    }

    const batch = admin.firestore().batch();

    // Reset user's scores
    batch.update(userRef, {
      totalXP: 0,
      scores: { ba: 0, crypto: 0, aa: 0 },
      level: 1,
      scoresResetAt: admin.firestore.FieldValue.serverTimestamp(),
      scoresResetBy: context.auth!.uid,
    });

    // Delete score documents
    const scoresDocs = await admin.firestore()
      .collection('scores')
      .where('npub', '==', targetNpub)
      .get();

    for (const doc of scoresDocs.docs) {
      batch.delete(doc.ref);
    }

    await batch.commit();

    // Log the action
    await admin.firestore().collection('adminLogs').add({
      action: 'reset_scores',
      targetNpub,
      adminNpub: context.auth!.uid,
      reason: reason || null,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  }
);

/**
 * Get admin logs
 */
export const getAdminLogs = functions.https.onCall(
  async (
    data: { limit?: number },
    context
  ): Promise<{ logs: unknown[] }> => {
    await requireAdmin(context.auth);

    const { limit = 50 } = data || {};

    const logsSnapshot = await admin.firestore()
      .collection('adminLogs')
      .orderBy('timestamp', 'desc')
      .limit(Math.min(limit, 100))
      .get();

    const logs = logsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { logs };
  }
);
