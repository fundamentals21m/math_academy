import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What light client protocol does the embedded node use?',
    options: [
      'SPV (Simple Payment Verification)',
      'Neutrino',
      'Full node sync',
      'Electrum protocol'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The embedded node uses Neutrino, a light client protocol that doesn\'t require downloading the full ~500GB blockchain, fetching only the data it needs.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many words are in a standard Bitcoin seed phrase?',
    correctAnswer: 24,
    numericRange: { min: 0, max: 48, precision: 0 },
    difficulty: 'easy',
    explanation: 'A standard BIP39 seed phrase consists of 24 words that encode your private key. This phrase can recover your on-chain funds on any compatible wallet.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a Static Channel Backup (SCB)?',
    options: [
      'A copy of all your transaction history',
      'An encrypted seed phrase',
      'A backup that lets you recover funds from channels if your phone is lost',
      'A snapshot of the Bitcoin blockchain'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A Static Channel Backup lets you recover funds from channels if your phone is lost. It triggers a cooperative close to recover funds on-chain, but doesn\'t restore channel state.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of provider can help new nodes get started with channels and liquidity?',
    correctAnswer: 'LSP',
    difficulty: 'medium',
    explanation: 'An LSP (Lightning Service Provider) helps new nodes with channel management and liquidity, including opening channels automatically and providing just-in-time channels.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is NOT a good use case for embedded node mode?',
    options: [
      'Personal spending',
      'Receiving payments on mobile',
      'Self-custody without extra hardware',
      'High-volume routing to earn fees'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Embedded mode is ideal for personal use but not for running a routing node to earn fees. Routing nodes need to be always online, which is impractical for a phone.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Where should you NEVER store your seed phrase?',
    options: [
      'In a notes app or cloud storage',
      'In a bank safety deposit box',
      'Written on metal plates',
      'On paper in a fireproof safe'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Never store your seed phrase digitally - no photos, no cloud storage, no notes apps. Write it on paper or metal and store in secure physical locations.',
  },
];
