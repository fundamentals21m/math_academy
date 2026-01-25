import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a life annuity, you pay a premium $P$ and receive:',
    options: [
      'A lump sum at death',
      'A fixed amount $A$ per year for as long as you live',
      'Variable payments depending on market conditions',
      'Payments only for a fixed 20-year period'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A life annuity pays a fixed amount A dollars per year for as long as you live, in exchange for your lump sum premium P.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The actuarially fair premium for a life annuity is:',
    options: [
      '$P = A / x$',
      '$P = A \\times r$',
      '$P = A \\times \\ddot{a}_x$',
      '$P = A + \\ddot{a}_x$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fair premium P = A × ä_x, where ä_x is the annuity-due factor (expected present value of $1/year for life).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a 65-year-old at 4% interest, $\\ddot{a}_{65} \\approx 14.2$. A $100,000 premium should fairly buy:',
    options: [
      '$14,200/year',
      '$4,000/year',
      '$10,000/year',
      '$7,042/year'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fair payout = $100,000 / 14.2 = $7,042/year. This is the actuarially fair annual annuity payment.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Insurance company loading factors typically total:',
    options: [
      '1-2%',
      '15-17%',
      '5-7%',
      '25-30%',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Loading factors (admin costs, profit, capital reserves, adverse selection buffer) typically total 15-17% of actuarially fair value.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Due to loading, a $100,000 annuity purchase actually provides approximately:',
    options: [
      '$6,000/year (about 15% less)',
      '$7,042/year (the fair amount)',
      '$8,000/year (more than fair)',
      '$5,000/year (about 30% less)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Market annuities typically pay about 15% less than fair value due to loading—approximately $6,000/year instead of $7,042.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Over a 20-year retirement, the 15% loading difference between fair and market annuities represents:',
    options: [
      'About $20,000 in total',
      'About $5,000 in total',
      'About $10,000 in total',
      'About $50,000 in total',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Fair annuity: $7,042 × 20 = $140,840. Market annuity: $6,000 × 20 = $120,000. Difference: over $20,000 goes to the insurance company.',
  },
];
