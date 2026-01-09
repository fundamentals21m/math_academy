import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Nostr authentication functions
export { createChallenge, verifyNostrAndCreateToken } from './nostrAuth';

// Export score management functions
export { syncScores, getLeaderboard, getUserScores } from './scores';

// Export progress sync functions
export { syncProgress, getProgress } from './progress';

// Export admin functions
export { banUser, unbanUser, resetUserScores, getAdminLogs, getSecurityLogs } from './admin';

// Export modular arithmetic racing game functions
export {
  createRoom,
  joinRoom,
  setReady,
  startRound,
  submitAnswer,
  advanceRound,
  leaveRoom,
} from './modRace';

// Export course configuration functions
export {
  getCourseConfig,
  updateCourse,
  createSection,
  updateSection,
  deleteSection,
  reorderSections,
  reorderCourses,
  getCourseAdmins,
  addCourseAdmin,
  removeCourseAdmin,
  isCourseAdmin,
} from './courseConfig';
