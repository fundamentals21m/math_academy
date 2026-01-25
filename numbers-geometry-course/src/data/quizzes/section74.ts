import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 74: The Natural Logarithm and the Exponential
 */
export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How is the natural logarithm defined?',
    options: [
      'As the inverse of 10ˣ',
      'As the arc length of a hyperbola',
      'As the area under xy = 1 from x = 1 to x = t',
      'As the solution to x² = t',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'log t is defined as the area under the hyperbola xy = 1 from x = 1 to x = t.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is log 1?',
    options: ['1', '0', 'e', 'Undefined'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'log 1 = 0 because there is no area from x = 1 to x = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the additive property of log?',
    options: [
      'log(a + b) = log a + log b',
      'log(ab) = log a + log b',
      'log(aᵇ) = a log b',
      'log(a/b) = log a + log b',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The additive property states log(ab) = log a + log b, which comes from the geometry of y = 1/x.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the number e defined?',
    options: [
      'e = 2.71828',
      'e = π - 0.4',
      'e is the number with log e = 1',
      'e is the smallest transcendental number'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'e is defined as the unique number whose natural logarithm equals 1: log e = 1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between eˣ and log x?',
    options: [
      'They are the same function',
      'eˣ + log x = 1',
      'eˣ = 1/log x',
      'They are inverse functions'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The exponential eˣ and natural logarithm are inverse functions: x = eʸ ⟺ y = log x.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why does the additive property of log hold?',
    options: [
      'From the geometry of y = 1/x (scaling preserves area)',
      'By definition of addition',
      'From calculus',
      'From the definition of e'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The region from a to ab is a × 1/a = 1 times the area from 1 to b, due to y = 1/x.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is log(aⁿ) for integer n?',
    options: [
      'n log a',
      'aⁿ log a',
      'n + log a',
      '(log a)ⁿ',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'By the additive property applied n times: log(aⁿ) = log(a·a·...·a) = n log a.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Is the number e algebraic or transcendental?',
    options: [
      'Algebraic (it satisfies x² - e = 0)',
      'Algebraic (it is a ratio of integers)',
      'Neither',
      'Transcendental (proved by Hermite in 1873)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Hermite proved in 1873 that e is transcendental—not the root of any polynomial with integer coefficients.',
  },
];
