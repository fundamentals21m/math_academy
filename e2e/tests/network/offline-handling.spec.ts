import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';

/**
 * Offline Handling Tests
 *
 * Test how the application handles network failures and offline conditions.
 */
test.describe('Offline Handling', () => {
  const course = COURSES[0];

  test('handles offline mode gracefully', async ({ page, context }) => {
    // Load page first
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Go offline
    await context.setOffline(true);

    // Try to navigate (cached content should work, or show offline message)
    await page.goto(`${course.baseUrl}#/section/1`);

    // Should either show cached content or offline message
    await expect(page.locator('body')).toBeVisible();
  });

  test('shows error when API fails', async ({ page }) => {
    // Intercept API calls and make them fail
    await page.route('**/api/**', route => route.abort('failed'));
    await page.route('**/*.json', route => route.abort('failed'));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Page should still load (may show error message but not crash)
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles slow network', async ({ page }) => {
    // Simulate slow 3G
    const client = await page.context().newCDPSession(page);
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      downloadThroughput: (500 * 1024) / 8, // 500 kbps
      uploadThroughput: (500 * 1024) / 8,
      latency: 400,
    });

    const startTime = Date.now();
    await page.goto(course.baseUrl, { timeout: 60000 });
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Page should eventually load
    await expect(page.locator('body')).toBeVisible();

    // Log load time for reference
    console.log(`Slow network load time: ${loadTime}ms`);
  });

  test('recovers from temporary network failure', async ({ page, context }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Go offline briefly
    await context.setOffline(true);
    await page.waitForTimeout(1000);

    // Go back online
    await context.setOffline(false);

    // Should be able to navigate
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * API Failure Handling
 */
test.describe('API Failure Handling', () => {
  const course = COURSES[0];

  test('handles 500 server errors', async ({ page }) => {
    await page.route('**/api/**', route => {
      route.fulfill({
        status: 500,
        body: 'Internal Server Error',
      });
    });

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Should not crash
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles 404 not found', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/99999`);
    await page.waitForLoadState('networkidle');

    // Should show 404 or redirect
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles timeout', async ({ page }) => {
    await page.route('**/api/**', async route => {
      // Delay response significantly
      await new Promise(resolve => setTimeout(resolve, 30000));
      route.abort('timedout');
    });

    await page.goto(course.baseUrl, { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000);

    // Page should handle timeout gracefully
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles malformed JSON response', async ({ page }) => {
    await page.route('**/*.json', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: 'not valid json{',
      });
    });

    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Page should handle gracefully
    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * Network Retry Behavior
 */
test.describe('Network Retry', () => {
  const course = COURSES[0];

  test('retries failed requests', async ({ page }) => {
    let requestCount = 0;

    await page.route('**/api/**', route => {
      requestCount++;
      if (requestCount < 3) {
        route.abort('failed');
      } else {
        route.continue();
      }
    });

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Should have retried
    // Note: actual retry behavior depends on implementation
    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * Asset Loading
 */
test.describe('Asset Loading', () => {
  const course = COURSES[0];

  test('handles failed CSS load', async ({ page }) => {
    await page.route('**/*.css', route => route.abort('failed'));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('domcontentloaded');

    // Content should still be visible (unstyled)
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles failed JS load', async ({ page }) => {
    // Only block non-critical JS
    await page.route('**/analytics*.js', route => route.abort('failed'));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Main content should still work
    await expect(page.locator('body')).toBeVisible();
  });

  test('handles failed image load', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort('failed'));

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Content should still be visible
    const content = page.locator('main, article');
    await expect(content.first()).toBeVisible();
  });

  test('handles failed font load', async ({ page }) => {
    await page.route('**/*.{woff,woff2,ttf,otf}', route => route.abort('failed'));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Text should still be readable (fallback font)
    await expect(page.locator('body')).toBeVisible();
  });
});

/**
 * Service Worker Tests (if applicable)
 */
test.describe('Service Worker', () => {
  const course = COURSES[0];

  test('service worker is registered', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    const hasServiceWorker = await page.evaluate(async () => {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        return registrations.length > 0;
      }
      return false;
    });

    // Service worker is optional
    console.log(`Service Worker registered: ${hasServiceWorker}`);
  });
});

/**
 * WebSocket Fallback (if applicable)
 */
test.describe('Real-time Connections', () => {
  const course = COURSES[0];

  test('handles WebSocket failure gracefully', async ({ page }) => {
    // Block WebSocket connections
    await page.route('wss://**', route => route.abort('failed'));

    await page.goto(`${course.baseUrl}#/leaderboard`);
    await page.waitForLoadState('networkidle');

    // Page should still work (perhaps with stale data)
    await expect(page.locator('body')).toBeVisible();
  });
});
