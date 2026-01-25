import type { QuizQuestion } from './types';

export const section105Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The arc-length function $s(t)$ for a path $\\alpha$ on $[a, t]$ is:',
    options: [
      '$s(t) = \\int_a^t \\alpha(u) \\, du$',
      '$s(t) = \\int_a^t \\|\\alpha\'(u)\\| \\, du$',
      '$s(t) = \\|\\alpha(t) - \\alpha(a)\\|$',
      '$s(t) = t - a$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The arc-length function is $s(t) = \\int_a^t \\|\\alpha\'(u)\\| \\, du$, which gives the length of the curve from $\\alpha(a)$ to $\\alpha(t)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of arc length satisfies $s\'(t) = $:',
    options: [
      '$\\alpha(t)$',
      '$\\alpha\'(t)$',
      '$\\|\\alpha\'(t)\\|$',
      '$1$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the fundamental theorem of calculus, $s\'(t) = \\|\\alpha\'(t)\\|$, which is the speed along the curve.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The line integral with respect to arc length $\\int_C \\varphi \\, ds$ is defined as:',
    options: [
      '$\\int_a^b \\varphi[\\alpha(t)] \\, dt$',
      '$\\int_a^b s(t) \\, dt$',
      '$\\int_a^b \\varphi[\\alpha(t)] \\alpha\'(t) \\, dt$',
      '$\\int_a^b \\varphi[\\alpha(t)] s\'(t) \\, dt$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The line integral with respect to arc length is $\\int_C \\varphi \\, ds = \\int_a^b \\varphi[\\alpha(t)] s\'(t) \\, dt = \\int_a^b \\varphi[\\alpha(t)] \\|\\alpha\'(t)\\| \\, dt$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The flow integral of a velocity field $f$ along a curve $C$ is:',
    options: [
      '$\\int_C \\|f\\| \\, ds
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The flow integral is $\\int_C f \\cdot T \\, ds$, where $T$ is the unit tangent vector. This measures the tangential component of velocity integrated along the curve.',
  },
      '$\\int_C f \\cdot T \\, ds$ where $T$ is the unit tangent',
      '$\\int_C f \\cdot N \\, ds$ where $N$ is the normal',
      '$\\int_C f \\times T \\, ds
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The flow integral is $\\int_C f \\cdot T \\, ds$, where $T$ is the unit tangent vector. This measures the tangential component of velocity integrated along the curve.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The flow integral is $\\int_C f \\cdot T \\, ds$, where $T$ is the unit tangent vector. This measures the tangential component of velocity integrated along the curve.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a wire with density $\\mu(x, y, z)$ along a curve $C$, the total mass is:',
    options: [
      '$\\int_C \\mu(x, y, z) \\, ds
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The total mass of a wire with variable density $\\mu$ is $M = \\int_C \\mu(x, y, z) \\, ds$, the integral of density with respect to arc length.',
  },
      '$\\int_C \\mu(x, y, z) \\, dt
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The total mass of a wire with variable density $\\mu$ is $M = \\int_C \\mu(x, y, z) \\, ds$, the integral of density with respect to arc length.',
  },
      '$\\mu \\cdot \\text{length}(C)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The total mass of a wire with variable density $\\mu$ is $M = \\int_C \\mu(x, y, z) \\, ds$, the integral of density with respect to arc length.',
  },
      '$\\int_C \\frac{1}{\\mu} \\, ds
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The total mass of a wire with variable density $\\mu$ is $M = \\int_C \\mu(x, y, z) \\, ds$, the integral of density with respect to arc length.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The total mass of a wire with variable density $\\mu$ is $M = \\int_C \\mu(x, y, z) \\, ds$, the integral of density with respect to arc length.',
  },
];
