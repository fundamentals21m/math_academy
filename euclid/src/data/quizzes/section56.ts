import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What identity can be derived from Proposition II.7?',
    options: [
      '(a+b)² = a² + 2ab + b²',
      'a² + b² = 2ab + (a-b)²',
      '(a-b)² = a² - 2ab + b²',
      'a² - b² = (a+b)(a-b)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'II.7 proves that (a+b)² + b² = 2(a+b)b + a², which can be rearranged to show a² + b² = 2ab + (a-b)².',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Rearranging II.7, we can derive the formula for:',
    options: [
      'The square of a sum',
      'The cube of a sum',
      'The square of a difference',
      'The difference of squares',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'From a² + b² - 2ab = (a-b)², we get the square of a difference formula.',
  },
];
