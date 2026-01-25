import type { QuizQuestion } from './types';

export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.14 compares equal chords in a circle. What is true about their distances from the center?',
    options: [
      'Equal chords are equidistant from the center',
      'Equal chords are at different distances from the center',
      'Only diameters are equidistant',
      'The distance depends on the chord\\'s position',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'III.14 proves that in a circle, equal chords are equidistant from the center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'III.14 also proves the converse: chords equidistant from the center are:',
    options: [
      'Parallel',
      'Perpendicular',
      'Equal in length',
      'Diameters',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The converse states that chords at the same distance from the center must be equal in length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "distance from the center" to a chord means:',
    options: [
      'The length of the radius',
      'The distance to the nearest endpoint',
      'The distance to the midpoint of the chord',
      'The perpendicular distance from the center to the chord',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The distance from a point to a line is always measured perpendicularly. The perpendicular from center to chord hits the chord at its midpoint (by III.3).',
  },
];
