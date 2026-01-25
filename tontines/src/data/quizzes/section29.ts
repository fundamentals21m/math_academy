import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Tontine payouts are "self-adjusting" because:',
    options: [
      'The administrator manually adjusts them',
      'Payouts are determined by actual fund performance and survivorship',
      'Government regulations set the amounts',
      'They are linked to inflation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In a tontine, payouts are determined by actual fund performance and actual survivorship—the pool distributes what it has among those who remain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a medical breakthrough adds 3 years to average lifespan, a tontine pool:',
    options: [
      'Must pay 3 extra years of fixed payments',
      'Automatically adjusts payouts downward—remaining solvent',
      'Goes bankrupt',
      'Has no change',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a tontine, payouts automatically adjust downward when members live longer. Each survivor gets slightly less per year, but the pool remains solvent with zero additional liability.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Tontine administrative fees are typically:',
    options: [
      '25-30%',
      '5-10%',
      '0.5-1%',
      '15-20%',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Tontine administrative fees are typically 0.5-1%, compared to 15-17% effective loading in market annuities.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The efficiency gain of tontines over market annuities is approximately:',
    options: [
      '5%',
      '10%',
      '25%',
      '17%',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Tontines deliver approximately 17% more expected payout than market annuities—the entire loading factor stays with members.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Unlike annuities, tontine members can:',
    options: [
      'Choose their investment strategy (conservative, balanced, growth)',
      'Guarantee their returns',
      'Eliminate all risk',
      'Avoid all taxes',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Tontine members, bearing their own risk, can choose different investment strategies—conservative, balanced, or growth—to match their preferences.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is NOT an advantage of tontines over annuities?',
    options: [
      'No longevity risk to provider',
      'Greater transparency',
      'Guaranteed income',
      'Higher efficiency'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Guaranteed income is an advantage of annuities, not tontines. Tontine advantages include no provider risk, transparency, and higher efficiency.',
  },
];
