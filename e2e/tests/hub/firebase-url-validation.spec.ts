import { test, expect } from '@playwright/test';
import {
  fetchFirebaseCourses,
  resolveFirebaseUrl,
  clearFirebaseCache,
  type FirebaseCourse,
} from '../../utils/fetchFirebaseConfig';

/**
 * Firebase URL Validation Tests
 *
 * These tests validate that ALL course URLs in Firebase (the source of truth)
 * point to correctly deployed courses. This catches:
 * - Courses deployed to wrong Vercel project
 * - URLs that were never deployed
 * - Typos in Firebase URL configuration
 * - Stale URLs from old deployments
 *
 * IMPORTANT: These tests use Firebase as the source of truth, not hardcoded configs.
 */

test.describe('Firebase URL Validation', () => {
  let firebaseCourses: FirebaseCourse[];

  test.beforeAll(async () => {
    // Clear cache to ensure fresh data
    clearFirebaseCache();

    // Fetch all courses from Firebase
    firebaseCourses = await fetchFirebaseCourses();

    console.log(`Loaded ${firebaseCourses.length} courses from Firebase`);
  });

  test('Firebase returns courses', async () => {
    expect(firebaseCourses.length).toBeGreaterThan(0);
    console.log(
      'Courses in Firebase:',
      firebaseCourses.map((c) => c.id).join(', ')
    );
  });

  test('all Firebase course URLs are valid URLs', async () => {
    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      // Should be a valid URL
      expect(
        () => new URL(resolvedUrl),
        `Course ${course.id} has invalid URL: ${course.url}`
      ).not.toThrow();

      // Should be HTTPS
      const url = new URL(resolvedUrl);
      expect(url.protocol, `Course ${course.id} should use HTTPS`).toBe('https:');
    }
  });

  test('all Firebase course URLs return HTTP 200', async ({ request }) => {
    const failures: { course: string; url: string; status: number; error?: string }[] = [];

    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      try {
        const response = await request.head(resolvedUrl, {
          timeout: 30000,
          ignoreHTTPSErrors: true,
        });

        if (response.status() >= 400) {
          failures.push({
            course: course.id,
            url: resolvedUrl,
            status: response.status(),
          });
        }
      } catch (error) {
        failures.push({
          course: course.id,
          url: resolvedUrl,
          status: 0,
          error: String(error),
        });
      }
    }

    if (failures.length > 0) {
      console.error('Failed Firebase URLs:');
      for (const f of failures) {
        console.error(`  - ${f.course}: ${f.url} (status: ${f.status}${f.error ? `, error: ${f.error}` : ''})`);
      }
    }

    expect(failures, `${failures.length} Firebase URLs failed to resolve`).toHaveLength(0);
  });

  test('no Firebase URLs show Vercel error pages', async ({ page }) => {
    const vercelErrors: { course: string; url: string; error: string }[] = [];

    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      try {
        await page.goto(resolvedUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });

        const content = await page.content();

        // Check for Vercel error indicators
        if (
          content.includes('404: NOT_FOUND') ||
          content.includes('DEPLOYMENT_NOT_FOUND') ||
          content.includes('This deployment does not exist') ||
          content.includes('404 This page could not be found')
        ) {
          vercelErrors.push({
            course: course.id,
            url: resolvedUrl,
            error: 'Vercel 404/deployment error page detected',
          });
        }
      } catch (error) {
        vercelErrors.push({
          course: course.id,
          url: resolvedUrl,
          error: `Navigation failed: ${String(error)}`,
        });
      }
    }

    if (vercelErrors.length > 0) {
      console.error('Firebase URLs with Vercel errors:');
      for (const e of vercelErrors) {
        console.error(`  - ${e.course}: ${e.url} - ${e.error}`);
      }
    }

    expect(
      vercelErrors,
      `${vercelErrors.length} Firebase URLs show Vercel error pages`
    ).toHaveLength(0);
  });

  test('all Firebase courses have required fields', async () => {
    const missingFields: { course: string; missing: string[] }[] = [];

    for (const course of firebaseCourses) {
      const missing: string[] = [];

      if (!course.id) missing.push('id');
      if (!course.title) missing.push('title');
      if (!course.url) missing.push('url');
      if (typeof course.totalSections !== 'number') missing.push('totalSections');
      if (!course.progressPrefix) missing.push('progressPrefix');

      if (missing.length > 0) {
        missingFields.push({ course: course.id || 'unknown', missing });
      }
    }

    if (missingFields.length > 0) {
      console.error('Courses with missing required fields:');
      for (const m of missingFields) {
        console.error(`  - ${m.course}: missing ${m.missing.join(', ')}`);
      }
    }

    expect(missingFields).toHaveLength(0);
  });

  test('no duplicate course URLs in Firebase', async () => {
    const urlMap = new Map<string, string[]>();

    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);
      const existing = urlMap.get(resolvedUrl) || [];
      existing.push(course.id);
      urlMap.set(resolvedUrl, existing);
    }

    const duplicates = Array.from(urlMap.entries()).filter(([, ids]) => ids.length > 1);

    if (duplicates.length > 0) {
      console.error('Duplicate URLs in Firebase:');
      for (const [url, ids] of duplicates) {
        console.error(`  - ${url}: used by ${ids.join(', ')}`);
      }
    }

    expect(duplicates, 'Found duplicate course URLs in Firebase').toHaveLength(0);
  });

  test('no duplicate course IDs in Firebase', async () => {
    const idCounts = new Map<string, number>();

    for (const course of firebaseCourses) {
      const count = idCounts.get(course.id) || 0;
      idCounts.set(course.id, count + 1);
    }

    const duplicates = Array.from(idCounts.entries()).filter(([, count]) => count > 1);

    if (duplicates.length > 0) {
      console.error('Duplicate course IDs in Firebase:');
      for (const [id, count] of duplicates) {
        console.error(`  - ${id}: appears ${count} times`);
      }
    }

    expect(duplicates, 'Found duplicate course IDs in Firebase').toHaveLength(0);
  });
});

/**
 * Individual Course URL Tests
 *
 * Generate a test for each Firebase course to make failures more granular.
 */
test.describe('Individual Firebase Course Validation', () => {
  let firebaseCourses: FirebaseCourse[];

  test.beforeAll(async () => {
    clearFirebaseCache();
    firebaseCourses = await fetchFirebaseCourses();
  });

  // This test dynamically generates subtests based on Firebase data
  test('each Firebase course URL loads correctly', async ({ page }) => {
    // We can't use test.step in a loop with async beforeAll,
    // so we test all courses and report failures comprehensively
    const results: { id: string; url: string; success: boolean; error?: string }[] = [];

    for (const course of firebaseCourses) {
      const resolvedUrl = resolveFirebaseUrl(course.url);

      try {
        const response = await page.goto(resolvedUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });

        const status = response?.status() || 0;
        const content = await page.content();
        const hasVercelError =
          content.includes('404: NOT_FOUND') ||
          content.includes('DEPLOYMENT_NOT_FOUND');

        if (status >= 400 || hasVercelError) {
          results.push({
            id: course.id,
            url: resolvedUrl,
            success: false,
            error: hasVercelError ? 'Vercel error page' : `HTTP ${status}`,
          });
        } else {
          results.push({ id: course.id, url: resolvedUrl, success: true });
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

    if (failures.length > 0) {
      console.error('\n=== FIREBASE URL VALIDATION FAILURES ===');
      console.error('The following Firebase course URLs are broken:');
      for (const f of failures) {
        console.error(`  ${f.id}: ${f.url}`);
        console.error(`    Error: ${f.error}`);
      }
      console.error('========================================\n');
    }

    const successCount = results.filter((r) => r.success).length;
    console.log(`Firebase URL validation: ${successCount}/${results.length} passed`);

    expect(
      failures,
      `${failures.length} Firebase course URLs are broken. See console output for details.`
    ).toHaveLength(0);
  });
});
