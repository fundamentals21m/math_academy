import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to economic theory, what is the PRIMARY rationale for holding cash?',
    options: [
      'To earn interest',
      'To anticipate future uncertainty',
      'To impress others with wealth',
      'To avoid taxes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The economic rationale for holding cash and its equivalents is rooted in the anticipation of future uncertainty.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'At 2% annual inflation, approximately how much purchasing power is lost after 30 years?',
    options: [
      '20%',
      '33%',
      '45%',
      '60%'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At 2% annual inflation, cash loses approximately 45% of its purchasing power over 30 years due to compounding effects.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How large is the money market fund industry according to the paper?',
    options: [
      'Over $500 billion',
      'Over $1.5 trillion',
      'Over $5.5 trillion',
      'Over $10 trillion'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Money market fund assets have grown to over $5.5 trillion, reflecting massive demand for short-term cash-equivalent investments.',
  },
];
