import type { QuizQuestion } from './types';

/**
 * Chapter 4: Integration and Advanced Topics
 * 20 Hard questions covering Sections 13-15:
 * - Section 13: The Riemann Integral
 * - Section 14: Fundamental Theorem of Calculus
 * - Section 15: Sequences of Functions
 */
export const chapter04Quiz: QuizQuestion[] = [
  // Section 13: The Riemann Integral
  {
    id: 'ch04-h01',
    type: 'multiple-choice',
    question: 'The Darboux upper integral is defined as:',
    options: [
      '$\\sup_P L(f, P)$',
      '$\\inf_P U(f, P)$',
      '$\\lim_{\\|P\\| \\to 0} U(f, P)$',
      '$\\int_a^b f$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Upper Darboux integral: $\\overline{\\int}_a^b f = \\inf_P U(f, P)$ over all partitions.'
  },
  {
    id: 'ch04-h02',
    type: 'multiple-choice',
    question: 'A bounded function $f$ on $[a,b]$ is Riemann integrable iff:',
    options: [
      '$f$ is continuous',
      'For every $\\varepsilon > 0$, there exists partition $P$ with $U(f,P) - L(f,P) < \\varepsilon$',
      '$f$ is monotonic',
      '$f$ is differentiable'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Riemann criterion: $f$ is integrable iff upper and lower sums can be made arbitrarily close.'
  },
  {
    id: 'ch04-h03',
    type: 'multiple-choice',
    question: 'Lebesgue\'s criterion for Riemann integrability states $f$ is integrable iff:',
    options: [
      '$f$ is continuous',
      '$f$ is bounded and continuous almost everywhere (discontinuities have measure zero)',
      '$f$ is monotonic',
      '$f$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Lebesgue: Riemann integrable iff bounded and discontinuous on a set of measure zero.'
  },
  {
    id: 'ch04-h04',
    type: 'multiple-choice',
    question: 'The Thomae function (ruler function) on $[0,1]$ is:',
    options: [
      'Not Riemann integrable',
      'Riemann integrable with $\\int = 0$',
      'Continuous everywhere',
      'Discontinuous everywhere'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Thomae function is continuous at irrationals, discontinuous at rationals (measure zero).'
  },
  {
    id: 'ch04-h05',
    type: 'multiple-choice',
    question: 'A function of bounded variation on $[a,b]$:',
    options: [
      'May not be Riemann integrable',
      'Is Riemann integrable',
      'Is continuous',
      'Is differentiable'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Bounded variation implies at most countably many discontinuities, hence integrable.'
  },
  {
    id: 'ch04-h06',
    type: 'multiple-choice',
    question: 'The Riemann-Stieltjes integral $\\int_a^b f\\,dg$ reduces to Riemann integral when:',
    options: [
      '$g(x) = x$',
      '$g(x) = x^2$',
      '$f = g$',
      '$g$ is constant'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When $g(x) = x$, $dg = dx$, so $\\int f\\,dg = \\int f\\,dx$.'
  },
  {
    id: 'ch04-h07',
    type: 'multiple-choice',
    question: 'The improper integral $\\int_1^\\infty \\frac{1}{x^p}\\,dx$ converges iff:',
    options: [
      '$p > 0$',
      '$p > 1$',
      '$p < 1$',
      '$p = 1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\int_1^\\infty x^{-p}\\,dx = [\\frac{x^{1-p}}{1-p}]_1^\\infty$ converges iff $1-p < 0$, i.e., $p > 1$.'
  },
  // Section 14: Fundamental Theorem of Calculus
  {
    id: 'ch04-h08',
    type: 'multiple-choice',
    question: 'If $f$ is integrable and $F(x) = \\int_a^x f$, then $F$ is:',
    options: [
      'Differentiable everywhere with $F\' = f$',
      'Continuous and differentiable a.e. with $F\' = f$ a.e.',
      'Not continuous',
      'Constant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Integral function is always continuous, differentiable almost everywhere.'
  },
  {
    id: 'ch04-h09',
    type: 'multiple-choice',
    question: 'The First FTC requires $f$ to be:',
    options: [
      'Differentiable',
      'Continuous at the point of differentiation',
      'Bounded',
      'Monotonic'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'FTC I: if $f$ is continuous at $c$, then $F\'(c) = f(c)$ where $F(x) = \\int_a^x f$.'
  },
  {
    id: 'ch04-h10',
    type: 'multiple-choice',
    question: 'A function $F$ is absolutely continuous on $[a,b]$ iff:',
    options: [
      '$F$ is differentiable',
      '$F$ is the indefinite integral of an $L^1$ function',
      '$F$ is continuous',
      '$F$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Absolute continuity $\\Leftrightarrow$ $F(x) = F(a) + \\int_a^x F\'$ for integrable $F\'$.'
  },
  {
    id: 'ch04-h11',
    type: 'multiple-choice',
    question: 'The Cantor function:',
    options: [
      'Is absolutely continuous',
      'Is continuous with $F\' = 0$ a.e., but $F(1) - F(0) = 1$',
      'Is differentiable everywhere',
      'Satisfies FTC'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cantor function is continuous, $F\' = 0$ a.e., but $F(1) \\neq F(0)$; not absolutely continuous.'
  },
  {
    id: 'ch04-h12',
    type: 'multiple-choice',
    question: 'Leibniz rule for differentiating $\\int_{a(x)}^{b(x)} f(t)\\,dt$:',
    options: [
      '$f(b(x))b\'(x) - f(a(x))a\'(x)$',
      '$\\int_{a(x)}^{b(x)} f\'(t)\\,dt$',
      '$f(x)(b(x) - a(x))$',
      'Does not exist'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Leibniz: $\\frac{d}{dx}\\int_{a(x)}^{b(x)} f = f(b(x))b\'(x) - f(a(x))a\'(x)$.'
  },
  {
    id: 'ch04-h13',
    type: 'multiple-choice',
    question: 'The Henstock-Kurzweil integral:',
    options: [
      'Is more restrictive than Riemann',
      'Integrates every derivative (perfect FTC)',
      'Requires continuity',
      'Is the same as Riemann'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'HK integral: every derivative is integrable and FTC holds without exceptions.'
  },
  // Section 15: Sequences of Functions
  {
    id: 'ch04-h14',
    type: 'multiple-choice',
    question: 'Uniform convergence $f_n \\to f$ means:',
    options: [
      'For each $x$, $f_n(x) \\to f(x)$',
      '$\\sup_x |f_n(x) - f(x)| \\to 0$',
      '$\\int |f_n - f| \\to 0$',
      '$f_n\' \\to f\'$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniform: the rate of convergence is independent of $x$ (sup-norm convergence).'
  },
  {
    id: 'ch04-h15',
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly and each $f_n$ is continuous:',
    options: [
      '$f$ may be discontinuous',
      '$f$ is continuous',
      '$f$ is differentiable',
      '$f_n$ are bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniform limit of continuous functions is continuous.'
  },
  {
    id: 'ch04-h16',
    type: 'multiple-choice',
    question: 'The Weierstrass M-test: if $|f_n(x)| \\leq M_n$ and $\\sum M_n < \\infty$:',
    options: [
      '$\\sum f_n$ converges pointwise',
      '$\\sum f_n$ converges uniformly and absolutely',
      '$\\sum f_n$ diverges',
      '$f_n \\to 0$ uniformly'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'M-test gives uniform and absolute convergence when dominated by convergent series.'
  },
  {
    id: 'ch04-h17',
    type: 'multiple-choice',
    question: 'Dini\'s theorem: if $f_n$ are continuous, $f_n \\downarrow f$ pointwise, and $f$ is continuous:',
    options: [
      'Convergence may not be uniform',
      'Convergence is uniform on compact sets',
      'Convergence is only at one point',
      '$f$ is constant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Dini: monotone pointwise convergence of continuous functions is uniform on compact sets.'
  },
  {
    id: 'ch04-h18',
    type: 'multiple-choice',
    question: 'For term-by-term differentiation of $\\sum f_n$:',
    options: [
      'Uniform convergence of $\\sum f_n$ suffices',
      'Need $\\sum f_n$ convergent at one point AND $\\sum f_n\'$ uniformly convergent',
      'Pointwise convergence suffices',
      'Never valid'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiation requires uniform convergence of derivatives, not just the original series.'
  },
  {
    id: 'ch04-h19',
    type: 'multiple-choice',
    question: 'The Arzelà-Ascoli theorem characterizes compact subsets of $C([a,b])$ as:',
    options: [
      'Finite sets',
      'Closed, bounded, and equicontinuous families',
      'All continuous functions',
      'Differentiable functions'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Arzelà-Ascoli: precompact $\\Leftrightarrow$ bounded + equicontinuous.'
  },
  {
    id: 'ch04-h20',
    type: 'multiple-choice',
    question: 'The Stone-Weierstrass theorem states that a subalgebra of $C(X)$ that separates points and vanishes nowhere is:',
    options: [
      'Finite dimensional',
      'Dense in $C(X)$',
      'Empty',
      'Equal to $C(X)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Stone-Weierstrass generalizes Weierstrass approximation to arbitrary compact spaces.'
  }
];
