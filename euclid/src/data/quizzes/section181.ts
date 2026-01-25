import type { QuizQuestion } from './types';

export const section181Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.2 find for two numbers that are not relatively prime?',
    options: [
      'Their least common multiple',
      'Their product',
      'Their difference',
      'Their greatest common measure (GCD)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Proposition VII.2 provides the Euclidean algorithm to find the greatest common measure (GCD) of two numbers that are not relatively prime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using the Euclidean algorithm (VII.2), what is the GCD of 48 and 18?',
    options: [
      '6',
      '3',
      '2',
      '9'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Applying the algorithm: 48 = 2(18) + 12, then 18 = 1(12) + 6, then 12 = 2(6) + 0. The last non-zero remainder is 6, so GCD(48, 18) = 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does the Euclidean algorithm in VII.2 always terminate?',
    options: [
      'Because one number eventually becomes zero',
      'Because both numbers are finite',
      'Because the remainders form a strictly decreasing sequence of positive integers',
      'Because Euclid\\'s postulates guarantee it',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Each remainder is strictly smaller than the previous one. Since we are dealing with positive integers, this decreasing sequence must eventually reach 0, guaranteeing termination.',
  },
];
