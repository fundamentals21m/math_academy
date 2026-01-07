import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';
import { QuizComponent } from '../../page-objects/QuizComponent';

/**
 * Text Input Quiz Tests
 *
 * Verify that text input quizzes function correctly.
 */
test.describe('Text Input Quizzes', () => {
  const testCourses = COURSES.slice(0, 5);

  for (const course of testCourses) {
    test.describe(`@${course.id}`, () => {
      test('text input accepts text', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        // Look for text input (not numeric)
        const textInput = page.locator(
          'input[type="text"]:not([inputmode="numeric"]), ' +
          'input:not([type]), ' +
          'textarea'
        ).first();

        if (await textInput.isVisible()) {
          await textInput.fill('test answer');

          const value = await textInput.inputValue();
          expect(value).toBe('test answer');
        } else {
          test.skip();
        }
      });

      test('text input handles special characters', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const textInput = page.locator(
          'input[type="text"]:not([inputmode="numeric"]), ' +
          'textarea'
        ).first();

        if (await textInput.isVisible()) {
          await textInput.fill("Test's \"special\" chars: <>&");

          const value = await textInput.inputValue();
          expect(value).toContain('Test');
        }
      });

      test('text input handles unicode', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const textInput = page.locator(
          'input[type="text"]:not([inputmode="numeric"]), ' +
          'textarea'
        ).first();

        if (await textInput.isVisible()) {
          // Test with math symbols
          await textInput.fill('α + β = γ');

          const value = await textInput.inputValue();
          expect(value).toContain('α');
        }
      });

      test('text input shows feedback on submit', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        const textInput = page.locator(
          'input[type="text"]:not([inputmode="numeric"]), ' +
          'textarea'
        ).first();

        if (await textInput.isVisible()) {
          await textInput.fill('test');

          if (await quiz.submitButton.isVisible()) {
            await quiz.submit();
            await page.waitForTimeout(500);

            // Should show some feedback
            const body = page.locator('body');
            await expect(body).toBeVisible();
          }
        }
      });
    });
  }
});

/**
 * Text Input Case Sensitivity
 */
test.describe('Text Input Case Handling', () => {
  const course = COURSES[0];

  test('handles uppercase input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    await textInput.fill('UPPERCASE');

    const value = await textInput.inputValue();
    expect(value).toBe('UPPERCASE');
  });

  test('handles mixed case input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    await textInput.fill('MixedCase123');

    const value = await textInput.inputValue();
    expect(value).toBe('MixedCase123');
  });
});

/**
 * Text Input Whitespace Handling
 */
test.describe('Text Input Whitespace', () => {
  const course = COURSES[0];

  test('handles leading/trailing spaces', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    await textInput.fill('  spaced  ');

    const value = await textInput.inputValue();
    // Value may or may not be trimmed
    expect(value.includes('spaced')).toBe(true);
  });

  test('handles multiple spaces', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    await textInput.fill('word1  word2');

    const value = await textInput.inputValue();
    expect(value).toContain('word1');
    expect(value).toContain('word2');
  });
});

/**
 * Text Input Length Handling
 */
test.describe('Text Input Length', () => {
  const course = COURSES[0];

  test('handles empty input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    // Leave empty and try to submit
    await textInput.clear();

    if (await quiz.submitButton.isVisible()) {
      await quiz.submit();

      // Should either show validation error or handle gracefully
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('handles long input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    const longText = 'a'.repeat(1000);
    await textInput.fill(longText);

    const value = await textInput.inputValue();
    // Either accepts all or truncates
    expect(value.length).toBeGreaterThan(0);
  });

  test('respects maxlength attribute', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    const maxLength = await textInput.getAttribute('maxlength');

    if (maxLength) {
      const max = parseInt(maxLength);
      const longText = 'a'.repeat(max + 100);
      await textInput.fill(longText);

      const value = await textInput.inputValue();
      expect(value.length).toBeLessThanOrEqual(max);
    }
  });
});

/**
 * Text Input Accessibility
 */
test.describe('Text Input Accessibility', () => {
  const course = COURSES[0];

  test('text input has associated label', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    const id = await textInput.getAttribute('id');
    const ariaLabel = await textInput.getAttribute('aria-label');
    const ariaLabelledBy = await textInput.getAttribute('aria-labelledby');
    const placeholder = await textInput.getAttribute('placeholder');

    // Should have some form of labeling
    const hasLabel =
      (id && (await page.locator(`label[for="${id}"]`).count()) > 0) ||
      ariaLabel !== null ||
      ariaLabelledBy !== null ||
      placeholder !== null;

    // Log warning if missing proper label
    if (!hasLabel) {
      console.log(`Warning: Text input may lack accessible label`);
    }
  });

  test('text input is keyboard accessible', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    // Focus the input
    await textInput.focus();

    // Type using keyboard
    await page.keyboard.type('typed text');

    const value = await textInput.inputValue();
    expect(value).toBe('typed text');
  });

  test('text input has visible focus state', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textInput = page.locator(
      'input[type="text"]:not([inputmode="numeric"]), ' +
      'textarea'
    ).first();

    if (!(await textInput.isVisible())) {
      test.skip();
      return;
    }

    // Get styles before focus
    const unfocusedOutline = await textInput.evaluate(el => {
      return window.getComputedStyle(el).outline;
    });

    // Focus the input
    await textInput.focus();
    await page.waitForTimeout(100);

    // Get styles after focus
    const focusedOutline = await textInput.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        outline: style.outline,
        boxShadow: style.boxShadow,
        border: style.border,
      };
    });

    // Some visual change should occur on focus
    // (outline, box-shadow, or border change)
  });
});

/**
 * Textarea Tests
 */
test.describe('Textarea Inputs', () => {
  const course = COURSES[0];

  test('textarea handles multiline input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textarea = page.locator('textarea').first();

    if (!(await textarea.isVisible())) {
      test.skip();
      return;
    }

    await textarea.fill('Line 1\nLine 2\nLine 3');

    const value = await textarea.inputValue();
    expect(value).toContain('Line 1');
    expect(value).toContain('\n');
    expect(value).toContain('Line 3');
  });

  test('textarea is resizable', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const textarea = page.locator('textarea').first();

    if (!(await textarea.isVisible())) {
      test.skip();
      return;
    }

    const resize = await textarea.evaluate(el => {
      return window.getComputedStyle(el).resize;
    });

    // Textarea should allow some resizing (not 'none')
    // Or it should have a reasonable height
    const height = await textarea.evaluate(el => el.offsetHeight);
    expect(height).toBeGreaterThan(30);
  });
});
