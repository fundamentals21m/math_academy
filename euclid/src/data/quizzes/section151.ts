import type { QuizQuestion } from './types';

export const section151Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.6 (SAS similarity) prove?',
    options: [
      'Triangles with equal sides are congruent',
      'All right triangles are similar',
      'If two triangles have one angle equal and the sides about the equal angles proportional, they are similar',
      'Triangles with equal areas have proportional sides',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VI.6 establishes SAS similarity: one equal angle with proportional adjacent sides implies the triangles are equiangular (similar).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Triangle ABC has angle A = 50 degrees, AB = 4, AC = 6. Triangle DEF has angle D = 50 degrees, DE = 6, DF = 9. By VI.6:',
    options: [
      'The triangles are congruent',
      'The triangles are similar (scale factor 3:2)',
      'The triangles are not similar',
      'We need more information',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The included angles are equal (50 degrees) and AB:DE = 4:6 = 2:3 and AC:DF = 6:9 = 2:3. By VI.6 (SAS similarity), the triangles are similar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is VI.6 particularly useful in practical applications?',
    options: [
      'It requires measuring only one angle and two sides per triangle',
      'It requires measuring all three sides',
      'It proves all triangles are similar',
      'It only works for right triangles',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VI.6 is efficient for practical applications because proving similarity requires only one angle and two sides, not all angles or all sides.',
  },
];
