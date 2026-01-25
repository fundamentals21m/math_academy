import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A life annuity pays:',
    options: [
      'A fixed amount per year for as long as the annuitant lives',
      'A lump sum at death',
      'Increasing amounts each year',
      'Only for a fixed period of 20 years',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A life annuity pays a fixed amount (e.g., $1/year) for as long as the annuitant lives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The actuarial present value of a life annuity is denoted:',
    options: [
      '$S_x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The notation ä_x (a-double-dot-x) represents the actuarial present value of a life annuity for someone age x.',
  },
      '$\\ddot{a}_x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation ä_x (a-double-dot-x) represents the actuarial present value of a life annuity for someone age x.',
  },
      '$F_x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation ä_x (a-double-dot-x) represents the actuarial present value of a life annuity for someone age x.',
  },
      '$\\mu_x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation ä_x (a-double-dot-x) represents the actuarial present value of a life annuity for someone age x.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation ä_x (a-double-dot-x) represents the actuarial present value of a life annuity for someone age x.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a 65-year-old at 4% interest, $\\ddot{a}_{65}$ is approximately:',
    options: [
      '20.0',
      '8.5',
      '14.2',
      '10.0',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'ä_65 ≈ 14.2, meaning the fair price for a $1/year annuity for a 65-year-old is about $14.20.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\ddot{a}_{65} = 14.2$, a $100,000 premium should fairly buy an annual payout of:',
    options: [
      '$4,000',
      '$5,500',
      '$10,000',
      '$7,042',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Fair payout = $100,000 / 14.2 = $7,042/year. This is the actuarially fair annuity payment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Insurance companies add "loading" to annuity prices for all EXCEPT:',
    options: [
      'Survival probability calculations',
      'Administrative costs',
      'Profit margin',
      'Adverse selection buffer',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Survival probability calculations are part of the fair price, not loading. Loading includes admin costs, profit, capital reserves, and adverse selection buffer.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Due to loading, a $100,000 annuity purchase might actually provide approximately:',
    options: [
      '$7,042/year (the fair amount)',
      '$8,000/year (more than fair)',
      '$6,000/year (about 15% less than fair)',
      '$5,000/year (about 30% less than fair)'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Insurance companies typically add about 15% in loading, so $100,000 might buy only $6,000/year instead of the fair $7,042.',
  },
];
