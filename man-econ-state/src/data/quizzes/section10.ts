import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What determines the purchasing power of money?',
    options: [
      'Government decree',
      'The supply of and demand for money',
      'The gold standard alone',
      'International agreements'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Like any good, money\'s value (purchasing power) is determined by the interaction of supply and demand.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is inflation according to the Austrian definition?',
    options: [
      'Rising prices',
      'An increase in the money supply',
      'Economic growth',
      'Rising wages'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Austrians define inflation as the increase in money supply, which typically leads to rising prices as a consequence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does increasing the money supply not make society wealthier?',
    options: [
      'Because the government takes it all',
      'Because money is only a medium of exchange, not real wealth',
      'Because banks charge interest',
      'Because people don\'t spend it'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Money is a medium of exchange. More money just changes prices; it doesn\'t create more goods and services.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the Cantillon effect?',
    options: [
      'Money always flows to the rich',
      'New money benefits those who receive it first at the expense of later recipients',
      'Inflation affects all prices equally',
      'Money loses value over time'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Those who receive new money first can spend it before prices rise, benefiting at the expense of those who receive it later.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Austrian Business Cycle Theory, what causes boom-bust cycles?',
    options: [
      'Animal spirits of entrepreneurs',
      'Credit expansion by banks that pushes interest rates below natural levels',
      'Overproduction of goods',
      'Underconsumption by workers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Credit expansion artificially lowers interest rates, encouraging malinvestments that must eventually be liquidated.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is fractional reserve banking?',
    options: [
      'Banks that only lend fractions of money',
      'Banks that keep only a fraction of deposits on hand while lending the rest',
      'Banks that charge fractional interest',
      'Government-owned banks'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Fractional reserve banking means banks lend out most deposits, keeping only a fraction in reserve for withdrawals.',
  },
];
