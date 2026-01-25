import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The method of successive approximations (Picard iteration) for $Y\' = AY$, $Y(0) = Y_0$ defines:',
    options: [
      '$Y_{n+1}(t) = AY_n(t)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Picard iteration: starting from $Y_0(t) = Y_0$, define $Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds$.',
  },
      '$Y_{n+1}(t) = Y_n(t) + A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Picard iteration: starting from $Y_0(t) = Y_0$, define $Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds$.',
  },
      '$Y_{n+1}(t) = e^A Y_n(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Picard iteration: starting from $Y_0(t) = Y_0$, define $Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds$.',
  },
      '$Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Picard iteration: starting from $Y_0(t) = Y_0$, define $Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Picard iteration: starting from $Y_0(t) = Y_0$, define $Y_{n+1}(t) = Y_0 + \\int_0^t AY_n(s)\\,ds$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Starting with $Y_0(t) = Y_0$ (constant) and $A$ constant, the first iterate $Y_1(t)$ is:',
    options: [
      '$Y_0 + tAY_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$Y_1(t) = Y_0 + \\int_0^t AY_0\\,ds = Y_0 + tAY_0 = (I + tA)Y_0$.',
  },
      '$Y_0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$Y_1(t) = Y_0 + \\int_0^t AY_0\\,ds = Y_0 + tAY_0 = (I + tA)Y_0$.',
  },
      '$AY_0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$Y_1(t) = Y_0 + \\int_0^t AY_0\\,ds = Y_0 + tAY_0 = (I + tA)Y_0$.',
  },
      '$e^{tA}Y_0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$Y_1(t) = Y_0 + \\int_0^t AY_0\\,ds = Y_0 + tAY_0 = (I + tA)Y_0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$Y_1(t) = Y_0 + \\int_0^t AY_0\\,ds = Y_0 + tAY_0 = (I + tA)Y_0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The successive approximations $Y_n(t)$ converge to the solution:',
    options: [
      'Uniformly on bounded intervals',
      'Only for small $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Picard iteration converges uniformly on any bounded interval $[0, T]$, proving existence and uniqueness.',
  },
      'Only for diagonalizable $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Picard iteration converges uniformly on any bounded interval $[0, T]$, proving existence and uniqueness.',
  },
      'In the limit $n \\to \\infty$ but may diverge',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Picard iteration converges uniformly on any bounded interval $[0, T]$, proving existence and uniqueness.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'After $n$ iterations with constant $A$, the approximate solution is:',
    options: [
      '$n!e^{tA}Y_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each iteration adds one more term of the exponential series, giving the partial sum $\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0$.',
  },
      '$\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each iteration adds one more term of the exponential series, giving the partial sum $\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0$.',
  },
      '$(I + A)^n Y_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each iteration adds one more term of the exponential series, giving the partial sum $\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0$.',
  },
      '$A^n Y_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each iteration adds one more term of the exponential series, giving the partial sum $\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each iteration adds one more term of the exponential series, giving the partial sum $\\sum_{k=0}^{n} \\frac{(tA)^k}{k!}Y_0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof of convergence of Picard iteration uses:',
    options: [
      'The ratio test',
      'Integration by parts',
      'A contraction mapping argument or comparison with geometric series',
      'The Fourier transform',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Convergence follows from showing $\\|Y_{n+1} - Y_n\\|$ decreases geometrically, using matrix norm estimates.',
  },
];
