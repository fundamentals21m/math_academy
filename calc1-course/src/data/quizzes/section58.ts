import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A direction field (slope field) shows:',
    options: [
      'The values of $y$',
      'The slope $y\' = f(x, y)$ at many points',
      'The integral curves exactly',
      'Only the critical points'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Direction fields plot small line segments with slope given by the DE at each point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An integral curve is:',
    options: [
      'A horizontal line',
      'A curve that is tangent to the direction field at every point',
      'Any curve in the plane',
      'The graph of the slope function'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integral curves are solutions; they follow the direction field.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $y\' = y$, the direction field has horizontal segments where:',
    options: [
      '$x = 0$',
      '$y = 0$',
      '$y = 1$',
      'Nowhere'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Horizontal (slope 0) when $y\' = y = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Direction fields are useful for:',
    options: [
      'Finding exact solutions',
      'Visualizing qualitative behavior of solutions',
      'Computing integrals',
      'Algebraic manipulation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Direction fields give qualitative insight without solving explicitly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For autonomous equation $y\' = f(y)$, the direction field depends only on:',
    options: [
      '$x$',
      '$y$',
      'Both $x$ and $y$',
      'Neither'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Autonomous: $y\'$ depends only on $y$, so slopes are constant along horizontal lines.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Equilibrium solutions occur where:',
    options: [
      '$y = 0$',
      '$y\' = 0$',
      '$x = 0$',
      '$y\'\' = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Equilibrium: $y\' = 0$ (constant solutions).',
  },
];
