import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is $\\int e^x \\, dx$?',
    options: [
      '$e^x + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}e^x = e^x$, we have $\\int e^x \\, dx = e^x + C$.',
  },
      '$xe^x + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}e^x = e^x$, we have $\\int e^x \\, dx = e^x + C$.',
  },
      '$\\frac{e^x}{x} + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}e^x = e^x$, we have $\\int e^x \\, dx = e^x + C$.',
  },
      '$e^{x+1} + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}e^x = e^x$, we have $\\int e^x \\, dx = e^x + C$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}e^x = e^x$, we have $\\int e^x \\, dx = e^x + C$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is $\\int \\frac{1}{x} \\, dx$?',
    options: [
      '$x^0 + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of $\\frac{1}{x}$ is $\\ln|x| + C$ (natural logarithm).',
  },
      '$\\frac{1}{x^2} + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of $\\frac{1}{x}$ is $\\ln|x| + C$ (natural logarithm).',
  },
      '$-\\frac{1}{x^2} + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of $\\frac{1}{x}$ is $\\ln|x| + C$ (natural logarithm).',
  },
      '$\\ln|x| + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of $\\frac{1}{x}$ is $\\ln|x| + C$ (natural logarithm).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of $\\frac{1}{x}$ is $\\ln|x| + C$ (natural logarithm).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $\\int \\cos(x) \\, dx$?',
    options: [
      '$\\sin(x) + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}\\sin(x) = \\cos(x)$, we have $\\int \\cos(x) \\, dx = \\sin(x) + C$.',
  },
      '$-\\sin(x) + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}\\sin(x) = \\cos(x)$, we have $\\int \\cos(x) \\, dx = \\sin(x) + C$.',
  },
      '$\\cos(x) + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}\\sin(x) = \\cos(x)$, we have $\\int \\cos(x) \\, dx = \\sin(x) + C$.',
  },
      '$\\tan(x) + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}\\sin(x) = \\cos(x)$, we have $\\int \\cos(x) \\, dx = \\sin(x) + C$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}\\sin(x) = \\cos(x)$, we have $\\int \\cos(x) \\, dx = \\sin(x) + C$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is $\\int \\sin(x) \\, dx$?',
    options: [
      '$\\cos(x) + C$',
      '$\\sin(x) + C$',
      '$-\\cos(x) + C$',
      '$-\\sin(x) + C$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d}{dx}(-\\cos(x)) = \\sin(x)$, we have $\\int \\sin(x) \\, dx = -\\cos(x) + C$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To verify an integral, we can:',
    options: [
      'Integrate again',
      'Differentiate the result to get the original integrand',
      'Graph both functions',
      'Evaluate at $x = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiating the antiderivative should give back the original function.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiating the antiderivative should give back the original function.',
  },
];
