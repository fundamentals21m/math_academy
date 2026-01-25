import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-85 enable?',
    options: [
      'Hardware wallet communication',
      'Encrypting mnemonic phrases',
      'Multi-signature wallets',
      'Deriving new entropy/seeds from a master seed'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-85 allows deriving deterministic entropy from a BIP-32 master key.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What can BIP-85 be used to generate?',
    options: [
      'Child mnemonics, WIF keys, hex entropy',
      'Only new addresses',
      'Only signatures',
      'Only public keys'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-85 can derive various formats including new mnemonics, WIF private keys, and raw entropy.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-85 uses HMAC-_____ for deriving entropy.',
    correctAnswer: 'SHA512',
    difficulty: 'hard',
    explanation: 'BIP-85 uses HMAC-SHA512, consistent with BIP-32 key derivation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A key use case for BIP-85 is:',
    options: [
      'Faster transaction signing',
      'Reducing block size',
      'Creating app-specific wallets from one master seed',
      'Improving network latency',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-85 enables creating isolated wallets for different applications while only backing up one master seed.',
  },
];
