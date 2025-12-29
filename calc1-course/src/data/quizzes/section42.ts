import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The differential equation for exponential growth is:',
    options: [
      '$y\' = -ky$',
      '$y\' = ky$ (with $k > 0$)',
      '$y\'\' = ky$',
      '$y\' = k$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Exponential growth: rate of change proportional to current amount.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The solution to $y\' = ky$ with $y(0) = y_0$ is:',
    options: [
      '$y = y_0 + kt$',
      '$y = y_0 e^{kt}$',
      '$y = y_0 e^{-kt}$',
      '$y = kt$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Exponential decay occurs when:',
    options: [
      '$k > 0$',
      '$k < 0$',
      '$k = 0$',
      '$k = 1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Decay: $y\' = ky$ with $k < 0$ (or equivalently $y\' = -ky$ with $k > 0$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The half-life $T$ of a decaying substance satisfies:',
    options: [
      '$e^{kT} = 2$',
      '$e^{kT} = 1/2$',
      '$kT = 1$',
      '$T = k$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int e^x\\,dx = ?$',
    options: [
      '$e^x + C$',
      '$xe^x + C$',
      '$e^{x+1}/(x+1) + C$',
      '$\\ln(e^x) + C$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e^x$ is its own antiderivative.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If a population doubles every 10 years, and $P_0 = 100$, approximately what is the population after 10 years?',
    correctAnswer: 200,
    numericRange: { min: 150, max: 250, precision: 0 },
    difficulty: 'easy',
    explanation: 'Doubling means $P(10) = 2 \\cdot 100 = 200$.',
  },
];
