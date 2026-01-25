import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the type number of the open_channel message?',
    correctAnswer: 32,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'The open_channel message has type 32, in the Channel message range (32-127).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who provides the initial capital in a v1 (single-funder) channel?',
    options: [
      'Both parties equally',
      'A third party',
      'The fundee only',
      'The funder only'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In v1 channels, the funder initiates and provides all initial capital; the fundee contributes none.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the purpose of the temporary_channel_id?',
    options: [
      'A random ID used until the funding tx is known',
      'A permanent identifier',
      'For testing purposes only',
      'To hide the channel from the network'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The temporary_channel_id is a 32-byte random ID used until the funding transaction is known, after which a permanent ID is derived.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the permanent channel_id derived?',
    options: [
      'Hash of both node IDs',
      'funding_txid XOR funding_output_index',
      'Random 32 bytes',
      'Hash of the funding amount',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The permanent channel_id is derived by XORing the funding txid with the output index (left-padded to 32 bytes).',
  },
  {
    id: 5,
    type: 'text',
    question: 'What message signals that the channel is ready for use after confirmations?',
    correctAnswer: 'channel_ready',
    difficulty: 'easy',
    explanation: 'Both parties send channel_ready after the funding transaction has sufficient confirmations.',
  },
];
