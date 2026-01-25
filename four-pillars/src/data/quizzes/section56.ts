import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Classical Chinese and Japanese art often uses:',
    options: [
      'Affine projection (parallels preserved)',
      'Vanishing points at infinity',
      'No perspective at all',
      'Spherical perspective',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Asian art typically uses projection from infinity (affine maps), preserving parallel lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hamilton discovered the quaternions in:',
    options: [
      '1899',
      '1843',
      '1799',
      '1930',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hamilton discovered the quaternions on October 16, 1843, famously carving the formula into Brougham Bridge.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A number system on $\\mathbb{R}^3$ with multiplicative absolute value is:',
    options: [
      'The quaternions',
      'The complex numbers',
      'The octonions',
      'Impossible',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Such number systems exist only in dimensions 1, 2, 4, and 8 (ℝ, ℂ, ℍ, 𝕆).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The 24-cell is exceptional because it exists only in:',
    options: [
      '5 dimensions',
      '3 dimensions',
      '4 dimensions',
      'All dimensions ≥ 4'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The 24-cell is one of three exceptional regular polytopes that exist only in 4D.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Klein\'s Erlangen program, Euclidean geometry studies invariants of:',
    options: [
      'The projective group',
      'All transformations',
      'The affine group',
      'The isometry group'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Euclidean geometry = invariants of isometries; affine = invariants of affine maps; projective = invariants of projective maps.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The 600-cell has 120 vertices that correspond to the quaternions representing rotations of:',
    options: [
      'The icosahedron',
      'The cube',
      'The tetrahedron',
      'The 24-cell'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The 120 quaternions for the icosahedron form the 600-cell vertices, just as the 24 for the tetrahedron form the 24-cell.',
  },
];
