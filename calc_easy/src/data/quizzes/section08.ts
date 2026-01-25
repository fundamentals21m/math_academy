import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the second derivative $\\frac{d^2y}{dx^2}$ represent?',
    options: [
      'The original function squared',
      'The rate of change of the rate of change (how the slope is changing)',
      'The area under the curve',
      'The product of two derivatives',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The second derivative measures how the first derivative (slope) is changing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $y = x^3$, what is $\\frac{d^2y}{dx^2}$?',
    options: [
      '$3x^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 3x^2$, then $\\frac{d^2y}{dx^2} = 6x$.',
  },
      '$6
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 3x^2$, then $\\frac{d^2y}{dx^2} = 6x$.',
  },
      '$6x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 3x^2$, then $\\frac{d^2y}{dx^2} = 6x$.',
  },
      '$3x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 3x^2$, then $\\frac{d^2y}{dx^2} = 6x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 3x^2$, then $\\frac{d^2y}{dx^2} = 6x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The notation $f\'\'(x)$ means the same as:',
    options: [
      '$\\frac{d^2f}{dx^2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$f\'\'(x)$ is the second derivative, also written as $\\frac{d^2f}{dx^2}$.',
  },
      '$f(x) \\cdot f(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'\'(x)$ is the second derivative, also written as $\\frac{d^2f}{dx^2}$.',
  },
      '$\\frac{df}{dx} \\cdot \\frac{df}{dx}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'\'(x)$ is the second derivative, also written as $\\frac{d^2f}{dx^2}$.',
  },
      '$2 \\cdot f\\'(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'\'(x)$ is the second derivative, also written as $\\frac{d^2f}{dx^2}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'\'(x)$ is the second derivative, also written as $\\frac{d^2f}{dx^2}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $y = x^4$, what is the third derivative $\\frac{d^3y}{dx^3}$? (Give the coefficient when $x = 1$.)',
    correctAnswer: 24,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$y\' = 4x^3$, $y\'\' = 12x^2$, $y\'\'\' = 24x$. At $x = 1$: $24(1) = 24$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\frac{d^2y}{dx^2} > 0$, the curve is:',
    options: [
      'Concave down (like a frown)',
      'Decreasing',
      'A straight line',
      'Concave up (like a smile)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Positive second derivative means the curve is concave up (bends upward like a smile).',
  },
];
