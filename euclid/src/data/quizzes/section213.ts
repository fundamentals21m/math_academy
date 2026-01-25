import type { QuizQuestion } from './types';

export const section213Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.34 shows how to find the LCM of:',
    options: [
      'Two numbers',
      'Three numbers',
      'Perfect squares',
      'Any prime numbers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.34 gives the method for finding the least common multiple of two numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the LCM of 12 and 18?',
    options: [
      '6',
      '216',
      '72',
      '36',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'LCM(12, 18) = 36. We have 12 = 2^2 * 3 and 18 = 2 * 3^2, so LCM = 2^2 * 3^2 = 36.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The relationship between LCM and GCD for two numbers a and b is:',
    options: [
      'LCM(a, b) = a + b - GCD(a, b)',
      'LCM(a, b) * GCD(a, b) = a * b',
      'LCM(a, b) = GCD(a, b)^2',
      'LCM(a, b) + GCD(a, b) = a * b',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For any two positive integers a and b, LCM(a, b) * GCD(a, b) = a * b.',
  },
];
