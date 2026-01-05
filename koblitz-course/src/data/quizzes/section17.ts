import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The quadratic sieve factors $n$ by finding:',
    options: [
      'Two primes directly',
      'Congruences $x^2 \\equiv y^2 \\pmod{n}$ with $x \\not\\equiv \\pm y$',
      'The continued fraction of $\\sqrt{n}$',
      'Smooth numbers only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'QS finds $x^2 \\equiv y^2 \\pmod{n}$, then $\\gcd(x-y, n)$ often gives a factor.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A number is $B$-smooth if:',
    options: [
      'It equals $B$',
      'All its prime factors are $\\leq B$',
      'It divides $B!$',
      'It has exactly $B$ factors'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$B$-smooth means all prime factors are at most $B$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The complexity of the quadratic sieve is:',
    options: [
      'Polynomial in $n$',
      'Exponential in $n$',
      'Subexponential: $L(n)^{1+o(1)}$',
      '$O(\\sqrt{n})$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the quadratic sieve, the factor base consists of:',
    options: [
      'All primes up to $n$',
      'Primes $p$ for which $n$ is a quadratic residue mod $p$',
      'Only twin primes',
      'Powers of 2'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The factor base includes small primes $p$ where $\\left(\\frac{n}{p}\\right) = 1$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What algorithm, faster than QS for large $n$, uses number fields for factoring?',
    correctAnswer: 'NFS',
    difficulty: 'hard',
    explanation: 'The Number Field Sieve (NFS) is the fastest known algorithm for factoring large integers.',
  },
];
