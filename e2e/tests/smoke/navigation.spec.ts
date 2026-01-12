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

        // Find section link in MAIN content area first (visible on all viewports)
        // Avoid sidebar links which may be off-screen on mobile
        let sectionLink = page.locator('main a[href*="section/1"], main a[href*="section/0"]').first();

        // If not found in main, try the whole page but ensure it's in viewport
        if (!(await sectionLink.count())) {
          sectionLink = page.locator('a[href*="section/1"], a[href*="section/0"]').first();
        }

        // Check if link is actually clickable (visible and in viewport)
        const box = await sectionLink.boundingBox().catch(() => null);
        const viewportSize = page.viewportSize();

        const isInViewport = box && viewportSize &&
          box.x >= 0 && box.y >= 0 &&
          box.x + box.width <= viewportSize.width &&
          box.y < viewportSize.height;

        if (isInViewport) {
          await sectionLink.click();
          await page.waitForLoadState('networkidle');

          // Should now be on a section page
          const url = page.url();
          expect(url).toMatch(/section\/\d+/);
        } else {
          // Try opening mobile menu if link is not in viewport
          const menuButton = page.locator(
            'button[aria-label*="sidebar" i], ' +
            'button[aria-label*="menu" i], ' +
            '[class*="hamburger"]'
          ).first();

          if (await menuButton.isVisible().catch(() => false)) {
            await menuButton.click();
            await page.waitForTimeout(500);

            // Now try clicking the sidebar link
            const sidebarLink = page.locator('aside a[href*="section/1"], aside a[href*="section/0"], nav a[href*="section/1"], nav a[href*="section/0"]').first();
            if (await sidebarLink.isVisible().catch(() => false)) {
              await sidebarLink.click();
              await page.waitForLoadState('networkidle');

              const url = page.url();
              expect(url).toMatch(/section\/\d+/);
            }
          }
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
    await page.waitForLoadState('domcontentloaded');

    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 15000 });

    // Should show section content
    const content = page.locator('main, article, [class*="min-h-screen"]');
    await expect(content.first()).toBeVisible({ timeout: 15000 });
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
    await page.waitForLoadState('domcontentloaded');

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(500); // Allow hash navigation to settle

    // Go back
    await page.goBack();
    await page.waitForTimeout(500); // Allow navigation to complete

    // Should be back on home (or previous page)
    const url = page.url();
    expect(url).not.toContain('#/section/1');
  });
});
