import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A ring requires $(R, +)$ to be:',
    options: [
      'An abelian group',
      'A cyclic group',
      'A non-abelian group',
      'Any group',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A ring has $(R, +)$ as an abelian group, with associative multiplication and distributive laws.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}_6$, $[2] \\cdot [3] = $',
    options: [
      '$[6]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$[2] \\cdot [3] = [6] = [0]$ in $\\mathbb{Z}_6$, showing that $[2]$ and $[3]$ are zero divisors.',
  },
      '$[0]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[2] \\cdot [3] = [6] = [0]$ in $\\mathbb{Z}_6$, showing that $[2]$ and $[3]$ are zero divisors.',
  },
      '$[1]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[2] \\cdot [3] = [6] = [0]$ in $\\mathbb{Z}_6$, showing that $[2]$ and $[3]$ are zero divisors.',
  },
      '$[5]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[2] \\cdot [3] = [6] = [0]$ in $\\mathbb{Z}_6$, showing that $[2]$ and $[3]$ are zero divisors.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[2] \\cdot [3] = [6] = [0]$ in $\\mathbb{Z}_6$, showing that $[2]$ and $[3]$ are zero divisors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An integral domain is a commutative ring with identity that has:',
    options: [
      'Many zero divisors',
      'No identity',
      'No zero divisors',
      'Non-commutative multiplication',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An integral domain has no zero divisors: $ab = 0$ implies $a = 0$ or $b = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\mathbb{Z}_n$ is a field if and only if:',
    options: [
      '$n$ is even',
      '$n$ is odd',
      '$n$ is prime',
      '$n$ is composite',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_p$ is a field exactly when $p$ is prime, because then every non-zero element has a multiplicative inverse.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The characteristic of $\\mathbb{Z}_5$ is:',
    options: [
      '5',
      '0',
      '1',
      '4',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The characteristic of $\\mathbb{Z}_n$ is $n$, since $n \\cdot [1] = [0]$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every finite integral domain is:',
    options: [
      'An abelian group',
      'Non-commutative',
      'Not a ring',
      'A field',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A fundamental theorem: every finite integral domain is a field.',
  },
];
