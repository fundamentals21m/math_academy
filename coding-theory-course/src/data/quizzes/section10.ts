import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The generator polynomial of a BCH code is:',
    options: [
      '$g(X) = \\text{LCM}(m_1(X), m_2(X), \\ldots, m_{d-1}(X))$',
      '$g(X) = m_1(X) + m_2(X) + \\cdots + m_{d-1}(X)$',
      '$g(X) = X^{d-1} - 1$',
      'Any irreducible polynomial'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The BCH code generator is the least common multiple of the minimal polynomials $m_i(X)$ of $\\alpha^i$ for $i = 1, 2, \\ldots, d-1$, where $\\alpha$ is a primitive element.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The BCH bound guarantees that a BCH code with designed distance $d$ has minimum distance:',
    options: [
      'At least $d$',
      'Exactly $d$',
      'At most $d$',
      'Equal to $d - 1$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The BCH bound states that the minimum distance is at least the designed distance $d$. The actual minimum distance may be larger.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A binary BCH code of length 15 with designed distance 5 requires how many consecutive roots $\\alpha, \\alpha^2, \\ldots$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 14, precision: 0 },
    difficulty: 'medium',
    explanation: 'For designed distance $d$, we need roots $\\alpha, \\alpha^2, \\ldots, \\alpha^{d-1}$. For $d = 5$, we need 4 consecutive roots.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the BCH bound proof, what mathematical structure is used to show the minimum distance?',
    options: [
      'Vandermonde determinant',
      'Gaussian elimination',
      'Chinese Remainder Theorem',
      'Euclidean algorithm'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The BCH bound proof uses the fact that a Vandermonde matrix formed from powers of distinct elements has non-zero determinant, forcing certain linear systems to have only the trivial solution.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For a binary BCH code with $n = 2^m - 1$ and minimum distance at least $2t + 1$, the number of check digits is at most:',
    correctAnswer: 12,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'hard',
    explanation: 'The bound states at most $mt$ check digits. For $m = 4$ (length 15) and $t = 3$ (correcting 3 errors, distance 7), we have at most $4 \\times 3 = 12$ check digits.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which elements share the same minimal polynomial over the prime subfield?',
    options: [
      '$\\alpha$ and $\\alpha^p$ where $p$ is the field characteristic',
      '$\\alpha$ and $\\alpha + 1$',
      '$\\alpha$ and $-\\alpha$',
      '$\\alpha$ and $\\alpha^2$ always'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In a finite field of characteristic $p$, the Frobenius automorphism $x \\mapsto x^p$ preserves minimal polynomials. Thus $\\alpha$ and $\\alpha^p$ have the same minimal polynomial.',
  },
];
