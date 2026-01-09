/**
 * @vitest-environment node
 * Merge progress tests for conflict resolution
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mergeGamificationStates } from './mergeProgress';
import { createDefaultState } from './defaults';
import type { GamificationState, SectionId, QuizAttempt, SectionProgress, AchievementProgress } from './types';

/**
 * Helper to create a quiz attempt
 */
function createQuizAttempt(overrides: Partial<QuizAttempt> = {}): QuizAttempt {
  return {
    timestamp: new Date().toISOString(),
    difficulty: 'medium',
    score: 80,
    correctAnswers: 8,
    totalQuestions: 10,
    xpEarned: 20,
    ...overrides,
  };
}

/**
 * Helper to create section progress
 */
function createSectionProgress(sectionId: SectionId, overrides: Partial<SectionProgress> = {}): SectionProgress {
  return {
    sectionId,
    visitedAt: new Date().toISOString(),
    completedAt: null,
    timeSpentSeconds: 300,
    quizAttempts: [],
    masteryLevel: 'learning',
    visualizationsInteracted: [],
    ...overrides,
  };
}

describe('mergeGamificationStates', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-05T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('user progress merging', () => {
    it('should take the maximum XP from both sources', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.totalXP = 500;
      server.user.totalXP = 1000;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.totalXP).toBe(1000);
    });

    it('should take the maximum level from both sources', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.level = 5;
      server.user.level = 3;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.level).toBe(5);
    });

    it('should merge sectionsCompleted from both sources', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.sectionsCompleted = ['linalg:1', 'linalg:2'] as SectionId[];
      server.user.sectionsCompleted = ['linalg:2', 'linalg:3'] as SectionId[];
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.sectionsCompleted).toContain('linalg:1');
      expect(result.user.sectionsCompleted).toContain('linalg:2');
      expect(result.user.sectionsCompleted).toContain('linalg:3');
      expect(result.user.sectionsCompleted.length).toBe(3);
    });

    it('should take the earlier joinedAt date', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.joinedAt = '2025-06-01T00:00:00Z';
      server.user.joinedAt = '2025-01-01T00:00:00Z';
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.joinedAt).toBe('2025-01-01T00:00:00Z');
    });

    it('should take maximum quizzesTaken', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.quizzesTaken = 15;
      server.user.quizzesTaken = 10;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.quizzesTaken).toBe(15);
    });

    it('should take maximum perfectQuizzes', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.user.perfectQuizzes = 3;
      server.user.perfectQuizzes = 5;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.user.perfectQuizzes).toBe(5);
    });
  });

  describe('section progress merging', () => {
    it('should merge sections from both sources', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.sections['linalg:1' as SectionId] = createSectionProgress('linalg:1' as SectionId);
      server.sections['linalg:2' as SectionId] = createSectionProgress('linalg:2' as SectionId);
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections['linalg:1' as SectionId]).toBeDefined();
      expect(result.sections['linalg:2' as SectionId]).toBeDefined();
    });

    it('should take earlier visitedAt when merging same section', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        visitedAt: '2025-06-01T10:00:00Z',
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        visitedAt: '2025-01-01T10:00:00Z',
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].visitedAt).toBe('2025-01-01T10:00:00Z');
    });

    it('should take earlier completedAt when merging same section', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        completedAt: '2025-06-01T10:00:00Z',
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        completedAt: '2025-03-01T10:00:00Z',
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].completedAt).toBe('2025-03-01T10:00:00Z');
    });

    it('should take completed over null when merging same section', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        completedAt: '2025-06-01T10:00:00Z',
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        completedAt: null,
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].completedAt).toBe('2025-06-01T10:00:00Z');
    });

    it('should take maximum timeSpentSeconds', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        timeSpentSeconds: 600,
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        timeSpentSeconds: 300,
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].timeSpentSeconds).toBe(600);
    });

    it('should take higher mastery level', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        masteryLevel: 'familiar',
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        masteryLevel: 'mastered',
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].masteryLevel).toBe('mastered');
    });

    it('should merge quiz attempts removing duplicates', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      const sharedAttempt = createQuizAttempt({ timestamp: '2025-01-01T10:00:00Z' });
      const localOnlyAttempt = createQuizAttempt({ timestamp: '2025-02-01T10:00:00Z' });
      const serverOnlyAttempt = createQuizAttempt({ timestamp: '2025-03-01T10:00:00Z' });
      
      local.sections[sectionId] = createSectionProgress(sectionId, {
        quizAttempts: [sharedAttempt, localOnlyAttempt],
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        quizAttempts: [sharedAttempt, serverOnlyAttempt],
      });
      
      const result = mergeGamificationStates(local, server);
      
      // Should have 3 unique attempts (shared counted once)
      expect(result.sections[sectionId].quizAttempts.length).toBe(3);
    });

    it('should sort quiz attempts by timestamp', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        quizAttempts: [createQuizAttempt({ timestamp: '2025-03-01T10:00:00Z' })],
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        quizAttempts: [createQuizAttempt({ timestamp: '2025-01-01T10:00:00Z' })],
      });
      
      const result = mergeGamificationStates(local, server);
      
      const timestamps = result.sections[sectionId].quizAttempts.map((a) => a.timestamp);
      expect(timestamps[0]).toBe('2025-01-01T10:00:00Z');
      expect(timestamps[1]).toBe('2025-03-01T10:00:00Z');
    });

    it('should merge visualizationsInteracted from both sources', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      const sectionId = 'linalg:1' as SectionId;
      local.sections[sectionId] = createSectionProgress(sectionId, {
        visualizationsInteracted: ['viz-1', 'viz-2'],
      });
      server.sections[sectionId] = createSectionProgress(sectionId, {
        visualizationsInteracted: ['viz-2', 'viz-3'],
      });
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections[sectionId].visualizationsInteracted).toContain('viz-1');
      expect(result.sections[sectionId].visualizationsInteracted).toContain('viz-2');
      expect(result.sections[sectionId].visualizationsInteracted).toContain('viz-3');
      expect(result.sections[sectionId].visualizationsInteracted.length).toBe(3);
    });
  });

  describe('achievement merging', () => {
    it('should prefer unlocked over locked achievements', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.achievements = local.achievements.map((a) =>
        a.id === 'first-section' ? { ...a, unlockedAt: '2025-01-01T10:00:00Z', progress: 1 } : a
      );
      server.achievements = server.achievements.map((a) =>
        a.id === 'first-section' ? { ...a, unlockedAt: null, progress: 0 } : a
      );
      
      const result = mergeGamificationStates(local, server);
      
      const achievement = result.achievements.find((a) => a.id === 'first-section');
      expect(achievement?.unlockedAt).toBe('2025-01-01T10:00:00Z');
    });

    it('should take higher progress when both locked', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.achievements = local.achievements.map((a) =>
        a.id === 'ten-sections' ? { ...a, progress: 5 } : a
      );
      server.achievements = server.achievements.map((a) =>
        a.id === 'ten-sections' ? { ...a, progress: 8 } : a
      );
      
      const result = mergeGamificationStates(local, server);
      
      const achievement = result.achievements.find((a) => a.id === 'ten-sections');
      expect(achievement?.progress).toBe(8);
    });

    it('should keep existing unlocked achievement even with higher progress', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      // Server has it unlocked
      server.achievements = server.achievements.map((a) =>
        a.id === 'first-section' ? { ...a, unlockedAt: '2025-01-01T10:00:00Z', progress: 1 } : a
      );
      // Local has higher progress but not unlocked
      local.achievements = local.achievements.map((a) =>
        a.id === 'first-section' ? { ...a, unlockedAt: null, progress: 10 } : a
      );
      
      const result = mergeGamificationStates(local, server);
      
      const achievement = result.achievements.find((a) => a.id === 'first-section');
      expect(achievement?.unlockedAt).toBe('2025-01-01T10:00:00Z');
    });
  });

  describe('streak merging', () => {
    it('should take maximum longestStreak', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.streak.longestStreak = 10;
      server.streak.longestStreak = 15;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.streak.longestStreak).toBe(15);
    });

    it('should take maximum freezesRemaining', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.streak.freezesRemaining = 1;
      server.streak.freezesRemaining = 3;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.streak.freezesRemaining).toBe(3);
    });

    it('should use streak state from source with longer streak', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.streak = {
        currentStreak: 5,
        longestStreak: 10,
        lastActivityDate: '2025-01-05',
        freezesRemaining: 2,
        freezeUsedToday: false,
      };
      server.streak = {
        currentStreak: 3,
        longestStreak: 7,
        lastActivityDate: '2025-01-04',
        freezesRemaining: 1,
        freezeUsedToday: true,
      };
      
      const result = mergeGamificationStates(local, server);
      
      // Should use local as base (has longer longestStreak)
      expect(result.streak.currentStreak).toBe(5);
      expect(result.streak.lastActivityDate).toBe('2025-01-05');
    });
  });

  describe('daily goals merging', () => {
    it('should use local when local date is more recent', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 100,
        xpGoal: 200,
        completed: false,
      };
      server.dailyGoals = {
        date: '2025-01-04',
        xpEarned: 50,
        xpGoal: 200,
        completed: true,
      };
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.dailyGoals.date).toBe('2025-01-05');
      expect(result.dailyGoals.xpEarned).toBe(100);
    });

    it('should use server when server date is more recent', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.dailyGoals = {
        date: '2025-01-04',
        xpEarned: 100,
        xpGoal: 200,
        completed: false,
      };
      server.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 150,
        xpGoal: 200,
        completed: true,
      };
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.dailyGoals.date).toBe('2025-01-05');
      expect(result.dailyGoals.xpEarned).toBe(150);
    });

    it('should merge when same date taking maximum XP', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 100,
        xpGoal: 200,
        completed: false,
      };
      server.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 150,
        xpGoal: 200,
        completed: false,
      };
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.dailyGoals.xpEarned).toBe(150);
    });

    it('should mark completed if either source is completed', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 200,
        xpGoal: 200,
        completed: true,
      };
      server.dailyGoals = {
        date: '2025-01-05',
        xpEarned: 100,
        xpGoal: 200,
        completed: false,
      };
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.dailyGoals.completed).toBe(true);
    });
  });

  describe('version and lastUpdated', () => {
    it('should take maximum version', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.version = 2;
      server.version = 3;
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.version).toBe(3);
    });

    it('should update lastUpdated to current time', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.lastUpdated = '2025-01-01T10:00:00Z';
      server.lastUpdated = '2025-01-02T10:00:00Z';
      
      const result = mergeGamificationStates(local, server);
      
      // Should be the current mocked time
      expect(result.lastUpdated).toBe('2026-01-05T12:00:00.000Z');
    });
  });

  describe('edge cases', () => {
    it('should handle empty sections', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.sections = {};
      server.sections = {};
      
      const result = mergeGamificationStates(local, server);
      
      expect(Object.keys(result.sections).length).toBe(0);
    });

    it('should handle local-only section', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.sections['linalg:1' as SectionId] = createSectionProgress('linalg:1' as SectionId);
      server.sections = {};
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections['linalg:1' as SectionId]).toBeDefined();
    });

    it('should handle server-only section', () => {
      const local = createDefaultState();
      const server = createDefaultState();
      
      local.sections = {};
      server.sections['linalg:1' as SectionId] = createSectionProgress('linalg:1' as SectionId);
      
      const result = mergeGamificationStates(local, server);
      
      expect(result.sections['linalg:1' as SectionId]).toBeDefined();
    });
  });
});
