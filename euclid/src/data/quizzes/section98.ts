import type { QuizQuestion } from './types';

export const section98Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.34 does what to a given circle?',
    options: [
      'Finds its center',
      'Cuts off a segment admitting a given angle',
      'Draws a tangent',
      'Inscribes a polygon'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.34 cuts off a segment from a given circle such that inscribed angles in that segment equal a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between III.33 and III.34?',
    options: [
      'III.33 works with angles, III.34 with arcs',
      'III.33 builds a segment on a given line; III.34 cuts a segment from a given circle',
      'III.33 uses tangents; III.34 uses chords',
      'There is no difference'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.33 constructs a circular segment on a given straight line; III.34 cuts a segment from an existing circle. Both create segments admitting a given angle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Both III.33 and III.34 rely heavily on:',
    options: [
      'III.1 (finding the center)',
      'III.32 (tangent-chord angle theorem)',
      'III.31 (angle in semicircle)',
      'I.47 (Pythagorean theorem)'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Both constructions use III.32: the tangent-chord angle equals the inscribed angle in the alternate segment.',
  },
];
