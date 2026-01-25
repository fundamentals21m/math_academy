import type { QuizQuestion } from './types';

export const section91Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Fedimint?',
    options: [
      'A mining pool',
      'A new blockchain',
      'Federated Chaumian e-cash on Bitcoin',
      'An address format',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fedimint combines federated custody with Chaumian e-cash.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Chaumian blind signatures provide:',
    options: [
      'Unlinkable payments within the federation',
      'Faster transactions',
      'Lower fees',
      'Larger amounts',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Blind signatures mean the federation can\'t link issuance to redemption.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Fedimint uses a _____ of guardians to control the Bitcoin.',
    correctAnswer: 'federation',
    difficulty: 'easy',
    explanation: 'Multiple guardians share control via threshold multisig.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Fedimint trades off:',
    options: [
      'Security for capacity',
      'Privacy for speed',
      'Decentralization for fees',
      'Self-custody for privacy and usability',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Federated custody provides better privacy/UX but requires trust.',
  },
];
