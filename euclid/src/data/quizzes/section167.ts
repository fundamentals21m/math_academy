import type { QuizQuestion } from './types';

export const section167Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.22 states: If four straight lines are proportional, similar rectilineal figures on them are:',
    options: [
      'Equal in area',
      'Congruent',
      'Regular polygons',
      'Also proportional (in duplicate ratio)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.22 proves that if A:B = C:D, then similar figures described on A and B are proportional to similar figures on C and D.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'More precisely, if A:B = C:D, and similar figures S1, S2 are on A, B and T1, T2 on C, D, then:',
    options: [
      'S1:S2 = T1:T2',
      'S1 = T1 and S2 = T2',
      'S1 + S2 = T1 + T2',
      'S1 × S2 = T1 × T2',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The similar figures maintain the same ratio. S1:S2 = A^2:B^2 and T1:T2 = C^2:D^2. Since A:B = C:D, their squares are also proportional.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The converse of VI.22 states: If similar figures on four lines are proportional, then:',
    options: [
      'The four lines are equal',
      'The lines are parallel',
      'The four lines are themselves proportional',
      'The figures are congruent',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If S1:S2 = T1:T2 where these are similar figures on A, B, C, D respectively, then A:B = C:D. Proportional areas imply proportional sides.',
  },
];
