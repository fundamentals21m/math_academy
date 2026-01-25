import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does P2SH stand for?',
    options: [
      'Peer to Secure Hash',
      'Pay to Secure Hash',
      'Pay to Signature Hash',
      'Pay to Script Hash',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'P2SH stands for Pay to Script Hash, where payments are made to the hash of a script rather than a public key hash.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main benefit of P2SH?',
    options: [
      'Sender doesn\\'t need to know the complex script',
      'Better privacy',
      'Faster transaction processing',
      'Lower fees',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'P2SH allows senders to pay to a hash, hiding script complexity until spending time.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What prefix do P2SH addresses start with on mainnet?',
    correctAnswer: '3',
    difficulty: 'easy',
    explanation: 'P2SH addresses on Bitcoin mainnet start with the number 3.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'P2SH was introduced in which BIP?',
    options: [
      'BIP-32',
      'BIP-39',
      'BIP-16',
      'BIP-141',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-16 introduced Pay to Script Hash (P2SH).',
  },
];
