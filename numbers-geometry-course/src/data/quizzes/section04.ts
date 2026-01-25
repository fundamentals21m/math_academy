import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 4: Linear Equations
 */
export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why does $15x + 12y = 4$ have no integer solution?',
    options: [
      'Because $\\gcd(15, 12) = 3$ does not divide 4',
      'Because 15 and 12 are too large',
      'Because 4 is even',
      'Because there are two unknowns',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Any common divisor of 15 and 12 must also divide $15x + 12y$ for any integers $x, y$. Since $\\gcd(15, 12) = 3$ and 3 does not divide 4, no integer solution exists.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When does $ax + by = c$ have an integer solution?',
    options: [
      'If and only if $\\gcd(a, b)$ divides $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The equation $ax + by = c$ has an integer solution if and only if $\\gcd(a, b)$ divides $c$. This is because $\\gcd(a, b)$ can be expressed as $ax + by$ for some integers $x, y$.',
  },
      'Always',
      'Only when $a = b
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The equation $ax + by = c$ has an integer solution if and only if $\\gcd(a, b)$ divides $c$. This is because $\\gcd(a, b)$ can be expressed as $ax + by$ for some integers $x, y$.',
  },
      'Only when $c = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The equation $ax + by = c$ has an integer solution if and only if $\\gcd(a, b)$ divides $c$. This is because $\\gcd(a, b)$ can be expressed as $ax + by$ for some integers $x, y$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The equation $ax + by = c$ has an integer solution if and only if $\\gcd(a, b)$ divides $c$. This is because $\\gcd(a, b)$ can be expressed as $ax + by$ for some integers $x, y$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the Euclidean algorithm compute?',
    options: [
      'The product of two numbers',
      'The greatest common divisor of two numbers',
      'The prime factorization of a number',
      'The least common multiple of two numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Euclidean algorithm computes $\\gcd(a, b)$ by repeatedly subtracting the smaller number from the larger until both numbers are equal.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $\\gcd(17, 12)$?',
    correctAnswer: 1,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Since 17 is prime and does not divide 12, the only common divisor of 17 and 12 is 1. Therefore $\\gcd(17, 12) = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the Euclidean algorithm, what operation is repeated?',
    options: [
      'Adding the two numbers',
      'Multiplying the two numbers',
      'Dividing both numbers by 2',
      'Subtracting the smaller from the larger',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Euclidean algorithm repeatedly subtracts the smaller number from the larger, keeping the smaller, until both numbers are equal. That final value is the gcd.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why does the Euclidean algorithm terminate?',
    options: [
      'Because the numbers always become prime',
      'Because we always reach 0',
      'Because we cannot descend through natural numbers indefinitely (infinite descent)',
      'Because there are only finitely many primes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Each step produces a smaller positive number (or keeps a number the same). Since we cannot descend through natural numbers indefinitely, the algorithm must terminate.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If $\\gcd(a, b) = d$, which statement is true?',
    options: [
      '$d = a + b
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A key result of the Euclidean algorithm is that $\\gcd(a, b)$ can always be expressed as a linear combination $ax + by$ for some integers $x$ and $y$. This is called the linear representation of the gcd.',
  },
      '$d$ is always prime',
      '$d$ divides neither $a$ nor $b
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A key result of the Euclidean algorithm is that $\\gcd(a, b)$ can always be expressed as a linear combination $ax + by$ for some integers $x$ and $y$. This is called the linear representation of the gcd.',
  },
      '$d$ can be written as $ax + by$ for some integers $x, y
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A key result of the Euclidean algorithm is that $\\gcd(a, b)$ can always be expressed as a linear combination $ax + by$ for some integers $x$ and $y$. This is called the linear representation of the gcd.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A key result of the Euclidean algorithm is that $\\gcd(a, b)$ can always be expressed as a linear combination $ax + by$ for some integers $x$ and $y$. This is called the linear representation of the gcd.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Given that $17 \\times 5 + 12 \\times (-7) = 1$, find a solution to $17x + 12y = 3$.',
    options: [
      '$x = 5, y = -7
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Since $17(5) + 12(-7) = 1$, multiply both sides by 3: $17(15) + 12(-21) = 3$. So $x = 15, y = -21$ is a solution.',
  },
      '$x = 15, y = -21
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Since $17(5) + 12(-7) = 1$, multiply both sides by 3: $17(15) + 12(-21) = 3$. So $x = 15, y = -21$ is a solution.',
  },
      '$x = 1, y = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Since $17(5) + 12(-7) = 1$, multiply both sides by 3: $17(15) + 12(-21) = 3$. So $x = 15, y = -21$ is a solution.',
  },
      '$x = 3, y = 3
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Since $17(5) + 12(-7) = 1$, multiply both sides by 3: $17(15) + 12(-21) = 3$. So $x = 15, y = -21$ is a solution.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Since $17(5) + 12(-7) = 1$, multiply both sides by 3: $17(15) + 12(-21) = 3$. So $x = 15, y = -21$ is a solution.',
  },
];
