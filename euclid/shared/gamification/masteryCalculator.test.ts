/**
 * @vitest-environment node
 */
import { describe, it, expect } from 'vitest';
import { calculateMastery, getMasteryInfo } from './masteryCalculator';
import type { SectionProgress } from './types';

describe('calculateMastery', () => {
  const createSection = (quizAttempts: Array<{ score: number }>): SectionProgress => ({
    sectionId: 'test-section',
    visitedAt: new Date().toISOString(),
    completedAt: null,
    quizAttempts: quizAttempts.map((a) => ({
      score: a.score,
      xpEarned: 100,
      timestamp: new Date().toISOString(),
      difficulty: 'medium',
      correctAnswers: Math.round(a.score / 10),
      totalQuestions: 10,
    })),
    visualizationsInteracted: [],
    masteryLevel: 'none',
    timeSpentSeconds: 0,
  });

  describe('learning level', () => {
    it('should return learning when no quiz attempts', () => {
      const section = createSection([]);
      expect(calculateMastery(section)).toBe('learning');
    });

    it('should return learning for low scores', () => {
      const section = createSection([{ score: 50 }, { score: 60 }]);
      expect(calculateMastery(section)).toBe('learning');
    });

    it('should return learning for single moderate score', () => {
      const section = createSection([{ score: 75 }]);
      expect(calculateMastery(section)).toBe('learning');
    });
  });

  describe('familiar level', () => {
    it('should return familiar when best score >= 80', () => {
      const section = createSection([{ score: 80 }]);
      expect(calculateMastery(section)).toBe('familiar');
    });

    it('should return familiar when avg >= 70 with 2+ attempts', () => {
      const section = createSection([{ score: 70 }, { score: 75 }]);
      expect(calculateMastery(section)).toBe('familiar');
    });

    it('should return familiar for 85% score', () => {
      const section = createSection([{ score: 85 }]);
      expect(calculateMastery(section)).toBe('familiar');
    });
  });

  describe('mastered level', () => {
    it('should return mastered for 2+ perfect scores', () => {
      const section = createSection([{ score: 100 }, { score: 100 }]);
      expect(calculateMastery(section)).toBe('mastered');
    });

    it('should return mastered for avg >= 90 with 3+ attempts', () => {
      const section = createSection([{ score: 90 }, { score: 92 }, { score: 88 }]);
      expect(calculateMastery(section)).toBe('mastered');
    });

    it('should return mastered for 3 perfect scores', () => {
      const section = createSection([{ score: 100 }, { score: 100 }, { score: 100 }]);
      expect(calculateMastery(section)).toBe('mastered');
    });

    it('should return mastered for high average across many attempts', () => {
      const section = createSection([
        { score: 95 },
        { score: 90 },
        { score: 92 },
        { score: 88 },
      ]);
      expect(calculateMastery(section)).toBe('mastered');
    });
  });

  describe('edge cases', () => {
    it('should handle single perfect score as familiar (not mastered)', () => {
      const section = createSection([{ score: 100 }]);
      // Single perfect score: best = 100 >= 80, so familiar
      expect(calculateMastery(section)).toBe('familiar');
    });

    it('should prioritize mastered over familiar criteria', () => {
      // 2 perfect scores should be mastered even if we only have 2 attempts
      const section = createSection([{ score: 100 }, { score: 100 }]);
      expect(calculateMastery(section)).toBe('mastered');
    });

    it('should handle exactly 70 avg with 2 attempts', () => {
      const section = createSection([{ score: 70 }, { score: 70 }]);
      expect(calculateMastery(section)).toBe('familiar');
    });

    it('should handle exactly 90 avg with 3 attempts', () => {
      const section = createSection([{ score: 90 }, { score: 90 }, { score: 90 }]);
      expect(calculateMastery(section)).toBe('mastered');
    });
  });
});

describe('getMasteryInfo', () => {
  it('should return correct info for mastered', () => {
    const info = getMasteryInfo('mastered');
    expect(info.label).toBe('Mastered');
    expect(info.color).toContain('emerald');
    expect(info.symbol).toBe('●');
  });

  it('should return correct info for familiar', () => {
    const info = getMasteryInfo('familiar');
    expect(info.label).toBe('Familiar');
    expect(info.color).toContain('yellow');
    expect(info.symbol).toBe('◑');
  });

  it('should return correct info for learning', () => {
    const info = getMasteryInfo('learning');
    expect(info.label).toBe('Learning');
    expect(info.color).toContain('blue');
    expect(info.symbol).toBe('◐');
  });

  it('should return correct info for none', () => {
    const info = getMasteryInfo('none');
    expect(info.label).toBe('Not Started');
    expect(info.color).toContain('dark');
    expect(info.symbol).toBe('○');
  });

  it('should handle unknown level as none', () => {
    // TypeScript would normally prevent this, but testing runtime behavior
    const info = getMasteryInfo('unknown' as 'none');
    expect(info.label).toBe('Not Started');
  });
});
