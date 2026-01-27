import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An inscribed angle is an angle whose vertex lies on:',
    options: [
      'The center of the circle',
      'The circumference of the circle',
      'Outside the circle',
      'On a diameter'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An inscribed angle has its vertex on the circle and sides as chords.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The inscribed angle theorem states: an inscribed angle is ____ the central angle subtending the same arc.',
    options: [
      'Equal to',
      'Twice',
      'Half of',
      'Unrelated to'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Inscribed angle = (1/2) × central angle for the same arc.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Thales\' circle theorem says: an angle inscribed in a semicircle is:',
    options: [
      'Acute',
      'Obtuse',
      'Variable',
      'A right angle (90°)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The diameter subtends a central angle of 180°, so the inscribed angle is 90°.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'All inscribed angles subtending the same arc are:',
    options: [
      'Equal',
      'Supplementary',
      'Complementary',
      'Different'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'They all equal half the central angle, hence are equal to each other.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A cyclic quadrilateral has all four vertices on a circle. Its opposite angles:',
    options: [
      'Are equal',
      'Sum to 180°',
      'Are both right angles',
      'Sum to 90°'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Opposite angles of a cyclic quadrilateral are supplementary (sum to π).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To construct a tangent to a circle at point P on the circle:',
    options: [
      'Draw any line through P',
      'Connect P to two other points on the circle',
      'Draw the line perpendicular to the radius OP at P',
      'Bisect the diameter through P'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The tangent at P is perpendicular to the radius at the point of tangency.',
  },
];
