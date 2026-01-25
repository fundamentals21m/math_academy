import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A scalar field is a function $f: \\mathbb{R}^n \\to$',
    options: [
      '$\\mathbb{R}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A scalar field assigns a real number to each point in $\\mathbb{R}^n$, so $f: \\mathbb{R}^n \\to \\mathbb{R}$.',
  },
      '$\\mathbb{R}^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A scalar field assigns a real number to each point in $\\mathbb{R}^n$, so $f: \\mathbb{R}^n \\to \\mathbb{R}$.',
  },
      '$\\mathbb{R}^m$ where $m > n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A scalar field assigns a real number to each point in $\\mathbb{R}^n$, so $f: \\mathbb{R}^n \\to \\mathbb{R}$.',
  },
      '$\\mathbb{C}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A scalar field assigns a real number to each point in $\\mathbb{R}^n$, so $f: \\mathbb{R}^n \\to \\mathbb{R}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A scalar field assigns a real number to each point in $\\mathbb{R}^n$, so $f: \\mathbb{R}^n \\to \\mathbb{R}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A vector field on $\\mathbb{R}^n$ is a function $F: \\mathbb{R}^n \\to$',
    options: [
      '$\\mathbb{R}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A vector field assigns a vector to each point. In general, $F: \\mathbb{R}^n \\to \\mathbb{R}^m$ for some $m$.',
  },
      '$\\mathbb{R}^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A vector field assigns a vector to each point. In general, $F: \\mathbb{R}^n \\to \\mathbb{R}^m$ for some $m$.',
  },
      'The set of all matrices',
      '$\\mathbb{R}^m$ (any dimension)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A vector field assigns a vector to each point. In general, $F: \\mathbb{R}^n \\to \\mathbb{R}^m$ for some $m$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The temperature distribution $T(x, y, z)$ in a room is an example of:',
    options: [
      'A vector field',
      'A tensor field',
      'A matrix field',
      'A scalar field',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Temperature assigns a single number (temperature value) to each point in space, making it a scalar field.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The velocity of a fluid at each point $(x, y, z)$ is an example of:',
    options: [
      'A scalar field',
      'A constant',
      'A vector field',
      'A differential equation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Velocity has magnitude and direction at each point, making it a vector field $\\mathbf{v}(x,y,z)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^3 \\to \\mathbb{R}$ and $\\mathbf{F}: \\mathbb{R}^3 \\to \\mathbb{R}^3$, then $f\\mathbf{F}$ is:',
    options: [
      'A scalar field',
      'Undefined',
      'A vector field from $\\mathbb{R}^3$ to $\\mathbb{R}^3
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplying a vector field by a scalar field gives a vector field: $(f\\mathbf{F})(\\mathbf{x}) = f(\\mathbf{x})\\mathbf{F}(\\mathbf{x})$.',
  },
      'A matrix',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiplying a vector field by a scalar field gives a vector field: $(f\\mathbf{F})(\\mathbf{x}) = f(\\mathbf{x})\\mathbf{F}(\\mathbf{x})$.',
  },
];
