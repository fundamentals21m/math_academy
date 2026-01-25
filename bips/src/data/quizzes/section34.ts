import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are output script descriptors?',
    options: [
      'A network protocol',
      'A language for describing output scripts and keys',
      'A new address format',
      'A signature algorithm',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Descriptors are a human-readable language for describing how to derive addresses.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which descriptor represents a native SegWit address?',
    options: [
      'wpkh(KEY)',
      'pkh(KEY)',
      'sh(KEY)',
      'tr(KEY)'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'wpkh() represents a witness pubkey hash (native SegWit P2WPKH) output.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Descriptors include a _____ for error detection (8-character suffix).',
    correctAnswer: 'checksum',
    difficulty: 'medium',
    explanation: 'Descriptors end with a #checksum to detect transcription errors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What advantage do descriptors have over derivation paths alone?',
    options: [
      'They are shorter',
      'They encrypt the keys',
      'They specify the output script type explicitly',
      'They are faster to parse',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Descriptors explicitly encode what type of script/address to create, removing ambiguity.',
  },
];
