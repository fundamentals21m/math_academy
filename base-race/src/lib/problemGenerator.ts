// =============================================================================
// BASE CONVERSION PROBLEM GENERATOR
// =============================================================================
// Generates problems for the base conversion racing game with configurable
// difficulty tiers. Players convert numbers between binary, decimal, and hex.
// =============================================================================

/**
 * Racing tier type (1-10)
 */
export type BaseRacingTier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Supported number bases
 */
export type NumberBase = 2 | 10 | 16;

/**
 * Tier configuration for base conversion racing
 */
export interface BaseRacingTierConfig {
  tier: BaseRacingTier;
  name: string;
  unlockLevel: number;
  bases: NumberBase[];
  range: [number, number];
  basePoints: number;
}

/**
 * A base conversion problem
 */
export interface BaseConversionProblem {
  id: string;
  number: number;              // The actual number value
  sourceBase: NumberBase;      // Source representation
  targetBase: NumberBase;      // Target representation
  sourceDisplay: string;       // e.g., "1010" or "FF"
  correctAnswer: string;       // Answer in target base (uppercase for hex)
  displayText: string;         // Full problem text
  tier: BaseRacingTier;
  generatedAt: number;
}

/**
 * Base name for display
 */
const BASE_NAMES: Record<NumberBase, string> = {
  2: 'binary',
  10: 'decimal',
  16: 'hexadecimal',
};

/**
 * Tier configurations - gradual progression
 * Tiers 1-3: Binary and Decimal only
 * Tiers 4+: Add Hexadecimal
 */
export const BASE_RACING_TIERS: BaseRacingTierConfig[] = [
  { tier: 1,  name: 'Beginner',      unlockLevel: 1,  bases: [2, 10],     range: [1, 15],     basePoints: 50 },
  { tier: 2,  name: 'Novice',        unlockLevel: 2,  bases: [2, 10],     range: [1, 31],     basePoints: 75 },
  { tier: 3,  name: 'Intermediate',  unlockLevel: 3,  bases: [2, 10],     range: [1, 63],     basePoints: 100 },
  { tier: 4,  name: 'Advanced',      unlockLevel: 5,  bases: [2, 10, 16], range: [1, 127],    basePoints: 150 },
  { tier: 5,  name: 'Expert',        unlockLevel: 7,  bases: [2, 10, 16], range: [1, 255],    basePoints: 200 },
  { tier: 6,  name: 'Master',        unlockLevel: 9,  bases: [2, 10, 16], range: [1, 511],    basePoints: 300 },
  { tier: 7,  name: 'Grandmaster',   unlockLevel: 12, bases: [2, 10, 16], range: [1, 1023],   basePoints: 400 },
  { tier: 8,  name: 'Legend',        unlockLevel: 15, bases: [2, 10, 16], range: [1, 2047],   basePoints: 500 },
  { tier: 9,  name: 'Mythic',        unlockLevel: 18, bases: [2, 10, 16], range: [1, 4095],   basePoints: 650 },
  { tier: 10, name: 'Transcendent',  unlockLevel: 21, bases: [2, 10, 16], range: [1, 65535],  basePoints: 800 },
];

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
 * Convert a number to a string representation in the given base
 */
function numberToBase(num: number, base: NumberBase): string {
  return num.toString(base).toUpperCase();
}

/**
 * Get the display representation with base indicator
 */
function getDisplayText(sourceDisplay: string, sourceBase: NumberBase, targetBase: NumberBase): string {
  const sourceName = BASE_NAMES[sourceBase];
  const targetName = BASE_NAMES[targetBase];
  return `Convert ${sourceDisplay} (${sourceName}) to ${targetName}`;
}

/**
 * Select two different bases from the available bases for a tier
 */
function selectBases(availableBases: NumberBase[]): [NumberBase, NumberBase] {
  const sourceIndex = Math.floor(Math.random() * availableBases.length);
  let targetIndex = Math.floor(Math.random() * availableBases.length);

  // Ensure target is different from source
  while (targetIndex === sourceIndex) {
    targetIndex = Math.floor(Math.random() * availableBases.length);
  }

  return [availableBases[sourceIndex], availableBases[targetIndex]];
}

/**
 * Get tier configuration by tier number
 */
export function getTierConfig(tier: BaseRacingTier): BaseRacingTierConfig {
  const config = BASE_RACING_TIERS.find(t => t.tier === tier);
  if (!config) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return config;
}

/**
 * Generate a single base conversion problem
 */
export function generateProblem(tier: BaseRacingTier): BaseConversionProblem {
  const config = getTierConfig(tier);

  // Select random number in range
  const number = randomInt(config.range[0], config.range[1]);

  // Select source and target bases
  const [sourceBase, targetBase] = selectBases(config.bases);

  // Generate display and answer
  const sourceDisplay = numberToBase(number, sourceBase);
  const correctAnswer = numberToBase(number, targetBase);
  const displayText = getDisplayText(sourceDisplay, sourceBase, targetBase);

  return {
    id: generateId(),
    number,
    sourceBase,
    targetBase,
    sourceDisplay,
    correctAnswer,
    displayText,
    tier,
    generatedAt: Date.now(),
  };
}

/**
 * Generate a batch of problems for a game session
 */
export function generateProblemSet(tier: BaseRacingTier, count: number): BaseConversionProblem[] {
  const problems: BaseConversionProblem[] = [];
  const usedCombinations = new Set<string>();

  for (let i = 0; i < count; i++) {
    let problem: BaseConversionProblem;
    let attempts = 0;

    // Try to avoid duplicate number/base combinations
    do {
      problem = generateProblem(tier);
      attempts++;
    } while (
      attempts < 10 &&
      usedCombinations.has(`${problem.number}-${problem.sourceBase}-${problem.targetBase}`)
    );

    usedCombinations.add(`${problem.number}-${problem.sourceBase}-${problem.targetBase}`);
    problems.push(problem);
  }

  return problems;
}

/**
 * Validate a user's answer (case-insensitive, strips leading zeros)
 */
export function validateAnswer(problem: BaseConversionProblem, userAnswer: string): boolean {
  // Normalize both answers: uppercase, trim whitespace, remove leading zeros
  const normalizedUser = userAnswer.trim().toUpperCase().replace(/^0+/, '') || '0';
  const normalizedCorrect = problem.correctAnswer.replace(/^0+/, '') || '0';

  return normalizedUser === normalizedCorrect;
}

/**
 * Get all unlocked tiers for a given user level
 */
export function getUnlockedTiers(userLevel: number): BaseRacingTierConfig[] {
  return BASE_RACING_TIERS.filter(tier => tier.unlockLevel <= userLevel);
}

/**
 * Check if a specific tier is unlocked
 */
export function isTierUnlocked(tier: BaseRacingTier, userLevel: number): boolean {
  const config = getTierConfig(tier);
  return config.unlockLevel <= userLevel;
}

/**
 * Get the next locked tier (for progression display)
 */
export function getNextLockedTier(userLevel: number): BaseRacingTierConfig | null {
  const locked = BASE_RACING_TIERS.filter(tier => tier.unlockLevel > userLevel);
  return locked.length > 0 ? locked[0] : null;
}

/**
 * Get description of bases available in a tier
 */
export function getTierBasesDescription(tier: BaseRacingTier): string {
  const config = getTierConfig(tier);
  const baseNames = config.bases.map(b => BASE_NAMES[b]);

  if (baseNames.length === 2) {
    return `${baseNames[0]} & ${baseNames[1]}`;
  }
  return baseNames.join(', ');
}

/**
 * Get base name for display
 */
export function getBaseName(base: NumberBase): string {
  return BASE_NAMES[base];
}
