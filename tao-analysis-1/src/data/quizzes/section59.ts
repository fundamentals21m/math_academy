import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Dirichlet function $f(x) = \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}$ on $[0,1]$ is:',
    options: [
      'Riemann integrable with integral $0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Dirichlet function is not Riemann integrable. On any subinterval, $\\sup f = 1$ (rationals are dense) and $\\inf f = 0$ (irrationals are dense), so $U(f,P) = 1$ and $L(f,P) = 0$ for all partitions.',
  },
      'Not Riemann integrable',
      'Riemann integrable with integral $1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Dirichlet function is not Riemann integrable. On any subinterval, $\\sup f = 1$ (rationals are dense) and $\\inf f = 0$ (irrationals are dense), so $U(f,P) = 1$ and $L(f,P) = 0$ for all partitions.',
  },
      'Riemann integrable with integral $1/2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Dirichlet function is not Riemann integrable. On any subinterval, $\\sup f = 1$ (rationals are dense) and $\\inf f = 0$ (irrationals are dense), so $U(f,P) = 1$ and $L(f,P) = 0$ for all partitions.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Dirichlet function is not Riemann integrable. On any subinterval, $\\sup f = 1$ (rationals are dense) and $\\inf f = 0$ (irrationals are dense), so $U(f,P) = 1$ and $L(f,P) = 0$ for all partitions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the Dirichlet function on $[0,1]$, for any partition $P$:',
    options: [
      '$U(f, P) = 0$ and $L(f, P) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In every subinterval, there exist both rationals (where $f=1$) and irrationals (where $f=0$). Thus $\\sup = 1$ and $\\inf = 0$ on every subinterval, giving $U = 1$ and $L = 0$.',
  },
      '$U(f, P) = 1$ and $L(f, P) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In every subinterval, there exist both rationals (where $f=1$) and irrationals (where $f=0$). Thus $\\sup = 1$ and $\\inf = 0$ on every subinterval, giving $U = 1$ and $L = 0$.',
  },
      '$U(f, P) = 1$ and $L(f, P) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In every subinterval, there exist both rationals (where $f=1$) and irrationals (where $f=0$). Thus $\\sup = 1$ and $\\inf = 0$ on every subinterval, giving $U = 1$ and $L = 0$.',
  },
      '$U(f, P) - L(f, P)$ depends on $P
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In every subinterval, there exist both rationals (where $f=1$) and irrationals (where $f=0$). Thus $\\sup = 1$ and $\\inf = 0$ on every subinterval, giving $U = 1$ and $L = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In every subinterval, there exist both rationals (where $f=1$) and irrationals (where $f=0$). Thus $\\sup = 1$ and $\\inf = 0$ on every subinterval, giving $U = 1$ and $L = 0$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'For the Dirichlet function on $[0,1]$, what is $\\overline{\\int_0^1} f - \\underline{\\int_0^1} f$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\overline{\\int} f = \\inf_P U(f,P) = 1$ and $\\underline{\\int} f = \\sup_P L(f,P) = 0$. The gap is $1 - 0 = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The key property that makes the Dirichlet function non-integrable is:',
    options: [
      'It is unbounded',
      'It has infinitely many discontinuities',
      'It is not monotonic',
      'It is discontinuous everywhere',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Dirichlet function is discontinuous at every point. While functions with countably many discontinuities are integrable, having uncountably many (in fact, all points) discontinuities can destroy integrability.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A bounded function with finitely many discontinuities on $[a,b]$ is:',
    options: [
      'Not necessarily Riemann integrable',
      'Only integrable if the discontinuities are removable',
      'Only integrable if it is monotonic',
      'Riemann integrable',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A bounded function with finitely many discontinuities on $[a,b]$ is always Riemann integrable. The discontinuities contribute zero to the integral in the limit.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following functions on $[0,1]$ is NOT Riemann integrable?',
    options: [
      'The Dirichlet function',
      '$f(x) = \\begin{cases} 1 & x = 1/n, n \\in \\mathbb{N} \\\\ 0 & \\text{otherwise} \\end{cases}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Functions (a), (b), and (d) are all Riemann integrable: (a) has countably many discontinuities, (b) is bounded with one discontinuity, (d) has one discontinuity. Only the Dirichlet function, with uncountably many discontinuities, is not integrable.',
  },
      '$f(x) = \\begin{cases} 0 & x = 0 \\\\ \\sin(1/x) & x \\neq 0 \\end{cases}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Functions (a), (b), and (d) are all Riemann integrable: (a) has countably many discontinuities, (b) is bounded with one discontinuity, (d) has one discontinuity. Only the Dirichlet function, with uncountably many discontinuities, is not integrable.',
  },
      '$f(x) = \\begin{cases} 1 & x \\in [0, 1/2] \\\\ 2 & x \\in (1/2, 1] \\end{cases}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Functions (a), (b), and (d) are all Riemann integrable: (a) has countably many discontinuities, (b) is bounded with one discontinuity, (d) has one discontinuity. Only the Dirichlet function, with uncountably many discontinuities, is not integrable.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Functions (a), (b), and (d) are all Riemann integrable: (a) has countably many discontinuities, (b) is bounded with one discontinuity, (d) has one discontinuity. Only the Dirichlet function, with uncountably many discontinuities, is not integrable.',
  },
];
