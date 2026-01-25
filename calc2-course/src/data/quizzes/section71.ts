import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Putzer\'s method expresses $e^{tA}$ as a sum involving:',
    options: [
      'The eigenvalues and eigenvectors of $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Putzer\'s method uses eigenvalues $\\lambda_1, \\ldots, \\lambda_n$ and recursively defined matrices $P_k$ to compute $e^{tA}$.',
  },
      'Trigonometric functions of the entries of $A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Putzer\'s method uses eigenvalues $\\lambda_1, \\ldots, \\lambda_n$ and recursively defined matrices $P_k$ to compute $e^{tA}$.',
  },
      'The eigenvalues of $A$ and matrices $P_k$ defined recursively',
      'Only the trace and determinant of $A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Putzer\'s method uses eigenvalues $\\lambda_1, \\ldots, \\lambda_n$ and recursively defined matrices $P_k$ to compute $e^{tA}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Putzer\'s method uses eigenvalues $\\lambda_1, \\ldots, \\lambda_n$ and recursively defined matrices $P_k$ to compute $e^{tA}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Putzer\'s method, the matrices $P_k$ are defined by:',
    options: [
      '$P_k = A^k
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrices are built recursively: $P_0 = I$ and $P_k = (A - \\lambda_k I)P_{k-1}$, using the eigenvalues in sequence.',
  },
      '$P_0 = I$, $P_k = (A - \\lambda_k I)P_{k-1}$ for $k \\geq 1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The matrices are built recursively: $P_0 = I$ and $P_k = (A - \\lambda_k I)P_{k-1}$, using the eigenvalues in sequence.',
  },
      '$P_k = e^{\\lambda_k A}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The matrices are built recursively: $P_0 = I$ and $P_k = (A - \\lambda_k I)P_{k-1}$, using the eigenvalues in sequence.',
  },
      '$P_k = \\lambda_k^k I
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The matrices are built recursively: $P_0 = I$ and $P_k = (A - \\lambda_k I)P_{k-1}$, using the eigenvalues in sequence.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The matrices are built recursively: $P_0 = I$ and $P_k = (A - \\lambda_k I)P_{k-1}$, using the eigenvalues in sequence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Putzer\'s formula $e^{tA} = \\sum_{k=0}^{n-1} r_{k+1}(t)P_k$ involves scalar functions $r_k(t)$ that satisfy:',
    options: [
      'Algebraic equations',
      '$r_k(t) = e^{\\lambda_k t}$ directly',
      'The heat equation',
      'A triangular system of first-order ODEs',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The functions $r_k(t)$ satisfy $r_1\' = \\lambda_1 r_1$, $r_1(0) = 1$, and $r_k\' = \\lambda_k r_k + r_{k-1}$, $r_k(0) = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An advantage of Putzer\'s method is that it:',
    options: [
      'Only works for diagonalizable matrices',
      'Requires computing eigenvectors',
      'Works for any matrix using only eigenvalues (with multiplicities)',
      'Avoids using eigenvalues entirely'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Putzer\'s method needs only the eigenvalues (including repeated ones), not the eigenvectors, making it practical for defective matrices.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a $2 \\times 2$ matrix with repeated eigenvalue $\\lambda$, Putzer\'s method gives $P_0 = I$, $P_1 =$',
    options: [
      '$A - \\lambda I
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the recursion, $P_1 = (A - \\lambda_1 I)P_0 = A - \\lambda I$.',
  },
      '$A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the recursion, $P_1 = (A - \\lambda_1 I)P_0 = A - \\lambda I$.',
  },
      '$A^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the recursion, $P_1 = (A - \\lambda_1 I)P_0 = A - \\lambda I$.',
  },
      '$\\lambda I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the recursion, $P_1 = (A - \\lambda_1 I)P_0 = A - \\lambda I$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the recursion, $P_1 = (A - \\lambda_1 I)P_0 = A - \\lambda I$.',
  },
];
