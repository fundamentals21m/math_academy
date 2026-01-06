import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What fundamental characteristic do all fiat monetary zones share?',
    options: [
      'Fixed money supply',
      'The necessity of unbounded money supply expansion over time',
      'Gold backing',
      'Bitcoin reserves'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All fiat monetary zones share the necessity of unbounded money supply expansion—their bond markets rest on continuously growing money supplies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an FX swap?',
    options: [
      'A direct exchange of currencies',
      'A derivative exchanging one currency\'s performance for another\'s over time',
      'A type of cryptocurrency',
      'A government bond'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An FX swap is a derivative that exchanges one currency\'s performance over some interval for another\'s, allowing investors to own foreign securities without bearing currency risk.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens when you hedge Bitcoin against the dollar (sell BTC exposure)?',
    options: [
      'You pay a premium for protection',
      'You receive a premium because you\'re giving up expected positive returns',
      'Nothing—hedging Bitcoin is impossible',
      'You automatically lose money'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Unlike hedging weak currencies, selling Bitcoin exposure means relinquishing returns that, on average, remain positive—so you get paid a premium for hedging.',
  },
];
