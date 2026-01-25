import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-68 enable?',
    options: [
      'Relative timelocks using nSequence',
      'Absolute timelocks using nLockTime',
      'Multi-signature transactions',
      'Larger block sizes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-68 repurposes the nSequence field to enable relative timelocks.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Relative timelocks are measured from when?',
    options: [
      'A fixed block height',
      'The creation of the transaction',
      'The confirmation of the referenced output',
      'The previous halving',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Relative timelocks count from when the spent output was confirmed, not from a fixed point.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What transaction field does BIP-68 repurpose for relative timelocks?',
    correctAnswer: 'nSequence',
    difficulty: 'medium',
    explanation: 'BIP-68 repurposes the previously mostly-unused nSequence field for relative timelock encoding.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'BIP-68 relative timelocks can specify time in blocks. How many seconds does one block represent (approximately)?',
    correctAnswer: 512,
    numericRange: { min: 500, max: 520, precision: 0 },
    difficulty: 'hard',
    explanation: 'Each time unit in BIP-68 represents 512 seconds (about 8.5 minutes) when using time-based locks.',
  },
];
