import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The modern tontine revival is driven by three converging forces. Which is NOT one of them?',
    options: [
      'The longevity crisis (people living longer)',
      'The annuity problem (high loading factors)',
      'Academic breakthroughs in optimal design',
      'Government mandates requiring tontine purchases',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The three driving forces are: (1) people living longer than retirement savings were designed for, (2) expensive annuity loading factors, and (3) academic research showing optimal tontine design.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A "loading factor" in insurance refers to:',
    options: [
      'The weight of physical documents',
      'The amount by which the price exceeds actuarially fair value',
      'The number of policies an agent can sell',
      'The maximum contribution limit',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The loading factor is the amount by which an insurance product\'s price exceeds its actuarially fair value, covering administrative costs, profit margins, and capital requirements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Typical life annuity loading factors charged by insurance companies are:',
    options: [
      '25-30%',
      '1-3%',
      '12-18%',
      '5-8%',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Insurance companies charge substantial loading factors (12-18%) for guaranteed lifetime income because they must hold capital reserves against the risk that everyone lives too long.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The 2015 paper "Optimal Retirement Income Tontines" by Milevsky & Salisbury showed that:',
    options: [
      'Optimal tontines can achieve nearly the same utility as perfect annuities',
      'Tontines should be banned permanently',
      'Annuities are always superior to tontines',
      'Historical tontine designs were optimal'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The paper showed that mathematically optimal tontines can achieve nearly the same utility as perfect annuities—but without the insurance company overhead.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A 65-year-old today can expect to live approximately:',
    options: [
      '5-10 more years',
      '10-15 more years',
      '30+ more years',
      '20+ more years',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'People are living longer than ever. A 65-year-old today can expect to live 20+ more years, with a significant chance of reaching 90 or beyond.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Modern tontine proposals include which feature to ensure fairness?',
    options: [
      'Age-adjusted contributions',
      'Equal payouts regardless of age',
      'Government-guaranteed returns',
      'Fixed contribution amounts for all',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Modern proposals use age-adjusted contributions to ensure fairness across different demographics, since older members have shorter expected lifetimes.',
  },
];
