import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Over $\\mathbb{F}_q$, the polynomial $x^n - 1$ factors into irreducible polynomials when:',
    options: [
      'Only when $n$ is prime',
      'Always, for any $n$ and $q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every polynomial over a field factors uniquely into irreducible factors. The polynomial $x^n - 1$ always factors, though the structure depends on $n$ and $q$.',
  },
      'Only when $q$ is prime',
      'Only when $\\gcd(n, q) = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every polynomial over a field factors uniquely into irreducible factors. The polynomial $x^n - 1$ always factors, though the structure depends on $n$ and $q$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every polynomial over a field factors uniquely into irreducible factors. The polynomial $x^n - 1$ always factors, though the structure depends on $n$ and $q$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The $n$-th roots of unity in the algebraic closure $\\overline{\\mathbb{F}_q}$ form:',
    options: [
      'A field',
      'A vector space',
      'A ring',
      'A cyclic group of order $n$ (when $\\gcd(n,q)=1$)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $\\gcd(n, q) = 1$, the $n$-th roots of unity in $\\overline{\\mathbb{F}_q}$ form a cyclic group of order $n$ under multiplication.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Over $\\mathbb{F}_2$, the polynomial $x^7 - 1$ factors as $(x-1)f_1(x)f_2(x)$ where $f_1$ and $f_2$ are irreducible of degree 3. How many irreducible factors does $x^7 - 1$ have over $\\mathbb{F}_2$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Over $\\mathbb{F}_2$: $x^7 - 1 = (x+1)(x^3+x+1)(x^3+x^2+1)$, giving 3 irreducible factors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\alpha$ is a primitive $n$-th root of unity and $\\mathbb{F}_q(\\alpha) = \\mathbb{F}_{q^m}$, then the minimal polynomial of $\\alpha$ over $\\mathbb{F}_q$ has degree:',
    options: [
      '$n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The minimal polynomial has degree equal to $[\\mathbb{F}_q(\\alpha) : \\mathbb{F}_q] = m$.',
  },
      '$n/m
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The minimal polynomial has degree equal to $[\\mathbb{F}_q(\\alpha) : \\mathbb{F}_q] = m$.',
  },
      '$m
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The minimal polynomial has degree equal to $[\\mathbb{F}_q(\\alpha) : \\mathbb{F}_q] = m$.',
  },
      '$q^m - 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The minimal polynomial has degree equal to $[\\mathbb{F}_q(\\alpha) : \\mathbb{F}_q] = m$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The minimal polynomial has degree equal to $[\\mathbb{F}_q(\\alpha) : \\mathbb{F}_q] = m$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The multiplicative order of $2$ modulo $7$ is the smallest $m$ such that $2^m \\equiv 1 \\pmod{7}$. What is this order?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 7, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^1 = 2$, $2^2 = 4$, $2^3 = 8 \\equiv 1 \\pmod{7}$. So the order is $3$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The factorization of $x^n - 1$ over $\\mathbb{F}_q$ is closely related to:',
    options: [
      'The multiplicative order of $q$ modulo divisors of $n
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The degrees of irreducible factors of $x^n - 1$ over $\\mathbb{F}_q$ are determined by the multiplicative orders of $q$ modulo divisors of $n$, via cyclotomic cosets.',
  },
      'The prime factorization of $n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The degrees of irreducible factors of $x^n - 1$ over $\\mathbb{F}_q$ are determined by the multiplicative orders of $q$ modulo divisors of $n$, via cyclotomic cosets.',
  },
      'The characteristic of $\\mathbb{F}_q
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The degrees of irreducible factors of $x^n - 1$ over $\\mathbb{F}_q$ are determined by the multiplicative orders of $q$ modulo divisors of $n$, via cyclotomic cosets.',
  },
      'The degree of $\\mathbb{F}_q$ over its prime field',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The degrees of irreducible factors of $x^n - 1$ over $\\mathbb{F}_q$ are determined by the multiplicative orders of $q$ modulo divisors of $n$, via cyclotomic cosets.',
  },
];
