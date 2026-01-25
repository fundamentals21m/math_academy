import type { QuizQuestion } from './types';

export const section104Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The work done by a force field $f$ along a path $\\alpha$ is defined as:',
    options: [
      '$W = \\|f\\| \\cdot \\text{length of path}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Work done by a force field $f$ moving a particle along a path $\\alpha$ is the line integral $W = \\int f \\cdot d\\alpha$.',
  },
      '$W = f(\\alpha(b)) - f(\\alpha(a))
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Work done by a force field $f$ moving a particle along a path $\\alpha$ is the line integral $W = \\int f \\cdot d\\alpha$.',
  },
      '$W = \\int \\|f\\| \\, ds
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Work done by a force field $f$ moving a particle along a path $\\alpha$ is the line integral $W = \\int f \\cdot d\\alpha$.',
  },
      '$W = \\int f \\cdot d\\alpha
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Work done by a force field $f$ moving a particle along a path $\\alpha$ is the line integral $W = \\int f \\cdot d\\alpha$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Work done by a force field $f$ moving a particle along a path $\\alpha$ is the line integral $W = \\int f \\cdot d\\alpha$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a constant force $f = \\mathbf{c}$, the work done moving from $\\mathbf{a}$ to $\\mathbf{b}$ along any path is:',
    options: [
      '$\\mathbf{c} \\cdot \\mathbf{a}$',
      '$\\mathbf{c} \\cdot (\\mathbf{b} - \\mathbf{a})$',
      '$\\mathbf{c} \\cdot \\mathbf{b}$',
      '$\\|\\mathbf{c}\\| \\cdot \\|\\mathbf{b} - \\mathbf{a}\\|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a constant force, $W = \\mathbf{c} \\cdot (\\mathbf{b} - \\mathbf{a})$, the dot product of the force and the displacement vector. This is independent of the path.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A force field is called conservative if:',
    options: [
      'The field is always zero',
      'The work is always positive',
      'The work depends only on the endpoints, not the path',
      'The field has no curl'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A conservative force field is one for which the work done depends only on the initial and final positions, not on the path taken between them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The work-energy principle states that the work done by $f$ equals:',
    options: [
      'The change in potential energy',
      'Zero',
      'The total energy',
      'The change in kinetic energy'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The work-energy principle: $\\int f \\cdot dr = \\frac{1}{2}mv^2(b) - \\frac{1}{2}mv^2(a)$. Work equals the change in kinetic energy.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'From Newton\'s second law $f = mr\'\'$, the work integral $\\int f \\cdot r\' \\, dt$ equals:',
    options: [
      '$\\frac{1}{2}m[v^2(b) - v^2(a)]$',
      '$m \\cdot r\'(b)$',
      '$m[r(b) - r(a)]$',
      '$\\frac{1}{2}m v(b)$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Using $f = mr\'\'$ and $v = r\'$: $f \\cdot r\' = mr\'\' \\cdot r\' = m v\' \\cdot v = \\frac{1}{2}m \\frac{d}{dt}(v \\cdot v) = \\frac{1}{2}m \\frac{d}{dt}(v^2)$. Integrating gives the change in kinetic energy.',
  },
];
