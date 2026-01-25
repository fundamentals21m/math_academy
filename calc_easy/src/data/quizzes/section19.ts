import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To find the area between two curves, we:',
    options: [
      'Add their integrals',
      'Multiply their integrals',
      'Find where they intersect only',
      'Integrate the difference between the top and bottom functions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Area between curves = $\\int_a^b [f(x) - g(x)] \\, dx$ where $f(x) \\geq g(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For finding volumes of revolution, the disk method uses:',
    options: [
      'Rectangular cross-sections',
      'Circular cross-sections with $V = \\pi \\int r^2 \\, dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rotating a curve creates circular disks; integrating $\\pi r^2$ gives the volume.',
  },
      'No cross-sections',
      'Triangular cross-sections',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rotating a curve creates circular disks; integrating $\\pi r^2$ gives the volume.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The average value of a function $f(x)$ on $[a, b]$ is:',
    options: [
      '$f(a) + f(b)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x) \\, dx$ (total area divided by interval length).',
  },
      '$\\int_a^b f(x) \\, dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x) \\, dx$ (total area divided by interval length).',
  },
      '$\\frac{f(a) + f(b)}{2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x) \\, dx$ (total area divided by interval length).',
  },
      '$\\frac{1}{b-a}\\int_a^b f(x) \\, dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x) \\, dx$ (total area divided by interval length).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x) \\, dx$ (total area divided by interval length).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Integration can be used to find:',
    options: [
      'Only areas',
      'Only derivatives',
      'Areas, volumes, arc lengths, work, and many physical quantities',
      'Only slopes',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Integration has vast applications: areas, volumes, centers of mass, work, and much more.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When finding the area of a region, we must:',
    options: [
      'Always use the same limits of integration',
      'Identify where curves intersect to set up correct limits',
      'Ignore the bounds',
      'Only integrate positive functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Finding intersection points determines the limits of integration for the region.',
  },
];
