import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A market maker profits primarily from:',
    options: [
      'The bid-ask spread while remaining delta-neutral',
      'Directional bets on the underlying',
      'Holding options to expiration',
      'Avoiding all hedging'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Market makers earn the bid-ask spread by continuously quoting both sides while hedging their delta exposure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Adverse selection risk for a market maker is:',
    options: [
      'The risk of interest rate changes',
      'The risk that counterparties have better information',
      'The risk that volatility will increase',
      'The risk of position limits'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adverse selection occurs when market makers trade against informed counterparties who know something they do not.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A zero-cost collar involves:',
    options: [
      'Buying both a call and a put',
      'Selling both a call and a put',
      'Buying a call and selling a call at different strikes',
      'Buying a put and selling a call with premiums offsetting'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A collar buys downside protection (put) financed by selling upside (call), with net zero premium.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of market participant provides liquidity by quoting both bid and ask prices?',
    correctAnswer: 'market maker',
    difficulty: 'easy',
    explanation: 'Market makers provide liquidity by continuously quoting prices at which they will buy or sell.',
  },
];
