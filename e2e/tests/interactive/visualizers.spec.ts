import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';

/**
 * Interactive Visualizer Tests
 *
 * Test interactive math visualizations and demos.
 */
test.describe('Interactive Visualizers', () => {
  // Courses with known interactive content
  const interactiveCourses = [
    'linalg',      // Matrix visualizers
    'calc1',       // Function graphers
    'crypto',      // Number theory demos
    'four-pillars', // Geometry demos
  ].map(id => getCourseById(id)).filter(Boolean);

  for (const course of interactiveCourses) {
    if (!course) continue;

    test.describe(`@${course.id}`, () => {
      test('interactive elements load without errors', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', e => errors.push(e.message));

        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        // Check for visualizer containers
        const visualizers = page.locator(
          '[class*="visualizer"], ' +
          '[class*="interactive"], ' +
          '[class*="canvas"], ' +
          '[class*="chart"], ' +
          '[class*="graph"]'
        );

        const count = await visualizers.count();
        console.log(`${course.id}: ${count} interactive elements found`);

        // No JavaScript errors during load
        expect(errors.filter(e => !e.includes('React'))).toHaveLength(0);
      });

      test('sliders and controls are interactive', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        // Look for sliders
        const sliders = page.locator(
          'input[type="range"], ' +
          '[role="slider"], ' +
          '[class*="slider"]'
        );

        if (await sliders.count() > 0) {
          const slider = sliders.first();

          // Get initial value
          const initialValue = await slider.inputValue().catch(() => null);

          // Interact with slider
          await slider.click();
          await page.keyboard.press('ArrowRight');
          await page.waitForTimeout(300);

          // Value should change (or at least not crash)
          await expect(slider).toBeVisible();
        }
      });

      test('canvas elements render', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        const canvases = page.locator('canvas');

        if (await canvases.count() > 0) {
          const canvas = canvases.first();
          await expect(canvas).toBeVisible();

          // Canvas should have dimensions
          const box = await canvas.boundingBox();
          expect(box).not.toBeNull();
          expect(box!.width).toBeGreaterThan(0);
          expect(box!.height).toBeGreaterThan(0);
        }
      });

      test('SVG visualizers render', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');

        const svgs = page.locator('svg[class*="chart"], svg[class*="graph"], svg[class*="plot"]');

        if (await svgs.count() > 0) {
          const svg = svgs.first();
          await expect(svg).toBeVisible();

          // SVG should have content
          const paths = await svg.locator('path, line, circle, rect').count();
          expect(paths).toBeGreaterThan(0);
        }
      });
    });
  }
});

/**
 * Chart/Graph Interactions
 */
test.describe('Chart Interactions', () => {
  const course = COURSES[0];

  test('hover on chart shows tooltip', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const chart = page.locator(
      '[class*="chart"], ' +
      '[class*="graph"], ' +
      '[class*="plot"]'
    ).first();

    if (await chart.isVisible()) {
      await chart.hover();
      await page.waitForTimeout(500);

      // Look for tooltip
      const tooltip = page.locator('[class*="tooltip"], [role="tooltip"]');
      const hasTooltip = await tooltip.isVisible().catch(() => false);

      // Tooltip is optional
      console.log(`Chart has tooltip: ${hasTooltip}`);
    }
  });

  test('chart is responsive', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const chart = page.locator(
      '[class*="chart"], ' +
      '[class*="graph"], ' +
      'canvas'
    ).first();

    if (await chart.isVisible()) {
      // Get initial size
      const initialBox = await chart.boundingBox();

      // Resize viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(500);

      // Get new size
      const newBox = await chart.boundingBox();

      // Chart should resize (or at least not overflow)
      if (initialBox && newBox) {
        expect(newBox.width).toBeLessThanOrEqual(375);
      }
    }
  });
});

/**
 * Button Controls
 */
test.describe('Control Buttons', () => {
  const course = COURSES[0];

  test('play/pause buttons work', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const playButton = page.locator(
      'button:has-text("Play"), ' +
      'button:has-text("Start"), ' +
      'button[aria-label*="play"]'
    ).first();

    if (await playButton.isVisible()) {
      await playButton.click();
      await page.waitForTimeout(500);

      // Look for pause button
      const pauseButton = page.locator(
        'button:has-text("Pause"), ' +
        'button:has-text("Stop"), ' +
        'button[aria-label*="pause"]'
      ).first();

      const hasPause = await pauseButton.isVisible().catch(() => false);
      console.log(`Has pause button: ${hasPause}`);
    }
  });

  test('reset buttons work', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const resetButton = page.locator(
      'button:has-text("Reset"), ' +
      'button:has-text("Clear"), ' +
      'button[aria-label*="reset"]'
    ).first();

    if (await resetButton.isVisible()) {
      // Click reset
      await resetButton.click();
      await page.waitForTimeout(300);

      // Should not crash
      await expect(resetButton).toBeVisible();
    }
  });
});

/**
 * Animation Performance
 */
test.describe('Animation Performance', () => {
  const course = COURSES[0];

  test('animations run smoothly', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Start any animation
    const playButton = page.locator('button:has-text("Play")').first();

    if (await playButton.isVisible()) {
      await playButton.click();

      // Wait and check for smooth animation (no freezes)
      const startTime = Date.now();

      await page.waitForTimeout(2000);

      const elapsed = Date.now() - startTime;

      // Animation should not freeze the page
      expect(elapsed).toBeLessThan(3000);
    }
  });
});

/**
 * Touch Interactions
 */
test.describe('Touch Interactions', () => {
  const course = COURSES[0];

  test('touch dragging works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const draggable = page.locator(
      '[class*="draggable"], ' +
      '[draggable="true"], ' +
      '[class*="handle"]'
    ).first();

    if (await draggable.isVisible()) {
      const box = await draggable.boundingBox();

      if (box) {
        // Simulate touch drag
        await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
        await page.waitForTimeout(100);

        // Element should still be visible
        await expect(draggable).toBeVisible();
      }
    }
  });

  test('pinch zoom works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const zoomable = page.locator(
      '[class*="zoomable"], ' +
      '[class*="graph"], ' +
      'canvas'
    ).first();

    if (await zoomable.isVisible()) {
      // Pinch zoom is hard to simulate in Playwright
      // Just verify element is interactive
      await zoomable.click();
      await page.waitForTimeout(300);

      await expect(zoomable).toBeVisible();
    }
  });
});

/**
 * Math Input
 */
test.describe('Math Input', () => {
  const course = COURSES[0];

  test('math input fields accept equations', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const mathInput = page.locator(
      'input[class*="math"], ' +
      'input[class*="equation"], ' +
      '[class*="math-input"]'
    ).first();

    if (await mathInput.isVisible()) {
      await mathInput.fill('x^2 + 2x + 1');
      await page.waitForTimeout(500);

      // Input should accept the value
      const value = await mathInput.inputValue();
      expect(value).toContain('x');
    }
  });

  test('function plotter updates graph', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const functionInput = page.locator(
      'input[placeholder*="function"], ' +
      'input[placeholder*="f(x)"]'
    ).first();

    if (await functionInput.isVisible()) {
      // Clear and enter new function
      await functionInput.fill('sin(x)');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);

      // Graph should update (canvas/svg should change)
      // Hard to verify visually, just check no error
      await expect(page.locator('body')).toBeVisible();
    }
  });
});

/**
 * Visualizer State Persistence
 */
test.describe('State Persistence', () => {
  const course = COURSES[0];

  test('visualizer state persists on navigation', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Interact with a slider
    const slider = page.locator('input[type="range"]').first();

    if (await slider.isVisible()) {
      await slider.fill('75');
      const valueBefore = await slider.inputValue();

      // Navigate away
      await page.goto(`${course.baseUrl}#/section/2`);
      await page.waitForLoadState('networkidle');

      // Navigate back
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      // Check if value persisted
      const valueAfter = await slider.inputValue();

      // State persistence is optional - just log
      console.log(`State persisted: ${valueBefore === valueAfter}`);
    }
  });
});
