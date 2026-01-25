import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 's04-q1',
    type: 'multiple-choice',
    question: 'What is the key difference between permutations and combinations?',
    options: [
      'Permutations count unordered selections; combinations count ordered arrangements',
      'Permutations count ordered arrangements; combinations count unordered selections',
      'Permutations are always larger than combinations',
      'There is no difference',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Permutations count ordered arrangements (where order matters), while combinations count unordered selections (where order doesn\'t matter).'
  },
  {
    id: 's04-q2',
    type: 'numeric',
    question: 'How many ways can a committee of 3 be chosen from a group of 10 people? (Enter $\\binom{10}{3}$)',
    correctAnswer: 120,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$'
  },
  {
    id: 's04-q3',
    type: 'multiple-choice',
    question: 'The formula for $\\binom{n}{r}$ is:',
    options: [
      '$\\frac{n!}{(n-r)!}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The binomial coefficient $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$'
  },
      '$\\frac{n!}{r!}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The binomial coefficient $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$'
  },
      '$n^r
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The binomial coefficient $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$'
  },
      '$\\frac{n!}{r!(n-r)!}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The binomial coefficient $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$'
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The binomial coefficient $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$'
  },
  {
    id: 's04-q4',
    type: 'multiple-choice',
    question: 'Pascal\'s Identity states that $\\binom{n}{r}$ equals:',
    options: [
      '$\\binom{n-1}{r-1} + \\binom{n-1}{r}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Pascal\'s Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. This reflects choosing to either include or exclude a specific element.'
  },
      '$\\binom{n+1}{r+1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Pascal\'s Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. This reflects choosing to either include or exclude a specific element.'
  },
      '$\\binom{n-1}{r-1} \\cdot \\binom{n-1}{r}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Pascal\'s Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. This reflects choosing to either include or exclude a specific element.'
  },
      '$\\binom{n-1}{r-1} - \\binom{n-1}{r}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Pascal\'s Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. This reflects choosing to either include or exclude a specific element.'
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Pascal\'s Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. This reflects choosing to either include or exclude a specific element.'
  },
  {
    id: 's04-q5',
    type: 'numeric',
    question: 'Using the Binomial Theorem with $x = y = 1$, we get $2^n = \\sum_{k=0}^{n} \\binom{n}{k}$. What is $2^4$?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$2^4 = 16$. This also equals $\\binom{4}{0} + \\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 1 + 4 + 6 + 4 + 1 = 16$.'
  },
  {
    id: 's04-q6',
    type: 'multiple-choice',
    question: 'The symmetry property states that $\\binom{n}{r}$ equals:',
    options: [
      '$\\binom{r}{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ objects to include is equivalent to choosing $n-r$ objects to exclude.'
  },
      '$\\binom{n}{n-r}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ objects to include is equivalent to choosing $n-r$ objects to exclude.'
  },
      '$\\binom{n-r}{r}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ objects to include is equivalent to choosing $n-r$ objects to exclude.'
  },
      '$\\binom{n+r}{n}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ objects to include is equivalent to choosing $n-r$ objects to exclude.'
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ objects to include is equivalent to choosing $n-r$ objects to exclude.'
  }
];
