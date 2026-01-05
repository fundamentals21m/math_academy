import type { QuizQuestion } from './types';

export const section155Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What construction does VI.10 provide?',
    options: [
      'Bisecting a line segment',
      'Cutting a line segment in the same ratio as another given divided line',
      'Finding the midpoint of a line',
      'Constructing a perpendicular bisector'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.10 shows how to divide one line segment in exactly the same ratio as a given already-divided line segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If line AB is divided at point C so that AC:CB = 3:5, VI.10 allows us to divide any other line segment PQ so that:',
    options: [
      'The segments are equal',
      'The new division has ratio 3:5',
      'The new division has ratio 5:3',
      'The segments sum to 8'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'VI.10 transfers the exact ratio from one line to another. If AC:CB = 3:5, the new line will be divided in the same ratio 3:5.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.10 is useful in geometric constructions because it:',
    options: [
      'Allows exact reproduction of any given ratio on a different scale',
      'Creates equal segments only',
      'Works only for integer ratios',
      'Requires trigonometry'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VI.10 enables scaling and copying ratios, which is fundamental for creating similar figures and proportional constructions at any size.',
  },
];
