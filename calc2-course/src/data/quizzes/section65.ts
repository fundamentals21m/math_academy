import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The matrix exponential $e^A$ is defined by:',
    options: [
      '$e^{a_{11}} + e^{a_{22}} + \\cdots
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The matrix exponential is defined by the power series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$.',
  },
      'A matrix whose entries are $e^{a_{ij}}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The matrix exponential is defined by the power series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$.',
  },
      '$\\lim_{n \\to \\infty} (I + A/n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The matrix exponential is defined by the power series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$.',
  },
      '$I + A + \\frac{A^2}{2!} + \\frac{A^3}{3!} + \\cdots
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The matrix exponential is defined by the power series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The matrix exponential is defined by the power series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the zero matrix $O$, the exponential $e^O$ equals:',
    options: [
      '$O$',
      'Undefined',
      '$I$ (identity matrix)',
      '$e \\cdot I$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^O = I + O + \\frac{O^2}{2!} + \\cdots = I$ since all powers of $O$ are $O$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ is a diagonal matrix with entries $\\lambda_1, \\ldots, \\lambda_n$, then $e^A$ is:',
    options: [
      '$\\lambda_1 e^{\\lambda_1} + \\cdots + \\lambda_n e^{\\lambda_n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For diagonal matrices, the exponential is computed entry-wise on the diagonal: $e^{\\text{diag}(\\lambda_i)} = \\text{diag}(e^{\\lambda_i})$.',
  },
      'A diagonal matrix with entries $e^{\\lambda_1}, \\ldots, e^{\\lambda_n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For diagonal matrices, the exponential is computed entry-wise on the diagonal: $e^{\\text{diag}(\\lambda_i)} = \\text{diag}(e^{\\lambda_i})$.',
  },
      'The matrix $eI
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For diagonal matrices, the exponential is computed entry-wise on the diagonal: $e^{\\text{diag}(\\lambda_i)} = \\text{diag}(e^{\\lambda_i})$.',
  },
      'Not necessarily diagonal',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For diagonal matrices, the exponential is computed entry-wise on the diagonal: $e^{\\text{diag}(\\lambda_i)} = \\text{diag}(e^{\\lambda_i})$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The series $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$ converges for:',
    options: [
      'Only symmetric matrices',
      'Only nilpotent matrices',
      'Only matrices with $\\|A\\| < 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The exponential series converges absolutely for any square matrix $A$, regardless of its norm or properties.',
  },
      'All square matrices $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The exponential series converges absolutely for any square matrix $A$, regardless of its norm or properties.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The exponential series converges absolutely for any square matrix $A$, regardless of its norm or properties.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $N$ is nilpotent with $N^k = O$ for some $k$, then $e^N$ is:',
    options: [
      'A finite sum: $I + N + \\frac{N^2}{2!} + \\cdots + \\frac{N^{k-1}}{(k-1)!}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For nilpotent $N$ with $N^k = O$, the series terminates after $k$ terms, giving a polynomial in $N$.',
  },
      'An infinite series',
      'The zero matrix',
      'Not defined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For nilpotent $N$ with $N^k = O$, the series terminates after $k$ terms, giving a polynomial in $N$.',
  },
];
