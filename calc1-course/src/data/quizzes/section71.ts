import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A power series has the form:',
    options: [
      '$\\sum_{n=0}^{\\infty} a_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
      '$a_0 + a_1 x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
      '$\\sum_{n=0}^{\\infty} a_n x^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
      '$\\sum_{n=0}^{\\infty} a_n n^x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ is defined so that the series converges for:',
    options: [
      '$|x| > R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
      '$|x| < R
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
      '$|x| = R
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
      'All $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The ratio test gives $R = \\lim |a_n/a_{n+1}|$ when this limit exists. For $\\sum x^n/n!$, $R = ?$',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
      '$e
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Inside its radius of convergence, a power series:',
    options: [
      'Is discontinuous',
      'Equals zero',
      'Represents a continuous (in fact infinitely differentiable) function',
      'Has finitely many terms',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Power series are infinitely differentiable inside their interval of convergence.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\sum_{n=0}^{\\infty} x^n$, the radius of convergence is:',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
      '$1/2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
      '$\\infty
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A power series can be differentiated term by term:',
    options: [
      'Only at $x = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Term-by-term differentiation is valid for $|x| < R$.',
  },
      'Inside its radius of convergence',
      'Never',
      'Only for polynomial sums',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Term-by-term differentiation is valid for $|x| < R$.',
  },
];
