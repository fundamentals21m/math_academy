import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { COURSES } from '../../config/courses';

/**
 * Section Screenshot Tests
 *
 * Generate screenshots of all sections for documentation and previews.
 * Run weekly to keep previews up to date.
 */

const SCREENSHOTS_DIR = path.join(process.cwd(), 'screenshots');

test.describe('Section Screenshots', () => {
  // Ensure screenshots directory exists
  test.beforeAll(async () => {
    if (!fs.existsSync(SCREENSHOTS_DIR)) {
      fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
    }
  });
  // Limit concurrent tests for stability
  test.describe.configure({ mode: 'serial' });

  for (const course of COURSES) {
    test.describe(`@${course.id}`, () => {
      // Create course screenshot directory
      const courseDir = path.join(SCREENSHOTS_DIR, course.id);

      test.beforeAll(async () => {
        if (!fs.existsSync(courseDir)) {
          fs.mkdirSync(courseDir, { recursive: true });
        }
      });

      test('homepage screenshot', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        await page.screenshot({
          path: path.join(courseDir, 'homepage.png'),
          fullPage: false,
        });
      });

      // Generate screenshots for sample sections
      const sampleSections = [
        1,
        Math.floor(course.totalSections / 4),
        Math.floor(course.totalSections / 2),
        Math.floor((3 * course.totalSections) / 4),
        course.totalSections,
      ].filter((v, i, a) => a.indexOf(v) === i); // Unique values

      for (const sectionId of sampleSections) {
        test(`section ${sectionId} screenshot`, async ({ page, browserName }) => {
          // Skip webkit - it has consistent rendering timeout issues with complex math pages
          test.skip(browserName === 'webkit', 'Webkit has rendering issues with complex math pages');

          // Increase test timeout for sections with complex math rendering
          test.setTimeout(60000);

          await page.setViewportSize({ width: 1280, height: 800 });
          await page.goto(`${course.baseUrl}#/section/${sectionId}`);
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(2000); // Wait for math to render

          await page.screenshot({
            path: path.join(courseDir, `section-${sectionId}.png`),
            fullPage: false,
            timeout: 30000, // Increase screenshot timeout for complex pages
          });
        });
      }

      test('theorems page screenshot', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(`${course.baseUrl}#/theorems`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        await page.screenshot({
          path: path.join(courseDir, 'theorems.png'),
          fullPage: false,
        });
      });

      test('leaderboard screenshot', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(`${course.baseUrl}#/leaderboard`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        await page.screenshot({
          path: path.join(courseDir, 'leaderboard.png'),
          fullPage: false,
        });
      });
    });
  }
});

/**
 * Mobile Screenshots
 */
test.describe('Mobile Screenshots', () => {
  test.describe.configure({ mode: 'serial' });

  const course = COURSES[0]; // Just first course for mobile

  test.beforeAll(async () => {
    const mobileDir = path.join(SCREENSHOTS_DIR, 'mobile');
    if (!fs.existsSync(mobileDir)) {
      fs.mkdirSync(mobileDir, { recursive: true });
    }
  });

  test('mobile homepage', async ({ page }) => {
    const mobileDir = path.join(SCREENSHOTS_DIR, 'mobile');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(mobileDir, `${course.id}-homepage-mobile.png`),
      fullPage: false,
    });
  });

  test('mobile section', async ({ page }) => {
    const mobileDir = path.join(SCREENSHOTS_DIR, 'mobile');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: path.join(mobileDir, `${course.id}-section-mobile.png`),
      fullPage: false,
    });
  });

  test('tablet homepage', async ({ page }) => {
    const mobileDir = path.join(SCREENSHOTS_DIR, 'mobile');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(mobileDir, `${course.id}-homepage-tablet.png`),
      fullPage: false,
    });
  });
});

/**
 * Full Page Screenshots
 */
test.describe('Full Page Screenshots', () => {
  test.describe.configure({ mode: 'serial' });

  const course = COURSES[0];

  test.beforeAll(async () => {
    const fullPageDir = path.join(SCREENSHOTS_DIR, 'full-page');
    if (!fs.existsSync(fullPageDir)) {
      fs.mkdirSync(fullPageDir, { recursive: true });
    }
  });

  test('full page section screenshot', async ({ page }) => {
    const fullPageDir = path.join(SCREENSHOTS_DIR, 'full-page');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: path.join(fullPageDir, `${course.id}-section-1-full.png`),
      fullPage: true,
    });
  });
});

/**
 * Component Screenshots
 */
test.describe('Component Screenshots', () => {
  test.describe.configure({ mode: 'serial' });

  const course = COURSES[0];

  test.beforeAll(async () => {
    const componentDir = path.join(SCREENSHOTS_DIR, 'components');
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }
  });

  test('quiz component screenshot', async ({ page }) => {
    const componentDir = path.join(SCREENSHOTS_DIR, 'components');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const quiz = page.locator('[class*="quiz"]').first();
    if (await quiz.isVisible()) {
      await quiz.screenshot({
        path: path.join(componentDir, 'quiz-component.png'),
      });
    }
  });

  test('sidebar screenshot', async ({ page }) => {
    const componentDir = path.join(SCREENSHOTS_DIR, 'components');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const sidebar = page.locator('aside, [class*="sidebar"]').first();
    if (await sidebar.isVisible()) {
      await sidebar.screenshot({
        path: path.join(componentDir, 'sidebar-component.png'),
      });
    }
  });

  test('theorem card screenshot', async ({ page }) => {
    const componentDir = path.join(SCREENSHOTS_DIR, 'components');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${course.baseUrl}#/theorems`);
    await page.waitForLoadState('networkidle');

    const theorem = page.locator('[class*="theorem"]').first();
    if (await theorem.isVisible()) {
      await theorem.screenshot({
        path: path.join(componentDir, 'theorem-card.png'),
      });
    }
  });
});

/**
 * Dark/Light Mode Screenshots (if applicable)
 */
test.describe('Theme Screenshots', () => {
  test.describe.configure({ mode: 'serial' });

  const course = COURSES[0];

  test.beforeAll(async () => {
    const themeDir = path.join(SCREENSHOTS_DIR, 'themes');
    if (!fs.existsSync(themeDir)) {
      fs.mkdirSync(themeDir, { recursive: true });
    }
  });

  test('dark mode screenshot', async ({ page }) => {
    const themeDir = path.join(SCREENSHOTS_DIR, 'themes');
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    await page.screenshot({
      path: path.join(themeDir, 'homepage-dark.png'),
    });
  });

  test('light mode screenshot', async ({ page }) => {
    const themeDir = path.join(SCREENSHOTS_DIR, 'themes');
    await page.emulateMedia({ colorScheme: 'light' });
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    await page.screenshot({
      path: path.join(themeDir, 'homepage-light.png'),
    });
  });
});

/**
 * Generate Screenshot Manifest
 */
test.describe('Screenshot Manifest', () => {
  test('generate manifest.json', async () => {
    const manifest: Record<string, string[]> = {};

    for (const course of COURSES) {
      const courseDir = path.join(SCREENSHOTS_DIR, course.id);
      if (fs.existsSync(courseDir)) {
        const files = fs.readdirSync(courseDir).filter(f => f.endsWith('.png'));
        manifest[course.id] = files;
      }
    }

    // Write manifest
    fs.writeFileSync(
      path.join(SCREENSHOTS_DIR, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    expect(Object.keys(manifest).length).toBeGreaterThan(0);
  });
});
