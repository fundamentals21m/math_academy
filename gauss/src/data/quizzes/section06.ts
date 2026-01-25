import type { QuizQuestion } from './types';

/**
 * Section 6: Cyclotomy and the Regular 17-gon
 * Topics: Roots of unity, cyclotomic polynomials, constructible polygons, Fermat primes
 */
export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The $n$-th roots of unity are the solutions to:',
    options: [
      '$z^n = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The $n$-th roots of unity are the complex numbers $z$ satisfying $z^n = 1$.',
  },
      '$z^n = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th roots of unity are the complex numbers $z$ satisfying $z^n = 1$.',
  },
      '$z^n = -1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th roots of unity are the complex numbers $z$ satisfying $z^n = 1$.',
  },
      '$z^n = n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th roots of unity are the complex numbers $z$ satisfying $z^n = 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th roots of unity are the complex numbers $z$ satisfying $z^n = 1$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many $5$th roots of unity are there?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'There are exactly $n$ distinct $n$-th roots of unity, so there are $5$ fifth roots of unity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A regular $n$-gon is constructible with compass and straightedge if $n$ is of the form:',
    options: [
      'Any prime',
      '$2^k p_1 p_2 \\cdots p_m$ where $p_i$ are distinct Fermat primes',
      'Any power of $2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Gauss-Wantzel theorem, $n$-gons are constructible iff $n = 2^k p_1 \\cdots p_m$ with distinct Fermat primes $p_i$.',
  },
      'Any odd number',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Gauss-Wantzel theorem, $n$-gons are constructible iff $n = 2^k p_1 \\cdots p_m$ with distinct Fermat primes $p_i$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Fermat prime has the form:',
    options: [
      '$2^n + 1$',
      '$n^2 + 1$',
      '$2^n - 1$',
      '$2^{2^n} + 1$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Fermat primes are primes of the form $F_n = 2^{2^n} + 1$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many Fermat primes are currently known?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Only five Fermat primes are known: $3, 5, 17, 257, 65537$ (for $n = 0, 1, 2, 3, 4$).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is the smallest Fermat prime $F_0 = 2^{2^0} + 1$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$F_0 = 2^{2^0} + 1 = 2^1 + 1 = 3$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is the regular $17$-gon constructible?',
    options: [
      '$17$ is prime',
      '$17$ is odd',
      '$17$ is a Fermat prime ($17 = 2^{2^2} + 1$)',
      '$17 < 20
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$17 = 2^4 + 1 = 2^{2^2} + 1 = F_2$ is a Fermat prime, so the regular $17$-gon is constructible.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$17 = 2^4 + 1 = 2^{2^2} + 1 = F_2$ is a Fermat prime, so the regular $17$-gon is constructible.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'Is the regular $7$-gon constructible? (Enter 1 for yes, 0 for no)',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: '$7$ is prime but not a Fermat prime (it\'s not of the form $2^{2^n}+1$), so the $7$-gon is NOT constructible.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'Is the regular $15$-gon constructible? (Enter 1 for yes, 0 for no)',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'hard',
    explanation: '$15 = 3 \\times 5$, and both $3$ and $5$ are distinct Fermat primes. So the $15$-gon IS constructible.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'At what age did Gauss prove the constructibility of the regular $17$-gon?',
    options: [
      '$19
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Gauss proved this at age $19$, on March 30, 1796—his first major discovery, which convinced him to pursue mathematics.',
  },
      '$15
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss proved this at age $19$, on March 30, 1796—his first major discovery, which convinced him to pursue mathematics.',
  },
      '$24
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss proved this at age $19$, on March 30, 1796—his first major discovery, which convinced him to pursue mathematics.',
  },
      '$30
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss proved this at age $19$, on March 30, 1796—his first major discovery, which convinced him to pursue mathematics.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss proved this at age $19$, on March 30, 1796—his first major discovery, which convinced him to pursue mathematics.',
  },
];
