import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-145 extend?',
    options: [
      'Address format',
      'P2P protocol',
      'getblocktemplate for SegWit',
      'Signature algorithm',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-145 adds SegWit-specific fields to getblocktemplate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-145 adds support for:',
    options: [
      'Lower difficulty',
      'Larger nonces',
      'Faster hashing',
      'Weight limits and witness commitment',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-145 adds weight-based limits and witness commitment fields.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Miners signal SegWit support with the "segwit" entry in the _____ array.',
    correctAnswer: 'rules',
    difficulty: 'hard',
    explanation: 'Miners include "segwit" in the rules array to get SegWit templates.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The SegWit block weight limit is how many weight units?',
    correctAnswer: 4000000,
    numericRange: { min: 1000000, max: 5000000, precision: 0 },
    difficulty: 'medium',
    explanation: 'SegWit introduced a 4 million weight unit limit.',
  },
];
