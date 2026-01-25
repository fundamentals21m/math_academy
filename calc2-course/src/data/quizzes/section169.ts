import type { QuizQuestion } from './types';

export const section169Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cauchy distribution has density:',
    options: [
      '$f(t) = e^{-t}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cauchy density is $f(t) = \\frac{1}{\\pi(1 + t^2)}$.',
  },
      '$f(t) = t^2/\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy density is $f(t) = \\frac{1}{\\pi(1 + t^2)}$.',
  },
      '$f(t) = 1/\\sqrt{2\\pi} e^{-t^2/2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy density is $f(t) = \\frac{1}{\\pi(1 + t^2)}$.',
  },
      '$f(t) = 1/(\\pi(1 + t^2))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy density is $f(t) = \\frac{1}{\\pi(1 + t^2)}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy density is $f(t) = \\frac{1}{\\pi(1 + t^2)}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Cauchy distribution function is:',
    options: [
      '$F(t) = 1/2 + (1/\\pi)\\arctan t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cauchy CDF is $F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t$.',
  },
      '$F(t) = t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cauchy CDF is $F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t$.',
  },
      '$F(t) = 1 - e^{-t}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cauchy CDF is $F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t$.',
  },
      '$F(t) = t^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cauchy CDF is $F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cauchy CDF is $F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\theta$ is uniformly distributed on $[-\\pi/2, \\pi/2]$, then $Y = \\tan\\theta$ has:',
    options: [
      'Uniform distribution',
      'Cauchy distribution',
      'Normal distribution',
      'Exponential distribution',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The tangent of a uniformly distributed angle produces the Cauchy distribution. This is the "spinning pointer" construction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A remarkable property of the Cauchy distribution is:',
    options: [
      'It has no finite expectation or variance',
      'It has the smallest variance',
      'It is always positive',
      'It equals the normal distribution',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cauchy distribution has such heavy tails that $\\int_{-\\infty}^{\\infty} |t| f(t)\\,dt$ diverges. It has no finite mean or variance.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Cauchy distribution has "heavy tails," meaning:',
    options: [
      'The density decays slowly like $1/t^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Heavy tails: $f(t) \\sim 1/(\\pi t^2)$ as $|t| \\to \\infty$. This slow decay causes the integrals for expectation to diverge.',
  },
      'The density goes to zero quickly',
      'All probability is near the origin',
      'The distribution is bounded',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Heavy tails: $f(t) \\sim 1/(\\pi t^2)$ as $|t| \\to \\infty$. This slow decay causes the integrals for expectation to diverge.',
  },
];
