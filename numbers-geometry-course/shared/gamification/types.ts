// =============================================================================
// GAMIFICATION TYPES
// =============================================================================
// Shared type definitions for the gamification system.
// These types are used across all courses for consistent XP tracking.
// =============================================================================

// Re-export CourseId from single source of truth
export { type CourseId, VALID_COURSE_IDS, isValidCourseId } from '../types/courses';
import type { CourseId } from '../types/courses';

/**
 * Section ID format: "courseId:sectionNumber" (e.g., "ba:5", "aa:12")
 */
export type SectionId = `${CourseId}:${number}`;

/**
 * Mastery levels for section progress
 */
export type MasteryLevel = 'none' | 'learning' | 'familiar' | 'mastered';

/**
 * Quiz difficulty levels
 */
export type Difficulty = 'easy' | 'medium' | 'hard';

/**
 * Achievement categories
 */
export type AchievementCategory = 'progress' | 'mastery' | 'dedication' | 'exploration';

/**
 * Individual quiz attempt record
 */
export interface QuizAttempt {
  timestamp: string;
  difficulty: Difficulty;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
}

/**
 * Per-section progress tracking
 */
export interface SectionProgress {
  sectionId: SectionId;
  visitedAt: string | null;
  completedAt: string | null;
  timeSpentSeconds: number;
  quizAttempts: QuizAttempt[];
  masteryLevel: MasteryLevel;
  visualizationsInteracted: string[];
}

/**
 * User-level progress aggregates
 */
export interface UserProgress {
  totalXP: number;
  level: number;
  sectionsCompleted: SectionId[];
  partsCompleted: string[];
  quizzesTaken: number;
  perfectQuizzes: number;
  visualizationsUsed: number;
  totalTimeSpentMinutes: number;
  joinedAt: string;
}

/**
 * Achievement progress tracking
 */
export interface AchievementProgress {
  id: string;
  unlockedAt: string | null;
  progress: number;
  target: number;
}

/**
 * Daily streak tracking
 */
export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  freezesRemaining: number;
  freezeUsedToday: boolean;
}

/**
 * Daily goal state
 */
export interface DailyGoalState {
  date: string;
  xpEarned: number;
  xpGoal: number;
  completed: boolean;
}

/**
 * Complete gamification state (stored in localStorage and server)
 */
export interface GamificationState {
  version: number;
  user: UserProgress;
  sections: Record<SectionId, SectionProgress>;
  achievements: AchievementProgress[];
  streak: StreakData;
  dailyGoals: DailyGoalState;
  lastUpdated: string;
  /** Whether localStorage progress has been migrated to server */
  migratedToServer?: boolean;
  /** Racing game statistics (optional, initialized on first game) */
  racingStats?: RacingStats;
}

/**
 * Achievement notification for toasts
 */
export interface AchievementNotification {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  xpReward: number;
  timestamp: number;
}

// =============================================================================
// RACING GAME TYPES
// =============================================================================

/**
 * Difficulty tier for racing game (1-10)
 */
export type RacingTier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Racing game session result
 */
export interface RaceGameResult {
  tier: RacingTier;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  maxStreak: number;
  fastAnswers: number;       // Answers under 2 seconds
  avgResponseTime: number;   // Average response time in ms
  timestamp: string;
  isMultiplayer: boolean;
  placement?: number;        // Position in multiplayer (1st, 2nd, etc.)
}

/**
 * Player racing statistics (persistent)
 */
export interface RacingStats {
  gamesPlayed: number;
  multiplayerGamesPlayed: number;
  totalPoints: number;
  highScore: number;
  highestTierUnlocked: RacingTier;
  longestStreak: number;
  fastAnswers: number;       // Cumulative count of answers < 2 seconds
  totalCorrect: number;
  totalAttempted: number;
  multiplayerWins: number;
  lastPlayedAt: string | null;
}

/**
 * Racing tier configuration
 */
export interface RacingTierConfig {
  tier: RacingTier;
  name: string;
  unlockLevel: number;
  modulusRange: [number, number];
  dividendRange: [number, number];
  basePoints: number;
}

// =============================================================================
// XP CONFIGURATION
// =============================================================================

export const XP_CONFIG = {
  SECTION_VISIT: 10,
  SECTION_COMPLETE: 25,
  QUIZ_EASY: 15,
  QUIZ_MEDIUM: 25,
  QUIZ_HARD: 40,
  QUIZ_PERFECT_BONUS: 0.5,  // 50% bonus for perfect score
  VISUALIZATION_USE: 5,
  PART_COMPLETE_BONUS: 50,
  STREAK_DAILY_BONUS: 5,
  STREAK_BONUS_CAP: 50,
} as const;

/**
 * Racing game XP configuration
 */
export const RACE_XP_CONFIG = {
  // Base XP for participating in a game
  GAME_PARTICIPATION: 10,
  // XP multiplier by tier (scales performance XP)
  TIER_MULTIPLIER: {
    1: 0.5,   // Beginner: 50% of base rate
    2: 0.6,   // Novice: 60%
    3: 0.8,   // Intermediate: 80%
    4: 1.0,   // Advanced: 100% (baseline)
    5: 1.2,   // Expert: 120%
    6: 1.5,   // Master: 150%
    7: 1.8,   // Grandmaster: 180%
    8: 2.2,   // Legend: 220%
    9: 2.7,   // Mythic: 270%
    10: 3.5,  // Transcendent: 350%
  } as Record<RacingTier, number>,
  // Points needed to earn 1 base XP unit
  POINTS_PER_XP_UNIT: 500,
  // Bonus XP for achievements
  PERFECT_GAME_BONUS: 25,     // All correct in a session (10+ questions)
  SPEED_DEMON_BONUS: 15,      // 10+ answers under 2 seconds in one game
  STREAK_MASTER_BONUS: 20,    // Reach 10+ streak in one game
  // Multiplayer bonuses
  FIRST_PLACE_BONUS: 30,
  SECOND_PLACE_BONUS: 15,
  THIRD_PLACE_BONUS: 5,
} as const;

/**
 * Racing tier definitions
 */
export const RACING_TIERS: RacingTierConfig[] = [
  { tier: 1,  name: 'Beginner',      unlockLevel: 1,  modulusRange: [2, 5],    dividendRange: [10, 25],      basePoints: 50 },
  { tier: 2,  name: 'Novice',        unlockLevel: 2,  modulusRange: [2, 7],    dividendRange: [15, 50],      basePoints: 75 },
  { tier: 3,  name: 'Intermediate',  unlockLevel: 3,  modulusRange: [3, 10],   dividendRange: [20, 100],     basePoints: 100 },
  { tier: 4,  name: 'Advanced',      unlockLevel: 5,  modulusRange: [5, 13],   dividendRange: [50, 200],     basePoints: 150 },
  { tier: 5,  name: 'Expert',        unlockLevel: 7,  modulusRange: [7, 17],   dividendRange: [100, 500],    basePoints: 200 },
  { tier: 6,  name: 'Master',        unlockLevel: 9,  modulusRange: [11, 23],  dividendRange: [200, 999],    basePoints: 300 },
  { tier: 7,  name: 'Grandmaster',   unlockLevel: 12, modulusRange: [13, 31],  dividendRange: [500, 2000],   basePoints: 400 },
  { tier: 8,  name: 'Legend',        unlockLevel: 15, modulusRange: [17, 47],  dividendRange: [1000, 5000],  basePoints: 500 },
  { tier: 9,  name: 'Mythic',        unlockLevel: 18, modulusRange: [23, 67],  dividendRange: [2000, 9999],  basePoints: 650 },
  { tier: 10, name: 'Transcendent',  unlockLevel: 21, modulusRange: [31, 97],  dividendRange: [5000, 99999], basePoints: 800 },
];

export const LEVEL_THRESHOLDS = [
  0,       // Level 1
  100,     // Level 2
  250,     // Level 3
  500,     // Level 4
  850,     // Level 5
  1300,    // Level 6
  1900,    // Level 7
  2650,    // Level 8
  3550,    // Level 9
  4600,    // Level 10
  5850,    // Level 11
  7300,    // Level 12 - Grandmaster unlocks
  9000,    // Level 13
  10950,   // Level 14
  13150,   // Level 15 - Legend unlocks
  15650,   // Level 16
  18450,   // Level 17
  21550,   // Level 18 - Mythic unlocks
  25000,   // Level 19
  28800,   // Level 20
  33000,   // Level 21 - Transcendent unlocks
  37600,   // Level 22
  42600,   // Level 23
  48000,   // Level 24
  54000,   // Level 25
] as const;

export const DAILY_XP_GOAL = 50;
