import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does BIP-30 address?',
    options: [
      'Double spending',
      'Block orphaning',
      'Duplicate transaction IDs',
      'Mining difficulty',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-30 prevents duplicate txids by requiring uniqueness in the UTXO set.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Duplicate coinbase transactions were possible because:',
    options: [
      'Early blocks could have identical coinbase scripts',
      'Signatures could be duplicated',
      'Addresses were reused',
      'Blocks were identical',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Without BIP-34\'s height requirement, coinbase txs could have identical txids.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-30 combined with BIP-_____ fully prevents duplicate txids.',
    correctAnswer: '34',
    difficulty: 'medium',
    explanation: 'BIP-34 (height in coinbase) combined with BIP-30 prevents duplicate txids.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Duplicate txids could cause:',
    options: [
      'Lower fees',
      'Faster confirmations',
      'Better privacy',
      'Loss of original UTXO when overwritten',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A duplicate txid could overwrite the original, causing fund loss.',
  },
];
