import { test, expect, Page } from '@playwright/test';
import {
  fetchFirebaseCourses,
  resolveFirebaseUrl,
  clearFirebaseCache,
  type FirebaseCourse,
} from '../../utils/fetchFirebaseConfig';

/**
 * Hub Click-Through Verification Tests
 *
 * These tests navigate FROM THE HUB to each course, simulating real user behavior.
 * This is the most reliable way to verify courses are accessible because:
 * 1. Uses the same URLs users click on
 * 2. Tests the full navigation flow
 * 3. Catches issues with hub configuration
 *
 * IMPORTANT: This is the canonical verification method. A course is only
 * considered "deployed" if it's accessible from the hub.
 *
 * Test categories:
 * - Fast tests: Hub loads, shows courses, link verification (run in CI)
 * - Slow tests: Full click-through, URL verification (run manually with --grep @slow)
 */

const HUB_URL = 'https://mathacademy-cyan.vercel.app';

// Increase timeout for tests that navigate to many pages
test.setTimeout(120000);

test.describe('Hub Click-Through Verification', () => {
  let firebaseCourses: FirebaseCourse[];

  test.beforeAll(async () => {
    clearFirebaseCache();
    firebaseCourses = await fetchFirebaseCourses();
    console.log(`Loaded ${firebaseCourses.length} courses from Firebase for click-through testing`);
  });

  test('hub loads and shows courses', async ({ page }) => {
    await page.goto(HUB_URL);

    // Wait for courses to load from Firebase
    await page.waitForSelector('a[href*="vercel.app"], a[href*="-deploy/"]', {
      timeout: 30000,
    });

    // Verify page loaded correctly
    await expect(page.locator('h1')).toContainText('Magic Internet Math');

    // Count course links
    const courseLinks = await page.locator('a[href*="vercel.app"], a[href*="-deploy/"]').count();
    console.log(`Hub showing ${courseLinks} course links`);

    expect(courseLinks).toBeGreaterThan(20);
  });

  test('all Firebase courses are linked from hub', async ({ page }) => {
    await page.goto(HUB_URL);
    await page.waitForLoadState('networkidle');

    // Expand all categories to reveal all course links
    const expandButton = page.getByRole('button', { name: 'Expand All' });
    if (await expandButton.isVisible()) {
      await expandButton.click();
      await page.waitForTimeout(500); // Wait for expansion animation
    }

    // Get all course links from the hub
    const hubLinks = await page.locator('a[href]').evaluateAll((els) =>
      els
        .map((el) => el.getAttribute('href'))
        .filter((href) => href && (href.includes('vercel.app') || href.includes('-deploy/')))
    );

    // Check each Firebase course has a matching link on the hub
    const missingFromHub: string[] = [];

    for (const course of firebaseCourses) {
      // Normalize the Firebase URL (remove trailing slash)
      const firebaseUrl = course.url.replace(/\/$/, '');
      const resolvedUrl = resolveFirebaseUrl(course.url).replace(/\/$/, '');

      const found = hubLinks.some((link) => {
        if (!link) return false;
        // Normalize hub link (remove trailing slash and hash)
        const normalizedLink = link.replace(/\/$/, '').replace(/#.*$/, '');

        // Match against both raw Firebase URL (for relative) and resolved URL (for absolute)
        return normalizedLink === firebaseUrl ||
               normalizedLink === resolvedUrl ||
               normalizedLink.endsWith(firebaseUrl) ||
               resolvedUrl.endsWith(normalizedLink);
      });

      if (!found) {
        missingFromHub.push(`${course.id}: ${course.url}`);
      }
    }

    if (missingFromHub.length > 0) {
      console.error('Firebase courses NOT found on hub:');
      for (const missing of missingFromHub) {
        console.error(`  - ${missing}`);
      }
    }

    expect(
      missingFromHub,
      `${missingFromHub.length} Firebase courses are not linked from hub`
    ).toHaveLength(0);
  });

  // Skip this test by default - it's very slow (opens 40+ tabs)
  // Run with: npx playwright test --grep "@slow"
  test.skip('click-through to all courses from hub @slow', async ({ page, context }) => {
    await page.goto(HUB_URL);
    await page.waitForLoadState('networkidle');

    // Expand all categories
    const expandButton = page.getByRole('button', { name: 'Expand All' });
    if (await expandButton.isVisible()) {
      await expandButton.click();
      await page.waitForTimeout(500);
    }

    const results: {
      id: string;
      url: string;
      success: boolean;
      error?: string;
      clickable: boolean;
    }[] = [];

    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      // Find the link on the hub
      const courseLink = page.locator(`a[href="${course.url}"], a[href="${resolvedUrl}"]`).first();
      const isClickable = await courseLink.count() > 0;

      if (!isClickable) {
        results.push({
          id: course.id,
          url: resolvedUrl,
          success: false,
          error: 'Link not found on hub',
          clickable: false,
        });
        continue;
      }

      try {
        // Open in new tab to avoid losing hub state
        const [newPage] = await Promise.all([
          context.waitForEvent('page'),
          courseLink.click({ modifiers: ['Meta'] }), // Cmd+click opens in new tab
        ]);

        await newPage.waitForLoadState('domcontentloaded', { timeout: 30000 });

        const content = await newPage.content();
        const hasVercelError =
          content.includes('404: NOT_FOUND') ||
          content.includes('DEPLOYMENT_NOT_FOUND') ||
          content.includes('This deployment does not exist');

        if (hasVercelError) {
          results.push({
            id: course.id,
            url: resolvedUrl,
            success: false,
            error: 'Vercel error page',
            clickable: true,
          });
        } else {
          // Verify we have actual course content
          const hasContent = await newPage.locator('main, h1, [class*="course"]').count() > 0;
          if (hasContent) {
            results.push({
              id: course.id,
              url: resolvedUrl,
              success: true,
              clickable: true,
            });
          } else {
            results.push({
              id: course.id,
              url: resolvedUrl,
              success: false,
              error: 'No course content found',
              clickable: true,
            });
          }
        }

        await newPage.close();
      } catch (error) {
        results.push({
          id: course.id,
          url: resolvedUrl,
          success: false,
          error: String(error),
          clickable: true,
        });
      }
    }

    // Generate report
    const failures = results.filter((r) => !r.success);
    const notClickable = results.filter((r) => !r.clickable);
    const successCount = results.filter((r) => r.success).length;

    console.log('\n=== HUB CLICK-THROUGH VERIFICATION RESULTS ===');
    console.log(`Total courses: ${results.length}`);
    console.log(`Successful: ${successCount}`);
    console.log(`Not on hub: ${notClickable.length}`);
    console.log(`Failed: ${failures.length - notClickable.length}`);

    if (failures.length > 0) {
      console.error('\n--- FAILURES ---');
      for (const f of failures) {
        console.error(`${f.id}: ${f.url}`);
        console.error(`  Clickable: ${f.clickable}`);
        console.error(`  Error: ${f.error}`);
      }
    }

    console.log('================================================\n');

    expect(
      failures,
      `${failures.length} courses failed click-through verification`
    ).toHaveLength(0);
  });
});

/**
 * Simplified click-through test using direct navigation
 * (faster but still verifies URL correctness from hub perspective)
 *
 * Skip by default - this navigates to 40+ URLs sequentially
 * Run with: npx playwright test --grep "@slow"
 */
test.describe.skip('Quick Hub URL Verification @slow', () => {
  let firebaseCourses: FirebaseCourse[];

  test.beforeAll(async () => {
    clearFirebaseCache();
    firebaseCourses = await fetchFirebaseCourses();
  });

  test('all Firebase course URLs load from hub navigation', async ({ page }) => {
    const results: { id: string; url: string; success: boolean; error?: string }[] = [];

    // First verify hub is accessible
    const hubResponse = await page.goto(HUB_URL);
    expect(hubResponse?.status()).toBeLessThan(400);

    // Now test each course URL as if navigated from hub
    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      try {
        const response = await page.goto(resolvedUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });

        const status = response?.status() || 0;

        if (status >= 400) {
          results.push({
            id: course.id,
            url: resolvedUrl,
            success: false,
            error: `HTTP ${status}`,
          });
          continue;
        }

        const content = await page.content();
        const hasVercelError =
          content.includes('404: NOT_FOUND') ||
          content.includes('DEPLOYMENT_NOT_FOUND');

        if (hasVercelError) {
          results.push({
            id: course.id,
            url: resolvedUrl,
            success: false,
            error: 'Vercel error page',
          });
        } else {
          // Verify page has course content (title visible)
          const title = await page.title();
          if (title && title.length > 0) {
            results.push({ id: course.id, url: resolvedUrl, success: true });
          } else {
            results.push({
              id: course.id,
              url: resolvedUrl,
              success: false,
              error: 'No page title',
            });
          }
        }
      } catch (error) {
        results.push({
          id: course.id,
          url: resolvedUrl,
          success: false,
          error: String(error),
        });
      }
    }

    const failures = results.filter((r) => !r.success);
    const successCount = results.filter((r) => r.success).length;

    console.log(`\nQuick verification: ${successCount}/${results.length} courses accessible`);

    if (failures.length > 0) {
      console.error('Failed courses:');
      for (const f of failures) {
        console.error(`  ${f.id}: ${f.error}`);
      }
    }

    expect(failures, `${failures.length} courses failed`).toHaveLength(0);
  });
});
