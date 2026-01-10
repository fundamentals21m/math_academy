import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly on $[a, b]$ and each $f_n \\in \\mathscr{R}$ on $[a, b]$, then:',
    options: [
      '$f$ may not be integrable',
      '$f \\in \\mathscr{R}$ and $\\int_a^b f_n \\to \\int_a^b f$',
      '$\\int_a^b f_n$ may not converge',
      '$f \\in \\mathscr{R}$ but $\\int_a^b f_n$ may not converge to $\\int_a^b f$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 7.16: If $f_n \\in \\mathscr{R}(\\alpha)$, $f_n \\to f$ uniformly on $[a,b]$, and $\\alpha$ is monotonically increasing, then $f \\in \\mathscr{R}(\\alpha)$ and $\\lim \\int f_n \\, d\\alpha = \\int f \\, d\\alpha$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the series $\\sum_{n=1}^{\\infty} f_n(x)$, if $\\sum f_n$ converges uniformly on $[a, b]$ and each $f_n \\in \\mathscr{R}$, then:',
    options: [
      '$\\int_a^b \\sum_{n=1}^{\\infty} f_n(x) \\, dx = \\sum_{n=1}^{\\infty} \\int_a^b f_n(x) \\, dx$',
      'Term-by-term integration may not be valid',
      'The sum may not be integrable',
      '$\\sum \\int f_n$ diverges'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Uniform convergence allows term-by-term integration: $\\int \\sum f_n = \\sum \\int f_n$. This follows from applying Theorem 7.16 to partial sums.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = n x(1-x^2)^n$ on $[0, 1]$. The pointwise limit is $f(x) = 0$. Then:',
    options: [
      '$\\lim_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx = 0$',
      '$\\lim_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx = \\frac{1}{2}$',
      'The limit of integrals does not exist',
      'Convergence is uniform'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $u = 1 - x^2$: $\\int_0^1 nx(1-x^2)^n dx = \\frac{n}{2}\\int_0^1 u^n du = \\frac{n}{2(n+1)} \\to \\frac{1}{2}$. But $f(x) = 0$ everywhere, so $\\int f = 0$. The convergence is NOT uniform (concentrated near $x = 0$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The interchange $\\lim_{n \\to \\infty} \\int_a^b f_n = \\int_a^b \\lim_{n \\to \\infty} f_n$ requires:',
    options: [
      'Pointwise convergence only',
      'Each $f_n$ continuous',
      'Uniform convergence (sufficient but not necessary in general)',
      'Monotone convergence of $\\{f_n\\}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Uniform convergence is a sufficient condition for interchanging limits and integrals. Other conditions (like dominated convergence in Lebesgue theory, or monotone convergence) also work but are not covered in Rudin\'s Riemann integral treatment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\sum_{n=1}^{\\infty} \\int_a^b |f_n(x)| \\, dx < \\infty$, can we conclude $\\sum f_n$ converges uniformly?',
    options: [
      'Yes, this is the integral form of the M-test',
      'No, this only implies pointwise convergence',
      'No, uniform convergence requires $\\sup |f_n| \\leq M_n$ with $\\sum M_n < \\infty$',
      'Yes, if each $f_n$ is continuous'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Weierstrass M-test requires $|f_n(x)| \\leq M_n$ for ALL $x$, not just integrability of $|f_n|$. The integral condition ensures absolute convergence of $\\sum \\int f_n$ but not uniform convergence of $\\sum f_n$.',
  },
];
