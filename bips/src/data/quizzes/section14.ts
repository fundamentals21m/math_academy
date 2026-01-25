import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is OP_CHECKSEQUENCEVERIFY (CSV)?',
    options: [
      'A merkle proof verifier',
      'An opcode for sequence numbers',
      'An opcode to verify relative timelocks in script',
      'A signature verification opcode',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'CSV is the script opcode that enforces BIP-68 relative timelock requirements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do BIP-68 and BIP-112 work together?',
    options: [
      'They are completely independent',
      'BIP-68 defines the encoding, BIP-112 provides the script opcode',
      'BIP-112 replaced BIP-68',
      'BIP-68 is for blocks, BIP-112 is for time',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-68 defines how relative timelocks are encoded in nSequence, while BIP-112 adds the CSV opcode to verify them in script.',
  },
  {
    id: 3,
    type: 'text',
    question: 'CSV is essential for which payment channel update mechanism?',
    correctAnswer: 'revocation',
    difficulty: 'hard',
    explanation: 'CSV enables revocation in Lightning payment channels by allowing time-delayed penalty claims.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does CSV verify against?',
    options: [
      'The transaction\\\\'s nLockTime',
      'The block timestamp',
      'The signature',
      'The input\\\\'s nSequence value',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'CSV verifies that the spending input\'s nSequence satisfies the relative timelock requirement.',
  },
];
