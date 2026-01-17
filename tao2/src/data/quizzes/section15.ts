import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly on $[a, b]$ and each $f_n$ is Riemann integrable, then:',
    options: [
      '$f$ is Riemann integrable and $\\int_a^b f = \\lim_{n \\to \\infty} \\int_a^b f_n$',
      '$f$ might not be integrable',
      '$\\int f_n$ might not converge',
      'We can only conclude $f$ is measurable'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Uniform convergence allows us to interchange limits and integrals. The limit function is integrable and the integrals converge.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The statement $\\lim_{n \\to \\infty} \\int_a^b f_n = \\int_a^b \\lim_{n \\to \\infty} f_n$ holds when:',
    options: [
      '$f_n \\to f$ pointwise',
      '$f_n \\to f$ uniformly',
      'Always, without any conditions',
      'Only when $f_n$ are all positive'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform convergence justifies interchanging the limit and integral. Pointwise convergence alone is not sufficient.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\sum f_n$ converges uniformly to $f$ on $[a, b]$, then:',
    options: [
      '$\\int_a^b f = \\sum_{n=1}^\\infty \\int_a^b f_n$',
      '$\\int_a^b f \\neq \\sum \\int f_n$ in general',
      'The integrals might not exist',
      'We need additional assumptions about differentiability'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Uniform convergence of series allows term-by-term integration: $\\int \\sum f_n = \\sum \\int f_n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does pointwise convergence NOT always allow $\\lim \\int f_n = \\int \\lim f_n$?',
    options: [
      'Because the limit function might be unbounded',
      'Because "mass" can escape or concentrate as $n \\to \\infty$',
      'Because integration is not defined for pointwise limits',
      'It actually always works for bounded functions'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With only pointwise convergence, the functions can have "mass" that escapes to infinity or concentrates, causing the integral of the limit to differ from the limit of integrals.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = nx \\cdot e^{-nx^2}$ on $[0, 1]$. The integral $\\int_0^1 f_n$ equals:',
    options: [
      '$0$ for all $n$',
      '$\\frac{1}{2}(1 - e^{-n})$',
      '$n$',
      '$e^{-n}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using substitution $u = nx^2$, $\\int_0^1 nx e^{-nx^2} dx = \\frac{1}{2}\\int_0^n e^{-u} du = \\frac{1}{2}(1 - e^{-n}) \\to 1/2$ as $n \\to \\infty$.',
  },
];
