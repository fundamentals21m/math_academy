import type { QuizQuestion } from './types';

export const section170Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.25 shows how to construct a figure that is:',
    options: [
      'Similar to a given figure and congruent to another',
      'Equal in perimeter to two given figures',
      'Similar to both given figures simultaneously',
      'Similar to one given figure and equal in area to another',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.25 constructs a rectilineal figure that is similar to one given figure while having the same area as another given figure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The construction in VI.25 involves finding a line that is:',
    options: [
      'The arithmetic mean of two given lines',
      'Perpendicular to the base',
      'The geometric mean (mean proportional) between two lines',
      'Parallel to a given line',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VI.25 uses mean proportionals. To scale a figure to match a different area while preserving shape, Euclid finds the mean proportional between appropriate lines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To construct a square similar to a rectangle (same shape as a square) and equal in area to the rectangle:',
    options: [
      'Take the average of the sides',
      'Find the mean proportional (geometric mean) of the two sides',
      'Add the two sides together',
      'Take the difference of the two sides',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If the rectangle has sides a and b, the equal-area square has side sqrt(ab), which is the geometric mean of a and b. This is a special case of VI.25.',
  },
];
