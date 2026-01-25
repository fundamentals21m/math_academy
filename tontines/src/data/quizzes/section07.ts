import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The force of mortality $\\mu(t)$ measures:',
    options: [
      'The instantaneous death rate at age $t
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The force of mortality μ(t) is the instantaneous death rate at age t—like an interest rate but for death probability.',
  },
      'The total deaths over a year',
      'The expected remaining lifetime',
      'The physical force required for death',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The force of mortality μ(t) is the instantaneous death rate at age t—like an interest rate but for death probability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The force of mortality relates to the survival function by:',
    options: [
      '$\\mu(t) = S(t)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'μ(t) = -S\'(t)/S(t) = -d/dt ln S(t). The force of mortality is the negative derivative of the log survival function.',
  },
      '$\\mu(t) = -\\frac{d}{dt} \\ln S(t)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'μ(t) = -S\'(t)/S(t) = -d/dt ln S(t). The force of mortality is the negative derivative of the log survival function.',
  },
      '$\\mu(t) = S(t) + F(t)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'μ(t) = -S\'(t)/S(t) = -d/dt ln S(t). The force of mortality is the negative derivative of the log survival function.',
  },
      '$\\mu(t) = 1/S(t)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'μ(t) = -S\'(t)/S(t) = -d/dt ln S(t). The force of mortality is the negative derivative of the log survival function.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'μ(t) = -S\'(t)/S(t) = -d/dt ln S(t). The force of mortality is the negative derivative of the log survival function.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Gompertz-Makeham law states that the force of mortality follows:',
    options: [
      'A random walk pattern',
      'A constant value throughout life',
      '$\\mu(t) = A + B \\cdot e^{ct}$ (exponential increase)',
      'A linear decrease with age',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gompertz-Makeham law models mortality as μ(t) = A + B·e^(ct), where A is baseline mortality and B·e^(ct) is the exponentially increasing age-dependent component.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Human mortality roughly doubles every:',
    options: [
      '2-3 years after middle age',
      '15-20 years after middle age',
      '25-30 years after middle age',
      '8-10 years after middle age',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Remarkably, human mortality roughly doubles every 8-10 years after middle age—this exponential growth is why longevity risk is so significant.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the Gompertz-Makeham model $\\mu(t) = A + Be^{ct}$, the parameter $A$ represents:',
    options: [
      'Baseline mortality (accidents, disease)',
      'Age-dependent mortality',
      'The rate of mortality acceleration',
      'The starting age',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the model, A represents baseline mortality from causes like accidents and disease that don\'t depend strongly on age.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The survival function can be recovered from the force of mortality by:',
    options: [
      '$S(t) = \\mu(t)^2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'S(t) = exp(-∫₀ᵗ μ(s)ds). If we know how the death rate changes with age, we can calculate survival probabilities at any point.',
  },
      '$S(t) = \\mu(t) - 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'S(t) = exp(-∫₀ᵗ μ(s)ds). If we know how the death rate changes with age, we can calculate survival probabilities at any point.',
  },
      '$S(t) = \\ln(\\mu(t))
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'S(t) = exp(-∫₀ᵗ μ(s)ds). If we know how the death rate changes with age, we can calculate survival probabilities at any point.',
  },
      '$S(t) = e^{-\\int_0^t \\mu(s) ds}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'S(t) = exp(-∫₀ᵗ μ(s)ds). If we know how the death rate changes with age, we can calculate survival probabilities at any point.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'S(t) = exp(-∫₀ᵗ μ(s)ds). If we know how the death rate changes with age, we can calculate survival probabilities at any point.',
  },
];
