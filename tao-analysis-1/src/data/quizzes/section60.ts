import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Let $\\alpha$ be a monotonically increasing function on $[a,b]$ and $f$ bounded on $[a,b]$. The upper Riemann-Stieltjes sum $U(P, f, \\alpha)$ is defined as:',
    options: [
      '$\\sum_{i=1}^{n} \\inf_{x \\in [x_{i-1}, x_i]} f(x) \\cdot (x_i - x_{i-1})
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The upper Riemann-Stieltjes sum uses the supremum of $f$ on each subinterval multiplied by the increment of the integrator $\\alpha$, not the length of the subinterval.',
  },
      '$\\sum_{i=1}^{n} f(x_i) \\cdot (\\alpha(x_i) - \\alpha(x_{i-1}))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The upper Riemann-Stieltjes sum uses the supremum of $f$ on each subinterval multiplied by the increment of the integrator $\\alpha$, not the length of the subinterval.',
  },
      '$\\sum_{i=1}^{n} \\sup_{x \\in [x_{i-1}, x_i]} f(x) \\cdot (\\alpha(x_i) - \\alpha(x_{i-1}))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The upper Riemann-Stieltjes sum uses the supremum of $f$ on each subinterval multiplied by the increment of the integrator $\\alpha$, not the length of the subinterval.',
  },
      '$\\sum_{i=1}^{n} \\sup_{x \\in [x_{i-1}, x_i]} f(x) \\cdot (x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The upper Riemann-Stieltjes sum uses the supremum of $f$ on each subinterval multiplied by the increment of the integrator $\\alpha$, not the length of the subinterval.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The upper Riemann-Stieltjes sum uses the supremum of $f$ on each subinterval multiplied by the increment of the integrator $\\alpha$, not the length of the subinterval.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\alpha(x) = x$ for all $x \\in [a,b]$, then the Riemann-Stieltjes integral $\\int_a^b f \\, d\\alpha$ reduces to:',
    options: [
      'The Riemann integral $\\int_a^b f(x) \\, dx
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $d\\alpha = dx$, so the Riemann-Stieltjes integral becomes the ordinary Riemann integral.',
  },
      'The Lebesgue integral of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $d\\alpha = dx$, so the Riemann-Stieltjes integral becomes the ordinary Riemann integral.',
  },
      'Zero, since $d\\alpha = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $d\\alpha = dx$, so the Riemann-Stieltjes integral becomes the ordinary Riemann integral.',
  },
      'The sum $\\sum f(x_i)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $d\\alpha = dx$, so the Riemann-Stieltjes integral becomes the ordinary Riemann integral.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $\\alpha(x) = x$, we have $d\\alpha = dx$, so the Riemann-Stieltjes integral becomes the ordinary Riemann integral.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Let $f$ be continuous on $[a,b]$ and $\\alpha$ have a jump discontinuity at $c \\in (a,b)$ with $\\alpha(c^+) - \\alpha(c^-) = h$. If $\\alpha$ is constant elsewhere, then $\\int_a^b f \\, d\\alpha$ equals:',
    options: [
      '$f(b) \\cdot h
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ has a single jump of size $h$ at $c$ and is constant elsewhere, the Riemann-Stieltjes integral picks out the value of $f$ at the jump point, giving $f(c) \\cdot h$.',
  },
      '$f(a) \\cdot h
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ has a single jump of size $h$ at $c$ and is constant elsewhere, the Riemann-Stieltjes integral picks out the value of $f$ at the jump point, giving $f(c) \\cdot h$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ has a single jump of size $h$ at $c$ and is constant elsewhere, the Riemann-Stieltjes integral picks out the value of $f$ at the jump point, giving $f(c) \\cdot h$.',
  },
      '$f(c) \\cdot h
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ has a single jump of size $h$ at $c$ and is constant elsewhere, the Riemann-Stieltjes integral picks out the value of $f$ at the jump point, giving $f(c) \\cdot h$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ has a single jump of size $h$ at $c$ and is constant elsewhere, the Riemann-Stieltjes integral picks out the value of $f$ at the jump point, giving $f(c) \\cdot h$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f \\in \\mathcal{R}(\\alpha)$ on $[a,b]$ (meaning $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$), which condition is necessary?',
    options: [
      '$f$ must be differentiable on $(a,b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ if and only if the upper and lower integrals (defined as inf of upper sums and sup of lower sums over all partitions) are equal.',
  },
      '$\\sup_P U(P, f, \\alpha) = \\inf_P L(P, f, \\alpha)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ if and only if the upper and lower integrals (defined as inf of upper sums and sup of lower sums over all partitions) are equal.',
  },
      '$f$ must be continuous on $[a,b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ if and only if the upper and lower integrals (defined as inf of upper sums and sup of lower sums over all partitions) are equal.',
  },
      '$\\alpha$ must be strictly increasing on $[a,b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ if and only if the upper and lower integrals (defined as inf of upper sums and sup of lower sums over all partitions) are equal.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The function $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$ if and only if the upper and lower integrals (defined as inf of upper sums and sup of lower sums over all partitions) are equal.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on $[a,b]$ and $\\alpha$ is monotonically increasing on $[a,b]$, then:',
    options: [
      '$f \\in \\mathcal{R}(\\alpha)$ on $[a,b]$',
      '$f \\in \\mathcal{R}(\\alpha)$ only if $\\alpha$ is continuous',
      '$f \\in \\mathcal{R}(\\alpha)$ only if $\\alpha$ is differentiable',
      '$f$ may or may not be in $\\mathcal{R}(\\alpha)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A fundamental theorem states that if $f$ is continuous and $\\alpha$ is monotonically increasing, then $f$ is Riemann-Stieltjes integrable with respect to $\\alpha$.',
  },
];
