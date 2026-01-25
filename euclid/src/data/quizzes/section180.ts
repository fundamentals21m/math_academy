import type { QuizQuestion } from './types';

export const section180Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.1 help determine about two unequal numbers?',
    options: [
      'Whether they are relatively prime (have no common measure except 1)',
      'Which number is larger',
      'Their product',
      'Their sum'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Proposition VII.1 provides a method to determine if two unequal numbers are relatively prime by repeatedly subtracting the lesser from the greater.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Euclidean algorithm of VII.1, what indicates that two numbers are NOT relatively prime?',
    options: [
      'The process never terminates',
      'A number greater than 1 remains that measures both original numbers',
      'The result is zero',
      'The numbers are both even'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If the process terminates with a number greater than 1 that measures both original numbers, they have a common factor and are not relatively prime.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When applying VII.1 to test if 12 and 35 are relatively prime, what is the sequence of remainders?',
    options: [
      '35, 12, 7, 5, 2, 1 - they are relatively prime',
      '35, 23, 11, 1 - they are relatively prime',
      '35, 12, 11, 0 - they are not relatively prime',
      '35, 12, 11, 1 - they are relatively prime',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '35 - 12 = 23, 23 - 12 = 11, 12 - 11 = 1. Since we reach 1, the numbers are relatively prime. (Using repeated subtraction as Euclid describes.)',
  },
];
