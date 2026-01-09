import type { QuizQuestion } from './types';

export const section92Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The character table of a group $G$ is a square matrix because:',
    options: [
      '$G$ has $|G|$ elements',
      'The number of irreducible characters equals the number of conjugacy classes',
      'All characters have the same dimension',
      'The orthogonality relations require it'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The rows are indexed by irreducible characters and columns by conjugacy classes. These have equal count, making the table square.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The character table of $\\mathbb{Z}/3\\mathbb{Z}$ has entries involving:',
    options: [
      'Only $1$ and $-1$',
      '$1$ and primitive cube roots of unity $\\omega$',
      'Only real numbers',
      'Only integers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/3\\mathbb{Z}$ has three $1$-dimensional representations with characters $1, \\omega, \\omega^2$ where $\\omega = e^{2\\pi i/3}$ is a primitive cube root of unity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the symmetric group $S_3$, the dimensions of the irreducible representations are:',
    options: [
      '$1, 1, 1$',
      '$1, 1, 2$',
      '$1, 2, 3$',
      '$2, 2, 2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$S_3$ has $3$ conjugacy classes, hence $3$ irreducible representations. Check: $1^2 + 1^2 + 2^2 = 6 = |S_3|$. These are trivial, sign, and standard.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The character value $\\chi(e)$ at the identity always equals:',
    options: [
      '$1$',
      '$|G|$',
      '$\\dim(V)$',
      '$0$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\chi(e) = \\text{tr}(\\rho(e)) = \\text{tr}(I_n) = n = \\dim(V)$ where $V$ is the representation space.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the dihedral group $D_4$ of order $8$, the number of irreducible representations is:',
    options: [
      '$4$',
      '$5$',
      '$8$',
      '$2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$D_4$ has $5$ conjugacy classes: $\\{e\\}$, $\\{r^2\\}$, $\\{r, r^3\\}$, $\\{s, r^2s\\}$, $\\{rs, r^3s\\}$. Hence $5$ irreducible representations with dimensions satisfying $\\sum d_i^2 = 8$. Solution: $1+1+1+1+4=8$, so four $1$-dim and one $2$-dim.',
  },
];
