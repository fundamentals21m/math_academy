import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The expected present value (EPV) of a future payment combines:',
    options: [
      'Survival probability and discount factor',
      'Risk and reward',
      'Investment return and inflation',
      'Principal and interest',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'EPV = _tp_x × v^t combines the probability of being alive to receive the payment (_tp_x) with its discounted value (v^t).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The formula for EPV of $1 received in $t$ years for a person age $x$ is:',
    options: [
      '$_tp_x + v^t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'EPV = _tp_x × v^t. We multiply survival probability by the discount factor to get expected present value.',
  },
      '$_tp_x / v^t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'EPV = _tp_x × v^t. We multiply survival probability by the discount factor to get expected present value.',
  },
      '$_tp_x - v^t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'EPV = _tp_x × v^t. We multiply survival probability by the discount factor to get expected present value.',
  },
      '$_tp_x \\cdot v^t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'EPV = _tp_x × v^t. We multiply survival probability by the discount factor to get expected present value.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'EPV = _tp_x × v^t. We multiply survival probability by the discount factor to get expected present value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a 65-year-old, $1 promised at age 85 is worth about $0.32 today. This accounts for:',
    options: [
      'Inflation only',
      'Time value only',
      'Both time value ($0.46) and 69% survival probability',
      'Administrative costs',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$1 in 20 years is worth $0.46 today (time value). Only 69% chance of being alive. Combined: 0.691 × 0.456 ≈ 0.315.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a 65-year-old at 4% interest, the EPV of $1 at age 66 (t=1) is approximately:',
    options: [
      '0.99',
      '0.82',
      '0.70',
      '0.9496',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'EPV = _1p_65 × v = 0.988 × 0.9615 = 0.9496. High survival probability and minimal discounting in the first year.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'EPV decreases rapidly for distant future payments because:',
    options: [
      'Inflation erodes value',
      'Interest rates increase over time',
      'Both survival probability and discount factor decrease',
      'Administrative costs compound',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For distant payments, both _tp_x (survival probability) and v^t (discount factor) decrease, compounding to make far-future payments worth much less today.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To determine if a tontine is actuarially fair, we:',
    options: [
      'Compare actual payouts to promises',
      'Calculate each payment\\\\\'s EPV, sum them, and compare to the contribution',
      'Check government approval status',
      'Survey participant satisfaction',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For any stream of tontine payments: calculate each payment\'s EPV, sum them up, and compare to the initial contribution. If equal, it\'s actuarially fair.',
  },
];
