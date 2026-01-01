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

// =============================================================================
// PROGRESS BACKUP/RESTORE
// =============================================================================

/**
 * Backup file metadata
 */
export interface ProgressBackup {
  version: number;
  exportedAt: string;
  source: string;
  state: GamificationState;
}

const BACKUP_VERSION = 1;

/**
 * Export progress data as a downloadable JSON file
 */
export function exportProgress(): void {
  const state = loadState();
  if (!state) {
    logger.warn('No progress data to export');
    return;
  }

  const backup: ProgressBackup = {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    source: window.location.hostname,
    state,
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `math-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  logger.info('Progress exported successfully');
}

/**
 * Validates that an object is a valid ProgressBackup
 */
function isValidProgressBackup(data: unknown): data is ProgressBackup {
  if (data === null || typeof data !== 'object') {
    return false;
  }

  const obj = data as Record<string, unknown>;

  if (typeof obj.version !== 'number') return false;
  if (typeof obj.exportedAt !== 'string') return false;
  if (typeof obj.source !== 'string') return false;
  if (!isValidGamificationState(obj.state)) return false;

  return true;
}

/**
 * Import result with status and message
 */
export interface ImportResult {
  success: boolean;
  message: string;
  xpImported?: number;
}

/**
 * Import progress from a JSON file
 * @param file - The File object from file input
 * @returns Promise with import result
 */
export async function importProgress(file: File): Promise<ImportResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const text = event.target?.result;
        if (typeof text !== 'string') {
          resolve({ success: false, message: 'Failed to read file' });
          return;
        }

        const data: unknown = JSON.parse(text);

        if (!isValidProgressBackup(data)) {
          resolve({ success: false, message: 'Invalid backup file format' });
          return;
        }

        // Check for existing progress
        const existingState = loadState();
        const existingXP = existingState?.user.totalXP ?? 0;
        const importXP = data.state.user.totalXP;

        if (existingXP > importXP) {
          resolve({
            success: false,
            message: `Current progress (${existingXP} XP) is higher than backup (${importXP} XP). Import cancelled.`
          });
          return;
        }

        // Save the imported state
        saveState(data.state);

        logger.info(`Progress imported: ${importXP} XP from backup dated ${data.exportedAt}`);
        resolve({
          success: true,
          message: `Successfully restored ${importXP} XP!`,
          xpImported: importXP
        });
      } catch (error) {
        logger.error('Failed to parse backup file:', error);
        resolve({ success: false, message: 'Failed to parse backup file. Please check the file format.' });
      }
    };

    reader.onerror = () => {
      resolve({ success: false, message: 'Failed to read file' });
    };

    reader.readAsText(file);
  });
}

/**
 * Get progress summary for display
 */
export function getProgressSummary(): { totalXP: number; level: number; sectionsCompleted: number } | null {
  const state = loadState();
  if (!state) return null;

  return {
    totalXP: state.user.totalXP,
    level: state.user.level,
    sectionsCompleted: state.user.sectionsCompleted.length
  };
}
