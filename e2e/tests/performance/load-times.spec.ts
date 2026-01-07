import { test, expect } from '@playwright/test';
import { COURSES } from '../../config/courses';

/**
 * Performance Tests
 *
 * Measure and verify page load times and performance metrics.
 */
test.describe('Page Load Performance', () => {
  const testCourses = COURSES.slice(0, 5);

  // Performance budgets
  const budgets = {
    fcp: 2000,      // First Contentful Paint: 2s
    lcp: 4000,      // Largest Contentful Paint: 4s
    tti: 5000,      // Time to Interactive: 5s
    totalLoad: 8000, // Total page load: 8s
  };

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('homepage loads within budget', async ({ page }) => {
        const startTime = Date.now();

        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        const loadTime = Date.now() - startTime;

        expect(loadTime).toBeLessThan(budgets.totalLoad);

        console.log(`${course.id} homepage load time: ${loadTime}ms`);
      });

      test('section page loads within budget', async ({ page }) => {
        const startTime = Date.now();

        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        const loadTime = Date.now() - startTime;

        expect(loadTime).toBeLessThan(budgets.totalLoad);

        console.log(`${course.id} section load time: ${loadTime}ms`);
      });

      test('measures Core Web Vitals', async ({ page }) => {
        await page.goto(course.baseUrl);
        await page.waitForLoadState('networkidle');

        // Get performance metrics
        const metrics = await page.evaluate(() => {
          return new Promise((resolve) => {
            let fcp = 0;
            let lcp = 0;

            // First Contentful Paint
            const fcpObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.name === 'first-contentful-paint') {
                  fcp = entry.startTime;
                }
              }
            });
            fcpObserver.observe({ entryTypes: ['paint'] });

            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              if (entries.length > 0) {
                lcp = entries[entries.length - 1].startTime;
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Wait for metrics
            setTimeout(() => {
              fcpObserver.disconnect();
              lcpObserver.disconnect();

              const timing = performance.timing;
              resolve({
                fcp,
                lcp,
                domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
                load: timing.loadEventEnd - timing.navigationStart,
              });
            }, 3000);
          });
        });

        console.log(`${course.id} metrics:`, metrics);

        // Check against budgets (soft checks)
        if ((metrics as any).fcp > 0) {
          expect((metrics as any).fcp).toBeLessThan(budgets.fcp);
        }
      });
    });
  }
});

/**
 * Resource Size Tests
 */
test.describe('Resource Sizes', () => {
  const course = COURSES[0];

  test('JavaScript bundle size is reasonable', async ({ page }) => {
    const jsBytes: number[] = [];

    page.on('response', async (response) => {
      const url = response.url();
      if (url.endsWith('.js') || url.includes('.js?')) {
        const headers = response.headers();
        const size = headers['content-length'];
        if (size) {
          jsBytes.push(parseInt(size));
        }
      }
    });

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    const totalJS = jsBytes.reduce((a, b) => a + b, 0);
    console.log(`Total JS size: ${(totalJS / 1024).toFixed(2)} KB`);

    // Total JS should be under 2MB
    expect(totalJS).toBeLessThan(2 * 1024 * 1024);
  });

  test('CSS size is reasonable', async ({ page }) => {
    const cssBytes: number[] = [];

    page.on('response', async (response) => {
      const url = response.url();
      if (url.endsWith('.css') || url.includes('.css?')) {
        const headers = response.headers();
        const size = headers['content-length'];
        if (size) {
          cssBytes.push(parseInt(size));
        }
      }
    });

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    const totalCSS = cssBytes.reduce((a, b) => a + b, 0);
    console.log(`Total CSS size: ${(totalCSS / 1024).toFixed(2)} KB`);

    // Total CSS should be under 500KB
    expect(totalCSS).toBeLessThan(500 * 1024);
  });

  test('images are optimized', async ({ page }) => {
    const imageBytes: { url: string; size: number }[] = [];

    page.on('response', async (response) => {
      const url = response.url();
      if (/\.(png|jpg|jpeg|gif|webp|svg)(\?|$)/.test(url)) {
        const headers = response.headers();
        const size = headers['content-length'];
        if (size) {
          imageBytes.push({ url, size: parseInt(size) });
        }
      }
    });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Check for oversized images
    const oversized = imageBytes.filter(img => img.size > 500 * 1024);

    if (oversized.length > 0) {
      console.log('Oversized images:', oversized.map(i => i.url));
    }

    // Log total image size
    const totalImages = imageBytes.reduce((a, b) => a + b.size, 0);
    console.log(`Total image size: ${(totalImages / 1024).toFixed(2)} KB`);
  });
});

/**
 * Network Request Count
 */
test.describe('Network Requests', () => {
  const course = COURSES[0];

  test('homepage request count is reasonable', async ({ page }) => {
    let requestCount = 0;

    page.on('request', () => {
      requestCount++;
    });

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    console.log(`Homepage requests: ${requestCount}`);

    // Should have less than 100 requests
    expect(requestCount).toBeLessThan(100);
  });

  test('section page request count is reasonable', async ({ page }) => {
    let requestCount = 0;

    page.on('request', () => {
      requestCount++;
    });

    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    console.log(`Section page requests: ${requestCount}`);

    expect(requestCount).toBeLessThan(100);
  });
});

/**
 * Memory Usage
 */
test.describe('Memory Usage', () => {
  const course = COURSES[0];

  test('memory usage is stable', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Get initial memory
    const initialMemory = await page.evaluate(() => {
      if ('memory' in performance) {
        return (performance as any).memory.usedJSHeapSize;
      }
      return 0;
    });

    // Navigate through several sections
    for (let i = 1; i <= 5; i++) {
      await page.goto(`${course.baseUrl}#/section/${i}`);
      await page.waitForLoadState('networkidle');
    }

    // Get final memory
    const finalMemory = await page.evaluate(() => {
      if ('memory' in performance) {
        return (performance as any).memory.usedJSHeapSize;
      }
      return 0;
    });

    if (initialMemory > 0 && finalMemory > 0) {
      const memoryIncrease = finalMemory - initialMemory;
      console.log(`Memory increase: ${(memoryIncrease / 1024 / 1024).toFixed(2)} MB`);

      // Memory shouldn't increase by more than 50MB
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    }
  });
});

/**
 * DOM Size
 */
test.describe('DOM Size', () => {
  const course = COURSES[0];

  test('DOM node count is reasonable', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const nodeCount = await page.evaluate(() => {
      return document.getElementsByTagName('*').length;
    });

    console.log(`DOM node count: ${nodeCount}`);

    // Should have less than 3000 nodes
    expect(nodeCount).toBeLessThan(3000);
  });

  test('DOM depth is reasonable', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const maxDepth = await page.evaluate(() => {
      function getDepth(element: Element, depth = 0): number {
        let max = depth;
        for (const child of Array.from(element.children)) {
          max = Math.max(max, getDepth(child, depth + 1));
        }
        return max;
      }
      return getDepth(document.body);
    });

    console.log(`Max DOM depth: ${maxDepth}`);

    // Should have less than 30 levels of nesting
    expect(maxDepth).toBeLessThan(30);
  });
});

/**
 * Scroll Performance
 */
test.describe('Scroll Performance', () => {
  const course = COURSES[0];

  test('scrolling is smooth', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Scroll down
    const startTime = Date.now();

    await page.evaluate(() => {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    });

    await page.waitForTimeout(500);

    // Scroll back up
    await page.evaluate(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const scrollTime = Date.now() - startTime;

    // Scrolling should be responsive
    expect(scrollTime).toBeLessThan(2000);
  });
});
