import type { QuizQuestion } from './types';

export const section212Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.33 addresses finding:',
    options: [
      'The least common multiple (LCM) of any quantity of given numbers',
      'The GCD of multiple numbers',
      'The prime factorization',
      'The arithmetic mean',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.33 provides a method for finding the least common multiple of any set of given numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the LCM of 4, 6, and 10?',
    options: [
      '120',
      '240',
      '60',
      '24',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'LCM(4, 6, 10) = 60. We have 4 = 2^2, 6 = 2*3, 10 = 2*5, so LCM = 2^2 * 3 * 5 = 60.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The method in VII.33 for finding LCM of multiple numbers uses:',
    options: [
      'Finding all primes first',
      'Repeated application of LCM for two numbers',
      'The Euclidean algorithm directly',
      'Trial division only',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.33 uses the result from VII.34 repeatedly: LCM(a, b, c) = LCM(LCM(a, b), c).',
  },
];
