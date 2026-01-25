import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 's08-q1',
    type: 'multiple-choice',
    question: 'What does LDI stand for?',
    options: [
      'Long Duration Investments',
      'Liability Driven Investing',
      'Leveraged Debt Instruments',
      'Liquid Digital Infrastructure',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'LDI stands for Liability Driven Investing, a strategy where pension returns are measured relative to liabilities rather than absolute returns.'
  },
  {
    id: 's08-q2',
    type: 'multiple-choice',
    question: 'What happened to "risk-free" government bonds in 2022?',
    options: [
      'They lost 30-50% of their value',
      'They were guaranteed by the IMF',
      'They became more valuable',
      'They were converted to bitcoin',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In 2022, supposedly "risk-free" government bonds lost 30-50% of value, devastating Modern Portfolio Theory which was built on the assumption of a risk-free asset.'
  },
  {
    id: 's08-q3',
    type: 'multiple-choice',
    question: 'What did Larry Fink famously say about bitcoin before BlackRock\'s pivot?',
    options: [
      'It\\'s the future of finance',
      'It\\'s only useful to money launderers',
      'It\\'s a great store of value',
      'It\\'s better than gold',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Larry Fink famously called bitcoin "only useful to money launderers" before BlackRock dramatically pivoted to launch the largest bitcoin ETF (IBIT).'
  },
  {
    id: 's08-q4',
    type: 'multiple-choice',
    question: 'What record did BlackRock\'s IBIT ETF break?',
    options: [
      'Longest time to profitability',
      'Most diverse holdings',
      'Lowest management fees',
      'Fastest ETF to reach $10B, $20B, $30B, $40B, and $50B AUM',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'IBIT broke every ETF record by being the fastest to reach $10B, $20B, $30B, $40B, and $50B in assets under management.'
  },
  {
    id: 's08-q5',
    type: 'multiple-choice',
    question: 'Why is BlackRock\'s mutual fund complex described as a "Trojan horse" for bitcoin?',
    options: [
      'It hides bitcoin from regulators',
      'It disguises bitcoin as bonds',
      'It will bring bitcoin exposure to retirement accounts through indirect allocation',
      'It protects bitcoin from hackers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BlackRock\'s mutual fund complex is the vehicle that will bring institutional bitcoin exposure to pensions and retirement accounts by making it indirect and almost invisible through target date funds.'
  }
];
