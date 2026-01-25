import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a natural tontine, the payout at time $t$ is:',
    options: [
      '$D(t) = A / {}_tp_x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The natural tontine has D(t) = A / _tp_x—payout is inversely proportional to survival probability.',
  },
      '$D(t) = A \\cdot {}_tp_x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The natural tontine has D(t) = A / _tp_x—payout is inversely proportional to survival probability.',
  },
      '$D(t) = A
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The natural tontine has D(t) = A / _tp_x—payout is inversely proportional to survival probability.',
  },
      '$D(t) = A \\cdot t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The natural tontine has D(t) = A / _tp_x—payout is inversely proportional to survival probability.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The natural tontine has D(t) = A / _tp_x—payout is inversely proportional to survival probability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The natural tontine was discovered by:',
    options: [
      'Isaac Newton',
      'Milevsky and Salisbury',
      'Lorenzo Tonti',
      'Warren Buffett',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Moshe Milevsky and Thomas Salisbury discovered the natural tontine design that is near-optimal for a wide range of risk aversions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the natural tontine, as survival probability decreases:',
    options: [
      'Payouts become unpredictable',
      'Payouts decrease proportionally',
      'Payouts increase—you receive more when you\\\'re less likely to survive',
      'Payouts stay constant',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since D(t) = A / _tp_x, lower survival probability means higher payout. You receive more when you\'re less likely to be alive to receive it.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'At age 100 with $_tp_{65} = 0.091$, a natural tontine payout would be approximately (if $A = \\$4,000$):',
    options: [
      '$4,000',
      '$12,000',
      '$800,000',
      '$44,000',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'D(100) = $4,000 / 0.091 ≈ $44,000. Compare this to the classic tontine\'s $800,000—much more reasonable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Compared to the classic tontine (800% final payout), the natural tontine reaches approximately:',
    options: [
      '44% final payout',
      '200% final payout',
      '400% final payout',
      'The same 800%',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The natural tontine\'s payouts grow smoothly to about 44% of the initial contribution, versus the classic tontine\'s explosive 800%.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The constant $A$ in the natural tontine formula is found from:',
    options: [
      '$A = W_0 / \\ddot{a}_{\\text{(interest only)}}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since _tp_x cancels in the budget constraint, we get A × Σ v^t = W_0, so A = W_0 / (interest-only annuity factor).',
  },
      'The risk aversion parameter',
      '$A = W_0 \\times r
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since _tp_x cancels in the budget constraint, we get A × Σ v^t = W_0, so A = W_0 / (interest-only annuity factor).',
  },
      'Government tables',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since _tp_x cancels in the budget constraint, we get A × Σ v^t = W_0, so A = W_0 / (interest-only annuity factor).',
  },
];
