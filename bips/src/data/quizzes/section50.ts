import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-70 define?',
    options: [
      'Payment Protocol for authenticated payment requests',
      'Lightning payments',
      'Mining protocol',
      'Block format'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-70 defined the Payment Protocol for signed, authenticated payment requests.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why was BIP-70 deprecated?',
    options: [
      'Too slow',
      'Security concerns and complexity',
      'Incompatible with SegWit',
      'Patent issues'
    ],
    correctIndex: 1,
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
      'Full nodes',
      'Bitcoin miners',
      'Certificate Authorities (CAs)',
      'Wallet developers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-70 relied on X.509 certificates from traditional CAs, creating centralization.',
  },
];
