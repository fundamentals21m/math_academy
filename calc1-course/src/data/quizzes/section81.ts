import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cross product $\\mathbf{a} \\times \\mathbf{b}$ is defined in:',
    options: [
      '$\\mathbb{R}^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The cross product is specifically defined in 3D.',
  },
      'Any $\\mathbb{R}^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross product is specifically defined in 3D.',
  },
      '$\\mathbb{R}^3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross product is specifically defined in 3D.',
  },
      '$\\mathbb{R}^4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross product is specifically defined in 3D.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross product is specifically defined in 3D.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cross product $\\mathbf{a} \\times \\mathbf{b}$ produces:',
    options: [
      'A scalar',
      'A vector perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Cross product gives a vector orthogonal to both inputs.',
  },
      'A vector parallel to $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Cross product gives a vector orthogonal to both inputs.',
  },
      'Zero always',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Cross product gives a vector orthogonal to both inputs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The magnitude $\\|\\mathbf{a} \\times \\mathbf{b}\\|$ equals:',
    options: [
      '$\\|\\mathbf{a}\\| \\|\\mathbf{b}\\| \\cos\\theta$',
      '$\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|$',
      '$\\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$',
      '$\\|\\mathbf{a}\\| \\|\\mathbf{b}\\| \\sin\\theta$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\| \\|\\mathbf{b}\\| \\sin\\theta$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\mathbf{i} \\times \\mathbf{j} = ?$',
    options: [
      '$\\mathbf{j}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By the right-hand rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.',
  },
      '$\\mathbf{i}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the right-hand rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.',
  },
      '$\\mathbf{0}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the right-hand rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.',
  },
      '$\\mathbf{k}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the right-hand rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the right-hand rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The scalar triple product $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$ gives:',
    options: [
      'The volume of the parallelepiped spanned by $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Scalar triple product = signed volume of parallelepiped.',
  },
      'A vector',
      'Zero always',
      'The area of a parallelogram',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Scalar triple product = signed volume of parallelepiped.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$\\mathbf{a} \\times \\mathbf{a} = ?$',
    options: [
      '$\\mathbf{a}$',
      '$2\\mathbf{a}$',
      '$\\mathbf{0}$',
      '$\\|\\mathbf{a}\\|^2$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Cross product of parallel vectors is zero.',
  },
];
