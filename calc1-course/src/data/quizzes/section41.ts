import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential function $e^x$ is defined as:',
    options: [
      'The inverse of $\\ln x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The exponential $e^x$ is defined as the inverse function of $\\ln x$.',
  },
      'The derivative of $\\ln x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The exponential $e^x$ is defined as the inverse function of $\\ln x$.',
  },
      '$x$ raised to power $e
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The exponential $e^x$ is defined as the inverse function of $\\ln x$.',
  },
      'A polynomial',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The exponential $e^x$ is defined as the inverse function of $\\ln x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of $e^x$ is:',
    options: [
      '$xe^{x-1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
      '$1/e^x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
      '$e^x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
      '$e^{x-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $e^0$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$e^0 = 1$ for any base.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any real $a$, $a^x$ can be written as:',
    options: [
      '$x \\ln a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
      '$e^{x \\ln a}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
      '$\\ln(ax)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
      '$a \\cdot e^x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The derivative of $a^x$ (for constant $a > 0$) is:',
    options: [
      '$xa^{x-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
      '$a^x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
      '$\\ln a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
      '$a^x \\ln a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The range of $e^x$ is:',
    options: [
      '$(0, \\infty)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e^x > 0$ for all $x$, and takes all positive values.',
  },
      'All real numbers',
      '$[0, \\infty)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x > 0$ for all $x$, and takes all positive values.',
  },
      '$(-\\infty, 0)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x > 0$ for all $x$, and takes all positive values.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x > 0$ for all $x$, and takes all positive values.',
  },
];
