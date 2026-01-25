import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Dimensionality Theorem states that for an $n$th-order linear operator $L$:',
    options: [
      '$\\dim N(L) = n - 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The solution space of $L(y) = 0$ has dimension exactly $n$, the order of the equation.',
  },
      '$\\dim N(L) = \\infty
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The solution space of $L(y) = 0$ has dimension exactly $n$, the order of the equation.',
  },
      '$\\dim N(L) = n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The solution space of $L(y) = 0$ has dimension exactly $n$, the order of the equation.',
  },
      '$\\dim N(L) = n + 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The solution space of $L(y) = 0$ has dimension exactly $n$, the order of the equation.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The solution space of $L(y) = 0$ has dimension exactly $n$, the order of the equation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of the Dimensionality Theorem uses a map $T$ from $N(L)$ to:',
    options: [
      'The real numbers',
      'The space of $n$-tuples (initial-value vectors)',
      'The space of polynomials',
      'The space of continuous functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$T(f) = (f(x_0), f\'(x_0), \\ldots, f^{(n-1)}(x_0))$ maps each solution to its initial-value vector in $\\mathbb{R}^n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The map $T$ in the proof is one-to-one because:',
    options: [
      'The uniqueness theorem says $T(f) = 0$ implies $f = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'If $T(f) = 0$, all initial conditions are zero. By uniqueness, the only solution with these conditions is $f \\equiv 0$.',
  },
      'All solutions are constant',
      'The space is finite-dimensional',
      '$T$ is a polynomial',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If $T(f) = 0$, all initial conditions are zero. By uniqueness, the only solution with these conditions is $f \\equiv 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $u_1, \\ldots, u_n$ are $n$ independent solutions of $L(y) = 0$, the general solution is:',
    options: [
      '$y = c_1 u_1 + c_2 u_2 + \\cdots + c_n u_n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Any solution is a linear combination of the basis solutions with arbitrary constants $c_1, \\ldots, c_n$.',
  },
      '$y = u_1 + u_2 + \\cdots + u_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Any solution is a linear combination of the basis solutions with arbitrary constants $c_1, \\ldots, c_n$.',
  },
      '$y = u_1 u_2 \\cdots u_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Any solution is a linear combination of the basis solutions with arbitrary constants $c_1, \\ldots, c_n$.',
  },
      '$y = u_1/u_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Any solution is a linear combination of the basis solutions with arbitrary constants $c_1, \\ldots, c_n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Any solution is a linear combination of the basis solutions with arbitrary constants $c_1, \\ldots, c_n$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A 4th-order linear homogeneous ODE has how many linearly independent solutions?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'By the Dimensionality Theorem, $\\dim N(L) = n = 4$ for a 4th-order equation.',
  },
];
