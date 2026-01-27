import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the generalized option framework, $\\omega = -1$ represents:',
    options: [
      'A call option',
      'A short position',
      'A long position',
      'A put option'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the generalized option notation, $\\omega = +1$ is long and $\\omega = -1$ is short.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which position always has positive gamma?',
    options: [
      'Short call',
      'Short put',
      'Long call',
      'Short stock'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All long options (calls and puts) have positive gamma. Short options have negative gamma.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A long straddle has payoff at expiration equal to:',
    options: [
      '$S_T - K$',
      '$K - S_T$',
      '$(S_T - K)^2$',
      '$|S_T - K|$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A straddle (long call + long put at same strike) pays the absolute deviation from the strike.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The linearity of Greeks means:',
    options: [
      'Each Greek is a linear function of spot',
      'Portfolio Greeks equal the sum of individual position Greeks',
      'Delta is always between 0 and 1',
      'Gamma cannot be negative'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Portfolio Greeks are additive - you can sum the Greeks of individual positions to get the total.',
  },
];
