import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's54-e01',
    type: 'multiple-choice',
    question: 'Cauchy\'s theorem states that for an analytic function $f$ on and inside a closed curve $\\gamma$:',
    options: [
      '$\\oint_\\gamma f(z)\\, dz = f(0)
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Cauchy\'s theorem is fundamental: if $f$ is analytic everywhere on and inside a closed curve, the integral around that curve is zero. This reflects the "path independence" property of analytic functions in simply connected domains.',
  },
      '$\\oint_\\gamma f(z)\\, dz = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Cauchy\'s theorem is fundamental: if $f$ is analytic everywhere on and inside a closed curve, the integral around that curve is zero. This reflects the "path independence" property of analytic functions in simply connected domains.',
  },
      '$\\oint_\\gamma f(z)\\, dz = 2\\pi i
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Cauchy\'s theorem is fundamental: if $f$ is analytic everywhere on and inside a closed curve, the integral around that curve is zero. This reflects the "path independence" property of analytic functions in simply connected domains.',
  },
      '$\\oint_\\gamma f(z)\\, dz = \\infty
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Cauchy\'s theorem is fundamental: if $f$ is analytic everywhere on and inside a closed curve, the integral around that curve is zero. This reflects the "path independence" property of analytic functions in simply connected domains.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Cauchy\'s theorem is fundamental: if $f$ is analytic everywhere on and inside a closed curve, the integral around that curve is zero. This reflects the "path independence" property of analytic functions in simply connected domains.',
  },
  {
    id: 's54-e02',
    type: 'multiple-choice',
    question: 'The residue of a function at an isolated singularity is:',
    options: [
      'The coefficient $a_{-1}$ in the Laurent series',
      'The derivative at that point',
      'The value of the function at that point',
      'Always zero',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The residue at $z_0$ is the coefficient of $(z-z_0)^{-1}$ in the Laurent series expansion around that point. It\'s the key ingredient in the residue theorem for evaluating contour integrals.',
  },
  // Medium questions
  {
    id: 's54-m01',
    type: 'multiple-choice',
    question: 'The Residue Theorem states that $\\oint_\\gamma f(z)\\, dz$ equals:',
    options: [
      'The sum of all function values',
      'Zero always',
      '$2\\pi i$ times the sum of residues at singularities inside $\\gamma
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Residue Theorem states $\\oint_\\gamma f\\, dz = 2\\pi i \\sum \\text{Res}_{z_k}(f)$ where the sum is over all singularities inside the contour. This powerful result reduces complex integrals to algebraic calculations of residues.',
  },
      'The product of residues',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Residue Theorem states $\\oint_\\gamma f\\, dz = 2\\pi i \\sum \\text{Res}_{z_k}(f)$ where the sum is over all singularities inside the contour. This powerful result reduces complex integrals to algebraic calculations of residues.',
  },
  {
    id: 's54-m02',
    type: 'multiple-choice',
    question: 'Cauchy\'s Integral Formula expresses $f(z_0)$ as:',
    options: [
      'The derivative of $f$ at $z_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Cauchy\'s formula $f(z_0) = \\frac{1}{2\\pi i}\\oint \\frac{f(z)}{z-z_0}dz$ shows that an analytic function\'s value at any interior point is determined by its values on any surrounding curve. This has profound consequences for analytic functions.',
  },
      'The average of $f$ on the real line',
      'A power series coefficient',
      'A contour integral of $f(z)/(z-z_0)$ around a curve enclosing $z_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Cauchy\'s formula $f(z_0) = \\frac{1}{2\\pi i}\\oint \\frac{f(z)}{z-z_0}dz$ shows that an analytic function\'s value at any interior point is determined by its values on any surrounding curve. This has profound consequences for analytic functions.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Cauchy\'s formula $f(z_0) = \\frac{1}{2\\pi i}\\oint \\frac{f(z)}{z-z_0}dz$ shows that an analytic function\'s value at any interior point is determined by its values on any surrounding curve. This has profound consequences for analytic functions.',
  },
  // Hard questions
  {
    id: 's54-h01',
    type: 'multiple-choice',
    question: 'The residue theorem is useful for evaluating real integrals because:',
    options: [
      'Residues are always real numbers',
      'All real functions are analytic',
      'Complex integrals are always easier than real ones',
      'We can close contours in the complex plane where the added arc contributes nothing',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'For integrals like $\\int_{-\\infty}^{\\infty} f(x)dx$, we close the real-line contour with a semicircular arc. If $f$ decays fast enough, the arc contributes zero as the radius goes to infinity, leaving only residue contributions from poles in the half-plane.',
  },
  {
    id: 's54-h02',
    type: 'multiple-choice',
    question: 'A pole of order $n$ at $z_0$ means the function behaves like:',
    options: [
      'The function is analytic at $z_0
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'A pole of order $n$ means $(z-z_0)^n f(z)$ is analytic and nonzero at $z_0$. The function "blows up" like $1/(z-z_0)^n$. Simple poles ($n=1$) are most common; higher-order poles require more care in computing residues.',
  },
      'The function is zero at $z_0
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'A pole of order $n$ means $(z-z_0)^n f(z)$ is analytic and nonzero at $z_0$. The function "blows up" like $1/(z-z_0)^n$. Simple poles ($n=1$) are most common; higher-order poles require more care in computing residues.',
  },
      '$c/(z-z_0)^n$ near $z_0$, with $c \\neq 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'A pole of order $n$ means $(z-z_0)^n f(z)$ is analytic and nonzero at $z_0$. The function "blows up" like $1/(z-z_0)^n$. Simple poles ($n=1$) are most common; higher-order poles require more care in computing residues.',
  },
      'The function has $n$ roots at $z_0
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'A pole of order $n$ means $(z-z_0)^n f(z)$ is analytic and nonzero at $z_0$. The function "blows up" like $1/(z-z_0)^n$. Simple poles ($n=1$) are most common; higher-order poles require more care in computing residues.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'A pole of order $n$ means $(z-z_0)^n f(z)$ is analytic and nonzero at $z_0$. The function "blows up" like $1/(z-z_0)^n$. Simple poles ($n=1$) are most common; higher-order poles require more care in computing residues.',
  },
];
