import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A square matrix $A$ is invertible if there exists a matrix $A^{-1}$ such that:',
    options: [
      '$AA^{-1} = A^{-1}A = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An invertible matrix must satisfy both $AA^{-1} = I$ and $A^{-1}A = I$. The inverse is unique.',
  },
      '$AA^{-1} = I$ only',
      '$A^{-1}A = I$ only',
      '$A + A^{-1} = I
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An invertible matrix must satisfy both $AA^{-1} = I$ and $A^{-1}A = I$. The inverse is unique.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An invertible matrix must satisfy both $AA^{-1} = I$ and $A^{-1}A = I$. The inverse is unique.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is equivalent to $A$ being invertible?',
    options: [
      'The rows of $A$ are dependent',
      'rank$(A) < n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A matrix is invertible iff its columns (or rows) are independent, iff rank$(A) = n$, iff $AX = 0$ has only $X = 0$ as solution, iff the reduced echelon form is $I$.',
  },
      '$AX = 0$ has only the trivial solution',
      '$A$ has some zero entries',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A matrix is invertible iff its columns (or rows) are independent, iff rank$(A) = n$, iff $AX = 0$ has only $X = 0$ as solution, iff the reduced echelon form is $I$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To compute $A^{-1}$ using row operations, we reduce the augmented matrix:',
    options: [
      '$[A | I]$ to $[I | A^{-1}]$',
      '$[A | A]$ to $[I | I]$',
      '$[A | 0]$ to $[I | A^{-1}]$',
      '$[I | A]$ to $[A^{-1} | I]$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We form $[A | I]$ and apply row operations until the left side becomes $I$. The right side then contains $A^{-1}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are both invertible $n \\times n$ matrices, then $(AB)^{-1}$ equals:',
    options: [
      '$A^{-1}B^{-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This can be verified by $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
  },
      '$AB
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This can be verified by $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
  },
      '$(A^{-1})(B^{-1})^T
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This can be verified by $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
  },
      '$B^{-1}A^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This can be verified by $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This can be verified by $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A$ is invertible, the unique solution to $AX = B$ is:',
    options: [
      '$X = AB
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of $AX = B$ by $A^{-1}$ on the left gives $X = A^{-1}B$.',
  },
      '$X = A^{-1}B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of $AX = B$ by $A^{-1}$ on the left gives $X = A^{-1}B$.',
  },
      '$X = BA^{-1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of $AX = B$ by $A^{-1}$ on the left gives $X = A^{-1}B$.',
  },
      '$X = B - A
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of $AX = B$ by $A^{-1}$ on the left gives $X = A^{-1}B$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of $AX = B$ by $A^{-1}$ on the left gives $X = A^{-1}B$.',
  },
];
