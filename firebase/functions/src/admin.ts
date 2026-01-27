import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { logAdminAction } from './adminAudit';

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
 * Get client IP address from request
 */
function getClientIP(context: functions.https.CallableContext): string | undefined {
  const forwarded = context.rawRequest.headers['x-forwarded-for'];
  const forwardedIp = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return context.rawRequest.ip || forwardedIp || undefined;
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

    // Log the action with full audit trail
    await logAdminAction('ban', context.auth!.uid, {
      targetNpub,
      reason,
      ipAddress: getClientIP(context),
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

    // Log the action with full audit trail
    await logAdminAction('unban', context.auth!.uid, {
      targetNpub,
      ipAddress: getClientIP(context),
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
      scores: {
        ba: 0, crypto: 0, aa: 0, linalg: 0, advlinalg: 0, islr: 0, ra: 0,
        calc1: 0, calc_lib_art: 0, calc_easy: 0, wm: 0, four_pillars: 0,
        mom: 0, euclid: 0, thales: 0, gauss: 0, human_action: 0,
        atlas_shrugged: 0, template: 0, 'mod-race': 0, 'base-race': 0,
        bfi: 0, frost: 0, koblitz: 0, coding: 0, west_graphs: 0,
        'numbers-geometry': 0, 'ross-prob': 0, 'intro-discrete': 0,
        rudin: 0, df: 0, 'euler-intro': 0, 'tao-analysis-1': 0,
        man_econ_state: 0, road_to_serfdom: 0, orange_btc: 0, math_history: 0
      },
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

    // Log the action with full audit trail
    await logAdminAction('reset_scores', context.auth!.uid, {
      targetNpub,
      reason,
      ipAddress: getClientIP(context),
    });

    return { success: true };
  }
);

/**
 * Get admin audit logs (using new audit system)
 */
export const getAdminLogs = functions.https.onCall(
  async (
    data: { limit?: number },
    context
  ): Promise<{ logs: unknown[] }> => {
    await requireAdmin(context.auth);

    const { limit = 50 } = data || {};

    // Use new audit log collection
    const logsSnapshot = await admin.firestore()
      .collection('adminAuditLog')
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

/**
 * Get security logs (auth failures, rate limits, etc.)
 */
export const getSecurityLogs = functions.https.onCall(
  async (
    data: { limit?: number; severity?: string; eventType?: string },
    context
  ): Promise<{ logs: unknown[] }> => {
    await requireAdmin(context.auth);

    const { limit = 100, severity, eventType } = data || {};

    let query = admin.firestore()
      .collection('securityLogs')
      .orderBy('timestamp', 'desc');

    // Filter by severity if provided
    if (severity) {
      query = query.where('severity', '==', severity);
    }

    // Filter by event type if provided
    if (eventType) {
      query = query.where('type', '==', eventType);
    }

    const logsSnapshot = await query.limit(Math.min(limit, 500)).get();

    const logs = logsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { logs };
  }
);
