import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To find the area between two curves, we:',
    options: [
      'Add their integrals',
      'Multiply their integrals',
      'Integrate the difference between the top and bottom functions',
      'Find where they intersect only'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Area between curves = $\\int_a^b [f(x) - g(x)] \\, dx$ where $f(x) \\geq g(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For finding volumes of revolution, the disk method uses:',
    options: [
      'Rectangular cross-sections',
      'No cross-sections',
      'Triangular cross-sections',
      'Circular cross-sections with $V = \\pi \\int r^2 \\, dx$'
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
      '$\\frac{1}{b-a}\\int_a^b f(x) \\, dx$',
      '$f(a) + f(b)$',
      '$\\int_a^b f(x) \\, dx$',
      '$\\frac{f(a) + f(b)}{2}$'
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
      'Areas, volumes, arc lengths, work, and many physical quantities',
      'Only derivatives',
      'Only slopes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integration has vast applications: areas, volumes, centers of mass, work, and much more.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When finding the area of a region, we must:',
    options: [
      'Always use the same limits of integration',
      'Ignore the bounds',
      'Identify where curves intersect to set up correct limits',
      'Only integrate positive functions'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Finding intersection points determines the limits of integration for the region.',
  },
];
