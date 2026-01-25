import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-342 define?',
    options: [
      'Taproot addresses',
      'Tapscript: script validation rules for Taproot',
      'Schnorr signatures',
      'SegWit version 2'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-342 specifies Tapscript, the script validation rules for Taproot script path spends.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which opcode does Tapscript use instead of OP_CHECKMULTISIG?',
    options: [
      'OP_CHECKSIGADD',
      'OP_SCHNORRMULTISIG',
      'OP_CHECKMULTISIGVERIFY',
      'OP_AGGREGATESIG',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tapscript introduces OP_CHECKSIGADD for more flexible multi-signature schemes.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Tapscript requires _____ signatures instead of ECDSA.',
    correctAnswer: 'Schnorr',
    difficulty: 'easy',
    explanation: 'Tapscript uses Schnorr signatures (BIP-340) instead of ECDSA.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the leaf version in Tapscript enable?',
    options: [
      'Cross-chain compatibility',
      'Different signature algorithms',
      'Future script upgrades',
      'Variable block sizes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leaf versions allow future soft forks to introduce new script validation rules.',
  },
];
