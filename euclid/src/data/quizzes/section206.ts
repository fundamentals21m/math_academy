import type { QuizQuestion } from './types';

export const section206Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.27 states that if two numbers are relatively prime, then their powers are:',
    options: [
      'Equal to each other',
      'Also relatively prime',
      'Always prime numbers',
      'Divisible by each other'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.27 proves that if a and b are relatively prime, then a^n and b^n are also relatively prime for any positive integer n.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(3, 5) = 1, what can we conclude about gcd(27, 125)?',
    options: [
      'gcd(27, 125) = 27',
      'gcd(27, 125) = 5',
      'gcd(27, 125) = 1',
      'gcd(27, 125) = 15'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since gcd(3, 5) = 1, by VII.27, gcd(3^3, 5^3) = gcd(27, 125) = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of VII.27 relies on which key earlier proposition?',
    options: [
      'VII.20 about least numbers in ratio',
      'VII.24 about coprime implies coprime to product',
      'VII.1 about the Euclidean algorithm',
      'VII.15 about commutative multiplication'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.27 builds on VII.24, which states that if a is coprime to b, then a is coprime to any power of b.',
  },
];
