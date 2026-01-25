import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does II.6 differ from II.5?',
    options: [
      'II.6 uses triangles instead of rectangles',
      'II.6 deals with extending a line rather than internal division',
      'II.6 proves the Pythagorean theorem',
      'II.6 uses the parallel postulate',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'II.5 handles cutting a bisected line internally, while II.6 handles adding a segment externally to a bisected line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If AB = 2a is bisected at C and BD = b is added, II.6 states that AD·DB + CB² equals:',
    options: [
      'AB²',
      '(a+b)²',
      'CD²',
      'Both CD² and (a+b)²',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Since CD = a + b (half of AB plus the added segment), the result is the square on CD, which equals (a+b)².',
  },
];
