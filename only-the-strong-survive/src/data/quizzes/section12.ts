import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the "Jenga tower" metaphor illustrate about crypto?',
    options: [
      'Crypto is built on solid foundations',
      'The system becomes increasingly unstable as more leverage is built on the same base',
      'Crypto can be easily dismantled',
      'Each layer strengthens the whole'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Like Jenga, each new layer of leverage and derivative products makes the structure more precarious. The tower gets taller but the foundation remains the same, creating instability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What sustains crypto valuations according to the Jenga metaphor?',
    options: [
      'Strong technology fundamentals',
      'Continuous capital inflows adding new blocks to the tower',
      'Government backing',
      'Corporate adoption'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fresh capital acts like new blocks being added to keep the game going. Without new inflows, the tower becomes unstable and collapses.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What triggers a "Jenga collapse" in crypto markets?',
    options: [
      'A single large hack',
      'When capital outflows exceed inflows and deleveraging cascades through the system',
      'Government bans',
      'Developer departures'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When more capital leaves than enters, forced liquidations begin. Each liquidation causes price drops that trigger more liquidations—the tower falls as blocks are removed faster than they\'re added.',
  },
];
