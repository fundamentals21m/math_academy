import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Stratum V2?',
    options: [
      'Next-generation mining pool protocol',
      'Block validation rule',
      'New address format',
      'Transaction type',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Stratum V2 is a modern mining protocol improving on Stratum V1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Stratum V2 adds:',
    options: [
      'Lower fees',
      'Larger blocks',
      'Mandatory encryption and miner transaction selection',
      'Faster confirmations',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stratum V2 adds encryption and optional Job Declaration for miner-selected transactions.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Stratum V2 uses a _____ protocol format instead of JSON.',
    correctAnswer: 'binary',
    difficulty: 'medium',
    explanation: 'Binary format is more efficient than JSON, reducing bandwidth.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Stratum V2 Job Declaration allows miners to:',
    options: [
      'Increase block rewards',
      'Choose their own transactions to mine',
      'Skip validation',
      'Mine faster',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Job Declaration lets miners select transactions, reducing pool censorship power.',
  },
];
