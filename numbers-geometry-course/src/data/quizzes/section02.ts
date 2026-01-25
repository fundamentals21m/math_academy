import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 2: The Mysterious Sequence of Primes
 */
export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Euclid\'s theorem state about prime numbers?',
    options: [
      'There are exactly 100 prime numbers',
      'All primes are odd',
      'The largest prime is less than $10^{100}
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s theorem, proven over 2000 years ago, states that there are infinitely many primes. The proof shows that any finite list of primes can always be extended.',
  },
      'There are infinitely many primes',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Euclid\'s theorem, proven over 2000 years ago, states that there are infinitely many primes. The proof shows that any finite list of primes can always be extended.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Euclid\'s proof, why is $n = p_1 p_2 \\cdots p_k + 1$ important?',
    options: [
      'It is always prime',
      'It has a prime divisor not in the list $p_1, \\ldots, p_k
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The number $n = p_1 p_2 \\cdots p_k + 1$ leaves remainder 1 when divided by any of the primes $p_1, \\ldots, p_k$. But $n$ must have some prime divisor (by infinite descent), and this prime must be different from all the $p_i$.',
  },
      'It is always even',
      'It equals $p_{k+1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The number $n = p_1 p_2 \\cdots p_k + 1$ leaves remainder 1 when divided by any of the primes $p_1, \\ldots, p_k$. But $n$ must have some prime divisor (by infinite descent), and this prime must be different from all the $p_i$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The number $n = p_1 p_2 \\cdots p_k + 1$ leaves remainder 1 when divided by any of the primes $p_1, \\ldots, p_k$. But $n$ must have some prime divisor (by infinite descent), and this prime must be different from all the $p_i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which statement about $n = 2 \\times 3 \\times 5 \\times 7 + 1 = 211$ is correct?',
    options: [
      '$n$ is guaranteed to be prime by Euclid\\'s construction',
      '$n$ must be composite because it is large',
      '$n$ must be divisible by 11',
      '$n$ has a prime divisor different from 2, 3, 5, and 7 (which could be $n$ itself)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Euclid\'s construction guarantees that $n$ has a prime divisor not in the original list. In this case, $211$ is actually prime, but the construction doesn\'t guarantee primality — only that any prime divisor is new.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Calculate $2 \\times 3 \\times 7 + 1$. (This is the fourth step in Euclid\'s construction starting with $p_1 = 2$.)',
    correctAnswer: 43,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      '$2 \\times 3 \\times 7 + 1 = 42 + 1 = 43$. This is prime, so it becomes $p_4$ in our sequence.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are the two types of odd primes based on division by 4?',
    options: [
      '$4n$ and $4n + 2
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Any odd number is either of the form $4n + 1$ or $4n + 3$. (Forms $4n$ and $4n + 2$ are even.) So odd primes split into these two types.',
  },
      '$2n$ and $2n + 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Any odd number is either of the form $4n + 1$ or $4n + 3$. (Forms $4n$ and $4n + 2$ are even.) So odd primes split into these two types.',
  },
      '$4n + 1$ and $4n + 3
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Any odd number is either of the form $4n + 1$ or $4n + 3$. (Forms $4n$ and $4n + 2$ are even.) So odd primes split into these two types.',
  },
      '$4n + 1$ and $4n + 2
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Any odd number is either of the form $4n + 1$ or $4n + 3$. (Forms $4n$ and $4n + 2$ are even.) So odd primes split into these two types.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Any odd number is either of the form $4n + 1$ or $4n + 3$. (Forms $4n$ and $4n + 2$ are even.) So odd primes split into these two types.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the product $(4a + 1)(4b + 1)$ in terms of its form?',
    options: [
      '$4n$ (a multiple of 4)',
      '$4n + 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '$(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1$, which is of the form $4n + 1$.',
  },
      '$4n + 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '$(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1$, which is of the form $4n + 1$.',
  },
      '$4n + 3
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '$(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1$, which is of the form $4n + 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '$(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1$, which is of the form $4n + 1$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does Dirichlet\'s theorem (1837) say about primes in arithmetic progressions?',
    options: [
      'Every arithmetic progression $an + b$ with $\\gcd(a,b) = 1$ contains infinitely many primes',
      'There are no primes in any arithmetic progression',
      'There are exactly 10 primes in any arithmetic progression',
      'Only progressions with $a = 1$ contain primes',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Dirichlet proved that any arithmetic progression $an + b$ where $a$ and $b$ have no common divisor contains infinitely many primes. This is much harder to prove than Euclid\'s theorem.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why are there no primes of the form $6n + 3$ (except for 3 itself)?',
    options: [
      'Because $6n + 3 = 3(2n + 1)$, so 3 divides any such number',
      'Because all such numbers are even',
      'Because Dirichlet\'s theorem excludes them',
      'Because they are all perfect squares',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '$6n + 3 = 3(2n + 1)$, which means 3 divides every number of this form. So none of them can be prime (except 3 itself when $n = 0$). This is why Dirichlet\'s theorem requires $\\gcd(a,b) = 1$.',
  },
];
