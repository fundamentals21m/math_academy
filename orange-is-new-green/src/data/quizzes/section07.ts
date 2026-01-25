import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who invented perpetual swaps and when?',
    options: [
      'BitMEX in 2016',
      'Binance in 2020',
      'Satoshi Nakamoto in 2009',
      'Coinbase in 2018',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Perpetual swaps were invented by BitMEX in 2016, leveraging Bitcoin\'s ability to settle around the clock.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How often are funding rates exchanged between longs and shorts in perpetual markets?',
    options: [
      'Every hour',
      'Every 8 hours',
      'Once daily',
      'Once weekly',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Funding rates are paid between longs and shorts on a peer-to-peer basis every 8 hours, closing the spread between spot and futures markets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Between May 2016 and July 2023, what percentage of the time was Bitcoin perpetual funding positive?',
    options: [
      '50%',
      '65%',
      '72%',
      '90%',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Per BitMEX data, between May 14, 2016 (launch of perpetuals) and July 13, 2023, the funding rate was positive 72% of the time.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is "contango" in derivatives markets?',
    options: [
      'When spot price exceeds futures price',
      'When prices are perfectly equal',
      'When trading is halted',
      'When futures price exceeds spot price',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Contango is when future prices consistently surpass spot prices—Bitcoin\'s market is structurally inclined toward this condition.',
  },
];
