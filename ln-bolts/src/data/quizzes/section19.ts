import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary purpose of blinded paths?',
    options: [
      'Hiding recipient identity and network position',
      'Faster routing',
      'Lower fees',
      'Larger payments',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Blinded paths hide the recipient\'s node identity and the final portion of the route for privacy.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "introduction node" in a blinded path?',
    options: [
      'The recipient',
      'The sender',
      'The first public node in the blinded portion',
      'Any routing node',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The introduction node is the entry point to the blinded path - it\'s the only publicly known node in the blinded portion.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who creates blinded paths?',
    options: [
      'The sender',
      'The routing nodes',
      'The network collectively',
      'The recipient',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Recipients create blinded paths and include them in invoices or offers for payers to use.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does a blinded_node_id represent?',
    options: [
      'The original node ID',
      'The real node ID multiplied by a blinding factor',
      'A hash of the node ID',
      'A random placeholder',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Blinded node IDs are derived by multiplying the real node ID by a blinding factor derived from shared secrets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why might recipients provide multiple blinded paths?',
    options: [
      'For redundancy only',
      'To improve reliability and privacy',
      'For fee comparison',
      'Required by the protocol',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiple paths improve reliability (backup if one fails) and privacy (sender chooses randomly).',
  },
];
