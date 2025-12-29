import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A vector in $\\mathbb{R}^n$ is:',
    options: [
      'A single real number',
      'An ordered $n$-tuple of real numbers',
      'A matrix',
      'A function'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Vectors in $\\mathbb{R}^n$ are $n$-tuples: $(x_1, x_2, ..., x_n)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Vector addition $(a_1, a_2) + (b_1, b_2) = ?$',
    options: [
      '$(a_1 b_1, a_2 b_2)$',
      '$(a_1 + b_1, a_2 + b_2)$',
      '$(a_1 - b_1, a_2 - b_2)$',
      '$a_1 + a_2 + b_1 + b_2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Add componentwise.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Scalar multiplication $c(a_1, a_2) = ?$',
    options: [
      '$(ca_1, a_2)$',
      '$(a_1, ca_2)$',
      '$(ca_1, ca_2)$',
      '$(c + a_1, c + a_2)$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiply each component by the scalar.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The zero vector in $\\mathbb{R}^3$ is:',
    options: [
      '$(1, 1, 1)$',
      '$(0, 0, 0)$',
      '$0$',
      'Undefined'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zero vector: all components are 0.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $\\mathbf{u} = (2, 3)$ and $\\mathbf{v} = (1, -1)$, what is the first component of $\\mathbf{u} + \\mathbf{v}$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$(2, 3) + (1, -1) = (3, 2)$. First component is 3.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$\\mathbb{R}^n$ with vector addition and scalar multiplication forms:',
    options: [
      'A field',
      'A vector space',
      'A group only',
      'A ring'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{R}^n$ is the prototypical vector space.',
  },
];
