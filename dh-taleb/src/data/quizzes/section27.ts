import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The reflection principle is used to:',
    options: [
      'Calculate option prices directly',
      'Determine dividend payments',
      'Measure volatility',
      'Compute barrier-hitting probabilities'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Reflection principle provides elegant computation of first-passage probabilities for Brownian motion.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Girsanov theorem allows:',
    options: [
      'Changing the drift by changing the probability measure',
      'Changing the strike price',
      'Eliminating volatility',
      'Predicting future prices'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Girsanov allows drift transformation via measure change, enabling risk-neutral pricing.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Risk-neutral pricing means option prices are:',
    options: [
      'Expected payoffs under the real-world measure',
      'Discounted expected payoffs under the risk-neutral measure',
      'Always equal to intrinsic value',
      'Independent of interest rates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Option prices are discounted expected payoffs under the risk-neutral (Q) measure.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What theorem connects real-world and risk-neutral probability measures?',
    correctAnswer: 'girsanov',
    difficulty: 'hard',
    explanation: 'Girsanov theorem provides the mathematical foundation for measure changes in pricing.',
  },
];
