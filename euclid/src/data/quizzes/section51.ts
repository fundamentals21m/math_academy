import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.2 states that if AB is cut at C, then AB×AC + AB×CB equals what?',
    options: [
      'The rectangle AC × CB',
      'Twice the rectangle AC × CB',
      'The square on AC plus the square on CB',
      'The square on AB'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'II.2 states that the sum of the rectangles (whole × each part) equals the square on the whole: a·b + a·c = a² when b + c = a.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which identity does II.2 represent in algebraic form?',
    options: [
      'a·a = a²',
      '(a + b)² = a² + 2ab + b²',
      'a(b + c) = ab + ac',
      'a² - b² = (a+b)(a-b)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'II.2 is a special case of the distributive law where the multiplier equals the sum of the parts being multiplied.',
  },
];
