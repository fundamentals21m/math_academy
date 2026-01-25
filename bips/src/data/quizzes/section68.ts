import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-155 (addrv2) add?',
    options: [
      'New Bitcoin address format',
      'Faster address validation',
      'Address encryption',
      'Support for longer addresses like Tor v3',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'addrv2 supports network addresses longer than IPv6, including Tor v3 and I2P.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The original addr message was limited to:',
    options: [
      'IPv4 only',
      'Tor addresses only',
      'IPv4 and IPv6 addresses',
      'DNS names',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The original addr used a fixed 16-byte field for IPv4/IPv6.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Tor v3 onion addresses are how many bytes?',
    correctAnswer: 32,
    numericRange: { min: 16, max: 64, precision: 0 },
    difficulty: 'hard',
    explanation: 'Tor v3 .onion addresses use 32-byte public keys.',
  },
  {
    id: 4,
    type: 'text',
    question: 'The new message type for extended addresses is called addr_____.',
    correctAnswer: 'v2',
    difficulty: 'easy',
    explanation: 'addrv2 is the new message type for variable-length addresses.',
  },
];
