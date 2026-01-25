import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-322 define?',
    options: [
      'Generic message signing for any script type',
      'Transaction signing',
      'Block signing',
      'Address generation'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-322 defines a generic method for signing messages with any Bitcoin script.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-322 improves on previous message signing by:',
    options: [
      'Being faster',
      'Using less data',
      'Supporting all address types including Taproot',
      'Requiring fewer keys',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-322 extends message signing to work with P2SH, SegWit, and Taproot.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-322 uses a virtual _____ to prove message signing.',
    correctAnswer: 'transaction',
    difficulty: 'hard',
    explanation: 'BIP-322 creates a virtual "to_sign" transaction that proves ownership.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The legacy message signing prefix is:',
    options: [
      '"Sign:"',
      '"Bitcoin Signed Message:"',
      '"BTC Message:"',
      '"Message:"',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Legacy Bitcoin message signing uses "Bitcoin Signed Message:\\n" prefix.',
  },
];
