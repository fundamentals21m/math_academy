import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-23 add to getblocktemplate?',
    options: [
      'Faster validation',
      'Extensions for pooled mining',
      'Smaller templates',
      'Address generation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-23 adds extensions for mining pool coordination with getblocktemplate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Long polling in BIP-23 helps with:',
    options: [
      'Lower network latency',
      'Faster hash calculation',
      'Better randomness',
      'Getting new work immediately when blocks change',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Long polling notifies miners of new blocks without constant polling.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Mining pools distribute work to _____ who perform the actual hashing.',
    correctAnswer: 'miners',
    difficulty: 'easy',
    explanation: 'Pools coordinate work among individual miners/hashers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The "workid" field helps pools:',
    options: [
      'Generate addresses',
      'Calculate fees',
      'Track which work template a share came from',
      'Validate signatures',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'workid lets pools associate submitted shares with specific templates.',
  },
];
