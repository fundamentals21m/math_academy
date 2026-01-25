import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $T$ is a Hermitian operator and $\\lambda$ is an eigenvalue of $T$, then $\\lambda$ is:',
    options: [
      'Pure imaginary',
      'Complex with nonzero imaginary part',
      'Real',
      'Zero',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For Hermitian operators, $(T(x), x) = (x, T(x))$, so $\\lambda = \\bar{\\lambda}$, meaning $\\lambda$ is real.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $T$ is a skew-Hermitian operator and $\\lambda$ is an eigenvalue, then $\\lambda$ is:',
    options: [
      'Real',
      'Negative real',
      'Positive real',
      'Pure imaginary',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For skew-Hermitian operators, $(T(x), x) = -(x, T(x))$, so $\\lambda = -\\bar{\\lambda}$, meaning $\\lambda$ is purely imaginary.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a real Euclidean space, all eigenvalues of a skew-symmetric operator must be:',
    options: [
      'Zero',
      'Real and negative',
      'Real and positive',
      'Complex (non-real)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Eigenvalues must be both real (since the space is real) and purely imaginary (skew-symmetric). The only number that is both is zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In quantum mechanics, physical observables are represented by Hermitian operators because:',
    options: [
      'Hermitian operators are always invertible',
      'Hermitian operators are easy to compute',
      'Hermitian operators have orthonormal eigenvectors',
      'Hermitian operators have real eigenvalues (measurement outcomes)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Physical measurements must yield real values. Hermitian operators guarantee real eigenvalues, which represent possible measurement outcomes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Pauli matrices $\\sigma_1, \\sigma_2, \\sigma_3$ are all Hermitian. This means their eigenvalues are:',
    options: [
      'Complex conjugate pairs',
      'Real numbers',
      'Purely imaginary',
      'All equal to 1',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since Pauli matrices are Hermitian, their eigenvalues must be real. In fact, each has eigenvalues $+1$ and $-1$.',
  },
];
