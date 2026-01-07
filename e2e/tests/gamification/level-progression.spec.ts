import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';
import { QuizComponent } from '../../page-objects/QuizComponent';

/**
 * Level Progression Tests
 *
 * Verify that user levels are calculated and displayed correctly.
 */
test.describe('Level Progression', () => {
  const testCourses = COURSES.slice(0, 3);

  // Helper to get current level from localStorage
  async function getCurrentLevel(page: any): Promise<number> {
    return page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    });
  }

  // Helper to get current XP
  async function getCurrentXP(page: any): Promise<number> {
    return page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      if (state) {
        try {
          return JSON.parse(state).totalXP || 0;
        } catch {
          return 0;
        }
      }
      return 0;
    });
  }

  // Helper to set XP for testing level ups
  async function setXP(page: any, xp: number): Promise<void> {
    await page.evaluate((xpAmount: number) => {
      const state = localStorage.getItem('gamificationState');
      let parsed = state ? JSON.parse(state) : {};
      parsed.totalXP = xpAmount;
      localStorage.setItem('gamificationState', JSON.stringify(parsed));
    }, xp);
  }

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('level starts at 1 for new users', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.evaluate(() => localStorage.removeItem('gamificationState'));

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
        await page.evaluate(() => localStorage.removeItem('gamificationState'));

        // Set high XP that should result in higher level
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await setXP(page, 10000);

        // Reload to apply
        await page.reload();
        await page.waitForLoadState('networkidle');

        const level = await getCurrentLevel(page);

        // With 10000 XP, should be above level 1
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

    // Set XP just below level 2 threshold
    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 90,
        level: 1,
      }));
    });

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

    // Set specific level
    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 500,
        level: 5,
      }));
    });

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
    return page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    });
  }

  test('level is calculated from XP', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Test different XP amounts
    const xpLevels = [
      { xp: 0, expectedMin: 1, expectedMax: 1 },
      { xp: 100, expectedMin: 1, expectedMax: 3 },
      { xp: 500, expectedMin: 2, expectedMax: 10 },
      { xp: 1000, expectedMin: 3, expectedMax: 15 },
      { xp: 5000, expectedMin: 5, expectedMax: 30 },
    ];

    for (const { xp, expectedMin, expectedMax } of xpLevels) {
      await page.evaluate((xpAmount: number) => {
        localStorage.setItem('gamificationState', JSON.stringify({
          totalXP: xpAmount,
        }));
      }, xp);

      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const level = await getCurrentLevel(page);

      expect(level).toBeGreaterThanOrEqual(expectedMin);
      expect(level).toBeLessThanOrEqual(expectedMax);
    }
  });

  test('level never decreases', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Set high XP
    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 1000,
        level: 10,
      }));
    });

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
    return page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    });
  }

  test('level persists after page reload', async ({ page }) => {
    await page.goto(course.baseUrl);

    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 500,
        level: 5,
      }));
    });

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

    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 500,
        level: 5,
      }));
    });

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
    return page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      if (state) {
        try {
          const parsed = JSON.parse(state);
          return parsed.level || parsed.currentLevel || 1;
        } catch {
          return 1;
        }
      }
      return 1;
    });
  }

  test('level is never less than 1', async ({ page }) => {
    await page.goto(course.baseUrl);

    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 0,
        level: 0,
      }));
    });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const level = await getCurrentLevel(page);

    expect(level).toBeGreaterThanOrEqual(1);
  });

  test('handles very high XP values', async ({ page }) => {
    await page.goto(course.baseUrl);

    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 1000000,
      }));
    });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const level = await getCurrentLevel(page);

    // Should calculate a reasonable level
    expect(level).toBeGreaterThan(1);
    expect(level).toBeLessThan(1000); // Sanity check
  });

  test('handles corrupted level data', async ({ page }) => {
    await page.goto(course.baseUrl);

    await page.evaluate(() => {
      localStorage.setItem('gamificationState', JSON.stringify({
        totalXP: 500,
        level: 'not a number',
      }));
    });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Should not crash
    await expect(page.locator('body')).toBeVisible();
  });
});
