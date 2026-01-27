import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Delta bucketing is used to:',
    options: [
      'Increase portfolio leverage',
      'Organize delta exposure by strike or maturity to reveal risk concentration',
      'Calculate option prices',
      'Determine implied volatility'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Delta bucketing reveals how exposure is distributed, catching hidden risks in offsetting positions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '1-day 95% VaR of $1M means:',
    options: [
      'Expected loss is $1M',
      'There is a 5% chance of losing more than $1M in one day',
      'Maximum possible loss is $1M',
      'Average daily loss is $1M'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'VaR states that there is a 5% probability of losing more than $1M over the given horizon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Delta-gamma VaR improves on delta VaR by:',
    options: [
      'Ignoring convexity',
      'Including the quadratic gamma term for large moves',
      'Using only linear approximation',
      'Removing all Greek sensitivities'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Delta-gamma VaR includes the gamma term to capture convexity effects for larger moves.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What does VaR stand for?',
    correctAnswer: 'value at risk',
    difficulty: 'easy',
    explanation: 'VaR = Value at Risk, a measure of potential loss at a given confidence level.',
  },
];
