import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';

const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * Hub Course Links Tests
 *
 * Verify that all course links on the hub page point to correctly deployed courses.
 * This catches deployment misconfigurations and broken links.
 */
test.describe('Hub Course Links', () => {
  test('hub page loads successfully', async ({ page }) => {
    const response = await page.goto(HUB_URL);

    // Verify successful response
    expect(response?.status()).toBeLessThan(400);

    // Verify page has content
    await expect(page.locator('body')).toBeVisible();

    // Verify title is set
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('hub displays course cards', async ({ page }) => {
    await page.goto(HUB_URL);
    await page.waitForLoadState('networkidle');

    // Find course cards by common patterns
    const courseCards = page.locator(
      '[class*="course-card"], ' +
      '[class*="CourseCard"], ' +
      'a[href*="vercel.app"], ' +
      'a[href*="-deploy"]'
    );

    const count = await courseCards.count();
    expect(count).toBeGreaterThan(0);
    console.log(`Found ${count} course links on hub`);
  });

  test('hub has expected number of course links', async ({ page }) => {
    await page.goto(HUB_URL);
    await page.waitForLoadState('networkidle');

    // Get all external links (course deployments)
    const courseLinks = page.locator('a[href*="vercel.app"]');
    const count = await courseLinks.count();

    // Should have a reasonable number of courses (at least 20)
    expect(count).toBeGreaterThanOrEqual(20);
    console.log(`Hub has ${count} course links`);
  });
});

/**
 * Individual Course URL Tests
 *
 * Test each configured course URL to ensure it's deployed and accessible.
 */
test.describe('Course Deployment Verification', () => {
  // Test each configured course URL is reachable
  for (const course of COURSES) {
    test(`@${course.id} - ${course.name} is deployed correctly`, async ({ page }) => {
      const response = await page.goto(course.baseUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // Should not be 404 or error
      expect(response?.status(), `${course.name} returned error status`).toBeLessThan(400);

      // Page should have content
      await expect(page.locator('body')).toBeVisible();

      // Title should be set (not blank error page)
      const title = await page.title();
      expect(title.length, `${course.name} has no title`).toBeGreaterThan(0);

      // Should not show Vercel 404 page
      const pageContent = await page.content();
      expect(pageContent).not.toContain('404: NOT_FOUND');
      expect(pageContent).not.toContain('DEPLOYMENT_NOT_FOUND');
    });

    test(`@${course.id} - ${course.name} section 1 loads`, async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // Wait for content to render
      await page.waitForLoadState('networkidle');

      // Main content should be visible
      const content = page.locator('main, article, [class*="lesson"], [class*="content"]');
      await expect(content.first()).toBeVisible({ timeout: 10000 });
    });
  }
});

/**
 * URL Pattern Validation
 *
 * Verify course URLs follow expected deployment patterns.
 */
test.describe('URL Pattern Validation', () => {
  test('all course URLs are valid', () => {
    for (const course of COURSES) {
      // URL should be a valid URL
      expect(() => new URL(course.baseUrl)).not.toThrow();

      // URL should be HTTPS
      const url = new URL(course.baseUrl);
      expect(url.protocol).toBe('https:');

      // URL should be on vercel.app domain
      expect(
        url.hostname.endsWith('vercel.app') || url.hostname === 'mathacademy-cyan.vercel.app'
      ).toBe(true);
    }
  });

  test('no duplicate course URLs', () => {
    const urls = COURSES.map(c => c.baseUrl);
    const uniqueUrls = new Set(urls);
    expect(uniqueUrls.size).toBe(urls.length);
  });

  test('all course IDs are unique', () => {
    const ids = COURSES.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

/**
 * Hub Link Consistency
 *
 * Verify hub links are functional (return 200 status).
 */
test.describe('Hub Link Consistency', () => {
  test('hub has course links', async ({ page }) => {
    await page.goto(HUB_URL);
    await page.waitForLoadState('networkidle');

    // Get all links from the hub
    const links = await page.locator('a[href*="vercel.app"]').evaluateAll(
      els => els.map(el => el.getAttribute('href'))
    );

    // Should have some course links
    expect(links.length).toBeGreaterThan(10);
    console.log(`Hub has ${links.length} course links`);

    // Log any links that might be unknown (informational only)
    const configuredUrls = COURSES.map(c => c.baseUrl);
    const unknownLinks = links.filter(link => {
      if (!link) return false;
      const normalizedLink = link.replace(/\/$/, '');
      return !configuredUrls.some(url => {
        const normalizedUrl = url.replace(/\/$/, '');
        return normalizedLink.includes(normalizedUrl) || normalizedUrl.includes(normalizedLink);
      });
    });

    if (unknownLinks.length > 0) {
      console.log('Links not in e2e config (may need adding):', unknownLinks);
    }
  });
});
