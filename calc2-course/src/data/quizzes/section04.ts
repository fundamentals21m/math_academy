import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set $S$ is called dependent if there exist elements $x_1, \\ldots, x_k$ in $S$ and scalars $c_1, \\ldots, c_k$ such that $\\sum_{i=1}^k c_i x_i = 0$. What additional condition must hold?',
    options: [
      'All $c_i = 0$',
      'At least one $c_i > 0$',
      'All $c_i = 1$',
      'Not all $c_i = 0$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For a set to be dependent, there must exist a nontrivial linear combination equal to zero, meaning not all coefficients $c_i$ are zero.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a set $S$ contains the zero element, what can we conclude about $S$?',
    options: [
      '$S$ is dependent',
      '$S$ is independent',
      '$S$ spans the entire space',
      'Nothing specific'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $0 \\in S$, then $1 \\cdot 0 = 0$ is a nontrivial representation of zero (since the coefficient 1 is nonzero), so $S$ is dependent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $T$ is a subset of $S$ and $T$ is dependent, what can we conclude about $S$?',
    options: [
      '$S$ is independent',
      '$S$ is a subspace',
      'Nothing specific',
      '$S$ is dependent',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If a subset $T$ of $S$ is dependent, then $S$ is also dependent because the nontrivial linear combination in $T$ is also a nontrivial linear combination in $S$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Are the functions $u_1(t) = \\cos^2 t$, $u_2(t) = \\sin^2 t$, and $u_3(t) = 1$ dependent or independent?',
    options: [
      'Independent',
      'Dependent, because $u_1 = u_2$',
      'Dependent, because $u_1 + u_2 - u_3 = 0$',
      'It depends on the domain'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Pythagorean identity, $\\cos^2 t + \\sin^2 t = 1$ for all $t$, so $u_1 + u_2 - u_3 = 0$. This is a nontrivial linear combination equal to zero, so the functions are dependent.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Theorem 1.5, if $S = \\{x_1, \\ldots, x_k\\}$ is an independent set spanning subspace $L(S)$, what can we say about any set of $k+1$ elements in $L(S)$?',
    options: [
      'It is always independent',
      'It is always dependent',
      'It may or may not be dependent',
      'It always spans $L(S)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Theorem 1.5 states that every set of $k + 1$ elements in $L(S)$ is dependent. This fundamental result limits the "size" of independent sets in a subspace.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Theorem 1.5 states that every set of $k + 1$ elements in $L(S)$ is dependent. This fundamental result limits the "size" of independent sets in a subspace.',
  },
];
