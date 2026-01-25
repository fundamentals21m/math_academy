import type { QuizQuestion } from './types';

export const section100Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.36 is the "Tangent-Secant Theorem." What does it state?',
    options: [
      'Tangent and secant are perpendicular',
      'Tangent length equals secant length',
      'Tangent and secant create similar triangles',
      'The square of the tangent equals the product of the whole secant and its external part',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'III.36 proves: if from external point D, line DCA is a secant and DB is a tangent, then DA × DC = DB².',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a tangent from point D has length 6, and a secant from D has external segment 3, what is the whole secant length?',
    options: [
      '9',
      '12',
      '18',
      '36',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'DB² = DA × DC. So 36 = DA × 3, giving DA = 12 (the whole secant length).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.36 extends the "power of a point" concept to:',
    options: [
      'Points inside the circle only',
      'Points on the circle',
      'External points (using tangent and secant)',
      'The center of the circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.35 covers internal points (intersecting chords). III.36 covers external points using tangent and secant lines.',
  },
];
