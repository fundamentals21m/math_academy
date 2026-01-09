import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A monomial order on $k[x_1, \\ldots, x_n]$ must satisfy:',
    options: [
      'Only transitivity',
      'Total ordering, $1 \\leq m$ for all monomials $m$, and $m_1 \\leq m_2 \\Rightarrow m_1m_3 \\leq m_2m_3$',
      'Only compatibility with multiplication',
      'Every monomial equals $1$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A monomial order is a total order on monomials such that $1$ is the smallest monomial and multiplication preserves the order.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In lexicographic order with $x > y$, which monomial is largest?',
    options: [
      '$y^5$',
      '$xy^2$',
      '$x^2$',
      '$x^2y$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lex order compares the power of $x$ first. $x^2y$ and $x^2$ both have $x^2$, but then we compare $y$-powers: $x^2y > x^2$. And $x^2 > xy^2 > y^5$. So $x^2y$ is largest.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A Grobner basis $G$ for an ideal $I$ has the property that:',
    options: [
      'Every polynomial in $k[x_1,\\ldots,x_n]$ is in $G$',
      'The leading term of any $f \\in I$ is divisible by the leading term of some $g \\in G$',
      '$G$ contains exactly one polynomial',
      '$G = I$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Grobner basis $G$ for $I$ satisfies: for any $f \\in I$, there exists $g \\in G$ such that $\\text{LT}(g)$ divides $\\text{LT}(f)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The division algorithm in $k[x_1, \\ldots, x_n]$ with respect to a Grobner basis:',
    options: [
      'Always gives remainder $0$ for elements of the ideal',
      'Depends on the order of divisors',
      'Does not exist for multiple variables',
      'Gives non-unique remainders'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When dividing by a Grobner basis, the remainder is unique and equals $0$ if and only if the polynomial is in the ideal. This is the key computational advantage of Grobner bases.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Buchberger\'s algorithm computes:',
    options: [
      'The roots of a polynomial',
      'A Grobner basis from a generating set',
      'The derivative of a polynomial',
      'The gcd of two polynomials'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Buchberger\'s algorithm takes a finite generating set for an ideal and produces a Grobner basis by computing S-polynomials and reducing.',
  },
];
