import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-34 require to be included in the coinbase transaction?',
    options: [
      'Timestamp',
      'Block height',
      'Merkle root',
      'Previous block hash'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-34 requires the block height to be included in the coinbase scriptSig.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why was BIP-34 necessary?',
    options: [
      'To enable SegWit',
      'To increase block size',
      'To improve privacy',
      'To prevent duplicate transaction IDs',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Including block height prevents coinbase transactions from having identical txids across different blocks.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What block version did BIP-34 introduce?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'BIP-34 introduced block version 2, requiring the block height in the coinbase.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What transaction creates new bitcoins in each block?',
    correctAnswer: 'coinbase',
    difficulty: 'easy',
    explanation: 'The coinbase transaction is the first transaction in each block and creates new bitcoins as the block reward.',
  },
];
