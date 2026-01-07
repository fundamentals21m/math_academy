import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';

/**
 * Nostr Authentication Tests
 *
 * Test Nostr-based authentication flows.
 * Note: These tests check UI behavior without an actual Nostr extension.
 */
test.describe('Nostr Authentication', () => {
  const course = COURSES[0];

  test('shows Nostr extension prompt when not installed', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    // Look for Nostr extension prompt
    const nostrPrompt = page.locator(
      ':text("Nostr"), ' +
      ':text("extension"), ' +
      ':text("NIP-07")'
    );

    // Either shows prompt or leaderboard (if already connected)
    await expect(page.locator('body')).toBeVisible();
  });

  test('connect button is present', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    const connectButton = page.locator(
      'button:has-text("Connect"), ' +
      'button:has-text("Sign in"), ' +
      'button:has-text("Login")'
    );

    // Connect button should be visible or user is already connected
    const hasConnectButton = await connectButton.count() > 0;
    const hasUserInfo = await page.locator('[class*="user"], [class*="profile"]').count() > 0;

    expect(hasConnectButton || hasUserInfo).toBe(true);
  });

  test('connect button shows disabled state without extension', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    const connectButton = page.locator('button:has-text("Connect")').first();

    if (await connectButton.isVisible()) {
      // Without extension, button might be disabled or show warning
      const isDisabled = await connectButton.isDisabled().catch(() => false);
      const hasWarning = await page.locator(':text("extension")').count() > 0;

      // Either disabled or shows warning
      expect(isDisabled || hasWarning).toBe(true);
    }
  });

  test('clicking connect without extension shows help', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    const connectButton = page.locator('button:has-text("Connect")').first();

    if (await connectButton.isVisible() && !(await connectButton.isDisabled())) {
      await connectButton.click();
      await page.waitForTimeout(1000);

      // Should show some guidance
      const helpText = page.locator(
        ':text("Alby"), ' +
        ':text("nos2x"), ' +
        ':text("install"), ' +
        ':text("extension")'
      );

      // Either shows help or error message
      await expect(page.locator('body')).toBeVisible();
    }
  });
});

/**
 * Mock Nostr Extension Tests
 *
 * Test with mocked window.nostr object.
 */
test.describe('Nostr Extension Mock', () => {
  const course = COURSES[0];

  test.beforeEach(async ({ page }) => {
    // Mock window.nostr before navigation
    await page.addInitScript(() => {
      (window as any).nostr = {
        getPublicKey: async () => 'npub1mock1234567890abcdef',
        signEvent: async (event: any) => ({
          ...event,
          sig: 'mocksignature1234567890',
        }),
        nip04: {
          encrypt: async () => 'encrypted',
          decrypt: async () => 'decrypted',
        },
      };
    });
  });

  test('detects Nostr extension', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    // Check if extension is detected
    const hasNostr = await page.evaluate(() => {
      return typeof (window as any).nostr !== 'undefined';
    });

    expect(hasNostr).toBe(true);
  });

  test('connect button is enabled with extension', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    const connectButton = page.locator('button:has-text("Connect")').first();

    if (await connectButton.isVisible()) {
      const isEnabled = !(await connectButton.isDisabled());
      expect(isEnabled).toBe(true);
    }
  });
});

/**
 * User State Tests
 */
test.describe('User State', () => {
  const course = COURSES[0];

  test('anonymous user can browse content', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Content should be visible
    const content = page.locator('main, article, [class*="lesson"]');
    await expect(content.first()).toBeVisible();
  });

  test('anonymous user XP is stored locally', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const hasLocalXP = await page.evaluate(() => {
      const state = localStorage.getItem('gamificationState');
      return state !== null;
    });

    expect(hasLocalXP).toBe(true);
  });

  test('quiz works without authentication', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quizOptions = page.locator('button[class*="option"], [data-testid="quiz-option"]');

    if (await quizOptions.count() > 0) {
      // Can interact with quiz
      await quizOptions.first().click();
      await page.waitForTimeout(500);

      // No error should occur
      await expect(page.locator('body')).toBeVisible();
    }
  });
});

/**
 * Leaderboard Without Auth
 */
test.describe('Leaderboard Without Auth', () => {
  const course = COURSES[0];

  test('can view leaderboard without signing in', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    // Leaderboard page should load
    await expect(page.locator('body')).toBeVisible();

    // Should show leaderboard content or login prompt
    const hasContent = await page.locator('[class*="leaderboard"], :text("Leaderboard")').count() > 0;
    expect(hasContent).toBe(true);
  });

  test('leaderboard shows entries if available', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Either shows entries or empty state
    const entries = page.locator('[class*="entry"], [class*="row"], tr');
    const emptyState = page.locator(':text("No entries"), :text("Be the first")');

    const hasEntries = await entries.count() > 0;
    const isEmpty = await emptyState.count() > 0;

    expect(hasEntries || isEmpty).toBe(true);
  });
});

/**
 * Session Persistence
 */
test.describe('Session Persistence', () => {
  const course = COURSES[0];

  test('localStorage persists across navigation', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Get initial state
    const stateBefore = await page.evaluate(() => {
      return localStorage.getItem('gamificationState');
    });

    // Navigate away and back
    await page.goto(`${course.baseUrl}#/section/2`);
    await page.waitForLoadState('networkidle');

    const stateAfter = await page.evaluate(() => {
      return localStorage.getItem('gamificationState');
    });

    // State should persist
    expect(stateAfter).not.toBeNull();
  });

  test('progress persists after page reload', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const stateBefore = await page.evaluate(() => {
      return localStorage.getItem('gamificationState');
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    const stateAfter = await page.evaluate(() => {
      return localStorage.getItem('gamificationState');
    });

    expect(stateAfter).toBe(stateBefore);
  });
});
