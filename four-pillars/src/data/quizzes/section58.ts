import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The complex conjugate of $z = 3 + 4i$ is:',
    options: [
      '$3 + 4i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The conjugate of x + iy is x − iy, so the conjugate of 3 + 4i is 3 − 4i.',
  },
      '$3 - 4i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The conjugate of x + iy is x − iy, so the conjugate of 3 + 4i is 3 − 4i.',
  },
      '$-3 - 4i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The conjugate of x + iy is x − iy, so the conjugate of 3 + 4i is 3 − 4i.',
  },
      '$-3 + 4i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The conjugate of x + iy is x − iy, so the conjugate of 3 + 4i is 3 − 4i.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The conjugate of x + iy is x − iy, so the conjugate of 3 + 4i is 3 − 4i.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Geometrically, complex conjugation $z \\mapsto \\bar{z}$ is:',
    options: [
      'Reflection across the real axis',
      'Reflection across the imaginary axis',
      'Rotation by 90°',
      'Inversion in the unit circle',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Conjugation reflects points across the real axis: x + iy ↦ x − iy.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any complex number $z$, the product $z \\cdot \\bar{z}$ equals:',
    options: [
      '$z^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If z = x + iy, then z·z̄ = (x + iy)(x − iy) = x² + y² = |z|².',
  },
      '$\\text{Re}(z)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If z = x + iy, then z·z̄ = (x + iy)(x − iy) = x² + y² = |z|².',
  },
      '$2z
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If z = x + iy, then z·z̄ = (x + iy)(x − iy) = x² + y² = |z|².',
  },
      '$|z|^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If z = x + iy, then z·z̄ = (x + iy)(x − iy) = x² + y² = |z|².',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If z = x + iy, then z·z̄ = (x + iy)(x − iy) = x² + y² = |z|².',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The map $z \\mapsto -\\bar{z}$ sends the upper half plane to:',
    options: [
      'The left half plane',
      'Itself (the upper half plane)',
      'The lower half plane',
      'The unit disk',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If z = x + iy with y > 0, then −z̄ = −x + iy still has positive imaginary part.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A complex number $z$ is real if and only if:',
    options: [
      '$z = -\\bar{z}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'z = z̄ means x + iy = x − iy, so 2iy = 0, thus y = 0 and z is real.',
  },
      '$z^2 > 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'z = z̄ means x + iy = x − iy, so 2iy = 0, thus y = 0 and z is real.',
  },
      '$z = \\bar{z}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'z = z̄ means x + iy = x − iy, so 2iy = 0, thus y = 0 and z is real.',
  },
      '$|z| = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'z = z̄ means x + iy = x − iy, so 2iy = 0, thus y = 0 and z is real.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'z = z̄ means x + iy = x − iy, so 2iy = 0, thus y = 0 and z is real.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The formula for $1/z$ in terms of the conjugate is:',
    options: [
      '$-\\bar{z}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since z·z̄ = |z|², we have 1/z = z̄/|z|².',
  },
      '$\\bar{z}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since z·z̄ = |z|², we have 1/z = z̄/|z|².',
  },
      '$\\bar{z}/|z|^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since z·z̄ = |z|², we have 1/z = z̄/|z|².',
  },
      '$z/|z|^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since z·z̄ = |z|², we have 1/z = z̄/|z|².',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since z·z̄ = |z|², we have 1/z = z̄/|z|².',
  },
];
