import { Page, Locator, expect } from '@playwright/test';

/**
 * Base page object with common methods for all pages
 */
export class BasePage {
  readonly page: Page;
  readonly header: Locator;
  readonly navigation: Locator;
  readonly sidebar: Locator;
  readonly main: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header, [role="banner"]');
    this.navigation = page.locator('nav, [role="navigation"]');
    this.sidebar = page.locator('aside, [role="complementary"], [class*="sidebar"]');
    this.main = page.locator('main, [role="main"], #root > div');
    this.footer = page.locator('footer, [role="contentinfo"]');
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.main).toBeVisible();
  }

  /**
   * Get the page title
   */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Check if there are console errors
   */
  async collectConsoleErrors(): Promise<string[]> {
    const errors: string[] = [];

    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await this.page.waitForTimeout(1000);
    return errors;
  }

  /**
   * Check for critical console errors (excluding expected ones)
   */
  async hasCriticalErrors(): Promise<boolean> {
    const errors = await this.collectConsoleErrors();

    // Filter out expected/non-critical errors
    const criticalErrors = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('404') &&
      !e.includes('vite.svg') &&
      !e.includes('manifest.json')
    );

    return criticalErrors.length > 0;
  }

  /**
   * Toggle sidebar (mobile)
   */
  async toggleSidebar(): Promise<void> {
    const sidebarBtn = this.page.locator(
      'button:has-text("menu"), ' +
      'button[aria-label*="sidebar"], ' +
      'button[aria-label*="menu"]'
    );

    if (await sidebarBtn.isVisible()) {
      await sidebarBtn.click();
    }
  }

  /**
   * Check if on mobile viewport
   */
  async isMobileViewport(): Promise<boolean> {
    const viewport = this.page.viewportSize();
    return viewport ? viewport.width < 768 : false;
  }

  /**
   * Scroll to element
   */
  async scrollToElement(selector: string): Promise<void> {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to bottom of page
   */
  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  /**
   * Take a full page screenshot
   */
  async takeFullPageScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }

  /**
   * Get current URL hash
   */
  async getUrlHash(): Promise<string> {
    const url = this.page.url();
    const hash = url.split('#')[1] || '';
    return hash;
  }

  /**
   * Navigate using hash
   */
  async navigateToHash(hash: string): Promise<void> {
    await this.page.evaluate((h) => {
      window.location.hash = h;
    }, hash);
    await this.page.waitForLoadState('networkidle');
  }
}
