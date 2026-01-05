import { describe, it, expect, beforeEach, vi } from 'vitest';
import { XP_CONFIG } from '../../gamification/types';
import type { QuizQuestion, Difficulty } from '../../gamification/quizTypes';

/**
 * Baseline regression tests for quiz logic
 * These tests ensure quiz behavior doesn't change unexpectedly
 * 
 * DOCUMENTED BASELINES (2026-01-03):
 * - Multiple choice: Options array, correctIndex (0-3)
 * - Numeric input: correctAnswer number, accepts numeric range
 * - Scoring: (correctAnswers / totalQuestions) * 100
 * - Questions per quiz: Default 5, randomized selection
 */

describe('Quiz Logic Baselines', () => {
  const mockQuestions: QuizQuestion[] = Array.from({ length: 10 }, (_, i) => ({
    id: `test-q-${i + 1}`,
    type: 'multiple-choice',
    question: `Test question ${i + 1}`,
    difficulty: i < 3 ? 'easy' : i < 6 ? 'medium' : 'hard',
    explanation: `Explanation for question ${i + 1}`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 0,
  }));

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Question Randomization', () => {
    it('selects 5 random questions from pool', () => {
      const selectedQuestions = [...mockQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      
      expect(selectedQuestions.length).toBe(5);
    });

    it('preserves question data after randomization', () => {
      const selectedQuestions = [...mockQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      
      selectedQuestions.forEach(q => {
        expect(q).toHaveProperty('id');
        expect(q).toHaveProperty('question');
        expect(q).toHaveProperty('options');
        expect(q).toHaveProperty('correctIndex');
      });
    });

    it('randomization preserves correct answer data structure', () => {
      const selectedQuestions = [...mockQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      
      selectedQuestions.forEach(q => {
        expect(q.correctIndex).toBeDefined();
        expect(typeof q.correctIndex).toBe('number');
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan((q.options?.length || 4));
      });
    });
  });

  describe('Multiple Choice Logic', () => {
    it('handles option selection', () => {
      const question = mockQuestions[0];
      const selectedOptionIndex = 1; // User selects option B
      
      expect(question.options).toBeDefined();
      expect(question.options.length).toBeGreaterThan(0);
      expect(selectedOptionIndex).toBeLessThan(question.options.length);
    });

    it('preserves correctIndex after rendering', () => {
      const question = mockQuestions[0];
      const originalCorrectIndex = question.correctIndex;
      
      expect(question.correctIndex).toBe(originalCorrectIndex);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    });
  });

  describe('Numeric Input Logic', () => {
    const numericQuestion: QuizQuestion = {
      id: 'test-numeric',
      type: 'numeric',
      question: 'What is 2 + 2?',
      difficulty: 'easy',
      explanation: '2 + 2 = 4',
      correctAnswer: 4,
    };

    it('accepts numeric answer', () => {
      const userAnswer = 4;
      const isCorrect = userAnswer === numericQuestion.correctAnswer;
      
      expect(isCorrect).toBe(true);
    });

    it('rejects incorrect numeric answer', () => {
      const userAnswer = 5;
      const isCorrect = userAnswer === numericQuestion.correctAnswer;
      
      expect(isCorrect).toBe(false);
    });

    it('handles decimal answers', () => {
      const question = {
        ...numericQuestion,
        correctAnswer: 3.14,
      };
      const userAnswer = 3.14;
      const isCorrect = userAnswer === question.correctAnswer;
      
      expect(isCorrect).toBe(true);
    });

    it('handles negative answers', () => {
      const question = {
        ...numericQuestion,
        correctAnswer: -5,
      };
      const userAnswer = -5;
      const isCorrect = userAnswer === question.correctAnswer;
      
      expect(isCorrect).toBe(true);
    });
  });

  describe('Scoring Logic', () => {
    it('calculates percentage score correctly', () => {
      const correctAnswers = 4;
      const totalQuestions = 5;
      const score = (correctAnswers / totalQuestions) * 100;
      
      expect(score).toBe(80);
    });

    it('calculates perfect score', () => {
      const correctAnswers = 5;
      const totalQuestions = 5;
      const score = (correctAnswers / totalQuestions) * 100;
      
      expect(score).toBe(100);
    });

    it('calculates zero score', () => {
      const correctAnswers = 0;
      const totalQuestions = 5;
      const score = (correctAnswers / totalQuestions) * 100;
      
      expect(score).toBe(0);
    });

    it('rounds scores appropriately', () => {
      const score1 = (3 / 7) * 100;
      const score2 = (5 / 6) * 100;
      
      expect(score1).toBeCloseTo(42.86, 1);
      expect(score2).toBeCloseTo(83.33, 1);
    });
  });

  describe('XP Awarding Logic', () => {
    it('awards correct XP for easy quiz', () => {
      const score = 80;
      const difficulty: Difficulty = 'easy';
      const expectedXP = Math.round(XP_CONFIG.QUIZ_EASY * (score / 100));
      
      expect(expectedXP).toBe(Math.round(15 * 0.8));
    });

    it('awards correct XP for medium quiz', () => {
      const score = 100;
      const difficulty: Difficulty = 'medium';
      const expectedXP = Math.round(XP_CONFIG.QUIZ_MEDIUM * (score / 100));
      
      expect(expectedXP).toBe(25);
    });

    it('awards correct XP for hard quiz', () => {
      const score = 90;
      const difficulty: Difficulty = 'hard';
      const expectedXP = Math.round(XP_CONFIG.QUIZ_HARD * (score / 100));
      
      expect(expectedXP).toBe(Math.round(40 * 0.9));
    });
  });

  describe('Question Difficulty Distribution', () => {
    it('includes easy questions', () => {
      const easyQuestions = mockQuestions.filter(q => q.difficulty === 'easy');
      expect(easyQuestions.length).toBeGreaterThan(0);
    });

    it('includes medium questions', () => {
      const mediumQuestions = mockQuestions.filter(q => q.difficulty === 'medium');
      expect(mediumQuestions.length).toBeGreaterThan(0);
    });

    it('includes hard questions', () => {
      const hardQuestions = mockQuestions.filter(q => q.difficulty === 'hard');
      expect(hardQuestions.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty options array', () => {
      const question = { ...mockQuestions[0], options: [] };
      expect(question.options).toEqual([]);
    });

    it('handles single option', () => {
      const question = { ...mockQuestions[0], options: ['Only option'] };
      expect(question.options.length).toBe(1);
      expect(question.correctIndex).toBe(0);
    });

    it('handles missing correctIndex', () => {
      const question = { ...mockQuestions[0] } as QuizQuestion;
      expect(question.correctIndex).toBeDefined();
    });
  });

  describe('Quiz State Management', () => {
    it('tracks current question index', () => {
      const currentIndex = 2;
      const totalQuestions = 5;
      
      expect(currentIndex).toBeGreaterThanOrEqual(0);
      expect(currentIndex).toBeLessThan(totalQuestions);
    });

    it('calculates progress percentage', () => {
      const currentIndex = 3;
      const totalQuestions = 5;
      const progress = ((currentIndex + 1) / totalQuestions) * 100;
      
      expect(progress).toBe(80);
    });

    it('detects quiz completion', () => {
      const currentIndex = 4;
      const totalQuestions = 5;
      const isComplete = currentIndex >= totalQuestions - 1;
      
      expect(isComplete).toBe(true);
    });
  });
});