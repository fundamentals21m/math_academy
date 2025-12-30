import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the sum rule for derivatives?',
    options: [
      '$\\frac{d}{dx}(u + v) = u \\cdot v$',
      '$\\frac{d}{dx}(u + v) = \\frac{du}{dx} + \\frac{dv}{dx}$',
      '$\\frac{d}{dx}(u + v) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}$',
      '$\\frac{d}{dx}(u + v) = \\frac{du}{dx} - \\frac{dv}{dx}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative of a sum equals the sum of the derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is $\\frac{d}{dx}(x^2 + x^3)$?',
    options: [
      '$2x + 3x^2$',
      '$x^2 + x^3$',
      '$2x \\cdot 3x^2$',
      '$5x^4$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}(x^2 + x^3) = 2x + 3x^2$ by applying the sum rule and power rule.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the derivative of $3x^4 - 2x^2 + 5$?',
    options: [
      '$12x^3 - 4x$',
      '$12x^3 - 4x + 5$',
      '$3x^3 - 2x$',
      '$12x^4 - 4x^2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(3x^4) = 12x^3$, $\\frac{d}{dx}(-2x^2) = -4x$, $\\frac{d}{dx}(5) = 0$. Sum: $12x^3 - 4x$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $y = x^2 + 3x + 7$, what is $\\frac{dy}{dx}$ at $x = 2$?',
    correctAnswer: 7,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx} = 2x + 3$. At $x = 2$: $2(2) + 3 = 7$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The sum rule works because:',
    options: [
      'Derivatives are always linear operations',
      'We can only differentiate one term at a time',
      'Each term\'s rate of change is independent of the others',
      'Mathematics requires this rule'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum rule reflects that changes in each term contribute independently to the total change.',
  },
];
