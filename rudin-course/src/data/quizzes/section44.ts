import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $\\mathbf{f}: [a,b] \\to \\mathbb{R}^k$ with components $f_1, \\ldots, f_k$, the integral $\\int_a^b \\mathbf{f} \\, d\\alpha$ is defined as:',
    options: [
      'The sum $\\sum_{j=1}^k \\int_a^b f_j \\, d\\alpha
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The integral of a vector-valued function is computed component-wise: $\\int_a^b \\mathbf{f} \\, d\\alpha = (\\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha)$.',
  },
      'The product $\\prod_{j=1}^k \\int_a^b f_j \\, d\\alpha
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of a vector-valued function is computed component-wise: $\\int_a^b \\mathbf{f} \\, d\\alpha = (\\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha)$.',
  },
      'The vector $(\\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of a vector-valued function is computed component-wise: $\\int_a^b \\mathbf{f} \\, d\\alpha = (\\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha)$.',
  },
      'The maximum of the component integrals',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of a vector-valued function is computed component-wise: $\\int_a^b \\mathbf{f} \\, d\\alpha = (\\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\mathbf{f} \\in \\mathscr{R}(\\alpha)$ on $[a, b]$ (vector-valued), then:',
    options: [
      '$\\|\\int_a^b \\mathbf{f} \\, d\\alpha\\| = \\int_a^b \\|\\mathbf{f}\\| \\, d\\alpha$',
      '$\\|\\int_a^b \\mathbf{f} \\, d\\alpha\\| \\leq \\int_a^b \\|\\mathbf{f}\\| \\, d\\alpha$ when $\\alpha$ is increasing',
      '$\\|\\int_a^b \\mathbf{f} \\, d\\alpha\\| \\geq \\int_a^b \\|\\mathbf{f}\\| \\, d\\alpha$',
      'No inequality holds in general'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 6.25: $\\|\\int_a^b \\mathbf{f} \\, d\\alpha\\| \\leq \\int_a^b \\|\\mathbf{f}\\| \\, d\\alpha$ when $\\alpha$ is monotonically increasing. This is the integral version of the triangle inequality.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The FTC for vector-valued functions states that if $\\mathbf{F}\' = \\mathbf{f}$ componentwise and $\\mathbf{f} \\in \\mathscr{R}$, then:',
    options: [
      '$\\int_a^b \\mathbf{f}(t) \\, dt = \\mathbf{F}(b) - \\mathbf{F}(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The FTC extends component-wise to vector-valued functions: $\\int_a^b \\mathbf{f}(t)\\,dt = \\mathbf{F}(b) - \\mathbf{F}(a)$, where $\\mathbf{F}\' = \\mathbf{f}$.',
  },
      '$\\int_a^b \\mathbf{f}(t) \\, dt = \\mathbf{F}(a) - \\mathbf{F}(b)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The FTC extends component-wise to vector-valued functions: $\\int_a^b \\mathbf{f}(t)\\,dt = \\mathbf{F}(b) - \\mathbf{F}(a)$, where $\\mathbf{F}\' = \\mathbf{f}$.',
  },
      '$\\int_a^b \\mathbf{F}(t) \\, dt = \\mathbf{f}(b) - \\mathbf{f}(a)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The FTC extends component-wise to vector-valued functions: $\\int_a^b \\mathbf{f}(t)\\,dt = \\mathbf{F}(b) - \\mathbf{F}(a)$, where $\\mathbf{F}\' = \\mathbf{f}$.',
  },
      'The FTC does not extend to vector functions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The FTC extends component-wise to vector-valued functions: $\\int_a^b \\mathbf{f}(t)\\,dt = \\mathbf{F}(b) - \\mathbf{F}(a)$, where $\\mathbf{F}\' = \\mathbf{f}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\mathbf{f}(t) = (\\cos t, \\sin t)$ for $t \\in [0, 2\\pi]$, then $\\int_0^{2\\pi} \\mathbf{f}(t) \\, dt = $',
    options: [
      '$(2\\pi, 2\\pi)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\int_0^{2\\pi} \\cos t \\, dt = [\\sin t]_0^{2\\pi} = 0$ and $\\int_0^{2\\pi} \\sin t \\, dt = [-\\cos t]_0^{2\\pi} = -1 + 1 = 0$. So the integral is $(0, 0)$.',
  },
      '$(2, 0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\int_0^{2\\pi} \\cos t \\, dt = [\\sin t]_0^{2\\pi} = 0$ and $\\int_0^{2\\pi} \\sin t \\, dt = [-\\cos t]_0^{2\\pi} = -1 + 1 = 0$. So the integral is $(0, 0)$.',
  },
      '$(0, 0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\int_0^{2\\pi} \\cos t \\, dt = [\\sin t]_0^{2\\pi} = 0$ and $\\int_0^{2\\pi} \\sin t \\, dt = [-\\cos t]_0^{2\\pi} = -1 + 1 = 0$. So the integral is $(0, 0)$.',
  },
      '$(1, 1)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\int_0^{2\\pi} \\cos t \\, dt = [\\sin t]_0^{2\\pi} = 0$ and $\\int_0^{2\\pi} \\sin t \\, dt = [-\\cos t]_0^{2\\pi} = -1 + 1 = 0$. So the integral is $(0, 0)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\int_0^{2\\pi} \\cos t \\, dt = [\\sin t]_0^{2\\pi} = 0$ and $\\int_0^{2\\pi} \\sin t \\, dt = [-\\cos t]_0^{2\\pi} = -1 + 1 = 0$. So the integral is $(0, 0)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a curve $\\gamma: [a,b] \\to \\mathbb{R}^k$, if $\\gamma\'$ is continuous, the arc length is given by:',
    options: [
      '$\\int_a^b \\gamma(t) \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The arc length of a smooth curve $\\gamma$ is $\\int_a^b \\|\\gamma\'(t)\\| \\, dt$. This measures the total "speed" integrated over time, giving the length of the path traced.',
  },
      '$\\|\\gamma(b) - \\gamma(a)\\|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The arc length of a smooth curve $\\gamma$ is $\\int_a^b \\|\\gamma\'(t)\\| \\, dt$. This measures the total "speed" integrated over time, giving the length of the path traced.',
  },
      '$\\int_a^b \\gamma\\'(t) \\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The arc length of a smooth curve $\\gamma$ is $\\int_a^b \\|\\gamma\'(t)\\| \\, dt$. This measures the total "speed" integrated over time, giving the length of the path traced.',
  },
      '$\\int_a^b \\|\\gamma\\'(t)\\| \\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The arc length of a smooth curve $\\gamma$ is $\\int_a^b \\|\\gamma\'(t)\\| \\, dt$. This measures the total "speed" integrated over time, giving the length of the path traced.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The arc length of a smooth curve $\\gamma$ is $\\int_a^b \\|\\gamma\'(t)\\| \\, dt$. This measures the total "speed" integrated over time, giving the length of the path traced.',
  },
];
