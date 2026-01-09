import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Total Value Locked (TVL)?',
    options: [
      'The total market cap of all cryptocurrencies',
      'The sum of assets deposited in DeFi protocols',
      'The amount of Bitcoin in circulation',
      'The total trading volume on exchanges'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'TVL measures the total value of crypto assets deposited in DeFi protocols—used as collateral, for lending, or in liquidity pools.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do the authors argue TVL is a misleading metric?',
    options: [
      'It\'s too difficult to calculate accurately',
      'It counts the same underlying collateral multiple times due to rehypothecation',
      'It doesn\'t account for inflation',
      'It excludes Bitcoin'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When the same ETH is deposited, converted to derivative tokens, and those deposited elsewhere, TVL counts each step separately. The "locked value" is inflated beyond the actual underlying assets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What effect do high TVL numbers have on investor behavior?',
    options: [
      'They discourage new investment',
      'They create a false sense of security and attract more capital',
      'They have no effect on behavior',
      'They cause prices to drop'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'High TVL numbers signal "safety" and attract more capital, which inflates TVL further. This reflexive loop obscures the actual fragility of the underlying system.',
  },
];
