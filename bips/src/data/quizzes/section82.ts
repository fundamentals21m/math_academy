import type { QuizQuestion } from './types';

export const section82Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why do mining pools exist?',
    options: [
      'To reduce variance in mining rewards',
      'To increase block size',
      'To lower difficulty',
      'To speed up transactions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pools provide steady income by sharing rewards proportionally.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "share" in pool mining?',
    options: [
      'A block reward portion',
      'Ownership in the pool',
      'A mining machine',
      'A proof of work at lower difficulty than the network',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Shares prove work at pool-set difficulty, tracking miner contributions.',
  },
  {
    id: 3,
    type: 'text',
    question: 'PPS stands for Pay Per _____.',
    correctAnswer: 'Share',
    difficulty: 'easy',
    explanation: 'PPS (Pay Per Share) pays miners a fixed rate for each submitted share.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Large mining pools raise concerns about:',
    options: [
      'Better security',
      'Centralization and transaction censorship',
      'Lower fees',
      'Faster blocks',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Pool concentration could enable censorship or coordinated attacks.',
  },
];
