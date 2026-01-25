import type { QuizQuestion } from './types';

export const section88Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are channel factories?',
    options: [
      'Block producers',
      'Mining pools',
      'Shared UTXOs enabling off-chain channel creation',
      'Hardware manufacturers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Channel factories allow multiple parties to share one on-chain UTXO for many channels.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Channel factories reduce:',
    options: [
      'Lightning speed',
      'Payment privacy',
      'Channel capacity',
      'On-chain transactions needed for channels',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Factories amortize on-chain costs across many channels.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Channel factory updates require signatures from _____ participants.',
    correctAnswer: 'all',
    difficulty: 'medium',
    explanation: 'N-of-N signatures needed to update the factory\'s allocation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Channel factories would benefit most from:',
    options: [
      'BIP-118 (ANYPREVOUT) for Eltoo',
      'Larger blocks',
      'Faster mining',
      'More nodes',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Eltoo simplifies multiparty coordination in factories.',
  },
];
