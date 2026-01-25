import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's51-e01',
    type: 'multiple-choice',
    question: 'According to Vieta\'s formulas, for a quadratic $x^2 + bx + c = 0$ with roots $r_1$ and $r_2$:',
    options: [
      '$r_1 + r_2 = -b$ and $r_1 r_2 = c$',
      '$r_1 + r_2 = b$ and $r_1 r_2 = -c$',
      '$r_1 + r_2 = c$ and $r_1 r_2 = b$',
      '$r_1 - r_2 = b$ and $r_1 / r_2 = c$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Vieta\'s formulas relate roots to coefficients: the sum of roots equals the negative of the coefficient of $x$, and the product of roots equals the constant term. For $x^2 + bx + c = (x-r_1)(x-r_2)$, we get $r_1 + r_2 = -b$ and $r_1 r_2 = c$.',
  },
  {
    id: 's51-e02',
    type: 'multiple-choice',
    question: 'A polynomial is symmetric if:',
    options: [
      'It has only even powers',
      'It is unchanged when any two variables are swapped',
      'Its coefficients are all equal',
      'It has real roots only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A symmetric polynomial remains the same under any permutation of its variables. For example, $x_1 + x_2 + x_3$ and $x_1 x_2 + x_1 x_3 + x_2 x_3$ are symmetric, while $x_1^2 + x_2$ is not.',
  },
  // Medium questions
  {
    id: 's51-m01',
    type: 'multiple-choice',
    question: 'The Fundamental Theorem on Symmetric Polynomials states that every symmetric polynomial:',
    options: [
      'Factors into linear terms',
      'Has integer coefficients',
      'Can be expressed in terms of elementary symmetric polynomials',
      'Has degree at most $n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The theorem states that any symmetric polynomial in $x_1, \\ldots, x_n$ can be written as a polynomial in the elementary symmetric polynomials $e_1, e_2, \\ldots, e_n$. This means we can express symmetric functions of roots using only the polynomial\'s coefficients.',
  },
  {
    id: 's51-m02',
    type: 'multiple-choice',
    question: 'The discriminant $\\Delta$ of a polynomial:',
    options: [
      'Depends only on the leading coefficient',
      'Always equals the constant term',
      'Is always positive',
      'Equals zero if and only if there is a repeated root'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The discriminant $\\Delta = \\prod_{i<j}(r_i - r_j)^2$ vanishes precisely when two roots coincide. For a quadratic $ax^2 + bx + c$, we get $\\Delta = b^2 - 4ac$, which is zero when the quadratic has a double root.',
  },
  // Hard questions
  {
    id: 's51-h01',
    type: 'multiple-choice',
    question: 'Newton\'s identities express:',
    options: [
      'Power sums $p_k = \\sum x_i^k$ in terms of elementary symmetric polynomials',
      'Roots in terms of coefficients',
      'The discriminant as a determinant',
      'Complex roots as conjugate pairs',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Newton\'s identities give recursive formulas relating the power sums $p_k = x_1^k + x_2^k + \\cdots + x_n^k$ to the elementary symmetric polynomials. This lets us compute $\\sum r_i^k$ for any $k$ using only the polynomial\'s coefficients.',
  },
  {
    id: 's51-h02',
    type: 'multiple-choice',
    question: 'Symmetric functions connect to Galois theory because:',
    options: [
      'All symmetric functions are rational',
      'Solvability by radicals depends on which symmetric functions can be computed via root extractions',
      'Galois groups are always symmetric groups',
      'The discriminant determines the Galois group'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Galois theory studies which field extensions arise from solving polynomials. A polynomial is solvable by radicals when its roots can be expressed using nested radicals, which corresponds to the Galois group being solvable. Symmetric functions that remain unchanged under the Galois group can be computed from the coefficients.',
  },
];
