import type { QuizQuestion } from './types';

export const section117Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A bounded function $f$ on a rectangle $Q$ is integrable if:',
    options: [
      '$f$ is continuous',
      '$f$ is differentiable',
      '$f$ is a polynomial',
      'There exists a unique number $I$ with $\\iint_Q s \\leq I \\leq \\iint_Q t$ for all step functions $s \\leq f \\leq t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A bounded function is integrable if there is exactly one number $I$ satisfying $\\iint_Q s \\leq I \\leq \\iint_Q t$ for all step functions $s \\leq f \\leq t$. This $I$ is the double integral.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A bounded function is integrable if there is exactly one number $I$ satisfying $\\iint_Q s \\leq I \\leq \\iint_Q t$ for all step functions $s \\leq f \\leq t$. This $I$ is the double integral.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The lower integral $\\underline{I}(f)$ is defined as:',
    options: [
      'The infimum of all double integrals of step functions above $f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The lower integral is $\\underline{I}(f) = \\sup\\{\\iint_Q s : s \\text{ is a step function with } s \\leq f\\}$, the least upper bound of integrals of step functions below $f$.',
  },
      'The supremum of all double integrals of step functions below $f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The lower integral is $\\underline{I}(f) = \\sup\\{\\iint_Q s : s \\text{ is a step function with } s \\leq f\\}$, the least upper bound of integrals of step functions below $f$.',
  },
      'The average of the upper and lower bounds',
      'Zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The lower integral is $\\underline{I}(f) = \\sup\\{\\iint_Q s : s \\text{ is a step function with } s \\leq f\\}$, the least upper bound of integrals of step functions below $f$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The upper integral $\\overline{I}(f)$ is defined as:',
    options: [
      'The supremum of integrals of step functions below $f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The upper integral is $\\overline{I}(f) = \\inf\\{\\iint_Q t : t \\text{ is a step function with } t \\geq f\\}$, the greatest lower bound of integrals of step functions above $f$.',
  },
      '$+\\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The upper integral is $\\overline{I}(f) = \\inf\\{\\iint_Q t : t \\text{ is a step function with } t \\geq f\\}$, the greatest lower bound of integrals of step functions above $f$.',
  },
      'The infimum of integrals of step functions above $f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The upper integral is $\\overline{I}(f) = \\inf\\{\\iint_Q t : t \\text{ is a step function with } t \\geq f\\}$, the greatest lower bound of integrals of step functions above $f$.',
  },
      'The maximum value of $f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The upper integral is $\\overline{I}(f) = \\inf\\{\\iint_Q t : t \\text{ is a step function with } t \\geq f\\}$, the greatest lower bound of integrals of step functions above $f$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The upper integral is $\\overline{I}(f) = \\inf\\{\\iint_Q t : t \\text{ is a step function with } t \\geq f\\}$, the greatest lower bound of integrals of step functions above $f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A bounded function $f$ is integrable on $Q$ if and only if:',
    options: [
      '$\\underline{I}(f) < \\overline{I}(f)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A function is integrable iff its lower and upper integrals are equal: $\\underline{I}(f) = \\overline{I}(f)$. When equal, this common value is the double integral.',
  },
      '$\\underline{I}(f) = \\overline{I}(f)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A function is integrable iff its lower and upper integrals are equal: $\\underline{I}(f) = \\overline{I}(f)$. When equal, this common value is the double integral.',
  },
      '$f$ is continuous',
      '$\\overline{I}(f) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A function is integrable iff its lower and upper integrals are equal: $\\underline{I}(f) = \\overline{I}(f)$. When equal, this common value is the double integral.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A function is integrable iff its lower and upper integrals are equal: $\\underline{I}(f) = \\overline{I}(f)$. When equal, this common value is the double integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'This definition of the double integral is analogous to:',
    options: [
      'The Darboux definition in 1D using upper and lower sums',
      'The Riemann sum definition in 1D',
      'The Lebesgue integral',
      'The Newton-Leibniz formula',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The definition using upper and lower integrals (via step functions) parallels the Darboux approach to the one-dimensional Riemann integral. Integrability means the upper and lower integrals coincide.',
  },
];
