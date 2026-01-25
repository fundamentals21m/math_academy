import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When might you need to perform a unilateral close?',
    options: [
      'When you want lower fees',
      'When you want faster confirmation',
      'When the peer is unresponsive',
      'When closing a zero-conf channel'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Unilateral close is used when the peer is unresponsive, HTLCs are expiring, or there\'s a protocol violation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When you broadcast YOUR commitment transaction, what happens to your to_local output?',
    options: [
      'Requires to_self_delay blocks before spending',
      'Immediately spendable',
      'Goes to the counterparty',
      'Locked forever',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Your to_local output requires waiting to_self_delay blocks after confirmation before you can spend it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When your PEER broadcasts their commitment, what happens to your output (to_remote)?',
    options: [
      'Requires delay',
      'Immediately spendable',
      'Requires HTLC resolution first',
      'Must wait 100 blocks',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the peer broadcasts, your output (their to_remote) is immediately spendable with no delay.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why must you extract preimages from on-chain HTLC claims?',
    options: [
      'For backup purposes',
      'For accounting records',
      'It\\'s optional',
      'To claim corresponding upstream HTLCs',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If someone claims an HTLC you offered on-chain, you MUST extract the preimage to claim the corresponding upstream HTLC or you lose money.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many confirmations are typically considered "final resolution" depth?',
    correctAnswer: 100,
    numericRange: { min: 50, max: 200, precision: 0 },
    difficulty: 'easy',
    explanation: 'Transactions at 100-block depth are considered irrevocably resolved.',
  },
];
