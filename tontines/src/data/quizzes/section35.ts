import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Tontine Trust (UK) operates as a:',
    options: [
      'Insurance company',
      'Collective Investment Scheme under FCA oversight',
      'Bank',
      'Government pension fund'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Tontine Trust operates as a Collective Investment Scheme under FCA oversight, avoiding traditional insurance regulation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Professor Milevsky\'s "Riccati Tontine" is based on:',
    options: [
      'Simple averaging',
      'An optimal control problem maximizing lifetime utility',
      'Historical mortality tables only',
      'Random distribution',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Riccati Tontine solves an optimal control problem to maximize lifetime utility, with payouts following a curve derived from the Riccati differential equation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Brookings Institution\'s tontine proposal uses age-weighting where a 75-year-old contributing $100k gets:',
    options: [
      'More units than a 65-year-old',
      'No units at all',
      'The same units as a 65-year-old',
      'Fewer units than a 65-year-old',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A 75-year-old gets more units (10,989 vs 7,042) because they have fewer expected years to receive payments—ensuring actuarial fairness.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Netherlands\' 2023 pension reform transitioned from:',
    options: [
      'No pensions to full pensions',
      'Private to government-only pensions',
      'Collective to individual accounts',
      'Defined benefit to collective defined contribution with risk-sharing',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Dutch reform transitioned from defined benefit promises to collective defined contribution with explicit risk-sharing among participants.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Netherlands has approximately how much in pension assets?',
    options: [
      '€100 billion',
      '€500 billion',
      '€1.5 trillion',
      '€5 trillion',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Netherlands has over €1.5 trillion in pension assets—one of the largest funded pension systems in the world.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which modern tontine product has reached "Legislated" status?',
    options: [
      'Tontine Trust (UK)',
      'UCLA Fund (US)',
      'Brookings (US)',
      'Canadian VPLA',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Canada\'s VPLA has reached "Legislated" status, while Tontine Trust and UCLA Fund are in development/regulatory phases, and Brookings is still a proposal.',
  },
];
