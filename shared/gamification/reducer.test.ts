/**
 * @vitest-environment node
 * Gamification reducer tests
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { gamificationReducer, type GamificationAction } from './reducer';
import { createDefaultState } from './defaults';
import type { GamificationState, SectionId, RaceGameResult } from './types';
import { XP_CONFIG, RACE_XP_CONFIG } from './types';

/**
 * Helper to create a state with a visited section
 */
function createStateWithVisitedSection(sectionId: SectionId): GamificationState {
  const state = createDefaultState();
  state.sections[sectionId] = {
    sectionId,
    visitedAt: new Date().toISOString(),
    completedAt: null,
    timeSpentSeconds: 0,
    quizAttempts: [],
    masteryLevel: 'learning',
    visualizationsInteracted: [],
  };
  return state;
}

describe('gamificationReducer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-05T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('LOAD_STATE', () => {
    it('should replace state with payload', () => {
      const state = createDefaultState();
      const newState = createDefaultState();
      newState.user.totalXP = 500;
      
      const result = gamificationReducer(state, {
        type: 'LOAD_STATE',
        payload: newState,
      });
      
      expect(result.user.totalXP).toBe(500);
    });
  });

  describe('LOAD_FROM_SERVER', () => {
    it('should replace state with server state and mark as migrated', () => {
      const state = createDefaultState();
      const serverState = createDefaultState();
      serverState.user.totalXP = 1000;
      
      const result = gamificationReducer(state, {
        type: 'LOAD_FROM_SERVER',
        payload: serverState,
      });
      
      expect(result.user.totalXP).toBe(1000);
      expect(result.migratedToServer).toBe(true);
    });
  });

  describe('MERGE_WITH_SERVER', () => {
    it('should use merged state and mark as migrated', () => {
      const state = createDefaultState();
      const mergedState = createDefaultState();
      mergedState.user.totalXP = 750;
      
      const result = gamificationReducer(state, {
        type: 'MERGE_WITH_SERVER',
        payload: mergedState,
      });
      
      expect(result.user.totalXP).toBe(750);
      expect(result.migratedToServer).toBe(true);
    });
  });

  describe('MARK_MIGRATED', () => {
    it('should mark state as migrated to server', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, { type: 'MARK_MIGRATED' });
      
      expect(result.migratedToServer).toBe(true);
    });
  });

  describe('VISIT_SECTION', () => {
    it('should award SECTION_VISIT XP on first visit', () => {
      const state = createDefaultState();
      const sectionId = 'linalg:1' as SectionId;
      
      const result = gamificationReducer(state, {
        type: 'VISIT_SECTION',
        payload: { sectionId },
      });
      
      expect(result.user.totalXP).toBe(XP_CONFIG.SECTION_VISIT);
      expect(result.sections[sectionId]).toBeDefined();
      expect(result.sections[sectionId].visitedAt).toBeDefined();
    });

    it('should not award XP on repeat visit', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      state.user.totalXP = 50;
      
      const result = gamificationReducer(state, {
        type: 'VISIT_SECTION',
        payload: { sectionId },
      });
      
      expect(result.user.totalXP).toBe(50); // Unchanged
    });

    it('should update daily goals XP', () => {
      const state = createDefaultState();
      const sectionId = 'linalg:1' as SectionId;
      
      const result = gamificationReducer(state, {
        type: 'VISIT_SECTION',
        payload: { sectionId },
      });
      
      expect(result.dailyGoals.xpEarned).toBe(XP_CONFIG.SECTION_VISIT);
    });
  });

  describe('COMPLETE_SECTION', () => {
    it('should award SECTION_COMPLETE XP on completion', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'COMPLETE_SECTION',
        payload: { sectionId },
      });
      
      expect(result.user.totalXP).toBe(XP_CONFIG.SECTION_COMPLETE);
      expect(result.sections[sectionId].completedAt).toBeDefined();
      expect(result.user.sectionsCompleted).toContain(sectionId);
    });

    it('should not award XP on repeat completion', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      state.sections[sectionId].completedAt = new Date().toISOString();
      state.user.totalXP = 100;
      
      const result = gamificationReducer(state, {
        type: 'COMPLETE_SECTION',
        payload: { sectionId },
      });
      
      expect(result.user.totalXP).toBe(100); // Unchanged
    });

    it('should not complete unvisited section', () => {
      const state = createDefaultState();
      const sectionId = 'linalg:1' as SectionId;
      
      const result = gamificationReducer(state, {
        type: 'COMPLETE_SECTION',
        payload: { sectionId },
      });
      
      expect(result.user.totalXP).toBe(0);
      expect(result.sections[sectionId]).toBeUndefined();
    });
  });

  describe('RECORD_QUIZ', () => {
    it('should calculate XP based on difficulty and score', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'RECORD_QUIZ',
        payload: {
          sectionId,
          difficulty: 'medium',
          score: 80,
          correctAnswers: 8,
          totalQuestions: 10,
        },
      });
      
      // 80% of 25 (medium XP) = 20 XP
      expect(result.user.totalXP).toBeGreaterThan(0);
      expect(result.user.quizzesTaken).toBe(1);
    });

    it('should award perfect bonus for 100% score', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'RECORD_QUIZ',
        payload: {
          sectionId,
          difficulty: 'easy',
          score: 100,
          correctAnswers: 10,
          totalQuestions: 10,
        },
      });
      
      // Perfect bonus is 1.5x
      expect(result.user.perfectQuizzes).toBe(1);
      expect(result.user.totalXP).toBeGreaterThan(XP_CONFIG.QUIZ_EASY);
    });

    it('should auto-complete section on 80%+ score', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'RECORD_QUIZ',
        payload: {
          sectionId,
          difficulty: 'medium',
          score: 85,
          correctAnswers: 17,
          totalQuestions: 20,
        },
      });
      
      expect(result.sections[sectionId].completedAt).toBeDefined();
      expect(result.user.sectionsCompleted).toContain(sectionId);
    });

    it('should not complete section on score below 80%', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'RECORD_QUIZ',
        payload: {
          sectionId,
          difficulty: 'medium',
          score: 70,
          correctAnswers: 7,
          totalQuestions: 10,
        },
      });
      
      expect(result.sections[sectionId].completedAt).toBeNull();
    });

    it('should record quiz attempt', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'RECORD_QUIZ',
        payload: {
          sectionId,
          difficulty: 'hard',
          score: 90,
          correctAnswers: 9,
          totalQuestions: 10,
        },
      });
      
      expect(result.sections[sectionId].quizAttempts.length).toBe(1);
      expect(result.sections[sectionId].quizAttempts[0].difficulty).toBe('hard');
      expect(result.sections[sectionId].quizAttempts[0].score).toBe(90);
    });
  });

  describe('USE_VISUALIZATION', () => {
    it('should award VISUALIZATION_USE XP on first use', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      
      const result = gamificationReducer(state, {
        type: 'USE_VISUALIZATION',
        payload: { sectionId, name: 'matrix-viz' },
      });
      
      expect(result.user.totalXP).toBe(XP_CONFIG.VISUALIZATION_USE);
      expect(result.user.visualizationsUsed).toBe(1);
      expect(result.sections[sectionId].visualizationsInteracted).toContain('matrix-viz');
    });

    it('should not award XP on repeat use of same visualization', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      state.sections[sectionId].visualizationsInteracted = ['matrix-viz'];
      state.user.visualizationsUsed = 1;
      state.user.totalXP = 50;
      
      const result = gamificationReducer(state, {
        type: 'USE_VISUALIZATION',
        payload: { sectionId, name: 'matrix-viz' },
      });
      
      expect(result.user.totalXP).toBe(50); // Unchanged
      expect(result.user.visualizationsUsed).toBe(1);
    });

    it('should award XP for different visualizations in same section', () => {
      const sectionId = 'linalg:1' as SectionId;
      const state = createStateWithVisitedSection(sectionId);
      state.sections[sectionId].visualizationsInteracted = ['matrix-viz'];
      state.user.visualizationsUsed = 1;
      state.user.totalXP = XP_CONFIG.VISUALIZATION_USE;
      
      const result = gamificationReducer(state, {
        type: 'USE_VISUALIZATION',
        payload: { sectionId, name: 'vector-viz' },
      });
      
      expect(result.user.totalXP).toBe(XP_CONFIG.VISUALIZATION_USE * 2);
      expect(result.user.visualizationsUsed).toBe(2);
    });
  });

  describe('RESET_PROGRESS', () => {
    it('should reset to default state', () => {
      const state = createDefaultState();
      state.user.totalXP = 5000;
      state.user.level = 10;
      state.user.quizzesTaken = 50;
      
      const result = gamificationReducer(state, { type: 'RESET_PROGRESS' });
      
      expect(result.user.totalXP).toBe(0);
      expect(result.user.level).toBe(1);
      expect(result.user.quizzesTaken).toBe(0);
    });
  });

  describe('RECORD_RACE_GAME', () => {
    const createRaceResult = (overrides: Partial<RaceGameResult> = {}): RaceGameResult => ({
      tier: 1,
      score: 500,
      correctAnswers: 10,
      totalQuestions: 15,
      maxStreak: 5,
      fastAnswers: 3,
      avgResponseTime: 2500,
      timestamp: new Date().toISOString(),
      isMultiplayer: false,
      ...overrides,
    });

    it('should award participation XP', () => {
      const state = createDefaultState();
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult(),
      });
      
      expect(result.user.totalXP).toBeGreaterThanOrEqual(RACE_XP_CONFIG.GAME_PARTICIPATION);
    });

    it('should initialize racing stats on first game', () => {
      const state = createDefaultState();
      expect(state.racingStats).toBeUndefined();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 1000 }),
      });
      
      expect(result.racingStats).toBeDefined();
      expect(result.racingStats?.gamesPlayed).toBe(1);
      expect(result.racingStats?.highScore).toBe(1000);
    });

    it('should track cumulative stats', () => {
      const state = createDefaultState();
      
      // First game
      let result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 500, correctAnswers: 10, totalQuestions: 15 }),
      });
      
      // Second game
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 600, correctAnswers: 12, totalQuestions: 15 }),
      });
      
      expect(result.racingStats?.gamesPlayed).toBe(2);
      expect(result.racingStats?.totalPoints).toBe(1100);
      expect(result.racingStats?.totalCorrect).toBe(22);
      expect(result.racingStats?.totalAttempted).toBe(30);
    });

    it('should update high score when beaten', () => {
      const state = createDefaultState();
      
      let result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 1000 }),
      });
      
      expect(result.racingStats?.highScore).toBe(1000);
      
      // Higher score
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 1500 }),
      });
      
      expect(result.racingStats?.highScore).toBe(1500);
      
      // Lower score should not update
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ score: 800 }),
      });
      
      expect(result.racingStats?.highScore).toBe(1500);
    });

    it('should track longest streak', () => {
      const state = createDefaultState();
      
      let result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ maxStreak: 5 }),
      });
      
      expect(result.racingStats?.longestStreak).toBe(5);
      
      // New record
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ maxStreak: 12 }),
      });
      
      expect(result.racingStats?.longestStreak).toBe(12);
    });

    it('should track highest tier unlocked', () => {
      const state = createDefaultState();
      
      let result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ tier: 3 }),
      });
      
      expect(result.racingStats?.highestTierUnlocked).toBe(3);
      
      // Higher tier
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ tier: 5 }),
      });
      
      expect(result.racingStats?.highestTierUnlocked).toBe(5);
    });

    it('should track multiplayer games and wins', () => {
      const state = createDefaultState();
      
      // Win a multiplayer game
      let result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ isMultiplayer: true, placement: 1 }),
      });
      
      expect(result.racingStats?.multiplayerGamesPlayed).toBe(1);
      expect(result.racingStats?.multiplayerWins).toBe(1);
      
      // Second place
      result = gamificationReducer(result, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ isMultiplayer: true, placement: 2 }),
      });
      
      expect(result.racingStats?.multiplayerGamesPlayed).toBe(2);
      expect(result.racingStats?.multiplayerWins).toBe(1); // Still 1
    });

    it('should award first place bonus', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ isMultiplayer: true, placement: 1, score: 0 }),
      });
      
      // Should include participation + first place bonus
      expect(result.user.totalXP).toBeGreaterThanOrEqual(
        RACE_XP_CONFIG.GAME_PARTICIPATION + RACE_XP_CONFIG.FIRST_PLACE_BONUS
      );
    });

    it('should award perfect game bonus', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({
          correctAnswers: 10,
          totalQuestions: 10,
          score: 0,
        }),
      });
      
      expect(result.user.totalXP).toBeGreaterThanOrEqual(
        RACE_XP_CONFIG.GAME_PARTICIPATION + RACE_XP_CONFIG.PERFECT_GAME_BONUS
      );
    });

    it('should award speed demon bonus for 10+ fast answers', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ fastAnswers: 10, score: 0 }),
      });
      
      expect(result.user.totalXP).toBeGreaterThanOrEqual(
        RACE_XP_CONFIG.GAME_PARTICIPATION + RACE_XP_CONFIG.SPEED_DEMON_BONUS
      );
    });

    it('should award streak master bonus for 10+ streak', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ maxStreak: 10, score: 0 }),
      });
      
      expect(result.user.totalXP).toBeGreaterThanOrEqual(
        RACE_XP_CONFIG.GAME_PARTICIPATION + RACE_XP_CONFIG.STREAK_MASTER_BONUS
      );
    });

    it('should apply tier multiplier to performance XP', () => {
      const state = createDefaultState();
      const baseScore = 1000;
      
      // Tier 1 (0.5x multiplier)
      const tier1Result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ tier: 1, score: baseScore }),
      });
      
      // Tier 6 (1.5x multiplier)
      const tier6Result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult({ tier: 6, score: baseScore }),
      });
      
      // Tier 6 should give more XP than tier 1 for same score
      expect(tier6Result.user.totalXP).toBeGreaterThan(tier1Result.user.totalXP);
    });

    it('should unlock racing-rookie achievement on first game', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult(),
      });
      
      const racingRookie = result.achievements.find((a) => a.id === 'racing-rookie');
      expect(racingRookie?.unlockedAt).toBeDefined();
    });

    it('should update daily goals XP', () => {
      const state = createDefaultState();
      
      const result = gamificationReducer(state, {
        type: 'RECORD_RACE_GAME',
        payload: createRaceResult(),
      });
      
      expect(result.dailyGoals.xpEarned).toBeGreaterThan(0);
    });
  });

  describe('default case', () => {
    it('should return unchanged state for unknown action', () => {
      const state = createDefaultState();
      
      // @ts-expect-error - Testing unknown action type
      const result = gamificationReducer(state, { type: 'UNKNOWN_ACTION' });
      
      expect(result).toBe(state);
    });
  });
});
