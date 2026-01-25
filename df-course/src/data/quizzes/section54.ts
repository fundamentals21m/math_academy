import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A vector space over a field $F$ is:',
    options: [
      'An $F$-module',
      'A ring',
      'A group',
      'A field',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A vector space over $F$ is precisely an $F$-module. The module axioms specialize to the vector space axioms when the ring is a field.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $V$ is a finite-dimensional vector space over $F$, then any linearly independent set can be:',
    options: [
      'Reduced to a basis',
      'Neither extended nor reduced',
      'Extended to a basis',
      'Only extended if $F$ is finite',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A fundamental theorem: any linearly independent set in a finite-dimensional vector space can be extended to a basis. Similarly, any spanning set contains a basis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two finite-dimensional vector spaces over $F$ are isomorphic if and only if:',
    options: [
      'They have the same basis',
      'They have the same dimension',
      'One is a subspace of the other',
      'They are both zero',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Dimension is a complete invariant for finite-dimensional vector spaces: $V \\cong W$ iff $\\dim(V) = \\dim(W)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $W$ is a subspace of finite-dimensional $V$, then $\\dim(V/W) = $',
    options: [
      '$\\dim(V) + \\dim(W)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The dimension formula gives $\\dim(V) = \\dim(W) + \\dim(V/W)$, so $\\dim(V/W) = \\dim(V) - \\dim(W)$.',
  },
      '$\\dim(V) - \\dim(W)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dimension formula gives $\\dim(V) = \\dim(W) + \\dim(V/W)$, so $\\dim(V/W) = \\dim(V) - \\dim(W)$.',
  },
      '$\\dim(V) \\cdot \\dim(W)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dimension formula gives $\\dim(V) = \\dim(W) + \\dim(V/W)$, so $\\dim(V/W) = \\dim(V) - \\dim(W)$.',
  },
      '$\\dim(W)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dimension formula gives $\\dim(V) = \\dim(W) + \\dim(V/W)$, so $\\dim(V/W) = \\dim(V) - \\dim(W)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dimension formula gives $\\dim(V) = \\dim(W) + \\dim(V/W)$, so $\\dim(V/W) = \\dim(V) - \\dim(W)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The dimension of $\\mathbb{R}^3$ as a vector space over $\\mathbb{R}$ is:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^3$ has the standard basis $\\{(1,0,0), (0,1,0), (0,0,1)\\}$, which has $3$ elements. So $\\dim_\\mathbb{R}(\\mathbb{R}^3) = 3$.',
  },
      'Infinite',
      '$3
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^3$ has the standard basis $\\{(1,0,0), (0,1,0), (0,0,1)\\}$, which has $3$ elements. So $\\dim_\\mathbb{R}(\\mathbb{R}^3) = 3$.',
  },
      '$9
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^3$ has the standard basis $\\{(1,0,0), (0,1,0), (0,0,1)\\}$, which has $3$ elements. So $\\dim_\\mathbb{R}(\\mathbb{R}^3) = 3$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^3$ has the standard basis $\\{(1,0,0), (0,1,0), (0,0,1)\\}$, which has $3$ elements. So $\\dim_\\mathbb{R}(\\mathbb{R}^3) = 3$.',
  },
];
