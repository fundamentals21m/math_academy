import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A real square matrix $A$ is orthogonal if:',
    options: [
      '$A A^t = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An orthogonal matrix satisfies $AA^t = I$, which means $A^{-1} = A^t$.',
  },
      '$A A^* = I
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An orthogonal matrix satisfies $AA^t = I$, which means $A^{-1} = A^t$.',
  },
      '$A^2 = I
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An orthogonal matrix satisfies $AA^t = I$, which means $A^{-1} = A^t$.',
  },
      '$A = A^t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An orthogonal matrix satisfies $AA^t = I$, which means $A^{-1} = A^t$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An orthogonal matrix satisfies $AA^t = I$, which means $A^{-1} = A^t$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an orthogonal matrix, $\\det A = $?',
    options: [
      '$0$ or $1$',
      'Any real number',
      '$1$ or $-1$',
      '$1$ only'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$(\\det A)^2 = \\det(AA^t) = \\det I = 1$, so $\\det A = \\pm 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A proper orthogonal matrix (rotation) has:',
    options: [
      '$\\det A = -1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A proper orthogonal matrix (rotation) has $\\det A = +1$. An improper one (reflection) has $\\det A = -1$.',
  },
      '$\\det A = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A proper orthogonal matrix (rotation) has $\\det A = +1$. An improper one (reflection) has $\\det A = -1$.',
  },
      '$A = I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A proper orthogonal matrix (rotation) has $\\det A = +1$. An improper one (reflection) has $\\det A = -1$.',
  },
      '$\\det A = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A proper orthogonal matrix (rotation) has $\\det A = +1$. An improper one (reflection) has $\\det A = -1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A proper orthogonal matrix (rotation) has $\\det A = +1$. An improper one (reflection) has $\\det A = -1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The $2 \\times 2$ rotation matrix $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$ is:',
    options: [
      'Orthogonal and proper',
      'Only orthogonal',
      'Orthogonal and improper',
      'Not orthogonal'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The columns are orthonormal, so it\'s orthogonal. $\\det = \\cos^2\\theta + \\sin^2\\theta = 1 > 0$, so it\'s proper (a rotation).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every real symmetric matrix can be diagonalized by:',
    options: [
      'Any matrix',
      'A complex unitary matrix only',
      'A diagonal matrix',
      'A real orthogonal matrix',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Real symmetric matrices have real eigenvalues and real eigenvectors, so the diagonalizing orthonormal eigenvector matrix is real orthogonal.',
  },
];
