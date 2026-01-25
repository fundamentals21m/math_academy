import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Taylor\'s theorem gives the error (remainder) as:',
    options: [
      'Always exactly zero',
      '$f(a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The remainder $R_n(x) = f(x) - P_n(x)$ is the approximation error.',
  },
      'The $(n+1)$th Taylor term',
      'The difference $f(x) - P_n(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The remainder $R_n(x) = f(x) - P_n(x)$ is the approximation error.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The remainder $R_n(x) = f(x) - P_n(x)$ is the approximation error.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Lagrange form of the remainder is:',
    options: [
      '$\\frac{f^{(n)}(a)}{n!}(x-a)^n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Lagrange remainder: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.',
  },
      '$\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Lagrange remainder: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.',
  },
      '$f(x) - f(a)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Lagrange remainder: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.',
  },
      'Always zero',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Lagrange remainder: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The remainder helps us:',
    options: [
      'Compute exact values',
      'Solve equations',
      'Bound the approximation error',
      'Find antiderivatives',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The remainder formula lets us bound how far $P_n(x)$ is from $f(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $e^x$, all derivatives are $e^c$, so the remainder at $a = 0$ is bounded by:',
    options: [
      '$x^n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Since $e^c \\leq e^x$ for $0 < c < x$, $|R_n| \\leq \\frac{e^x |x|^{n+1}}{(n+1)!}$.',
  },
      '$e^x
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $e^c \\leq e^x$ for $0 < c < x$, $|R_n| \\leq \\frac{e^x |x|^{n+1}}{(n+1)!}$.',
  },
      'Cannot be bounded',
      '$\\frac{e^x |x|^{n+1}}{(n+1)!}$ when $x > 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $e^c \\leq e^x$ for $0 < c < x$, $|R_n| \\leq \\frac{e^x |x|^{n+1}}{(n+1)!}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $e^c \\leq e^x$ for $0 < c < x$, $|R_n| \\leq \\frac{e^x |x|^{n+1}}{(n+1)!}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'As $n \\to \\infty$, the Taylor remainder for $e^x$ goes to:',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
      'Depends on $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The integral form of the remainder involves:',
    options: [
      'No integration',
      'Only the first derivative',
      'A definite integral of the $(n+1)$th derivative',
      'The antiderivative of $f$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Integral form: $R_n(x) = \\frac{1}{n!}\\int_a^x (x-t)^n f^{(n+1)}(t)\\,dt$.',
  },
];
