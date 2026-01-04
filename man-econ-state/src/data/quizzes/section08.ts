import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What determines wage rates in a free market?',
    options: [
      'Union bargaining power',
      'The discounted marginal revenue product of labor',
      'Government minimum wage laws',
      'Historical custom'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Wages are determined by labor\'s marginal contribution to revenue, discounted by the interest rate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is economic rent in the context of factor prices?',
    options: [
      'Monthly payment for an apartment',
      'Payment to a factor above its opportunity cost',
      'Government tax on property',
      'Interest on capital'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Economic rent is the surplus payment to a factor above what is needed to keep it in its current use.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do skilled workers earn more than unskilled workers?',
    options: [
      'Discrimination against unskilled workers',
      'Their higher marginal productivity makes them more valuable to employers',
      'Union power for skilled trades',
      'Government subsidies for skilled work'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Higher skills mean higher marginal productivity, which translates to higher wages through employer competition.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Rothbard, what is the effect of minimum wage laws?',
    options: [
      'They help all workers',
      'They cause unemployment among workers whose MRP is below the minimum',
      'They have no economic effect',
      'They increase productivity'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Minimum wages price out workers whose productivity is below the mandated wage, causing unemployment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between land rent and land prices?',
    options: [
      'Land prices are unrelated to rent',
      'Land prices are the capitalized value of expected future rents',
      'Land prices determine rent',
      'Both are set by government'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The price of land equals the present value of expected future rental income, discounted at the interest rate.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why do factor prices tend to equalize across industries?',
    options: [
      'Government regulations',
      'Factors move toward higher-paying uses until returns equalize',
      'Workers prefer equality',
      'Union negotiations'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Mobile factors flow from lower-paying to higher-paying uses, equalizing returns across uses (adjusted for non-monetary differences).',
  },
];
