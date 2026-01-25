import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-37 define?',
    options: [
      'Address encoding',
      'Block compression',
      'Transaction format',
      'Bloom filters for SPV clients'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'BIP-37 defines Bloom filters for lightweight SPV client transaction filtering.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is BIP-37 now considered deprecated?',
    options: [
      'Privacy leaks and DoS vulnerability',
      'Too slow',
      'Incompatible with SegWit',
      'Patent issues'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bloom filters leak privacy and enable DoS attacks on full nodes.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Bloom filters allow SPV clients to receive _____ transactions.',
    correctAnswer: 'filtered',
    difficulty: 'easy',
    explanation: 'Bloom filters let SPV clients request only relevant transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-37 was replaced by which filtering approach?',
    options: [
      'Full block download',
      'BIP-157/158 compact block filters',
      'Trusted servers',
      'Lightning Network'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Compact block filters (BIP-157/158) provide better privacy than Bloom filters.',
  },
];
