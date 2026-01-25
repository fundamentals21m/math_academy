import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The determinant of a diagonal matrix equals:',
    options: [
      'The sum of diagonal elements',
      'The largest diagonal element',
      'Zero',
      'The product of diagonal elements',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant of a diagonal matrix is the product of its diagonal elements: $\\det \\text{diag}(a_{11}, \\ldots, a_{nn}) = a_{11} \\cdot a_{22} \\cdots a_{nn}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the determinant of the upper triangular matrix $\\begin{bmatrix} 2 & 3 & 1 \\\\ 0 & -1 & 4 \\\\ 0 & 0 & 5 \\end{bmatrix}$?',
    options: ['$-10$', '$10$', '$6$', '$-6$'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For an upper triangular matrix, the determinant is the product of diagonal elements: $2 \\cdot (-1) \\cdot 5 = -10$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Adding a multiple of one row to another row:',
    options: [
      'Doubles the determinant',
      'Reverses the sign of the determinant',
      'Leaves the determinant unchanged',
      'Sets the determinant to zero'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding a multiple of one row to another is a row operation that leaves the determinant unchanged, making it ideal for reduction to triangular form.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If we multiply one row of a matrix by a nonzero scalar $c$, the determinant is multiplied by:',
    options: [
      '$c^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the homogeneity axiom, scaling one row by $c$ multiplies the determinant by $c$.',
  },
      '$c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the homogeneity axiom, scaling one row by $c$ multiplies the determinant by $c$.',
  },
      '$c^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the homogeneity axiom, scaling one row by $c$ multiplies the determinant by $c$.',
  },
      '$1/c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the homogeneity axiom, scaling one row by $c$ multiplies the determinant by $c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the homogeneity axiom, scaling one row by $c$ multiplies the determinant by $c$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The computational complexity of computing determinants via Gauss-Jordan elimination is:',
    options: [
      '$O(n!)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Gauss-Jordan method has $O(n^3)$ complexity, which is much better than the $O(n!)$ complexity of naive cofactor expansion.',
  },
      '$O(n^3)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Gauss-Jordan method has $O(n^3)$ complexity, which is much better than the $O(n!)$ complexity of naive cofactor expansion.',
  },
      '$O(n^2)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Gauss-Jordan method has $O(n^3)$ complexity, which is much better than the $O(n!)$ complexity of naive cofactor expansion.',
  },
      '$O(2^n)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Gauss-Jordan method has $O(n^3)$ complexity, which is much better than the $O(n!)$ complexity of naive cofactor expansion.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Gauss-Jordan method has $O(n^3)$ complexity, which is much better than the $O(n!)$ complexity of naive cofactor expansion.',
  },
];
