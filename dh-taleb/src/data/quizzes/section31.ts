import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A lookback option payoff depends on:',
    options: [
      'Only the final price',
      'Implied volatility',
      'The strike price',
      'The maximum or minimum price during the option life'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lookbacks give hindsight, basing payoff on extreme values during the option period.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Asian options use:',
    options: [
      'The average price over a period',
      'The maximum price',
      'The final price only',
      'The opening price'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Asian options base payoff on the average price, reducing manipulation risk.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Compared to vanillas, Asian options are typically:',
    options: [
      'More expensive due to averaging',
      'Less expensive because averaging reduces effective vol',
      'The same price',
      'Cannot be priced'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Averaging smooths the payoff, reducing effective volatility and option price.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option bases its payoff on the average price over time?',
    correctAnswer: 'asian',
    difficulty: 'easy',
    explanation: 'Asian options use arithmetic or geometric averages of prices for their payoff.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Taleb, what is the most important lesson of dynamic hedging?',
    options: [
      'Models are perfect',
      'Risk can be eliminated',
      'Position for worst-case scenarios, not normal markets',
      'Always use maximum leverage'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taleb emphasizes sizing for extremes and respecting the limits of models.',
  },
];
