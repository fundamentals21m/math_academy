import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.35 prove about parallelograms?',
    options: [
      'They have equal diagonals',
      'Parallelograms on the same base and between the same parallels are equal in area',
      'They can be constructed from any quadrilateral',
      'Their angles sum to 360°'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.35: Parallelograms on the same base and between the same parallels have equal areas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What geometric concept does I.35 introduce?',
    options: [
      'Congruence',
      'Similarity',
      'Area equivalence without congruence',
      'Perpendicularity'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.35 shows figures can have equal areas without being congruent—a key insight for area theory.',
  },
];
