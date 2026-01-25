import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What happened in the March 2013 chain fork (BIP-50)?',
    options: [
      '51% attack occurred',
      'Block size limit was hit',
      'LevelDB vs BerkeleyDB incompatibility caused a split',
      'Mining difficulty bug',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Different database backends had different limits, causing a consensus split.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-50 was a:',
    options: [
      'Network protocol update',
      'Informational BIP documenting an incident',
      'Consensus change',
      'Wallet standard',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-50 documents the incident and response for historical record.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The fork was resolved by asking miners to temporarily revert to older software/accept the _____ chain.',
    correctAnswer: 'shorter',
    difficulty: 'hard',
    explanation: 'Miners coordinated to abandon the longer (LevelDB) chain for consistency.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'This incident highlighted the importance of:',
    options: [
      'More miners',
      'Faster blocks',
      'Larger blocks',
      'Implementation consistency across versions'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The incident showed how implementation details can cause consensus failures.',
  },
];
