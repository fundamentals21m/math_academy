import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-113 change about nLockTime validation?',
    options: [
      'Adds microsecond precision',
      'Uses median time past instead of block timestamp',
      'Removes nLockTime entirely',
      'Requires miner agreement',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-113 requires nLockTime to be validated against the median time past (MTP) of the previous 11 blocks.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Median Time Past is calculated from how many previous blocks?',
    correctAnswer: 11,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'MTP uses the median timestamp of the 11 blocks preceding the current block.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why was Median Time Past introduced?',
    options: [
      'To prevent miners from manipulating timestamps',
      'To enable smart contracts',
      'To speed up block creation',
      'To reduce blockchain size',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'MTP prevents a single miner from manipulating their block timestamp to affect timelock validation.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What three-letter abbreviation is used for Median Time Past?',
    correctAnswer: 'MTP',
    difficulty: 'easy',
    explanation: 'Median Time Past is commonly abbreviated as MTP.',
  },
];
