import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Wronskian determinant of $n$ functions $u_1, \\ldots, u_n$ is:',
    options: [
      '$\\prod_{i=1}^n u_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Wronskian determinant $w(x) = \\det W(x)$ is the determinant of the matrix with rows $u, u\', \\ldots, u^{(n-1)}$.',
  },
      '$\\sum_{i=1}^n u_i
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Wronskian determinant $w(x) = \\det W(x)$ is the determinant of the matrix with rows $u, u\', \\ldots, u^{(n-1)}$.',
  },
      '$u_1 u_n\\' - u_n u_1\\'
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Wronskian determinant $w(x) = \\det W(x)$ is the determinant of the matrix with rows $u, u\', \\ldots, u^{(n-1)}$.',
  },
      '$\\det W$ where $W$ is the Wronskian matrix',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Wronskian determinant $w(x) = \\det W(x)$ is the determinant of the matrix with rows $u, u\', \\ldots, u^{(n-1)}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Abel\'s formula states that the Wronskian satisfies:',
    options: [
      '$w\' = w$',
      '$w\' + P_1(x) w = 0$',
      '$w\'\' = 0$',
      '$w = \\text{constant}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Wronskian satisfies the first-order ODE $w\' + P_1(x) w = 0$, where $P_1$ is the coefficient of $y^{(n-1)}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Abel\'s formula, $w(x) = w(c) \\exp[-\\int_c^x P_1(t)\\,dt]$. This means the Wronskian:',
    options: [
      'Is always zero',
      'Changes sign',
      'Is either identically zero or never zero',
      'Equals $P_1(x)$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since an exponential is never zero, if $w(c) \\neq 0$ at any point, then $w(x) \\neq 0$ everywhere. Otherwise $w \\equiv 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For second-order equations $y\'\' + P_1 y\' + P_2 y = 0$, the Wronskian is:',
    options: [
      '$w = u_1 + u_2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For two functions, $w = \\det \\begin{bmatrix} u_1 & u_2 \\\\ u_1\' & u_2\' \\end{bmatrix} = u_1 u_2\' - u_1\' u_2$.',
  },
      '$w = u_1\\' + u_2\\'
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For two functions, $w = \\det \\begin{bmatrix} u_1 & u_2 \\\\ u_1\' & u_2\' \\end{bmatrix} = u_1 u_2\' - u_1\' u_2$.',
  },
      '$w = u_1 u_2\\' - u_1\\' u_2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For two functions, $w = \\det \\begin{bmatrix} u_1 & u_2 \\\\ u_1\' & u_2\' \\end{bmatrix} = u_1 u_2\' - u_1\' u_2$.',
  },
      '$w = u_1 u_2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For two functions, $w = \\det \\begin{bmatrix} u_1 & u_2 \\\\ u_1\' & u_2\' \\end{bmatrix} = u_1 u_2\' - u_1\' u_2$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For two functions, $w = \\det \\begin{bmatrix} u_1 & u_2 \\\\ u_1\' & u_2\' \\end{bmatrix} = u_1 u_2\' - u_1\' u_2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Wronskian of independent solutions is always nonzero because:',
    options: [
      'Zero Wronskian would contradict uniqueness of solutions',
      'Exponentials are positive',
      'The functions are continuous',
      'The interval is bounded'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'If $w(t_0) = 0$, a nontrivial linear combination vanishes at $t_0$ with all derivatives, contradicting uniqueness.',
  },
];
