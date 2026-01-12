import { expect, Locator } from '@playwright/test';
import { test as baseTest } from './base.fixture';

/**
 * Quiz testing fixtures
 */
export interface QuizTestFixtures {
  /** Navigate to a section's quiz */
  navigateToQuiz: (sectionId: number) => Promise<void>;

  /** Check if quiz is visible on page */
  isQuizVisible: () => Promise<boolean>;

  /** Get quiz question elements */
  getQuizQuestions: () => Locator;

  /** Get quiz option buttons */
  getQuizOptions: () => Locator;

  /** Select a quiz option by index */
  selectOption: (index: number) => Promise<void>;

  /** Submit the current answer */
  submitAnswer: () => Promise<void>;

  /** Go to next question */
  nextQuestion: () => Promise<void>;

  /** Complete the entire quiz with random answers */
  completeQuizRandomly: () => Promise<{ correct: number; total: number }>;

  /** Get the quiz result after completion */
  getQuizResult: () => Promise<{ score: number; total: number } | null>;

  /** Retry the quiz */
  retryQuiz: () => Promise<void>;
}

export const test = baseTest.extend<QuizTestFixtures>({
  navigateToQuiz: async ({ page, course }, use) => {
    const navigate = async (sectionId: number) => {
      await page.goto(`${course.baseUrl}#/quiz/section/${sectionId}`);
      await page.waitForLoadState('networkidle');
    };
    await use(navigate);
  },

  isQuizVisible: async ({ page }, use) => {
    const check = async () => {
      const quizSelectors = [
        '[class*="quiz"]',
        '[data-testid="quiz"]',
        '[data-testid="section-quiz"]',
      ];

      for (const selector of quizSelectors) {
        const count = await page.locator(selector).count();
        if (count > 0) return true;
      }
      return false;
    };
    await use(check);
  },

  getQuizQuestions: async ({ page }, use) => {
    await use(() => page.locator('[class*="question"], [data-testid="question"]'));
  },

  getQuizOptions: async ({ page }, use) => {
    await use(() => page.locator(
      'button[class*="option"], ' +
      '[role="radio"], ' +
      '[data-testid="quiz-option"], ' +
      '[class*="quiz"] button:not([class*="submit"]):not([class*="next"])'
    ));
  },

  selectOption: async ({ page }, use) => {
    const select = async (index: number) => {
      const options = page.locator(
        'button[class*="option"], ' +
        '[role="radio"], ' +
        '[data-testid="quiz-option"], ' +
        '[class*="quiz"] button:not([class*="submit"]):not([class*="next"])'
      );
      await options.nth(index).click();
    };
    await use(select);
  },

  submitAnswer: async ({ page }, use) => {
    const submit = async () => {
      const submitBtn = page.locator(
        'button:has-text("Check"), ' +
        'button:has-text("Submit"), ' +
        'button[class*="submit"]'
      );
      if (await submitBtn.count() > 0 && await submitBtn.isVisible()) {
        await submitBtn.click();
      }
    };
    await use(submit);
  },

  nextQuestion: async ({ page }, use) => {
    const next = async () => {
      const nextBtn = page.locator(
        'button:has-text("Next"), ' +
        'button:has-text("Continue"), ' +
        'button[class*="next"]'
      );
      if (await nextBtn.count() > 0 && await nextBtn.isVisible()) {
        await nextBtn.click();
        await page.waitForTimeout(300); // Wait for animation
      }
    };
    await use(next);
  },

  completeQuizRandomly: async ({ page }, use) => {
    const complete = async () => {
      let correct = 0;
      let total = 0;

      // Keep answering until we see results
      while (true) {
        // Check if quiz is complete
        const resultVisible = await page.locator(
          '[class*="result"], ' +
          '[class*="complete"], ' +
          '[class*="score"], ' +
          ':text("out of")'
        ).isVisible().catch(() => false);

        if (resultVisible) break;

        // Get options
        const options = page.locator(
          'button[class*="option"], ' +
          '[role="radio"], ' +
          '[data-testid="quiz-option"]'
        );
        const optionCount = await options.count();

        if (optionCount === 0) break;

        // Select random option
        const randomIndex = Math.floor(Math.random() * optionCount);
        await options.nth(randomIndex).click();
        total++;

        // Check if correct (look for green/success styling)
        const isCorrect = await page.locator(
          '[class*="emerald"], ' +
          '[class*="green"], ' +
          '[class*="correct"], ' +
          '[class*="success"]'
        ).isVisible().catch(() => false);

        if (isCorrect) correct++;

        // Move to next question
        const nextBtn = page.locator('button:has-text("Next")');
        if (await nextBtn.isVisible().catch(() => false)) {
          await nextBtn.click();
          await page.waitForTimeout(300);
        } else {
          break;
        }
      }

      return { correct, total };
    };
    await use(complete);
  },

  getQuizResult: async ({ page }, use) => {
    const getResult = async () => {
      // Try to find result text
      const resultText = await page.locator(
        '[class*="result"], ' +
        '[class*="score"], ' +
        ':text-matches("\\d+\\s*(out of|/)\\s*\\d+")'
      ).textContent().catch(() => null);

      if (!resultText) return null;

      // Parse "X out of Y" or "X/Y" format
      const match = resultText.match(/(\d+)\s*(?:out of|\/)\s*(\d+)/);
      if (match) {
        return {
          score: parseInt(match[1]),
          total: parseInt(match[2]),
        };
      }

      return null;
    };
    await use(getResult);
  },

  retryQuiz: async ({ page }, use) => {
    const retry = async () => {
      const retryBtn = page.locator(
        'button:has-text("Try Again"), ' +
        'button:has-text("Retry"), ' +
        'button:has-text("Restart")'
      );
      if (await retryBtn.isVisible()) {
        await retryBtn.click();
        await page.waitForLoadState('networkidle');
      }
    };
    await use(retry);
  },
});

export { expect };
