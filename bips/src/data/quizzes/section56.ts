import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-47 define?',
    options: [
      'Mining pools',
      'Reusable Payment Codes',
      'One-time addresses',
      'Block structure',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-47 defines Reusable Payment Codes for receiving payments without address reuse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-47 payment codes allow:',
    options: [
      'Receiving payments to unique addresses from a single code',
      'Lower fees',
      'Mining Bitcoin',
      'Faster confirmations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Payment codes derive unique addresses for each payment.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-47 requires an initial "notification _____" to establish contact.',
    correctAnswer: 'transaction',
    difficulty: 'medium',
    explanation: 'A notification transaction establishes the payment channel between parties.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-47 payment codes start with which prefix on mainnet?',
    options: [
      'bc1',
      '3',
      'PM8T',
      '1',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'BIP-47 v1 payment codes start with PM8T on mainnet.',
  },
];
