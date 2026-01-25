import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A square matrix $A$ is unitary if:',
    options: [
      '$A A^t = I
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A unitary matrix satisfies $AA^* = I$, which means $A^{-1} = A^*$.',
  },
      '$A A^* = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A unitary matrix satisfies $AA^* = I$, which means $A^{-1} = A^*$.',
  },
      '$A^2 = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A unitary matrix satisfies $AA^* = I$, which means $A^{-1} = A^*$.',
  },
      '$A + A^* = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A unitary matrix satisfies $AA^* = I$, which means $A^{-1} = A^*$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A unitary matrix satisfies $AA^* = I$, which means $A^{-1} = A^*$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A matrix is unitary if and only if its columns form:',
    options: [
      'A linearly dependent set',
      'An orthogonal set',
      'A basis for $\\mathbb{R}^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The condition $AA^* = I$ is equivalent to $(c_i, c_j) = \\delta_{ij}$ for columns $c_i$, meaning the columns are orthonormal.',
  },
      'An orthonormal set',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The condition $AA^* = I$ is equivalent to $(c_i, c_j) = \\delta_{ij}$ for columns $c_i$, meaning the columns are orthonormal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ is unitary, then $|\\det A| = $?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$1 = \\det(AA^*) = \\det A \\cdot \\overline{\\det A} = |\\det A|^2$, so $|\\det A| = 1$.',
  },
      '$-1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$1 = \\det(AA^*) = \\det A \\cdot \\overline{\\det A} = |\\det A|^2$, so $|\\det A| = 1$.',
  },
      '$n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$1 = \\det(AA^*) = \\det A \\cdot \\overline{\\det A} = |\\det A|^2$, so $|\\det A| = 1$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$1 = \\det(AA^*) = \\det A \\cdot \\overline{\\det A} = |\\det A|^2$, so $|\\det A| = 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$1 = \\det(AA^*) = \\det A \\cdot \\overline{\\det A} = |\\det A|^2$, so $|\\det A| = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Unitary matrices preserve:',
    options: [
      'Only the determinant',
      'Inner products, lengths, and angles',
      'Only the trace',
      'Only eigenvalues',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For unitary $A$: $(Ax, Ay) = (x, A^*Ay) = (x, y)$. This preserves inner products, hence lengths and angles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Fourier matrix $F_n = \\frac{1}{\\sqrt{n}}[\\omega^{jk}]$ where $\\omega = e^{2\\pi i/n}$ is:',
    options: [
      'Unitary',
      'Skew-Hermitian',
      'Hermitian',
      'Orthogonal',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The normalized Fourier matrix is unitary: $F_n F_n^* = I$. Its columns form an orthonormal basis of complex exponentials.',
  },
];
