import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A scalar $\\lambda$ is an eigenvalue of $T$ if there exists a nonzero $x$ such that:',
    options: [
      '$T(x) = \\lambda x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $\\lambda$ is an eigenvalue of $T$ if $T(x) = \\lambda x$ for some nonzero vector $x$, called an eigenvector.',
  },
      '$T(x) = x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\lambda$ is an eigenvalue of $T$ if $T(x) = \\lambda x$ for some nonzero vector $x$, called an eigenvector.',
  },
      '$T(x) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\lambda$ is an eigenvalue of $T$ if $T(x) = \\lambda x$ for some nonzero vector $x$, called an eigenvector.',
  },
      '$T(\\lambda) = x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\lambda$ is an eigenvalue of $T$ if $T(x) = \\lambda x$ for some nonzero vector $x$, called an eigenvector.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\lambda$ is an eigenvalue of $T$ if $T(x) = \\lambda x$ for some nonzero vector $x$, called an eigenvector.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the zero vector excluded from being an eigenvector?',
    options: [
      '$T(0)$ is undefined',
      'The zero vector would have infinitely many eigenvalues',
      'The zero vector is not in the domain of $T
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $T(0) = \\lambda \\cdot 0 = 0$ for any $\\lambda$, the zero vector would satisfy the eigenvector equation for every scalar. Excluding it ensures each eigenvector has a unique eigenvalue.',
  },
      'Eigenvalues must be positive',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $T(0) = \\lambda \\cdot 0 = 0$ for any $\\lambda$, the zero vector would satisfy the eigenvector equation for every scalar. Excluding it ensures each eigenvector has a unique eigenvalue.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The eigenspace $E(\\lambda)$ is:',
    options: [
      'The set of all eigenvalues',
      'The set of all eigenvectors with eigenvalue $\\lambda
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The eigenspace $E(\\lambda)$ consists of all $x$ such that $T(x) = \\lambda x$, which is equivalent to $(T - \\lambda I)(x) = 0$. Thus $E(\\lambda)$ is the null space of $T - \\lambda I$, and includes all eigenvectors for $\\lambda$ plus the zero vector.',
  },
      'Both B and C are correct',
      'The null space of $T - \\lambda I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The eigenspace $E(\\lambda)$ consists of all $x$ such that $T(x) = \\lambda x$, which is equivalent to $(T - \\lambda I)(x) = 0$. Thus $E(\\lambda)$ is the null space of $T - \\lambda I$, and includes all eigenvectors for $\\lambda$ plus the zero vector.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The eigenspace $E(\\lambda)$ consists of all $x$ such that $T(x) = \\lambda x$, which is equivalent to $(T - \\lambda I)(x) = 0$. Thus $E(\\lambda)$ is the null space of $T - \\lambda I$, and includes all eigenvectors for $\\lambda$ plus the zero vector.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $0$ is an eigenvalue of $T$, what can we conclude?',
    options: [
      '$T$ is the identity transformation',
      '$T$ is invertible',
      '$T$ has a nontrivial null space',
      'All vectors are eigenvectors',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $0$ is an eigenvalue, then $T(x) = 0$ for some nonzero $x$, meaning the null space of $T$ contains nonzero vectors (is nontrivial).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A linear transformation $T: V \\to V$ has a diagonal matrix representation if and only if:',
    options: [
      '$T$ has at least one eigenvalue',
      '$\\det T \\neq 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A transformation has a diagonal matrix representation if and only if there exists a basis consisting entirely of eigenvectors. The matrix is then diagonal with eigenvalues on the diagonal.',
  },
      'All eigenvalues are distinct',
      '$V$ has a basis of eigenvectors of $T
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A transformation has a diagonal matrix representation if and only if there exists a basis consisting entirely of eigenvectors. The matrix is then diagonal with eigenvalues on the diagonal.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A transformation has a diagonal matrix representation if and only if there exists a basis consisting entirely of eigenvectors. The matrix is then diagonal with eigenvalues on the diagonal.',
  },
];
