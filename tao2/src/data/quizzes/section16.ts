import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly and $f_n\' \\to g$ uniformly, then:',
    options: [
      '$f$ is differentiable and $f\\' = g
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f_n \\to f$ uniformly, $f_n\'$ exists, and $f_n\' \\to g$ uniformly, then $f$ is differentiable with $f\' = g$.',
  },
      '$f$ might not be differentiable',
      'We need additional assumptions',
      '$f\\' = \\lim f_n$ (not $g$)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f_n \\to f$ uniformly, $f_n\'$ exists, and $f_n\' \\to g$ uniformly, then $f$ is differentiable with $f\' = g$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To interchange limits and derivatives ($\\lim f_n\' = (\\lim f_n)\'$), we need:',
    options: [
      'Pointwise convergence of $f_n$ only',
      'Uniform convergence of $f_n$ only',
      'Uniform convergence of $f_n\'$ (and pointwise convergence of $f_n$ at one point)',
      'Both $f_n$ and $f_n\'$ to converge pointwise'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key requirement is uniform convergence of the derivatives. We also need $f_n$ to converge at least at one point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = \\frac{\\sin(nx)}{n}$. The functions $f_n$ converge uniformly to:',
    options: [
      '$\\sin(x)$',
      'The sequence does not converge uniformly',
      '$x$',
      '$0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$|f_n(x)| = |\\sin(nx)/n| \\leq 1/n \\to 0$ uniformly.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f_n(x) = \\sin(nx)/n$, the derivatives $f_n\'(x) = \\cos(nx)$:',
    options: [
      'Converge pointwise to $0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$f_n\'(x) = \\cos(nx)$ oscillates for most $x$ and does not converge. This shows uniform convergence of $f_n$ does not imply convergence of $f_n\'$.',
  },
      'Do not converge (oscillate)',
      'Converge uniformly to $0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f_n\'(x) = \\cos(nx)$ oscillates for most $x$ and does not converge. This shows uniform convergence of $f_n$ does not imply convergence of $f_n\'$.',
  },
      'Converge to $\\cos(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f_n\'(x) = \\cos(nx)$ oscillates for most $x$ and does not converge. This shows uniform convergence of $f_n$ does not imply convergence of $f_n\'$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f_n\'(x) = \\cos(nx)$ oscillates for most $x$ and does not converge. This shows uniform convergence of $f_n$ does not imply convergence of $f_n\'$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The example $f_n(x) = \\sin(nx)/n$ shows that:',
    options: [
      'Uniform convergence of functions does NOT imply convergence of derivatives',
      'Uniform convergence of functions implies uniform convergence of derivatives',
      'Differentiation always commutes with limits',
      'The derivative of a uniform limit is always zero',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Even though $f_n \\to 0$ uniformly, the derivatives $f_n\' = \\cos(nx)$ do not converge at all.',
  },
];
