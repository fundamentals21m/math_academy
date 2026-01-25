import type { QuizQuestion } from './types';

export const section83Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Layer 2 solution?',
    options: [
      'A second blockchain',
      'A protocol built on top of Bitcoin for scaling',
      'A mining protocol',
      'An address format',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Layer 2 protocols build on Bitcoin\'s security while adding scalability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The blockchain trilemma involves trade-offs between:',
    options: [
      'Speed, cost, and privacy',
      'Size, weight, and fees',
      'Mining, validation, and storage',
      'Security, decentralization, and scalability',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The trilemma suggests you can\'t maximize all three simultaneously.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Lightning Network is Bitcoin\'s primary Layer _____ solution.',
    correctAnswer: '2',
    difficulty: 'easy',
    explanation: 'Lightning is the main Layer 2 payment channel network.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Layer 2 inherits security from:',
    options: [
      'The base layer (Bitcoin)',
      'Trusted servers',
      'Its own consensus',
      'Mining pools',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Layer 2 solutions ultimately rely on Bitcoin\'s base layer security.',
  },
];
