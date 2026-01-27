import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation of $\\mathbb{R}^2$ always fixes:',
    options: [
      'Every point',
      'The unit circle',
      'No points',
      'The origin'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear transformations satisfy T(0) = 0, so the origin is always fixed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Composition of linear transformations corresponds to:',
    options: [
      'Matrix multiplication',
      'Matrix addition',
      'Matrix subtraction',
      'Taking the inverse'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If T₁ has matrix A₁ and T₂ has matrix A₂, then T₁∘T₂ has matrix A₁A₂.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Affine transformations differ from linear transformations because they can represent:',
    options: [
      'Rotations',
      'Translations',
      'Reflections',
      'Scaling'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linear transformations fix the origin, so translations require affine transformations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A matrix $A$ is orthogonal if:',
    options: [
      '$A^2 = I$',
      '$A + A^T = I$',
      '$A^T A = I$',
      '$\\det(A) = 1$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Orthogonal matrices satisfy AᵀA = I, meaning their transpose equals their inverse.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Homogeneous coordinates represent a 2D affine transformation as a:',
    options: [
      '2×2 matrix',
      '2×3 matrix',
      '4×4 matrix',
      '3×3 matrix'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Homogeneous coordinates lift 2D to 3D, allowing affine maps to be represented as 3×3 linear maps.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\det(A) = -1$ for an orthogonal matrix $A$, then $A$ represents:',
    options: [
      'A reflection',
      'A rotation',
      'A translation',
      'The identity'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Orthogonal matrices with det = 1 are rotations; those with det = −1 are reflections.',
  },
];
