/**
 * Gamification state reducer.
 * Handles all state transitions for the gamification system.
 * @module gamification/reducer
 */

import {
  type GamificationState,
  type SectionId,
  type Difficulty,
  XP_CONFIG,
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
  | { type: 'VISIT_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'COMPLETE_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'RECORD_QUIZ'; payload: RecordQuizPayload }
  | { type: 'USE_VISUALIZATION'; payload: { sectionId: SectionId; name: string } }
  | { type: 'UPDATE_STREAK' }
  | { type: 'RESET_PROGRESS' };

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
 * Marks section as completed on perfect score.
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

    case 'VISIT_SECTION':
      return handleVisitSection(state, action.payload.sectionId, now);

    case 'COMPLETE_SECTION':
      return handleCompleteSection(state, action.payload.sectionId, now);

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

    default:
      return state;
  }
}
