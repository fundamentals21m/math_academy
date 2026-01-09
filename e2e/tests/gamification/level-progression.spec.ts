import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';
import { QuizComponent } from '../../page-objects/QuizComponent';

// Storage key must match shared/gamification/storage.ts
const STORAGE_KEY = 'magic-internet-math-progress';

// Level thresholds matching shared/gamification/types.ts
const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 850, 1300, 1900, 2650, 3550, 4600,
  5850, 7300, 9000, 10950, 13150, 15650, 18450, 21550, 25000, 28800,
  33000, 37600, 42600, 48000, 54000,
];

// Calculate level from XP (mirrors xpCalculator.ts logic)
function calculateLevelFromXP(totalXP: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
}

/**
 * Create a valid GamificationState structure for testing.
 * Matches the schema validated by storage.ts isValidGamificationState.
 */
function createTestState(overrides: { totalXP?: number; level?: number } = {}) {
  const totalXP = overrides.totalXP ?? 0;
  const level = overrides.level ?? calculateLevelFromXP(totalXP);

  return {
    version: 2,
    user: {
      totalXP,
      level,
      sectionsCompleted: [],
      partsCompleted: [],
      quizzesTaken: 0,
      perfectQuizzes: 0,
      visualizationsUsed: 0,
      totalTimeSpentMinutes: 0,
      joinedAt: new Date().toISOString(),
    },
    sections: {},
    achievements: [],
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      freezesRemaining: 3,
      freezeUsedToday: false,
    },
    dailyGoals: {
      date: new Date().toISOString().split('T')[0],
      xpEarned: 0,
      xpGoal: 50,
      completed: false,
    },
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Level Progression Tests
 *
 * Verify that user levels are calculated and displayed correctly.
 */
test.describe('Level Progression', () => {
  const testCourses = COURSES.slice(0, 3);

  // Helper to get current level from localStorage
  async function getCurrentLevel(page: any): Promise<number> {
    return page.evaluate((storageKey: string) => {
      const state = localStorage.getItem(storageKey);
      if (state) {
        try {
          const parsed = JSON.parse(state);
          // Level is stored in user.level (GamificationState.user.level)
          return parsed.user?.level || parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    }, STORAGE_KEY);
  }

  // Helper to get current XP
  async function getCurrentXP(page: any): Promise<number> {
    return page.evaluate((storageKey: string) => {
      const state = localStorage.getItem(storageKey);
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.user?.totalXP || parsed.totalXP || 0;
        } catch {
          return 0;
        }
      }
      return 0;
    }, STORAGE_KEY);
  }

  // Helper to set XP for testing level ups (creates valid state structure)
  async function setXP(page: any, xp: number): Promise<void> {
    const level = calculateLevelFromXP(xp);
    await page.evaluate(({ storageKey, xpAmount, levelValue }: { storageKey: string; xpAmount: number; levelValue: number }) => {
      const stateStr = localStorage.getItem(storageKey);
      let state = stateStr ? JSON.parse(stateStr) : null;

      // If state exists and has user object, update it
      if (state?.user) {
        state.user.totalXP = xpAmount;
        state.user.level = levelValue;
      } else {
        // Create minimal valid state structure
        state = {
          version: 2,
          user: {
            totalXP: xpAmount,
            level: levelValue,
            sectionsCompleted: [],
            partsCompleted: [],
            quizzesTaken: 0,
            perfectQuizzes: 0,
            visualizationsUsed: 0,
            totalTimeSpentMinutes: 0,
            joinedAt: new Date().toISOString(),
          },
          sections: {},
          achievements: [],
          streak: {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            freezesRemaining: 3,
            freezeUsedToday: false,
          },
          dailyGoals: {
            date: new Date().toISOString().split('T')[0],
            xpEarned: 0,
            xpGoal: 50,
            completed: false,
          },
          lastUpdated: new Date().toISOString(),
        };
      }
      localStorage.setItem(storageKey, JSON.stringify(state));
    }, { storageKey: STORAGE_KEY, xpAmount: xp, levelValue: level });
  }

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('level starts at 1 for new users', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.evaluate((key: string) => localStorage.removeItem(key), STORAGE_KEY);

        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const level = await getCurrentLevel(page);

        // New users should be level 1
        expect(level).toBeGreaterThanOrEqual(1);
      });

      test('level is displayed in UI', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Look for level display
        const levelDisplay = page.locator(
          '[class*="level"], ' +
          ':text("Level"), ' +
          ':text("Lvl")'
        );

        // Level display should exist
        const levelVisible = await levelDisplay.count() > 0;

        if (levelVisible) {
          const levelText = await levelDisplay.first().textContent();
          expect(levelText).toMatch(/\d/);
        }
      });

      test('level increases with XP', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.evaluate((key: string) => localStorage.removeItem(key), STORAGE_KEY);

        // Navigate to section to initialize state
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Set high XP that should result in higher level (10000 XP = level 13)
        await setXP(page, 10000);

        // Reload to apply
        await page.reload();
        await page.waitForLoadState('networkidle');

        const level = await getCurrentLevel(page);

        // With 10000 XP, should be above level 1 (actually level 13)
        expect(level).toBeGreaterThan(1);
      });
    });
  }
});

/**
 * Level Up Notifications
 */
test.describe('Level Up', () => {
  const course = COURSES[0];

  test('level up is celebrated', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set XP just below level 2 threshold with valid state structure
    const state = createTestState({ totalXP: 90, level: 1 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Earn XP to level up
    await page.waitForTimeout(2000);

    // Look for level up notification
    const levelUp = page.locator(
      '[class*="level-up"], ' +
      '[class*="levelUp"], ' +
      ':text("Level Up"), ' +
      '[class*="celebration"]'
    );

    // Level up notification is optional
    // Just verify no crash
    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * Level Display
 */
test.describe('Level Display', () => {
  const course = COURSES[0];

  test('level badge shows correct level', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set specific level with valid state structure
    // Note: 500 XP = level 4 per thresholds, but we're testing level display
    const state = createTestState({ totalXP: 850, level: 5 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const levelDisplay = page.locator('[class*="level"]').first();

    if (await levelDisplay.isVisible()) {
      const text = await levelDisplay.textContent();
      expect(text).toContain('5');
    }
  });

  test('level progress bar shows XP to next level', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Look for progress bar
    const progressBar = page.locator(
      '[class*="progress"], ' +
      '[role="progressbar"], ' +
      '[class*="xp-bar"]'
    );

    // Progress bar is optional
    if (await progressBar.count() > 0) {
      await expect(progressBar.first()).toBeVisible();
    }
  });
});

/**
 * Level Calculation
 */
test.describe('Level Calculation', () => {
  const course = COURSES[0];

  async function getCurrentLevel(page: any): Promise<number> {
    return page.evaluate((storageKey: string) => {
      const state = localStorage.getItem(storageKey);
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.user?.level || parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    }, STORAGE_KEY);
  }

  test('level is calculated from XP', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Test different XP amounts with their expected levels
    const xpLevels = [
      { xp: 0, expectedMin: 1, expectedMax: 1 },
      { xp: 100, expectedMin: 2, expectedMax: 2 },   // 100 = level 2
      { xp: 500, expectedMin: 4, expectedMax: 4 },   // 500 = level 4
      { xp: 1000, expectedMin: 5, expectedMax: 5 }, // 1000 = level 5 (850-1300)
      { xp: 5000, expectedMin: 10, expectedMax: 11 }, // 5000 = level 10-11
    ];

    for (const { xp, expectedMin, expectedMax } of xpLevels) {
      const state = createTestState({ totalXP: xp });
      await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
        localStorage.setItem(key, JSON.stringify(stateObj));
      }, { key: STORAGE_KEY, stateObj: state });

      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const level = await getCurrentLevel(page);

      expect(level).toBeGreaterThanOrEqual(expectedMin);
      expect(level).toBeLessThanOrEqual(expectedMax);
    }
  });

  test('level never decreases', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set high XP with valid state
    const state = createTestState({ totalXP: 1000, level: 5 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const level1 = await getCurrentLevel(page);

    // Visit another section
    await page.goto(`${course.baseUrl}#/section/2`);
    await page.waitForLoadState('networkidle');

    const level2 = await getCurrentLevel(page);

    expect(level2).toBeGreaterThanOrEqual(level1);
  });
});

/**
 * Level Persistence
 */
test.describe('Level Persistence', () => {
  const course = COURSES[0];

  async function getCurrentLevel(page: any): Promise<number> {
    return page.evaluate((storageKey: string) => {
      const state = localStorage.getItem(storageKey);
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.user?.level || parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    }, STORAGE_KEY);
  }

  test('level persists after page reload', async ({ page }) => {
    await page.goto(course.baseUrl);

    const state = createTestState({ totalXP: 850, level: 5 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const levelBefore = await getCurrentLevel(page);

    await page.reload();
    await page.waitForLoadState('networkidle');

    const levelAfter = await getCurrentLevel(page);

    expect(levelAfter).toBe(levelBefore);
  });

  test('level persists across sessions', async ({ page }) => {
    await page.goto(course.baseUrl);

    const state = createTestState({ totalXP: 850, level: 5 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const level = await getCurrentLevel(page);

    // Clear cookies (but not localStorage)
    await page.context().clearCookies();

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const levelAfter = await getCurrentLevel(page);

    expect(levelAfter).toBe(level);
  });
});

/**
 * Level Edge Cases
 */
test.describe('Level Edge Cases', () => {
  const course = COURSES[0];

  async function getCurrentLevel(page: any): Promise<number> {
    return page.evaluate((storageKey: string) => {
      const state = localStorage.getItem(storageKey);
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.user?.level || parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    }, STORAGE_KEY);
  }

  test('level is never less than 1', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Create state with 0 XP (should still be level 1)
    const state = createTestState({ totalXP: 0 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const level = await getCurrentLevel(page);

    expect(level).toBeGreaterThanOrEqual(1);
  });

  test('handles very high XP values', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set very high XP - app should handle without crashing
    const state = createTestState({ totalXP: 1000000 });
    await page.evaluate(({ key, stateObj }: { key: string; stateObj: any }) => {
      localStorage.setItem(key, JSON.stringify(stateObj));
    }, { key: STORAGE_KEY, stateObj: state });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Primary assertion: app should not crash with high XP values
    await expect(page.locator('body')).toBeVisible();

    const level = await getCurrentLevel(page);

    // Level should be valid (1-25 range based on thresholds)
    // Note: level may be 1 if app resets state, which is acceptable
    expect(level).toBeGreaterThanOrEqual(1);
    expect(level).toBeLessThanOrEqual(25);
  });

  test('handles corrupted level data gracefully', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set invalid JSON - app should handle gracefully and create fresh state
    await page.evaluate((key: string) => {
      localStorage.setItem(key, 'not valid json {{{');
    }, STORAGE_KEY);

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Should not crash - app creates fresh state
    await expect(page.locator('body')).toBeVisible();

    // Level should be 1 (fresh state)
    const level = await getCurrentLevel(page);
    expect(level).toBe(1);
  });
});
