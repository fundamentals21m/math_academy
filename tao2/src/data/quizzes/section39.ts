import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The outer measure $m^*(E)$ of a set $E$ is defined as:',
    options: [
      'The exact measure of $E
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Outer measure infimizes the total length of interval covers.',
  },
      'The number of points in $E
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Outer measure infimizes the total length of interval covers.',
  },
      '$\\sup \\{|I| : I \\subseteq E\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Outer measure infimizes the total length of interval covers.',
  },
      '$\\inf \\{\\sum |I_n| : E \\subseteq \\bigcup I_n, I_n$ intervals$\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Outer measure infimizes the total length of interval covers.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Outer measure infimizes the total length of interval covers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Outer measure is defined for:',
    options: [
      'All subsets of $\\mathbf{R}^n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Outer measure is defined for every set, though it may not be countably additive.',
  },
      'Only intervals',
      'Only open sets',
      'Only measurable sets',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Outer measure is defined for every set, though it may not be countably additive.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Outer measure satisfies:',
    options: [
      'Countable additivity for all sets',
      '$m^*(E) = 0$ for all $E
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Outer measure is monotone: larger sets have larger (or equal) outer measure.',
  },
      '$m^*(\\mathbf{R}) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Outer measure is monotone: larger sets have larger (or equal) outer measure.',
  },
      'Monotonicity: $E \\subseteq F \\Rightarrow m^*(E) \\leq m^*(F)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Outer measure is monotone: larger sets have larger (or equal) outer measure.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Outer measure is monotone: larger sets have larger (or equal) outer measure.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Outer measure satisfies countable subadditivity:',
    options: [
      '$m^*(\\bigcup E_n) = \\sum m^*(E_n)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Subadditivity: the outer measure of a union is at most the sum of outer measures.',
  },
      '$m^*(\\bigcup E_n) = \\max m^*(E_n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subadditivity: the outer measure of a union is at most the sum of outer measures.',
  },
      '$m^*(\\bigcup E_n) \\leq \\sum m^*(E_n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subadditivity: the outer measure of a union is at most the sum of outer measures.',
  },
      '$m^*(\\bigcup E_n) \\geq \\sum m^*(E_n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subadditivity: the outer measure of a union is at most the sum of outer measures.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subadditivity: the outer measure of a union is at most the sum of outer measures.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an interval $I$, the outer measure $m^*(I)$ equals:',
    options: [
      '$\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Outer measure agrees with length for intervals.',
  },
      'The length of $I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Outer measure agrees with length for intervals.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Outer measure agrees with length for intervals.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Outer measure agrees with length for intervals.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Outer measure agrees with length for intervals.',
  },
];
