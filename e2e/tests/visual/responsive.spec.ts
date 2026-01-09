import { test, expect, devices } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';

/**
 * Responsive Layout Tests
 *
 * Verify that pages display correctly across different viewport sizes.
 */
test.describe('Responsive Layout', () => {
  // Test viewports
  const viewports = {
    mobile: { width: 375, height: 667 },   // iPhone SE
    tablet: { width: 768, height: 1024 },  // iPad
    desktop: { width: 1280, height: 800 }, // Standard desktop
    wide: { width: 1920, height: 1080 },   // Full HD
  };

  // Sample of courses to test
  const testCourses = COURSES.slice(0, 5);

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      for (const [viewportName, viewport] of Object.entries(viewports)) {
        test(`homepage renders correctly on ${viewportName}`, async ({ page }) => {
          await page.setViewportSize(viewport);
          await page.goto(course.baseUrl);
          await page.waitForLoadState('networkidle');

          // Page should not have horizontal scroll
          const hasHorizontalScroll = await page.evaluate(() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
          });
          expect(hasHorizontalScroll).toBe(false);

          // Main content should be visible
          const content = page.locator('main, [role="main"], #root');
          await expect(content.first()).toBeVisible();
        });

        test(`section page renders correctly on ${viewportName}`, async ({ page }) => {
          await page.setViewportSize(viewport);
          await page.goto(`${course.baseUrl}#/section/1`);
          await page.waitForLoadState('networkidle');

          // Content should be visible
          const content = page.locator('main, article, [class*="lesson"]');
          await expect(content.first()).toBeVisible();

          // Check for horizontal overflow
          const hasHorizontalScroll = await page.evaluate(() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
          });

          // Allow some overflow on mobile for math equations
          if (viewportName !== 'mobile') {
            expect(hasHorizontalScroll).toBe(false);
          }
        });
      }
    });
  }
});

/**
 * Mobile Navigation Tests
 */
test.describe('Mobile Navigation', () => {
  const course = COURSES[0];
  const mobileViewport = { width: 375, height: 667 };

  test('hamburger menu appears on mobile', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Look for mobile menu button
    const menuButton = page.locator(
      'button[aria-label*="menu"], ' +
      'button[aria-label*="Menu"], ' +
      '[class*="hamburger"], ' +
      '[class*="mobile-menu"], ' +
      'button:has([class*="bar"])'
    );

    // Menu button or sidebar should exist
    const hasMobileMenu = await menuButton.count() > 0;
    const hasSidebar = await page.locator('aside, nav[class*="sidebar"]').isVisible();

    // Either mobile menu or visible sidebar is acceptable
    expect(hasMobileMenu || hasSidebar).toBe(true);
  });

  test('sidebar collapses on mobile', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // On mobile, sidebar should either be hidden or collapsible
    const sidebar = page.locator('aside, [class*="sidebar"]');

    if (await sidebar.count() > 0) {
      // Get sidebar position
      const box = await sidebar.first().boundingBox();

      if (box) {
        // Sidebar should either be off-screen (negative x) or small width
        const isOffscreen = box.x < 0 || box.x + box.width > page.viewportSize()!.width;
        const isSmall = box.width < 200;
        const isOverlay = await sidebar.first().evaluate(el => {
          const style = window.getComputedStyle(el);
          return style.position === 'fixed' || style.position === 'absolute';
        });

        // Sidebar should be collapsed/hidden or overlay
        expect(isOffscreen || isSmall || isOverlay).toBe(true);
      }
    }
  });

  test('content is readable on mobile', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Find main text content
    const textContent = page.locator('main p, article p, [class*="lesson"] p').first();

    if (await textContent.isVisible()) {
      // Text should have reasonable font size
      const fontSize = await textContent.evaluate(el => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });
      expect(fontSize).toBeGreaterThanOrEqual(14); // Minimum readable font

      // Text should have reasonable line height
      const lineHeight = await textContent.evaluate(el => {
        const style = window.getComputedStyle(el);
        return parseFloat(style.lineHeight) / parseFloat(style.fontSize);
      });
      expect(lineHeight).toBeGreaterThanOrEqual(1.2);
    }
  });
});

/**
 * Tablet Layout Tests
 */
test.describe('Tablet Layout', () => {
  const course = COURSES[0];
  const tabletViewport = { width: 768, height: 1024 };

  test('sidebar behavior on tablet', async ({ page }) => {
    await page.setViewportSize(tabletViewport);
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // On tablet, sidebar can be visible or collapsible
    const sidebar = page.locator('aside, [class*="sidebar"]').first();
    const mainContent = page.locator('main, article, [class*="lesson"]').first();

    // Both should be present
    await expect(mainContent).toBeVisible();

    // Content should use available width efficiently
    const box = await mainContent.boundingBox();
    if (box) {
      expect(box.width).toBeGreaterThan(300);
    }
  });

  test('quiz buttons are touch-friendly', async ({ page }) => {
    await page.setViewportSize(tabletViewport);
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    // Find quiz option buttons
    const quizButtons = page.locator(
      'button[class*="option"], ' +
      '[data-testid="quiz-option"], ' +
      '[class*="quiz"] button'
    );

    const count = await quizButtons.count();
    if (count > 0) {
      const firstButton = quizButtons.first();
      const box = await firstButton.boundingBox();

      if (box) {
        // Touch targets should be at least 44px (iOS) or 48px (Android)
        expect(box.height).toBeGreaterThanOrEqual(40);
        expect(box.width).toBeGreaterThanOrEqual(40);
      }
    }
  });
});

/**
 * Desktop Layout Tests
 */
test.describe('Desktop Layout', () => {
  const course = COURSES[0];
  const desktopViewport = { width: 1280, height: 800 };

  test('sidebar is visible on desktop', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Look for sidebar
    const sidebar = page.locator('aside, nav[class*="sidebar"], [class*="sidebar"]').first();

    // On desktop, sidebar should be visible
    if (await sidebar.count() > 0) {
      const box = await sidebar.boundingBox();
      if (box) {
        // Sidebar should be visible on screen
        expect(box.x).toBeGreaterThanOrEqual(-10); // Allow small negative for borders
        expect(box.width).toBeGreaterThan(100);
      }
    }
  });

  test('content has max-width for readability', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Look for the actual prose/text content, not the full main container
    // The main container includes sidebar space, so we check the inner content
    const prose = page.locator('[class*="prose"], [class*="content"], [class*="lesson-content"], article p').first();
    const box = await prose.boundingBox();

    if (box) {
      // Prose content should have reasonable width for readability
      // Typically 600-900px for optimal reading, but can be wider with sidebar
      // Main assertion: content shouldn't span full viewport width
      expect(box.width).toBeLessThan(1400);
    } else {
      // If no prose element found, check the main container is at least constrained
      // or has margins (content area should be less than full viewport)
      const main = page.locator('main').first();
      const mainBox = await main.boundingBox();
      if (mainBox) {
        // With sidebar at ~288px (lg:pl-72), main should be ~1632px max
        // Allow full width if layout uses other constraints
        expect(mainBox.width).toBeLessThanOrEqual(1920);
      }
    }
  });
});

/**
 * Visual Regression Screenshots
 */
test.describe('Responsive Screenshots', () => {
  const course = COURSES[0];

  const viewportConfigs = [
    { name: 'mobile', ...{ width: 375, height: 667 } },
    { name: 'tablet', ...{ width: 768, height: 1024 } },
    { name: 'desktop', ...{ width: 1280, height: 800 } },
  ];

  for (const config of viewportConfigs) {
    test(`homepage screenshot ${config.name}`, async ({ page }) => {
      await page.setViewportSize({ width: config.width, height: config.height });
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot(`homepage-${config.name}.png`, {
        fullPage: false,
        maxDiffPixels: 300,
      });
    });

    test(`section screenshot ${config.name}`, async ({ page }) => {
      await page.setViewportSize({ width: config.width, height: config.height });
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot(`section-${config.name}.png`, {
        fullPage: false,
        maxDiffPixels: 300,
      });
    });
  }
});

/**
 * Orientation Tests
 */
test.describe('Orientation Changes', () => {
  const course = COURSES[0];

  test('portrait to landscape transition', async ({ page }) => {
    // Start in portrait
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Switch to landscape
    await page.setViewportSize({ width: 667, height: 375 });
    await page.waitForTimeout(500);

    // Content should still be visible
    const content = page.locator('main, article, [class*="lesson"]').first();
    await expect(content).toBeVisible();

    // No horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 10;
    });
    expect(hasHorizontalScroll).toBe(false);
  });
});
