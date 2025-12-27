import type { QuizQuestion } from './types';

/**
 * Chapter 3: Continuity and Differentiation
 * 20 Hard questions covering Sections 9-12:
 * - Section 9: Limits and Continuity
 * - Section 10: Continuous Functions
 * - Section 11: Differentiation
 * - Section 12: Applications of Derivatives
 */
export const chapter03Quiz: QuizQuestion[] = [
  // Section 9: Limits and Continuity
  {
    id: 'ch03-h01',
    type: 'multiple-choice',
    question: 'The sequential characterization of limits states that $\\lim_{x \\to c} f(x) = L$ iff:',
    options: [
      'For every sequence $x_n \\to c$ with $x_n \\neq c$, $f(x_n) \\to L$',
      '$f$ is continuous at $c$',
      '$f(c) = L$',
      'There exists a sequence $x_n \\to c$ with $f(x_n) \\to L$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Sequential criterion: limit exists iff for ALL sequences approaching c, function values approach L.'
  },
  {
    id: 'ch03-h02',
    type: 'multiple-choice',
    question: 'A function $f$ is uniformly continuous on $S$ iff for every $\\varepsilon > 0$:',
    options: [
      'There exists $\\delta > 0$ (depending on $x$) such that $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$',
      'There exists $\\delta > 0$ (independent of $x$) such that for all $x, y \\in S$: $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$',
      '$f$ is continuous at every point',
      '$f$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniform continuity: one $\\delta$ works for all points in $S$.'
  },
  {
    id: 'ch03-h03',
    type: 'multiple-choice',
    question: 'Every continuous function on a compact set is:',
    options: [
      'Differentiable',
      'Uniformly continuous',
      'Monotonic',
      'Constant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Heine-Cantor theorem: continuity on compact sets implies uniform continuity.'
  },
  {
    id: 'ch03-h04',
    type: 'multiple-choice',
    question: 'The function $f(x) = \\sin(1/x)$ for $x \\neq 0$ has what behavior as $x \\to 0$?',
    options: [
      'Limit exists and equals $0$',
      'Limit exists and equals $1$',
      'Limit does not exist (oscillates)',
      'Limit is $+\\infty$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ as $x \\to 0$; no limit exists.'
  },
  {
    id: 'ch03-h05',
    type: 'multiple-choice',
    question: 'The oscillation of $f$ at $c$ is defined as $\\omega_f(c) = \\lim_{\\delta \\to 0} \\sup\\{|f(x) - f(y)| : x, y \\in (c-\\delta, c+\\delta) \\cap S\\}$. Then $f$ is continuous at $c$ iff:',
    options: [
      '$\\omega_f(c) > 0$',
      '$\\omega_f(c) = 0$',
      '$\\omega_f(c) = 1$',
      '$\\omega_f(c)$ is undefined'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Oscillation measures discontinuity; $\\omega_f(c) = 0$ iff $f$ is continuous at $c$.'
  },
  // Section 10: Continuous Functions
  {
    id: 'ch03-h06',
    type: 'multiple-choice',
    question: 'The Intermediate Value Theorem requires:',
    options: [
      '$f$ continuous on $[a,b]$, and $f(a) \\neq f(b)$',
      '$f$ continuous on $[a,b]$',
      '$f$ differentiable on $[a,b]$',
      '$f$ monotonic on $[a,b]$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'IVT: continuous $f$ on $[a,b]$ takes every value between $f(a)$ and $f(b)$.'
  },
  {
    id: 'ch03-h07',
    type: 'multiple-choice',
    question: 'A continuous bijection from a compact space to a Hausdorff space:',
    options: [
      'May not have continuous inverse',
      'Has continuous inverse (is a homeomorphism)',
      'Is not bijective',
      'Cannot exist'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Continuous bijection from compact to Hausdorff is automatically a homeomorphism.'
  },
  {
    id: 'ch03-h08',
    type: 'multiple-choice',
    question: 'The Weierstrass Extreme Value Theorem states:',
    options: [
      'Every function has a maximum',
      'A continuous function on a compact set attains its supremum and infimum',
      'Bounded functions are continuous',
      'Continuous functions are bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'EVT: continuous function on compact set achieves max and min.'
  },
  {
    id: 'ch03-h09',
    type: 'multiple-choice',
    question: 'A function $f: [a,b] \\to \\mathbb{R}$ is Lipschitz if:',
    options: [
      '$|f(x) - f(y)| \\leq L|x - y|$ for some $L > 0$ and all $x, y$',
      '$f$ is continuous',
      '$f$ is differentiable',
      '$|f(x)| \\leq L$ for all $x$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Lipschitz condition: $|f(x) - f(y)| \\leq L|x-y|$ implies uniform continuity.'
  },
  {
    id: 'ch03-h10',
    type: 'multiple-choice',
    question: 'The function $f(x) = \\sqrt{x}$ on $[0,1]$ is:',
    options: [
      'Lipschitz',
      'Uniformly continuous but not Lipschitz',
      'Neither uniformly continuous nor Lipschitz',
      'Differentiable at $0$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\sqrt{x}$ is uniformly continuous on $[0,1]$ (compact), but $|\\sqrt{x} - 0|/|x-0| = 1/\\sqrt{x} \\to \\infty$.'
  },
  // Section 11: Differentiation
  {
    id: 'ch03-h11',
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $c$, then:',
    options: [
      '$f$ is continuous at $c$',
      '$f\'$ is continuous at $c$',
      '$f$ is differentiable in a neighborhood of $c$',
      '$f$ is twice differentiable at $c$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Differentiability implies continuity, but not continuity of the derivative.'
  },
  {
    id: 'ch03-h12',
    type: 'multiple-choice',
    question: 'The Mean Value Theorem states that if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$:',
    options: [
      'There exists $c \\in (a,b)$ with $f\'(c) = 0$',
      'There exists $c \\in (a,b)$ with $f\'(c) = \\frac{f(b) - f(a)}{b - a}$',
      '$f(a) = f(b)$',
      '$f$ is constant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'MVT: tangent line at some interior point is parallel to the secant line.'
  },
  {
    id: 'ch03-h13',
    type: 'multiple-choice',
    question: 'Rolle\'s Theorem is a special case of MVT when:',
    options: [
      '$f\'(a) = f\'(b)$',
      '$f(a) = f(b)$',
      '$f$ is polynomial',
      '$a = 0$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rolle: if $f(a) = f(b)$, then there exists $c$ with $f\'(c) = 0$.'
  },
  {
    id: 'ch03-h14',
    type: 'multiple-choice',
    question: 'A function with $f\' > 0$ on an interval is:',
    options: [
      'Constant',
      'Strictly increasing',
      'Strictly decreasing',
      'Bounded'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Positive derivative implies strictly increasing (by MVT).'
  },
  {
    id: 'ch03-h15',
    type: 'multiple-choice',
    question: 'The Inverse Function Theorem (1D) states that if $f$ is $C^1$ and $f\'(c) \\neq 0$:',
    options: [
      '$f$ has no inverse',
      '$f$ has a local $C^1$ inverse near $c$',
      '$f$ is constant',
      '$f\'(c) = 1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Non-zero derivative at a point guarantees local invertibility with smooth inverse.'
  },
  // Section 12: Applications of Derivatives
  {
    id: 'ch03-h16',
    type: 'multiple-choice',
    question: 'Taylor\'s theorem with remainder: if $f \\in C^{n+1}$, then $f(x) = T_n(x) + R_n(x)$ where $R_n$ is:',
    options: [
      'The Lagrange remainder: $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$ for some $\\xi$ between $a$ and $x$',
      'Always zero',
      '$f(x) - f(a)$',
      'Undefined'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Lagrange form of remainder gives exact error bound involving $(n+1)$st derivative.'
  },
  {
    id: 'ch03-h17',
    type: 'multiple-choice',
    question: 'L\'Hôpital\'s rule applies to indeterminate forms:',
    options: [
      'Only $0/0$',
      'Only $\\infty/\\infty$',
      'Both $0/0$ and $\\infty/\\infty$',
      '$0 \\cdot \\infty$ directly'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'L\'Hôpital\'s rule handles $0/0$ and $\\infty/\\infty$; other forms need rearrangement.'
  },
  {
    id: 'ch03-h18',
    type: 'multiple-choice',
    question: 'The second derivative test: if $f\'(c) = 0$ and $f\'\'(c) > 0$, then $c$ is a:',
    options: [
      'Local maximum',
      'Local minimum',
      'Saddle point',
      'Inflection point'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Positive second derivative at critical point indicates local minimum (concave up).'
  },
  {
    id: 'ch03-h19',
    type: 'multiple-choice',
    question: 'An inflection point of $f$ is where:',
    options: [
      '$f\' = 0$',
      '$f$ changes concavity ($f\'\'$ changes sign)',
      '$f$ has a maximum',
      '$f$ is not differentiable'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Inflection points are where concavity changes, i.e., $f\'\'$ changes sign.'
  },
  {
    id: 'ch03-h20',
    type: 'multiple-choice',
    question: 'Cauchy\'s Mean Value Theorem: if $f, g$ are continuous on $[a,b]$ and differentiable on $(a,b)$ with $g\' \\neq 0$:',
    options: [
      'There exists $c$ with $\\frac{f\'(c)}{g\'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$',
      '$f = g$',
      '$f\' = g\'$ somewhere',
      'The theorem doesn\'t exist'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Cauchy MVT generalizes MVT and is key to proving L\'Hôpital\'s rule.'
  }
];
