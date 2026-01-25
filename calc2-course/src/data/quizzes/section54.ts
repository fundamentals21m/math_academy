import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The general solution of a nonhomogeneous equation $L(y) = R$ has the form:',
    options: [
      'Only a particular solution $y_1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every solution is a particular solution plus a linear combination of homogeneous solutions.',
  },
      'Only the homogeneous solutions $\\sum c_k u_k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every solution is a particular solution plus a linear combination of homogeneous solutions.',
  },
      'The product $y_1 \\cdot u_1 \\cdots u_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every solution is a particular solution plus a linear combination of homogeneous solutions.',
  },
      '$y_1 + \\sum c_k u_k$ (particular + homogeneous)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every solution is a particular solution plus a linear combination of homogeneous solutions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ solves $L(y) = R$ and $y_1$ is a particular solution, then $f - y_1$:',
    options: [
      'Solves $L(y) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$L(f - y_1) = L(f) - L(y_1) = R - R = 0$, so $f - y_1$ is in the null space of $L$.',
  },
      'Equals $R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L(f - y_1) = L(f) - L(y_1) = R - R = 0$, so $f - y_1$ is in the null space of $L$.',
  },
      'Solves $L(y) = 2R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L(f - y_1) = L(f) - L(y_1) = R - R = 0$, so $f - y_1$ is in the null space of $L$.',
  },
      'Equals zero',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L(f - y_1) = L(f) - L(y_1) = R - R = 0$, so $f - y_1$ is in the null space of $L$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The superposition principle for linear equations states:',
    options: [
      'Solutions can only be multiplied',
      'All solutions are equal',
      'Nonlinear terms can be ignored',
      'Homogeneous solutions can be added to any particular solution',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity allows adding homogeneous ("free") solutions to forced ("particular") solutions to get all solutions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The geometric analogy for solutions of $L(y) = R$ is:',
    options: [
      'A line through the origin',
      'A point plus a subspace (affine subspace)',
      'A plane through the origin',
      'The entire space',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Solutions form $y_1 + N(L)$: a particular point shifted by the subspace of homogeneous solutions (like a plane through a point, not through origin).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To solve $L(y) = R$, we must:',
    options: [
      'Find both homogeneous solutions and a particular solution',
      'Find only the homogeneous solutions',
      'Find only a particular solution',
      'Factor the operator',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Both problems must be solved: (1) find a basis for $N(L)$, and (2) find one particular solution of $L(y) = R$.',
  },
];
