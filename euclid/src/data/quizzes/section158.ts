import type { QuizQuestion } from './types';

export const section158Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.13 finds what between two given straight lines?',
    options: [
      'The arithmetic mean',
      'The harmonic mean',
      'A parallel line',
      'The mean proportional (geometric mean)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.13 constructs the mean proportional X such that A:X = X:B, meaning X = sqrt(A × B).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The construction in VI.13 uses what geometric figure?',
    options: [
      'A semicircle with the combined length as diameter',
      'A square',
      'A regular hexagon',
      'An equilateral triangle',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The two lines are placed end-to-end as diameter. A semicircle is drawn, and a perpendicular from the junction to the arc gives the mean proportional.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If AB and BC are the two given lines joined at B, and BD is perpendicular to AC meeting the semicircle at D, why is BD the mean proportional?',
    options: [
      'Because angle ADB is a right angle (Thales)',
      'Because BD bisects angle ADB',
      'Because triangles ABD and DBC are similar, so AB:BD = BD:BC',
      'Because BD equals the radius',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Angle ADB = 90 degrees (angle in semicircle). This makes triangles ABD and DBC similar, giving the proportion AB:BD = BD:BC.',
  },
];
