import type { QuizQuestion } from './types';

export const section89Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How do statechains transfer Bitcoin?',
    options: [
      'Lightning payments',
      'On-chain transactions',
      'Mining',
      'By transferring private key shares off-chain',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Statechains transfer UTXO ownership by handing off key shares.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Statechain Entity role is:',
    options: [
      'A wallet',
      'A semi-trusted party that co-signs transfers',
      'A mining pool',
      'A full node',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The SE facilitates transfers but cannot steal alone.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Statechain backup transactions use decreasing _____ for each transfer.',
    correctAnswer: 'timelocks',
    difficulty: 'hard',
    explanation: 'Later owners have earlier-expiring backup timelocks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Compared to Lightning, statechains:',
    options: [
      'Transfer fixed UTXO amounts',
      'Support any amount',
      'Are fully trustless',
      'Need channels',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Statechains transfer whole UTXOs, not arbitrary amounts.',
  },
];
