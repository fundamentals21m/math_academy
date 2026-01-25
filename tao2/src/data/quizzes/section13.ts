import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The sup norm (or uniform norm) of a bounded function $f: X \\to \\mathbf{R}$ is defined as:',
    options: [
      '$\\|f\\|_\\infty = \\int |f|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sup norm is the supremum of the absolute values of the function.',
  },
      '$\\|f\\|_\\infty = \\inf_{x \\in X} |f(x)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The sup norm is the supremum of the absolute values of the function.',
  },
      '$\\|f\\|_\\infty = \\lim_{x \\to \\infty} |f(x)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The sup norm is the supremum of the absolute values of the function.',
  },
      '$\\|f\\|_\\infty = \\sup_{x \\in X} |f(x)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The sup norm is the supremum of the absolute values of the function.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The sup norm is the supremum of the absolute values of the function.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The metric of uniform convergence on bounded functions is:',
    options: [
      '$d(f, g) = \\|f - g\\|_\\infty = \\sup_x |f(x) - g(x)|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sup metric measures the maximum pointwise difference between functions.',
  },
      '$d(f, g) = \\int |f - g|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sup metric measures the maximum pointwise difference between functions.',
  },
      '$d(f, g) = \\sum_n |f(n) - g(n)|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sup metric measures the maximum pointwise difference between functions.',
  },
      '$d(f, g) = |f(0) - g(0)|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sup metric measures the maximum pointwise difference between functions.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sup metric measures the maximum pointwise difference between functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A sequence $f_n$ converges to $f$ in the sup norm metric if and only if:',
    options: [
      '$f_n \\to f$ pointwise',
      '$\\int |f_n - f| \\to 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convergence in sup norm is exactly the same as uniform convergence: $\\|f_n - f\\|_\\infty \\to 0$.',
  },
      '$f_n \\to f$ uniformly',
      'Each $f_n$ is continuous',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Convergence in sup norm is exactly the same as uniform convergence: $\\|f_n - f\\|_\\infty \\to 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The space $C(X)$ of continuous bounded functions on $X$ with the sup norm is:',
    options: [
      'Not a metric space',
      'A metric space but not complete',
      'Complete only if $X$ is compact',
      'A complete metric space',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The space of bounded continuous functions with the sup norm is always complete. Uniform limits of continuous functions are continuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\|f_n - f\\|_\\infty < 1/n$ for all $n$, then:',
    options: [
      '$f_n \\to f$ pointwise but not uniformly',
      'We cannot determine convergence',
      '$f_n \\to f$ uniformly',
      '$f_n \\to f$ only on compact sets',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If the sup norm goes to zero, we have uniform convergence.',
  },
];
