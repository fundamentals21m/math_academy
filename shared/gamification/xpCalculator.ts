/**
 * XP calculation utilities.
 * Handles level progression, XP rewards, and progress tracking.
 * @module gamification/xpCalculator
 */

import { LEVEL_THRESHOLDS, XP_CONFIG, type Difficulty } from './types';

/**
 * Calculate user level based on total XP using predefined thresholds.
 *
 * Levels progress through fixed XP thresholds defined in LEVEL_THRESHOLDS.
 * Higher levels require exponentially more XP to achieve.
 *
 * @param totalXP - User's total accumulated XP points (must be non-negative)
 * @returns Level number between 1-10, clamped to maximum level
 * @throws Will not throw, but returns minimum level 1 for invalid input
 *
 * @example
 * ```ts
 * calculateLevel(0);      // Returns 1 (starting level)
 * calculateLevel(100);    // Returns 2 (first threshold crossed)
 * calculateLevel(500);    // Returns 4 (multiple thresholds)
 * calculateLevel(5000);   // Returns 10 (maximum level)
 * calculateLevel(-50);    // Returns 1 (invalid input handled)
 * ```
 *
 * @see LEVEL_THRESHOLDS for exact XP requirements per level
 * @see getLevelProgress for percentage progress within current level
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
 *
 * @example
 * ```ts
 * getXPForNextLevel(1);  // Returns 100 (XP needed for level 2)
 * getXPForNextLevel(5);  // Returns 1300 (XP needed for level 6)
 * getXPForNextLevel(10); // Returns 4600 (max level threshold)
 * ```
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
 *
 * @example
 * ```ts
 * getLevelProgress(50, 1);   // Returns 50 (halfway to level 2)
 * getLevelProgress(175, 2);  // Returns 50 (halfway from 100 to 250)
 * getLevelProgress(4600, 10); // Returns 100 (max level)
 * ```
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
 *
 * @example
 * ```ts
 * calculateXP('easy', 100);   // Returns 15 (full easy XP)
 * calculateXP('medium', 80);  // Returns 20 (80% of 25)
 * calculateXP('hard', 100);   // Returns 40 (full hard XP)
 * calculateXP('hard', 50);    // Returns 20 (50% of 40)
 * ```
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
