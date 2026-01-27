import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Parkinson volatility estimator uses:',
    options: [
      'Only closing prices',
      'High and low prices',
      'Opening and closing prices',
      'Average prices'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parkinson uses the high-low range to estimate volatility, capturing intraday movement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Correlation between two assets affects portfolio volatility because:',
    options: [
      'Higher correlation always means higher portfolio vol',
      'Lower correlation provides diversification, reducing portfolio vol',
      'Correlation has no effect on portfolio vol',
      'Only individual vols matter'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lower correlation between assets provides diversification, reducing portfolio volatility.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Correlation breakdown during crises means:',
    options: [
      'Correlations increase, reducing diversification benefits',
      'Correlations become negative',
      'Correlations drop to zero',
      'Correlations become more stable'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In crises, correlations spike upward, causing diversification to fail when it is needed most.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Two stocks each have 20% vol. If equally weighted with correlation 0, portfolio vol is approximately (in %):',
    correctAnswer: 14,
    numericRange: { min: 10, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'Portfolio vol = $\\sqrt{0.5^2 × 0.2^2 + 0.5^2 × 0.2^2 + 2 × 0.5 × 0.5 × 0 × 0.2 × 0.2}$ = 14.1%.',
  },
];
