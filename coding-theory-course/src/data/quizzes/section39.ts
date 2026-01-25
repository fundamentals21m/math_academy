import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Hadamard matrix $H_n$ of order $n$ satisfies:',
    options: [
      '$H_n = H_n^T
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, a Hadamard matrix of order $n$ with entries $\\pm 1$ satisfies $H_n H_n^T = n I_n$, meaning its rows are orthogonal with inner product 0 (for different rows) or $n$ (for the same row).',
  },
      '$H_n H_n^T = n I_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, a Hadamard matrix of order $n$ with entries $\\pm 1$ satisfies $H_n H_n^T = n I_n$, meaning its rows are orthogonal with inner product 0 (for different rows) or $n$ (for the same row).',
  },
      '$H_n H_n^T = I_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, a Hadamard matrix of order $n$ with entries $\\pm 1$ satisfies $H_n H_n^T = n I_n$, meaning its rows are orthogonal with inner product 0 (for different rows) or $n$ (for the same row).',
  },
      '$H_n^2 = I_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, a Hadamard matrix of order $n$ with entries $\\pm 1$ satisfies $H_n H_n^T = n I_n$, meaning its rows are orthogonal with inner product 0 (for different rows) or $n$ (for the same row).',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, a Hadamard matrix of order $n$ with entries $\\pm 1$ satisfies $H_n H_n^T = n I_n$, meaning its rows are orthogonal with inner product 0 (for different rows) or $n$ (for the same row).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hadamard matrices of order $n > 2$ can exist only when:',
    options: [
      '$n$ is a prime',
      '$n$ is a power of 2',
      '$n$ is divisible by 4',
      '$n$ is any even number',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A necessary condition for Hadamard matrices of order $n > 2$ to exist is that $n \\equiv 0 \\pmod{4}$. The Hadamard conjecture states this is also sufficient.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'The Sylvester construction produces Hadamard matrices of order $2^k$. What is the order of the Hadamard matrix obtained after 4 iterations starting from $H_1 = [1]$?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Starting with $H_1$, each Sylvester iteration doubles the order: $H_1 \\to H_2 \\to H_4 \\to H_8 \\to H_{16}$. After 4 iterations, order = $2^4 = 16$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Sylvester (or Kronecker) construction for Hadamard matrices uses:',
    options: [
      '$H_{2n} = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Sylvester construction doubles the order using $H_{2n} = H_n \\otimes H_2 = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}$.',
  },
      '$H_{2n} = H_n \\oplus H_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Sylvester construction doubles the order using $H_{2n} = H_n \\otimes H_2 = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}$.',
  },
      '$H_{2n} = H_n + H_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Sylvester construction doubles the order using $H_{2n} = H_n \\otimes H_2 = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}$.',
  },
      '$H_{2n} = H_n \\cdot H_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Sylvester construction doubles the order using $H_{2n} = H_n \\otimes H_2 = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Sylvester construction doubles the order using $H_{2n} = H_n \\otimes H_2 = \\begin{pmatrix} H_n & H_n \\\\ H_n & -H_n \\end{pmatrix}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A normalized Hadamard matrix has its first row and first column all $+1$s. How many $-1$ entries are in each row (except the first) of a normalized $H_8$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 8, precision: 0 },
    difficulty: 'medium',
    explanation: 'In a normalized Hadamard matrix $H_n$, each non-first row must be orthogonal to the all-ones first row, so it has equal numbers of $+1$ and $-1$, i.e., $n/2 = 8/2 = 4$ entries of each.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Hadamard conjecture states that:',
    options: [
      'All Hadamard matrices are symmetric',
      'Hadamard matrices exist only for powers of 2',
      'Hadamard matrices are unique up to equivalence',
      'A Hadamard matrix of order $n$ exists for every $n$ divisible by 4',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Hadamard conjecture, still open, states that Hadamard matrices exist for all orders $n \\equiv 0 \\pmod{4}$. While many constructions are known, existence for all such $n$ is unproven.',
  },
];
