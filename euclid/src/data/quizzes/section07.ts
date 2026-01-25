import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.7 prove about triangles on the same base?',
    options: [
      'Two distinct triangles cannot have both pairs of sides from endpoints equal',
      'They have equal areas',
      'They must be congruent',
      'Their heights are proportional',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.7: On the same base and on the same side, there cannot be two triangles with equal sides from each endpoint.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the primary purpose of Proposition I.7?',
    options: [
      'To prove the uniqueness of triangles',
      'As a lemma for proving I.8 (SSS congruence)',
      'To establish parallel lines',
      'To construct perpendiculars',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'I.7 serves as a crucial lemma for I.8, which proves SSS (side-side-side) triangle congruence.',
  },
];
