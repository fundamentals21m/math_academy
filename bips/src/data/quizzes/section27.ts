import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-44 define?',
    options: [
      'Multi-account hierarchy for HD wallets',
      'Transaction format',
      'Single-account wallet structure',
      'Network protocol',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-44 defines a multi-account hierarchy: m/purpose\'/coin\'/account\'/change/index.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the coin type for Bitcoin mainnet in BIP-44?',
    options: [
      '60',
      '1',
      '44',
      '0',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Bitcoin mainnet uses coin type 0. Testnet uses 1, Ethereum uses 60.',
  },
  {
    id: 3,
    type: 'text',
    question: 'In BIP-44 path m/44\'/0\'/0\'/0/0, what does the second-to-last "0" represent?',
    correctAnswer: 'external',
    difficulty: 'medium',
    explanation: 'The change level: 0 = external (receiving addresses), 1 = internal (change addresses).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-44 allows multiple _____ within a single seed.',
    options: [
      'Seeds',
      'Passphrases',
      'Accounts',
      'Signatures',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-44 supports multiple accounts (account level) for organizing funds.',
  },
];
