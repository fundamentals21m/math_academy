import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What must be resolved before a mutual close can proceed?',
    options: [
      'All pending fees',
      'All existing HTLCs',
      'All routing table updates',
      'All node announcements',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'All existing HTLCs must be resolved (fulfilled or failed) before the closing negotiation can begin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a benefit of mutual close compared to unilateral close?',
    options: [
      'Lower fees and no timelock delays',
      'More outputs',
      'Higher security',
      'Better for disputes'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Mutual close has lower fees (simpler transaction), no CSV delays, and better privacy.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'After how many confirmations is a closing transaction output considered irrevocably resolved?',
    correctAnswer: 100,
    numericRange: { min: 50, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: 'Outputs become irrevocably resolved at 100-block depth, matching the coinbase maturity requirement.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the locktime of a mutual close transaction?',
    options: [
      'Current block height',
      '100',
      'to_self_delay',
      '0',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The closing transaction has locktime 0 and no HTLCs - it\'s a simple distribution of funds.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What can a node do if the closing transaction doesn\'t confirm in time?',
    options: [
      'Nothing - must wait indefinitely',
      'Double-spend the funding output',
      'Re-negotiate a higher fee or use CPFP',
      'Contact the blockchain operator',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Nodes can re-negotiate with a cooperative peer, use CPFP on their output, or as a last resort broadcast their commitment transaction.',
  },
];
