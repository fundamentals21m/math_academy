import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Least Upper Bound Property (completeness) of $\\mathbb{R}$ states that:',
    options: [
      'Every subset of $\\mathbb{R}$ has a supremum',
      'Every Cauchy sequence converges',
      'Every bounded sequence has a convergent subsequence',
      'Every non-empty subset of $\\mathbb{R}$ that is bounded above has a supremum in $\\mathbb{R}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Least Upper Bound Property (LUB) states that every non-empty subset of $\\mathbb{R}$ bounded above has a least upper bound (supremum) in $\\mathbb{R}$. This is the key property that distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Least Upper Bound Property (LUB) states that every non-empty subset of $\\mathbb{R}$ bounded above has a least upper bound (supremum) in $\\mathbb{R}$. This is the key property that distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The supremum $\\sup(S)$ of a set $S$ is:',
    options: [
      'The maximum element of $S
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The supremum is the least upper bound: the smallest number $M$ such that $x \\leq M$ for all $x \\in S$. It may or may not be an element of $S$.',
  },
      'The largest element less than all elements of $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The supremum is the least upper bound: the smallest number $M$ such that $x \\leq M$ for all $x \\in S$. It may or may not be an element of $S$.',
  },
      'The average of the bounds of $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The supremum is the least upper bound: the smallest number $M$ such that $x \\leq M$ for all $x \\in S$. It may or may not be an element of $S$.',
  },
      'The smallest upper bound of $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The supremum is the least upper bound: the smallest number $M$ such that $x \\leq M$ for all $x \\in S$. It may or may not be an element of $S$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The supremum is the least upper bound: the smallest number $M$ such that $x \\leq M$ for all $x \\in S$. It may or may not be an element of $S$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The set $S = \\{1 - 1/n : n \\in \\mathbb{N}\\}$ has supremum:',
    options: [
      '$0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The elements are $0, 1/2, 2/3, 3/4, \\ldots$, all less than $1$. The supremum is $1$, but $1 \\notin S$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
      '$1$, and $1 \\notin S
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The elements are $0, 1/2, 2/3, 3/4, \\ldots$, all less than $1$. The supremum is $1$, but $1 \\notin S$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
      '$1$, and $1 \\in S
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The elements are $0, 1/2, 2/3, 3/4, \\ldots$, all less than $1$. The supremum is $1$, but $1 \\notin S$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
      'No supremum exists',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The elements are $0, 1/2, 2/3, 3/4, \\ldots$, all less than $1$. The supremum is $1$, but $1 \\notin S$ since $1 - 1/n < 1$ for all $n \\geq 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property is equivalent to the Least Upper Bound Property?',
    options: [
      'Archimedean property',
      'Density of rationals',
      'Every Cauchy sequence of reals converges',
      'Every bounded set has a maximum',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The completeness of $\\mathbb{R}$ (LUB property) is equivalent to every Cauchy sequence converging. Both express that there are "no gaps" in $\\mathbb{R}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is the supremum of the set $\\{1/n : n \\in \\mathbb{N}, n \\geq 1\\}$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The set is $\\{1, 1/2, 1/3, 1/4, \\ldots\\}$. The largest element is $1$ (when $n = 1$), so $\\sup = 1$, and in this case the supremum is actually a maximum.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The infimum of a set $S$ bounded below is:',
    options: [
      'The least upper bound of $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound: the largest number $m$ such that $m \\leq x$ for all $x \\in S$. By the LUB property, $\\mathbb{R}$ also has the greatest lower bound property.',
  },
      'The minimum element of $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound: the largest number $m$ such that $m \\leq x$ for all $x \\in S$. By the LUB property, $\\mathbb{R}$ also has the greatest lower bound property.',
  },
      'The greatest lower bound of $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound: the largest number $m$ such that $m \\leq x$ for all $x \\in S$. By the LUB property, $\\mathbb{R}$ also has the greatest lower bound property.',
  },
      'Always an element of $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound: the largest number $m$ such that $m \\leq x$ for all $x \\in S$. By the LUB property, $\\mathbb{R}$ also has the greatest lower bound property.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The infimum is the greatest lower bound: the largest number $m$ such that $m \\leq x$ for all $x \\in S$. By the LUB property, $\\mathbb{R}$ also has the greatest lower bound property.',
  },
];
