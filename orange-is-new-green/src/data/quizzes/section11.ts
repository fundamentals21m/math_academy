import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How do DLCs handle the infinite possible price outcomes for BTCUSD?',
    options: [
      'They only allow binary outcomes',
      'They use complex calculus',
      'They discretize the price range into intervals, creating one CET per interval',
      'They ignore prices outside a fixed range'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'DLCs discretize the continuous outcome space, creating one CET for each price interval (e.g., one CET for every $10 increment).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a $20k-$40k price range with $10 steps, how many CETs are needed?',
    options: [
      '200',
      '1,000',
      '2,000',
      '4,000'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '($40,000 - $20,000) / $10 = 2,000 CETs, each specifying the payout for that $10 price range.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is "rolling" a DLC position?',
    options: [
      'Canceling the contract',
      'Entering a new DLC when the old one expires to maintain continuous hedge',
      'Doubling the position size',
      'Converting to a different cryptocurrency'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rolling involves entering a new DLC as the old one expires to maintain a continuous hedge, similar to rolling traditional futures contracts.',
  },
];
