import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is quadrature in Euler\'s terminology?',
    options: [
      'Squaring a number',
      'Finding the area under a curve',
      'Finding four solutions',
      'Drawing a square'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Quadrature refers to finding the area under a curve—what we now call integration. The term comes from the ancient problem of finding a square with equal area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is rectification of a curve?',
    options: [
      'Finding its arc length',
      'Making it straight',
      'Correcting errors in its equation',
      'Drawing it with a ruler',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Rectification means finding the arc length of a curve. The term suggests "making it into a rect(ilinear)" segment of equivalent length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The arc length of an ellipse leads to what type of integral?',
    options: [
      'A simple polynomial integral',
      'A divergent integral',
      'An elliptic integral',
      'A trigonometric integral',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The arc length of an ellipse cannot be expressed in elementary functions—it defines the elliptic integral, a new class of special functions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How can $\\pi$ be computed using curves?',
    options: [
      'As $4\\int_0^1 \\frac{1}{1+x^2} dx
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Both methods work: $\\pi$ equals the circumference of a circle with diameter 1, and also $4\\int_0^1 \\frac{1}{1+x^2} dx = 4\\arctan(1) = \\pi$.',
  },
      'As the circumference of a unit circle',
      'Neither A nor B',
      'Both A and B',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Both methods work: $\\pi$ equals the circumference of a circle with diameter 1, and also $4\\int_0^1 \\frac{1}{1+x^2} dx = 4\\arctan(1) = \\pi$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What famous series equals the area under $y = 1/(1+x)$ from 0 to 1?',
    options: [
      '$\\pi/4$',
      '$\\ln(2) = 1 - 1/2 + 1/3 - 1/4 + ...$',
      '$e - 1$',
      '$\\sqrt{2}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The area $\\int_0^1 \\frac{1}{1+x}dx = \\ln(2)$, which equals the alternating harmonic series $1 - 1/2 + 1/3 - 1/4 + ...$',
  },
];
