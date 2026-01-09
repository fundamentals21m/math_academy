/**
 * @vitest-environment node
 * Achievement system tests
 */

import { describe, it, expect } from 'vitest';
import { checkAchievements, getAchievement, getAchievementsWithProgress, ACHIEVEMENTS } from './achievements';
import { createDefaultState } from './defaults';
import type { GamificationState, SectionId } from './types';

/**
 * Helper to create a state with specific number of completed sections
 */
function createStateWithSections(completedCount: number): GamificationState {
  const state = createDefaultState();
  const sectionIds: SectionId[] = [];
  
  for (let i = 1; i <= completedCount; i++) {
    const sectionId = `linalg:${i}` as SectionId;
    sectionIds.push(sectionId);
    state.sections[sectionId] = {
      sectionId,
      visitedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      timeSpentSeconds: 300,
      quizAttempts: [],
      masteryLevel: 'learning',
      visualizationsInteracted: [],
    };
  }
  
  state.user.sectionsCompleted = sectionIds;
  return state;
}

/**
 * Helper to create state with mastered sections
 */
function createStateWithMasteredSections(masteredCount: number): GamificationState {
  const state = createStateWithSections(masteredCount);
  
  Object.keys(state.sections).slice(0, masteredCount).forEach((key) => {
    state.sections[key as SectionId].masteryLevel = 'mastered';
  });
  
  return state;
}

/**
 * Helper to mark an achievement as already unlocked
 */
function markAchievementUnlocked(state: GamificationState, achievementId: string): GamificationState {
  return {
    ...state,
    achievements: state.achievements.map((a) =>
      a.id === achievementId ? { ...a, unlockedAt: new Date().toISOString() } : a
    ),
  };
}

describe('ACHIEVEMENTS constant', () => {
  it('should have all expected achievement categories', () => {
    const categories = [...new Set(ACHIEVEMENTS.map((a) => a.category))];
    expect(categories).toContain('progress');
    expect(categories).toContain('mastery');
    expect(categories).toContain('dedication');
    expect(categories).toContain('exploration');
  });

  it('should have unique IDs for all achievements', () => {
    const ids = ACHIEVEMENTS.map((a) => a.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);
  });

  it('should have positive XP rewards for all achievements', () => {
    ACHIEVEMENTS.forEach((achievement) => {
      expect(achievement.xpReward).toBeGreaterThan(0);
    });
  });

  it('should have positive targets for all achievements', () => {
    ACHIEVEMENTS.forEach((achievement) => {
      expect(achievement.target).toBeGreaterThan(0);
    });
  });
});

describe('checkAchievements', () => {
  describe('progress achievements', () => {
    it('should unlock first-section achievement after completing 1 section', () => {
      const state = createStateWithSections(1);
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'first-section',
          xpReward: 25,
        })
      );
    });

    it('should unlock ten-sections achievement after completing 10 sections', () => {
      const state = createStateWithSections(10);
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'ten-sections',
          xpReward: 50,
        })
      );
    });

    it('should unlock half-course achievement after completing 25 sections (50%)', () => {
      const state = createStateWithSections(25);
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'half-course',
          xpReward: 100,
        })
      );
    });

    it('should unlock course-complete achievement after completing 50 sections (100%)', () => {
      const state = createStateWithSections(50);
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'course-complete',
          xpReward: 200,
        })
      );
    });

    it('should unlock multiple progress achievements at once', () => {
      const state = createStateWithSections(10);
      const notifications = checkAchievements(state);
      
      // Should unlock first-section and ten-sections
      expect(notifications.length).toBeGreaterThanOrEqual(2);
      expect(notifications.map((n) => n.id)).toContain('first-section');
      expect(notifications.map((n) => n.id)).toContain('ten-sections');
    });
  });

  describe('mastery achievements', () => {
    it('should unlock first-mastery achievement after mastering 1 section', () => {
      const state = createStateWithMasteredSections(1);
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'first-mastery',
          xpReward: 30,
        })
      );
    });

    it('should unlock quiz-master achievement after 10 quizzes', () => {
      const state = createDefaultState();
      state.user.quizzesTaken = 10;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'quiz-master',
          xpReward: 50,
        })
      );
    });

    it('should unlock perfectionist achievement after 5 perfect quizzes', () => {
      const state = createDefaultState();
      state.user.perfectQuizzes = 5;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'perfectionist',
          xpReward: 75,
        })
      );
    });
  });

  describe('dedication achievements', () => {
    it('should unlock week-streak achievement after 7-day streak', () => {
      const state = createDefaultState();
      state.streak.longestStreak = 7;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'week-streak',
          xpReward: 50,
        })
      );
    });

    it('should unlock month-streak achievement after 30-day streak', () => {
      const state = createDefaultState();
      state.streak.longestStreak = 30;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'month-streak',
          xpReward: 150,
        })
      );
    });

    it('should unlock level-5 achievement at level 5', () => {
      const state = createDefaultState();
      state.user.level = 5;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'level-5',
          xpReward: 50,
        })
      );
    });

    it('should unlock level-10 achievement at level 10', () => {
      const state = createDefaultState();
      state.user.level = 10;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'level-10',
          xpReward: 100,
        })
      );
    });
  });

  describe('exploration achievements', () => {
    it('should unlock first-visualization achievement after using 1 visualization', () => {
      const state = createDefaultState();
      state.user.visualizationsUsed = 1;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'first-visualization',
          xpReward: 15,
        })
      );
    });

    it('should unlock explorer achievement after using 10 visualizations', () => {
      const state = createDefaultState();
      state.user.visualizationsUsed = 10;
      const notifications = checkAchievements(state);
      
      expect(notifications).toContainEqual(
        expect.objectContaining({
          id: 'explorer',
          xpReward: 50,
        })
      );
    });
  });

  describe('already unlocked achievements', () => {
    it('should not re-unlock already achieved achievements', () => {
      const state = createStateWithSections(1);
      const stateWithUnlocked = markAchievementUnlocked(state, 'first-section');
      
      const notifications = checkAchievements(stateWithUnlocked);
      
      expect(notifications.find((n) => n.id === 'first-section')).toBeUndefined();
    });

    it('should still unlock other achievements when one is already unlocked', () => {
      const state = createStateWithSections(10);
      const stateWithUnlocked = markAchievementUnlocked(state, 'first-section');
      
      const notifications = checkAchievements(stateWithUnlocked);
      
      expect(notifications.find((n) => n.id === 'first-section')).toBeUndefined();
      expect(notifications).toContainEqual(
        expect.objectContaining({ id: 'ten-sections' })
      );
    });
  });

  describe('edge cases', () => {
    it('should return empty array for default state', () => {
      const state = createDefaultState();
      const notifications = checkAchievements(state);
      
      expect(notifications).toEqual([]);
    });

    it('should not unlock achievements when just below target', () => {
      const state = createStateWithSections(9);
      const notifications = checkAchievements(state);
      
      expect(notifications.find((n) => n.id === 'ten-sections')).toBeUndefined();
    });

    it('should include timestamp in notifications', () => {
      const state = createStateWithSections(1);
      const notifications = checkAchievements(state);
      
      expect(notifications[0]).toHaveProperty('timestamp');
      expect(typeof notifications[0].timestamp).toBe('number');
    });
  });
});

describe('getAchievement', () => {
  it('should return achievement definition by ID', () => {
    const achievement = getAchievement('first-section');
    
    expect(achievement).toBeDefined();
    expect(achievement?.id).toBe('first-section');
    expect(achievement?.title).toBe('First Steps');
    expect(achievement?.xpReward).toBe(25);
  });

  it('should return undefined for non-existent ID', () => {
    const achievement = getAchievement('non-existent-achievement');
    
    expect(achievement).toBeUndefined();
  });
});

describe('getAchievementsWithProgress', () => {
  it('should return all achievements with progress', () => {
    const state = createDefaultState();
    const achievements = getAchievementsWithProgress(state);
    
    expect(achievements.length).toBe(ACHIEVEMENTS.length);
    achievements.forEach((achievement) => {
      expect(achievement).toHaveProperty('progress');
      expect(achievement).toHaveProperty('unlocked');
    });
  });

  it('should calculate correct progress for section-based achievements', () => {
    const state = createStateWithSections(5);
    const achievements = getAchievementsWithProgress(state);
    
    const firstSection = achievements.find((a) => a.id === 'first-section');
    const tenSections = achievements.find((a) => a.id === 'ten-sections');
    
    expect(firstSection?.progress).toBe(5);
    expect(tenSections?.progress).toBe(5);
  });

  it('should mark unlocked achievements correctly', () => {
    const state = createStateWithSections(1);
    const stateWithUnlocked = markAchievementUnlocked(state, 'first-section');
    
    const achievements = getAchievementsWithProgress(stateWithUnlocked);
    const firstSection = achievements.find((a) => a.id === 'first-section');
    
    expect(firstSection?.unlocked).toBe(true);
  });

  it('should mark not-yet-unlocked achievements correctly', () => {
    const state = createDefaultState();
    const achievements = getAchievementsWithProgress(state);
    
    achievements.forEach((achievement) => {
      expect(achievement.unlocked).toBe(false);
    });
  });

  it('should calculate percentage-based progress correctly', () => {
    const state = createStateWithSections(25); // 50% of 50 sections
    const achievements = getAchievementsWithProgress(state);
    
    const halfCourse = achievements.find((a) => a.id === 'half-course');
    
    expect(halfCourse?.progress).toBe(50); // 50%
  });
});
