import { describe, it, expect } from 'vitest';
import { calculateMastery, getMasteryInfo } from '../../gamification/masteryCalculator';
import type { SectionProgress, MasteryLevel } from '../../gamification/types';

/**
 * Baseline regression tests for mastery level calculation
 * These tests ensure mastery logic doesn't change unexpectedly
 * 
 * DOCUMENTED BASELINES (2026-01-03):
 * - MASTERY_LEVELS:
 *   - none: 'Not Started' (''), gray-600
 *   - learning: 'Learning' (○), blue-400
 *   - familiar: 'Familiar' (◐), yellow-400
 *   - mastered: 'Mastered' (✓), emerald-400
 * - THRESHOLDS:
 *   - Learning: Default when no quizzes or low scores
 *   - Familiar: best >= 80 OR (avg >= 70 && attempts >= 2)
 *   - Mastered: perfect >= 2 OR (avg >= 90 && attempts >= 3)
 */

describe('Mastery Level Baselines', () => {
  describe('Level: Learning', () => {
    it('returns learning for section with no quiz attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: null,
        completedAt: null,
        timeSpentSeconds: 0,
        quizAttempts: [],
        masteryLevel: 'learning',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('learning');
    });

    it('returns learning for low scores (below 70)', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'easy', score: 50, correctAnswers: 3, totalQuestions: 6, xpEarned: 8 },
          { timestamp: '2024-01-02', difficulty: 'easy', score: 60, correctAnswers: 4, totalQuestions: 6, xpEarned: 9 },
        ],
        masteryLevel: 'learning',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('learning');
    });

    it('returns correct info for learning level', () => {
      const info = getMasteryInfo('learning');
      
      expect(info).toMatchObject({
        label: 'Learning',
        color: 'text-blue-400',
        symbol: '○',
      });
    });
  });

  describe('Level: Familiar', () => {
    it('returns familiar for best score >= 80', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'medium', score: 80, correctAnswers: 4, totalQuestions: 5, xpEarned: 20 },
          { timestamp: '2024-01-02', difficulty: 'medium', score: 50, correctAnswers: 2, totalQuestions: 5, xpEarned: 12 },
        ],
        masteryLevel: 'familiar',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('familiar');
    });

    it('returns familiar for avg >= 70 with 2+ attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'medium', score: 70, correctAnswers: 3, totalQuestions: 5, xpEarned: 17 },
          { timestamp: '2024-01-02', difficulty: 'medium', score: 70, correctAnswers: 3, totalQuestions: 5, xpEarned: 17 },
        ],
        masteryLevel: 'familiar',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('familiar');
    });

    it('returns familiar for 85% score', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'medium', score: 85, correctAnswers: 4, totalQuestions: 5, xpEarned: 21 },
        ],
        masteryLevel: 'familiar',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('familiar');
    });

    it('returns correct info for familiar level', () => {
      const info = getMasteryInfo('familiar');
      
      expect(info).toMatchObject({
        label: 'Familiar',
        color: 'text-yellow-400',
        symbol: '◐',
      });
    });
  });

  describe('Level: Mastered', () => {
    it('returns mastered for 2+ perfect scores', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'hard', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 40 },
          { timestamp: '2024-01-02', difficulty: 'hard', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 40 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });

    it('returns mastered for avg >= 90 with 3+ attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
          { timestamp: '2024-01-02', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
          { timestamp: '2024-01-03', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });

    it('returns mastered for 3 perfect scores', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'easy', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 15 },
          { timestamp: '2024-01-02', difficulty: 'easy', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 15 },
          { timestamp: '2024-01-03', difficulty: 'easy', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 15 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });

    it('returns mastered for high average across many attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'hard', score: 95, correctAnswers: 4, totalQuestions: 5, xpEarned: 38 },
          { timestamp: '2024-01-02', difficulty: 'hard', score: 92, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
          { timestamp: '2024-01-03', difficulty: 'hard', score: 88, correctAnswers: 4, totalQuestions: 5, xpEarned: 35 },
          { timestamp: '2024-01-04', difficulty: 'hard', score: 94, correctAnswers: 4, totalQuestions: 5, xpEarned: 37 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });

    it('returns correct info for mastered level', () => {
      const info = getMasteryInfo('mastered');
      
      expect(info).toMatchObject({
        label: 'Mastered',
        color: 'text-emerald-400',
        symbol: '✓',
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles single perfect score as familiar (not mastered)', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'medium', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 25 },
        ],
        masteryLevel: 'familiar',
        visualizationsInteracted: [],
      };
      
      // Single perfect score returns familiar (best >= 80), need 2+ for mastered
      const result = calculateMastery(section);
      expect(result).toBe('familiar');
    });

    it('handles exactly 70 avg with 2 attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'medium', score: 70, correctAnswers: 3, totalQuestions: 5, xpEarned: 17 },
          { timestamp: '2024-01-02', difficulty: 'medium', score: 70, correctAnswers: 3, totalQuestions: 5, xpEarned: 17 },
        ],
        masteryLevel: 'familiar',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('familiar');
    });

    it('handles exactly 90 avg with 3 attempts', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
          { timestamp: '2024-01-02', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
          { timestamp: '2024-01-03', difficulty: 'hard', score: 90, correctAnswers: 4, totalQuestions: 5, xpEarned: 36 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });
  });

  describe('Priority Rules', () => {
    it('prioritizes mastered over familiar criteria', () => {
      const section: SectionProgress = {
        sectionId: 'linalg:1',
        visitedAt: '2024-01-01',
        completedAt: null,
        timeSpentSeconds: 60,
        quizAttempts: [
          { timestamp: '2024-01-01', difficulty: 'hard', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 40 },
          { timestamp: '2024-01-02', difficulty: 'hard', score: 100, correctAnswers: 5, totalQuestions: 5, xpEarned: 40 },
        ],
        masteryLevel: 'mastered',
        visualizationsInteracted: [],
      };
      
      // Has 2 perfect scores (mastered) and best >= 80 (familiar)
      const result = calculateMastery(section);
      expect(result).toBe('mastered');
    });
  });

  describe('Level Info Validation', () => {
    const validLevels: MasteryLevel[] = ['none', 'learning', 'familiar', 'mastered'];
    
    validLevels.forEach(level => {
      it(`returns valid info for ${level} level`, () => {
        const info = getMasteryInfo(level);
        
        expect(info).toHaveProperty('label');
        expect(info).toHaveProperty('color');
        expect(info).toHaveProperty('symbol');
      });
    });

    it('all levels have unique symbols', () => {
      const symbols = validLevels.map(level => getMasteryInfo(level).symbol);
      const uniqueSymbols = new Set(symbols);
      
      expect(uniqueSymbols.size).toBe(validLevels.length);
    });

    it('all levels have unique colors', () => {
      const colors = validLevels.map(level => getMasteryInfo(level).color);
      const uniqueColors = new Set(colors);
      
      expect(uniqueColors.size).toBe(validLevels.length);
    });
  });
});