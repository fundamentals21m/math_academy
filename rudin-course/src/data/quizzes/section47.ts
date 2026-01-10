import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $\\{f_n\\}$ converges uniformly to $f$ on $E$ if:',
    options: [
      'For each $x \\in E$ and $\\epsilon > 0$, there exists $N$ such that $n \\geq N$ implies $|f_n(x) - f(x)| < \\epsilon$',
      'For each $\\epsilon > 0$, there exists $N$ such that $n \\geq N$ implies $|f_n(x) - f(x)| < \\epsilon$ for all $x \\in E$',
      '$\\lim_{n \\to \\infty} f_n(x) = f(x)$ for all $x \\in E$',
      '$\\sup_{x \\in E} f_n(x) \\to \\sup_{x \\in E} f(x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform convergence means the same $N$ works for ALL $x$ simultaneously: given $\\epsilon > 0$, there exists $N$ such that for all $n \\geq N$ and all $x \\in E$, $|f_n(x) - f(x)| < \\epsilon$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Uniform convergence $f_n \\to f$ on $E$ is equivalent to:',
    options: [
      '$\\lim_{n \\to \\infty} f_n(x) = f(x)$ for each $x$',
      '$\\lim_{n \\to \\infty} \\sup_{x \\in E} |f_n(x) - f(x)| = 0$',
      '$\\lim_{n \\to \\infty} \\int_E |f_n - f| = 0$',
      '$f_n$ and $f$ have the same zeros'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sup-norm criterion: $f_n \\to f$ uniformly on $E$ if and only if $\\|f_n - f\\|_\\infty = \\sup_{x \\in E}|f_n(x) - f(x)| \\to 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Weierstrass M-test states: if $|f_n(x)| \\leq M_n$ for all $x \\in E$ and $\\sum M_n < \\infty$, then:',
    options: [
      '$\\sum f_n$ converges pointwise on $E$',
      '$\\sum f_n$ converges uniformly on $E$',
      '$\\sum f_n$ converges absolutely but not uniformly',
      'Each $f_n$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Weierstrass M-test (Theorem 7.10): If $|f_n(x)| \\leq M_n$ for all $x \\in E$ and $\\sum M_n$ converges, then $\\sum f_n$ converges uniformly (and absolutely) on $E$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The sequence $f_n(x) = \\frac{x}{n}$ on $\\mathbb{R}$:',
    options: [
      'Converges uniformly to $0$ on $\\mathbb{R}$',
      'Converges pointwise but not uniformly to $0$ on $\\mathbb{R}$',
      'Does not converge pointwise',
      'Converges uniformly on $[0, 1]$ but not on $\\mathbb{R}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For each fixed $x$, $x/n \\to 0$. But $\\sup_{x \\in \\mathbb{R}} |x/n| = \\infty$ for each $n$, so convergence is not uniform on $\\mathbb{R}$. On $[0, 1]$: $\\sup_{x \\in [0,1]} |x/n| = 1/n \\to 0$, so convergence is uniform on $[0, 1]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Cauchy criterion for uniform convergence states that $\\{f_n\\}$ converges uniformly on $E$ if and only if:',
    options: [
      'For all $\\epsilon > 0$, there exists $N$ such that $m, n \\geq N$ implies $|f_n(x) - f_m(x)| < \\epsilon$ for all $x \\in E$',
      'The sequence is uniformly bounded',
      '$\\sum |f_n|$ converges',
      '$\\{f_n\\}$ is equicontinuous'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Theorem 7.8: $\\{f_n\\}$ converges uniformly on $E$ if and only if for every $\\epsilon > 0$, there exists $N$ such that $m, n \\geq N$ implies $\\sup_{x \\in E}|f_n(x) - f_m(x)| < \\epsilon$.',
  },
];
