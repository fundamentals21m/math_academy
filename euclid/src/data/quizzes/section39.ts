import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Proposition I.39 the converse of?',
    options: [
      'I.36',
      'I.37',
      'I.35',
      'I.38',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.39 is the converse of I.37: if triangles on the same base have equal areas, they are between the same parallels.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does I.39 prove?',
    options: [
      'Equal triangles on the same base are between the same parallels (vertices on a parallel line)',
      'Equal triangles have equal bases',
      'All equal triangles are congruent',
      'Triangles with equal areas are similar',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If triangles on the same base have equal areas, their vertices lie on a line parallel to the base.',
  },
];
