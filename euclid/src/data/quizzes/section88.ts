import type { QuizQuestion } from './types';

export const section88Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.24 proves that similar segments on equal bases are:',
    options: [
      'Always different sizes',
      'Equal to one another',
      'Proportional in area',
      'On the same circle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.24 proves that similar segments of circles on equal straight lines are equal to each other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of III.24 uses superposition. This means:',
    options: [
      'Drawing auxiliary circles',
      'Placing one figure on top of another to show they coincide',
      'Using algebraic manipulation',
      'Constructing parallel lines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Superposition places one segment on the other. Since the bases are equal and segments are similar, they must coincide exactly.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.24 extends III.23 by considering similar segments on:',
    options: [
      'The same base',
      'Different but equal bases',
      'Parallel bases',
      'Perpendicular bases'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.23 addresses the same base; III.24 shows similar segments on equal (congruent) bases are equal.',
  },
];
