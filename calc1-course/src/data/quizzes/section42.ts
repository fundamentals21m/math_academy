import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The differential equation for exponential growth is:',
    options: [
      '$y\\' = ky$ (with $k > 0$)',
      '$y\\' = -ky
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Exponential growth: rate of change proportional to current amount.',
  },
      '$y\\' = k
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Exponential growth: rate of change proportional to current amount.',
  },
      '$y\\'\\' = ky
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Exponential growth: rate of change proportional to current amount.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Exponential growth: rate of change proportional to current amount.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The solution to $y\' = ky$ with $y(0) = y_0$ is:',
    options: [
      '$y = y_0 + kt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
      '$y = y_0 e^{kt}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
      '$y = y_0 e^{-kt}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
      '$y = kt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The solution is $y = y_0 e^{kt}$, where $y_0$ is the initial value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Exponential decay occurs when:',
    options: [
      '$k > 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Decay: $y\' = ky$ with $k < 0$ (or equivalently $y\' = -ky$ with $k > 0$).',
  },
      '$k = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Decay: $y\' = ky$ with $k < 0$ (or equivalently $y\' = -ky$ with $k > 0$).',
  },
      '$k = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Decay: $y\' = ky$ with $k < 0$ (or equivalently $y\' = -ky$ with $k > 0$).',
  },
      '$k < 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Decay: $y\' = ky$ with $k < 0$ (or equivalently $y\' = -ky$ with $k > 0$).',
  },
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
      '$e^{kT} = 2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
      '$kT = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
      '$T = k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
      '$e^{kT} = 1/2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At half-life, $y(T) = y_0/2$, so $e^{kT} = 1/2$ (where $k < 0$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int e^x\\,dx = ?$',
    options: [
      '$e^x + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e^x$ is its own antiderivative.',
  },
      '$\\ln(e^x) + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$e^x$ is its own antiderivative.',
  },
      '$xe^x + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$e^x$ is its own antiderivative.',
  },
      '$e^{x+1}/(x+1) + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$e^x$ is its own antiderivative.',
  },
    ],
    correctIndex: 3,
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
