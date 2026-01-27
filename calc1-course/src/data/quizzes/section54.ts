import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Radioactive decay is modeled by:',
    options: [
      '$y\' = ky$ with $k > 0$',
      '$y\' = -ky$ with $k > 0$',
      '$y\'\' = -ky$',
      '$y\' = y^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Decay: rate of decrease proportional to amount present.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Newton\'s law of cooling states that the rate of temperature change is proportional to:',
    options: [
      'The temperature itself',
      'Time',
      'The difference between object and ambient temperature',
      'The mass of the object'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{dT}{dt} = -k(T - T_{ambient})$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A mixing problem typically involves:',
    options: [
      'Constant volume',
      'Volume changing with flow rates',
      'Only chemical reactions',
      'Either constant or changing volume'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Mixing problems can have constant volume (in = out) or varying volume.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A substance has half-life 10 years. If $y_0 = 100$, what is $y$ after 10 years?',
    correctAnswer: 50,
    numericRange: { min: 45, max: 55, precision: 0 },
    difficulty: 'easy',
    explanation: 'By definition of half-life, $y(10) = 100/2 = 50$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The logistic growth equation is:',
    options: [
      '$y\' = ky(1 - y/M)$',
      '$y\' = ky$',
      '$y\' = k/y$',
      '$y\'\' + ky = 0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Logistic: growth slows as population approaches carrying capacity $M$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If half-life is $T$, the decay constant $k$ (for $y\' = -ky$) satisfies:',
    options: [
      '$k = T$',
      '$k = \\ln 2 / T$',
      '$k = 2/T$',
      '$k = T \\ln 2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'From $e^{-kT} = 1/2$: $kT = \\ln 2$, so $k = \\ln 2 / T$.',
  },
];
