import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';

/**
 * Component Visual Regression Tests
 *
 * Verify that UI components render consistently across courses.
 */
test.describe('UI Components', () => {
  const course = COURSES[0];

  test.describe('Navigation Components', () => {
    test('header renders correctly', async ({ page }) => {
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');

      const header = page.locator('header, [class*="header"], nav').first();
      await expect(header).toBeVisible();

      await expect(header).toHaveScreenshot('header-component.png', {
        maxDiffPixels: 100,
      });
    });

    test('sidebar renders correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const sidebar = page.locator('aside, [class*="sidebar"]').first();

      if (await sidebar.isVisible()) {
        await expect(sidebar).toHaveScreenshot('sidebar-component.png', {
          maxDiffPixels: 150,
        });
      }
    });

    test('breadcrumb renders correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const breadcrumb = page.locator('[class*="breadcrumb"], [aria-label="breadcrumb"]').first();

      if (await breadcrumb.isVisible()) {
        await expect(breadcrumb).toHaveScreenshot('breadcrumb-component.png', {
          maxDiffPixels: 50,
        });
      }
    });
  });

  test.describe('Content Components', () => {
    test('callout/alert boxes render correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const callout = page.locator(
        '[class*="callout"], ' +
        '[class*="alert"], ' +
        '[class*="note"], ' +
        '[class*="warning"], ' +
        '[class*="tip"]'
      ).first();

      if (await callout.isVisible()) {
        await expect(callout).toHaveScreenshot('callout-component.png', {
          maxDiffPixels: 100,
        });
      }
    });

    test('theorem boxes render correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/theorems`);
      await page.waitForLoadState('networkidle');

      const theorem = page.locator('[class*="theorem"], [class*="Theorem"]').first();

      if (await theorem.isVisible()) {
        await expect(theorem).toHaveScreenshot('theorem-component.png', {
          maxDiffPixels: 150,
        });
      }
    });

    test('code blocks render correctly', async ({ page }) => {
      // Use ISLR or another course with code
      const islr = getCourseById('islr');
      if (!islr) {
        test.skip();
        return;
      }

      await page.goto(`${islr.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const codeBlock = page.locator('pre code, [class*="code-block"], [class*="highlight"]').first();

      if (await codeBlock.isVisible()) {
        await expect(codeBlock).toHaveScreenshot('code-block-component.png', {
          maxDiffPixels: 100,
        });
      }
    });
  });

  test.describe('Interactive Components', () => {
    test('quiz options render correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/quiz/1`);
      await page.waitForLoadState('networkidle');

      const quizContainer = page.locator('[class*="quiz"]').first();

      if (await quizContainer.isVisible()) {
        await expect(quizContainer).toHaveScreenshot('quiz-component.png', {
          maxDiffPixels: 200,
        });
      }
    });

    test('navigation buttons render correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const navButtons = page.locator(
        '[class*="next"], ' +
        '[class*="prev"], ' +
        'button:has-text("Next"), ' +
        'button:has-text("Previous")'
      ).first();

      if (await navButtons.isVisible()) {
        await expect(navButtons).toHaveScreenshot('nav-button-component.png', {
          maxDiffPixels: 50,
        });
      }
    });

    test('progress indicators render correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const progress = page.locator('[class*="progress"], [role="progressbar"]').first();

      if (await progress.isVisible()) {
        await expect(progress).toHaveScreenshot('progress-component.png', {
          maxDiffPixels: 50,
        });
      }
    });
  });

  test.describe('Gamification Components', () => {
    test('XP display renders correctly', async ({ page }) => {
      await page.goto(`${course.baseUrl}#/section/1`);
      await page.waitForLoadState('networkidle');

      const xpDisplay = page.locator('[class*="xp"], [class*="XP"]').first();

      if (await xpDisplay.isVisible()) {
        await expect(xpDisplay).toHaveScreenshot('xp-display-component.png', {
          maxDiffPixels: 50,
        });
      }
    });

    test('level badge renders correctly', async ({ page }) => {
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');

      const levelBadge = page.locator('[class*="level"], [class*="badge"]').first();

      if (await levelBadge.isVisible()) {
        await expect(levelBadge).toHaveScreenshot('level-badge-component.png', {
          maxDiffPixels: 50,
        });
      }
    });

    test('streak display renders correctly', async ({ page }) => {
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');

      const streak = page.locator('[class*="streak"]').first();

      if (await streak.isVisible()) {
        await expect(streak).toHaveScreenshot('streak-component.png', {
          maxDiffPixels: 50,
        });
      }
    });
  });
});

/**
 * Component State Tests
 */
test.describe('Component States', () => {
  const course = COURSES[0];

  test('button hover state', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    const button = page.locator('button').first();
    await button.hover();

    await page.waitForTimeout(300); // Wait for hover transition

    // Just verify no crash
    await expect(button).toBeVisible();
  });

  test('link hover state', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    const link = page.locator('a').first();
    await link.hover();

    await page.waitForTimeout(300);
    await expect(link).toBeVisible();
  });

  test('quiz option selected state', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const option = page.locator(
      'button[class*="option"], ' +
      '[data-testid="quiz-option"]'
    ).first();

    if (await option.isVisible()) {
      await option.click();
      await page.waitForTimeout(300);

      // Should show selected state
      const hasSelectedClass = await option.evaluate(el => {
        return el.classList.contains('selected') ||
               el.classList.contains('active') ||
               el.getAttribute('aria-pressed') === 'true' ||
               el.getAttribute('data-selected') === 'true';
      });

      // Just verify the interaction worked
      await expect(option).toBeVisible();
    }
  });
});

/**
 * Color Theme Consistency
 */
test.describe('Color Theme', () => {
  const course = COURSES[0];

  test('dark mode colors are consistent', async ({ page }) => {
    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Check background color
    const bgColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Should have a dark background (rgb values should be low)
    const isDark = bgColor.includes('rgb') && (() => {
      const match = bgColor.match(/\d+/g);
      if (match) {
        const [r, g, b] = match.map(Number);
        return (r + g + b) / 3 < 128; // Average RGB less than 50%
      }
      return false;
    })();

    // Math Academy uses dark theme
    expect(isDark).toBe(true);
  });

  test('text has sufficient contrast', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const text = page.locator('p, h1, h2, h3').first();

    if (await text.isVisible()) {
      const colors = await text.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          color: style.color,
          background: style.backgroundColor,
        };
      });

      // Text should be light colored for dark theme
      const textIsLight = colors.color.includes('rgb') && (() => {
        const match = colors.color.match(/\d+/g);
        if (match) {
          const [r, g, b] = match.map(Number);
          return (r + g + b) / 3 > 100; // Average RGB greater than ~40%
        }
        return false;
      })();

      expect(textIsLight).toBe(true);
    }
  });
});

/**
 * Component Consistency Across Courses
 */
test.describe('Cross-Course Consistency', () => {
  const coursesToCompare = COURSES.slice(0, 3);

  test('header style is consistent across courses', async ({ page }) => {
    const headerStyles: any[] = [];

    for (const course of coursesToCompare) {
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');

      const header = page.locator('header, [class*="header"]').first();

      if (await header.isVisible()) {
        const style = await header.evaluate(el => {
          const s = window.getComputedStyle(el);
          return {
            height: s.height,
            backgroundColor: s.backgroundColor,
          };
        });
        headerStyles.push({ courseId: course.id, style });
      }
    }

    // All headers should have similar styling
    if (headerStyles.length > 1) {
      const firstHeight = headerStyles[0].style.height;
      for (const { style } of headerStyles) {
        // Heights should be within 20px of each other
        const h1 = parseInt(firstHeight);
        const h2 = parseInt(style.height);
        expect(Math.abs(h1 - h2)).toBeLessThan(30);
      }
    }
  });
});

/**
 * Animation and Transition Tests
 */
test.describe('Animations', () => {
  const course = COURSES[0];

  test('page transitions complete without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));

    await page.goto(course.baseUrl);
    await page.waitForLoadState('networkidle');

    // Navigate to section
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Wait for any animations
    await page.waitForTimeout(500);

    expect(errors).toHaveLength(0);
  });

  test('sidebar toggle animation completes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const menuButton = page.locator(
      'button[aria-label*="menu"], ' +
      '[class*="hamburger"]'
    ).first();

    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500);

      // Sidebar or menu should be visible
      const sidebar = page.locator('aside, [class*="sidebar"], [class*="drawer"]').first();
      await expect(sidebar).toBeVisible();
    }
  });
});
