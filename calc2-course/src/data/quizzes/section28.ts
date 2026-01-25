import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To find eigenvectors for eigenvalue $\\lambda$, we solve:',
    options: [
      '$(\\lambda I - A)X = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Eigenvectors satisfy $AX = \\lambda X$, which rearranges to $(\\lambda I - A)X = 0$. We find nontrivial solutions to this homogeneous system.',
  },
      '$AX = X
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Eigenvectors satisfy $AX = \\lambda X$, which rearranges to $(\\lambda I - A)X = 0$. We find nontrivial solutions to this homogeneous system.',
  },
      '$AX = \\lambda
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Eigenvectors satisfy $AX = \\lambda X$, which rearranges to $(\\lambda I - A)X = 0$. We find nontrivial solutions to this homogeneous system.',
  },
      '$\\det(A - X) = \\lambda
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Eigenvectors satisfy $AX = \\lambda X$, which rearranges to $(\\lambda I - A)X = 0$. We find nontrivial solutions to this homogeneous system.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Eigenvectors satisfy $AX = \\lambda X$, which rearranges to $(\\lambda I - A)X = 0$. We find nontrivial solutions to this homogeneous system.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Eigenvectors corresponding to distinct eigenvalues are:',
    options: [
      'Parallel',
      'Linearly independent',
      'Orthogonal',
      'Equal',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A fundamental theorem states that eigenvectors corresponding to distinct eigenvalues are linearly independent. This is key for diagonalization.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If an eigenvalue has algebraic multiplicity 2, its eigenspace:',
    options: [
      'Must have dimension 1',
      'Must have dimension 2',
      'Has dimension 1 or 2',
      'Has dimension 0',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The geometric multiplicity (dimension of eigenspace) is at least 1 and at most the algebraic multiplicity. So for algebraic multiplicity 2, the eigenspace dimension is 1 or 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A matrix with $n$ distinct eigenvalues is:',
    options: [
      'Always diagonalizable',
      'Always singular',
      'Never diagonalizable',
      'Always the identity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When all $n$ eigenvalues are distinct, the $n$ corresponding eigenvectors are linearly independent, forming a basis. The matrix is then diagonalizable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$, the eigenspace for $\\lambda = 2$ has dimension:',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The matrix $(2I - A) = \\begin{bmatrix} 0 & -1 \\\\ 0 & 0 \\end{bmatrix}$ has rank 1, so its null space has dimension $2 - 1 = 1$. Despite $\\lambda = 2$ having multiplicity 2, the eigenspace is only 1-dimensional.',
  },
      '$2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrix $(2I - A) = \\begin{bmatrix} 0 & -1 \\\\ 0 & 0 \\end{bmatrix}$ has rank 1, so its null space has dimension $2 - 1 = 1$. Despite $\\lambda = 2$ having multiplicity 2, the eigenspace is only 1-dimensional.',
  },
      'Undefined',
      '$1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrix $(2I - A) = \\begin{bmatrix} 0 & -1 \\\\ 0 & 0 \\end{bmatrix}$ has rank 1, so its null space has dimension $2 - 1 = 1$. Despite $\\lambda = 2$ having multiplicity 2, the eigenspace is only 1-dimensional.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrix $(2I - A) = \\begin{bmatrix} 0 & -1 \\\\ 0 & 0 \\end{bmatrix}$ has rank 1, so its null space has dimension $2 - 1 = 1$. Despite $\\lambda = 2$ having multiplicity 2, the eigenspace is only 1-dimensional.',
  },
];
