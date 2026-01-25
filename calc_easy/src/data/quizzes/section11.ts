import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To find a maximum or minimum of a function, we first:',
    options: [
      'Set the derivative equal to zero',
      'Set the function equal to zero',
      'Find the second derivative',
      'Graph the function',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Critical points occur where $f\'(x) = 0$ (or undefined). These are candidates for maxima/minima.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A point where $f\'(x) = 0$ is called a:',
    options: [
      'Zero of the function',
      'Inflection point',
      'Asymptote',
      'Critical point or stationary point',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Points where the derivative is zero are called critical points or stationary points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f\'\'(x) > 0$ at a critical point, the function has a:',
    options: [
      'Maximum',
      'Cannot be determined',
      'Minimum',
      'Inflection point',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If the second derivative is positive at a critical point, the curve is concave up—a minimum.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $y = x^2 - 4x + 3$, at what $x$-value does the minimum occur?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx} = 2x - 4 = 0$ gives $x = 2$. Since $\\frac{d^2y}{dx^2} = 2 > 0$, it\'s a minimum.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'An inflection point is where:',
    options: [
      'The derivative equals zero',
      'The second derivative changes sign (concavity changes)',
      'The function equals zero',
      'The function is undefined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An inflection point is where the curve changes from concave up to concave down (or vice versa).',
  },
];
