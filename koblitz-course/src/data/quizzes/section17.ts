import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The quadratic sieve factors $n$ by finding:',
    options: [
      'Congruences $x^2 \\equiv y^2 \\pmod{n}$ with $x \\not\\equiv \\pm y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QS finds $x^2 \\equiv y^2 \\pmod{n}$, then $\\gcd(x-y, n)$ often gives a factor.',
  },
      'Two primes directly',
      'Smooth numbers only',
      'The continued fraction of $\\sqrt{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'QS finds $x^2 \\equiv y^2 \\pmod{n}$, then $\\gcd(x-y, n)$ often gives a factor.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'QS finds $x^2 \\equiv y^2 \\pmod{n}$, then $\\gcd(x-y, n)$ often gives a factor.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A number is $B$-smooth if:',
    options: [
      'It equals $B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$B$-smooth means all prime factors are at most $B$.',
  },
      'All its prime factors are $\\leq B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$B$-smooth means all prime factors are at most $B$.',
  },
      'It divides $B!
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$B$-smooth means all prime factors are at most $B$.',
  },
      'It has exactly $B$ factors',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$B$-smooth means all prime factors are at most $B$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The complexity of the quadratic sieve is:',
    options: [
      'Polynomial in $n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
      'Exponential in $n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
      '$O(\\sqrt{n})
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
      'Subexponential: $L(n)^{1+o(1)}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'QS runs in $L(n) = \\exp(c\\sqrt{\\ln n \\ln \\ln n})$, which is subexponential.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the quadratic sieve, the factor base consists of:',
    options: [
      'All primes up to $n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The factor base includes small primes $p$ where $\\left(\\frac{n}{p}\\right) = 1$.',
  },
      'Primes $p$ for which $n$ is a quadratic residue mod $p
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The factor base includes small primes $p$ where $\\left(\\frac{n}{p}\\right) = 1$.',
  },
      'Only twin primes',
      'Powers of 2',
    ],
    correctIndex: 2,
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
