import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The uniqueness theorem for $Y\' = AY$ with initial condition $Y(t_0) = Y_0$ states that:',
    options: [
      'There are infinitely many solutions',
      'There is exactly one solution on any interval containing $t_0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The uniqueness theorem guarantees exactly one solution passing through any given initial point.',
  },
      'Solutions exist only for $t > t_0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The uniqueness theorem guarantees exactly one solution passing through any given initial point.',
  },
      'Solutions may not exist',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The uniqueness theorem guarantees exactly one solution passing through any given initial point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the matrix differential equation $Y\' = AY$ with constant $A$, if $Y(0) = I$, then $Y(t) =$',
    options: [
      '$tA$',
      '$I + tA$',
      '$A^t$',
      '$e^{tA}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The unique solution to $Y\' = AY$ with $Y(0) = I$ is the matrix exponential $Y(t) = e^{tA}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The uniqueness theorem implies that if two solutions agree at one point, they:',
    options: [
      'May differ elsewhere',
      'Must both be zero',
      'Agree everywhere',
      'Are linearly dependent',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By uniqueness, if $Y_1(t_0) = Y_2(t_0)$, then $Y_1(t) = Y_2(t)$ for all $t$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The proof of uniqueness for $Y\' = AY$ typically uses:',
    options: [
      'Integration by parts',
      'Gronwall\'s inequality or a contraction argument',
      'The quadratic formula',
      'Taylor\'s theorem only'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniqueness proofs often employ Gronwall\'s inequality or show that the difference of two solutions satisfies an inequality forcing it to zero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\Phi(t)$ is a fundamental matrix solution of $Y\' = AY$, then every solution can be written as:',
    options: [
      '$\\Phi(t)c$ for some constant vector $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A fundamental matrix $\\Phi(t)$ generates all solutions via $Y(t) = \\Phi(t)c$ where $c$ is determined by initial conditions.',
  },
      '$\\Phi(t) + c$ for some constant vector $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A fundamental matrix $\\Phi(t)$ generates all solutions via $Y(t) = \\Phi(t)c$ where $c$ is determined by initial conditions.',
  },
      '$c\\Phi(t)$ for some constant scalar $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A fundamental matrix $\\Phi(t)$ generates all solutions via $Y(t) = \\Phi(t)c$ where $c$ is determined by initial conditions.',
  },
      '$\\Phi(t)^{-1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A fundamental matrix $\\Phi(t)$ generates all solutions via $Y(t) = \\Phi(t)c$ where $c$ is determined by initial conditions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A fundamental matrix $\\Phi(t)$ generates all solutions via $Y(t) = \\Phi(t)c$ where $c$ is determined by initial conditions.',
  },
];
