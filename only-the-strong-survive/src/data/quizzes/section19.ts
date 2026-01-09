import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the rehypothecation algebra in Appendix B calculate?',
    options: [
      'Token prices',
      'The true systemic exposure when collateral is reused across protocols',
      'Mining profitability',
      'Transaction throughput'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The appendix provides mathematical formulas to calculate how much actual collateral backs the system when the same assets are pledged multiple times across different protocols.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If an asset is used as collateral with 80% loan-to-value twice in succession, what is the total "exposure" relative to the original collateral?',
    options: [
      '80%',
      '160%',
      '144%',
      '180%'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'First loan: 80% of original. Second loan (on the borrowed amount): 80% × 80% = 64%. Total exposure: 80% + 64% = 144% of the original collateral—more debt than underlying value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the rehypothecation math reveal about DeFi\'s apparent robustness?',
    options: [
      'DeFi is very well collateralized',
      'The same underlying collateral may support far more "value" than it can actually back',
      'Collateralization ratios are accurate',
      'DeFi is safer than traditional finance'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The math shows that through rehypothecation, a relatively small base of actual collateral can appear to secure a much larger amount of positions—hiding systemic fragility.',
  },
];
