import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 's12-q1',
    type: 'multiple-choice',
    question: 'What company developed a loan product using bitcoin as collateral?',
    options: [
      'BlackRock',
      'Coinbase',
      'Battery Finance (Newmarket Capital)',
      'MicroStrategy'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Newmarket Capital and their subsidiary Battery Finance developed a loan product that enables bitcoin to be used as 10-30% of collateral alongside traditional assets.'
  },
  {
    id: 's12-q2',
    type: 'multiple-choice',
    question: 'What is the minimum period before bitcoin collateral can be wound down in Battery Finance loans?',
    options: [
      'Three years',
      'One year',
      'Two years',
      'Four years (aligned with bitcoin\'s halving cycle)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The earliest that bitcoin collateral can be wound down is four years, aligned with bitcoin\'s four-year halving cycle.'
  },
  {
    id: 's12-q3',
    type: 'multiple-choice',
    question: 'Why does a bitcoin-collateralized loan become behaviorally "senior"?',
    options: [
      'A person will let any other asset go before relinquishing their bitcoin',
      'Contractual terms make it senior',
      'Government regulations require it',
      'Banks prioritize it automatically'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If a borrower posts bitcoin as collateral, this loan automatically becomes the most senior because behaviorally, a person will let any other asset go before relinquishing their bitcoin.'
  },
  {
    id: 's12-q4',
    type: 'multiple-choice',
    question: 'According to the book, what behavior should bitcoin-collateralized borrowers exhibit?',
    options: [
      'Higher default rates',
      'AAA-equivalent credit behavior',
      'Erratic payment patterns',
      'Average credit behavior'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Both "degens" and "savers" will prioritize protecting their bitcoin, leading to AAA-equivalent credit behavior on these loans.'
  },
  {
    id: 's12-q5',
    type: 'multiple-choice',
    question: 'What events demonstrated that traditional collateral has failed?',
    options: [
      'Only the 2008 housing crisis',
      'Bitcoin price crashes',
      '2008 housing crisis, 2022 UK Gilt crisis, and 2023 US banking crisis',
      'Stock market corrections'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The 2008 Global Financial Crisis, 2022 Bank of England pension bailout (UK Gilts), and 2023 US banking crisis all showed that traditional collateral can rapidly become unreliable.'
  }
];
