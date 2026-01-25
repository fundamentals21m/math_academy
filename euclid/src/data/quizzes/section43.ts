import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.43 prove about parallelogram complements?',
    options: [
      'They are congruent',
      'They have perpendicular diagonals',
      'The complements about the diagonal are equal in area',
      'They form a square',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.43: In a parallelogram, the "complements" of parallelograms about the diagonal are equal in area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What geometric configuration does I.43 describe?',
    options: [
      'A parallelogram divided by one diagonal',
      'Two congruent parallelograms',
      'A parallelogram inscribed in a circle',
      'A parallelogram with a point on the diagonal creating four smaller parallelograms',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Through a point on the diagonal, draw parallels to the sides, creating four parallelograms; the non-diagonal ones are equal.',
  },
];
