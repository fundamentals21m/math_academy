import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'SO(3) consists of 3×3 orthogonal matrices with determinant:',
    options: [
      '0',
      '1',
      '−1',
      'Any non-zero value'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'SO(3) is the special orthogonal group: orthogonal matrices with det = 1 (rotations only).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In three dimensions, rotations are generally:',
    options: [
      'Commutative',
      'Always about the same axis',
      'Non-commutative',
      'Equal to reflections'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Unlike 2D rotations, 3D rotations do not commute: r₁r₂ ≠ r₂r₁ in general.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The product of two reflections in great circles meeting at points P and P\' with angle $\\theta$ between them is:',
    options: [
      'A reflection',
      'A translation',
      'The identity',
      'A rotation about PP\' through angle $2\\theta$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Two reflections in great circles produce a rotation about their intersection axis by twice the angle between them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every rotation of $S^2$ (except the identity) has:',
    options: [
      'Exactly two fixed points (antipodal)',
      'No fixed points',
      'Exactly one fixed point',
      'Infinitely many fixed points'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A rotation has an axis, which meets S² at two antipodal fixed points.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Rodrigues\' formula gives the image of a vector $\\mathbf{v}$ under rotation about axis $\\mathbf{n}$ using:',
    options: [
      'Matrix multiplication only',
      'Dot product, cross product, and angle',
      'Quaternion multiplication only',
      'Translation and scaling'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rodrigues\' formula uses v, n·v, n×v, and cos θ, sin θ to compute the rotated vector.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The group SO(3) is homeomorphic to:',
    options: [
      'The 3-sphere $S^3$',
      'Euclidean space $\\mathbb{R}^3$',
      'The real projective space $\\mathbb{R}P^3$',
      'The 2-sphere $S^2$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'SO(3) ≅ ℝP³ because it can be parameterized by a ball with antipodal boundary points identified.',
  },
];
