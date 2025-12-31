// Types - Single source of truth for CourseId
export { type CourseId, VALID_COURSE_IDS, isValidCourseId } from './types/courses';

// Firebase
export * from './firebase';

// Nostr (excluding CourseId which is also in leaderboard)
export * from './nostr/types';
export * from './nostr/utils';

// Leaderboard (excluding CourseId to avoid duplicate export)
export type {
  UserProfile,
  ScoreEntry,
  LeaderboardRanking,
  LeaderboardResponse,
  ScoreUpdate,
  SyncPayload,
  AuthState,
  LeaderboardNotification,
} from './leaderboard/types';
export * from './leaderboard/syncManager';

// Contexts
export * from './contexts';
export { ErrorProvider, useErrorContext } from './contexts/ErrorContext';

// Components
export { ErrorBoundary } from './components/ErrorBoundary';
export { ErrorDisplay } from './components/ErrorDisplay';
export { LoadingSpinner } from './components/common/LoadingSpinner';

// Gamification (excluding CourseId to avoid duplicate export)
export type {
  SectionId,
  MasteryLevel,
  Difficulty,
  AchievementCategory,
  QuizAttempt,
  SectionProgress,
  UserProgress,
  AchievementProgress,
  StreakData,
  DailyGoalState,
  GamificationState,
  AchievementNotification,
  QuizQuestion,
  SectionQuestions,
  QuestionType,
  NumericRange,
  ParsedSegment,
} from './gamification';
export {
  XP_CONFIG,
  LEVEL_THRESHOLDS,
  DAILY_XP_GOAL,
  renderContent,
  parseLaTeX,
  renderLaTeX,
  GamificationProvider,
  useGamification,
  loadState,
  saveState,
  clearState,
  calculateLevel,
  getXPForNextLevel,
  getLevelProgress,
  calculateXP,
  createDefaultState,
  updateStreak,
  checkDailyGoalCompletion,
  calculateMastery,
  getMasteryInfo,
  ACHIEVEMENTS,
  checkAchievements,
  getAchievement,
  getAchievementsWithProgress,
} from './gamification';

// Validation schemas are imported directly by components that need them
// to avoid potential circular dependencies
