import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-42 ensure?',
    options: [
      'Better privacy',
      'Finite monetary supply',
      'Faster blocks',
      'Lower fees',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-42 ensures the subsidy halving continues until supply reaches exactly 21 million.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is Bitcoin\'s maximum supply in millions?',
    correctAnswer: 21,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Bitcoin\'s supply is capped at 21 million BTC.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The original code had a bug where:',
    options: [
      'Blocks could be too fast',
      'Fees weren\\'t collected',
      'Coins could be duplicated',
      'Subsidy could restart after 64 halvings',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Due to integer overflow, the subsidy would have restarted after ~2100.',
  },
  {
    id: 4,
    type: 'text',
    question: 'The block reward halves approximately every _____ years.',
    correctAnswer: '4',
    difficulty: 'easy',
    explanation: 'Halving occurs every 210,000 blocks, approximately 4 years.',
  },
];
