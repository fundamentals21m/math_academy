import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Existence-Uniqueness Theorem for $L(y) = 0$ guarantees a unique solution when:',
    options: [
      'Initial values $y(x_0), y\\'(x_0), \\ldots, y^{(n-1)}(x_0)$ are given',
      'Initial value $y(x_0)$ is given',
      'No initial conditions are given',
      'Only $y^{(n)}(x_0)$ is given',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An $n$th-order equation requires $n$ initial conditions: the value and first $n-1$ derivatives at a point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The initial-value vector of a function $f$ at $x_0$ is:',
    options: [
      '$(f(x_0))$',
      '$(f(x_0), f\'(x_0))$',
      '$(f\'(x_0), f\'\'(x_0), \\ldots, f^{(n)}(x_0))$',
      '$(f(x_0), f\'(x_0), \\ldots, f^{(n-1)}(x_0))$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The initial-value vector contains the value and first $n-1$ derivatives at $x_0$, which are the $n$ pieces of information needed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a second-order equation, the initial-value vector lives in:',
    options: [
      '$\\mathbb{R}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 2$, we need $f(x_0)$ and $f\'(x_0)$, a vector in 2-space.',
  },
      '$\\mathbb{R}^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $n = 2$, we need $f(x_0)$ and $f\'(x_0)$, a vector in 2-space.',
  },
      '$\\mathbb{R}^3
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $n = 2$, we need $f(x_0)$ and $f\'(x_0)$, a vector in 2-space.',
  },
      '$\\mathbb{R}^n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $n = 2$, we need $f(x_0)$ and $f\'(x_0)$, a vector in 2-space.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $n = 2$, we need $f(x_0)$ and $f\'(x_0)$, a vector in 2-space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The solution guaranteed by the theorem exists on:',
    options: [
      'A small neighborhood of $x_0$ only',
      'Only at the point $x_0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Unlike nonlinear equations, linear equations have global solutions: the solution exists on the entire interval $J$ of continuity.',
  },
      'The entire interval $J$ where coefficients are continuous',
      'An interval depending on initial conditions',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Unlike nonlinear equations, linear equations have global solutions: the solution exists on the entire interval $J$ of continuity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Compared to nonlinear equations, linear equations avoid which pathology?',
    options: [
      'Having real-valued solutions',
      'Having continuous solutions',
      'Blow-up in finite time',
      'Having polynomial solutions'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Nonlinear solutions may blow up in finite time (fail to exist globally). Linear equations with continuous coefficients always have global solutions.',
  },
];
