import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Entrepreneurs shape prices by:',
    options: [
      'Following government directives',
      'Ignoring market signals',
      'Maintaining stable prices',
      'Buying where prices are too low and selling where too high',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Entrepreneurs actively move prices toward equilibrium. When prices differ between markets, they buy low and sell high, pushing prices toward uniformity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Valuation differs from appraisement in that appraisement is:',
    options: [
      'An anticipation of what the market will determine',
      'A subjective preference ranking',
      'Always accurate',
      'Set by government',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Valuation is subjective preference. Appraisement predicts market price - it can be verified after the fact. Both guide economic decisions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Exchange occurs because parties:',
    options: [
      'Agree about value',
      'Are forced by circumstances',
      'Disagree about value - both expect to gain',
      'Want equal outcomes'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Trade happens precisely because parties value things differently. The seller values money more than goods; the buyer values goods more than money. Both win.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The prices of higher-order goods (factors of production) are determined by:',
    options: [
      'Their production costs',
      'Anticipated prices of consumer goods they help produce',
      'Labor inputs required',
      'Government regulation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Causation flows backward from consumers. Wheat is valuable because consumers value bread. Factor prices derive from anticipated product prices.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For rational decision-making, the relevant "cost" is:',
    options: [
      'What was paid in the past (historical cost)',
      'Whatever the accountant records',
      'The best alternative use of resources going forward (opportunity cost)',
      'The government-mandated minimum',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Past expenditures are sunk and irrelevant. What matters is the value of the best foregone alternative - the opportunity cost.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Monopoly pricing requires which conditions?',
    options: [
      'Sole seller, inelastic demand, and no price discrimination',
      'Large company size alone',
      'Government approval',
      'Superior product quality',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Monopoly status alone doesn\'t guarantee monopoly pricing. The seller must also face inelastic demand and be unable to price discriminate.',
  },
];
