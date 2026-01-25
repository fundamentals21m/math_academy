import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the derivative of a constant?',
    options: [
      'Zero',
      'One',
      'The constant itself',
      'Undefined',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of any constant is zero because a constant does not change.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the derivative of $y = x$?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $y = x$, then $\\frac{dy}{dx} = 1$ because $y$ changes at the same rate as $x$.',
  },
      '$x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $y = x$, then $\\frac{dy}{dx} = 1$ because $y$ changes at the same rate as $x$.',
  },
      '$2x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $y = x$, then $\\frac{dy}{dx} = 1$ because $y$ changes at the same rate as $x$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $y = x$, then $\\frac{dy}{dx} = 1$ because $y$ changes at the same rate as $x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $y = x$, then $\\frac{dy}{dx} = 1$ because $y$ changes at the same rate as $x$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $y = 5x + 7$, what is $\\frac{dy}{dx}$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}(5x + 7) = 5 + 0 = 5$. The constant 7 vanishes, and 5 is the coefficient of $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The derivative of $y = 3x + c$ (where $c$ is a constant) is:',
    options: [
      '$3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative of $3x$ is $3$, and the derivative of the constant $c$ is $0$.',
  },
      '$3 + c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The derivative of $3x$ is $3$, and the derivative of the constant $c$ is $0$.',
  },
      '$c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The derivative of $3x$ is $3$, and the derivative of the constant $c$ is $0$.',
  },
      '$3x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The derivative of $3x$ is $3$, and the derivative of the constant $c$ is $0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The derivative of $3x$ is $3$, and the derivative of the constant $c$ is $0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which statement best describes why constants "disappear" when we differentiate?',
    options: [
      'Constants are always equal to zero',
      'Constants do not change, so their rate of change is zero',
      'Constants become infinitely small',
      'We ignore constants in calculus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A constant has no rate of change—it remains the same regardless of $x$—so its derivative is zero.',
  },
];
