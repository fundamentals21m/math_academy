/**
 * Gamification state reducer.
 * Handles all state transitions for the gamification system.
 * @module gamification/reducer
 */

import {
  type GamificationState,
  type SectionId,
  type Difficulty,
  type RaceGameResult,
  type RacingStats,
  type RacingTier,
  XP_CONFIG,
  RACE_XP_CONFIG,
} from './types';
import { createDefaultState } from './defaults';
import { calculateLevel, calculateXP } from './xpCalculator';
import { updateStreak } from './streakManager';
import { calculateMastery } from './masteryCalculator';
import { getLogger } from '../utils/logger';

const logger = getLogger('GamificationReducer');

// =============================================================================
// ACTION TYPES
// =============================================================================

/**
 * All possible actions for the gamification reducer.
 */
export type GamificationAction =
  | { type: 'LOAD_STATE'; payload: GamificationState }
  | { type: 'LOAD_FROM_SERVER'; payload: GamificationState }
  | { type: 'MERGE_WITH_SERVER'; payload: GamificationState }
  | { type: 'MARK_MIGRATED' }
  | { type: 'VISIT_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'COMPLETE_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'COMPLETE_PART'; payload: { partId: string } }
  | { type: 'RECORD_QUIZ'; payload: RecordQuizPayload }
  | { type: 'USE_VISUALIZATION'; payload: { sectionId: SectionId; name: string } }
  | { type: 'UPDATE_STREAK' }
  | { type: 'RESET_PROGRESS' }
  | { type: 'RECORD_RACE_GAME'; payload: RaceGameResult };

/**
 * Payload for recording a quiz attempt.
 */
interface RecordQuizPayload {
  sectionId: SectionId;
  difficulty: Difficulty;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
}

// =============================================================================
// ACTION HANDLERS
// =============================================================================

/**
 * Handle visiting a section for the first time.
 * Awards SECTION_VISIT XP if not already visited.
 */
function handleVisitSection(
  state: GamificationState,
  sectionId: SectionId,
  now: string
): GamificationState {
  const existing = state.sections[sectionId];

  if (existing?.visitedAt) {
    return state; // Already visited
  }

  const newXP = state.user.totalXP + XP_CONFIG.SECTION_VISIT;

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP,
      level: calculateLevel(newXP),
    },
    sections: {
      ...state.sections,
      [sectionId]: {
        sectionId,
        visitedAt: now,
        completedAt: existing?.completedAt ?? null,
        timeSpentSeconds: existing?.timeSpentSeconds ?? 0,
        quizAttempts: existing?.quizAttempts ?? [],
        masteryLevel: existing?.masteryLevel ?? 'learning',
        visualizationsInteracted: existing?.visualizationsInteracted ?? [],
      },
    },
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + XP_CONFIG.SECTION_VISIT,
    },
    lastUpdated: now,
  };
}

/**
 * Handle completing a section.
 * Awards SECTION_COMPLETE XP and updates mastery level.
 */
function handleCompleteSection(
  state: GamificationState,
  sectionId: SectionId,
  now: string
): GamificationState {
  const existing = state.sections[sectionId];

  if (existing?.completedAt) {
    return state; // Already completed
  }

  if (!existing) {
    logger.warn(`Attempted to complete unvisited section: ${sectionId}`);
    return state;
  }

  const newXP = state.user.totalXP + XP_CONFIG.SECTION_COMPLETE;
  const newSectionsCompleted = [...state.user.sectionsCompleted, sectionId];

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP,
      level: calculateLevel(newXP),
      sectionsCompleted: newSectionsCompleted,
    },
    sections: {
      ...state.sections,
      [sectionId]: {
        ...existing,
        completedAt: now,
        masteryLevel: calculateMastery(existing),
      },
    },
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + XP_CONFIG.SECTION_COMPLETE,
    },
    lastUpdated: now,
  };
}

/**
 * Handle recording a quiz attempt.
 * Calculates XP based on difficulty and score, with perfect bonus.
 */
function handleRecordQuiz(
  state: GamificationState,
  payload: RecordQuizPayload,
  now: string
): GamificationState {
  const { sectionId, difficulty, score, correctAnswers, totalQuestions } = payload;
  const existing = state.sections[sectionId];

  if (!existing) {
    logger.warn(`Section ${sectionId} was not visited before quiz`);
    return state;
  }

  const baseXP = calculateXP(difficulty, score);
  const isPerfect = correctAnswers === totalQuestions;
  const xpEarned = isPerfect
    ? Math.round(baseXP * (1 + XP_CONFIG.QUIZ_PERFECT_BONUS))
    : baseXP;
  const newXP = state.user.totalXP + xpEarned;

  const newAttempt = {
    timestamp: now,
    difficulty,
    score,
    correctAnswers,
    totalQuestions,
    xpEarned,
  };

  const newAttempts = [...existing.quizAttempts, newAttempt];
  const updatedSection = { ...existing, quizAttempts: newAttempts };
  const newMasteryLevel = calculateMastery(updatedSection);

  // Mark section as completed if score >= 80% and not already completed
  const shouldComplete = score >= 80 && !existing.completedAt;
  const isNewCompletion = shouldComplete && !state.user.sectionsCompleted.includes(sectionId);

  // Add completion XP if this is a new completion
  const completionXP = isNewCompletion ? XP_CONFIG.SECTION_COMPLETE : 0;

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP + completionXP,
      level: calculateLevel(newXP + completionXP),
      quizzesTaken: state.user.quizzesTaken + 1,
      perfectQuizzes: isPerfect ? state.user.perfectQuizzes + 1 : state.user.perfectQuizzes,
      sectionsCompleted: isNewCompletion
        ? [...state.user.sectionsCompleted, sectionId]
        : state.user.sectionsCompleted,
    },
    sections: {
      ...state.sections,
      [sectionId]: {
        ...updatedSection,
        masteryLevel: newMasteryLevel,
        completedAt: shouldComplete ? (existing.completedAt || now) : existing.completedAt,
      },
    },
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + xpEarned + completionXP,
    },
    lastUpdated: now,
  };
}

/**
 * Handle using a visualization.
 * Awards VISUALIZATION_USE XP if not already used.
 */
function handleUseVisualization(
  state: GamificationState,
  sectionId: SectionId,
  name: string,
  now: string
): GamificationState {
  const existing = state.sections[sectionId];

  if (existing?.visualizationsInteracted.includes(name)) {
    return state; // Already used this visualization
  }

  if (!existing) {
    logger.warn(`Section ${sectionId} was not visited before visualization`);
    return state;
  }

  const newXP = state.user.totalXP + XP_CONFIG.VISUALIZATION_USE;
  const newVisualizations = [...existing.visualizationsInteracted, name];

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP,
      level: calculateLevel(newXP),
      visualizationsUsed: state.user.visualizationsUsed + 1,
    },
    sections: {
      ...state.sections,
      [sectionId]: {
        ...existing,
        visualizationsInteracted: newVisualizations,
      },
    },
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + XP_CONFIG.VISUALIZATION_USE,
    },
    lastUpdated: now,
  };
}

/**
 * Handle completing a curriculum part/chapter.
 * Awards PART_COMPLETE_BONUS XP if not already completed.
 */
function handleCompletePart(
  state: GamificationState,
  partId: string,
  now: string
): GamificationState {
  if (state.user.partsCompleted.includes(partId)) {
    return state; // Already completed
  }

  const newXP = state.user.totalXP + XP_CONFIG.PART_COMPLETE_BONUS;

  logger.info(`Part ${partId} completed, awarding ${XP_CONFIG.PART_COMPLETE_BONUS} XP`);

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP,
      level: calculateLevel(newXP),
      partsCompleted: [...state.user.partsCompleted, partId],
    },
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + XP_CONFIG.PART_COMPLETE_BONUS,
    },
    lastUpdated: now,
  };
}

/**
 * Handle recording a racing game result.
 * Updates racing stats and awards XP.
 */
function handleRecordRaceGame(
  state: GamificationState,
  result: RaceGameResult,
  now: string
): GamificationState {
  // Calculate XP earned from the game
  let xpEarned = RACE_XP_CONFIG.GAME_PARTICIPATION;

  // Performance XP (based on points and tier)
  const tierMultiplier = RACE_XP_CONFIG.TIER_MULTIPLIER[result.tier];
  const performanceXP = Math.floor(
    (Math.max(0, result.score) / RACE_XP_CONFIG.POINTS_PER_XP_UNIT) *
    XP_CONFIG.QUIZ_MEDIUM *
    tierMultiplier
  );
  xpEarned += performanceXP;

  // Perfect game bonus
  if (result.correctAnswers === result.totalQuestions && result.totalQuestions >= 10) {
    xpEarned += RACE_XP_CONFIG.PERFECT_GAME_BONUS;
  }

  // Speed demon bonus (10+ fast answers)
  if (result.fastAnswers >= 10) {
    xpEarned += RACE_XP_CONFIG.SPEED_DEMON_BONUS;
  }

  // Streak master bonus (10+ streak)
  if (result.maxStreak >= 10) {
    xpEarned += RACE_XP_CONFIG.STREAK_MASTER_BONUS;
  }

  // Multiplayer placement bonuses
  if (result.isMultiplayer && result.placement) {
    switch (result.placement) {
      case 1:
        xpEarned += RACE_XP_CONFIG.FIRST_PLACE_BONUS;
        break;
      case 2:
        xpEarned += RACE_XP_CONFIG.SECOND_PLACE_BONUS;
        break;
      case 3:
        xpEarned += RACE_XP_CONFIG.THIRD_PLACE_BONUS;
        break;
    }
  }

  const newXP = state.user.totalXP + xpEarned;

  // Initialize or update racing stats
  const existingStats = state.racingStats;
  const isNewHighScore = result.score > (existingStats?.highScore ?? 0);
  const isMultiplayerWin = result.isMultiplayer && result.placement === 1;

  const newRacingStats: RacingStats = {
    gamesPlayed: (existingStats?.gamesPlayed ?? 0) + 1,
    multiplayerGamesPlayed: (existingStats?.multiplayerGamesPlayed ?? 0) + (result.isMultiplayer ? 1 : 0),
    totalPoints: (existingStats?.totalPoints ?? 0) + Math.max(0, result.score),
    highScore: isNewHighScore ? result.score : (existingStats?.highScore ?? 0),
    highestTierUnlocked: Math.max(existingStats?.highestTierUnlocked ?? 1, result.tier) as RacingTier,
    longestStreak: Math.max(existingStats?.longestStreak ?? 0, result.maxStreak),
    fastAnswers: (existingStats?.fastAnswers ?? 0) + result.fastAnswers,
    totalCorrect: (existingStats?.totalCorrect ?? 0) + result.correctAnswers,
    totalAttempted: (existingStats?.totalAttempted ?? 0) + result.totalQuestions,
    multiplayerWins: (existingStats?.multiplayerWins ?? 0) + (isMultiplayerWin ? 1 : 0),
    lastPlayedAt: now,
  };

  // Update racing achievements
  const updatedAchievements = state.achievements.map((achievement) => {
    // Skip already unlocked achievements
    if (achievement.unlockedAt) return achievement;

    switch (achievement.id) {
      case 'racing-rookie':
        // Complete first race
        if (newRacingStats.gamesPlayed >= 1) {
          return { ...achievement, progress: 1, unlockedAt: now };
        }
        break;

      case 'speed-demon':
        // 50 answers under 2 seconds (cumulative)
        if (newRacingStats.fastAnswers >= 50) {
          return { ...achievement, progress: 50, unlockedAt: now };
        }
        return { ...achievement, progress: Math.min(newRacingStats.fastAnswers, 50) };

      case 'streak-legend':
        // Get a 20-answer streak
        if (newRacingStats.longestStreak >= 20) {
          return { ...achievement, progress: 20, unlockedAt: now };
        }
        return { ...achievement, progress: Math.min(newRacingStats.longestStreak, 20) };

      case 'tier-climber':
        // Unlock Master tier (tier 6)
        if (newRacingStats.highestTierUnlocked >= 6) {
          return { ...achievement, progress: 6, unlockedAt: now };
        }
        return { ...achievement, progress: newRacingStats.highestTierUnlocked };

      case 'modular-master':
        // Earn 10,000 total racing points
        if (newRacingStats.totalPoints >= 10000) {
          return { ...achievement, progress: 10000, unlockedAt: now };
        }
        return { ...achievement, progress: Math.min(newRacingStats.totalPoints, 10000) };

      case 'multiplayer-champion':
        // Win 5 multiplayer games
        if (newRacingStats.multiplayerWins >= 5) {
          return { ...achievement, progress: 5, unlockedAt: now };
        }
        return { ...achievement, progress: Math.min(newRacingStats.multiplayerWins, 5) };
    }

    return achievement;
  });

  return {
    ...state,
    user: {
      ...state.user,
      totalXP: newXP,
      level: calculateLevel(newXP),
    },
    racingStats: newRacingStats,
    achievements: updatedAchievements,
    dailyGoals: {
      ...state.dailyGoals,
      xpEarned: state.dailyGoals.xpEarned + xpEarned,
    },
    lastUpdated: now,
  };
}

// =============================================================================
// REDUCER
// =============================================================================

/**
 * Main reducer for gamification state.
 * Handles all state transitions immutably.
 *
 * @param state - Current gamification state
 * @param action - Action to process
 * @returns New state after applying the action
 *
 * @example
 * ```ts
 * const newState = gamificationReducer(state, {
 *   type: 'VISIT_SECTION',
 *   payload: { sectionId: 'crypto:1' }
 * });
 * ```
 */
export function gamificationReducer(
  state: GamificationState,
  action: GamificationAction
): GamificationState {
  const now = new Date().toISOString();

  switch (action.type) {
    case 'LOAD_STATE':
      return action.payload;

    case 'LOAD_FROM_SERVER':
      // Replace local state with server state (server is source of truth)
      return { ...action.payload, migratedToServer: true };

    case 'MERGE_WITH_SERVER':
      // Server merged states - use the merged result
      return { ...action.payload, migratedToServer: true };

    case 'MARK_MIGRATED':
      // Mark that local progress has been migrated to server
      return { ...state, migratedToServer: true, lastUpdated: now };

    case 'VISIT_SECTION':
      return handleVisitSection(state, action.payload.sectionId, now);

    case 'COMPLETE_SECTION':
      return handleCompleteSection(state, action.payload.sectionId, now);

    case 'COMPLETE_PART':
      return handleCompletePart(state, action.payload.partId, now);

    case 'RECORD_QUIZ':
      return handleRecordQuiz(state, action.payload, now);

    case 'USE_VISUALIZATION':
      return handleUseVisualization(
        state,
        action.payload.sectionId,
        action.payload.name,
        now
      );

    case 'UPDATE_STREAK':
      return updateStreak(state);

    case 'RESET_PROGRESS':
      return createDefaultState();

    case 'RECORD_RACE_GAME':
      return handleRecordRaceGame(state, action.payload, now);

    default:
      return state;
  }
}
