import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.13 prove about tangent circles?',
    options: [
      'They can touch at multiple points',
      'A circle cannot touch another at more than one point (internally or externally)',
      'Tangent circles always have perpendicular diameters',
      'Tangent circles share a common chord'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.13 proves that two circles can touch at only one point, whether the tangency is internal or external.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is it impossible for two circles to be tangent at two points?',
    options: [
      'It would violate III.10 (circles cut at most at two points)',
      'It would mean the line of centers passes through two points on both circles',
      'If tangent at two points, they would share those points, forcing them to intersect',
      'The tangent line would have to touch at two points'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If "tangent" at two points, both points would be common to both circles, but tangency means touching without crossing, which is impossible at multiple points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'This proposition is necessary for which constructions?',
    options: [
      'Finding the center of a circle',
      'Drawing tangent lines from external points',
      'Any construction involving tangent circles',
      'Inscribing polygons in circles'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.13 establishes the uniqueness of tangent points, essential for any construction involving tangent circles.',
  },
];
