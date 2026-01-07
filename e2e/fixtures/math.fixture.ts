import { expect } from '@playwright/test';
import { test as baseTest } from './base.fixture';

/**
 * Math/KaTeX verification fixtures
 */
export interface MathTestFixtures {
  /** Verify a math block is rendered correctly */
  verifyMathBlock: (index: number) => Promise<void>;

  /** Verify all inline math elements are rendered */
  verifyInlineMath: () => Promise<void>;

  /** Capture a screenshot of a specific math element */
  captureMathScreenshot: (selector: string, name: string) => Promise<void>;

  /** Check that no raw LaTeX is visible (rendering failed) */
  verifyNoRawLatex: () => Promise<boolean>;

  /** Get the rendered text of a math element */
  getMathContent: (index: number) => Promise<string>;
}

export const test = baseTest.extend<MathTestFixtures>({
  verifyMathBlock: async ({ page }, use) => {
    const verify = async (index: number) => {
      const mathBlocks = page.locator('.katex-display, .MathJax_Display');
      const block = mathBlocks.nth(index);

      // Verify the element exists and is visible
      await expect(block).toBeVisible();

      // Verify KaTeX has rendered content
      const hasContent = await block.evaluate(el => {
        const katexHtml = el.querySelector('.katex-html');
        const katexMathml = el.querySelector('.katex-mathml');
        const svg = el.querySelector('svg');
        return (
          (katexHtml && katexHtml.children.length > 0) ||
          katexMathml !== null ||
          svg !== null
        );
      });

      expect(hasContent).toBe(true);
    };
    await use(verify);
  },

  verifyInlineMath: async ({ page }, use) => {
    const verify = async () => {
      const inlineMath = page.locator('.katex:not(.katex-display)');
      const count = await inlineMath.count();

      for (let i = 0; i < count; i++) {
        const element = inlineMath.nth(i);
        await expect(element).toBeVisible();

        // Verify rendered content
        const hasContent = await element.evaluate(el => {
          const html = el.querySelector('.katex-html');
          return html && html.children.length > 0;
        });

        expect(hasContent).toBe(true);
      }
    };
    await use(verify);
  },

  captureMathScreenshot: async ({ page }, use) => {
    const capture = async (selector: string, name: string) => {
      const element = page.locator(selector);
      await expect(element).toBeVisible();
      await expect(element).toHaveScreenshot(`${name}.png`, {
        animations: 'disabled',
        caret: 'hide',
      });
    };
    await use(capture);
  },

  verifyNoRawLatex: async ({ page }, use) => {
    const verify = async () => {
      // Check for common LaTeX commands that shouldn't be visible
      const rawLatexPatterns = [
        '\\frac',
        '\\sum',
        '\\int',
        '\\sqrt',
        '\\begin{',
        '\\end{',
        '\\mathbf',
        '\\mathrm',
      ];

      const bodyText = await page.locator('body').textContent();

      for (const pattern of rawLatexPatterns) {
        if (bodyText?.includes(pattern)) {
          return false; // Found raw LaTeX
        }
      }

      return true;
    };
    await use(verify);
  },

  getMathContent: async ({ page }, use) => {
    const getContent = async (index: number) => {
      const mathBlocks = page.locator('.katex');
      const block = mathBlocks.nth(index);

      // Get the annotation element which contains the original LaTeX
      const annotation = block.locator('annotation[encoding="application/x-tex"]');
      if (await annotation.count() > 0) {
        return await annotation.textContent() || '';
      }

      // Fallback to text content
      return await block.textContent() || '';
    };
    await use(getContent);
  },
});

export { expect };
