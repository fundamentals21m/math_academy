import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Euler\'s identity, often called the most beautiful equation?',
    options: [
      '$E = mc^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.',
  },
      '$a^2 + b^2 = c^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.',
  },
      '$e^{i\\pi} + 1 = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.',
  },
      '$F = ma
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a connected planar graph, Euler\'s formula states:',
    options: [
      '$V + E + F = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euler\'s polyhedron formula: Vertices minus Edges plus Faces equals 2.',
  },
      '$V \\times E = F
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler\'s polyhedron formula: Vertices minus Edges plus Faces equals 2.',
  },
      '$V - E + F = 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler\'s polyhedron formula: Vertices minus Edges plus Faces equals 2.',
  },
      '$V = E + F
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler\'s polyhedron formula: Vertices minus Edges plus Faces equals 2.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler\'s polyhedron formula: Vertices minus Edges plus Faces equals 2.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Approximately how many pages of mathematics did Euler publish?',
    options: [
      '5,000',
      '50,000',
      '25,000',
      '100,000',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler was incredibly prolific, publishing about 50,000 pages of mathematics in his lifetime.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Despite losing his sight, Euler:',
    options: [
      'Stopped doing mathematics',
      'Focused solely on teaching',
      'Only wrote about philosophy',
      'Continued to produce mathematics at the same rate'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Euler continued his prodigious mathematical output even after becoming completely blind.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The number $e \\approx 2.718...$ is named after Euler. It is the base of:',
    options: [
      'Natural logarithms',
      'Common logarithms',
      'Binary logarithms',
      'Discrete logarithms'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The number $e$ is the base of natural logarithms and appears throughout calculus.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is the value of $e^{i\\pi}$?',
    correctAnswer: -1,
    numericRange: { min: -2, max: 0, precision: 0 },
    difficulty: 'medium',
    explanation: 'From Euler\'s formula, $e^{i\\pi} = \\cos(\\pi) + i\\sin(\\pi) = -1$.',
  },
];
