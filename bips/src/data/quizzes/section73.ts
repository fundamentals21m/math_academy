import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-22 define?',
    options: [
      'Transaction format',
      'Block validation rules',
      'getblocktemplate for mining',
      'Address encoding'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-22 defines getblocktemplate, how miners request block templates from nodes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'getblocktemplate replaced:',
    options: [
      'submitblock',
      'getwork',
      'getblock',
      'getmininginfo',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'getblocktemplate replaced the older, less flexible getwork protocol.',
  },
  {
    id: 3,
    type: 'text',
    question: 'getblocktemplate gives miners visibility into the _____ they\'re mining.',
    correctAnswer: 'transactions',
    difficulty: 'medium',
    explanation: 'Unlike getwork, getblocktemplate shows the actual transactions in the block.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Miners submit found blocks using:',
    options: [
      'sendblock',
      'foundblock',
      'newblock',
      'submitblock',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'submitblock is used to submit a mined block to the network.',
  },
];
