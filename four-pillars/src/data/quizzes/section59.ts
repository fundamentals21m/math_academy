import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The reflection in the imaginary axis (vertical line $x = 0$) is given by:',
    options: [
      '$z \\mapsto -\\bar{z}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The reflection in x = 0 is z ↦ −z̄, which sends x + iy to −x + iy.',
  },
      '$z \\mapsto \\bar{z}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The reflection in x = 0 is z ↦ −z̄, which sends x + iy to −x + iy.',
  },
      '$z \\mapsto 1/z
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The reflection in x = 0 is z ↦ −z̄, which sends x + iy to −x + iy.',
  },
      '$z \\mapsto -z
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The reflection in x = 0 is z ↦ −z̄, which sends x + iy to −x + iy.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The reflection in x = 0 is z ↦ −z̄, which sends x + iy to −x + iy.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every Möbius transformation is a composition of translations, scalings, and:',
    options: [
      'Reflections only',
      'Rotations only',
      'Inversions and conjugations',
      'Projections'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The generators include z → z + l, z → kz, z → −z̄, and z → 1/z̄ (inversion-reflection).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The reflection in a semicircular non-Euclidean line with center $c$ and radius $r$ is:',
    options: [
      '$z \\mapsto c + r\\bar{z}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reflection formula for a semicircle with center c and radius r is z ↦ c + r²/(z̄ − c).',
  },
      '$z \\mapsto 2c - z
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The reflection formula for a semicircle with center c and radius r is z ↦ c + r²/(z̄ − c).',
  },
      '$z \\mapsto c + r^2/(\\bar{z} - c)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The reflection formula for a semicircle with center c and radius r is z ↦ c + r²/(z̄ − c).',
  },
      '$z \\mapsto r^2/z
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The reflection formula for a semicircle with center c and radius r is z ↦ c + r²/(z̄ − c).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The reflection formula for a semicircle with center c and radius r is z ↦ c + r²/(z̄ − c).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The composition of two reflections in non-Euclidean lines is:',
    options: [
      'The identity',
      'An orientation-preserving Möbius transformation',
      'Another reflection',
      'A parabolic transformation only',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Two reflections (each orientation-reversing) compose to give an orientation-preserving transformation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The map $z \\mapsto 1/\\bar{z}$ fixes every point on:',
    options: [
      'The real axis',
      'No points',
      'The imaginary axis',
      'The unit semicircle $|z| = 1, y > 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If |z| = 1, then z·z̄ = 1, so 1/z̄ = z. Points on the unit circle are fixed.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If |z| = 1, then z·z̄ = 1, so 1/z̄ = z. Points on the unit circle are fixed.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An orientation-reversing Möbius transformation can be written as:',
    options: [
      '$(az + b)/(cz + d)$ with $ad - bc < 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps involve conjugation: (az̄ + b)/(cz̄ + d) with ad − bc < 0.',
  },
      '$(a\\bar{z} + b)/(c\\bar{z} + d)$ with $ad - bc < 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps involve conjugation: (az̄ + b)/(cz̄ + d) with ad − bc < 0.',
  },
      '$(az + b)/(cz + d)$ with $ad - bc > 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps involve conjugation: (az̄ + b)/(cz̄ + d) with ad − bc < 0.',
  },
      'Any linear function',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps involve conjugation: (az̄ + b)/(cz̄ + d) with ad − bc < 0.',
  },
];
