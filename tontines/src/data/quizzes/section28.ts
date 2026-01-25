import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Longevity risk is:',
    options: [
      'The risk of inflation',
      'The risk of dying early',
      'The financial risk from uncertainty about how long people will live',
      'The risk of investment losses',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Longevity risk is the financial risk from uncertainty about how long people will live—for annuity providers, it\'s the risk that annuitants live longer than projected.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Idiosyncratic longevity risk (individual variation) can be:',
    options: [
      'Diversified away with large pools',
      'Eliminated completely',
      'Never managed',
      'Transferred to the government'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Idiosyncratic risk (Alice lives to 90, Bob dies at 75) can be diversified away with large pools through the law of large numbers—individual variations cancel out.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Aggregate longevity risk (systematic changes affecting everyone) is:',
    options: [
      'Easily diversified',
      'Not a concern for insurance companies',
      'Only theoretical, never observed',
      'The main reason for high annuity loading factors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Aggregate risk cannot be diversified—if everyone lives longer due to medical advances, the insurer faces massive unexpected liabilities. This is why loading factors are high.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the example, if a medical breakthrough adds 2 years to average lifespan for 10,000 annuitants receiving $6,000/year, the extra liability is:',
    options: [
      '$12 million',
      '$60 million',
      '$600 million',
      '$120 million',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Extra liability = 10,000 × $6,000 × 2 years = $120,000,000. This cannot be diversified away.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Under Solvency II, insurance companies must hold capital to survive a:',
    options: [
      '1-in-1000 year event',
      '1-in-200 year event',
      '1-in-10 year event',
      '1-in-50 year event',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Solvency II requires capital to survive a 1-in-200 year event—a scenario so bad it would only occur once in 200 years on average.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In a tontine compared to an annuity, longevity risk is borne by:',
    options: [
      'The pool of members (shared)',
      'The insurance company',
      'The government',
      'No one—risk is eliminated'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In a tontine, longevity risk is shared among pool members. If everyone lives longer, payouts automatically adjust down—no one entity bears the risk.',
  },
];
