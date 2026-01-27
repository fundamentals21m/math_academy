import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A liquidity hole is:',
    options: [
      'A type of exotic option',
      'A sudden, severe reduction in market liquidity',
      'A profitable trading opportunity',
      'A period of excess liquidity'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Liquidity holes occur when market liquidity suddenly evaporates, often during high volatility.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Market impact is typically proportional to:',
    options: [
      'The inverse of order size',
      'The square root of order size relative to volume',
      'The logarithm of order size',
      'Order size squared'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Market impact typically scales as $\\sigma \\sqrt{Q/V}$ where Q is order size and V is volume.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which statement about hedging frequency is TRUE?',
    options: [
      'Less frequent hedging is always better',
      'More frequent hedging reduces P&L variance but increases costs',
      'More frequent hedging always improves P&L',
      'Hedging frequency has no effect on results'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Frequent hedging matches theory better but incurs more transaction costs - there is a trade-off.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Taleb, positions should be sized for:',
    options: [
      'Normal market conditions',
      'Average volatility',
      'Best-case outcomes',
      'Worst-case liquidity scenarios'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taleb advises sizing for worst-case liquidity, not normal conditions, since liquidity fails when needed most.',
  },
];
