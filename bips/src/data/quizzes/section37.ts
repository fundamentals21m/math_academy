import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-11 standardize?',
    options: [
      'Single-signature transactions',
      'Coinbase transactions',
      'M-of-N multi-signature transactions',
      'SegWit transactions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-11 standardizes M-of-N multi-signature (OP_CHECKMULTISIG) transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a 2-of-3 multisig, how many signatures are needed to spend?',
    options: [
      '2',
      '3',
      '1',
      '5',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In 2-of-3 multisig, any 2 of the 3 key holders must sign.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the maximum number of public keys in a standard bare multisig (pre-P2SH)?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'Standard bare multisig was limited to 3 keys before P2SH enabled larger multisigs.',
  },
  {
    id: 4,
    type: 'text',
    question: 'The opcode for multi-signature verification is OP_CHECK_____.',
    correctAnswer: 'MULTISIG',
    difficulty: 'easy',
    explanation: 'OP_CHECKMULTISIG verifies multiple signatures against multiple public keys.',
  },
];
