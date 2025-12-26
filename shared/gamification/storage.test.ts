/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { loadState, saveState, clearState } from './storage';
import type { GamificationState } from './types';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

const STORAGE_KEY = 'magic-internet-math-progress';

describe('storage', () => {
  beforeEach(() => {
    // Setup localStorage mock
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const createValidState = (): GamificationState => ({
    version: 2,
    user: {
      totalXP: 1000,
      level: 3,
      rank: 'Explorer',
      dailyXP: 50,
      weeklyXP: 300,
      achievements: ['first-quiz'],
    },
    sections: {
      'section-1': {
        sectionId: 'section-1',
        visitedAt: '2024-01-01T00:00:00Z',
        completedAt: '2024-01-02T00:00:00Z',
        quizAttempts: [],
        visualizationsInteracted: [],
        masteryLevel: 'familiar',
        timeSpentSeconds: 600,
      },
    },
    streak: {
      currentStreak: 5,
      longestStreak: 10,
      lastActivityDate: '2024-01-15',
    },
    lastUpdated: Date.now(),
    courseId: 'crypto',
  });

  describe('loadState', () => {
    it('should return null when no state is stored', () => {
      const result = loadState();
      expect(result).toBeNull();
    });

    it('should return parsed state when valid data exists', () => {
      const state = createValidState();
      localStorageMock.setItem(STORAGE_KEY, JSON.stringify(state));

      const result = loadState();
      expect(result).not.toBeNull();
      expect(result?.user.totalXP).toBe(1000);
      expect(result?.user.level).toBe(3);
    });

    it('should return null for invalid JSON', () => {
      localStorageMock.setItem(STORAGE_KEY, 'not-valid-json');

      const result = loadState();
      expect(result).toBeNull();
      // Should have cleared the corrupted data
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(STORAGE_KEY);
    });

    it('should return null when required fields are missing', () => {
      const invalidState = { version: 2, user: { totalXP: 100 } };
      localStorageMock.setItem(STORAGE_KEY, JSON.stringify(invalidState));

      const result = loadState();
      expect(result).toBeNull();
    });

    it('should migrate state from old version', () => {
      const oldState = {
        ...createValidState(),
        version: 1,
      };
      localStorageMock.setItem(STORAGE_KEY, JSON.stringify(oldState));

      const result = loadState();
      expect(result).not.toBeNull();
      expect(result?.version).toBe(2);
    });
  });

  describe('saveState', () => {
    it('should save state to localStorage', () => {
      const state = createValidState();

      saveState(state);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        STORAGE_KEY,
        JSON.stringify(state)
      );
    });

    it('should handle localStorage errors gracefully', () => {
      const state = createValidState();
      localStorageMock.setItem.mockImplementationOnce(() => {
        throw new Error('QuotaExceededError');
      });

      // Should not throw
      expect(() => saveState(state)).not.toThrow();
    });
  });

  describe('clearState', () => {
    it('should remove state from localStorage', () => {
      const state = createValidState();
      localStorageMock.setItem(STORAGE_KEY, JSON.stringify(state));

      clearState();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith(STORAGE_KEY);
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.removeItem.mockImplementationOnce(() => {
        throw new Error('Access denied');
      });

      // Should not throw
      expect(() => clearState()).not.toThrow();
    });
  });

  describe('localStorage unavailable', () => {
    it('should return null when localStorage throws on access', () => {
      Object.defineProperty(global, 'localStorage', {
        get() {
          throw new Error('localStorage disabled');
        },
      });

      // Should handle gracefully
      const result = loadState();
      expect(result).toBeNull();
    });
  });
});
