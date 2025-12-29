import type { QuizQuestion } from './types';

export const section93Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set of vectors is orthogonal if:',
    options: [
      'All vectors have the same length',
      'Every pair has inner product zero',
      'They span the space',
      'They are linearly dependent'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Orthogonal: $\\langle \\mathbf{u}_i, \\mathbf{u}_j \\rangle = 0$ for $i \\neq j$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An orthonormal set additionally requires:',
    options: [
      'Vectors are parallel',
      'Each vector has norm 1',
      'The set spans the space',
      'Vectors are dependent'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Orthonormal: orthogonal AND each vector has unit length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Gram-Schmidt process:',
    options: [
      'Makes vectors parallel',
      'Produces an orthogonal (or orthonormal) set from any independent set',
      'Reduces dimension',
      'Computes inverses'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gram-Schmidt orthogonalizes a linearly independent set.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An orthogonal set of nonzero vectors is:',
    options: [
      'Always dependent',
      'Linearly independent',
      'A basis for the whole space',
      'Empty'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nonzero orthogonal vectors are automatically independent.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To normalize a vector $\\mathbf{v}$:',
    options: [
      'Add its components',
      'Divide by its norm: $\\mathbf{v}/\\|\\mathbf{v}\\|$',
      'Multiply by 2',
      'Square each component'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Normalizing: $\\hat{\\mathbf{v}} = \\mathbf{v}/\\|\\mathbf{v}\\|$ has norm 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Coordinates in an orthonormal basis $\\{\\mathbf{e}_1, ..., \\mathbf{e}_n\\}$ are found by:',
    options: [
      'Solving a system of equations',
      'Taking inner products: $c_i = \\langle \\mathbf{v}, \\mathbf{e}_i \\rangle$',
      'Cross products',
      'Random selection'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Orthonormal basis: $\\mathbf{v} = \\sum \\langle \\mathbf{v}, \\mathbf{e}_i \\rangle \\mathbf{e}_i$.',
  },
];
