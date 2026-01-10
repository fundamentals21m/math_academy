// =============================================================================
// SCORING SYSTEM
// =============================================================================
// Calculates points for modular arithmetic racing game answers.
// Includes base points, speed bonuses, streak multipliers, and penalties.
// =============================================================================

import {
  RACE_XP_CONFIG,
  XP_CONFIG,
  type RacingTier,
  type RaceGameResult,
} from '@shared/gamification';
import { getTierConfig } from './problemGenerator';

// Speed bonus thresholds (in milliseconds)
const SPEED_BONUS_FAST = 1000;    // Under 1s: max bonus
const SPEED_BONUS_MEDIUM = 3000;  // 1-3s: high bonus
const SPEED_BONUS_SLOW = 10000;   // 3-10s: decreasing bonus
                                   // Over 10s: no bonus

/**
 * Result of scoring a single answer
 */
export interface AnswerScore {
  basePoints: number;
  speedBonus: number;
  streakMultiplier: number;
  totalPoints: number;
  newStreak: number;
  isFastAnswer: boolean;  // Under 2 seconds
}

/**
 * Result of scoring an entire game session
 */
export interface GameScore {
  totalPoints: number;
  correctAnswers: number;
  incorrectAnswers: number;
  maxStreak: number;
  fastAnswers: number;
  avgResponseTime: number;
  xpEarned: number;
}

/**
 * Calculate streak multiplier based on current streak
 * Streak 1-2: 1.0x (no bonus)
 * Streak 3-4: 1.1x
 * Streak 5-6: 1.2x
 * Streak 7-9: 1.3x
 * Streak 10+: 1.5x (max)
 */
export function getStreakMultiplier(streak: number): number {
  if (streak >= 10) return 1.5;
  if (streak >= 7) return 1.3;
  if (streak >= 5) return 1.2;
  if (streak >= 3) return 1.1;
  return 1.0;
}

/**
 * Calculate speed bonus based on absolute response time
 * - Under 1s: 100% bonus (2x total)
 * - 1-3s: 100% down to 50% bonus
 * - 3-10s: 50% down to 0% bonus
 * - Over 10s: no bonus
 */
export function calculateSpeedBonus(
  basePoints: number,
  responseTimeMs: number
): number {
  if (responseTimeMs <= SPEED_BONUS_FAST) {
    // Under 1 second: full 100% bonus
    return basePoints;
  }

  if (responseTimeMs <= SPEED_BONUS_MEDIUM) {
    // 1-3 seconds: 100% to 50% bonus (linear)
    const ratio = 1 - (responseTimeMs - SPEED_BONUS_FAST) / (SPEED_BONUS_MEDIUM - SPEED_BONUS_FAST);
    return Math.floor(basePoints * (0.5 + 0.5 * ratio));
  }

  if (responseTimeMs <= SPEED_BONUS_SLOW) {
    // 3-10 seconds: 50% to 0% bonus (linear)
    const ratio = 1 - (responseTimeMs - SPEED_BONUS_MEDIUM) / (SPEED_BONUS_SLOW - SPEED_BONUS_MEDIUM);
    return Math.floor(basePoints * 0.5 * ratio);
  }

  // Over 10 seconds: no bonus
  return 0;
}

/**
 * Score a single correct answer
 */
export function scoreCorrectAnswer(
  tier: RacingTier,
  responseTimeMs: number,
  currentStreak: number
): AnswerScore {
  const config = getTierConfig(tier);
  const basePoints = config.basePoints;

  const speedBonus = calculateSpeedBonus(basePoints, responseTimeMs);
  const newStreak = currentStreak + 1;
  const streakMultiplier = getStreakMultiplier(newStreak);
  const isFastAnswer = responseTimeMs < 2000;

  const totalPoints = Math.floor((basePoints + speedBonus) * streakMultiplier);

  return {
    basePoints,
    speedBonus,
    streakMultiplier,
    totalPoints,
    newStreak,
    isFastAnswer,
  };
}

/**
 * Score an incorrect answer (penalty)
 */
export function scoreIncorrectAnswer(tier: RacingTier): AnswerScore {
  const config = getTierConfig(tier);
  const basePoints = config.basePoints;

  // Penalty is -50% of base points
  const penalty = -Math.floor(basePoints * 0.5);

  return {
    basePoints: penalty,
    speedBonus: 0,
    streakMultiplier: 1.0,
    totalPoints: penalty,
    newStreak: 0,  // Streak resets on wrong answer
    isFastAnswer: false,
  };
}

/**
 * Calculate XP earned from a game result
 */
export function calculateXP(result: RaceGameResult): number {
  let xp = 0;

  // 1. Participation XP
  xp += RACE_XP_CONFIG.GAME_PARTICIPATION;

  // 2. Performance XP (based on points and tier)
  const tierMultiplier = RACE_XP_CONFIG.TIER_MULTIPLIER[result.tier];
  const performanceXP = Math.floor(
    (result.score / RACE_XP_CONFIG.POINTS_PER_XP_UNIT) *
    XP_CONFIG.QUIZ_MEDIUM *
    tierMultiplier
  );
  xp += Math.max(0, performanceXP);  // Don't subtract for negative scores

  // 3. Perfect game bonus (all correct, minimum 10 questions)
  if (result.correctAnswers === result.totalQuestions && result.totalQuestions >= 10) {
    xp += RACE_XP_CONFIG.PERFECT_GAME_BONUS;
  }

  // 4. Speed demon bonus (10+ fast answers)
  if (result.fastAnswers >= 10) {
    xp += RACE_XP_CONFIG.SPEED_DEMON_BONUS;
  }

  // 5. Streak master bonus (reached 10+ streak)
  if (result.maxStreak >= 10) {
    xp += RACE_XP_CONFIG.STREAK_MASTER_BONUS;
  }

  // 6. Multiplayer placement bonuses
  if (result.isMultiplayer && result.placement) {
    switch (result.placement) {
      case 1:
        xp += RACE_XP_CONFIG.FIRST_PLACE_BONUS;
        break;
      case 2:
        xp += RACE_XP_CONFIG.SECOND_PLACE_BONUS;
        break;
      case 3:
        xp += RACE_XP_CONFIG.THIRD_PLACE_BONUS;
        break;
    }
  }

  return xp;
}

/**
 * Calculate final game score from individual round results
 */
export function calculateGameScore(
  tier: RacingTier,
  roundResults: Array<{ isCorrect: boolean; responseTimeMs: number }>
): GameScore {
  let totalPoints = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let currentStreak = 0;
  let maxStreak = 0;
  let fastAnswers = 0;
  let totalResponseTime = 0;

  for (const round of roundResults) {
    totalResponseTime += round.responseTimeMs;

    if (round.isCorrect) {
      const score = scoreCorrectAnswer(tier, round.responseTimeMs, currentStreak);
      totalPoints += score.totalPoints;
      correctAnswers++;
      currentStreak = score.newStreak;
      maxStreak = Math.max(maxStreak, currentStreak);
      if (score.isFastAnswer) fastAnswers++;
    } else {
      const score = scoreIncorrectAnswer(tier);
      totalPoints += score.totalPoints;
      incorrectAnswers++;
      currentStreak = 0;
    }
  }

  const avgResponseTime = roundResults.length > 0
    ? Math.round(totalResponseTime / roundResults.length)
    : 0;

  // Create result for XP calculation
  const result: RaceGameResult = {
    tier,
    score: totalPoints,
    correctAnswers,
    totalQuestions: roundResults.length,
    maxStreak,
    fastAnswers,
    avgResponseTime,
    timestamp: new Date().toISOString(),
    isMultiplayer: false,
  };

  const xpEarned = calculateXP(result);

  return {
    totalPoints,
    correctAnswers,
    incorrectAnswers,
    maxStreak,
    fastAnswers,
    avgResponseTime,
    xpEarned,
  };
}

/**
 * Format points for display (with + or - prefix)
 */
export function formatPoints(points: number): string {
  return points >= 0 ? `+${points}` : `${points}`;
}

/**
 * Format time in milliseconds to a readable string
 */
export function formatTime(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`;
  }
  return `${(ms / 1000).toFixed(1)}s`;
}
