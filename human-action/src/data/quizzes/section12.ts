import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Monetary entries on balance sheets represent:',
    options: [
      'Precise measurements of objective value',
      'Government-approved valuations',
      'Speculative anticipations of future market conditions',
      'Historical cost exactly as paid',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Despite appearing precise, balance sheet figures are speculative. Every asset valuation involves anticipation of uncertain future conditions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Prices are properly understood as:',
    options: [
      'Historical facts - records of past exchanges',
      'Measurements of intrinsic worth',
      'Government decrees',
      'Objective values set by supply alone',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A price records what someone actually paid at a specific moment. Prices tell us what happened, not what things "are really worth" in some absolute sense.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Businesspeople use past prices primarily to:',
    options: [
      'Determine current value objectively',
      'Report to government regulators',
      'Calculate exact profits',
      'Anticipate future prices for decision-making',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Prices of the past help anticipate future prices. Business calculation always concerns what prices WILL be, not what they were.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Mises argues that attempts at "price stabilization" are:',
    options: [
      'Necessary for economic calculation',
      'Easily achievable with proper policy',
      'Contradictory - seeking unchanging value in a world of constant change',
      'The key to prosperity',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Stability is a contradictory notion. In the realm of action nothing is perpetual but change. Human action itself generates continuous adjustment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Economic calculation requires:',
    options: [
      'Sound money free from government manipulation',
      'Perfect price stability',
      'Constant purchasing power',
      'Central planning'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Calculation needs monetary systems free from inflation and credit expansion - not impossible "price stability." Natural price fluctuation doesn\'t prevent calculation.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Uncertainty in economic calculation stems from:',
    options: [
      'Poor accounting methods',
      'The nature of action itself - dealing with an unknown future',
      'Incompetent businesspeople',
      'Lack of government regulation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Entrepreneurs must guess how millions of people will act tomorrow. Unlike engineering with known physical laws, action always deals with an unknown future.',
  },
];
