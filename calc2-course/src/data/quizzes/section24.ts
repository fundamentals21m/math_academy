import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cofactor of entry $a_{ij}$ is defined as:',
    options: [
      '$\\det A_{ij}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The cofactor of $a_{ij}$ is $\\text{cof} \\, a_{ij} = (-1)^{i+j} \\det A_{ij}$, where $A_{ij}$ is the minor obtained by deleting row $i$ and column $j$.',
  },
      '$a_{ij} \\det A_{ij}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cofactor of $a_{ij}$ is $\\text{cof} \\, a_{ij} = (-1)^{i+j} \\det A_{ij}$, where $A_{ij}$ is the minor obtained by deleting row $i$ and column $j$.',
  },
      '$(-1)^{i+j} \\det A_{ij}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cofactor of $a_{ij}$ is $\\text{cof} \\, a_{ij} = (-1)^{i+j} \\det A_{ij}$, where $A_{ij}$ is the minor obtained by deleting row $i$ and column $j$.',
  },
      '$(-1)^{ij} \\det A_{ij}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cofactor of $a_{ij}$ is $\\text{cof} \\, a_{ij} = (-1)^{i+j} \\det A_{ij}$, where $A_{ij}$ is the minor obtained by deleting row $i$ and column $j$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cofactor of $a_{ij}$ is $\\text{cof} \\, a_{ij} = (-1)^{i+j} \\det A_{ij}$, where $A_{ij}$ is the minor obtained by deleting row $i$ and column $j$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sign pattern $(-1)^{i+j}$ in cofactor expansion follows which pattern?',
    options: [
      'Checkerboard (alternating $+$ and $-$)',
      'All negative',
      'All positive',
      'First row positive, rest negative'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sign $(-1)^{i+j}$ alternates in a checkerboard pattern: $+$ when $i+j$ is even, $-$ when $i+j$ is odd.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The transpose theorem states that for any square matrix $A$:',
    options: [
      '$\\det A^T = -\\det A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The transpose theorem states $\\det A = \\det A^T$. This establishes symmetry between row and column properties of determinants.',
  },
      '$\\det A^T = (\\det A)^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The transpose theorem states $\\det A = \\det A^T$. This establishes symmetry between row and column properties of determinants.',
  },
      '$\\det A^T = (\\det A)^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The transpose theorem states $\\det A = \\det A^T$. This establishes symmetry between row and column properties of determinants.',
  },
      '$\\det A^T = \\det A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The transpose theorem states $\\det A = \\det A^T$. This establishes symmetry between row and column properties of determinants.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The transpose theorem states $\\det A = \\det A^T$. This establishes symmetry between row and column properties of determinants.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Cofactor expansion along any row or column of a matrix gives:',
    options: [
      'Different values depending on the row/column chosen',
      'The same value (the determinant)',
      'The trace of the matrix',
      'The rank of the matrix',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The cofactor expansion formula gives the same result regardless of which row or column is used for expansion. This is the determinant of the matrix.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The existence of determinants for $n \\times n$ matrices is proved by:',
    options: [
      'Direct calculation',
      'Matrix diagonalization',
      'Induction using cofactor expansion',
      'The Cayley-Hamilton theorem',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Existence is proved by induction: the base case is $n=1$ where $\\det[a_{11}] = a_{11}$, and the inductive step defines the $n \\times n$ determinant via cofactor expansion using $(n-1) \\times (n-1)$ determinants.',
  },
];
