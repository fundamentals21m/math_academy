import type { QuizQuestion } from './types';

export const section100Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A matrix $A$ is invertible if there exists $B$ such that:',
    options: [
      '$A + B = I$',
      '$AB = BA = I$',
      '$AB = 0$',
      '$A = B$'
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
      'Its rank equals its size',
      'It has more rows than columns',
      'It is diagonal',
      'All entries are nonzero'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Invertible iff full rank (rank = $n$ for $n \\times n$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The inverse of a $2 \\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ involves:',
    options: [
      'Adding entries',
      'The determinant $ad - bc$',
      'The trace $a + d$',
      'Only the diagonal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ is invertible, the system $A\\mathbf{x} = \\mathbf{b}$ has:',
    options: [
      'No solution',
      'Infinitely many solutions',
      'A unique solution $\\mathbf{x} = A^{-1}\\mathbf{b}$',
      'Two solutions'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Invertible $A$ gives unique solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$(AB)^{-1} = ?$ (assuming both inverses exist)',
    options: [
      '$A^{-1}B^{-1}$',
      '$B^{-1}A^{-1}$',
      '$AB$',
      '$(A^{-1})(B^{-1})^T$'
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
      'Never invertible',
      'Invertible if square',
      'The identity matrix'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zero row/column means rank < $n$, so not invertible.',
  },
];
