import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A plane in $\\mathbb{R}^3$ can be described by:',
    options: [
      'A point and a direction vector',
      'A point and a normal vector',
      'A single equation $x = c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A plane is determined by a point and a normal (perpendicular) vector.',
  },
      'Two points only',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A plane is determined by a point and a normal (perpendicular) vector.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The equation $ax + by + cz = d$ represents:',
    options: [
      'A line',
      'A plane',
      'A point',
      'A sphere',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linear equation in 3 variables describes a plane.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The normal vector to the plane $2x + 3y - z = 5$ is:',
    options: [
      '$(2, 3, 5)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Normal vector = $(a, b, c)$ from $ax + by + cz = d$.',
  },
      '$(5, 0, 0)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Normal vector = $(a, b, c)$ from $ax + by + cz = d$.',
  },
      '$(1, 1, 1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Normal vector = $(a, b, c)$ from $ax + by + cz = d$.',
  },
      '$(2, 3, -1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Normal vector = $(a, b, c)$ from $ax + by + cz = d$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Normal vector = $(a, b, c)$ from $ax + by + cz = d$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two planes are parallel if:',
    options: [
      'Their normal vectors are parallel',
      'They intersect in a line',
      'They pass through the origin',
      'Their equations have the same constant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parallel planes have parallel (proportional) normal vectors.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The distance from point $\\mathbf{P}$ to plane $ax + by + cz = d$ is:',
    options: [
      '$|ax_0 + by_0 + cz_0 - d|
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Distance = $\\frac{|\\mathbf{n} \\cdot \\mathbf{P} - d|}{\\|\\mathbf{n}\\|}$.',
  },
      '$d
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Distance = $\\frac{|\\mathbf{n} \\cdot \\mathbf{P} - d|}{\\|\\mathbf{n}\\|}$.',
  },
      '$\\frac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Distance = $\\frac{|\\mathbf{n} \\cdot \\mathbf{P} - d|}{\\|\\mathbf{n}\\|}$.',
  },
      '$\\sqrt{a^2 + b^2 + c^2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Distance = $\\frac{|\\mathbf{n} \\cdot \\mathbf{P} - d|}{\\|\\mathbf{n}\\|}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Distance = $\\frac{|\\mathbf{n} \\cdot \\mathbf{P} - d|}{\\|\\mathbf{n}\\|}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A plane through origin has equation:',
    options: [
      '$ax + by + cz = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Through origin: $d = 0$.',
  },
      '$x = y = z
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Through origin: $d = 0$.',
  },
      '$a + b + c = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Through origin: $d = 0$.',
  },
      '$ax + by + cz = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Through origin: $d = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Through origin: $d = 0$.',
  },
];
