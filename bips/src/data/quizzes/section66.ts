import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the BIP-133 feefilter message do?',
    options: [
      'Sets mining fees',
      'Filters blocks by fee',
      'Calculates recommended fees',
      'Tells peers minimum fee rate for relaying transactions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'feefilter tells peers not to send transactions below a certain fee rate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The feefilter value is expressed in:',
    options: [
      'Percentage',
      'BTC per transaction',
      'Satoshis per 1000 bytes',
      'Satoshis per byte',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'feefilter uses satoshis per 1000 bytes (sat/kvB).',
  },
  {
    id: 3,
    type: 'text',
    question: 'feefilter helps reduce _____ network traffic.',
    correctAnswer: 'bandwidth',
    difficulty: 'easy',
    explanation: 'feefilter reduces bandwidth by not relaying low-fee transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A node with a full mempool would:',
    options: [
      'Send a higher feefilter value',
      'Send a lower feefilter value',
      'Disconnect from peers',
      'Stop relaying all transactions'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Higher feefilter when mempool is full prevents receiving transactions that would be rejected.',
  },
];
