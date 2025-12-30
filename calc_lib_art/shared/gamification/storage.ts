import type { GamificationState } from './types';
import { getLogger } from '../utils/logger';

const logger = getLogger('Storage');

/** localStorage key for gamification state */
const STORAGE_KEY = 'magic-internet-math-progress';

/** Current schema version for migration support */
const CURRENT_VERSION = 2;

/**
 * Check if localStorage is available.
 * Tests write/read/delete to ensure full functionality.
 * @returns true if localStorage is available and functional
 */
function isLocalStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates that an object has the required GamificationState structure.
 * Performs runtime type checking since JSON.parse returns unknown.
 * @param data - The parsed JSON data to validate
 * @returns true if data has required GamificationState fields
 */
function isValidGamificationState(data: unknown): data is GamificationState {
  if (data === null || typeof data !== 'object') {
    return false;
  }

  const obj = data as Record<string, unknown>;

  // Check required top-level fields exist and have correct types
  if (typeof obj.version !== 'number') return false;
  if (typeof obj.user !== 'object' || obj.user === null) return false;
  if (typeof obj.sections !== 'object' || obj.sections === null) return false;
  if (typeof obj.streak !== 'object' || obj.streak === null) return false;

  // Validate user object has required fields
  const user = obj.user as Record<string, unknown>;
  if (typeof user.totalXP !== 'number') return false;
  if (typeof user.level !== 'number') return false;

  // Validate streak object has required fields
  const streak = obj.streak as Record<string, unknown>;
  if (typeof streak.currentStreak !== 'number') return false;
  if (typeof streak.longestStreak !== 'number') return false;

  return true;
}

/**
 * Load gamification state from localStorage.
 * Handles JSON parsing, validation, and version migration.
 * @returns The validated GamificationState or null if unavailable/invalid
 */
export function loadState(): GamificationState | null {
  if (!isLocalStorageAvailable()) {
    logger.warn('localStorage is not available');
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed: unknown = JSON.parse(saved);

    // Validate structure before type assertion
    if (!isValidGamificationState(parsed)) {
      logger.warn('Invalid gamification state structure in localStorage');
      return null;
    }

    // Version migration if needed
    if (parsed.version !== CURRENT_VERSION) {
      logger.info(`Migrating state from v${parsed.version} to v${CURRENT_VERSION}`);
      parsed.version = CURRENT_VERSION;
      // Future migrations can be added here
    }

    return parsed;
  } catch (error) {
    logger.error('Failed to load gamification state:', error);
    // Clear corrupted data to prevent persistent failures
    try {
      localStorage.removeItem(STORAGE_KEY);
      logger.info('Cleared corrupted gamification state from localStorage');
    } catch {
      // Ignore - if we can't remove it, we've already logged the original error
    }
    return null;
  }
}

/**
 * Save gamification state to localStorage
 */
export function saveState(state: GamificationState): void {
  if (!isLocalStorageAvailable()) {
    logger.warn('localStorage is not available, state not saved');
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    logger.error('Failed to save gamification state:', error);
  }
}

/**
 * Clear gamification state from localStorage
 */
export function clearState(): void {
  if (!isLocalStorageAvailable()) {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    logger.error('Failed to clear gamification state:', error);
  }
}
