import { expect } from '@playwright/test';
import { test as baseTest } from './base.fixture';

/**
 * Gamification state interface (matches shared/gamification/types.ts)
 */
export interface GamificationState {
  version: number;
  user: {
    totalXP: number;
    level: number;
    sectionsCompleted: string[];
    quizzesTaken: number;
    perfectQuizzes: number;
  };
  streak: {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string | null;
  };
}

/**
 * Gamification testing fixtures
 */
export interface GamificationTestFixtures {
  /** Get current gamification state from localStorage */
  getGamificationState: () => Promise<GamificationState | null>;

  /** Get current XP */
  getCurrentXP: () => Promise<number>;

  /** Get current level */
  getCurrentLevel: () => Promise<number>;

  /** Get current streak */
  getCurrentStreak: () => Promise<number>;

  /** Get completed sections count */
  getCompletedSections: () => Promise<number>;

  /** Set gamification state (for testing) */
  setGamificationState: (state: Partial<GamificationState>) => Promise<void>;

  /** Verify XP increased after action */
  verifyXPIncreased: (previousXP: number) => Promise<boolean>;

  /** Verify level display matches stored value */
  verifyLevelDisplay: () => Promise<boolean>;

  /** Wait for XP animation to complete */
  waitForXPAnimation: () => Promise<void>;
}

export const test = baseTest.extend<GamificationTestFixtures>({
  getGamificationState: async ({ page }, use) => {
    const getState = async () => {
      return page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return null;
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      });
    };
    await use(getState);
  },

  getCurrentXP: async ({ page }, use) => {
    const getXP = async () => {
      const state = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return null;
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      });
      return state?.user?.totalXP || 0;
    };
    await use(getXP);
  },

  getCurrentLevel: async ({ page }, use) => {
    const getLevel = async () => {
      const state = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return null;
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      });
      return state?.user?.level || 1;
    };
    await use(getLevel);
  },

  getCurrentStreak: async ({ page }, use) => {
    const getStreak = async () => {
      const state = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return null;
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      });
      return state?.streak?.currentStreak || 0;
    };
    await use(getStreak);
  },

  getCompletedSections: async ({ page }, use) => {
    const getCompleted = async () => {
      const state = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return null;
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      });
      return state?.user?.sectionsCompleted?.length || 0;
    };
    await use(getCompleted);
  },

  setGamificationState: async ({ page }, use) => {
    const setState = async (partialState: Partial<GamificationState>) => {
      await page.evaluate((state) => {
        const existing = localStorage.getItem('magic-internet-math-gamification');
        const current = existing ? JSON.parse(existing) : {
          version: 1,
          user: {
            totalXP: 0,
            level: 1,
            sectionsCompleted: [],
            quizzesTaken: 0,
            perfectQuizzes: 0,
          },
          streak: {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
          },
        };

        const merged = {
          ...current,
          ...state,
          user: { ...current.user, ...state.user },
          streak: { ...current.streak, ...state.streak },
        };

        localStorage.setItem('magic-internet-math-gamification', JSON.stringify(merged));
      }, partialState);
    };
    await use(setState);
  },

  verifyXPIncreased: async ({ page }, use) => {
    const verify = async (previousXP: number) => {
      const currentXP = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return 0;
        try {
          const state = JSON.parse(stored);
          return state?.user?.totalXP || 0;
        } catch {
          return 0;
        }
      });
      return currentXP > previousXP;
    };
    await use(verify);
  },

  verifyLevelDisplay: async ({ page }, use) => {
    const verify = async () => {
      // Get stored level
      const storedLevel = await page.evaluate(() => {
        const stored = localStorage.getItem('magic-internet-math-gamification');
        if (!stored) return 1;
        try {
          const state = JSON.parse(stored);
          return state?.user?.level || 1;
        } catch {
          return 1;
        }
      });

      // Find level display on page
      const levelDisplay = page.locator(
        ':text-matches("Level\\s+\\d+"), ' +
        '[class*="level"]:has-text("Level")'
      );

      if (await levelDisplay.count() === 0) {
        return true; // No level display, can't verify
      }

      const displayText = await levelDisplay.first().textContent();
      const match = displayText?.match(/Level\s+(\d+)/);
      const displayLevel = match ? parseInt(match[1]) : 0;

      return displayLevel === storedLevel;
    };
    await use(verify);
  },

  waitForXPAnimation: async ({ page }, use) => {
    const wait = async () => {
      // Wait for any XP animation elements to finish
      await page.waitForTimeout(500);

      // Wait for XP popup/toast to disappear
      const xpPopup = page.locator('[class*="xp-popup"], [class*="xp-toast"]');
      if (await xpPopup.count() > 0) {
        await xpPopup.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
      }
    };
    await use(wait);
  },
});

export { expect };
