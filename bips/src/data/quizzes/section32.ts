import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What address type does BIP-86 specify derivation for?',
    options: [
      'P2SH-wrapped SegWit',
      'Taproot (bc1p addresses)',
      'Native SegWit (bc1q)',
      'Legacy addresses',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-86 defines derivation paths for Taproot (P2TR) addresses starting with bc1p.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What purpose number does BIP-86 use?',
    correctAnswer: 86,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'BIP-86 uses purpose 86.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'BIP-86 Taproot keys are derived for:',
    options: [
      'Multi-signature only',
      'Script-path spending only',
      'Both key and script paths',
      'Key-path spending only (no scripts)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-86 is for simple single-key Taproot, committing to an unspendable script path.',
  },
  {
    id: 4,
    type: 'text',
    question: 'Taproot addresses use _____ encoding (with the "m" variant).',
    correctAnswer: 'bech32m',
    difficulty: 'medium',
    explanation: 'Taproot addresses use bech32m encoding, which fixes a weakness in original bech32.',
  },
];
