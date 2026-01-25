import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to the authors, what is the source of real "yield" in traditional finance?',
    options: [
      'Speculation on asset prices',
      'Government subsidies',
      'Returns from economically productive activities (businesses, real estate, etc.)',
      'Arbitrage opportunities',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Real yields come from productive economic activity—a business generating profits, real estate producing rent. These represent actual value creation, not just token redistribution.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What do the authors argue DeFi "yields" actually represent?',
    options: [
      'Redistribution of newly minted tokens and fresh capital from new entrants',
      'Returns from productive crypto businesses',
      'Interest from institutional borrowers',
      'Fees from legitimate trading activity',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'DeFi "yields" largely come from token emissions (inflation) and capital from new entrants—not from productive economic activity. Early participants are paid with late participants\' money.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are DeFi lending protocols different from traditional banks?',
    options: [
      'They are more regulated',
      'They require more collateral',
      'They have lower interest rates',
      'The borrowed capital doesn\'t fund productive enterprises—it often just loops back into speculation'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Traditional bank lending funds businesses and productive activities. DeFi lending primarily enables leveraged speculation—the borrowed funds often flow right back into more crypto speculation.',
  },
];
