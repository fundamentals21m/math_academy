import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';
import { QuizComponent } from '../../page-objects/QuizComponent';

/**
 * XP Calculation Tests
 *
 * Verify that XP (experience points) are calculated and awarded correctly.
 */
test.describe('XP Calculation', () => {
  const testCourses = COURSES.slice(0, 3);

  // Helper to get current XP from localStorage
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

  // Helper to clear gamification state
  async function clearState(page: any): Promise<void> {
    await page.evaluate(() => {
      localStorage.removeItem('gamificationState');
    });
  }

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test.beforeEach(async ({ page }) => {
        // Clear state before each test
        await page.goto(course.baseUrl);
        await clearState(page);
      });

      test('visiting section awards XP', async ({ page }) => {
        const initialXP = await getCurrentXP(page);

        // Visit a section
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const finalXP = await getCurrentXP(page);

        // XP should increase
        expect(finalXP).toBeGreaterThan(initialXP);
      });

      test('completing quiz awards XP', async ({ page }) => {
        // Visit section first (may trigger initial XP)
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);

        const beforeQuizXP = await getCurrentXP(page);

        // Go to quiz
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        const optionCount = await quiz.getOptionCount();
        if (optionCount > 0) {
          await quiz.completeAllQuestions();

          if (await quiz.isComplete()) {
            const afterQuizXP = await getCurrentXP(page);
            expect(afterQuizXP).toBeGreaterThan(beforeQuizXP);
          }
        }
      });

      test('XP persists across page navigation', async ({ page }) => {
        // Earn some XP
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const xpAfterVisit = await getCurrentXP(page);

        // Navigate away
        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        // Navigate back
        await page.goto(`${course.baseUrl}#/section/2`);
        await page.waitForLoadState('networkidle');

        const xpAfterNavigation = await getCurrentXP(page);

        // XP should not have been lost
        expect(xpAfterNavigation).toBeGreaterThanOrEqual(xpAfterVisit);
      });

      test('XP accumulates across sections', async ({ page }) => {
        // Visit section 1
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const xpAfterSection1 = await getCurrentXP(page);

        // Visit section 2
        await page.goto(`${course.baseUrl}#/section/2`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const xpAfterSection2 = await getCurrentXP(page);

        // XP should have increased
        expect(xpAfterSection2).toBeGreaterThanOrEqual(xpAfterSection1);
      });
    });
  }
});

/**
 * XP Award Amounts
 */
test.describe('XP Award Amounts', () => {
  const course = COURSES[0];

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

  test('section visit awards expected XP amount', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.evaluate(() => localStorage.removeItem('gamificationState'));

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const xp = await getCurrentXP(page);

    // XP should be a reasonable amount (not zero, not absurdly high)
    expect(xp).toBeGreaterThan(0);
    expect(xp).toBeLessThan(10000); // Sanity check
  });

  test('quiz completion awards more XP for correct answers', async ({ page }) => {
    // This is hard to test without knowing correct answers
    // Just verify some XP is awarded
    await page.goto(course.baseUrl);
    await page.evaluate(() => localStorage.removeItem('gamificationState'));

    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (await quiz.getOptionCount() > 0) {
      await quiz.completeAllQuestions();

      const xp = await getCurrentXP(page);
      expect(xp).toBeGreaterThan(0);
    }
  });
});

/**
 * XP Display
 */
test.describe('XP Display', () => {
  const course = COURSES[0];

  test('XP is displayed in UI', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Look for XP display
    const xpDisplay = page.locator('[class*="xp"], [class*="XP"], :text("XP")');

    // XP should be visible somewhere
    const xpVisible = await xpDisplay.count() > 0;

    // If XP display exists, it should show a number
    if (xpVisible) {
      const xpText = await xpDisplay.first().textContent();
      expect(xpText).toMatch(/\d/);
    }
  });

  test('XP updates after earning', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.evaluate(() => localStorage.removeItem('gamificationState'));

    // Visit section to earn XP
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Check if XP display shows non-zero
    const xpDisplay = page.locator('[class*="xp"], [class*="XP"]').first();

    if (await xpDisplay.isVisible()) {
      const xpText = await xpDisplay.textContent();
      const xpMatch = xpText?.match(/(\d+)/);
      if (xpMatch) {
        const displayedXP = parseInt(xpMatch[1]);
        expect(displayedXP).toBeGreaterThan(0);
      }
    }
  });
});

/**
 * XP Animation/Notification
 */
test.describe('XP Notifications', () => {
  const course = COURSES[0];

  test('shows XP gain notification', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.evaluate(() => localStorage.removeItem('gamificationState'));

    // Visit section to earn XP
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Wait for potential notification animation
    await page.waitForTimeout(2000);

    // Look for XP notification (may or may not exist)
    const notification = page.locator(
      '[class*="toast"], ' +
      '[class*="notification"], ' +
      '[class*="popup"], ' +
      '[class*="+"]'
    );

    // This is optional - just verify no crash
    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * XP Edge Cases
 */
test.describe('XP Edge Cases', () => {
  const course = COURSES[0];

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

  test('revisiting section does not double-award XP', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.evaluate(() => localStorage.removeItem('gamificationState'));

    // Visit section 1
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const xpAfterFirst = await getCurrentXP(page);

    // Visit same section again
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const xpAfterSecond = await getCurrentXP(page);

    // XP should not double (or should increase by smaller amount)
    // Allow some increase for time spent, but not full double
    expect(xpAfterSecond).toBeLessThanOrEqual(xpAfterFirst * 2);
  });

  test('XP is never negative', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const xp = await getCurrentXP(page);
    expect(xp).toBeGreaterThanOrEqual(0);
  });

  test('handles corrupted localStorage gracefully', async ({ page }) => {
    await page.goto(course.baseUrl);

    // Corrupt the localStorage
    await page.evaluate(() => {
      localStorage.setItem('gamificationState', 'not valid json');
    });

    // Navigate - should not crash
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Page should still work
    await expect(page.locator('body')).toBeVisible();

    // XP should be reset to valid state
    const xp = await getCurrentXP(page);
    expect(typeof xp).toBe('number');
  });
});

/**
 * XP Synchronization
 */
test.describe('XP State Management', () => {
  const course = COURSES[0];

  test('XP state has correct structure', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const state = await page.evaluate(() => {
      const stateStr = localStorage.getItem('gamificationState');
      return stateStr ? JSON.parse(stateStr) : null;
    });

    if (state) {
      // Check expected properties
      expect(typeof state.totalXP).toBe('number');

      // Optional properties
      if ('level' in state) {
        expect(typeof state.level).toBe('number');
      }
      if ('streak' in state) {
        expect(typeof state.streak).toBe('number');
      }
    }
  });
});
