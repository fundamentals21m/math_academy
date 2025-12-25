import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 0: Welcome
 *
 * Guidelines for creating quiz questions:
 * - Include 5 easy, 5 medium, and 5 hard questions per section
 * - Use LaTeX math notation: $x^2$ for inline, $$x^2$$ for block
 * - Provide clear explanations that teach, not just state the answer
 * - Each question should test a specific concept from the section
 */
export const section00Questions: QuizQuestion[] = [
  // ==========================================================================
  // EASY QUESTIONS
  // ==========================================================================
  {
    id: 1,
    difficulty: 'easy',
    question: 'Example easy question about the topic?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 0,
    explanation: 'Option A is correct because...',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Another easy question?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 1,
    explanation: 'Option B is correct because...',
  },

  // ==========================================================================
  // MEDIUM QUESTIONS
  // ==========================================================================
  {
    id: 6,
    difficulty: 'medium',
    question: 'Example medium question requiring more thought?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 2,
    explanation: 'Option C is correct because...',
  },

  // ==========================================================================
  // HARD QUESTIONS
  // ==========================================================================
  {
    id: 11,
    difficulty: 'hard',
    question: 'Example challenging question?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 3,
    explanation: 'Option D is correct because...',
  },
];
