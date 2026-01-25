import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary purpose of blinded paths?',
    options: [
      'Faster routing',
      'Lower fees',
      'Hiding recipient identity and network position',
      'Larger payments',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Blinded paths hide the recipient\'s node identity and the final portion of the route for privacy.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "introduction node" in a blinded path?',
    options: [
      'The recipient',
      'The first public node in the blinded portion',
      'The sender',
      'Any routing node',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The introduction node is the entry point to the blinded path - it\'s the only publicly known node in the blinded portion.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who creates blinded paths?',
    options: [
      'The recipient',
      'The sender',
      'The routing nodes',
      'The network collectively',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Recipients create blinded paths and include them in invoices or offers for payers to use.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does a blinded_node_id represent?',
    options: [
      'The real node ID multiplied by a blinding factor',
      'The original node ID',
      'A hash of the node ID',
      'A random placeholder',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Blinded node IDs are derived by multiplying the real node ID by a blinding factor derived from shared secrets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why might recipients provide multiple blinded paths?',
    options: [
      'For redundancy only',
      'For fee comparison',
      'Required by the protocol',
      'To improve reliability and privacy',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Multiple paths improve reliability (backup if one fails) and privacy (sender chooses randomly).',
  },
];
