import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why must capital keep flowing into DeFi systems according to the authors?',
    options: [
      'To pay developer salaries',
      'To pay blockchain transaction fees',
      'To maintain the illusion of yield and prevent cascading liquidations',
      'To fund marketing campaigns',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Without fresh capital, the "yields" disappear (since they come from new entrants) and falling prices trigger liquidation cascades. The system needs constant inflows to maintain apparent health.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What happens when capital inflows slow or reverse in a leveraged DeFi system?',
    options: [
      'Yields increase to attract more capital',
      'Prices fall, triggering liquidations which cause more selling, creating a death spiral',
      'The system automatically rebalances',
      'Governance votes to increase rewards',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When capital stops flowing in, yields disappear, prices fall, and leveraged positions get liquidated. Liquidations mean forced selling, which drives prices lower, triggering more liquidations—a death spiral.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What traditional financial concept does DeFi\'s capital dependency most resemble?',
    options: [
      'Index funds',
      'Government bonds',
      'Savings accounts',
      'Ponzi schemes where early investors are paid with later investors\\' money',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The structure where early participants\' "yields" come from new capital rather than productive activity resembles a Ponzi scheme, though the mechanism is obscured by technical complexity.',
  },
];
