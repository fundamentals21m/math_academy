import type { QuizQuestion } from './types';

export const section96Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.32 relates what two angles?',
    options: [
      'Two central angles',
      'Two inscribed angles',
      'The angle between tangent and chord, and the inscribed angle in the alternate segment',
      'A central angle and a tangent angle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.32 proves that the angle between a tangent and a chord at the tangent point equals the inscribed angle in the alternate segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If tangent TA and chord AB make a 40° angle, the inscribed angle in the segment on the other side of AB is:',
    options: [
      '40°',
      '50°',
      '80°',
      '140°',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By III.32, the tangent-chord angle equals the inscribed angle in the alternate segment, so it\'s also 40°.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "alternate segment" is:',
    options: [
      'The segment on the same side as the tangent',
      'The larger segment',
      'The segment containing the center',
      'The segment on the opposite side of the chord from the tangent-chord angle',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The alternate segment is on the opposite side of the chord from where the tangent-chord angle opens.',
  },
];
