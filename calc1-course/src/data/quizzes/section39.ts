import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The natural logarithm is defined as:',
    options: [
      '$\\log_{10} x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Apostol defines $\\ln x$ as the integral of $1/t$ from 1 to $x$.',
  },
      '$e^x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Apostol defines $\\ln x$ as the integral of $1/t$ from 1 to $x$.',
  },
      '$\\log_2 x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Apostol defines $\\ln x$ as the integral of $1/t$ from 1 to $x$.',
  },
      '$\\ln x = \\int_1^x \\frac{1}{t}\\,dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Apostol defines $\\ln x$ as the integral of $1/t$ from 1 to $x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Apostol defines $\\ln x$ as the integral of $1/t$ from 1 to $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of $\\ln x$ is:',
    options: [
      '$x$',
      '$e^x$',
      '$1/x$',
      '$\\ln x / x$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By FTC I: $(\\ln x)\' = 1/x$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\ln 1$?',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\ln 1 = \\int_1^1 \\frac{1}{t}\\,dt = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The domain of $\\ln x$ is:',
    options: [
      '$x > 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The natural log is only defined for positive $x$.',
  },
      'All real numbers',
      '$x \\neq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The natural log is only defined for positive $x$.',
  },
      '$x \\geq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The natural log is only defined for positive $x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The natural log is only defined for positive $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int \\frac{1}{x}\\,dx = ?$',
    options: [
      '$\\ln x + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$ (absolute value for $x < 0$).',
  },
      '$\\ln |x| + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$ (absolute value for $x < 0$).',
  },
      '$x + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$ (absolute value for $x < 0$).',
  },
      '$-1/x^2 + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$ (absolute value for $x < 0$).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$ (absolute value for $x < 0$).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'As $x \\to \\infty$, $\\ln x$:',
    options: [
      'Approaches 0',
      'Approaches 1',
      'Oscillates',
      'Approaches $\\infty$ (slowly)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\ln x \\to \\infty$ as $x \\to \\infty$, but slower than any positive power of $x$.',
  },
];
