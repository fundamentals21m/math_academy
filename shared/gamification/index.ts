// Types
export type {
  CourseId,
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
} from './types';

// Quiz types
export type { QuizQuestion, SectionQuestions } from './quizTypes';

export { XP_CONFIG, LEVEL_THRESHOLDS, DAILY_XP_GOAL } from './types';

// Context
export { GamificationProvider, useGamification } from './GamificationContext';

// Storage
export { loadState, saveState, clearState } from './storage';

// XP Calculator
export { calculateLevel, getXPForNextLevel, getLevelProgress, calculateXP } from './xpCalculator';

// Defaults
export { createDefaultState } from './defaults';

// Streak Manager
export { updateStreak, checkDailyGoalCompletion } from './streakManager';

// Mastery Calculator
export { calculateMastery, getMasteryInfo } from './masteryCalculator';

// Achievements
export { ACHIEVEMENTS, checkAchievements, getAchievement, getAchievementsWithProgress } from './achievements';
