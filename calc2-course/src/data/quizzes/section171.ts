import type { QuizQuestion } from './types';

export const section171Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The standard normal distribution has parameters:',
    options: [
      'Mean $m = 0$ and variance $\\sigma^2 = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The standard normal distribution has mean $m = 0$ and variance $\\sigma^2 = 1$.',
  },
      'Mean $m = 1$ and variance $\\sigma^2 = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The standard normal distribution has mean $m = 0$ and variance $\\sigma^2 = 1$.',
  },
      'Mean $m = 0$ and variance $\\sigma^2 = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The standard normal distribution has mean $m = 0$ and variance $\\sigma^2 = 1$.',
  },
      'Mean $m = 0$ and variance $\\sigma^2 = 2\\pi
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The standard normal distribution has mean $m = 0$ and variance $\\sigma^2 = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The standard normal distribution has mean $m = 0$ and variance $\\sigma^2 = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The density of the standard normal distribution is:',
    options: [
      '$\\phi(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$',
      '$\\phi(t) = e^{-t^2}$',
      '$\\phi(t) = \\frac{1}{2} e^{-|t|}$',
      '$\\phi(t) = \\frac{1}{\\pi(1+t^2)}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The standard normal density is $\\phi(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The famous Gaussian integral $\\int_{-\\infty}^{\\infty} e^{-x^2}dx$ equals:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gaussian integral evaluates to $\\sqrt{\\pi}$. This ensures the standard normal density integrates to 1.',
  },
      '$2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Gaussian integral evaluates to $\\sqrt{\\pi}$. This ensures the standard normal density integrates to 1.',
  },
      '$\\sqrt{\\pi}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Gaussian integral evaluates to $\\sqrt{\\pi}$. This ensures the standard normal density integrates to 1.',
  },
      '$\\pi
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Gaussian integral evaluates to $\\sqrt{\\pi}$. This ensures the standard normal density integrates to 1.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Gaussian integral evaluates to $\\sqrt{\\pi}$. This ensures the standard normal density integrates to 1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a normal distribution with mean $m$ and standard deviation $\\sigma$, approximately what percentage lies within one standard deviation of the mean?',
    options: [
      'About 50%',
      'About 68%',
      'About 95%',
      'About 99.7%',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'About 68% of a normal distribution lies within one standard deviation of the mean ($m \\pm \\sigma$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The symmetry property $\\Phi(-t) = 1 - \\Phi(t)$ follows from:',
    options: [
      'The density being always positive',
      'The mean being 0',
      'The variance being 1',
      'The density being symmetric about 0'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The standard normal density $\\phi(t)$ is symmetric about 0: $\\phi(-t) = \\phi(t)$. This symmetry implies $\\Phi(-t) = 1 - \\Phi(t)$.',
  },
];
