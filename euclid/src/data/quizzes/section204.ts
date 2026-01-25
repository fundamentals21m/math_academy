import type { QuizQuestion } from './types';

export const section204Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.25 prove about squares of relatively prime numbers?',
    options: [
      'Squares of primes are relatively prime',
      'The square of a relatively prime pair equals their product',
      'Squares are always relatively prime to odd numbers',
      'If two numbers are relatively prime, their squares are also relatively prime',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VII.25: If gcd(a,b) = 1, then gcd(a squared, b squared) = 1. Relative primality is preserved when taking squares.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(4,9) = 1, what is gcd(16,81)?',
    options: [
      '3',
      '4',
      '1',
      '9',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since gcd(4,9) = 1, by VII.25, gcd(4 squared, 9 squared) = gcd(16,81) = 1. The squares remain relatively prime.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.25 follows from VII.24 by observing that:',
    options: [
      'a squared = a times a, so if gcd(a,b) = 1, apply VII.24 twice',
      'Squares are special products',
      'Squares preserve all divisibility properties',
      'Prime factorizations of squares have even exponents',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.25 is a corollary of VII.24. Since a squared = a times a, and gcd(a,b) = 1 for both factors, VII.24 gives gcd(a squared, b) = 1. Applying again: gcd(a squared, b squared) = 1.',
  },
];
