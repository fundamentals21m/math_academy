import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $\\{f_n\\}$ converges uniformly to $f$ on $E$ and each $f_n$ is continuous on $E$, then:',
    options: [
      '$f$ is continuous on $E$',
      '$f$ may be discontinuous',
      '$f$ is differentiable on $E$',
      '$f$ is uniformly continuous on $E$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 7.12: The uniform limit of continuous functions is continuous. This is one of the most important consequences of uniform convergence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sequence $f_n(x) = x^n$ on $[0, 1]$ shows that:',
    options: [
      'Pointwise limits of continuous functions are continuous',
      'The convergence $x^n \\to \\chi_{\\{1\\}}(x)$ is uniform',
      'Uniform convergence is the same as pointwise convergence',
      'Pointwise convergence does not preserve continuity',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each $f_n(x) = x^n$ is continuous, but the pointwise limit is $0$ for $x < 1$ and $1$ for $x = 1$, which is discontinuous. This shows pointwise convergence alone does not preserve continuity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly on a compact set $K$ and each $f_n$ is continuous, then:',
    options: [
      '$f$ is continuous but may not be uniformly continuous',
      '$f$ is uniformly continuous on $K
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $f$ is continuous on the compact set $K$ (by Theorem 7.12), $f$ is automatically uniformly continuous on $K$ (by Theorem 4.19). Compactness promotes continuity to uniform continuity.',
  },
      '$f$ is differentiable on $K
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $f$ is continuous on the compact set $K$ (by Theorem 7.12), $f$ is automatically uniformly continuous on $K$ (by Theorem 4.19). Compactness promotes continuity to uniform continuity.',
  },
      '$f$ is bounded but may not be continuous',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $f$ is continuous on the compact set $K$ (by Theorem 7.12), $f$ is automatically uniformly continuous on $K$ (by Theorem 4.19). Compactness promotes continuity to uniform continuity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Consider the series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$ on $[-1, 1]$. The sum is:',
    options: [
      'Discontinuous at $x = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Weierstrass M-test with $M_n = 1/n^2$, the series converges uniformly on $[-1, 1]$. Since each partial sum is continuous (polynomial), the uniform limit is continuous on $[-1, 1]$.',
  },
      'Continuous on $[-1, 1]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the Weierstrass M-test with $M_n = 1/n^2$, the series converges uniformly on $[-1, 1]$. Since each partial sum is continuous (polynomial), the uniform limit is continuous on $[-1, 1]$.',
  },
      'Differentiable but not continuous',
      'Undefined at $x = \\pm 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the Weierstrass M-test with $M_n = 1/n^2$, the series converges uniformly on $[-1, 1]$. Since each partial sum is continuous (polynomial), the uniform limit is continuous on $[-1, 1]$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the Weierstrass M-test with $M_n = 1/n^2$, the series converges uniformly on $[-1, 1]$. Since each partial sum is continuous (polynomial), the uniform limit is continuous on $[-1, 1]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Suppose $f_n \\to f$ uniformly and $x_n \\to x$ where all are in $E$. Then:',
    options: [
      '$f_n(x_n) \\to f(x)$ always',
      '$f_n(x_n)$ may not converge',
      '$f_n(x_n) \\to f(x)$ if each $f_n$ is continuous',
      '$f_n(x_n) \\to f(x)$ only if $x_n = x$ for all $n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With uniform convergence and continuity: $|f_n(x_n) - f(x)| \\leq |f_n(x_n) - f(x_n)| + |f(x_n) - f(x)|$. The first term $\\to 0$ by uniform convergence; the second $\\to 0$ by continuity of $f$ (which follows from uniform convergence of continuous functions).',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'With uniform convergence and continuity: $|f_n(x_n) - f(x)| \\leq |f_n(x_n) - f(x_n)| + |f(x_n) - f(x)|$. The first term $\\to 0$ by uniform convergence; the second $\\to 0$ by continuity of $f$ (which follows from uniform convergence of continuous functions).',
  },
];
