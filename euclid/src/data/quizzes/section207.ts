import type { QuizQuestion } from './types';

export const section207Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.28 states that if two numbers are relatively prime, their sum is relatively prime to:',
    options: [
      'Each of the original numbers',
      'Their product',
      'Their difference',
      'Neither number',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.28 proves that if gcd(a, b) = 1, then gcd(a + b, a) = 1 and gcd(a + b, b) = 1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(7, 11) = 1, what is gcd(18, 7)?',
    options: [
      '7',
      '11',
      '1',
      '18'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since gcd(7, 11) = 1, by VII.28, gcd(7 + 11, 7) = gcd(18, 7) = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of VII.28 proceeds by showing that if a common factor divided both the sum and one number, it would:',
    options: [
      'Be equal to 1',
      'Also divide the other number, contradicting relative primality',
      'Divide the product',
      'Be a prime number',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If d divides both (a + b) and a, then d divides (a + b) - a = b, so d is a common divisor of a and b, contradicting gcd(a, b) = 1.',
  },
];
