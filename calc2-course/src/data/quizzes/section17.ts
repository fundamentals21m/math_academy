import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A system of $m$ linear equations in $n$ unknowns can be written in matrix form as:',
    options: [
      '$A + X = B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The matrix equation $AX = B$ represents the system, where $A$ is the $m \\times n$ coefficient matrix, $X$ is the column of unknowns, and $B$ is the column of constants.',
  },
      '$AX = B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The matrix equation $AX = B$ represents the system, where $A$ is the $m \\times n$ coefficient matrix, $X$ is the column of unknowns, and $B$ is the column of constants.',
  },
      '$XA = B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The matrix equation $AX = B$ represents the system, where $A$ is the $m \\times n$ coefficient matrix, $X$ is the column of unknowns, and $B$ is the column of constants.',
  },
      '$A = XB
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The matrix equation $AX = B$ represents the system, where $A$ is the $m \\times n$ coefficient matrix, $X$ is the column of unknowns, and $B$ is the column of constants.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The matrix equation $AX = B$ represents the system, where $A$ is the $m \\times n$ coefficient matrix, $X$ is the column of unknowns, and $B$ is the column of constants.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A homogeneous system $AX = 0$:',
    options: [
      'Never has solutions',
      'Has exactly one solution',
      'Has infinitely many solutions',
      'Always has at least the trivial solution $X = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A homogeneous system always has at least the trivial solution $X = 0$. It may have additional nontrivial solutions if the columns of $A$ are dependent.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A homogeneous system always has at least the trivial solution $X = 0$. It may have additional nontrivial solutions if the columns of $A$ are dependent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $m < n$ (fewer equations than unknowns), a homogeneous system $AX = 0$:',
    options: [
      'Always has nontrivial solutions',
      'Has only the trivial solution',
      'Has no solutions',
      'May or may not have nontrivial solutions',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $m < n$, then rank$(A) \\leq m < n$, so nullity = $n$ - rank $\\geq n - m > 0$. This means there are nontrivial solutions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The general solution to $AX = B$ (when solutions exist) has the form:',
    options: [
      '$X = X_p + X_h$ (particular plus homogeneous)',
      '$X = X_h$ (homogeneous solution only)',
      '$X = X_p - X_h
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $X_p$ is a particular solution to $AX = B$, then the general solution is $X = X_p + X_h$ where $X_h$ is any solution to $AX = 0$.',
  },
      '$X = X_p \\cdot X_h
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $X_p$ is a particular solution to $AX = B$, then the general solution is $X = X_p + X_h$ where $X_h$ is any solution to $AX = 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $X_p$ is a particular solution to $AX = B$, then the general solution is $X = X_p + X_h$ where $X_h$ is any solution to $AX = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an $n \\times n$ matrix $A$, the system $AX = B$ has a unique solution for every $B$ if and only if:',
    options: [
      '$A$ has all positive entries',
      '$A$ is symmetric',
      '$A$ has rank less than $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Unique solutions for all $B$ require $A$ to be invertible, which happens iff the columns are independent, iff rank$(A) = n$, iff $AX = 0$ has only the trivial solution.',
  },
      'The columns of $A$ are linearly independent',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unique solutions for all $B$ require $A$ to be invertible, which happens iff the columns are independent, iff rank$(A) = n$, iff $AX = 0$ has only the trivial solution.',
  },
];
