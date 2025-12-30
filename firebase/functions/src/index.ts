import * as admin from 'firebase-admin';
// Note: firebase-functions import would be needed if debug functions are uncommented

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Nostr authentication functions
export { createChallenge, verifyNostrAndCreateToken } from './nostrAuth';

// Export score management functions
export { syncScores, getLeaderboard, getUserScores } from './scores';

// Export admin functions
export { banUser, unbanUser, resetUserScores, getAdminLogs } from './admin';

// Debug: Check and set admin status
// WARNING: This is a debug function and should only be used in development
// The admin secret should be set via: firebase functions:config:set admin.secret="your-secret"
// Access it with: functions.config().admin?.secret
// 
// IMPORTANT: To use this in development, uncomment the export below:
// export const debugSetAdmin = functions.https.onCall(async (data: { npub: string; secret: string }) => {
//   const adminSecret = functions.config().admin?.secret;
//   if (!adminSecret) {
//     throw new functions.https.HttpsError('failed-precondition', 'Admin secret not configured. Run: firebase functions:config:set admin.secret="your-secret"');
//   }
//   if (data.secret !== adminSecret) {
//     throw new functions.https.HttpsError('permission-denied', 'Invalid secret');
//   }
//
//   const { npub } = data;
//   const userRef = admin.firestore().collection('users').doc(npub);
//   const userDoc = await userRef.get();
//
//   const before = userDoc.exists ? userDoc.data() : null;
//
//   // Set isAdmin to true in Firestore
//   await userRef.set({ isAdmin: true }, { merge: true });
//
//   // Also set custom user claims so token refresh picks it up
//   await admin.auth().setCustomUserClaims(npub, { isAdmin: true });
//
//   const afterDoc = await userRef.get();
//   const after = afterDoc.data();
//
//   return {
//     before: before ? { isAdmin: before.isAdmin, npub: before.npub || npub } : null,
//     after: { isAdmin: after?.isAdmin, npub }
//   };
// });
