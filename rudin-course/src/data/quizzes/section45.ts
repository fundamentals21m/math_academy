import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A curve $\\gamma: [a, b] \\to \\mathbb{R}^k$ is called rectifiable if:',
    options: [
      'The supremum of lengths of inscribed polygons is finite',
      '$\\gamma$ is differentiable',
      '$\\gamma$ is continuous',
      '$\\gamma$ has bounded variation in each component',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A curve is rectifiable if $\\Lambda(\\gamma) = \\sup_P \\sum_{i=1}^n \\|\\gamma(t_i) - \\gamma(t_{i-1})\\| < \\infty$, where the supremum is over all partitions. This is the total arc length.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\gamma\' \\in \\mathscr{R}$ on $[a, b]$ (i.e., $\\gamma\'$ exists and is Riemann integrable), then the arc length equals:',
    options: [
      '$\\|\\gamma(b) - \\gamma(a)\\|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 6.27: If $\\gamma\'$ is continuous (or more generally, in $\\mathscr{R}$), the arc length is $\\Lambda(\\gamma) = \\int_a^b \\|\\gamma\'(t)\\| \\, dt$.',
  },
      '$\\int_a^b \\gamma\\'(t) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 6.27: If $\\gamma\'$ is continuous (or more generally, in $\\mathscr{R}$), the arc length is $\\Lambda(\\gamma) = \\int_a^b \\|\\gamma\'(t)\\| \\, dt$.',
  },
      '$\\sup_{t \\in [a,b]} \\|\\gamma\\'(t)\\|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 6.27: If $\\gamma\'$ is continuous (or more generally, in $\\mathscr{R}$), the arc length is $\\Lambda(\\gamma) = \\int_a^b \\|\\gamma\'(t)\\| \\, dt$.',
  },
      '$\\int_a^b \\|\\gamma\\'(t)\\| \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 6.27: If $\\gamma\'$ is continuous (or more generally, in $\\mathscr{R}$), the arc length is $\\Lambda(\\gamma) = \\int_a^b \\|\\gamma\'(t)\\| \\, dt$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 6.27: If $\\gamma\'$ is continuous (or more generally, in $\\mathscr{R}$), the arc length is $\\Lambda(\\gamma) = \\int_a^b \\|\\gamma\'(t)\\| \\, dt$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The curve $\\gamma(t) = (t, t^2)$ for $t \\in [0, 1]$ has arc length:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'We have $\\gamma\'(t) = (1, 2t)$, so $\\|\\gamma\'(t)\\| = \\sqrt{1 + 4t^2}$. The arc length is $\\int_0^1 \\sqrt{1 + 4t^2} \\, dt$.',
  },
      '$\\sqrt{2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $\\gamma\'(t) = (1, 2t)$, so $\\|\\gamma\'(t)\\| = \\sqrt{1 + 4t^2}$. The arc length is $\\int_0^1 \\sqrt{1 + 4t^2} \\, dt$.',
  },
      '$\\int_0^1 \\sqrt{1 + 4t^2} \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $\\gamma\'(t) = (1, 2t)$, so $\\|\\gamma\'(t)\\| = \\sqrt{1 + 4t^2}$. The arc length is $\\int_0^1 \\sqrt{1 + 4t^2} \\, dt$.',
  },
      '$\\int_0^1 (1 + 2t) \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $\\gamma\'(t) = (1, 2t)$, so $\\|\\gamma\'(t)\\| = \\sqrt{1 + 4t^2}$. The arc length is $\\int_0^1 \\sqrt{1 + 4t^2} \\, dt$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $\\gamma\'(t) = (1, 2t)$, so $\\|\\gamma\'(t)\\| = \\sqrt{1 + 4t^2}$. The arc length is $\\int_0^1 \\sqrt{1 + 4t^2} \\, dt$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A continuous curve that is NOT rectifiable is:',
    options: [
      'The graph of a Lipschitz function',
      'A space-filling curve (like the Peano curve)',
      'Any curve with a corner',
      'The unit circle',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Space-filling curves like the Peano or Hilbert curves are continuous but have infinite length. Any inscribed polygon can be refined to get arbitrarily large total length. Lipschitz curves and curves with corners are rectifiable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\gamma$ is a rectifiable curve and $\\phi: [c, d] \\to [a, b]$ is a continuous strictly increasing function, then $\\gamma \\circ \\phi$:',
    options: [
      'May not be rectifiable',
      'Has arc length multiplied by $\\sup |\\phi\\'|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Reparametrization preserves arc length. If $\\phi$ is a valid change of parameter, then $\\Lambda(\\gamma \\circ \\phi) = \\Lambda(\\gamma)$. Arc length is a geometric property of the curve, independent of parametrization.',
  },
      'Is not a valid reparametrization',
      'Has the same arc length as $\\gamma
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reparametrization preserves arc length. If $\\phi$ is a valid change of parameter, then $\\Lambda(\\gamma \\circ \\phi) = \\Lambda(\\gamma)$. Arc length is a geometric property of the curve, independent of parametrization.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reparametrization preserves arc length. If $\\phi$ is a valid change of parameter, then $\\Lambda(\\gamma \\circ \\phi) = \\Lambda(\\gamma)$. Arc length is a geometric property of the curve, independent of parametrization.',
  },
];
