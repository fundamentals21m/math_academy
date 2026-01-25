import type { QuizQuestion } from './types';

export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-91 achieve?',
    options: [
      'Activated SegWit with lower miner threshold',
      'Increased block size',
      'Changed mining algorithm',
      'Introduced Taproot'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-91 enabled SegWit activation with 80% instead of 95% miner signaling.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What was the BIP-91 activation threshold percentage?',
    correctAnswer: 80,
    numericRange: { min: 50, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'BIP-91 used an 80% threshold over 336 blocks.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'BIP-91 was deployed during:',
    options: [
      'The block size debate',
      'The Taproot activation',
      'The SegWit2x controversy',
      'The initial Bitcoin launch',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-91 was part of the 2017 SegWit/SegWit2x activation saga.',
  },
  {
    id: 4,
    type: 'text',
    question: 'BIP-91 forced miners to signal for BIP-_____ (SegWit) once activated.',
    correctAnswer: '141',
    difficulty: 'hard',
    explanation: 'Once BIP-91 locked in, it rejected blocks not signaling for BIP-141.',
  },
];
