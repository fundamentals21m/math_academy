import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Partial derivatives are used when a function has:',
    options: [
      'Only one variable',
      'No variables',
      'Fractions as coefficients',
      'Two or more variables',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Partial derivatives handle functions of multiple variables like $f(x, y)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The symbol $\\frac{\\partial f}{\\partial x}$ means:',
    options: [
      'The total derivative of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial derivative $\\frac{\\partial f}{\\partial x}$ differentiates with respect to $x$ while holding other variables constant.',
  },
      'The derivative of $f$ with respect to $x$, treating other variables as constants',
      'A fraction with partial values',
      'The integral of $f$ with respect to $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Partial derivative $\\frac{\\partial f}{\\partial x}$ differentiates with respect to $x$ while holding other variables constant.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Partial derivative $\\frac{\\partial f}{\\partial x}$ differentiates with respect to $x$ while holding other variables constant.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x, y) = x^2 + 3xy$, what is $\\frac{\\partial f}{\\partial x}$?',
    options: [
      '$2x + 3x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2 + 3xy) = 2x + 3y$.',
  },
      '$2x + 3y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2 + 3xy) = 2x + 3y$.',
  },
      '$x^2 + 3x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2 + 3xy) = 2x + 3y$.',
  },
      '$2xy + 3y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2 + 3xy) = 2x + 3y$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2 + 3xy) = 2x + 3y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f(x, y) = x^2 + 3xy$, what is $\\frac{\\partial f}{\\partial y}$?',
    options: [
      '$2x + 3y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2 + 3xy) = 0 + 3x = 3x$.',
  },
      '$x^2 + 3x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2 + 3xy) = 0 + 3x = 3x$.',
  },
      '$3x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2 + 3xy) = 0 + 3x = 3x$.',
  },
      '$2y + 3x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2 + 3xy) = 0 + 3x = 3x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2 + 3xy) = 0 + 3x = 3x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Partial derivatives are essential in:',
    options: [
      'Only one-dimensional calculus',
      'Physics, engineering, and any field with multivariable functions',
      'Only geometry',
      'Historical mathematics only',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real-world problems often involve multiple variables, making partial derivatives essential.',
  },
];
