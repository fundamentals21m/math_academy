import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Mises, what is the fundamental cause of interest?',
    options: [
      'The productivity of capital',
      'The exploitation of workers by capitalists',
      'Time preference—the preference for present goods over future goods',
      'Government monetary policy'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Interest arises from the universal human preference for present goods over future goods (time preference). This is the only satisfactory explanation—interest would exist even in a world of perfect certainty and no exploitation.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is "originary interest"?',
    options: [
      'The interest rate set by the central bank',
      'The first interest payment on a loan',
      'The pure time-preference component of interest, abstracted from risk and uncertainty',
      'The historical origin of interest in ancient economies'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Originary interest is the pure expression of time preference—the discount applied to future goods compared to present goods, abstracted from all other considerations like risk, uncertainty, and expected inflation.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Can originary interest be zero or negative?',
    options: [
      'Yes, with sufficient government intervention',
      'Yes, in deflationary conditions',
      'No, it is always positive because time preference is an essential feature of action',
      'Yes, when savings exceed investment'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Originary interest cannot be zero or negative. A zero or negative rate would mean people value future goods as much as or more than present goods, contradicting the very nature of action. If people didn\'t prefer earlier satisfaction, they would never begin to act.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What components does the gross market rate of interest include beyond originary interest?',
    options: [
      'Only the central bank\'s policy rate',
      'Risk premium, entrepreneurial component, and price (inflation) premium',
      'Only the cost of administering loans',
      'Only compensation for expected inflation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The gross market rate of interest includes originary interest (pure time preference) plus a risk premium (default risk), an entrepreneurial component (uncertainty about economic conditions), and a price premium (expected changes in purchasing power of money).'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does interest differ from entrepreneurial profit?',
    options: [
      'There is no difference; they are synonyms',
      'Interest arises from time preference and exists with certainty; profit arises from uncertainty and foresight',
      'Interest is earned by workers; profit by capitalists',
      'Interest is always positive; profit is always negative'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Interest arises from time preference and would exist even in a world of perfect foresight—it is always positive. Entrepreneurial profit arises from uncertainty and the ability to anticipate future conditions better than others—it can be positive (profit) or negative (loss).'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why are interest rates important for investment decisions?',
    options: [
      'They determine government spending levels',
      'They affect the discounted present value of expected returns, making some projects profitable or unprofitable',
      'They only matter for consumer lending, not business investment',
      'They have no effect on long-term investment decisions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Entrepreneurs compare investment costs with the discounted present value of expected returns. Projects profitable at low interest rates become unprofitable when rates rise. The interest rate thus serves as a crucial signal coordinating production across time.'
  }
];
