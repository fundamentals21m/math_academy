import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the product rule for derivatives?',
    options: [
      '$\\frac{d}{dx}(uv) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}$',
      '$\\frac{d}{dx}(uv) = \\frac{u}{v}$',
      '$\\frac{d}{dx}(uv) = u \\cdot v$',
      '$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$'
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
      '$\\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$',
      '$\\frac{\\frac{du}{dx}}{\\frac{dv}{dx}}$',
      '$\\frac{u\\frac{dv}{dx} - v\\frac{du}{dx}}{v^2}$',
      '$\\frac{u}{v^2}$'
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
      'The sum rule',
      'The product rule',
      'The quotient rule',
      'Only the power rule'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since this is a product of two functions ($x^2$ and $\\sin(x)$), use the product rule.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using the product rule, $\\frac{d}{dx}(x \\cdot x) = ?$',
    options: [
      '$x$',
      '$1$',
      '$2x$',
      '$x^2$'
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
      'It simplifies all calculations',
      'We cannot divide by functions',
      'The derivative of a quotient is NOT the quotient of derivatives'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Unlike sums, the derivative of a quotient requires a special formula—it is not simply the quotient of the derivatives.',
  },
];
