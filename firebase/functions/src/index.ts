import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Nostr authentication functions
export { createChallenge, verifyNostrAndCreateToken } from './nostrAuth';

// Export score management functions
export { syncScores, getLeaderboard } from './scores';

// Export admin functions
export { banUser, unbanUser, resetUserScores, getAdminLogs } from './admin';

// Debug: Check and set admin status
export const debugSetAdmin = functions.https.onCall(async (data: { npub: string; secret: string }) => {
  if (data.secret !== 'phundamentals-admin-2024') {
    throw new functions.https.HttpsError('permission-denied', 'Invalid secret');
  }

  const { npub } = data;
  const userRef = admin.firestore().collection('users').doc(npub);
  const userDoc = await userRef.get();

  const before = userDoc.exists ? userDoc.data() : null;

  // Set isAdmin to true in Firestore
  await userRef.set({ isAdmin: true }, { merge: true });

  // Also set custom user claims so token refresh picks it up
  await admin.auth().setCustomUserClaims(npub, { isAdmin: true });

  const afterDoc = await userRef.get();
  const after = afterDoc.data();

  return {
    before: before ? { isAdmin: before.isAdmin, npub: before.npub || npub } : null,
    after: { isAdmin: after?.isAdmin, npub }
  };
});
