import type { QuizQuestion } from './types';

export const section165Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The distribution function (CDF) of a random variable $X$ is defined as:',
    options: [
      '$F(t) = P(X = t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cumulative distribution function is $F(t) = P(X \\leq t)$, the probability that $X$ takes a value at most $t$.',
  },
      '$F(t) = P(X > t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cumulative distribution function is $F(t) = P(X \\leq t)$, the probability that $X$ takes a value at most $t$.',
  },
      '$F(t) = P(X < t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cumulative distribution function is $F(t) = P(X \\leq t)$, the probability that $X$ takes a value at most $t$.',
  },
      '$F(t) = P(X \\leq t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cumulative distribution function is $F(t) = P(X \\leq t)$, the probability that $X$ takes a value at most $t$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cumulative distribution function is $F(t) = P(X \\leq t)$, the probability that $X$ takes a value at most $t$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property must every distribution function satisfy?',
    options: [
      '$F$ is monotonically increasing',
      '$\\lim_{t \\to -\\infty} F(t) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A distribution function is monotonically increasing: if $a < b$, then $F(a) \\leq F(b)$. Also $\\lim_{t \\to -\\infty} F(t) = 0$ and $\\lim_{t \\to +\\infty} F(t) = 1$.',
  },
      '$\\lim_{t \\to +\\infty} F(t) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A distribution function is monotonically increasing: if $a < b$, then $F(a) \\leq F(b)$. Also $\\lim_{t \\to -\\infty} F(t) = 0$ and $\\lim_{t \\to +\\infty} F(t) = 1$.',
  },
      '$F$ is always differentiable',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A distribution function is monotonically increasing: if $a < b$, then $F(a) \\leq F(b)$. Also $\\lim_{t \\to -\\infty} F(t) = 0$ and $\\lim_{t \\to +\\infty} F(t) = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Using the distribution function, $P(a < X \\leq b)$ equals:',
    options: [
      '$F(a) - F(b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a) = F(b) - F(a)$.',
  },
      '$F(b) - F(a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a) = F(b) - F(a)$.',
  },
      '$F(a) + F(b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a) = F(b) - F(a)$.',
  },
      '$F(a) \\cdot F(b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a) = F(b) - F(a)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a) = F(b) - F(a)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a discrete distribution, the distribution function $F$ is:',
    options: [
      'A smooth curve',
      'Always linear',
      'A step function with jumps at the mass points',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For discrete distributions, $F$ is a step function that jumps at each mass point. The size of the jump at $x$ equals $P(X = x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $F$ is continuous everywhere, then for any single value $t$:',
    options: [
      '$P(X = t) > 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $F$ is continuous, $P(X = t) = F(t) - \\lim_{s \\to t^-} F(s) = 0$. No single point has positive probability.',
  },
      '$P(X = t) = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is continuous, $P(X = t) = F(t) - \\lim_{s \\to t^-} F(s) = 0$. No single point has positive probability.',
  },
      '$P(X = t) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is continuous, $P(X = t) = F(t) - \\lim_{s \\to t^-} F(s) = 0$. No single point has positive probability.',
  },
      '$P(X = t) = F(t)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is continuous, $P(X = t) = F(t) - \\lim_{s \\to t^-} F(s) = 0$. No single point has positive probability.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is continuous, $P(X = t) = F(t) - \\lim_{s \\to t^-} F(s) = 0$. No single point has positive probability.',
  },
];
