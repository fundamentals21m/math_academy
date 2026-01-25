import type { QuizQuestion } from './types';

export const section97Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A quadratic form $Q(y) = yAy^t$ is positive definite if and only if:',
    options: [
      'All eigenvalues of $A$ are positive',
      'All eigenvalues of $A$ are zero',
      'All eigenvalues of $A$ are negative',
      'The eigenvalues of $A$ have mixed signs',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A real symmetric matrix $A$ has $Q(y) > 0$ for all $y \\neq 0$ (positive definite) if and only if all its eigenvalues are positive.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If all eigenvalues of the Hessian $H(a)$ at a stationary point $a$ are positive, then $f$ has:',
    options: [
      'A relative maximum at $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are positive, the Hessian is positive definite. This means $f(a + y) - f(a) > 0$ for small $y \\neq 0$, so $f$ has a relative minimum at $a$.',
  },
      'A saddle point at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are positive, the Hessian is positive definite. This means $f(a + y) - f(a) > 0$ for small $y \\neq 0$, so $f$ has a relative minimum at $a$.',
  },
      'No conclusion can be drawn',
      'A relative minimum at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are positive, the Hessian is positive definite. This means $f(a + y) - f(a) > 0$ for small $y \\neq 0$, so $f$ has a relative minimum at $a$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are positive, the Hessian is positive definite. This means $f(a + y) - f(a) > 0$ for small $y \\neq 0$, so $f$ has a relative minimum at $a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the Hessian $H(a)$ has both positive and negative eigenvalues at a stationary point, then:',
    options: [
      '$f$ has a saddle point at $a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $H(a)$ has eigenvalues of opposite signs (indefinite), the quadratic form takes both positive and negative values. This means $f$ has a saddle point at $a$.',
  },
      '$f$ has a relative minimum at $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $H(a)$ has eigenvalues of opposite signs (indefinite), the quadratic form takes both positive and negative values. This means $f$ has a saddle point at $a$.',
  },
      '$f$ has a relative maximum at $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $H(a)$ has eigenvalues of opposite signs (indefinite), the quadratic form takes both positive and negative values. This means $f$ has a saddle point at $a$.',
  },
      'The function is not differentiable at $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $H(a)$ has eigenvalues of opposite signs (indefinite), the quadratic form takes both positive and negative values. This means $f$ has a saddle point at $a$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $H(a)$ has eigenvalues of opposite signs (indefinite), the quadratic form takes both positive and negative values. This means $f$ has a saddle point at $a$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The diagonalization of a quadratic form $Q(y) = yAy^t$ using an orthogonal matrix $C$ gives:',
    options: [
      '$Q(y) = \\det(A)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For a real symmetric matrix $A$, there exists an orthogonal matrix $C$ such that $Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC$ and $\\lambda_1, \\ldots, \\lambda_n$ are the eigenvalues of $A$.',
  },
      '$Q(y) = \\text{tr}(A)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For a real symmetric matrix $A$, there exists an orthogonal matrix $C$ such that $Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC$ and $\\lambda_1, \\ldots, \\lambda_n$ are the eigenvalues of $A$.',
  },
      '$Q(y) = \\|y\\|^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For a real symmetric matrix $A$, there exists an orthogonal matrix $C$ such that $Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC$ and $\\lambda_1, \\ldots, \\lambda_n$ are the eigenvalues of $A$.',
  },
      '$Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For a real symmetric matrix $A$, there exists an orthogonal matrix $C$ such that $Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC$ and $\\lambda_1, \\ldots, \\lambda_n$ are the eigenvalues of $A$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For a real symmetric matrix $A$, there exists an orthogonal matrix $C$ such that $Q(y) = \\sum_{i=1}^n \\lambda_i x_i^2$ where $x = yC$ and $\\lambda_1, \\ldots, \\lambda_n$ are the eigenvalues of $A$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If all eigenvalues of the Hessian $H(a)$ are zero, then:',
    options: [
      '$f$ definitely has a minimum at $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are zero, the second-order test is inconclusive. Higher-order derivatives or direct analysis are needed to determine the nature of the stationary point.',
  },
      '$f$ definitely has a saddle point at $a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are zero, the second-order test is inconclusive. Higher-order derivatives or direct analysis are needed to determine the nature of the stationary point.',
  },
      '$f$ definitely has a maximum at $a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are zero, the second-order test is inconclusive. Higher-order derivatives or direct analysis are needed to determine the nature of the stationary point.',
  },
      'The eigenvalue test gives no information',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all eigenvalues are zero, the second-order test is inconclusive. Higher-order derivatives or direct analysis are needed to determine the nature of the stationary point.',
  },
];
