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
export type { QuizQuestion, SectionQuestions, QuestionType, NumericRange } from './quizTypes';
export { renderContent } from './quizTypes';

export { XP_CONFIG, LEVEL_THRESHOLDS, DAILY_XP_GOAL } from './types';

// LaTeX Parser
export { parseLaTeX, renderLaTeX, type ParsedSegment } from './latexParser';

// XP Calculator
export { calculateLevel, getXPForNextLevel, getLevelProgress, calculateXP } from './xpCalculator';

// Mastery Calculator
export { calculateMastery, getMasteryInfo } from './masteryCalculator';

// Context
export { GamificationProvider, useGamification } from './GamificationContext';
