import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a non-negative measurable function $f$, the Lebesgue integral is defined as:',
    options: [
      '$\\int f = f(0)$',
      '$\\int f = \\sup\\{\\int s : s \\text{ simple}, 0 \\leq s \\leq f\\}$',
      '$\\int f = \\lim_{n \\to \\infty} f(n)$',
      '$\\int f = m(\\{f > 0\\})$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The integral is the supremum of integrals of simple functions below $f$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Monotone Convergence Theorem states: if $0 \\leq f_1 \\leq f_2 \\leq \\cdots$ and $f_n \\to f$ pointwise, then:',
    options: [
      '$\\int f_n \\to 0$',
      '$\\int f_n \\to \\int f$',
      '$\\int f_n$ is bounded',
      '$f$ is simple'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MCT: for increasing sequences, the integral of the limit equals the limit of integrals.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Fatou\'s lemma states: if $f_n \\geq 0$ are measurable, then:',
    options: [
      '$\\int \\liminf f_n \\geq \\liminf \\int f_n$',
      '$\\int \\liminf f_n \\leq \\liminf \\int f_n$',
      '$\\int \\limsup f_n = \\limsup \\int f_n$',
      '$\\int f_n = 0$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Fatou: the integral of the liminf is at most the liminf of the integrals.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The integral $\\int f$ can equal $+\\infty$ when:',
    options: [
      'Never',
      '$f$ is non-negative and "large enough"',
      '$f$ is continuous',
      '$f$ is simple'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Non-negative measurable functions can have infinite integral (e.g., $f = 1$ on $\\mathbf{R}$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f = 0$ almost everywhere, then $\\int f = $',
    options: [
      'Undefined',
      '$\\infty$',
      '$0$',
      '$1$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Functions equal to zero a.e. have integral zero.',
  },
];
