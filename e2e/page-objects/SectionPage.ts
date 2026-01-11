import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for section/lesson pages
 */
export class SectionPage extends BasePage {
  readonly lessonContent: Locator;
  readonly sectionTitle: Locator;
  readonly mathBlocks: Locator;
  readonly inlineMath: Locator;
  readonly definitions: Locator;
  readonly theorems: Locator;
  readonly examples: Locator;
  readonly callouts: Locator;
  readonly quiz: Locator;
  readonly visualizers: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;
  readonly breadcrumb: Locator;

  constructor(page: Page) {
    super(page);
    this.lessonContent = page.locator('[class*="lesson"], [class*="content"], article');
    this.sectionTitle = page.locator('h1, [class*="title"]').first();
    this.mathBlocks = page.locator('.katex-display');
    this.inlineMath = page.locator('.katex:not(.katex-display)');
    this.definitions = page.locator('[class*="definition"], [data-type="definition"]');
    this.theorems = page.locator('[class*="theorem"], [data-type="theorem"]');
    this.examples = page.locator('[class*="example"], [data-type="example"]');
    this.callouts = page.locator('[class*="callout"], [class*="note"], [class*="warning"]');
    this.quiz = page.locator('[class*="quiz"], [data-testid="section-quiz"]');
    this.visualizers = page.locator('canvas, [class*="visualizer"], [class*="interactive"]');
    // Use more specific selectors to avoid matching quiz option buttons that may contain "Next" text
    this.nextButton = page.locator('nav a:has-text("Next"), a[href*="section"]:has-text("Next")').first();
    this.prevButton = page.locator('nav a:has-text("Previous"), nav a:has-text("Back"), a[href*="section"]:has-text("Previous")').first();
    this.breadcrumb = page.locator('[class*="breadcrumb"], nav[aria-label="Breadcrumb"]');
  }

  /**
   * Navigate to a specific section
   */
  async navigate(sectionId: number): Promise<void> {
    await this.page.goto(`#/section/${sectionId}`);
    await this.waitForPageLoad();
  }

  /**
   * Wait for math to render
   */
  async waitForMathRendered(): Promise<void> {
    await this.page.waitForFunction(() => {
      const katex = document.querySelectorAll('.katex');
      return katex.length === 0 ||
        Array.from(katex).every(el => el.querySelector('.katex-html, svg'));
    }, { timeout: 10_000 });
  }

  /**
   * Get section title text
   */
  async getSectionTitle(): Promise<string> {
    await expect(this.sectionTitle).toBeVisible();
    return await this.sectionTitle.textContent() || '';
  }

  /**
   * Get math block count
   */
  async getMathBlockCount(): Promise<number> {
    await this.waitForMathRendered();
    return this.mathBlocks.count();
  }

  /**
   * Get inline math count
   */
  async getInlineMathCount(): Promise<number> {
    await this.waitForMathRendered();
    return this.inlineMath.count();
  }

  /**
   * Check if section has quiz
   */
  async hasQuiz(): Promise<boolean> {
    await this.scrollToBottom();
    await this.page.waitForTimeout(500);
    return this.quiz.isVisible();
  }

  /**
   * Check if section has visualizers
   */
  async hasVisualizers(): Promise<boolean> {
    return (await this.visualizers.count()) > 0;
  }

  /**
   * Go to next section
   */
  async goToNextSection(): Promise<void> {
    await this.nextButton.click();
    await this.waitForPageLoad();
  }

  /**
   * Go to previous section
   */
  async goToPreviousSection(): Promise<void> {
    await this.prevButton.click();
    await this.waitForPageLoad();
  }

  /**
   * Check if next button is visible
   */
  async hasNextSection(): Promise<boolean> {
    return this.nextButton.isVisible();
  }

  /**
   * Check if previous button is visible
   */
  async hasPreviousSection(): Promise<boolean> {
    return this.prevButton.isVisible();
  }

  /**
   * Get all definition titles
   */
  async getDefinitionTitles(): Promise<string[]> {
    const titles: string[] = [];
    const count = await this.definitions.count();
    for (let i = 0; i < count; i++) {
      const title = await this.definitions.nth(i).locator('h3, h4, [class*="title"]').textContent();
      if (title) titles.push(title.trim());
    }
    return titles;
  }

  /**
   * Get all theorem titles
   */
  async getTheoremTitles(): Promise<string[]> {
    const titles: string[] = [];
    const count = await this.theorems.count();
    for (let i = 0; i < count; i++) {
      const title = await this.theorems.nth(i).locator('h3, h4, [class*="title"]').textContent();
      if (title) titles.push(title.trim());
    }
    return titles;
  }

  /**
   * Take a screenshot of lesson content (excluding quiz)
   */
  async screenshotLessonContent(name: string): Promise<void> {
    await this.waitForMathRendered();
    await expect(this.lessonContent).toHaveScreenshot(`${name}.png`, {
      animations: 'disabled',
      mask: [this.quiz], // Mask quiz to avoid randomization differences
    });
  }

  /**
   * Verify all math is rendered (no raw LaTeX visible)
   */
  async verifyMathRendered(): Promise<boolean> {
    await this.waitForMathRendered();

    // Check for raw LaTeX patterns
    const bodyText = await this.lessonContent.textContent();
    const rawPatterns = ['\\frac', '\\sum', '\\int', '\\sqrt', '\\begin{'];

    for (const pattern of rawPatterns) {
      if (bodyText?.includes(pattern)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Get current section ID from URL
   */
  async getCurrentSectionId(): Promise<number> {
    const hash = await this.getUrlHash();
    const match = hash.match(/section\/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }
}
