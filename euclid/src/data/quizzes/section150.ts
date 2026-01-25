import type { QuizQuestion } from './types';

export const section150Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.5 is the converse of VI.4. What does it prove?',
    options: [
      'If triangles have proportional sides, they are equiangular (similar)',
      'If triangles have proportional sides, they have equal areas',
      'If triangles are congruent, they have proportional sides',
      'If triangles share an angle, they are similar',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.5 proves that if the sides of two triangles are proportional, then the triangles are equiangular (and hence similar).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern terms, VI.5 establishes which similarity criterion?',
    options: [
      'AA (Angle-Angle)',
      'SSS (Side-Side-Side)',
      'SAS (Side-Angle-Side)',
      'ASA (Angle-Side-Angle)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'VI.5 is the SSS similarity criterion: if all three pairs of corresponding sides are proportional, the triangles are similar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Triangle A has sides 5, 12, 13. Triangle B has sides 10, 24, 26. By VI.5:',
    options: [
      'They are congruent',
      'They are not similar',
      'They are similar with ratio 1:2',
      'We cannot determine their relationship',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The ratios are 5:10 = 12:24 = 13:26 = 1:2. Since all corresponding sides are proportional, VI.5 guarantees similarity.',
  },
];
