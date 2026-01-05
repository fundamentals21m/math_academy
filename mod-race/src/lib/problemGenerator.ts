// =============================================================================
// MODULAR ARITHMETIC PROBLEM GENERATOR
// =============================================================================
// Generates problems for the racing game with configurable difficulty tiers.
// =============================================================================

import { RACING_TIERS, type RacingTier, type RacingTierConfig } from '@magic-internet-math/shared';

/**
 * A modular arithmetic problem
 */
export interface ModularProblem {
  id: string;
  dividend: number;
  modulus: number;
  correctAnswer: number;
  displayText: string;
  tier: RacingTier;
  generatedAt: number;
}

/**
 * Prime numbers commonly used as moduli (more interesting mathematically)
 */
const PRIME_MODULI = [2, 3, 5, 7, 11, 13, 17, 19, 23];

/**
 * Generate a unique problem ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Get a random integer between min and max (inclusive)
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Select a modulus from the given range
 * 60% chance of prime (more interesting), 40% composite
 */
function selectModulus(min: number, max: number): number {
  const validPrimes = PRIME_MODULI.filter(p => p >= min && p <= max);

  if (validPrimes.length > 0 && Math.random() < 0.6) {
    return validPrimes[Math.floor(Math.random() * validPrimes.length)];
  }

  return randomInt(min, max);
}

/**
 * Generate a dividend that produces a non-trivial problem
 * - Always greater than modulus
 * - 90% of problems have non-zero remainder
 */
function generateDividend(modulus: number, minDividend: number, maxDividend: number): number {
  // Ensure dividend > modulus for non-trivial problem
  const effectiveMin = Math.max(minDividend, modulus + 1);
  const effectiveMax = maxDividend;

  let dividend: number;
  let attempts = 0;

  do {
    dividend = randomInt(effectiveMin, effectiveMax);
    attempts++;
    // 90% of problems should have non-zero remainder
    // Allow zero remainder only 10% of time
  } while (
    attempts < 10 &&
    dividend % modulus === 0 &&
    Math.random() < 0.9
  );

  return dividend;
}

/**
 * Get tier configuration by tier number
 */
export function getTierConfig(tier: RacingTier): RacingTierConfig {
  const config = RACING_TIERS.find(t => t.tier === tier);
  if (!config) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return config;
}

/**
 * Generate a single modular arithmetic problem
 */
export function generateProblem(tier: RacingTier): ModularProblem {
  const config = getTierConfig(tier);

  const modulus = selectModulus(config.modulusRange[0], config.modulusRange[1]);
  const dividend = generateDividend(modulus, config.dividendRange[0], config.dividendRange[1]);
  const correctAnswer = dividend % modulus;

  return {
    id: generateId(),
    dividend,
    modulus,
    correctAnswer,
    displayText: `What is ${dividend} mod ${modulus}?`,
    tier,
    generatedAt: Date.now(),
  };
}

/**
 * Generate a batch of problems for a game session
 */
export function generateProblemSet(tier: RacingTier, count: number): ModularProblem[] {
  const problems: ModularProblem[] = [];
  const usedCombinations = new Set<string>();

  for (let i = 0; i < count; i++) {
    let problem: ModularProblem;
    let attempts = 0;

    // Try to avoid duplicate dividend/modulus combinations
    do {
      problem = generateProblem(tier);
      attempts++;
    } while (
      attempts < 5 &&
      usedCombinations.has(`${problem.dividend}-${problem.modulus}`)
    );

    usedCombinations.add(`${problem.dividend}-${problem.modulus}`);
    problems.push(problem);
  }

  return problems;
}

/**
 * Validate a user's answer
 */
export function validateAnswer(problem: ModularProblem, userAnswer: number): boolean {
  return userAnswer === problem.correctAnswer;
}

/**
 * Get all unlocked tiers for a given user level
 */
export function getUnlockedTiers(userLevel: number): RacingTierConfig[] {
  return RACING_TIERS.filter(tier => tier.unlockLevel <= userLevel);
}

/**
 * Check if a specific tier is unlocked
 */
export function isTierUnlocked(tier: RacingTier, userLevel: number): boolean {
  const config = getTierConfig(tier);
  return config.unlockLevel <= userLevel;
}

/**
 * Get the next locked tier (for progression display)
 */
export function getNextLockedTier(userLevel: number): RacingTierConfig | null {
  const locked = RACING_TIERS.filter(tier => tier.unlockLevel > userLevel);
  return locked.length > 0 ? locked[0] : null;
}
