import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ is real analytic at $x_0$ if:',
    options: [
      'It is continuous at $x_0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real analytic means the function equals a convergent power series near the point.',
  },
      'It equals its Taylor series in some neighborhood of $x_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Real analytic means the function equals a convergent power series near the point.',
  },
      'It is differentiable at $x_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Real analytic means the function equals a convergent power series near the point.',
  },
      'It is bounded near $x_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Real analytic means the function equals a convergent power series near the point.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Real analytic means the function equals a convergent power series near the point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ of $\\sum a_n x^n$ is determined by:',
    options: [
      '$1/R = \\limsup |a_n|^{1/n}$ (root test)',
      '$R = \\lim |a_n|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cauchy-Hadamard formula: $1/R = \\limsup |a_n|^{1/n}$.',
  },
      '$R = \\sum |a_n|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Hadamard formula: $1/R = \\limsup |a_n|^{1/n}$.',
  },
      '$R$ is always infinite',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Hadamard formula: $1/R = \\limsup |a_n|^{1/n}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Within the radius of convergence, a power series:',
    options: [
      'Converges conditionally',
      'Diverges',
      'Converges only at integer points',
      'Converges absolutely',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $|x| < R$, the power series converges absolutely.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f(x) = \\sum_{n=0}^\\infty a_n x^n$ has radius of convergence $R > 0$, then on $(-R, R)$:',
    options: [
      '$f$ is continuous but might not be differentiable',
      '$f$ is discontinuous',
      '$f$ is infinitely differentiable (smooth)',
      '$f$ is differentiable exactly once',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Power series are infinitely differentiable within their radius of convergence, and can be differentiated term by term.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The series $\\sum_{n=0}^\\infty x^n$ has radius of convergence:',
    options: [
      '$R = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The geometric series converges for $|x| < 1$ and diverges for $|x| \\geq 1$.',
  },
      '$R = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The geometric series converges for $|x| < 1$ and diverges for $|x| \\geq 1$.',
  },
      '$R = \\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The geometric series converges for $|x| < 1$ and diverges for $|x| \\geq 1$.',
  },
      '$R = e
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The geometric series converges for $|x| < 1$ and diverges for $|x| \\geq 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The geometric series converges for $|x| < 1$ and diverges for $|x| \\geq 1$.',
  },
];
