import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Apostol\'s approach, $\\sin x$ and $\\cos x$ are defined using:',
    options: [
      'Right triangles',
      'Unit circle geometry',
      'Infinite series',
      'Integration (area functions)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Apostol defines trigonometric functions analytically using integrals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which identity holds for all $x$?',
    options: [
      '$\\sin^2 x + \\cos^2 x = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$.',
  },
      '$\\sin^2 x + \\cos^2 x = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$.',
  },
      '$\\sin x \\cdot \\cos x = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$.',
  },
      '$\\sin x + \\cos x = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\sin(\\pi/2)$?',
    correctAnswer: 1,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sin(\\pi/2) = 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $\\cos(0)$?',
    correctAnswer: 1,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\cos(0) = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $\\sin x$ is:',
    options: [
      'Even: $\\sin(-x) = \\sin x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sine is an odd function: $\\sin(-x) = -\\sin x$.',
  },
      'Neither even nor odd',
      'Odd: $\\sin(-x) = -\\sin x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Sine is an odd function: $\\sin(-x) = -\\sin x$.',
  },
      'Both even and odd',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Sine is an odd function: $\\sin(-x) = -\\sin x$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The period of $\\sin x$ is:',
    options: [
      '$\\pi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$ for all $x$; the period is $2\\pi$.',
  },
      '$\\pi/2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$ for all $x$; the period is $2\\pi$.',
  },
      '$2\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$ for all $x$; the period is $2\\pi$.',
  },
      '$4\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$ for all $x$; the period is $2\\pi$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$ for all $x$; the period is $2\\pi$.',
  },
];
