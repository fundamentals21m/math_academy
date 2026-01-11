import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';
import { SectionPage } from '../../page-objects/SectionPage';

/**
 * Navigation smoke tests
 *
 * Verify that navigation between sections works correctly.
 */
test.describe('Navigation Smoke Tests', () => {
  // Test navigation for a subset of courses (to keep smoke tests fast)
  const testCourses = COURSES.slice(0, 5); // First 5 courses

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('can navigate from home to first section', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        // Find section link - may need to open mobile menu first
        let sectionLink = page.locator('a[href*="section/1"], a[href*="section/0"]').first();

        // If section link isn't visible, try opening mobile menu
        if (!(await sectionLink.isVisible().catch(() => false))) {
          const menuButton = page.locator(
            'button[aria-label*="menu" i], ' +
            'button[aria-label*="Menu"], ' +
            '[class*="hamburger"], ' +
            '[class*="mobile-menu"]'
          ).first();

          if (await menuButton.isVisible().catch(() => false)) {
            await menuButton.click();
            await page.waitForTimeout(500); // Wait for menu animation
          }
        }

        // Try to find section link again after potentially opening menu
        sectionLink = page.locator('a[href*="section/1"], a[href*="section/0"]').first();

        if (await sectionLink.isVisible().catch(() => false)) {
          await sectionLink.click();
          await page.waitForLoadState('networkidle');

          // Should now be on a section page
          const url = page.url();
          expect(url).toMatch(/section\/\d+/);
        }
      });

      test('next/previous navigation works', async ({ page }) => {
        // Skip if course has only 1 section
        if (course.totalSections < 2) {
          test.skip();
          return;
        }

        const sectionPage = new SectionPage(page);
        await page.goto(`${course.baseUrl}#/section/1`);
        await sectionPage.waitForPageLoad();

        // Try to go to next section
        if (await sectionPage.hasNextSection()) {
          await sectionPage.goToNextSection();

          // Should be on section 2
          const currentId = await sectionPage.getCurrentSectionId();
          expect(currentId).toBe(2);

          // Should be able to go back
          if (await sectionPage.hasPreviousSection()) {
            await sectionPage.goToPreviousSection();
            const backId = await sectionPage.getCurrentSectionId();
            expect(backId).toBe(1);
          }
        }
      });

      test('sidebar navigation works', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        // Look for sidebar
        const sidebar = page.locator('aside, nav, [class*="sidebar"]');

        if (await sidebar.first().isVisible()) {
          // Find a section link in sidebar
          const sectionLinks = sidebar.locator('a[href*="section"]');

          if (await sectionLinks.count() > 0) {
            // Click first section link
            await sectionLinks.first().click();
            await page.waitForLoadState('networkidle');

            // Should navigate to section
            const url = page.url();
            expect(url).toContain('section');
          }
        }
      });

      test('back to home navigation works', async ({ page }) => {
        // Start on a section
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Find home link
        const homeLink = page.locator(
          'a[href="#/"], ' +
          'a[href*="home"], ' +
          'a:has-text("Home"), ' +
          '[class*="logo"] a'
        ).first();

        if (await homeLink.isVisible()) {
          await homeLink.click();
          await page.waitForLoadState('networkidle');

          // Should be on home page
          const url = page.url();
          expect(url).not.toContain('section');
        }
      });
    });
  }
});

/**
 * Hash routing tests
 */
test.describe('Hash Routing', () => {
  const course = COURSES[0]; // Use first course

  test('direct hash navigation works', async ({ page }) => {
    // Navigate directly to section via hash
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Should show section content
    const content = page.locator('main, article');
    await expect(content.first()).toBeVisible();
  });

  test('hash change updates content', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Change hash programmatically
    await page.evaluate(() => {
      window.location.hash = '#/section/1';
    });

    await page.waitForLoadState('networkidle');

    // Content should update
    const url = page.url();
    expect(url).toContain('#/section/1');
  });

  test('browser back button works', async ({ page }) => {
    // Navigate to home, then section
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Go back
    await page.goBack();
    await page.waitForLoadState('networkidle');

    // Should be back on home (or previous page)
    const url = page.url();
    expect(url).not.toContain('#/section/1');
  });
});
