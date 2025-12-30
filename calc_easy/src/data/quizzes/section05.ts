import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the next step after differentiating a function?',
    options: [
      'Finding the maximum value',
      'Evaluating the derivative at specific points to understand the function\'s behavior',
      'Integrating the result',
      'Graphing the original function'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'After finding the derivative, we often evaluate it at specific points to understand rates of change, slopes, and behavior.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $y = x^2$ and $\\frac{dy}{dx} = 2x$, what is the slope at $x = 3$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'At $x = 3$: $\\frac{dy}{dx} = 2(3) = 6$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\frac{dy}{dx} = 0$ at a point, what does this tell us?',
    options: [
      'The function equals zero at that point',
      'The function has a horizontal tangent (possible maximum, minimum, or inflection point)',
      'The function is undefined',
      'The function is increasing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the derivative is zero, the tangent line is horizontal, indicating a potential maximum, minimum, or inflection point.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\frac{dy}{dx} > 0$ on an interval, the function is:',
    options: [
      'Decreasing on that interval',
      'Constant on that interval',
      'Increasing on that interval',
      'Undefined on that interval'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A positive derivative means the function is increasing (going upward as $x$ increases).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $y = x^3$, what is the value of $\\frac{dy}{dx}$ at $x = 2$?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^3) = 3x^2$. At $x = 2$: $3(2)^2 = 3(4) = 12$.',
  },
];
