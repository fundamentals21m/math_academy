import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two options are fungible if they:',
    options: [
      'Have the same price',
      'Have equivalent risk/reward characteristics',
      'Are on the same underlying',
      'Expire on the same date'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fungibility means positions can substitute for each other due to equivalent characteristics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Pin risk at expiration is highest when:',
    options: [
      'Spot is far from all strikes',
      'Spot is near a strike with large open interest',
      'There is no open interest',
      'All options are deep ITM'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Pin risk occurs when spot is near a strike at expiry, causing delta swings for short gamma.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Position stacking refers to:',
    options: [
      'Rolling positions to longer dates',
      'Concentration of risk at specific strikes or maturities',
      'Reducing position size',
      'Diversifying across many strikes'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Stacking is concentrating risk at specific points, creating high localized gamma exposure.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the term for the process of moving an expiring position to a later expiration?',
    correctAnswer: 'roll',
    difficulty: 'easy',
    explanation: 'Rolling a position means closing the near-dated and opening a similar far-dated position.',
  },
];
