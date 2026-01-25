import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-70 define?',
    options: [
      'Lightning payments',
      'Payment Protocol for authenticated payment requests',
      'Mining protocol',
      'Block format',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-70 defined the Payment Protocol for signed, authenticated payment requests.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why was BIP-70 deprecated?',
    options: [
      'Too slow',
      'Incompatible with SegWit',
      'Patent issues',
      'Security concerns and complexity',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-70 was deprecated due to security vulnerabilities and centralization concerns.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-70 used Protocol _____ for message serialization.',
    correctAnswer: 'Buffers',
    difficulty: 'medium',
    explanation: 'BIP-70 used Protocol Buffers (protobuf) for message encoding.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-70 certificates were typically issued by:',
    options: [
      'Certificate Authorities (CAs)',
      'Full nodes',
      'Bitcoin miners',
      'Wallet developers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-70 relied on X.509 certificates from traditional CAs, creating centralization.',
  },
];
