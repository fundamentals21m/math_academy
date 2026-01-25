import type { QuizQuestion } from './types';

export const section100Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A matrix $A$ is invertible if there exists $B$ such that:',
    options: [
      '$A + B = I
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Inverse: $AA^{-1} = A^{-1}A = I$.',
  },
      '$AB = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Inverse: $AA^{-1} = A^{-1}A = I$.',
  },
      '$A = B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Inverse: $AA^{-1} = A^{-1}A = I$.',
  },
      '$AB = BA = I
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Inverse: $AA^{-1} = A^{-1}A = I$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Inverse: $AA^{-1} = A^{-1}A = I$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A square matrix is invertible if and only if:',
    options: [
      'It is diagonal',
      'It has more rows than columns',
      'Its rank equals its size',
      'All entries are nonzero'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Invertible iff full rank (rank = $n$ for $n \\times n$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The inverse of a $2 \\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ involves:',
    options: [
      'The determinant $ad - bc
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
  },
      'Adding entries',
      'Only the diagonal',
      'The trace $a + d
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ is invertible, the system $A\\mathbf{x} = \\mathbf{b}$ has:',
    options: [
      'Infinitely many solutions',
      'No solution',
      'A unique solution $\\mathbf{x} = A^{-1}\\mathbf{b}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Invertible $A$ gives unique solution.',
  },
      'Two solutions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Invertible $A$ gives unique solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$(AB)^{-1} = ?$ (assuming both inverses exist)',
    options: [
      '$A^{-1}B^{-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(AB)^{-1} = B^{-1}A^{-1}$ (reverse order).',
  },
      '$AB
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(AB)^{-1} = B^{-1}A^{-1}$ (reverse order).',
  },
      '$(A^{-1})(B^{-1})^T
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(AB)^{-1} = B^{-1}A^{-1}$ (reverse order).',
  },
      '$B^{-1}A^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(AB)^{-1} = B^{-1}A^{-1}$ (reverse order).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(AB)^{-1} = B^{-1}A^{-1}$ (reverse order).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A matrix with a row (or column) of zeros is:',
    options: [
      'Always invertible',
      'Invertible if square',
      'The identity matrix',
      'Never invertible',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Zero row/column means rank < $n$, so not invertible.',
  },
];
