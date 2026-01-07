import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for leaderboard page
 */
export class LeaderboardPage extends BasePage {
  readonly leaderboard: Locator;
  readonly entries: Locator;
  readonly loadingState: Locator;
  readonly emptyState: Locator;
  readonly errorState: Locator;
  readonly connectButton: Locator;
  readonly nostrWarning: Locator;
  readonly refreshButton: Locator;
  readonly rankColumn: Locator;
  readonly nameColumn: Locator;
  readonly scoreColumn: Locator;
  readonly tabs: Locator;

  constructor(page: Page) {
    super(page);
    this.leaderboard = page.locator('[class*="leaderboard"], [data-testid="leaderboard"]');
    this.entries = this.leaderboard.locator('[class*="entry"], [class*="row"], tr');
    this.loadingState = page.locator('[class*="loading"], [class*="spinner"]');
    this.emptyState = page.locator('[class*="empty"], :text("No entries")');
    this.errorState = page.locator('[class*="error"]');
    this.connectButton = page.locator('button:has-text("Connect"), button:has-text("Sign in")');
    this.nostrWarning = page.locator(':text("Install a Nostr extension")');
    this.refreshButton = page.locator('button:has-text("Refresh"), button[aria-label="Refresh"]');
    this.rankColumn = this.leaderboard.locator('[class*="rank"]');
    this.nameColumn = this.leaderboard.locator('[class*="name"], [class*="user"]');
    this.scoreColumn = this.leaderboard.locator('[class*="score"], [class*="xp"]');
    this.tabs = page.locator('[role="tablist"], [class*="tabs"]');
  }

  /**
   * Navigate to leaderboard
   */
  async navigate(): Promise<void> {
    await this.page.goto('#/leaderboard');
    await this.waitForPageLoad();
  }

  /**
   * Wait for leaderboard to load
   */
  async waitForLeaderboardLoad(): Promise<void> {
    // Wait for loading to finish
    if (await this.loadingState.isVisible()) {
      await this.loadingState.waitFor({ state: 'hidden', timeout: 10000 });
    }

    // Either entries or empty state should be visible
    await expect(
      this.entries.first().or(this.emptyState).or(this.errorState)
    ).toBeVisible({ timeout: 10000 });
  }

  /**
   * Check if leaderboard is visible
   */
  async isVisible(): Promise<boolean> {
    return this.leaderboard.isVisible();
  }

  /**
   * Check if leaderboard has entries
   */
  async hasEntries(): Promise<boolean> {
    return (await this.entries.count()) > 0;
  }

  /**
   * Get number of entries
   */
  async getEntryCount(): Promise<number> {
    return this.entries.count();
  }

  /**
   * Check if Nostr extension warning is shown
   */
  async hasNostrWarning(): Promise<boolean> {
    return this.nostrWarning.isVisible();
  }

  /**
   * Check if connect button is disabled
   */
  async isConnectButtonDisabled(): Promise<boolean> {
    return this.connectButton.isDisabled();
  }

  /**
   * Get entry data by index
   */
  async getEntryData(index: number): Promise<{
    rank: string;
    name: string;
    score: string;
  }> {
    const entry = this.entries.nth(index);

    return {
      rank: await entry.locator('[class*="rank"]').textContent() || '',
      name: await entry.locator('[class*="name"], [class*="user"]').textContent() || '',
      score: await entry.locator('[class*="score"], [class*="xp"]').textContent() || '',
    };
  }

  /**
   * Get all entry names
   */
  async getEntryNames(): Promise<string[]> {
    const names: string[] = [];
    const count = await this.entries.count();

    for (let i = 0; i < count; i++) {
      const name = await this.entries.nth(i).locator('[class*="name"], [class*="user"]').textContent();
      if (name) names.push(name.trim());
    }

    return names;
  }

  /**
   * Get top score
   */
  async getTopScore(): Promise<number> {
    const firstEntry = this.entries.first();
    if (!(await firstEntry.isVisible())) return 0;

    const scoreText = await firstEntry.locator('[class*="score"], [class*="xp"]').textContent();
    const match = scoreText?.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  /**
   * Click refresh button
   */
  async refresh(): Promise<void> {
    if (await this.refreshButton.isVisible()) {
      await this.refreshButton.click();
      await this.waitForLeaderboardLoad();
    }
  }

  /**
   * Switch tab (if tabs exist)
   */
  async switchTab(tabName: string): Promise<void> {
    const tab = this.tabs.locator(`button:has-text("${tabName}"), [role="tab"]:has-text("${tabName}")`);
    if (await tab.isVisible()) {
      await tab.click();
      await this.page.waitForTimeout(300);
    }
  }

  /**
   * Check if showing loading state
   */
  async isLoading(): Promise<boolean> {
    return this.loadingState.isVisible();
  }

  /**
   * Check if showing error state
   */
  async hasError(): Promise<boolean> {
    return this.errorState.isVisible();
  }

  /**
   * Check if showing empty state
   */
  async isEmpty(): Promise<boolean> {
    return this.emptyState.isVisible();
  }
}
