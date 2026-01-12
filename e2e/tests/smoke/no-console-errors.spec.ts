import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';

/**
 * Console error smoke tests
 *
 * Verify that pages load without critical JavaScript errors.
 */
test.describe('Console Error Checks', () => {
  // Expected/acceptable errors to ignore
  const ignoredErrors = [
    'favicon',
    'vite.svg',
    'manifest.json',
    '404', // Some expected 404s for optional resources
    'Failed to load resource', // Often just missing favicons
    'net::ERR_', // Network errors during tests
    'CORS', // CORS issues with external resources
  ];

  function isIgnoredError(message: string): boolean {
    return ignoredErrors.some(ignored =>
      message.toLowerCase().includes(ignored.toLowerCase())
    );
  }

  // Test homepage for each course
  for (const course of COURSES) {
    test(`@${course.id} homepage has no critical errors`, async ({ page }) => {
      const errors: string[] = [];

      // Collect console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // Also catch page errors (uncaught exceptions)
      page.on('pageerror', error => {
        errors.push(error.message);
      });

      await page.goto(course.baseUrl);
      await page.waitForLoadState('domcontentloaded');
      await page.waitForSelector('#root > *', { timeout: 15000 });

      // Wait a bit for any delayed errors
      await page.waitForTimeout(1000);

      // Filter out ignored errors
      const criticalErrors = errors.filter(e => !isIgnoredError(e));

      // Log errors for debugging
      if (criticalErrors.length > 0) {
        console.log(`Critical errors on ${course.id}:`, criticalErrors);
      }

      expect(criticalErrors).toHaveLength(0);
    });
  }

  // Test first section for a sample of courses
  const sampleCourses = COURSES.slice(0, 10);

  for (const course of sampleCourses) {
    test(`@${course.id} section 1 has no critical errors`, async ({ page }) => {
      const errors: string[] = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      page.on('pageerror', error => {
        errors.push(error.message);
      });

      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('domcontentloaded');
      await page.waitForSelector('#root > *', { timeout: 15000 });
      await page.waitForTimeout(1000);

      const criticalErrors = errors.filter(e => !isIgnoredError(e));

      if (criticalErrors.length > 0) {
        console.log(`Critical errors on ${course.id} section 1:`, criticalErrors);
      }

      expect(criticalErrors).toHaveLength(0);
    });
  }
});

/**
 * React error boundary tests
 */
test.describe('React Error Boundary', () => {
  const course = COURSES[0];

  test('invalid section ID shows graceful error', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', error => {
      errors.push(error.message);
    });

    // Navigate to invalid section
    await page.goto(`${course.baseUrl}#/section/99999`);
    await page.waitForLoadState('domcontentloaded');
      await page.waitForSelector('#root > *', { timeout: 15000 });

    // Should not crash with unhandled error
    // Either shows 404 message or redirects
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Page should still be functional
    const hasContent = await page.locator('main, [role="main"], #root').first().isVisible();
    expect(hasContent).toBe(true);
  });

  test('invalid route shows graceful error', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/invalid-route-that-does-not-exist`);
    await page.waitForLoadState('domcontentloaded');
      await page.waitForSelector('#root > *', { timeout: 15000 });

    // Should not show blank page
    const body = page.locator('body');
    const bodyText = await body.textContent();
    expect(bodyText?.length).toBeGreaterThan(0);
  });
});

/**
 * Network error handling
 */
test.describe('Network Error Handling', () => {
  const course = COURSES[0];

  test('handles failed API requests gracefully', async ({ page }) => {
    // Intercept API calls and make them fail
    await page.route('**/api/**', route => route.abort('failed'));

    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('domcontentloaded');
      await page.waitForSelector('#root > *', { timeout: 15000 });

    // Page should still load (may show error message but not crash)
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
