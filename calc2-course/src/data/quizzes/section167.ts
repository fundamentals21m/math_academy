import type { QuizQuestion } from './types';

export const section167Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A random variable $X$ is continuous if:',
    options: [
      '$P(X = t) = 0$ for every real number $t
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A continuous random variable has $P(X = t) = 0$ for every $t$. Probability is spread continuously, not concentrated at points.',
  },
      '$P(X = t) > 0$ for all $t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A continuous random variable has $P(X = t) = 0$ for every $t$. Probability is spread continuously, not concentrated at points.',
  },
      '$F(t)$ is a step function',
      '$X$ takes only integer values',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A continuous random variable has $P(X = t) = 0$ for every $t$. Probability is spread continuously, not concentrated at points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is a probability density function, then:',
    options: [
      '$\\int_{-\\infty}^{\\infty} f(u)\\,du = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A pdf integrates to 1 over the entire real line: $\\int_{-\\infty}^{\\infty} f(u)\\,du = 1$.',
  },
      '$\\int_{-\\infty}^{\\infty} f(u)\\,du = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A pdf integrates to 1 over the entire real line: $\\int_{-\\infty}^{\\infty} f(u)\\,du = 1$.',
  },
      '$f(t) = P(X = t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A pdf integrates to 1 over the entire real line: $\\int_{-\\infty}^{\\infty} f(u)\\,du = 1$.',
  },
      '$f(t) < 0$ for some $t
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A pdf integrates to 1 over the entire real line: $\\int_{-\\infty}^{\\infty} f(u)\\,du = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A pdf integrates to 1 over the entire real line: $\\int_{-\\infty}^{\\infty} f(u)\\,du = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a continuous distribution, $P(a < X \\leq b)$ equals:',
    options: [
      '$f(b) - f(a)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Probability is the area under the density curve: $P(a < X \\leq b) = \\int_a^b f(u)\\,du$.',
  },
      '$f(a) + f(b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Probability is the area under the density curve: $P(a < X \\leq b) = \\int_a^b f(u)\\,du$.',
  },
      '$F(a) \\cdot F(b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Probability is the area under the density curve: $P(a < X \\leq b) = \\int_a^b f(u)\\,du$.',
  },
      '$\\int_a^b f(u)\\,du
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Probability is the area under the density curve: $P(a < X \\leq b) = \\int_a^b f(u)\\,du$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Probability is the area under the density curve: $P(a < X \\leq b) = \\int_a^b f(u)\\,du$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The density $f(t)$ represents:',
    options: [
      'The rate of probability accumulation at $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The density is NOT the probability at $t$ (that is 0). It represents the rate at which probability accumulates: $f(t) = F\'(t)$ when differentiable.',
  },
      'The probability that $X = t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The density is NOT the probability at $t$ (that is 0). It represents the rate at which probability accumulates: $f(t) = F\'(t)$ when differentiable.',
  },
      'The cumulative probability up to $t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The density is NOT the probability at $t$ (that is 0). It represents the rate at which probability accumulates: $f(t) = F\'(t)$ when differentiable.',
  },
      'The variance at $t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The density is NOT the probability at $t$ (that is 0). It represents the rate at which probability accumulates: $f(t) = F\'(t)$ when differentiable.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The density is NOT the probability at $t$ (that is 0). It represents the rate at which probability accumulates: $f(t) = F\'(t)$ when differentiable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a continuous distribution, $P(a < X < b)$ compared to $P(a \\leq X \\leq b)$ is:',
    options: [
      'Strictly less',
      'Strictly greater',
      'Cannot be determined',
      'Equal',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $P(X = a) = P(X = b) = 0$ for continuous distributions, including or excluding the endpoints makes no difference.',
  },
];
