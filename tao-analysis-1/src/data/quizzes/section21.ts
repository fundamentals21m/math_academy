import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $(a_n)$ converges to $L$ (written $\\lim_{n \\to \\infty} a_n = L$) if:',
    options: [
      'There exists $N$ such that $a_n = L$ for all $n \\geq N
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Convergence means that for any tolerance $\\varepsilon > 0$, the terms of the sequence eventually stay within $\\varepsilon$ of the limit $L$.',
  },
      '$|a_n - L|$ is decreasing',
      '$a_n \\leq L$ for all $n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convergence means that for any tolerance $\\varepsilon > 0$, the terms of the sequence eventually stay within $\\varepsilon$ of the limit $L$.',
  },
      'For every $\\varepsilon > 0$, there exists $N$ such that $|a_n - L| < \\varepsilon$ for all $n \\geq N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convergence means that for any tolerance $\\varepsilon > 0$, the terms of the sequence eventually stay within $\\varepsilon$ of the limit $L$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convergence means that for any tolerance $\\varepsilon > 0$, the terms of the sequence eventually stay within $\\varepsilon$ of the limit $L$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The limit of a convergent sequence is:',
    options: [
      'Not necessarily unique',
      'Always rational',
      'Unique',
      'Always the supremum of the sequence'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits are unique: if $a_n \\to L$ and $a_n \\to M$, then $|L - M| \\leq |L - a_n| + |a_n - M|$ can be made arbitrarily small, forcing $L = M$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\lim a_n = L$ and $\\lim b_n = M$, then $\\lim(a_n + b_n) = $?',
    options: [
      '$L \\cdot M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The limit of a sum is the sum of the limits: $\\lim(a_n + b_n) = \\lim a_n + \\lim b_n = L + M$. This is the sum law for limits.',
  },
      '$L + M
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum is the sum of the limits: $\\lim(a_n + b_n) = \\lim a_n + \\lim b_n = L + M$. This is the sum law for limits.',
  },
      'Undefined without more information',
      '$\\max(L, M)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum is the sum of the limits: $\\lim(a_n + b_n) = \\lim a_n + \\lim b_n = L + M$. This is the sum law for limits.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum is the sum of the limits: $\\lim(a_n + b_n) = \\lim a_n + \\lim b_n = L + M$. This is the sum law for limits.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The limit law for products states that if $\\lim a_n = L$ and $\\lim b_n = M$, then:',
    options: [
      '$\\lim(a_n b_n) = LM$',
      '$\\lim(a_n b_n) = L + M$',
      '$\\lim(a_n / b_n) = L/M$',
      '$\\lim(a_n b_n)$ may not exist'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The product of convergent sequences converges to the product of the limits: $\\lim(a_n b_n) = (\\lim a_n)(\\lim b_n) = LM$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The quotient law $\\lim(a_n/b_n) = L/M$ requires:',
    options: [
      '$M > 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the quotient law, we need each $b_n \\neq 0$ (so the quotients are defined) and $M \\neq 0$ (to avoid division by zero in the limit).',
  },
      '$M \\neq 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For the quotient law, we need each $b_n \\neq 0$ (so the quotients are defined) and $M \\neq 0$ (to avoid division by zero in the limit).',
  },
      'No additional conditions',
      '$b_n \\neq 0$ for all $n$ and $M \\neq 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For the quotient law, we need each $b_n \\neq 0$ (so the quotients are defined) and $M \\neq 0$ (to avoid division by zero in the limit).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For the quotient law, we need each $b_n \\neq 0$ (so the quotients are defined) and $M \\neq 0$ (to avoid division by zero in the limit).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Calculate $\\lim_{n \\to \\infty} \\frac{3n + 1}{n + 2}$.',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Divide numerator and denominator by $n$: $\\frac{3 + 1/n}{1 + 2/n} \\to \\frac{3 + 0}{1 + 0} = 3$ as $n \\to \\infty$.',
  },
];
