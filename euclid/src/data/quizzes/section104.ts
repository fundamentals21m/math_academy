import type { QuizQuestion } from './types';

export const section104Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.2, what does "equiangular" mean when inscribing a triangle?',
    options: [
      'All angles are right angles',
      'The triangle has angles equal to those of a given triangle',
      'All angles are 60°',
      'The angles are acute',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Equiangular means the inscribed triangle has the same angles as the given (model) triangle—they are similar.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which theorem is key to the construction in IV.2?',
    options: [
      'The Pythagorean theorem (I.47)',
      'The angle sum theorem (I.32)',
      'The isosceles triangle theorem (I.5)',
      'The tangent-chord angle theorem (III.32)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'III.32 states that the angle between a tangent and chord equals the inscribed angle in the alternate segment—essential for copying angles into the inscribed triangle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Is the inscribed triangle in IV.2 congruent or similar to the given triangle?',
    options: [
      'Similar (same shape, different size)',
      'Congruent (same size and shape)',
      'Neither',
      'Both',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inscribed triangle is similar to the given triangle (same angles), but its size is determined by the circle, so it is not necessarily congruent.',
  },
];
