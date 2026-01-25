import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's50-e01',
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Algebra states that every non-constant polynomial:',
    options: [
      'Has exactly $n$ distinct roots',
      'Has only real roots',
      'Can be factored over the rationals',
      'Has at least one complex root',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The FTA guarantees that every polynomial of degree $n \\geq 1$ with complex coefficients has at least one root in $\\mathbb{C}$. By repeated factoring, this means it has exactly $n$ roots (counting multiplicity).',
  },
  {
    id: 's50-e02',
    type: 'multiple-choice',
    question: 'Who gave the first rigorous proof of the Fundamental Theorem of Algebra?',
    options: [
      'Gauss (1799)',
      'Descartes (1637)',
      'Euler (1749)',
      'Newton (1687)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Carl Friedrich Gauss gave the first rigorous proof in his 1799 doctoral dissertation. He later gave three more proofs using different methods. Earlier attempts by d\'Alembert and others contained gaps.',
  },
  // Medium questions
  {
    id: 's50-m01',
    type: 'multiple-choice',
    question: 'A field is "algebraically closed" if:',
    options: [
      'It contains all rational numbers',
      'It has no zero divisors',
      'It is finite',
      'Every non-constant polynomial has a root in that field',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A field $F$ is algebraically closed if every non-constant polynomial with coefficients in $F$ has at least one root in $F$. The complex numbers $\\mathbb{C}$ are algebraically closed; the reals $\\mathbb{R}$ are not (since $x^2 + 1 = 0$ has no real solution).',
  },
  {
    id: 's50-m02',
    type: 'multiple-choice',
    question: 'Complex roots of a real polynomial:',
    options: [
      'Are always purely imaginary',
      'Must have modulus 1',
      'Come in conjugate pairs',
      'Are always rational',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If $a + bi$ is a root of a polynomial with real coefficients, then so is its conjugate $a - bi$. This is because complex conjugation preserves the polynomial equation when all coefficients are real.',
  },
  // Hard questions
  {
    id: 's50-h01',
    type: 'multiple-choice',
    question: 'The proof of the FTA requires ingredients from:',
    options: [
      'Number theory',
      'Analysis or topology, not just algebra',
      'Only basic algebra',
      'Combinatorics',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Despite its algebraic statement, the FTA cannot be proved using only algebra. Every proof uses some analytic or topological fact: Liouville\'s theorem, the intermediate value theorem, or topological winding numbers. This is because algebraic closure involves completeness properties.',
  },
  {
    id: 's50-h02',
    type: 'multiple-choice',
    question: 'The Liouville proof of the FTA uses the fact that:',
    options: [
      'A bounded entire function must be constant',
      'Complex numbers form a field',
      'All continuous functions have fixed points',
      'Polynomials are differentiable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Liouville\'s theorem states that any bounded entire (everywhere analytic) function is constant. If $p(z)$ had no roots, then $1/p(z)$ would be entire and bounded (since $|p(z)| \\to \\infty$ as $|z| \\to \\infty$), forcing $1/p$ to be constant—a contradiction.',
  },
];
