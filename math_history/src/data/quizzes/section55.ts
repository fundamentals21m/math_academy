import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's55-e01',
    type: 'multiple-choice',
    question: 'A Riemann surface was introduced to resolve the problem of:',
    options: [
      'Multi-valued functions like $\\sqrt{z}$ and $\\log z$',
      'Finding roots of polynomials',
      'Computing real integrals',
      'Proving the Fundamental Theorem of Algebra',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Riemann surfaces were introduced to make "multi-valued" functions like the square root and logarithm single-valued. Instead of a function with multiple outputs on $\\mathbb{C}$, we have a single-valued function on a more complex surface.',
  },
  {
    id: 's55-e02',
    type: 'multiple-choice',
    question: 'A branch point of a multi-valued function is:',
    options: [
      'A point where the function is zero',
      'A point where sheets of the Riemann surface meet',
      'A maximum of the function',
      'A point where the function is analytic'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Branch points are where the different "sheets" of a Riemann surface connect. For $\\sqrt{z}$, the branch points are at $z = 0$ and $z = \\infty$—these are where circling the point causes you to move between sheets.',
  },
  // Medium questions
  {
    id: 's55-m01',
    type: 'multiple-choice',
    question: 'The Riemann surface of $\\sqrt{z}$ consists of:',
    options: [
      'Infinitely many sheets',
      'A single copy of the complex plane',
      'Two sheets glued together along a branch cut',
      'Three disconnected planes'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since $\\sqrt{z}$ has two values for each nonzero $z$, its Riemann surface has two sheets. These are glued along a branch cut (typically the positive real axis) so that circling the origin once takes you from one sheet to the other.',
  },
  {
    id: 's55-m02',
    type: 'multiple-choice',
    question: 'The Riemann surface of $\\log z$ has:',
    options: [
      'A finite number of sheets equal to $2\\pi$',
      'Two sheets',
      'One sheet',
      'Infinitely many sheets arranged in a spiral'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The logarithm has infinitely many values: $\\log z = \\ln|z| + i(\\arg z + 2\\pi k)$ for all integers $k$. The Riemann surface is an infinite spiral—each circuit around the origin moves you to the next sheet.',
  },
  // Hard questions
  {
    id: 's55-h01',
    type: 'multiple-choice',
    question: 'The genus of a Riemann surface measures:',
    options: [
      'The number of "handles" or holes in the surface',
      'The number of branch points',
      'The degree of the defining polynomial',
      'The number of singular points',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The genus is a topological invariant counting "handles." A sphere has genus 0, a torus has genus 1, a double torus has genus 2, etc. For algebraic curves of degree $d$, the genus is $(d-1)(d-2)/2$.',
  },
  {
    id: 's55-h02',
    type: 'multiple-choice',
    question: 'The Riemann-Roch theorem relates:',
    options: [
      'Branch points and branch cuts',
      'Meromorphic functions, divisors, and the genus of a surface',
      'Real and imaginary parts of functions',
      'Derivatives and integrals'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Riemann-Roch theorem $\\ell(D) - \\ell(K-D) = \\deg(D) + 1 - g$ connects the space of meromorphic functions with prescribed poles (analysis), divisors (algebra), and genus (topology). It\'s a cornerstone of algebraic geometry.',
  },
];
