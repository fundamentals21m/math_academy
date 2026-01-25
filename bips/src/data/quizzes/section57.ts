import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-75 address?',
    options: [
      'Mining coordination',
      'Block propagation',
      'Fee estimation',
      'Out-of-band address exchange for privacy',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-75 defines a protocol for exchanging payment information privately.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-75 extends:',
    options: [
      'BIP-70 Payment Protocol',
      'BIP-141 SegWit',
      'BIP-32 HD Wallets',
      'BIP-9 Version Bits',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-75 extended BIP-70 with identity and encryption features.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-75 was also known as _____ Protocol for address exchange.',
    correctAnswer: 'InvoiceRequest',
    difficulty: 'hard',
    explanation: 'BIP-75 defined the InvoiceRequest message for requesting payment details.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-75 status is:',
    options: [
      'Required',
      'Final and active',
      'Deprecated with BIP-70',
      'Draft',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-75 was deprecated when BIP-70 was deprecated.',
  },
];
