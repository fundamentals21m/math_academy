import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why do Alice and Bob hold different commitment transactions for the same state?',
    options: [
      'Due to network latency',
      'To save storage space',
      'For privacy reasons',
      'To enable the penalty mechanism through asymmetric delays',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Commitment transactions are asymmetric: the broadcaster\'s output has a CSV delay while the counterparty\'s is immediate. This enables penalty enforcement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What two fields encode the obscured commitment number?',
    options: [
      'version and locktime',
      'locktime and sequence',
      'nonce and sequence',
      'version and witness',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The commitment number is hidden in the locktime (lower 24 bits) and input sequence (upper 24 bits).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the to_local output used for?',
    options: [
      'Remote party\\\\\'s balance',
      'HTLC payments',
      'Broadcaster\\\\\'s balance with CSV delay',
      'Channel fees',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The to_local output is the broadcaster\'s balance, delayed by to_self_delay blocks and revocable.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the standard dust limit for P2WSH outputs in satoshis?',
    correctAnswer: 330,
    numericRange: { min: 100, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: 'The dust limit for P2WSH outputs is 330 satoshis. Outputs below this are not created on-chain.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the purpose of anchor outputs?',
    options: [
      'To enable CPFP fee bumping',
      'To store channel metadata',
      'To track commitment number',
      'To hold channel reserves',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Anchor outputs (330 sats each) allow commitment transactions to be fee-bumped using Child-Pays-For-Parent (CPFP).',
  },
];
