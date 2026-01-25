import type { QuizQuestion } from './types';

export const section182Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.3 extend from VII.2?',
    options: [
      'Finding the GCD of two numbers',
      'Finding the greatest common measure of three numbers',
      'Finding prime factors',
      'Testing for relative primality',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Proposition VII.3 extends the Euclidean algorithm to find the greatest common measure of three numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To find GCD(24, 36, 60) using VII.3, what is the correct approach?',
    options: [
      'Find the smallest number and test if it divides the others',
      'Find GCD(24, 60) first, then add 36',
      'Multiply all three numbers, then divide by 2',
      'Find GCD(24, 36) first, then find GCD of that result with 60'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'VII.3 uses the result from VII.2: first find GCD(24, 36) = 12, then find GCD(12, 60) = 12. So GCD(24, 36, 60) = 12.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If three numbers A, B, C have GCD = D, what can we conclude about D?',
    options: [
      'D equals one of A, B, or C',
      'D is always prime',
      'D measures each of A, B, and C, and any other common measure also measures D',
      'D is always less than the smallest of A, B, C',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The GCD D measures all three numbers, and importantly, any other common measure of A, B, and C must also measure D, making D the greatest such common measure.',
  },
];
