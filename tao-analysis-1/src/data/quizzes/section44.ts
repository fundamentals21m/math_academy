import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Intermediate Value Theorem states that if $f: [a,b] \\to \\mathbb{R}$ is continuous and $y$ is between $f(a)$ and $f(b)$, then:',
    options: [
      'There exists a unique $c \\in (a,b)$ with $f(c) = y
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The IVT guarantees existence of at least one $c$ where $f(c) = y$, but not uniqueness. The function takes all intermediate values.',
  },
      '$f$ must be monotonic',
      'There exists at least one $c \\in [a,b]$ with $f(c) = y
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The IVT guarantees existence of at least one $c$ where $f(c) = y$, but not uniqueness. The function takes all intermediate values.',
  },
      '$y$ must equal $(f(a) + f(b))/2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The IVT guarantees existence of at least one $c$ where $f(c) = y$, but not uniqueness. The function takes all intermediate values.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The IVT guarantees existence of at least one $c$ where $f(c) = y$, but not uniqueness. The function takes all intermediate values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property of $\\mathbb{R}$ is essential for the Intermediate Value Theorem?',
    options: [
      'The Archimedean property',
      'Completeness (least upper bound property)',
      'The well-ordering principle',
      'Countability of $\\mathbb{Q}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The IVT depends on the completeness of $\\mathbb{R}$. The proof uses the least upper bound property to construct the point $c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The IVT depends on the completeness of $\\mathbb{R}$. The proof uses the least upper bound property to construct the point $c$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: [0,1] \\to \\mathbb{R}$ is continuous with $f(0) = -2$ and $f(1) = 3$, then by the IVT:',
    options: [
      '$f$ has exactly one zero in $(0,1)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $f(0) < 0 < f(1)$, the IVT guarantees at least one $c \\in (0,1)$ with $f(c) = 0$. There could be multiple zeros.',
  },
      '$f(1/2) = 1/2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $f(0) < 0 < f(1)$, the IVT guarantees at least one $c \\in (0,1)$ with $f(c) = 0$. There could be multiple zeros.',
  },
      '$f$ has at least one zero in $(0,1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $f(0) < 0 < f(1)$, the IVT guarantees at least one $c \\in (0,1)$ with $f(c) = 0$. There could be multiple zeros.',
  },
      '$f$ has no zeros in $[0,1]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $f(0) < 0 < f(1)$, the IVT guarantees at least one $c \\in (0,1)$ with $f(c) = 0$. There could be multiple zeros.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $f(0) < 0 < f(1)$, the IVT guarantees at least one $c \\in (0,1)$ with $f(c) = 0$. There could be multiple zeros.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation $x^5 + x - 1 = 0$ has a root in $[0,1]$ because:',
    options: [
      'The function is continuous, equals $-1$ at $0$, and equals $1$ at $1$',
      'The function is a polynomial',
      'Every polynomial has a real root',
      'The function is monotonically increasing'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $f(x) = x^5 + x - 1$. Then $f(0) = -1 < 0$ and $f(1) = 1 > 0$. Since $f$ is continuous and changes sign, IVT gives a root.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: [a,b] \\to \\mathbb{R}$ is continuous, then $f([a,b])$ (the image of $f$) is:',
    options: [
      'A closed interval (possibly a single point)',
      'An open interval',
      'An arbitrary subset of $\\mathbb{R}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By EVT, $f$ attains min $m$ and max $M$. By IVT, $f$ takes all values between $m$ and $M$. So $f([a,b]) = [m, M]$.',
  },
      'Always equal to $[f(a), f(b)]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By EVT, $f$ attains min $m$ and max $M$. By IVT, $f$ takes all values between $m$ and $M$. So $f([a,b]) = [m, M]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By EVT, $f$ attains min $m$ and max $M$. By IVT, $f$ takes all values between $m$ and $M$. So $f([a,b]) = [m, M]$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Let $f: [0,1] \\to [0,1]$ be continuous. By the IVT, $f$ must have:',
    options: [
      'A maximum at $x = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Consider $g(x) = f(x) - x$. Then $g(0) = f(0) \\geq 0$ and $g(1) = f(1) - 1 \\leq 0$. By IVT, $g(c) = 0$ for some $c$, so $f(c) = c$.',
  },
      'A zero in $(0,1)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Consider $g(x) = f(x) - x$. Then $g(0) = f(0) \\geq 0$ and $g(1) = f(1) - 1 \\leq 0$. By IVT, $g(c) = 0$ for some $c$, so $f(c) = c$.',
  },
      'A point where $f\\'(c) = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Consider $g(x) = f(x) - x$. Then $g(0) = f(0) \\geq 0$ and $g(1) = f(1) - 1 \\leq 0$. By IVT, $g(c) = 0$ for some $c$, so $f(c) = c$.',
  },
      'A fixed point (i.e., some $c$ with $f(c) = c$)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Consider $g(x) = f(x) - x$. Then $g(0) = f(0) \\geq 0$ and $g(1) = f(1) - 1 \\leq 0$. By IVT, $g(c) = 0$ for some $c$, so $f(c) = c$.',
  },
];
