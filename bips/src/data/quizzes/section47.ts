import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is MuSig2?',
    options: [
      'A block validation rule',
      'A multi-signature scheme that produces a single signature',
      'A new address format',
      'A transaction type',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'MuSig2 aggregates multiple signatures into one that looks like a single-key signature.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'MuSig2 requires how many communication rounds?',
    options: [
      '1 round',
      '3 rounds',
      '2 rounds',
      '4 rounds',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'MuSig2 requires 2 rounds: nonce exchange, then signing.',
  },
  {
    id: 3,
    type: 'text',
    question: 'MuSig2 produces signatures compatible with BIP-_____ Schnorr.',
    correctAnswer: '340',
    difficulty: 'medium',
    explanation: 'MuSig2 produces standard BIP-340 Schnorr signatures.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The main advantage of MuSig2 over OP_CHECKMULTISIG is:',
    options: [
      'Simpler implementation',
      'Backward compatibility',
      'Faster verification',
      'Space efficiency and privacy',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'MuSig2 n-of-n looks like single-sig on-chain, saving space and improving privacy.',
  },
];
