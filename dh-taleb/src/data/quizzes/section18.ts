import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A strike-maturity grid organizes risk by:',
    options: [
      'Trade execution time',
      'Strike (rows) and maturity (columns)',
      'Volatility levels',
      'Underlying price only'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The grid shows Greeks aggregated by strike level and expiration date.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A topography report showing short gamma concentrated in front months and long gamma in back months indicates:',
    options: [
      'No net gamma exposure',
      'A calendar spread profile',
      'Equal gamma at all maturities',
      'A pure directional bet'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Short near / long far gamma is characteristic of calendar spread positions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Aggregate portfolio Greeks can mask risk when:',
    options: [
      'All positions have the same sign',
      'Offsetting positions are at different strikes',
      'Greeks are calculated correctly',
      'There is only one position'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Net zero Greeks from positions at different strikes still have localized risk.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What term describes the visualization of Greeks organized by strike and maturity?',
    correctAnswer: 'topography',
    difficulty: 'medium',
    explanation: 'Topography shows the terrain of risk across the strike-maturity landscape.',
  },
];
