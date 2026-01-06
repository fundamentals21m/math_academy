import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a "Minsky moment"?',
    options: [
      'A period of steady economic growth',
      'A tipping point where accumulated leverage triggers destabilizing market downturn',
      'The moment Bitcoin was invented',
      'A central bank interest rate decision'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Minsky moment occurs when leverage accumulates until a tipping point triggers a destabilizing market downturn, named after economist Hyman Minsky.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the paper, what is the key insight about liquidity?',
    options: [
      'Liquidity is constant across all market conditions',
      'Liquidity is context-dependent rather than an inherent property of an asset',
      'Only government bonds are truly liquid',
      'Liquidity can be created by central banks indefinitely'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Liquidity is context-dependent—"everything is liquid until nothing is." Assets thought to be highly liquid can become illiquid during market stress.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What makes government securities particularly vulnerable to liquidity crises?',
    options: [
      'They have no yield',
      'They are used extensively as collateral, creating interconnected risks',
      'They are too complex to trade',
      'They cannot be sold on weekends'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Government securities constitute the bulk of collateral in the financial system. When their value drops (due to rate hikes), it triggers margin calls and forced selling, creating cascade effects.',
  },
];
