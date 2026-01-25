import type { QuizQuestion } from './types';

export const section173Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.28 solves the problem of applying to a line a parallelogram:',
    options: [
      'Equal to a given figure and exceeding by a similar parallelogram',
      'Similar to a given triangle',
      'Congruent to a given parallelogram',
      'Equal to a given figure and deficient by a similar parallelogram',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.28 constructs a parallelogram on part of a given line, equal in area to a given rectilineal figure, with the deficiency (unused part) being similar to a given parallelogram.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For VI.28 to have a solution, the given rectilineal figure must not be:',
    options: [
      'A triangle',
      'Greater than the parallelogram on half the line (by VI.27)',
      'Equal to any parallelogram',
      'Less than the given deficiency',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VI.28 requires the given figure to be at most equal to the maximum possible parallelogram (from VI.27). If greater, no solution exists because the deficient construction cannot achieve that area.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "deficient" application of areas in VI.28 is equivalent to solving:',
    options: [
      'A quadratic equation',
      'A linear equation',
      'A cubic equation',
      'A system of linear equations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Applying an area deficient by a similar figure is geometrically equivalent to solving a quadratic equation. This is Greek geometric algebra.',
  },
];
