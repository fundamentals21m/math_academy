import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a transcendental curve?',
    options: [
      'A curve that cannot be defined by any polynomial equation',
      'A curve defined by a polynomial equation',
      'A curve in three dimensions',
      'A curve that crosses the x-axis',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Transcendental curves are defined by non-polynomial (transcendental) functions like trigonometric, exponential, or logarithmic functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is a transcendental curve?',
    options: [
      'The hyperbola $xy = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sine curve $y = \\sin(x)$ is transcendental because sine is not a polynomial function. The others are algebraic curves.',
  },
      'The sine curve $y = \\sin(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sine curve $y = \\sin(x)$ is transcendental because sine is not a polynomial function. The others are algebraic curves.',
  },
      'The parabola $y = x^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sine curve $y = \\sin(x)$ is transcendental because sine is not a polynomial function. The others are algebraic curves.',
  },
      'The cubic $y = x^3
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sine curve $y = \\sin(x)$ is transcendental because sine is not a polynomial function. The others are algebraic curves.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sine curve $y = \\sin(x)$ is transcendental because sine is not a polynomial function. The others are algebraic curves.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The catenary $y = a\\cosh(x/a)$ represents what physical situation?',
    options: [
      'The path of a projectile',
      'The orbit of a planet',
      'The shape of a hanging chain under gravity',
      'The shape of a lens',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The catenary is the shape assumed by a perfectly flexible, inextensible chain hanging under its own weight.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the cycloid?',
    options: [
      'A type of ellipse',
      'A spiral curve',
      'A parabola with shifted vertex',
      'The path of a point on a rolling circle',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cycloid is the curve traced by a point on the circumference of a circle as it rolls along a straight line.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why can\'t transcendental curves be fully described by polynomial equations?',
    options: [
      'They have too many points',
      'They involve non-algebraic functions like $e^x$, $\\sin(x)$, or $\\ln(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendental curves involve functions that cannot be expressed as finite algebraic operations, such as exponential, trigonometric, and logarithmic functions.',
  },
      'They were discovered too recently',
      'They exist only in higher dimensions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Transcendental curves involve functions that cannot be expressed as finite algebraic operations, such as exponential, trigonometric, and logarithmic functions.',
  },
];
