import type { QuizQuestion } from './types';

export const section170Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential distribution with parameter $\\lambda > 0$ has density:',
    options: [
      '$f(t) = e^{-t}$ for $t \\geq 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential density is $f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0$ and 0 otherwise.',
  },
      '$f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential density is $f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0$ and 0 otherwise.',
  },
      '$f(t) = t e^{-t}$ for $t \\geq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential density is $f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0$ and 0 otherwise.',
  },
      '$f(t) = 1/\\lambda$ for $t \\geq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential density is $f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0$ and 0 otherwise.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential density is $f(t) = \\lambda e^{-\\lambda t}$ for $t \\geq 0$ and 0 otherwise.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The distribution function of the exponential distribution is:',
    options: [
      '$F(t) = e^{-\\lambda t}$ for $t \\geq 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0$.',
  },
      '$F(t) = t/\\lambda$ for $t \\geq 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0$.',
  },
      '$F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0$.',
  },
      '$F(t) = \\lambda t$ for $t \\geq 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = 1 - e^{-\\lambda t}$ for $t \\geq 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The memoryless property states that $P(X > t+s \\mid X > t)$ equals:',
    options: [
      '$P(X > t)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Memoryless: $P(X > t+s \\mid X > t) = P(X > s)$. The probability of surviving additional time $s$ doesn\'t depend on current age $t$.',
  },
      '$P(X > s)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Memoryless: $P(X > t+s \\mid X > t) = P(X > s)$. The probability of surviving additional time $s$ doesn\'t depend on current age $t$.',
  },
      '$P(X > t) \\cdot P(X > s)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Memoryless: $P(X > t+s \\mid X > t) = P(X > s)$. The probability of surviving additional time $s$ doesn\'t depend on current age $t$.',
  },
      '$P(X > t + s)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Memoryless: $P(X > t+s \\mid X > t) = P(X > s)$. The probability of surviving additional time $s$ doesn\'t depend on current age $t$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Memoryless: $P(X > t+s \\mid X > t) = P(X > s)$. The probability of surviving additional time $s$ doesn\'t depend on current age $t$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The exponential distribution is the unique continuous distribution with:',
    options: [
      'Finite variance',
      'Mean equal to variance',
      'Bounded support',
      'The memoryless property',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The exponential is the unique continuous distribution satisfying the memoryless (or "lack of memory") property.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\lambda = 0.001$ and we want $P(X > T) = 0.95$, the half-life concept relates $\\lambda$ to $t_{1/2}$ by:',
    options: [
      '$\\lambda = \\log 2 / t_{1/2}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'At the half-life $t_{1/2}$, $P(X > t_{1/2}) = 1/2$, so $e^{-\\lambda t_{1/2}} = 1/2$, giving $\\lambda = \\log 2 / t_{1/2}$.',
  },
      '$\\lambda = t_{1/2}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'At the half-life $t_{1/2}$, $P(X > t_{1/2}) = 1/2$, so $e^{-\\lambda t_{1/2}} = 1/2$, giving $\\lambda = \\log 2 / t_{1/2}$.',
  },
      '$\\lambda = t_{1/2} / 2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'At the half-life $t_{1/2}$, $P(X > t_{1/2}) = 1/2$, so $e^{-\\lambda t_{1/2}} = 1/2$, giving $\\lambda = \\log 2 / t_{1/2}$.',
  },
      '$\\lambda = e^{t_{1/2}}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'At the half-life $t_{1/2}$, $P(X > t_{1/2}) = 1/2$, so $e^{-\\lambda t_{1/2}} = 1/2$, giving $\\lambda = \\log 2 / t_{1/2}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'At the half-life $t_{1/2}$, $P(X > t_{1/2}) = 1/2$, so $e^{-\\lambda t_{1/2}} = 1/2$, giving $\\lambda = \\log 2 / t_{1/2}$.',
  },
];
