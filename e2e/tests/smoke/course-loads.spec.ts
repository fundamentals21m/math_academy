import { test, expect } from '@playwright/test';
import { COURSES, CourseConfig } from '../../config/courses';

/**
 * Smoke tests to verify all courses load correctly
 *
 * These tests run on every PR to catch deployment issues early.
 */
test.describe('Course Loading Smoke Tests', () => {
  // Test each course
  for (const course of COURSES) {
    test.describe(`@${course.id} - ${course.name}`, () => {
      test('homepage loads successfully', async ({ page }) => {
        const response = await page.goto(course.baseUrl);

        // Verify successful response
        expect(response?.status()).toBeLessThan(400);

        // Verify page has content
        await expect(page.locator('body')).toBeVisible();

        // Verify title is set
        const title = await page.title();
        expect(title.length).toBeGreaterThan(0);
      });

      test('first section loads', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('domcontentloaded');

        // Wait for React to render content inside #root
        await page.waitForSelector('#root > *', { timeout: 15000 });

        // Should have main content area - use broad selector for React SPAs
        const mainContent = page.locator(
          'main, [role="main"], article, [class*="content"], [class*="min-h-screen"]'
        );
        await expect(mainContent.first()).toBeVisible({ timeout: 15000 });
      });

      test('theorems page loads', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/theorems`);
        await page.waitForLoadState('domcontentloaded');

        // Wait for React to render
        await page.waitForSelector('#root > *', { timeout: 15000 });

        // Page should not show 404 or error
        const title = await page.title();
        expect(title.toLowerCase()).not.toContain('error');
        expect(title.toLowerCase()).not.toContain('404');
      });

      test('leaderboard page loads', async ({ page }) => {
        if (!course.hasLeaderboard) {
          test.skip();
          return;
        }

        await page.goto(`${course.baseUrl}#/leaderboard`);
        await page.waitForLoadState('domcontentloaded');

        // Wait for React to render
        await page.waitForSelector('#root > *', { timeout: 15000 });

        // Page should load without error
        const title = await page.title();
        expect(title.toLowerCase()).not.toContain('error');
      });
    });
  }
});

/**
 * Test a random sample of sections for each course
 */
test.describe('Section Sampling', () => {
  // Test 3 random sections per course (first, middle, last)
  for (const course of COURSES) {
    const sectionIds = [
      1,
      Math.floor(course.totalSections / 2),
      course.totalSections,
    ].filter(id => id >= 1 && id <= course.totalSections);

    for (const sectionId of sectionIds) {
      test(`@${course.id} section ${sectionId} loads`, async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/${sectionId}`);
        await page.waitForLoadState('domcontentloaded');

        // Wait for React to render
        await page.waitForSelector('#root > *', { timeout: 15000 });

        // Content should be visible - use broad selector for React SPAs
        const content = page.locator(
          'main, article, [class*="lesson"], [class*="min-h-screen"], [class*="content"]'
        );
        await expect(content.first()).toBeVisible({ timeout: 15000 });
      });
    }
  }
});
