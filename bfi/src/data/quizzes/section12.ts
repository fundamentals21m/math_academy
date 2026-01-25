import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 's12-q1',
    type: 'multiple-choice',
    question: 'What company developed a loan product using bitcoin as collateral?',
    options: [
      'BlackRock',
      'Coinbase',
      'MicroStrategy',
      'Battery Finance (Newmarket Capital)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Newmarket Capital and their subsidiary Battery Finance developed a loan product that enables bitcoin to be used as 10-30% of collateral alongside traditional assets.'
  },
  {
    id: 's12-q2',
    type: 'multiple-choice',
    question: 'What is the minimum period before bitcoin collateral can be wound down in Battery Finance loans?',
    options: [
      'Four years (aligned with bitcoin\'s halving cycle)',
      'One year',
      'Two years',
      'Three years'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The earliest that bitcoin collateral can be wound down is four years, aligned with bitcoin\'s four-year halving cycle.'
  },
  {
    id: 's12-q3',
    type: 'multiple-choice',
    question: 'Why does a bitcoin-collateralized loan become behaviorally "senior"?',
    options: [
      'Contractual terms make it senior',
      'A person will let any other asset go before relinquishing their bitcoin',
      'Government regulations require it',
      'Banks prioritize it automatically'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If a borrower posts bitcoin as collateral, this loan automatically becomes the most senior because behaviorally, a person will let any other asset go before relinquishing their bitcoin.'
  },
  {
    id: 's12-q4',
    type: 'multiple-choice',
    question: 'According to the book, what behavior should bitcoin-collateralized borrowers exhibit?',
    options: [
      'Higher default rates',
      'Erratic payment patterns',
      'AAA-equivalent credit behavior',
      'Average credit behavior'
    ],
    correctIndex: 2,
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
      'Stock market corrections',
      '2008 housing crisis, 2022 UK Gilt crisis, and 2023 US banking crisis'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The 2008 Global Financial Crisis, 2022 Bank of England pension bailout (UK Gilts), and 2023 US banking crisis all showed that traditional collateral can rapidly become unreliable.'
  }
];
