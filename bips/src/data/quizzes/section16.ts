import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does SegWit stand for?',
    options: [
      'Segment Witness',
      'Segregated Witness',
      'Secure Witness',
      'Sequential Witness',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'SegWit stands for Segregated Witness, separating signature data from transaction data.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What major problem did SegWit fix?',
    options: [
      'Transaction malleability',
      'Double spending',
      '51% attacks',
      'Sybil attacks',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'SegWit fixed transaction malleability by moving signatures outside the txid calculation.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the maximum block weight under SegWit (in weight units)?',
    correctAnswer: 4000000,
    numericRange: { min: 1000000, max: 5000000, precision: 0 },
    difficulty: 'medium',
    explanation: 'SegWit introduced a 4 million weight unit limit, replacing the 1MB byte limit.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In SegWit\'s weight calculation, witness data counts as:',
    options: [
      '2 weight units per byte',
      '4 weight units per byte',
      'Not counted',
      '1 weight unit per byte',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Witness data is discounted at 1 WU per byte, while non-witness data is 4 WU per byte.',
  },
];
