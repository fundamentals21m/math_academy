import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A compound option is:',
    options: [
      'An option on a stock index',
      'An option on another option',
      'Two options combined',
      'An option with compound interest'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Compound options give the right to buy or sell another option at a specified price.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A chooser option allows the holder to:',
    options: [
      'Choose the strike price',
      'Choose the expiration date',
      'Choose between a call or put at a future date',
      'Choose the underlying asset'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Choosers let you decide later whether your option becomes a call or put.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A chooser option is worth:',
    options: [
      'Less than a vanilla call',
      'Zero',
      'Exactly the same as a straddle',
      'More than either a single call or put'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Choosers are worth more because you can pick whichever payoff type is better.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option is also called an option on an option?',
    correctAnswer: 'compound',
    difficulty: 'easy',
    explanation: 'Compound options give rights to buy or sell other options.',
  },
];
