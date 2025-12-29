import type { QuizQuestion } from './types';

export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Vectors $\\mathbf{v}_1, ..., \\mathbf{v}_k$ are linearly independent if:',
    options: [
      'They are orthogonal',
      'The only solution to $c_1 \\mathbf{v}_1 + ... + c_k \\mathbf{v}_k = \\mathbf{0}$ is $c_1 = ... = c_k = 0$',
      'They span $\\mathbb{R}^n$',
      'They have the same length'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linearly independent: trivial combination is the only way to get zero.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Vectors are linearly dependent if:',
    options: [
      'They are all zero',
      'One can be written as a linear combination of the others',
      'They are orthogonal',
      'They span $\\mathbb{R}^n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Dependent: at least one is a linear combo of the others.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A basis for a vector space is:',
    options: [
      'Any spanning set',
      'Any linearly independent set',
      'A linearly independent spanning set',
      'The zero vector'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Basis = linearly independent AND spans the space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The standard basis for $\\mathbb{R}^3$ is:',
    options: [
      '$(1, 0, 0)$ only',
      '$(1, 1, 1), (1, 1, 0), (1, 0, 0)$',
      '$(1, 0, 0), (0, 1, 0), (0, 0, 1)$',
      '$(1, 2, 3)$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Standard basis: unit vectors along each axis.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many vectors are in any basis for $\\mathbb{R}^4$?',
    correctAnswer: 4,
    numericRange: { min: 3, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation: 'The dimension of $\\mathbb{R}^n$ is $n$; any basis has $n$ vectors.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $(1, 2)$ and $(2, 4)$ are given, they are:',
    options: [
      'Linearly independent',
      'Linearly dependent',
      'Orthogonal',
      'A basis for $\\mathbb{R}^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(2, 4) = 2(1, 2)$, so they are dependent.',
  },
];
