import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A differential equation is:',
    options: [
      'An equation with only numbers',
      'An equation involving derivatives',
      'An equation with no solutions',
      'A type of integral'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A differential equation contains derivatives of an unknown function.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The solution to $\\frac{dy}{dx} = 2x$ is:',
    options: [
      '$y = 2x + C$',
      '$y = 2$',
      '$y = x^2 + C$',
      '$y = x$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Integrating $2x$ gives $x^2 + C$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The equation $\\frac{dy}{dx} = ky$ models:',
    options: [
      'Linear growth',
      'No growth',
      'Quadratic growth',
      'Exponential growth or decay'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When the rate of change is proportional to the amount, we get exponential behavior: $y = Ae^{kx}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Initial conditions in differential equations:',
    options: [
      'Determine the specific solution from the family of solutions',
      'Are never needed',
      'Make the equation harder to solve',
      'Only apply to physics problems'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Initial conditions fix the arbitrary constant, giving a particular solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Separable differential equations can be solved by:',
    options: [
      'Guessing the answer',
      'Moving all $y$ terms to one side and all $x$ terms to the other, then integrating',
      'Taking the derivative',
      'Graphing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Separable equations allow us to integrate each variable independently.',
  },
];
