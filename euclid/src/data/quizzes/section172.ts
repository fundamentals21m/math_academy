import type { QuizQuestion } from './types';

export const section172Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.27 proves that among all parallelograms applied to half of a given line and deficient by a similar parallelogram:',
    options: [
      'The smallest is when applied to the whole line',
      'All have equal area',
      'The greatest is the one described on half the line',
      'None can exceed a given bound',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VI.27 establishes that the maximum parallelogram is achieved when it is constructed on exactly half the given line. This is an optimization result.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The constraint "deficient by a similar parallelogram" means:',
    options: [
      'The parallelogram must be smaller than a given figure',
      'The figure is incomplete',
      'The sides are not parallel',
      'A similar parallelogram must be subtracted from the rectangle on the whole line',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'In application of areas, "deficient by" means the parallelogram falls short of covering a line by a specified similar figure. The defect (shortfall) must itself be similar to a given parallelogram.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.27 is related to which modern mathematical concept?',
    options: [
      'Solving linear equations',
      'Finding maximum values (optimization)',
      'Computing derivatives',
      'Finding circle centers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.27 is an ancient optimization theorem. It finds the maximum possible area under given constraints, anticipating calculus optimization problems.',
  },
];
