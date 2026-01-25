import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What happened to BIP-2?',
    options: [
      'It defines HD wallets',
      'It was never written',
      'It introduced Taproot',
      'It was superseded by later process improvements',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'BIP-2 was an earlier version of the BIP process that was later superseded by process improvements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do some BIP numbers appear to be "missing" or superseded?',
    options: [
      'BIPs can be withdrawn, rejected, or replaced',
      'Satoshi reserved certain numbers',
      'BIP numbers are assigned randomly',
      'Only even numbers are used',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIPs can be withdrawn, rejected, or superseded by newer proposals, leaving gaps in the numbering.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What status indicates a BIP has been replaced by a newer proposal?',
    correctAnswer: 'Superseded',
    difficulty: 'medium',
    explanation: 'A "Superseded" status indicates the BIP has been replaced by a more recent proposal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of these is NOT a valid BIP status?',
    options: [
      'Draft',
      'Approved',
      'Final',
      'Rejected',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '"Approved" is not a standard BIP status. Valid statuses include Draft, Proposed, Final, Active, Replaced, Withdrawn, Deferred, and Rejected.',
  },
];
