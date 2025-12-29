import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The upper integral $\\overline{\\int}_a^b f$ is defined as:',
    options: [
      'The maximum value of $f$',
      'The infimum of integrals of step functions $\\geq f$',
      'The supremum of integrals of step functions $\\leq f$',
      'The average of $f$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The lower integral $\\underline{\\int}_a^b f$ is defined as:',
    options: [
      'The minimum value of $f$',
      'The infimum of integrals of step functions $\\geq f$',
      'The supremum of integrals of step functions $\\leq f$',
      'The limit of Riemann sums'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The lower integral is the supremum over all step functions that bound $f$ from below.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A bounded function $f$ is integrable on $[a, b]$ if and only if:',
    options: [
      'It is continuous',
      'The upper and lower integrals are equal',
      'It is monotonic',
      'It has finitely many discontinuities'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integrability means $\\underline{\\int} f = \\overline{\\int} f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any bounded function $f$:',
    options: [
      '$\\underline{\\int} f > \\overline{\\int} f$',
      '$\\underline{\\int} f \\leq \\overline{\\int} f$',
      '$\\underline{\\int} f = \\overline{\\int} f$',
      'Cannot compare'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The lower integral is always $\\leq$ the upper integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $s \\leq f \\leq t$ where $s, t$ are step functions, then:',
    options: [
      '$\\int s \\leq \\underline{\\int} f \\leq \\overline{\\int} f \\leq \\int t$',
      '$\\int t \\leq \\int f \\leq \\int s$',
      'No relationship exists',
      '$\\int s = \\int t$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The lower integral is bounded below by integrals of step functions below $f$, and similarly for upper.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Dirichlet function (1 on rationals, 0 on irrationals) is:',
    options: [
      'Integrable with integral 1',
      'Integrable with integral 0',
      'Not integrable (upper and lower integrals differ)',
      'Continuous'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The upper integral is 1, lower integral is 0, so it is not integrable.',
  },
];
