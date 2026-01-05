import type { QuizQuestion } from './types';

export const section176Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.31 generalizes the Pythagorean theorem by replacing squares with:',
    options: [
      'Circles',
      'Any similar rectilineal figures',
      'Equilateral triangles only',
      'Rectangles only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.31 proves that in a right triangle, any similar figures described on the hypotenuse and legs satisfy the same relationship as squares: the figure on the hypotenuse equals the sum of the figures on the legs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If similar semicircles are constructed on the three sides of a right triangle, VI.31 tells us:',
    options: [
      'The three semicircles have equal area',
      'The semicircle on the hypotenuse equals the sum of the semicircles on the legs',
      'The semicircles are congruent',
      'Only squares work, not semicircles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'VI.31 applies to any similar figures, including semicircles. The semicircle on the hypotenuse has area equal to the sum of the semicircles on the two legs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The key insight of VI.31 is that similar figures scale by the:',
    options: [
      'Ratio of their corresponding sides',
      'Square (duplicate ratio) of their corresponding sides',
      'Cube of their corresponding sides',
      'Square root of their corresponding sides'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By VI.20, similar figures have areas in the duplicate (squared) ratio of corresponding sides. Since a^2 + b^2 = c^2 for a right triangle, any similar figures on sides a, b, c satisfy the same additive relationship for areas.',
  },
];
