import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An infinite series $\\sum_{n=1}^{\\infty} a_n$ converges if and only if:',
    options: [
      'The terms $a_n$ are bounded',
      '$\\lim_{n \\to \\infty} a_n = 0$',
      'The sequence of partial sums $S_N = \\sum_{n=1}^{N} a_n$ converges',
      'The terms $a_n$ are monotone decreasing'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, an infinite series converges if its sequence of partial sums converges. The condition $a_n \\to 0$ is necessary but not sufficient (e.g., the harmonic series).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\sum_{n=1}^{\\infty} a_n$ converges, then:',
    options: [
      '$\\lim_{n \\to \\infty} a_n = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If a series converges, its terms must approach zero. This is the divergence test contrapositive: if $a_n \\not\\to 0$, the series diverges.',
  },
      '$a_n > 0$ for all $n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If a series converges, its terms must approach zero. This is the divergence test contrapositive: if $a_n \\not\\to 0$, the series diverges.',
  },
      '$\\sum_{n=1}^{\\infty} |a_n|$ converges',
      'The partial sums are bounded',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If a series converges, its terms must approach zero. This is the divergence test contrapositive: if $a_n \\not\\to 0$, the series diverges.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The geometric series $\\sum_{n=0}^{\\infty} r^n$ converges if and only if:',
    options: [
      '$|r| < 1$',
      '$r < 1$',
      '$|r| \\leq 1$',
      '$r \\leq 1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The geometric series converges to $\\frac{1}{1-r}$ when $|r| < 1$. When $|r| \\geq 1$, the series diverges (terms don\'t approach zero).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the sum of the geometric series $\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 2 },
    difficulty: 'easy',
    explanation: 'For $|r| < 1$, $\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}$. With $r = \\frac{1}{2}$: $\\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$:',
    options: [
      'Converges to $e
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The harmonic series is the classic example showing that $a_n \\to 0$ is not sufficient for convergence. It diverges, which can be shown by comparison with $\\sum \\frac{1}{2^k}$.',
  },
      'Converges to $\\ln 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series is the classic example showing that $a_n \\to 0$ is not sufficient for convergence. It diverges, which can be shown by comparison with $\\sum \\frac{1}{2^k}$.',
  },
      'Converges to $1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series is the classic example showing that $a_n \\to 0$ is not sufficient for convergence. It diverges, which can be shown by comparison with $\\sum \\frac{1}{2^k}$.',
  },
      'Diverges even though $\\frac{1}{n} \\to 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series is the classic example showing that $a_n \\to 0$ is not sufficient for convergence. It diverges, which can be shown by comparison with $\\sum \\frac{1}{2^k}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series is the classic example showing that $a_n \\to 0$ is not sufficient for convergence. It diverges, which can be shown by comparison with $\\sum \\frac{1}{2^k}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ and $\\sum b_n$ both converge, then $\\sum (a_n + b_n)$:',
    options: [
      'Converges to $\\sum a_n \\cdot \\sum b_n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Infinite series are linear: if both series converge, their sum converges and $\\sum (a_n + b_n) = \\sum a_n + \\sum b_n$.',
  },
      'Converges to $\\sum a_n + \\sum b_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Infinite series are linear: if both series converge, their sum converges and $\\sum (a_n + b_n) = \\sum a_n + \\sum b_n$.',
  },
      'May diverge',
      'Converges but the sum cannot be determined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Infinite series are linear: if both series converge, their sum converges and $\\sum (a_n + b_n) = \\sum a_n + \\sum b_n$.',
  },
];
