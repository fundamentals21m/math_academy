import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Gamma scalping profits when:',
    options: [
      'The underlying trends in one direction',
      'Realized volatility exceeds implied volatility',
      'Implied volatility stays constant',
      'Time decay is maximized'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Gamma scalping captures profit when actual moves (realized vol) exceed what was priced in (implied vol).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A variance swap pays based on:',
    options: [
      'Dividend payments',
      'The difference between realized and strike variance',
      'Implied volatility only',
      'The direction of the underlying'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Variance swaps pay the difference between realized variance and a pre-agreed strike variance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The volatility risk premium means:',
    options: [
      'Vol is unpredictable',
      'Implied vol usually exceeds realized vol',
      'Vol is always increasing',
      'Realized vol always exceeds implied vol'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The VRP means implied vol typically exceeds realized vol, rewarding volatility sellers.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name for a long call + long put at the same strike?',
    correctAnswer: 'straddle',
    difficulty: 'easy',
    explanation: 'A straddle is long both call and put at the same strike, profiting from large moves.',
  },
];
