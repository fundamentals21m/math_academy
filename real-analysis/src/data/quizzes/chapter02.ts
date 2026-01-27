import type { QuizQuestion } from './types';

/**
 * Chapter 2: Sequences and Series
 * 20 Hard questions covering Sections 5-8:
 * - Section 5: Sequences and Their Limits
 * - Section 6: Infinite Series
 * - Section 7: Convergence Tests
 * - Section 8: Power Series
 */
export const chapter02Quiz: QuizQuestion[] = [
  // Section 5: Sequences and Their Limits
  {
    id: 'ch02-h01',
    type: 'multiple-choice',
    question: 'A sequence $(a_n)$ is Cauchy iff for every $\\varepsilon > 0$:',
    options: [
      'There exists $N$ such that $|a_m - a_n| < \\varepsilon$ for all $m, n > N$',
      'There exists $N$ such that $|a_n - L| < \\varepsilon$ for all $n > N$',
      '$|a_{n+1} - a_n| < \\varepsilon$ for all $n$',
      'The sequence is bounded'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Cauchy: terms become arbitrarily close to each other, without reference to a limit.'
  },
  {
    id: 'ch02-h02',
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}$, a sequence is Cauchy iff:',
    options: [
      'It is bounded',
      'It converges',
      'It is monotonic',
      'It is increasing'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Completeness of $\\mathbb{R}$: every Cauchy sequence converges.'
  },
  {
    id: 'ch02-h03',
    type: 'multiple-choice',
    question: 'The Bolzano-Weierstrass theorem states:',
    options: [
      'Every sequence converges',
      'Every monotonic sequence converges',
      'Every bounded sequence has a convergent subsequence',
      'Cauchy sequences converge'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Bolzano-Weierstrass: bounded sequences have convergent subsequences in $\\mathbb{R}$.'
  },
  {
    id: 'ch02-h04',
    type: 'multiple-choice',
    question: 'The limit superior $\\limsup a_n$ is:',
    options: [
      '$\\sup_n a_n$',
      '$\\max a_n$',
      '$\\lim a_n$ if it exists',
      '$\\lim_{n \\to \\infty} \\sup_{k \\geq n} a_k$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\limsup a_n = \\lim_{n \\to \\infty} (\\sup_{k \\geq n} a_k) = \\inf_n (\\sup_{k \\geq n} a_k)$.'
  },
  {
    id: 'ch02-h05',
    type: 'multiple-choice',
    question: 'A sequence converges iff:',
    options: [
      '$\\limsup a_n = \\liminf a_n$ (and both are finite)',
      '$\\limsup a_n < \\infty$',
      '$\\liminf a_n > -\\infty$',
      'The sequence is bounded'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Convergence $\\Leftrightarrow$ $\\limsup = \\liminf$ (the common value is the limit).'
  },
  // Section 6: Infinite Series
  {
    id: 'ch02-h06',
    type: 'multiple-choice',
    question: 'The Cauchy criterion for series: $\\sum a_n$ converges iff:',
    options: [
      '$a_n \\to 0$',
      'For all $\\varepsilon > 0$, $\\exists N$: $|\\sum_{k=m}^n a_k| < \\varepsilon$ for $n > m > N$',
      'Partial sums are bounded',
      '$\\sum |a_n|$ converges'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cauchy: tails $\\sum_{k=m}^n a_k$ become arbitrarily small.'
  },
  {
    id: 'ch02-h07',
    type: 'multiple-choice',
    question: 'A series $\\sum a_n$ converges absolutely iff:',
    options: [
      '$a_n \\to 0$',
      '$|a_n| \\leq 1/n^2$',
      '$\\sum |a_n|$ converges',
      'The series is geometric'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Absolute convergence: $\\sum |a_n| < \\infty$.'
  },
  {
    id: 'ch02-h08',
    type: 'multiple-choice',
    question: 'Conditional convergence means:',
    options: [
      '$\\sum a_n$ and $\\sum |a_n|$ both converge',
      '$\\sum a_n$ diverges',
      '$a_n$ alternates in sign',
      '$\\sum a_n$ converges but $\\sum |a_n|$ diverges'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Conditional: convergent but not absolutely convergent.'
  },
  {
    id: 'ch02-h09',
    type: 'multiple-choice',
    question: 'Riemann\'s rearrangement theorem: a conditionally convergent series can be rearranged to:',
    options: [
      'Any real number (or $\\pm\\infty$)',
      'Only its original sum',
      'Only larger values',
      'Only smaller values'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Riemann: conditionally convergent series can be rearranged to sum to any extended real.'
  },
  {
    id: 'ch02-h10',
    type: 'multiple-choice',
    question: 'The Cauchy product of $\\sum a_n$ and $\\sum b_n$ is:',
    options: [
      '$\\sum a_n b_n$',
      '$\\sum_{n=0}^\\infty c_n$ where $c_n = \\sum_{k=0}^n a_k b_{n-k}$',
      '$(\\sum a_n)(\\sum b_n)$',
      '$\\sum (a_n + b_n)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cauchy product: convolution $c_n = \\sum_{k=0}^n a_k b_{n-k}$.'
  },
  // Section 7: Convergence Tests
  {
    id: 'ch02-h11',
    type: 'multiple-choice',
    question: 'The root test: if $\\limsup |a_n|^{1/n} = L$, then:',
    options: [
      '$L < 1 \\Rightarrow$ diverges',
      '$L = 1 \\Rightarrow$ converges',
      '$L < 1 \\Rightarrow$ converges, $L > 1 \\Rightarrow$ diverges',
      'Root test gives no information'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Root test: $L < 1$ absolute convergence, $L > 1$ divergence, $L = 1$ inconclusive.'
  },
  {
    id: 'ch02-h12',
    type: 'multiple-choice',
    question: 'The integral test requires $f$ to be:',
    options: [
      'Just continuous',
      'Differentiable',
      'Bounded',
      'Positive, continuous, and decreasing for $x \\geq 1$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Integral test: $f$ positive, continuous, decreasing; $\\sum f(n)$ and $\\int_1^\\infty f$ converge/diverge together.'
  },
  {
    id: 'ch02-h13',
    type: 'multiple-choice',
    question: 'Dirichlet\'s test: if $(a_n)$ is monotone decreasing to $0$ and partial sums of $(b_n)$ are bounded:',
    options: [
      '$\\sum a_n b_n$ converges',
      '$\\sum a_n$ converges',
      '$\\sum b_n$ converges',
      'Nothing can be concluded'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Dirichlet: monotone null sequence times bounded partial sums gives convergence.'
  },
  {
    id: 'ch02-h14',
    type: 'multiple-choice',
    question: 'Abel\'s test: if $\\sum a_n$ converges and $(b_n)$ is monotone and bounded:',
    options: [
      '$\\sum b_n$ converges',
      '$\\sum a_n b_n$ converges',
      '$\\sum a_n$ diverges',
      'Nothing can be concluded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Abel: convergent series times monotone bounded sequence gives convergence.'
  },
  {
    id: 'ch02-h15',
    type: 'multiple-choice',
    question: 'The limit comparison test: if $a_n, b_n > 0$ and $\\lim a_n/b_n = c \\in (0, \\infty)$:',
    options: [
      '$\\sum a_n$ converges iff $c < 1$',
      'Only $\\sum a_n$ converges',
      '$\\sum a_n$ and $\\sum b_n$ both converge or both diverge',
      'Only $\\sum b_n$ converges'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Limit comparison: positive limit means series have same convergence behavior.'
  },
  // Section 8: Power Series
  {
    id: 'ch02-h16',
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ of $\\sum c_n x^n$ satisfies:',
    options: [
      'Series converges for all $x$',
      'Series diverges for all $x \\neq 0$',
      'Convergence only at endpoints',
      'Series converges for $|x| < R$ and diverges for $|x| > R$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Interior of interval: convergence; exterior: divergence; endpoints: must check.'
  },
  {
    id: 'ch02-h17',
    type: 'multiple-choice',
    question: 'Power series can be differentiated term-by-term:',
    options: [
      'Inside the interval of convergence',
      'Only at $x = 0$',
      'Everywhere',
      'Never'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Term-by-term differentiation valid for $|x| < R$; radius unchanged.'
  },
  {
    id: 'ch02-h18',
    type: 'multiple-choice',
    question: 'If $\\sum c_n x^n$ has radius $R$, then $\\sum n c_n x^{n-1}$:',
    options: [
      'Has radius $0$',
      'Has radius $R$',
      'Has radius $R+1$',
      'Diverges everywhere'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiation preserves radius of convergence.'
  },
  {
    id: 'ch02-h19',
    type: 'multiple-choice',
    question: 'A function is analytic at $a$ iff:',
    options: [
      'It is continuous at $a$',
      'It is differentiable at $a$',
      'It equals its Taylor series in some neighborhood of $a$',
      'Its derivative exists'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Analytic: equals power series in a neighborhood; stronger than $C^\\infty$.'
  },
  {
    id: 'ch02-h20',
    type: 'multiple-choice',
    question: 'The Cauchy-Hadamard formula for radius of convergence is:',
    options: [
      '$R = \\lim |c_n/c_{n+1}|$',
      '$R = \\sum |c_n|$',
      '$R = \\max |c_n|$',
      '$1/R = \\limsup |c_n|^{1/n}$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Cauchy-Hadamard: $1/R = \\limsup |c_n|^{1/n}$ (with conventions $1/0 = \\infty$, $1/\\infty = 0$).'
  }
];
