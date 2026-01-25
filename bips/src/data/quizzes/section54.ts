import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-350 define?',
    options: [
      'New signature algorithm',
      'Block format',
      'Bech32m encoding for SegWit v1+',
      'Mining protocol',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-350 defines Bech32m, a modified Bech32 for SegWit version 1 and later.',
  },
  {
    id: 2,
    type: 'text',
    question: 'Taproot addresses start with "bc1" followed by which letter?',
    correctAnswer: 'p',
    difficulty: 'medium',
    explanation: 'SegWit v1 (Taproot) addresses start with "bc1p" (p = version 1).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why was Bech32m needed?',
    options: [
      'For shorter addresses',
      'For encryption',
      'For faster encoding',
      'Bech32 had a weakness with certain lengths',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bech32 had a weakness where errors in certain positions could go undetected.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Bech32m differs from Bech32 by:',
    options: [
      'Using a different constant in the checksum',
      'Being uppercase',
      'Using different characters',
      'Adding encryption',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Bech32m uses a different constant (0x2bc830a3 vs 1) in its checksum calculation.',
  },
];
