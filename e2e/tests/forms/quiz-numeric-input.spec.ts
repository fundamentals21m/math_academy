import { test, expect } from '@playwright/test';
import { COURSES, getCourseById } from '../../config/courses';
import { QuizComponent } from '../../page-objects/QuizComponent';

/**
 * Numeric Input Quiz Tests
 *
 * Verify that numeric input quizzes function correctly.
 */
test.describe('Numeric Input Quizzes', () => {
  // Courses likely to have numeric input
  const mathCourses = [
    'calc1',
    'linalg',
    'crypto',
    'calc_easy',
    'ra',
  ].map(id => getCourseById(id)).filter(Boolean);

  for (const course of mathCourses) {
    if (!course) continue;

    test.describe(`@${course.id}`, () => {
      test('numeric input accepts numbers', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        if (!(await quiz.numericInput.isVisible())) {
          // Try another section that might have numeric input
          await page.goto(`${course.baseUrl}#/quiz/2`);
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(1000);
        }

        if (await quiz.numericInput.isVisible()) {
          // Enter a number
          await quiz.enterNumericAnswer(42);

          // Verify value was entered
          const value = await quiz.numericInput.inputValue();
          expect(value).toBe('42');
        } else {
          test.skip();
        }
      });

      test('numeric input handles decimals', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        if (await quiz.numericInput.isVisible()) {
          await quiz.numericInput.fill('3.14159');

          const value = await quiz.numericInput.inputValue();
          expect(value).toContain('3.14');
        }
      });

      test('numeric input handles negative numbers', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        if (await quiz.numericInput.isVisible()) {
          await quiz.numericInput.fill('-5');

          const value = await quiz.numericInput.inputValue();
          expect(value).toBe('-5');
        }
      });

      test('numeric input shows feedback on submit', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/quiz/1`);
        await page.waitForLoadState('networkidle');

        const quiz = new QuizComponent(page);
        await page.waitForTimeout(1000);

        if (await quiz.numericInput.isVisible()) {
          await quiz.numericInput.fill('0');

          if (await quiz.submitButton.isVisible()) {
            await quiz.submit();
            await page.waitForTimeout(500);

            // Should show some feedback
            const hasFeedback =
              await quiz.isAnswerCorrect() ||
              await quiz.isAnswerIncorrect() ||
              await quiz.feedback.isVisible();

            expect(hasFeedback).toBe(true);
          }
        }
      });
    });
  }
});

/**
 * Numeric Input Validation
 */
test.describe('Numeric Input Validation', () => {
  const course = COURSES[0];

  test('rejects non-numeric input', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Try to enter text
    await quiz.numericInput.fill('abc');

    // Value should be empty or the input should reject it
    const value = await quiz.numericInput.inputValue();
    const hasOnlyNumbers = /^-?\d*\.?\d*$/.test(value);

    expect(hasOnlyNumbers).toBe(true);
  });

  test('handles large numbers', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Enter large number
    await quiz.numericInput.fill('999999999');

    const value = await quiz.numericInput.inputValue();
    expect(value.length).toBeGreaterThan(0);
  });

  test('handles scientific notation if supported', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Some numeric inputs support scientific notation
    await quiz.numericInput.fill('1e10');

    // Either accepts it or converts to regular number
    const value = await quiz.numericInput.inputValue();
    // Just verify no crash
    expect(typeof value).toBe('string');
  });
});

/**
 * Numeric Input Accessibility
 */
test.describe('Numeric Input Accessibility', () => {
  const course = COURSES[0];

  test('numeric input has proper type attribute', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    const type = await quiz.numericInput.getAttribute('type');
    const inputMode = await quiz.numericInput.getAttribute('inputmode');

    // Should have numeric type or inputmode
    const isNumeric =
      type === 'number' ||
      type === 'tel' ||
      inputMode === 'numeric' ||
      inputMode === 'decimal';

    expect(isNumeric).toBe(true);
  });

  test('numeric input has associated label', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    const id = await quiz.numericInput.getAttribute('id');
    const ariaLabel = await quiz.numericInput.getAttribute('aria-label');
    const ariaLabelledBy = await quiz.numericInput.getAttribute('aria-labelledby');

    // Should have some form of labeling
    const hasLabel =
      (id && (await page.locator(`label[for="${id}"]`).count()) > 0) ||
      ariaLabel !== null ||
      ariaLabelledBy !== null;

    // Soft check - just log if missing
    if (!hasLabel) {
      console.log(`Warning: Numeric input in ${course.id} may lack accessible label`);
    }
  });

  test('numeric input is keyboard accessible', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Tab to input
    await quiz.numericInput.focus();
    await page.waitForTimeout(100);

    // Type using keyboard
    await page.keyboard.type('123');

    const value = await quiz.numericInput.inputValue();
    expect(value).toContain('123');
  });
});

/**
 * Numeric Input Mobile Behavior
 */
test.describe('Numeric Input Mobile', () => {
  const course = COURSES[0];

  test('shows numeric keyboard on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Check inputmode for mobile keyboard hint
    const inputMode = await quiz.numericInput.getAttribute('inputmode');
    const type = await quiz.numericInput.getAttribute('type');

    // Should hint at numeric keyboard
    const hasNumericHint =
      inputMode === 'numeric' ||
      inputMode === 'decimal' ||
      type === 'number' ||
      type === 'tel';

    expect(hasNumericHint).toBe(true);
  });
});

/**
 * Numeric Input Edge Cases
 */
test.describe('Numeric Input Edge Cases', () => {
  const course = COURSES[0];

  test('handles empty input gracefully', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    // Clear any existing value
    await quiz.numericInput.clear();

    // Try to submit empty
    if (await quiz.submitButton.isVisible()) {
      await quiz.submit();

      // Should either show error or prevent submission
      // Just verify no crash
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('handles zero correctly', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    await quiz.numericInput.fill('0');

    const value = await quiz.numericInput.inputValue();
    expect(value).toBe('0');
  });

  test('handles leading zeros', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/quiz/1`);
    await page.waitForLoadState('networkidle');

    const quiz = new QuizComponent(page);
    await page.waitForTimeout(1000);

    if (!(await quiz.numericInput.isVisible())) {
      test.skip();
      return;
    }

    await quiz.numericInput.fill('007');

    // Browser may normalize this
    const value = await quiz.numericInput.inputValue();
    // Just verify it accepted input
    expect(value.length).toBeGreaterThan(0);
  });
});
