import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Nostr authentication functions
export { createChallenge, verifyNostrAndCreateToken } from './nostrAuth';

// Export score management functions
export { syncScores, getLeaderboard, getUserScores } from './scores';

// Export admin functions
export { banUser, unbanUser, resetUserScores, getAdminLogs } from './admin';
