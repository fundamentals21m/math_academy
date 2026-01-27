import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The main lesson from binary options case studies is:',
    options: [
      'Binary options are easy to hedge',
      'All binary option trades are profitable',
      'Discontinuous payoffs cannot be perfectly hedged',
      'Theory and practice are identical'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Binary options demonstrate the gap between theoretical hedging and practical reality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Contract specification details for binaries matter because:',
    options: [
      'They determine the color of the confirmation',
      'They only affect pricing, not payoffs',
      'They are unimportant',
      'They define exactly when and how barriers are monitored'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Details like monitoring hours, price sources, and settlement rules can determine payoffs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Near-expiry binary options are often described as:',
    options: [
      'Pure gambling due to unhedgeable delta',
      'Risk-free investments',
      'The safest options',
      'Best for beginners'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With explosive Greeks, near-expiry binaries become essentially unhedgeable bets.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of risk involves price jumping past barriers without triggering intermediate hedges?',
    correctAnswer: 'gap',
    difficulty: 'easy',
    explanation: 'Gap risk occurs when prices jump past barriers, eliminating hedging opportunities.',
  },
];
