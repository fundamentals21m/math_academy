import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The mortality credit in a tontine is:',
    options: [
      'A government subsidy for retirement',
      'The extra income from deceased members\\' shares redistributed to survivors',
      'A tax credit for participating in a tontine',
      'The cost of insuring against death',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The mortality credit is the extra income that survivors receive from inheriting the shares of members who have died.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The total payout to a tontine survivor can be decomposed into:',
    options: [
      'Principal and interest',
      'Fixed and variable components',
      'Investment return plus mortality credit',
      'Short-term and long-term gains',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Total Payout = Investment Return + Mortality Credit. Your payout comes from both your share\'s investment earnings and the redistribution from deceased members.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Year 1, the mortality credit is approximately what percentage of total payout?',
    options: [
      '1%',
      '20%',
      '50%',
      '80%',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In Year 1, mortality credit is only about 1% of total payout since few members have died. The vast majority comes from investment returns.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'By Year 30, the mortality credit comprises approximately what percentage of total payout?',
    options: [
      '1%',
      '20%',
      '80%',
      '50%'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By Year 30, about 80% of the payout comes from mortality credits. Most income now comes from inheriting deceased members\' shares rather than investment returns.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The mortality credit is considered "free" because:',
    options: [
      'It doesn\'t require any initial contribution',
      'It is tax-exempt',
      'The government provides it',
      'No insurance company takes a cut—survivors directly benefit from mortality'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unlike traditional annuities where an insurance company absorbs longevity risk and charges for it, in a tontine survivors directly benefit from mortality—creating efficiency.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why do growing mortality credits particularly help retirees?',
    options: [
      'They provide growing income when healthcare costs typically increase',
      'They reduce tax obligations',
      'They guarantee principal protection',
      'They eliminate inflation risk'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Growing mortality credits can provide increasing income in retirement—exactly when people might need it most for rising healthcare costs.',
  },
];
