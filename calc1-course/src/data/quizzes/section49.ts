import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The limit $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ is an example of:',
    options: [
      '$0/0$ form',
      '$\\infty/\\infty$ form',
      '$1/0$ form',
      'Not indeterminate',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Both $\\sin x \\to 0$ and $x \\to 0$ as $x \\to 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Taylor polynomials can help evaluate limits by:',
    options: [
      'Finding derivatives',
      'Replacing functions with their polynomial approximations',
      'Computing integrals',
      'Graphing',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expand each function, substitute, and simplify to find the limit.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Using $\\sin x = x - x^3/6 + o(x^3)$, find $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$.',
    correctAnswer: -0.167,
    numericRange: { min: -0.2, max: -0.15, precision: 3 },
    difficulty: 'hard',
    explanation: '$\\frac{\\sin x - x}{x^3} = \\frac{-x^3/6 + o(x^3)}{x^3} \\to -1/6 \\approx -0.167$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The form $0 \\cdot \\infty$ is:',
    options: [
      'An indeterminate form',
      'Always 0',
      'Always $\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$0 \\cdot \\infty$ is indeterminate; the limit depends on the functions.',
  },
      'Undefined',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$0 \\cdot \\infty$ is indeterminate; the limit depends on the functions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Using $e^x = 1 + x + x^2/2 + ...$, find $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{e^x - 1}{x} = \\frac{x + x^2/2 + ...}{x} = 1 + x/2 + ... \\to 1$.',
  },
      '$e
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{e^x - 1}{x} = \\frac{x + x^2/2 + ...}{x} = 1 + x/2 + ... \\to 1$.',
  },
      '$\\infty
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{e^x - 1}{x} = \\frac{x + x^2/2 + ...}{x} = 1 + x/2 + ... \\to 1$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{e^x - 1}{x} = \\frac{x + x^2/2 + ...}{x} = 1 + x/2 + ... \\to 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{e^x - 1}{x} = \\frac{x + x^2/2 + ...}{x} = 1 + x/2 + ... \\to 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Using $\\cos x = 1 - x^2/2 + ...$, find $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{1 - (1 - x^2/2 + ...)}{x^2} = \\frac{x^2/2 + ...}{x^2} \\to 1/2$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{1 - (1 - x^2/2 + ...)}{x^2} = \\frac{x^2/2 + ...}{x^2} \\to 1/2$.',
  },
      '$1/2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{1 - (1 - x^2/2 + ...)}{x^2} = \\frac{x^2/2 + ...}{x^2} \\to 1/2$.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{1 - (1 - x^2/2 + ...)}{x^2} = \\frac{x^2/2 + ...}{x^2} \\to 1/2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{1 - (1 - x^2/2 + ...)}{x^2} = \\frac{x^2/2 + ...}{x^2} \\to 1/2$.',
  },
];
