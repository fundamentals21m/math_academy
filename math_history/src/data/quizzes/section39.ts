import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's39-e01',
    type: 'multiple-choice',
    question: 'According to Cauchy\'s definition, when does an infinite series $\\sum a_n$ converge?',
    options: [
      'When the sequence of partial sums converges to a limit',
      'When the terms $a_n$ approach zero',
      'When $|a_n| < 1$ for all $n$',
      'When the series can be rearranged to sum to any value',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Cauchy defined convergence of a series in terms of its partial sums: the series converges to $S$ if and only if the partial sums $S_N = a_1 + a_2 + \\cdots + a_N$ approach $S$ as $N \\to \\infty$.',
  },
  {
    id: 's39-e02',
    type: 'multiple-choice',
    question: 'What is the radius of convergence of the geometric series $\\sum x^n$?',
    options: [
      '$R = 1$',
      '$R = \\infty$',
      '$R = 0$',
      '$R = e$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The geometric series $\\sum x^n$ converges when $|x| < 1$ and diverges when $|x| > 1$, so its radius of convergence is $R = 1$. At the boundary points $x = \\pm 1$, the series diverges.',
  },
  // Medium questions
  {
    id: 's39-m01',
    type: 'multiple-choice',
    question: 'The alternating harmonic series $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$ is an example of:',
    options: [
      'Conditional convergence (converges but not absolutely)',
      'Absolute convergence',
      'Divergence',
      'Uniform convergence',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The alternating harmonic series converges to $\\ln 2$ (by the alternating series test), but the series of absolute values is the harmonic series $\\sum 1/n$, which diverges. This makes it conditionally convergent but not absolutely convergent.',
  },
  {
    id: 's39-m02',
    type: 'multiple-choice',
    question: 'The Riemann Rearrangement Theorem states that a conditionally convergent series can be rearranged to:',
    options: [
      'Converge to any real number, or diverge',
      'Only converge to its original sum',
      'Converge to exactly two different values',
      'Always converge to zero',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Riemann proved that for any conditionally convergent series, the terms can be reordered to make the series converge to any prescribed real number, or to diverge to $+\\infty$ or $-\\infty$. This shows that order matters for conditional convergence!',
  },
  // Hard questions
  {
    id: 's39-h01',
    type: 'multiple-choice',
    question: 'The Weierstrass M-test guarantees uniform convergence of $\\sum f_n(x)$ when:',
    options: [
      '$|f_n(x)| \\leq M_n$ for all $x$ and $\\sum M_n$ converges',
      'Each $f_n$ is continuous',
      'The series converges pointwise',
      '$f_n(x) \\to 0$ uniformly',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Weierstrass M-test provides sufficient conditions for uniform convergence: if each term is bounded by a constant $M_n$ independent of $x$, and the sum of these bounds converges, then the function series converges uniformly.',
  },
  {
    id: 's39-h02',
    type: 'multiple-choice',
    question: 'Why is uniform convergence important for series of functions?',
    options: [
      'It preserves continuity and allows term-by-term integration',
      'It is equivalent to absolute convergence',
      'It guarantees the series converges faster',
      'It ensures all partial sums are bounded',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Uniform convergence is crucial because it preserves properties like continuity: the uniform limit of continuous functions is continuous. It also justifies term-by-term integration and differentiation under appropriate conditions—operations that fail for merely pointwise convergence.',
  },
];
