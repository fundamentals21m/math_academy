import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-71 specify?',
    options: [
      'Network ports',
      'New address format',
      'MIME types for BIP-70 messages',
      'Block encoding',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-71 defined MIME types for BIP-70 Payment Protocol messages.',
  },
  {
    id: 2,
    type: 'text',
    question: 'The MIME type for BIP-70 payment requests was application/bitcoin-_____.',
    correctAnswer: 'paymentrequest',
    difficulty: 'hard',
    explanation: 'BIP-71 defined "application/bitcoin-paymentrequest" for payment requests.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'BIP-71 is now:',
    options: [
      'Deprecated along with BIP-70',
      'Widely used',
      'Required for all wallets',
      'Part of consensus',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-71 was deprecated when BIP-70 was deprecated.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'MIME types are used to identify:',
    options: [
      'Bitcoin addresses',
      'Content types in HTTP and other protocols',
      'Block hashes',
      'Transaction IDs',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'MIME types identify the format of data being transmitted.',
  },
];
