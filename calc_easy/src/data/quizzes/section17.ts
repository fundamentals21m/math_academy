import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Integration is the reverse process of:',
    options: [
      'Multiplication',
      'Differentiation',
      'Factoring',
      'Graphing',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integration undoes differentiation—it finds the original function from its derivative.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The integral $\\int x^2 \\, dx$ equals:',
    options: [
      '$2x + C
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. For $n=2$: $\\frac{x^3}{3} + C$.',
  },
      '$\\frac{x^2}{2} + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. For $n=2$: $\\frac{x^3}{3} + C$.',
  },
      '$\\frac{x^3}{3} + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. For $n=2$: $\\frac{x^3}{3} + C$.',
  },
      '$x^3 + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. For $n=2$: $\\frac{x^3}{3} + C$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. For $n=2$: $\\frac{x^3}{3} + C$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The constant $C$ in indefinite integrals represents:',
    options: [
      'The value of the function at $x = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since the derivative of any constant is zero, integration produces an arbitrary constant.',
  },
      'The slope of the function',
      'The coefficient of $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since the derivative of any constant is zero, integration produces an arbitrary constant.',
  },
      'Any constant, since derivatives of constants are zero',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since the derivative of any constant is zero, integration produces an arbitrary constant.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power rule for integration is:',
    options: [
      '$\\int x^n \\, dx = nx^{n-1} + C
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integration raises the power by 1 and divides by the new power.',
  },
      '$\\int x^n \\, dx = x^{n+1} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration raises the power by 1 and divides by the new power.',
  },
      '$\\int x^n \\, dx = \\frac{x^n}{n} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration raises the power by 1 and divides by the new power.',
  },
      '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration raises the power by 1 and divides by the new power.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is integration often called "anti-differentiation"?',
    options: [
      'It is the opposite of anti-derivatives',
      'It always gives negative results',
      'It was invented to oppose calculus',
      'It reverses the effect of differentiation',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Integration finds a function whose derivative is the given function—the reverse of differentiation.',
  },
];
