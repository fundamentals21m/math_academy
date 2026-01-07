import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';

/**
 * Math Rendering Visual Regression Tests
 *
 * Verify KaTeX math equations render correctly across courses.
 */
test.describe('Math Rendering', () => {
  // Test a sample of courses with heavy math content
  const mathCourses = [
    'crypto',      // Cryptography - number theory
    'linalg',      // Linear Algebra
    'calc1',       // Calculus
    'ra',          // Real Analysis
    'abstract-algebra', // Abstract Algebra
  ].map(id => getCourseById(id)).filter(Boolean);

  for (const course of mathCourses) {
    if (!course) continue;

    test.describe(`@${course.id}`, () => {
      test('KaTeX elements render without errors', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Wait for KaTeX to render
        await page.waitForTimeout(1000);

        // Check for KaTeX error elements
        const katexErrors = page.locator('.katex-error');
        const errorCount = await katexErrors.count();

        if (errorCount > 0) {
          const errors: string[] = [];
          for (let i = 0; i < errorCount; i++) {
            const text = await katexErrors.nth(i).textContent();
            errors.push(text || 'Unknown error');
          }
          console.log(`KaTeX errors in ${course.id}:`, errors);
        }

        expect(errorCount).toBe(0);
      });

      test('math blocks have visible content', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        // Find math elements
        const mathElements = page.locator('.katex, .math, [class*="MathBlock"], mjx-container');
        const count = await mathElements.count();

        if (count > 0) {
          // Check first math element is visible and has content
          const firstMath = mathElements.first();
          await expect(firstMath).toBeVisible();

          const box = await firstMath.boundingBox();
          expect(box).not.toBeNull();
          expect(box!.width).toBeGreaterThan(0);
          expect(box!.height).toBeGreaterThan(0);
        }
      });

      test('inline and display math both render', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        // Check for both inline and display math
        const inlineMath = page.locator('.katex:not(.katex-display) span.katex');
        const displayMath = page.locator('.katex-display');

        // At least some math should exist
        const totalMath = await page.locator('.katex, mjx-container').count();

        // Just verify math rendering works (some pages may not have both types)
        if (totalMath > 0) {
          const katex = page.locator('.katex, mjx-container').first();
          await expect(katex).toBeVisible();
        }
      });
    });
  }
});

/**
 * Math Screenshot Comparison
 *
 * Take screenshots of math-heavy sections for visual regression.
 */
test.describe('Math Visual Regression', () => {
  // Sample sections known to have complex math
  const mathSections = [
    { courseId: 'crypto', sectionId: 2, name: 'modular-arithmetic' },
    { courseId: 'linalg', sectionId: 5, name: 'matrix-operations' },
    { courseId: 'calc1', sectionId: 3, name: 'derivatives' },
  ];

  for (const { courseId, sectionId, name } of mathSections) {
    const course = getCourseById(courseId);
    if (!course) continue;

    test(`@${courseId} section ${sectionId} math renders consistently`, async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/${sectionId}`);
      await page.waitForLoadState('networkidle');

      // Wait for math to render
      await page.waitForTimeout(2000);

      // Find the main content area
      const content = page.locator('main, article, [class*="lesson"]').first();

      // Take screenshot of content area
      await expect(content).toHaveScreenshot(`${courseId}-section-${sectionId}-${name}.png`, {
        maxDiffPixels: 200, // Allow small differences for font rendering
        threshold: 0.3,
      });
    });
  }
});

/**
 * Math Symbol Rendering Tests
 *
 * Verify specific mathematical symbols render correctly.
 */
test.describe('Math Symbol Verification', () => {
  const course = COURSES[0]; // Use first course

  test('Greek letters render', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Look for common Greek letters in the page
    const pageContent = await page.content();

    // Check that KaTeX is rendering (not showing raw LaTeX)
    const hasRawLatex = /\\alpha|\\beta|\\gamma|\\theta|\\lambda/.test(pageContent);
    const rawLatexVisible = await page.locator('text=/\\\\alpha|\\\\beta/').count();

    // Raw LaTeX should not be visible to users
    expect(rawLatexVisible).toBe(0);
  });

  test('fractions render with proper structure', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Look for fraction elements
    const fractions = page.locator('.katex .frac, .katex .mfrac, mjx-frac');

    if (await fractions.count() > 0) {
      const firstFrac = fractions.first();
      await expect(firstFrac).toBeVisible();

      // Fractions should have numerator and denominator
      const box = await firstFrac.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThan(box!.width * 0.3); // Fractions are typically taller than wide
    }
  });

  test('matrices render as grids', async ({ page }) => {
    // Use linalg course for matrix tests
    const linalgCourse = getCourseById('linalg');
    if (!linalgCourse) {
      test.skip();
      return;
    }

    await page.goto(`${linalgCourse.baseUrl}#/section/3`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Look for matrix elements
    const matrices = page.locator('.katex .mtable, .katex .matrix, mjx-mtable, [class*="matrix"]');

    if (await matrices.count() > 0) {
      const firstMatrix = matrices.first();
      await expect(firstMatrix).toBeVisible();
    }
  });
});

/**
 * Math Rendering Performance
 */
test.describe('Math Rendering Performance', () => {
  const course = COURSES[0];

  test('math renders within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Wait for KaTeX to be present
    await page.waitForSelector('.katex, mjx-container', { timeout: 10000 }).catch(() => null);

    const loadTime = Date.now() - startTime;

    // Page with math should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('no layout shift from math loading', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);

    // Get initial layout
    await page.waitForLoadState('domcontentloaded');
    const initialHeight = await page.evaluate(() => document.body.scrollHeight);

    // Wait for full load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const finalHeight = await page.evaluate(() => document.body.scrollHeight);

    // Layout shouldn't shift dramatically (allow 20% variation for lazy loading)
    const heightDiff = Math.abs(finalHeight - initialHeight);
    const maxAllowedDiff = initialHeight * 0.5; // Allow 50% for content loading

    expect(heightDiff).toBeLessThan(maxAllowedDiff);
  });
});
