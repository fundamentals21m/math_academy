import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.43 prove about parallelogram complements?',
    options: [
      'They are congruent',
      'The complements about the diagonal are equal in area',
      'They form a square',
      'They have perpendicular diagonals'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'I.43: In a parallelogram, the "complements" of parallelograms about the diagonal are equal in area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What geometric configuration does I.43 describe?',
    options: [
      'A parallelogram divided by one diagonal',
      'A parallelogram with a point on the diagonal creating four smaller parallelograms',
      'Two congruent parallelograms',
      'A parallelogram inscribed in a circle'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Through a point on the diagonal, draw parallels to the sides, creating four parallelograms; the non-diagonal ones are equal.',
  },
];
