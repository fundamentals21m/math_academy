import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a system of $N$ particles, the total linear momentum is conserved when:',
    options: [
      'The net external force is zero',
      'The internal forces are zero',
      'All particles have equal mass',
      'The system is at rest'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By Newton\'s third law, internal forces cancel in pairs. The total momentum $\\mathbf{P} = \\sum m_i \\mathbf{v}_i$ satisfies $\\dot{\\mathbf{P}} = \\mathbf{F}_{ext}$, so $\\mathbf{P}$ is conserved when $\\mathbf{F}_{ext} = \\mathbf{0}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The center of mass position $\\mathbf{R}$ of a system of particles is defined as:',
    options: [
      '$\\mathbf{R} = \\frac{1}{M}\\sum_i m_i \\mathbf{r}_i$ where $M = \\sum_i m_i$',
      '$\\mathbf{R} = \\sum_i \\mathbf{r}_i$',
      '$\\mathbf{R} = \\frac{1}{N}\\sum_i \\mathbf{r}_i$',
      '$\\mathbf{R} = \\sum_i m_i \\mathbf{r}_i$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The center of mass is the mass-weighted average position: $\\mathbf{R} = \\frac{\\sum_i m_i \\mathbf{r}_i}{\\sum_i m_i}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The total angular momentum of a system about point $O$ can be decomposed as:',
    options: [
      '$\\mathbf{L}_O = \\mathbf{R} \\times M\\dot{\\mathbf{R}} + \\mathbf{L}_{cm}$',
      '$\\mathbf{L}_O = M\\mathbf{R} \\times \\dot{\\mathbf{R}}$',
      '$\\mathbf{L}_O = \\sum_i m_i \\mathbf{v}_i$',
      '$\\mathbf{L}_O = \\mathbf{L}_{cm}$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The angular momentum decomposes into the angular momentum of the center of mass about $O$ plus the angular momentum of the system about its center of mass: $\\mathbf{L}_O = \\mathbf{R} \\times M\\dot{\\mathbf{R}} + \\mathbf{L}_{cm}$.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the theorem stating that the total kinetic energy equals the kinetic energy of the center of mass plus the kinetic energy relative to the center of mass?',
    correctAnswer: 'Koenig',
    difficulty: 'hard',
    explanation: 'Koenig\'s theorem states that $T = \\frac{1}{2}M|\\dot{\\mathbf{R}}|^2 + T_{rel}$, where $T_{rel}$ is the kinetic energy of motion relative to the center of mass.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Two particles of masses $m_1 = 2$ kg and $m_2 = 3$ kg are at positions $x_1 = 0$ m and $x_2 = 5$ m on a line. Where is the center of mass (in meters)?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 5, precision: 1 },
    difficulty: 'easy',
    explanation: 'The center of mass is at $x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{2(0) + 3(5)}{2 + 3} = \\frac{15}{5} = 3$ m.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For an isolated system (no external forces or torques), which quantities are conserved?',
    options: [
      'Total linear momentum, total angular momentum, and total energy',
      'Only total linear momentum',
      'Only total energy',
      'Total linear momentum and energy, but not angular momentum'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In an isolated system, all three fundamental quantities are conserved: linear momentum (no external force), angular momentum (no external torque), and energy (no external work).',
  },
];
