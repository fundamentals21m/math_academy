/**
 * XP calculation utilities.
 * Handles level progression, XP rewards, and progress tracking.
 * @module gamification/xpCalculator
 */

import { LEVEL_THRESHOLDS, XP_CONFIG, type Difficulty } from './types';

/**
 * Calculate user level based on total XP.
 * Levels are determined by thresholds defined in LEVEL_THRESHOLDS.
 *
 * @param totalXP - User's total accumulated XP
 * @returns Level number (1-10)
 */
export function calculateLevel(totalXP: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
}

/**
 * Get XP required to reach the next level.
 *
 * @param currentLevel - User's current level (1-10)
 * @returns XP threshold for the next level
 */
export function getXPForNextLevel(currentLevel: number): number {
  if (currentLevel >= LEVEL_THRESHOLDS.length) {
    return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  }
  return LEVEL_THRESHOLDS[currentLevel];
}

/**
 * Get progress percentage toward the next level.
 *
 * @param totalXP - User's total accumulated XP
 * @param currentLevel - User's current level (1-10)
 * @returns Progress percentage (0-100)
 */
export function getLevelProgress(totalXP: number, currentLevel: number): number {
  if (currentLevel >= LEVEL_THRESHOLDS.length) return 100;

  const currentThreshold = LEVEL_THRESHOLDS[currentLevel - 1];
  const nextThreshold = LEVEL_THRESHOLDS[currentLevel];
  const progress = ((totalXP - currentThreshold) / (nextThreshold - currentThreshold)) * 100;

  return Math.min(100, Math.max(0, progress));
}

/**
 * Calculate XP earned for a quiz based on difficulty and score.
 * Base XP varies by difficulty, then scaled by score percentage.
 *
 * @param difficulty - Quiz difficulty ('easy' | 'medium' | 'hard')
 * @param score - Quiz score (0-100)
 * @returns XP earned (rounded to nearest integer)
 */
export function calculateXP(difficulty: Difficulty, score: number): number {
  const baseXP = {
    easy: XP_CONFIG.QUIZ_EASY,
    medium: XP_CONFIG.QUIZ_MEDIUM,
    hard: XP_CONFIG.QUIZ_HARD,
  }[difficulty];

  // Scale XP by score percentage
  return Math.round(baseXP * (score / 100));
}
