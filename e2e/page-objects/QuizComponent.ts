import { Page, Locator, expect } from '@playwright/test';

/**
 * Page object for quiz components
 */
export class QuizComponent {
  readonly page: Page;
  readonly container: Locator;
  readonly question: Locator;
  readonly options: Locator;
  readonly numericInput: Locator;
  readonly textInput: Locator;
  readonly submitButton: Locator;
  readonly nextButton: Locator;
  readonly retryButton: Locator;
  readonly result: Locator;
  readonly progress: Locator;
  readonly explanation: Locator;
  readonly feedback: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.locator('[class*="quiz"], [data-testid="quiz"]');
    this.question = this.container.locator('[class*="question"], p').first();
    this.options = this.container.locator(
      'button[class*="option"], ' +
      '[role="radio"], ' +
      '[data-testid="quiz-option"]'
    );
    this.numericInput = this.container.locator('input[type="number"], input[inputmode="numeric"]');
    this.textInput = this.container.locator('input[type="text"]:not([inputmode="numeric"])');
    this.submitButton = this.container.locator('button:has-text("Check"), button:has-text("Submit")');
    this.nextButton = this.container.locator('button:has-text("Next")');
    this.retryButton = this.container.locator('button:has-text("Try Again"), button:has-text("Retry")');
    this.result = this.container.locator('[class*="result"], [class*="complete"], [class*="score"]');
    this.progress = this.container.locator('[class*="progress"]');
    this.explanation = this.container.locator('[class*="explanation"]');
    this.feedback = this.container.locator('[class*="feedback"], [class*="correct"], [class*="incorrect"]');
  }

  /**
   * Check if quiz is visible
   */
  async isVisible(): Promise<boolean> {
    return this.container.isVisible();
  }

  /**
   * Get the current question text
   */
  async getQuestionText(): Promise<string> {
    return await this.question.textContent() || '';
  }

  /**
   * Get number of options for current question
   */
  async getOptionCount(): Promise<number> {
    return this.options.count();
  }

  /**
   * Select an option by index
   */
  async selectOption(index: number): Promise<void> {
    await this.options.nth(index).click();
  }

  /**
   * Select a random option
   */
  async selectRandomOption(): Promise<number> {
    const count = await this.getOptionCount();
    const index = Math.floor(Math.random() * count);
    await this.selectOption(index);
    return index;
  }

  /**
   * Enter numeric answer
   */
  async enterNumericAnswer(value: number): Promise<void> {
    await this.numericInput.fill(value.toString());
  }

  /**
   * Enter text answer
   */
  async enterTextAnswer(value: string): Promise<void> {
    await this.textInput.fill(value);
  }

  /**
   * Submit the current answer
   */
  async submit(): Promise<void> {
    if (await this.submitButton.isVisible()) {
      await this.submitButton.click();
    }
  }

  /**
   * Go to next question
   */
  async next(): Promise<void> {
    if (await this.nextButton.isVisible()) {
      await this.nextButton.click();
      await this.page.waitForTimeout(300);
    }
  }

  /**
   * Check if feedback is showing correct
   */
  async isAnswerCorrect(): Promise<boolean> {
    return await this.container.locator(
      '[class*="emerald"], ' +
      '[class*="green"], ' +
      '[class*="correct"]'
    ).isVisible();
  }

  /**
   * Check if feedback is showing incorrect
   */
  async isAnswerIncorrect(): Promise<boolean> {
    return await this.container.locator(
      '[class*="red"], ' +
      '[class*="incorrect"], ' +
      '[class*="wrong"]'
    ).isVisible();
  }

  /**
   * Check if quiz is complete
   */
  async isComplete(): Promise<boolean> {
    return this.result.isVisible();
  }

  /**
   * Get final score
   */
  async getScore(): Promise<{ correct: number; total: number } | null> {
    const resultText = await this.result.textContent();
    if (!resultText) return null;

    const match = resultText.match(/(\d+)\s*(?:out of|\/)\s*(\d+)/);
    if (match) {
      return {
        correct: parseInt(match[1]),
        total: parseInt(match[2]),
      };
    }
    return null;
  }

  /**
   * Retry the quiz
   */
  async retry(): Promise<void> {
    if (await this.retryButton.isVisible()) {
      await this.retryButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  }

  /**
   * Complete the quiz with random answers
   */
  async completeWithRandomAnswers(): Promise<{ correct: number; total: number }> {
    let correct = 0;
    let total = 0;

    while (!(await this.isComplete())) {
      const optionCount = await this.getOptionCount();
      if (optionCount === 0) break;

      await this.selectRandomOption();
      total++;

      // Check if correct before moving on
      if (await this.isAnswerCorrect()) {
        correct++;
      }

      // Move to next or finish
      if (await this.nextButton.isVisible()) {
        await this.next();
      } else {
        break;
      }
    }

    return { correct, total };
  }

  /**
   * Complete quiz with all correct answers (using first option as placeholder)
   * Note: This always selects first option, not guaranteed correct
   */
  async completeAllQuestions(): Promise<void> {
    while (!(await this.isComplete())) {
      const optionCount = await this.getOptionCount();
      if (optionCount === 0) break;

      await this.selectOption(0);

      if (await this.nextButton.isVisible()) {
        await this.next();
      } else {
        break;
      }
    }
  }

  /**
   * Get current question number from progress
   */
  async getCurrentQuestionNumber(): Promise<number> {
    // Check if progress element is visible before accessing
    if (!(await this.progress.isVisible().catch(() => false))) {
      return 0;
    }

    const progressText = await this.progress.textContent({ timeout: 5000 }).catch(() => null);
    if (!progressText) return 0;

    const match = progressText.match(/(\d+)\s*(?:of|\/)/);
    return match ? parseInt(match[1]) : 0;
  }

  /**
   * Get total questions from progress
   */
  async getTotalQuestions(): Promise<number> {
    // Check if progress element is visible before accessing
    if (!(await this.progress.isVisible().catch(() => false))) {
      return 0;
    }

    const progressText = await this.progress.textContent({ timeout: 5000 }).catch(() => null);
    if (!progressText) return 0;

    const match = progressText.match(/(?:of|\/)\s*(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  /**
   * Check if explanation is visible
   */
  async hasExplanation(): Promise<boolean> {
    return this.explanation.isVisible();
  }

  /**
   * Get explanation text
   */
  async getExplanationText(): Promise<string> {
    return await this.explanation.textContent() || '';
  }
}
