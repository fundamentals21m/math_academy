import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Valuation is ordinal rather than cardinal. This means:',
    options: [
      'Value can be precisely calculated in units',
      'Value is determined by labor inputs',
      'All goods have objectively equal value',
      'We can rank preferences but cannot measure by how much one thing is preferred',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We can say A is preferred to B, but not that A is "twice as valuable." There is no unit of subjective value or measurement of satisfaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The "heterogeneous goods problem" refers to the difficulty of:',
    options: [
      'Comparing different combinations of inputs without a common denominator',
      'Storing different types of inventory',
      'Hiring workers with different skills',
      'Transporting goods across borders',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'You cannot add tons of steel to hours of labor to acres of land. Without money prices providing a common denominator, rational comparison is impossible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Mises, money prices are essential because they:',
    options: [
      'Are set by government authorities',
      'Measure objective value scientifically',
      'Provide a common denominator for economic calculation',
      'Eliminate all uncertainty'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Money prices reduce heterogeneous goods to a common denominator, making it possible to compare costs and revenues and determine profitability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In Mises\'s framework, profit signals that:',
    options: [
      'Workers are being exploited',
      'The government has failed to regulate',
      'Resources have been transformed into outputs consumers value more highly',
      'Resources are being misallocated',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When revenue exceeds cost, the entrepreneur has created value - transforming inputs into outputs that consumers value more. This is the signal of good resource allocation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The socialist calculation problem demonstrates that under socialism:',
    options: [
      'Planning is difficult but possible with computers',
      'Economic calculation is impossible without market prices for capital goods',
      'Efficiency improves with central control',
      'Consumer preferences can be surveyed and satisfied',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Without private ownership of means of production, there are no market prices for capital goods. Without prices, planners cannot determine which production methods are most economical.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Economic calculation cannot evaluate:',
    options: [
      'Things not bought and sold for money, like honor and love',
      'Production costs',
      'Investment returns',
      'Wage rates',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Calculation comprehends only what is exchanged against money. Honor, virtue, love, and artistic beauty lie outside calculation\'s domain - a proper recognition of its boundaries.',
  },
];
