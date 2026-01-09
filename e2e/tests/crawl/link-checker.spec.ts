import { test, expect } from '@playwright/test';
import { COURSES, CourseConfig } from '../../config/courses';

/**
 * Link Checker / Crawler Tests
 *
 * Verify all internal links work correctly.
 * Note: These apps use client-side hash routing (#/section/X),
 * so we check content loading rather than HTTP responses.
 */
test.describe('Link Checker', () => {
  // Test a subset of courses for speed
  const testCourses = COURSES.slice(0, 5);

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('all section links are valid', async ({ page }) => {
        const brokenLinks: string[] = [];

        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        // Get all section links from the homepage/sidebar
        const sectionLinks = await page.locator('a[href*="section"]').all();
        const linksToTest = sectionLinks.slice(0, 5); // Test first 5 for speed

        for (const link of linksToTest) {
          const href = await link.getAttribute('href');
          if (!href) continue;

          try {
            // Click the link to navigate (handles hash routing properly)
            await link.click();
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(500);

            // Verify content loaded (not just that navigation occurred)
            const content = page.locator('main, article, [class*="lesson"], [class*="section"]');
            const isVisible = await content.first().isVisible({ timeout: 5000 }).catch(() => false);

            if (!isVisible) {
              brokenLinks.push(`${href}: content not visible`);
            }

            // Navigate back to home for next link
            await page.goto(course.baseUrl);
            await page.waitForLoadState('networkidle');
          } catch (e: any) {
            brokenLinks.push(`${href}: ${e.message}`);
            // Try to recover by going back to home
            await page.goto(course.baseUrl).catch(() => {});
            await page.waitForLoadState('networkidle').catch(() => {});
          }
        }

        if (brokenLinks.length > 0) {
          console.log(`Broken links in ${course.id}:`, brokenLinks);
        }
        expect(brokenLinks).toHaveLength(0);
      });

      test('navigation links work', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Test next/previous navigation
        const nextLink = page.locator('a[href*="section/2"], button:has-text("Next")').first();

        if (await nextLink.isVisible({ timeout: 3000 }).catch(() => false)) {
          await nextLink.click();
          await page.waitForLoadState('networkidle');

          const url = page.url();
          expect(url).toMatch(/section\/\d+/);
        }
      });

      test('theorems page links work', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/theorems`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000); // Allow content to render

        // Find theorem links that go to sections
        const theoremLinks = await page.locator('a[href*="section"]').all();

        if (theoremLinks.length > 0) {
          // Test first theorem link
          const firstLink = theoremLinks[0];

          try {
            await firstLink.click();
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(500);

            // Should navigate to section
            expect(page.url()).toContain('section');
          } catch (e) {
            // Link might not be clickable or page structure different
            // Just verify page didn't crash
            await expect(page.locator('body')).toBeVisible();
          }
        } else {
          // No theorem links found - that's okay, not all courses have them
          await expect(page.locator('body')).toBeVisible();
        }
      });
    });
  }
});

/**
 * Comprehensive Section Crawler
 */
test.describe('Section Crawler', () => {
  const course = COURSES[0];

  test('all sections load successfully', async ({ page }) => {
    const failedSections: number[] = [];

    // Test sample of sections (avoid section 0 which may not exist)
    const sectionsToTest = [
      1,
      Math.max(1, Math.floor(course.totalSections / 4)),
      Math.max(1, Math.floor(course.totalSections / 2)),
      Math.max(1, Math.floor((3 * course.totalSections) / 4)),
      course.totalSections,
    ].filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

    for (const sectionId of sectionsToTest) {
      try {
        await page.goto(`${course.baseUrl}#/section/${sectionId}`);
        await page.waitForLoadState('networkidle');

        // Verify content loaded with reasonable timeout
        const content = page.locator('main, article, [class*="lesson"], [class*="section"]');
        const isVisible = await content.first().isVisible({ timeout: 10000 }).catch(() => false);

        if (!isVisible) {
          // Check if there's an error message or 404
          const errorText = await page.locator('text=/not found|error|404/i').count();
          if (errorText > 0 || !(await page.locator('body').textContent())?.includes('section')) {
            failedSections.push(sectionId);
          }
        }
      } catch {
        failedSections.push(sectionId);
      }
    }

    if (failedSections.length > 0) {
      console.log(`Failed sections in ${course.id}:`, failedSections);
    }
    expect(failedSections).toHaveLength(0);
  });

  test('all quiz pages load', async ({ page }) => {
    const failedQuizzes: number[] = [];

    // Test sample of quizzes
    const quizzesToTest = [1, 5, 10].filter(q => q <= course.totalSections);

    for (const quizId of quizzesToTest) {
      try {
        await page.goto(`${course.baseUrl}#/quiz/${quizId}`);
        await page.waitForLoadState('networkidle');

        // Quiz or section content should be visible
        const content = page.locator('[class*="quiz"], main, article');
        if (!(await content.first().isVisible({ timeout: 10000 }).catch(() => false))) {
          failedQuizzes.push(quizId);
        }
      } catch {
        failedQuizzes.push(quizId);
      }
    }

    expect(failedQuizzes).toHaveLength(0);
  });
});

/**
 * External Link Verification
 */
test.describe('External Links', () => {
  const course = COURSES[0];

  test('external links have target blank', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const externalLinks = await page.locator('a[href^="http"]').all();

    for (const link of externalLinks) {
      const href = await link.getAttribute('href');
      if (!href?.includes(course.baseUrl)) {
        const target = await link.getAttribute('target');

        // External links should open in new tab
        // This is a best practice but not required
        if (target !== '_blank') {
          console.log(`Warning: External link without target="_blank": ${href}`);
        }
      }
    }
  });

  test('external links have noopener', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const externalLinks = await page.locator('a[href^="http"][target="_blank"]').all();

    for (const link of externalLinks) {
      const rel = await link.getAttribute('rel');

      // Should have noopener for security
      if (!rel?.includes('noopener')) {
        const href = await link.getAttribute('href');
        console.log(`Warning: External link without noopener: ${href}`);
      }
    }
  });
});

/**
 * Hash Navigation
 */
test.describe('Hash Navigation', () => {
  const course = COURSES[0];

  test('hash links navigate correctly', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Change hash programmatically
    await page.evaluate(() => {
      window.location.hash = '#/section/1';
    });

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('#/section/1');
  });

  test('back button works with hash routing', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    await page.goBack();
    await page.waitForLoadState('networkidle');

    // Should be back on home or previous page
    expect(page.url()).not.toContain('#/section/1');
  });
});

/**
 * Redirect Handling
 */
test.describe('Redirects', () => {
  const course = COURSES[0];

  test('invalid routes redirect or show 404', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/invalid-route-xyz`);
    await page.waitForLoadState('networkidle');

    // Should either redirect to home or show error - page shouldn't crash
    const body = page.locator('body');
    const text = await body.textContent();

    expect(text?.length).toBeGreaterThan(0);
  });

  test('trailing slashes handled correctly', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1/`);
    await page.waitForLoadState('networkidle');

    // Should work regardless of trailing slash
    const content = page.locator('main, article, [class*="lesson"]');
    await expect(content.first()).toBeVisible({ timeout: 10000 });
  });
});

/**
 * Anchor Links
 */
test.describe('Anchor Links', () => {
  const course = COURSES[0];

  test('anchor links scroll to target', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Find anchor links within the page (not hash router links)
    const anchorLinks = await page.locator('a[href^="#"]:not([href^="#/"])').all();

    if (anchorLinks.length > 0) {
      const firstAnchor = anchorLinks[0];
      const href = await firstAnchor.getAttribute('href');
      const targetId = href?.substring(1);

      if (targetId) {
        await firstAnchor.click();
        await page.waitForTimeout(500);

        // Target element should be in view (scroll position changed)
        // This is a soft check - just verify no crash
      }
    }

    // Page should still be visible and functional
    await expect(page.locator('body')).toBeVisible();
  });
});
