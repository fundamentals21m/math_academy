import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the NODE_BLOOM service bit indicate?',
    options: [
      'Node is mining',
      'Node supports BIP-37 Bloom filtering',
      'Node has full blockchain',
      'Node supports SegWit'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'NODE_BLOOM indicates support for BIP-37 Bloom filter requests.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Which service bit number is NODE_BLOOM?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: 'NODE_BLOOM is service bit 2 (value 4 in the bitmap).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'By default, Bitcoin Core now:',
    options: [
      'Requires NODE_BLOOM',
      'Always advertises NODE_BLOOM',
      'Ignores NODE_BLOOM',
      'Does not advertise NODE_BLOOM',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Due to security concerns, NODE_BLOOM is disabled by default.',
  },
  {
    id: 4,
    type: 'text',
    question: 'Service bits are exchanged in the _____ message.',
    correctAnswer: 'version',
    difficulty: 'medium',
    explanation: 'Nodes exchange their service bits during the version handshake.',
  },
];
