import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-371 add to PSBT?',
    options: [
      'Encryption',
      'Lightning support',
      'Compression',
      'Taproot-specific fields',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'BIP-371 adds fields for Taproot inputs and outputs in PSBTs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-371 includes fields for:',
    options: [
      'P2SH scripts',
      'Taproot leaf scripts and control blocks',
      'SegWit v0 scripts',
      'Legacy P2PKH',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-371 adds Taproot-specific data like leaf scripts, internal keys, and control blocks.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Taproot uses which signature algorithm that BIP-371 PSBTs must support?',
    correctAnswer: 'Schnorr',
    difficulty: 'easy',
    explanation: 'Taproot uses Schnorr signatures per BIP-340.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The PSBT_IN_TAP_INTERNAL_KEY field contains:',
    options: [
      'The full private key',
      'The signature',
      'The x-only internal public key',
      'The script hash',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'This field stores the x-only (32 byte) internal public key for the Taproot output.',
  },
];
