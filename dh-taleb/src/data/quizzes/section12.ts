import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Gamma is highest for:',
    options: [
      'Deep out-of-the-money options',
      'Deep in-the-money options',
      'At-the-money options near expiration',
      'Long-dated options'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Gamma peaks for ATM options near expiration when delta changes rapidly with spot.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A position with positive gamma:',
    options: [
      'Loses money when the underlying moves',
      'Benefits from large moves in either direction',
      'Has negative theta',
      'Both B and C'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Long gamma benefits from moves (gamma scalping) but pays theta - they are linked.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The gamma-theta relationship is approximately:',
    options: [
      '$\\Theta = \\Gamma$',
      '$\\Theta \\approx -\\frac{1}{2}\\Gamma S^2 \\sigma^2$',
      '$\\Theta = -\\Gamma$',
      '$\\Theta$ and $\\Gamma$ are unrelated'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Theta and gamma are linked: $\\Theta \\approx -\\frac{1}{2}\\Gamma S^2 \\sigma^2$. Long gamma pays theta.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What Greek measures the rate of change of delta with respect to the underlying price?',
    correctAnswer: 'gamma',
    difficulty: 'easy',
    explanation: 'Gamma ($\\Gamma$) is the second derivative of option price with respect to spot.',
  },
];
