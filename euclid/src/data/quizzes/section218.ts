import type { QuizQuestion } from './types';

export const section218Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.39 addresses finding the least number that has:',
    options: [
      'Given parts (such as a half, a third, a fourth, etc.)',
      'Only prime factors',
      'No factors at all',
      'The maximum number of divisors',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.39 shows how to find the smallest number that has specified parts (e.g., a half, a third, and a fifth).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the least number that has both a half and a third (i.e., is divisible by both 2 and 3)?',
    options: [
      '5',
      '3',
      '6',
      '12',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The least number divisible by both 2 and 3 is LCM(2, 3) = 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.39 connects the concept of "parts" to:',
    options: [
      'The Euclidean algorithm',
      'The least common multiple',
      'Perfect numbers',
      'The infinity of primes',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Finding the least number with given parts (a half, third, fourth, etc.) is equivalent to finding the LCM of the denominators (2, 3, 4, etc.).',
  },
];
