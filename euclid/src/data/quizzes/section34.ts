import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What properties of parallelograms does I.34 establish?',
    options: [
      'All angles are right angles',
      'Opposite sides and angles are equal; diagonal bisects the area',
      'Diagonals are perpendicular',
      'All sides are equal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.34: In parallelograms, opposite sides and angles are equal, and the diagonal bisects the parallelogram.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "the diameter bisects" the parallelogram mean in I.34?',
    options: [
      'The diagonal has equal length on both sides of center',
      'The diagonal is perpendicular to the sides',
      'The diagonal passes through the center',
      'The diagonal divides it into two congruent triangles',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The diagonal (diameter) divides the parallelogram into two congruent triangles of equal area.',
  },
];
