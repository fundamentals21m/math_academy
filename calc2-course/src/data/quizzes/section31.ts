import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A square matrix $A$ is nonsingular if and only if:',
    options: [
      '$0$ is an eigenvalue of $A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A matrix is nonsingular iff $\\det A \\neq 0$ iff $Ax = 0$ has only the trivial solution iff $0$ is not an eigenvalue.',
  },
      'All eigenvalues of $A$ are positive',
      'The trace of $A$ is nonzero',
      '$0$ is not an eigenvalue of $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A matrix is nonsingular iff $\\det A \\neq 0$ iff $Ax = 0$ has only the trivial solution iff $0$ is not an eigenvalue.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A matrix is nonsingular iff $\\det A \\neq 0$ iff $Ax = 0$ has only the trivial solution iff $0$ is not an eigenvalue.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A$ is nonsingular with eigenvalue $\\lambda = 4$, what is the corresponding eigenvalue of $A^{-1}$?',
    options: [
      '$-4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $Ax = \\lambda x$, then $x = A^{-1}(\\lambda x) = \\lambda A^{-1}x$, so $A^{-1}x = (1/\\lambda)x$. Thus $A^{-1}$ has eigenvalue $1/4$.',
  },
      '$1/4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $Ax = \\lambda x$, then $x = A^{-1}(\\lambda x) = \\lambda A^{-1}x$, so $A^{-1}x = (1/\\lambda)x$. Thus $A^{-1}$ has eigenvalue $1/4$.',
  },
      '$4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $Ax = \\lambda x$, then $x = A^{-1}(\\lambda x) = \\lambda A^{-1}x$, so $A^{-1}x = (1/\\lambda)x$. Thus $A^{-1}$ has eigenvalue $1/4$.',
  },
      '$-1/4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $Ax = \\lambda x$, then $x = A^{-1}(\\lambda x) = \\lambda A^{-1}x$, so $A^{-1}x = (1/\\lambda)x$. Thus $A^{-1}$ has eigenvalue $1/4$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $Ax = \\lambda x$, then $x = A^{-1}(\\lambda x) = \\lambda A^{-1}x$, so $A^{-1}x = (1/\\lambda)x$. Thus $A^{-1}$ has eigenvalue $1/4$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $x$ is an eigenvector of $T$ with eigenvalue $\\lambda$, then $x$ is an eigenvector of $T^3$ with eigenvalue:',
    options: [
      '$\\lambda^3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By induction, $T^n(x) = \\lambda^n x$. So $T^3(x) = \\lambda^3 x$, meaning the eigenvalue is $\\lambda^3$.',
  },
      '$3\\lambda
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By induction, $T^n(x) = \\lambda^n x$. So $T^3(x) = \\lambda^3 x$, meaning the eigenvalue is $\\lambda^3$.',
  },
      '$\\lambda + 3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By induction, $T^n(x) = \\lambda^n x$. So $T^3(x) = \\lambda^3 x$, meaning the eigenvalue is $\\lambda^3$.',
  },
      '$\\sqrt[3]{\\lambda}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By induction, $T^n(x) = \\lambda^n x$. So $T^3(x) = \\lambda^3 x$, meaning the eigenvalue is $\\lambda^3$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By induction, $T^n(x) = \\lambda^n x$. So $T^3(x) = \\lambda^3 x$, meaning the eigenvalue is $\\lambda^3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ is a real matrix with $A^2 = -I$, which of the following must be true?',
    options: [
      '$A$ is singular',
      '$A$ has a real eigenvalue',
      'The dimension $n$ must be even',
      '$\\det A = -1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If $A^2 = -I$, any eigenvalue $\\lambda$ satisfies $\\lambda^2 = -1$, so no real eigenvalues exist. Complex eigenvalues come in conjugate pairs, so $n$ must be even.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If $A^2 = -I$, any eigenvalue $\\lambda$ satisfies $\\lambda^2 = -1$, so no real eigenvalues exist. Complex eigenvalues come in conjugate pairs, so $n$ must be even.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A subspace $U$ is invariant under $T$ if:',
    options: [
      '$T$ maps every vector in $U$ to zero',
      '$T$ maps every vector in $U$ to a vector in $U
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A subspace $U$ is invariant under $T$ if $T(u) \\in U$ for all $u \\in U$. In particular, every eigenspace is an invariant subspace.',
  },
      '$T$ is the identity on $U
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A subspace $U$ is invariant under $T$ if $T(u) \\in U$ for all $u \\in U$. In particular, every eigenspace is an invariant subspace.',
  },
      '$U$ is the entire space',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A subspace $U$ is invariant under $T$ if $T(u) \\in U$ for all $u \\in U$. In particular, every eigenspace is an invariant subspace.',
  },
];
