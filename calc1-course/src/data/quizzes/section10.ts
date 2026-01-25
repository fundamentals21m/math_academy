import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The upper integral $\\overline{\\int}_a^b f$ is defined as:',
    options: [
      'The maximum value of $f
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
      'The supremum of integrals of step functions $\\leq f
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
      'The infimum of integrals of step functions $\\geq f
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
      'The average of $f
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The upper integral is the infimum over all step functions that bound $f$ from above.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The lower integral $\\underline{\\int}_a^b f$ is defined as:',
    options: [
      'The minimum value of $f
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The lower integral is the supremum over all step functions that bound $f$ from below.',
  },
      'The infimum of integrals of step functions $\\geq f
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The lower integral is the supremum over all step functions that bound $f$ from below.',
  },
      'The limit of Riemann sums',
      'The supremum of integrals of step functions $\\leq f
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The lower integral is the supremum over all step functions that bound $f$ from below.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The lower integral is the supremum over all step functions that bound $f$ from below.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A bounded function $f$ is integrable on $[a, b]$ if and only if:',
    options: [
      'It is continuous',
      'It is monotonic',
      'It has finitely many discontinuities',
      'The upper and lower integrals are equal',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integrability means $\\underline{\\int} f = \\overline{\\int} f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any bounded function $f$:',
    options: [
      '$\\underline{\\int} f > \\overline{\\int} f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The lower integral is always $\\leq$ the upper integral.',
  },
      '$\\underline{\\int} f \\leq \\overline{\\int} f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The lower integral is always $\\leq$ the upper integral.',
  },
      'Cannot compare',
      '$\\underline{\\int} f = \\overline{\\int} f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The lower integral is always $\\leq$ the upper integral.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The lower integral is always $\\leq$ the upper integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $s \\leq f \\leq t$ where $s, t$ are step functions, then:',
    options: [
      '$\\int t \\leq \\int f \\leq \\int s
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The lower integral is bounded below by integrals of step functions below $f$, and similarly for upper.',
  },
      'No relationship exists',
      '$\\int s \\leq \\underline{\\int} f \\leq \\overline{\\int} f \\leq \\int t
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The lower integral is bounded below by integrals of step functions below $f$, and similarly for upper.',
  },
      '$\\int s = \\int t
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The lower integral is bounded below by integrals of step functions below $f$, and similarly for upper.',
  },
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
      'Not integrable (upper and lower integrals differ)',
      'Integrable with integral 1',
      'Integrable with integral 0',
      'Continuous',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The upper integral is 1, lower integral is 0, so it is not integrable.',
  },
];
