import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two $m \\times n$ matrices $A$ and $B$ are equal if and only if:',
    options: [
      'They have the same size',
      '$a_{ik} = b_{ik}$ for all $i, k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Matrices are equal if and only if they have the same size AND all corresponding entries are equal: $a_{ik} = b_{ik}$ for all $i, k$.',
  },
      'They have the same determinant',
      'They represent the same transformation',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Matrices are equal if and only if they have the same size AND all corresponding entries are equal: $a_{ik} = b_{ik}$ for all $i, k$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the dimension of the space of all $3 \\times 4$ matrices?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: 'The space of $m \\times n$ matrices has dimension $mn$. For $3 \\times 4$ matrices, the dimension is $3 \\times 4 = 12$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A $1 \\times n$ matrix is called a:',
    options: [
      'Row vector',
      'Column vector',
      'Square matrix',
      'Diagonal matrix'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A $1 \\times n$ matrix (1 row, $n$ columns) is called a row vector. An $m \\times 1$ matrix is a column vector.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The transpose of an $m \\times n$ matrix $A$ is:',
    options: [
      'An $m \\times n$ matrix',
      'An $m \\times m$ matrix',
      'An $n \\times m$ matrix',
      'An $n \\times n$ matrix',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The transpose $A^T$ interchanges rows and columns, so an $m \\times n$ matrix becomes an $n \\times m$ matrix.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which property does $(A^T)^T$ satisfy?',
    options: [
      '$(A^T)^T = A^T
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Taking the transpose twice returns the original matrix: $(A^T)^T = A$.',
  },
      '$(A^T)^T = I
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Taking the transpose twice returns the original matrix: $(A^T)^T = A$.',
  },
      '$(A^T)^T = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Taking the transpose twice returns the original matrix: $(A^T)^T = A$.',
  },
      '$(A^T)^T = A
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Taking the transpose twice returns the original matrix: $(A^T)^T = A$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Taking the transpose twice returns the original matrix: $(A^T)^T = A$.',
  },
];
