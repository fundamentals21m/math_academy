import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-72 add to BIP-21 URIs?',
    options: [
      'Payment Protocol request URL parameter',
      'SegWit addresses',
      'Lightning support',
      'Larger amounts',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-72 added the "r=" parameter for fetching BIP-70 payment requests.',
  },
  {
    id: 2,
    type: 'text',
    question: 'The BIP-72 parameter name for the payment request URL is "_____".',
    correctAnswer: 'r',
    difficulty: 'medium',
    explanation: 'BIP-72 uses "r=" to specify the payment request URL.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'BIP-72 URIs are:',
    options: [
      'Encrypted',
      'Incompatible with existing wallets',
      'Backward compatible with BIP-21',
      'Only for Lightning',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-72 maintains BIP-21 compatibility; wallets without BIP-70 use the address directly.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-72 status is now:',
    options: [
      'Final',
      'Deprecated',
      'Active',
      'Draft',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-72 was deprecated along with BIP-70/71.',
  },
];
