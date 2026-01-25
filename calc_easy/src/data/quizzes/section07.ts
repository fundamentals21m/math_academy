import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the product rule for derivatives?',
    options: [
      '$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The product rule states: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
  },
      '$\\frac{d}{dx}(uv) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The product rule states: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
  },
      '$\\frac{d}{dx}(uv) = \\frac{u}{v}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The product rule states: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
  },
      '$\\frac{d}{dx}(uv) = u \\cdot v
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The product rule states: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The product rule states: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the quotient rule for $\\frac{d}{dx}\\left(\\frac{u}{v}\\right)$?',
    options: [
      '$\\frac{\\frac{du}{dx}}{\\frac{dv}{dx}}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.',
  },
      '$\\frac{u\\frac{dv}{dx} - v\\frac{du}{dx}}{v^2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.',
  },
      '$\\frac{u}{v^2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.',
  },
      '$\\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To differentiate $y = x^2 \\cdot \\sin(x)$, you would use:',
    options: [
      'The product rule',
      'The sum rule',
      'The quotient rule',
      'Only the power rule',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since this is a product of two functions ($x^2$ and $\\sin(x)$), use the product rule.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using the product rule, $\\frac{d}{dx}(x \\cdot x) = ?$',
    options: [
      '$2x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = v = x$. Then $u\\frac{dv}{dx} + v\\frac{du}{dx} = x(1) + x(1) = 2x$. This matches $\\frac{d}{dx}(x^2) = 2x$.',
  },
      '$x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $u = v = x$. Then $u\\frac{dv}{dx} + v\\frac{du}{dx} = x(1) + x(1) = 2x$. This matches $\\frac{d}{dx}(x^2) = 2x$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $u = v = x$. Then $u\\frac{dv}{dx} + v\\frac{du}{dx} = x(1) + x(1) = 2x$. This matches $\\frac{d}{dx}(x^2) = 2x$.',
  },
      '$x^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $u = v = x$. Then $u\\frac{dv}{dx} + v\\frac{du}{dx} = x(1) + x(1) = 2x$. This matches $\\frac{d}{dx}(x^2) = 2x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $u = v = x$. Then $u\\frac{dv}{dx} + v\\frac{du}{dx} = x(1) + x(1) = 2x$. This matches $\\frac{d}{dx}(x^2) = 2x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The quotient rule is needed because:',
    options: [
      'Division is the opposite of multiplication',
      'The derivative of a quotient is NOT the quotient of derivatives',
      'It simplifies all calculations',
      'We cannot divide by functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Unlike sums, the derivative of a quotient requires a special formula—it is not simply the quotient of the derivatives.',
  },
];
