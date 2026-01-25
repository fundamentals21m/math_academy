import type { QuizQuestion } from './types';

export const section151Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A finitely additive set function $f$ is called a measure if it additionally satisfies:',
    options: [
      '$f(A) = 1$ for all $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A measure is a finitely additive set function that is nonnegative: $f(A) \\geq 0$ for all sets $A$ in the Boolean algebra.',
  },
      '$f(A) < 0$ for all $A
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A measure is a finitely additive set function that is nonnegative: $f(A) \\geq 0$ for all sets $A$ in the Boolean algebra.',
  },
      '$f(S) = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A measure is a finitely additive set function that is nonnegative: $f(A) \\geq 0$ for all sets $A$ in the Boolean algebra.',
  },
      '$f(A) \\geq 0$ for all $A
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A measure is a finitely additive set function that is nonnegative: $f(A) \\geq 0$ for all sets $A$ in the Boolean algebra.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A measure is a finitely additive set function that is nonnegative: $f(A) \\geq 0$ for all sets $A$ in the Boolean algebra.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The counting measure $\\nu(A)$ on a finite set $S$ assigns to each subset $A$:',
    options: [
      'The sum of elements in $A$',
      'The number of elements in $A$',
      'The product of elements in $A$',
      'The maximum element in $A$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The counting measure assigns to each subset $A$ its cardinality, i.e., the number of elements in $A$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Dirac measure (point mass) $\\delta_p(A)$ at a point $p$ is defined as:',
    options: [
      '$\\delta_p(A) = 1$ if $p \\in A$, and $0$ otherwise',
      '$\\delta_p(A) = |A|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Dirac measure at $p$ assigns measure 1 to any set containing $p$ and measure 0 to any set not containing $p$.',
  },
      '$\\delta_p(A) = p$ for all $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Dirac measure at $p$ assigns measure 1 to any set containing $p$ and measure 0 to any set not containing $p$.',
  },
      '$\\delta_p(A) = 0$ if $p \\in A$, and $1$ otherwise',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Dirac measure at $p$ assigns measure 1 to any set containing $p$ and measure 0 to any set not containing $p$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is a measure and $A \\subseteq B$, then:',
    options: [
      '$f(A) \\geq f(B)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Monotonicity: since $f(B) = f(A) + f(B - A)$ and $f(B - A) \\geq 0$ (nonnegativity), we have $f(A) \\leq f(B)$.',
  },
      '$f(A) = f(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Monotonicity: since $f(B) = f(A) + f(B - A)$ and $f(B - A) \\geq 0$ (nonnegativity), we have $f(A) \\leq f(B)$.',
  },
      '$f(A) \\leq f(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Monotonicity: since $f(B) = f(A) + f(B - A)$ and $f(B - A) \\geq 0$ (nonnegativity), we have $f(A) \\leq f(B)$.',
  },
      'No relationship can be determined',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Monotonicity: since $f(B) = f(A) + f(B - A)$ and $f(B - A) \\geq 0$ (nonnegativity), we have $f(A) \\leq f(B)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A measure $f$ is called normalized if:',
    options: [
      '$f(S) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A normalized measure assigns the value 1 to the entire sample space $S$. This is the defining property of a probability measure.',
  },
      '$f(S) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A normalized measure assigns the value 1 to the entire sample space $S$. This is the defining property of a probability measure.',
  },
      '$f(\\varnothing) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A normalized measure assigns the value 1 to the entire sample space $S$. This is the defining property of a probability measure.',
  },
      '$f(A) \\leq 1$ for all $A
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A normalized measure assigns the value 1 to the entire sample space $S$. This is the defining property of a probability measure.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A normalized measure assigns the value 1 to the entire sample space $S$. This is the defining property of a probability measure.',
  },
];
