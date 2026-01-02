import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.21 proves that inscribed angles in the same segment are:',
    options: [
      'Supplementary',
      'Complementary',
      'Equal to each other',
      'Right angles'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.21 proves that all inscribed angles subtending the same arc (in the same segment) are equal.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If points A, B, C, D are on a circle with chord BC, and both A and D are in the same segment, then:',
    options: [
      '∠BAC = ∠BDC',
      '∠BAC + ∠BDC = 180°',
      '∠BAC + ∠BDC = 90°',
      '∠BAC = 2∠BDC'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Both angles are inscribed in the same segment (same side of chord BC), so they are equal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.21 follows from III.20 because:',
    options: [
      'All inscribed angles equal the central angle',
      'All inscribed angles are half the same central angle',
      'Inscribed angles are always 90°',
      'Central angles are constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each inscribed angle on the same arc is half of the same central angle (by III.20), so all such inscribed angles are equal.',
  },
];
