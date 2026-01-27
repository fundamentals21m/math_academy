import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A best-of option pays based on:',
    options: [
      'The best-performing asset',
      'The worst-performing asset',
      'The average of all assets',
      'The difference between assets'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Best-of options pay based on the maximum return among multiple underlying assets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a best-of option, lower correlation between assets:',
    options: [
      'Decreases the option value',
      'Increases the option value',
      'Has no effect',
      'Makes it worthless'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lower correlation means more dispersion, increasing the chance of a high outlier.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Margrabe formula prices:',
    options: [
      'Vanilla options',
      'Binary options',
      'Exchange options (right to swap one asset for another)',
      'Barrier options'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Margrabe (1978) derived the formula for the option to exchange one asset for another.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option has a payoff depending on multiple underlying assets?',
    correctAnswer: 'rainbow',
    difficulty: 'easy',
    explanation: 'Rainbow options have payoffs that depend on multiple colored (underlying) assets.',
  },
];
