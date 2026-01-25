import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The actuarial notation $_tp_x$ denotes:',
    options: [
      'The probability of dying within $t$ years',
      'The pool value at time $t
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation _tp_x denotes the probability of surviving t more years given current age x—a conditional survival probability.',
  },
      'The probability of surviving $t$ more years given current age $x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation _tp_x denotes the probability of surviving t more years given current age x—a conditional survival probability.',
  },
      'The payout per survivor in year $t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation _tp_x denotes the probability of surviving t more years given current age x—a conditional survival probability.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation _tp_x denotes the probability of surviving t more years given current age x—a conditional survival probability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The conditional survival probability $_tp_x$ in terms of the survival function is:',
    options: [
      '$S(x+t) / S(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '_tp_x = S(x+t)/S(x). This is the ratio of surviving to age x+t divided by surviving to age x.',
  },
      '$S(x) - S(x+t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '_tp_x = S(x+t)/S(x). This is the ratio of surviving to age x+t divided by surviving to age x.',
  },
      '$S(x) / S(x+t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '_tp_x = S(x+t)/S(x). This is the ratio of surviving to age x+t divided by surviving to age x.',
  },
      '$S(x) \\times S(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '_tp_x = S(x+t)/S(x). This is the ratio of surviving to age x+t divided by surviving to age x.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '_tp_x = S(x+t)/S(x). This is the ratio of surviving to age x+t divided by surviving to age x.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $S(65) = 0.85$ and $S(75) = 0.70$, what is $_{10}p_{65}$?',
    options: [
      '1.21',
      '0.15',
      '0.70',
      '0.824'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '_{10}p_{65} = S(75)/S(65) = 0.70/0.85 = 0.824. An 82.4% chance of surviving 10 more years from age 65.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The notation $_tq_x$ represents:',
    options: [
      'The probability of surviving $t$ years from age $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '_tq_x = 1 - _tp_x represents the probability of dying within t years from age x.',
  },
      'The quarterly payment amount',
      'The quality score of the tontine',
      'The probability of dying within $t$ years from age $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '_tq_x = 1 - _tp_x represents the probability of dying within t years from age x.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '_tq_x = 1 - _tp_x represents the probability of dying within t years from age x.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Life expectancy at age 65 for U.S. males is approximately:',
    options: [
      '10 years',
      '18 years',
      '14 years',
      '25 years'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using U.S. Social Security life tables, life expectancy e₆₅ for males is approximately 18 years.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why do tontines need conditional survival probabilities?',
    options: [
      'To calculate tax obligations',
      'To weight contributions for people of different ages and predict future survivors',
      'To determine marketing strategies',
      'To comply with banking regulations',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Tontines need conditional probabilities to know how many members will likely survive to each future year, weight contributions for different ages, and determine fair payouts.',
  },
];
