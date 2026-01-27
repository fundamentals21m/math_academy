import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In spherical geometry, the analogue of a straight line is:',
    options: [
      'Any circle on the sphere',
      'A line of latitude',
      'A spiral',
      'A great circle'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Great circles (intersections of planes through the center) serve as "lines" in spherical geometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Any two great circles on a sphere:',
    options: [
      'Intersect at exactly two antipodal points',
      'Never intersect',
      'Intersect at exactly one point',
      'May or may not intersect'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Great circles always intersect at two antipodal points—there are no parallel lines on the sphere.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The angle sum of a spherical triangle is:',
    options: [
      'Less than 180°',
      'Greater than 180°',
      'Exactly 180°',
      'Always 270°'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Spherical triangles have angle sums exceeding 180°, with the excess proportional to area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The isometry group of the sphere $S^2$ is isomorphic to:',
    options: [
      'SO(2)',
      'SO(3)',
      'O(3)',
      'O(2)'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Every isometry of S² extends to an orthogonal transformation of ℝ³, giving Isom(S²) ≅ O(3).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two points on a sphere that are diametrically opposite are called:',
    options: [
      'Parallel',
      'Conjugate',
      'Complementary',
      'Antipodal'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Antipodal points are diametrically opposite, and infinitely many great circles pass through any antipodal pair.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every isometry of $S^2$ is a product of at most:',
    options: [
      'Three reflections',
      'One reflection',
      'Two reflections',
      'Four reflections'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The spherical three reflections theorem: every isometry of S² is at most three reflections in great circles.',
  },
];
