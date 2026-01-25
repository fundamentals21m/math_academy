import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The market is best understood as:',
    options: [
      'A physical location where goods are sold',
      'A process of ongoing coordination through voluntary exchange',
      'A government institution',
      'A zero-sum competition',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The market is not a place but a process - millions of individuals constantly adjusting, buying, selling, and producing through voluntary exchange.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Mises distinguishes between capital goods and capital. Capital is:',
    options: [
      'A mental concept for calculation that requires markets and prices',
      'The same as physical machinery',
      'Government-owned resources',
      'Land and natural resources',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Capital goods (physical things) exist in any system. Capital (accounting framework) only exists in market economies with prices. Socialism can have capital goods but not capital.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Mises, who truly controls production in a market economy?',
    options: [
      'Large corporations',
      'Government regulators',
      'Consumers through their spending decisions',
      'Wealthy capitalists',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Consumers are sovereign. Entrepreneurs must obey consumer preferences conveyed through prices, or suffer losses and be replaced.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Market competition is fundamentally:',
    options: [
      'A zero-sum struggle like biological competition',
      'Survival of the strongest and most ruthless',
      'Destructive and wasteful',
      'Positive-sum - everyone benefits from competing to serve consumers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Market competition means striving to serve consumers better. Everyone benefits - there are no "losers" in voluntary exchange. It allocates resources efficiently.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The selective process of the market selects for entrepreneurs who:',
    options: [
      'Have the most political connections',
      'Best serve consumer preferences',
      'Are strongest and most aggressive',
      'Have the largest initial capital',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'It\'s survival of the best servants. Profits signal success at serving consumers; losses signal failure. Failed entrepreneurs are replaced by better servants.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Saving is important because it:',
    options: [
      'Reduces consumer spending harmfully',
      'Benefits only the wealthy',
      'Should be discouraged by government',
      'Funds capital goods that increase future productivity'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Saving funds the capital goods (tools, machines, factories) that increase future output. Present sacrifice enables future abundance.',
  },
];
