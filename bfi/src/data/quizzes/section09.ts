import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 's09-q1',
    type: 'multiple-choice',
    question: 'What does NQDC stand for?',
    options: [
      'New Qualified Direct Capital',
      'Non-Qualified Dollar Compensation',
      'National Qualified Defined Contribution',
      'Non-Qualified Deferred Compensation'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'NQDC stands for Non-Qualified Deferred Compensation, a type of plan that allows executives to defer compensation to a future date.'
  },
  {
    id: 's09-q2',
    type: 'multiple-choice',
    question: 'What is a key advantage of NQDC plans over 401(k) plans?',
    options: [
      'No contribution limits',
      'Full ERISA protection',
      'Government-backed insurance',
      'Guaranteed returns'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'NQDC plans have no contribution limits, unlike 401(k) plans which are capped at around $23,000 per year plus catch-up contributions.'
  },
  {
    id: 's09-q3',
    type: 'multiple-choice',
    question: 'What is the main risk of NQDC plans?',
    options: [
      'High management fees',
      'Participants are unsecured creditors if the company goes bankrupt',
      'Limited investment options',
      'Excessive regulation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'NQDC plans are not protected by ERISA. If the company goes bankrupt, participants are unsecured creditors and may lose their deferred compensation.'
  },
  {
    id: 's09-q4',
    type: 'multiple-choice',
    question: 'What is the superior long-term NQDC bitcoin strategy according to the book?',
    options: [
      'Use only bitcoin ETFs',
      'Diversify across multiple cryptocurrencies',
      'Company-held bitcoin treasury to back the program',
      'Avoid bitcoin entirely'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Holding a bitcoin treasury and using it in lieu of ETFs eliminates counterparty credit risk entirely - the superior long-term solution.'
  },
  {
    id: 's09-q5',
    type: 'multiple-choice',
    question: 'Why is NQDC considered perfect for bitcoin?',
    options: [
      'NQDC accounts are FDIC insured',
      'Short time horizons match bitcoin\'s volatility',
      'NQDC has lower taxes on bitcoin',
      'Long deferral periods (10-20+ years) align with bitcoin\'s optimal holding period'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Executives typically defer for 10-20+ years, which aligns perfectly with bitcoin\'s optimal holding period and allows volatility to become less relevant as gains compound tax-free.'
  }
];
