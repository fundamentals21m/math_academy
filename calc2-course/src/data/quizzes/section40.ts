import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to the Diagonalization Theorem for Hermitian matrices, every Hermitian matrix $A$ satisfies:',
    options: [
      '$A = C \\Lambda C$ where $\\Lambda$ is diagonal',
      '$A = \\Lambda C$ where $\\Lambda$ is diagonal',
      '$C = A \\Lambda A^{-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The theorem states $\\Lambda = C^{-1}AC$ where $\\Lambda$ is diagonal and the diagonalizing matrix satisfies $C^{-1} = C^*$ (unitary).',
  },
      '$\\Lambda = C^{-1}AC$ where $C^{-1} = C^*
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The theorem states $\\Lambda = C^{-1}AC$ where $\\Lambda$ is diagonal and the diagonalizing matrix satisfies $C^{-1} = C^*$ (unitary).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The theorem states $\\Lambda = C^{-1}AC$ where $\\Lambda$ is diagonal and the diagonalizing matrix satisfies $C^{-1} = C^*$ (unitary).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To find the diagonalizing matrix $C$ for a Hermitian matrix:',
    options: [
      'Use the eigenvalues as columns',
      'Use orthonormal eigenvectors as columns',
      'Use the matrix $A$ itself',
      'Use the identity matrix'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The columns of $C$ are orthonormal eigenvectors $u_1, \\ldots, u_n$. The orthonormality gives $C^{-1} = C^*$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the real symmetric matrix $A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 5 \\end{bmatrix}$, the eigenvalues are $1$ and $6$. What is $\\text{tr}\\, A$?',
    options: [
      '$7
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = 1 + 6 = 7$. We can verify: $2 + 5 = 7$.',
  },
      '$5
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = 1 + 6 = 7$. We can verify: $2 + 5 = 7$.',
  },
      '$6
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = 1 + 6 = 7$. We can verify: $2 + 5 = 7$.',
  },
      '$8
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = 1 + 6 = 7$. We can verify: $2 + 5 = 7$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = 1 + 6 = 7$. We can verify: $2 + 5 = 7$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every real symmetric matrix can be diagonalized by:',
    options: [
      'Any invertible matrix',
      'A unitary matrix only',
      'A real orthogonal matrix',
      'A diagonal matrix'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Real symmetric matrices have real eigenvalues and can have real orthonormal eigenvectors, so the diagonalizing matrix can be real orthogonal.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The condition $C^{-1} = C^*$ means that the diagonalizing transformation:',
    options: [
      'Is not invertible',
      'Has determinant zero',
      'Is the identity',
      'Preserves inner products'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$C^{-1} = C^*$ defines a unitary matrix. Unitary matrices preserve inner products: $(Cx, Cy) = (x, C^*Cy) = (x, y)$.',
  },
];
