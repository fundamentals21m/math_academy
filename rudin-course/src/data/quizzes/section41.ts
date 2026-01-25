import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Riemann-Stieltjes integral $\\int_a^b f \\, d\\alpha$, the function $\\alpha$ is called:',
    options: [
      'The integrator',
      'The integrand',
      'The antiderivative',
      'The measure',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\int_a^b f \\, d\\alpha$, $f$ is the integrand and $\\alpha$ is the integrator. When $\\alpha(x) = x$, we recover the ordinary Riemann integral $\\int_a^b f \\, dx$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a partition $P = \\{x_0, x_1, \\ldots, x_n\\}$ of $[a, b]$, the upper Riemann-Stieltjes sum is:',
    options: [
      '$U(P, f, \\alpha) = \\sum_{i=1}^n M_i \\Delta x_i$ where $\\Delta x_i = x_i - x_{i-1}$',
      '$U(P, f, \\alpha) = \\sum_{i=1}^n f(x_i) \\alpha(x_i)$',
      '$U(P, f, \\alpha) = \\sum_{i=1}^n M_i \\Delta \\alpha_i$ where $\\Delta \\alpha_i = \\alpha(x_i) - \\alpha(x_{i-1})$',
      '$U(P, f, \\alpha) = \\sup_P \\sum_{i=1}^n f(x_i)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The upper sum is $U(P, f, \\alpha) = \\sum_{i=1}^n M_i \\Delta\\alpha_i$ where $M_i = \\sup\\{f(x) : x \\in [x_{i-1}, x_i]\\}$ and $\\Delta\\alpha_i = \\alpha(x_i) - \\alpha(x_{i-1})$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ on $[a, b]$ if:',
    options: [
      'Both $f$ and $\\alpha$ are monotonic',
      '$f$ is continuous on $[a, b]$',
      '$\\alpha$ is continuous on $[a, b]$',
      '$\\sup_P L(P, f, \\alpha) = \\inf_P U(P, f, \\alpha)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By definition, $f \\in \\mathscr{R}(\\alpha)$ on $[a,b]$ if and only if $\\sup_P L(P, f, \\alpha) = \\inf_P U(P, f, \\alpha)$, i.e., the lower integral equals the upper integral.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\alpha$ has a jump discontinuity at $c \\in (a, b)$ and $f$ is continuous at $c$, then:',
    options: [
      '$\\int_a^b f \\, d\\alpha$ does not exist',
      '$\\int_a^b f \\, d\\alpha = f(c)[\\alpha(c^+) - \\alpha(c^-)]$ plus integrals on $[a, c]$ and $[c, b]
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The jump in $\\alpha$ at $c$ contributes $f(c)[\\alpha(c^+) - \\alpha(c^-)]$ to the integral. This is why the Riemann-Stieltjes integral can represent sums: if $\\alpha$ is a step function, the integral becomes a weighted sum.',
  },
      '$\\int_a^b f \\, d\\alpha = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The jump in $\\alpha$ at $c$ contributes $f(c)[\\alpha(c^+) - \\alpha(c^-)]$ to the integral. This is why the Riemann-Stieltjes integral can represent sums: if $\\alpha$ is a step function, the integral becomes a weighted sum.',
  },
      'The integral equals the ordinary Riemann integral',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The jump in $\\alpha$ at $c$ contributes $f(c)[\\alpha(c^+) - \\alpha(c^-)]$ to the integral. This is why the Riemann-Stieltjes integral can represent sums: if $\\alpha$ is a step function, the integral becomes a weighted sum.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\alpha(x) = x$, then $\\int_a^b f \\, d\\alpha$ equals:',
    options: [
      '$f(b) - f(a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $\\Delta\\alpha_i = x_i - x_{i-1} = \\Delta x_i$, so the Riemann-Stieltjes sums become ordinary Riemann sums, and $\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, dx$.',
  },
      '$\\alpha(b)f(b) - \\alpha(a)f(a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $\\Delta\\alpha_i = x_i - x_{i-1} = \\Delta x_i$, so the Riemann-Stieltjes sums become ordinary Riemann sums, and $\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, dx$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $\\Delta\\alpha_i = x_i - x_{i-1} = \\Delta x_i$, so the Riemann-Stieltjes sums become ordinary Riemann sums, and $\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, dx$.',
  },
      'The ordinary Riemann integral $\\int_a^b f(x) \\, dx
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $\\Delta\\alpha_i = x_i - x_{i-1} = \\Delta x_i$, so the Riemann-Stieltjes sums become ordinary Riemann sums, and $\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, dx$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $\\Delta\\alpha_i = x_i - x_{i-1} = \\Delta x_i$, so the Riemann-Stieltjes sums become ordinary Riemann sums, and $\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, dx$.',
  },
];
