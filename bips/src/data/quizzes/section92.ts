import type { QuizQuestion } from './types';

export const section92Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a sidechain?',
    options: [
      'A separate blockchain pegged to Bitcoin',
      'An address format',
      'A mining pool',
      'A payment channel',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Sidechains are separate blockchains with assets pegged to Bitcoin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Drivechains (BIP-300/301) use:',
    options: [
      'Federated multisig',
      'Miner voting for withdrawals',
      'SPV proofs only',
      'Lightning channels',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Drivechains rely on miners voting over months to approve withdrawals.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Liquid Network uses a _____ peg mechanism.',
    correctAnswer: 'federated',
    difficulty: 'medium',
    explanation: 'Liquid uses a federation of known entities to control the peg.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Drivechains are controversial because:',
    options: [
      'They\\'re too slow',
      'They increase fees',
      'They reduce capacity',
      'They increase miner power over Bitcoin',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Critics argue drivechains give miners too much influence.',
  },
];
