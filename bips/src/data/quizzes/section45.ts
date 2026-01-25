import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What signature hash flags does BIP-118 introduce?',
    options: [
      'SIGHASH_ALL and SIGHASH_NONE',
      'SIGHASH_SINGLE',
      'SIGHASH_ANYPREVOUT and SIGHASH_ANYPREVOUTANYSCRIPT',
      'SIGHASH_ANYONECANPAY',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-118 introduces ANYPREVOUT flags that don\'t commit to the input being spent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does ANYPREVOUT enable?',
    options: [
      'Faster validation',
      'Larger transactions',
      'Better privacy',
      'Signatures valid for any matching output',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'ANYPREVOUT signatures can spend any output with matching script conditions.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-118 is primarily motivated by enabling the _____ payment channel protocol.',
    correctAnswer: 'Eltoo',
    difficulty: 'medium',
    explanation: 'ANYPREVOUT is key to enabling Eltoo, a simplified channel update mechanism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-118 signatures do NOT commit to:',
    options: [
      'The signature hash type',
      'The input txid and vout',
      'The output amounts',
      'The script',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'ANYPREVOUT excludes the outpoint (txid:vout) from the signature hash.',
  },
];
