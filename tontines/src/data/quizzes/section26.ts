import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a natural tontine, share units for member $i$ at time $t$ are:',
    options: [
      '$w_i(t) = {}_tp_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Share units w_i(t) = C_i / _tp_i. Members with lower survival probability get more share units, compensating for their shorter expected lifetime.',
  },
      '$w_i(t) = C_i \\times {}_tp_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Share units w_i(t) = C_i / _tp_i. Members with lower survival probability get more share units, compensating for their shorter expected lifetime.',
  },
      '$w_i(t) = C_i / {}_tp_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Share units w_i(t) = C_i / _tp_i. Members with lower survival probability get more share units, compensating for their shorter expected lifetime.',
  },
      '$w_i(t) = C_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Share units w_i(t) = C_i / _tp_i. Members with lower survival probability get more share units, compensating for their shorter expected lifetime.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Share units w_i(t) = C_i / _tp_i. Members with lower survival probability get more share units, compensating for their shorter expected lifetime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The payout formula for member $i$ is:',
    options: [
      '$D_i(t) = W \\times r
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each member\'s payout is their share of total share units times the pool\'s investment income: D_i(t) = [w_i(t) / Σw_j(t)] × W × r.',
  },
      '$D_i(t) = \\frac{w_i(t)}{\\sum_j w_j(t)} \\times W \\times r
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Each member\'s payout is their share of total share units times the pool\'s investment income: D_i(t) = [w_i(t) / Σw_j(t)] × W × r.',
  },
      '$D_i(t) = C_i \\times r
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Each member\'s payout is their share of total share units times the pool\'s investment income: D_i(t) = [w_i(t) / Σw_j(t)] × W × r.',
  },
      '$D_i(t) = {}_tp_i \\times W
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Each member\'s payout is their share of total share units times the pool\'s investment income: D_i(t) = [w_i(t) / Σw_j(t)] × W × r.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Each member\'s payout is their share of total share units times the pool\'s investment income: D_i(t) = [w_i(t) / Σw_j(t)] × W × r.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the three-member example (Alice 65F, Bob 65M, Carol 70F), who receives the highest payout?',
    options: [
      'Alice (lowest mortality rate)',
      'Bob (male, higher mortality)',
      'Carol (older, higher mortality)',
      'They all receive exactly the same'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bob (65M, _1p = 0.988) gets slightly more ($4,008) than Carol ($4,005) and Alice ($3,987) because his survival probability is lowest.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When a tontine member dies, their capital:',
    options: [
      'Stays in the pool, automatically increasing survivors\\' share units',
      'Is returned to their heirs',
      'Is paid to the administrator',
      'Is redistributed immediately as a one-time payment',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Deceased members\' capital stays in the pool. Surviving members\' share units increase relative to the (now smaller) survivor pool, naturally increasing their payouts.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The natural tontine formula achieves fairness for heterogeneous members because:',
    options: [
      'The administrator adjusts payouts subjectively',
      'It ignores mortality differences',
      'It requires all members to have identical mortality',
      'Members with lower survival get higher payouts, compensating for shorter lifetime'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The formula automatically handles heterogeneity—members with lower survival probability receive higher payouts, exactly compensating for their shorter expected lifetime.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For all members in a properly constructed natural tontine:',
    options: [
      'Expected present value equals their contribution',
      'Expected payouts are equal',
      'Actual payouts are guaranteed',
      'Mortality differences are ignored'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The natural tontine is actuarially fair for everyone: EPV = contribution for all members regardless of age, sex, or health status.',
  },
];
