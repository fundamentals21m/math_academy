import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's45-e01',
    type: 'multiple-choice',
    question: 'The Jacobi elliptic function $\\text{sn}(u, k)$ is defined by:',
    options: [
      'Inverting the elliptic integral of the first kind',
      'Differentiating the elliptic integral',
      'Taking the square root of an elliptic integral',
      'Multiplying two elliptic integrals',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Just as sine is the inverse of arcsine, the elliptic function sn is obtained by inverting the elliptic integral $F(\\phi, k)$. If $u = F(\\phi, k)$, then $\\text{sn}(u, k) = \\sin\\phi$.',
  },
  {
    id: 's45-e02',
    type: 'multiple-choice',
    question: 'The fundamental identity $\\text{sn}^2(u) + \\text{cn}^2(u) = 1$ generalizes which trigonometric identity?',
    options: [
      '$\\tan(x) = \\sin(x)/\\cos(x)$',
      '$\\sin^2(x) + \\cos^2(x) = 1$',
      '$\\sin(2x) = 2\\sin(x)\\cos(x)$',
      '$e^{ix} = \\cos(x) + i\\sin(x)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Jacobi elliptic functions satisfy $\\text{sn}^2 + \\text{cn}^2 = 1$, which directly generalizes the Pythagorean identity $\\sin^2 + \\cos^2 = 1$ for circular functions.',
  },
  // Medium questions
  {
    id: 's45-m01',
    type: 'multiple-choice',
    question: 'What makes elliptic functions fundamentally different from trigonometric functions?',
    options: [
      'They only work for integers',
      'They are not continuous',
      'They have two independent periods (doubly periodic)',
      'They have no derivatives'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'While sine has one period ($2\\pi$), elliptic functions have two independent periods—one real ($4K$) and one imaginary ($2iK\'$). This "double periodicity" in the complex plane is their defining characteristic.',
  },
  {
    id: 's45-m02',
    type: 'multiple-choice',
    question: 'Jacobi theta functions are useful because:',
    options: [
      'They have only integer values',
      'They are simpler than polynomials',
      'They eliminate the need for complex numbers',
      'Elliptic functions can be expressed as their ratios, and they converge rapidly'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Jacobi expressed elliptic functions as ratios of theta functions, such as $\\text{sn}(u) = (\\theta_3/\\theta_2) \\cdot (\\theta_1/\\theta_4)$. The theta series converge very rapidly, making numerical computation practical.',
  },
  // Hard questions
  {
    id: 's45-h01',
    type: 'multiple-choice',
    question: 'Abel\'s theorem states that for algebraic integrals:',
    options: [
      'There is an addition theorem expressing sums in terms of finitely many integrals',
      'All such integrals can be computed in closed form',
      'The integrals are always rational numbers',
      'No addition theorem exists',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Abel proved that for integrals of algebraic functions, there exists an addition theorem: the sum of any number of such integrals can be expressed using a fixed finite number of them. This profound generalization explains why elliptic integrals have addition formulas.',
  },
  {
    id: 's45-h02',
    type: 'multiple-choice',
    question: 'Jacobi used theta function identities to prove a result about:',
    options: [
      'The infinitude of prime numbers',
      'The number of ways to write integers as sums of four squares',
      'The irrationality of $\\pi$',
      'The unsolvability of the quintic'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Jacobi\'s Four Squares Theorem gives an exact formula for the number of representations of $n$ as a sum of four squares: it equals $8 \\times$ (sum of divisors of $n$ not divisible by 4). He proved this using identities for theta functions.',
  },
];
