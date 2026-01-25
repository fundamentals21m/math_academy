import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a sequence $(a_n)$, the supremum $\\sup_n a_n$ is:',
    options: [
      'The largest term of the sequence',
      'The least upper bound of the set $\\{a_n : n \\in \\mathbb{N}\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The supremum of a sequence is the supremum of the set of its terms: $\\sup_n a_n = \\sup\\{a_n : n \\in \\mathbb{N}\\}$. This may be $+\\infty$ if the sequence is unbounded above.',
  },
      'The limit of the sequence',
      '$\\max(a_1, a_2, a_3)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The supremum of a sequence is the supremum of the set of its terms: $\\sup_n a_n = \\sup\\{a_n : n \\in \\mathbb{N}\\}$. This may be $+\\infty$ if the sequence is unbounded above.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The supremum of a sequence is the supremum of the set of its terms: $\\sup_n a_n = \\sup\\{a_n : n \\in \\mathbb{N}\\}$. This may be $+\\infty$ if the sequence is unbounded above.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $(a_n)$ is a bounded sequence, then $\\sup_n a_n$:',
    options: [
      'Exists and is a real number',
      'May not exist',
      'Is always a term of the sequence',
      'Equals the limit of the sequence',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the Least Upper Bound Property, any non-empty set of reals bounded above has a supremum in $\\mathbb{R}$. A bounded sequence has a finite supremum.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the sequence $a_n = 1 - 1/n$, we have $\\sup_n a_n = $?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The terms are $0, 1/2, 2/3, 3/4, \\ldots$, all strictly less than $1$. The supremum is $1$, but no term equals $1$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
      '$1$, achieved by some term',
      '$+\\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The terms are $0, 1/2, 2/3, 3/4, \\ldots$, all strictly less than $1$. The supremum is $1$, but no term equals $1$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
      '$1$, not achieved by any term',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The terms are $0, 1/2, 2/3, 3/4, \\ldots$, all strictly less than $1$. The supremum is $1$, but no term equals $1$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The infimum $\\inf_n a_n$ of a sequence bounded below satisfies:',
    options: [
      '$\\inf_n a_n \\leq a_n$ for all $n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound, so $\\inf_n a_n \\leq a_n$ for all $n$. The infimum may or may not be achieved by some term.',
  },
      '$\\inf_n a_n = \\lim_{n \\to \\infty} a_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound, so $\\inf_n a_n \\leq a_n$ for all $n$. The infimum may or may not be achieved by some term.',
  },
      '$\\inf_n a_n < a_n$ for all $n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound, so $\\inf_n a_n \\leq a_n$ for all $n$. The infimum may or may not be achieved by some term.',
  },
      '$\\inf_n a_n = \\min_n a_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound, so $\\inf_n a_n \\leq a_n$ for all $n$. The infimum may or may not be achieved by some term.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound, so $\\inf_n a_n \\leq a_n$ for all $n$. The infimum may or may not be achieved by some term.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For the sequence $a_n = \\frac{n}{n+1}$, calculate $\\inf\\{a_n : n \\geq 1\\}$ as a fraction (decimal form).',
    correctAnswer: 0.5,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'The terms are $1/2, 2/3, 3/4, \\ldots$, an increasing sequence. The smallest term is $a_1 = 1/2$, so $\\inf_n a_n = 1/2 = 0.5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $(a_n)$ is an increasing sequence bounded above, then:',
    options: [
      '$\\lim a_n = \\inf_n a_n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A bounded increasing sequence converges, and its limit equals its supremum: $\\lim_{n \\to \\infty} a_n = \\sup_n a_n$. This is the Monotone Convergence Theorem.',
  },
      '$\\lim a_n = \\sup_n a_n
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A bounded increasing sequence converges, and its limit equals its supremum: $\\lim_{n \\to \\infty} a_n = \\sup_n a_n$. This is the Monotone Convergence Theorem.',
  },
      'The sequence diverges',
      'The limit does not exist',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A bounded increasing sequence converges, and its limit equals its supremum: $\\lim_{n \\to \\infty} a_n = \\sup_n a_n$. This is the Monotone Convergence Theorem.',
  },
];
