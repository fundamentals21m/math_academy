import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-21 define?',
    options: [
      'Address format',
      'Transaction encoding',
      'Bitcoin URI scheme',
      'Block structure',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-21 defines the "bitcoin:" URI scheme for payment requests.',
  },
  {
    id: 2,
    type: 'text',
    question: 'A BIP-21 URI starts with what prefix?',
    correctAnswer: 'bitcoin:',
    difficulty: 'easy',
    explanation: 'BIP-21 URIs begin with "bitcoin:" followed by the address and optional parameters.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which parameter in BIP-21 specifies the payment amount?',
    options: [
      'amount',
      'btc',
      'value',
      'satoshi',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The "amount" parameter specifies the payment amount in BTC.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-21 enables:',
    options: [
      'Network discovery',
      'QR codes for payments',
      'Mining operations',
      'Block validation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-21 URIs can be encoded as QR codes for easy mobile payments.',
  },
];
