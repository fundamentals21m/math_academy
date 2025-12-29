import type { QuizQuestion } from './types';

export const section99Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if:',
    options: [
      '$A$ is square',
      '$\\mathbf{b}$ is in the column space of $A$',
      '$\\mathbf{b} = \\mathbf{0}$',
      '$A$ has more rows than columns'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Consistent means a solution exists, i.e., $\\mathbf{b} \\in \\text{Col}(A)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Row echelon form (REF) has:',
    options: [
      'All zeros',
      'Leading 1s with zeros below them',
      'No zeros',
      'Only diagonal entries'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'REF: staircase pattern of leading entries.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Gaussian elimination uses:',
    options: [
      'Only row swaps',
      'Elementary row operations to reach REF',
      'Matrix multiplication',
      'Column operations'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gaussian elimination: row operations to simplify the system.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A homogeneous system $A\\mathbf{x} = \\mathbf{0}$:',
    options: [
      'Never has a solution',
      'Always has the trivial solution $\\mathbf{x} = \\mathbf{0}$',
      'Has a unique nonzero solution',
      'Is always inconsistent'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Homogeneous systems always have $\\mathbf{x} = \\mathbf{0}$ as a solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The rank of $A$ equals:',
    options: [
      'The number of rows',
      'The number of pivot positions',
      'The number of columns',
      'The number of zeros'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rank = number of pivots (nonzero rows in REF).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A system has infinitely many solutions when:',
    options: [
      'It is inconsistent',
      'There are free variables (more unknowns than pivots)',
      'rank$(A)$ = number of unknowns',
      'The system is homogeneous with trivial solution only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Free variables lead to infinitely many solutions.',
  },
];
