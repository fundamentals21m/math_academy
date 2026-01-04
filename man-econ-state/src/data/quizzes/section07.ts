import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary function of the entrepreneur?',
    options: [
      'To follow orders from managers',
      'To bear uncertainty and coordinate production based on forecasts',
      'To invent new products',
      'To lobby government for subsidies'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Entrepreneurs bear uncertainty by forecasting future consumer demands and coordinating production accordingly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between risk and uncertainty?',
    options: [
      'Risk is bigger than uncertainty',
      'Risk is calculable; uncertainty cannot be reduced to probabilities',
      'There is no difference',
      'Uncertainty is always negative; risk can be positive'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Risk can be insured against using probability calculations; true uncertainty (as in entrepreneurship) cannot be quantified.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Where do profits come from according to Austrian economics?',
    options: [
      'Exploitation of workers',
      'Successful forecasting and serving consumers better than competitors',
      'Monopoly power',
      'Government contracts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Profits reward entrepreneurs who correctly anticipate consumer wants and serve them more efficiently than competitors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What causes entrepreneurial losses?',
    options: [
      'Bad luck only',
      'Failure to correctly forecast consumer demands',
      'Government interference only',
      'Worker strikes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Losses occur when entrepreneurs misjudge consumer wants or production costs, resulting in unsold goods or excess costs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Rothbard, what would happen to profits in a perfectly static economy?',
    options: [
      'Profits would be maximized',
      'Profits would be eliminated as all opportunities are exploited',
      'Profits would remain constant',
      'Profits would depend on government policy'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In a hypothetical evenly rotating economy with no change, all profit opportunities would be arbitraged away.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does entrepreneurial activity benefit consumers?',
    options: [
      'By keeping prices artificially low',
      'By directing resources toward goods consumers want most',
      'By reducing production',
      'By increasing government revenue'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Entrepreneurs compete to satisfy consumer wants, directing resources toward more valued uses and away from less valued ones.',
  },
];
