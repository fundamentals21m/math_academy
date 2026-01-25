import type { QuizQuestion } from './types';

export const section155Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When sampling $k$ items from a set of $n$ elements WITH replacement, the number of ordered $k$-tuples is:',
    options: [
      '$n!/(n-k)!
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With replacement, each of the $k$ positions can be filled by any of the $n$ elements, giving $n^k$ possibilities.',
  },
      '$n^k
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With replacement, each of the $k$ positions can be filled by any of the $n$ elements, giving $n^k$ possibilities.',
  },
      '$k^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With replacement, each of the $k$ positions can be filled by any of the $n$ elements, giving $n^k$ possibilities.',
  },
      '$\\binom{n}{k}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With replacement, each of the $k$ positions can be filled by any of the $n$ elements, giving $n^k$ possibilities.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With replacement, each of the $k$ positions can be filled by any of the $n$ elements, giving $n^k$ possibilities.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The number of permutations (ordered arrangements without replacement) of $k$ items from $n$ distinct items is:',
    options: [
      '$\\binom{n}{k}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Without replacement: first position has $n$ choices, second has $n-1$, etc. This gives $n(n-1)\\cdots(n-k+1) = n!/(n-k)!$.',
  },
      '$n^k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Without replacement: first position has $n$ choices, second has $n-1$, etc. This gives $n(n-1)\\cdots(n-k+1) = n!/(n-k)!$.',
  },
      '$n!/(n-k)!
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Without replacement: first position has $n$ choices, second has $n-1$, etc. This gives $n(n-1)\\cdots(n-k+1) = n!/(n-k)!$.',
  },
      '$k!
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Without replacement: first position has $n$ choices, second has $n-1$, etc. This gives $n(n-1)\\cdots(n-k+1) = n!/(n-k)!$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Without replacement: first position has $n$ choices, second has $n-1$, etc. This gives $n(n-1)\\cdots(n-k+1) = n!/(n-k)!$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The binomial coefficient $\\binom{n}{k}$ counts:',
    options: [
      'Unordered subsets of size $k$ from $n$ elements',
      'Ordered $k$-tuples from $n$ elements',
      'Arrangements with replacement',
      'The number of ways to arrange $n$ items',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ counts combinations: unordered selections of $k$ elements from $n$ elements.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many distinct 5-card hands can be dealt from a standard 52-card deck? Express as $\\binom{52}{5}$. What is $\\binom{52}{5}$?',
    correctAnswer: 2598960,
    numericRange: { min: 0, max: 10000000, precision: 0 },
    difficulty: 'hard',
    explanation: '$\\binom{52}{5} = \\frac{52!}{5! \\cdot 47!} = \\frac{52 \\times 51 \\times 50 \\times 49 \\times 48}{120} = 2,598,960$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The total number of subsets of a set with $n$ elements is:',
    options: [
      '$n!
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each element is either in or out of a subset, giving $2^n$ total subsets. This also follows from $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.',
  },
      '$2n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each element is either in or out of a subset, giving $2^n$ total subsets. This also follows from $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.',
  },
      '$n^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each element is either in or out of a subset, giving $2^n$ total subsets. This also follows from $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.',
  },
      '$2^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each element is either in or out of a subset, giving $2^n$ total subsets. This also follows from $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each element is either in or out of a subset, giving $2^n$ total subsets. This also follows from $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.',
  },
];
