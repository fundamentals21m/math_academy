import type { QuizQuestion } from './types';

export const section163Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The calculus of probabilities connects probability theory with:',
    options: [
      'Algebra only',
      'Geometry only',
      'Analysis (integration, differentiation, limits)',
      'Number theory only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The calculus of probabilities uses integration for computing probabilities, differentiation for density functions, and limits for convergence theorems.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For continuous random variables, probability is computed by:',
    options: [
      'Summation',
      'Multiplication',
      'Counting',
      'Integration',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For continuous distributions, $P(a < X \\leq b) = \\int_a^b f(x)\\,dx$ where $f$ is the density function.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When the distribution function $F$ is differentiable, the density function is:',
    options: [
      '$f(x) = F(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $F$ is differentiable, the density is the derivative: $f(x) = F\'(x)$.',
  },
      '$f(x) = \\int F(x)\\,dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is differentiable, the density is the derivative: $f(x) = F\'(x)$.',
  },
      '$f(x) = 1/F(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is differentiable, the density is the derivative: $f(x) = F\'(x)$.',
  },
      '$f(x) = F\\'(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is differentiable, the density is the derivative: $f(x) = F\'(x)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $F$ is differentiable, the density is the derivative: $f(x) = F\'(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The expectation of a continuous random variable with density $f$ is:',
    options: [
      '$E(X) = \\int_{-\\infty}^{\\infty} f(x)\\,dx
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.',
  },
      '$E(X) = \\max_x f(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.',
  },
      '$E(X) = f(0)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.',
  },
      '$E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which mathematician provided the rigorous axiomatic foundations of probability?',
    options: [
      'Newton',
      'Kolmogorov',
      'Euler',
      'Fermat',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Kolmogorov (1903-1987) established the measure-theoretic foundations of probability in his 1933 work.',
  },
];
