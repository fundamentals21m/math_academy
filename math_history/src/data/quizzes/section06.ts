import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What two tools were used in classical Greek geometric constructions?',
    options: [
      'Ruler and protractor',
      'Compass and protractor',
      'Ruler and compass',
      'Straightedge and compass',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Greeks used an unmarked straightedge (not a ruler with measurements) and a compass.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the three classical construction problems?',
    options: [
      'Doubling the cube',
      'Trisecting the angle',
      'Constructing a regular heptagon',
      'Squaring the circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The three classical problems are doubling the cube, trisecting the angle, and squaring the circle. A regular heptagon is a different (also impossible) construction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Doubling the cube requires constructing which length?',
    options: [
      '$\\sqrt[3]{2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To double a unit cube, you need a cube with volume 2, so the edge length must be $\\sqrt[3]{2}$.',
  },
      '$\\sqrt{2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To double a unit cube, you need a cube with volume 2, so the edge length must be $\\sqrt[3]{2}$.',
  },
      '$2\\sqrt{2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To double a unit cube, you need a cube with volume 2, so the edge length must be $\\sqrt[3]{2}$.',
  },
      '$\\pi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To double a unit cube, you need a cube with volume 2, so the edge length must be $\\sqrt[3]{2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To double a unit cube, you need a cube with volume 2, so the edge length must be $\\sqrt[3]{2}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is squaring the circle impossible with straightedge and compass?',
    options: [
      'Because $\\pi$ is transcendental (not algebraic)',
      'Because $\\pi$ is irrational',
      'Because circles cannot be measured',
      'Because it requires a ruler',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Constructible numbers must be algebraic (roots of polynomials with rational coefficients). Since $\\pi$ is transcendental, $\\sqrt{\\pi}$ cannot be constructed.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To bisect a line segment AB, the construction involves:',
    options: [
      'Drawing a single circle',
      'Drawing two circles with centers at A and B',
      'Using a protractor',
      'Measuring the length with a ruler',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The bisection construction draws circles centered at A and B (passing through each other), then connects their intersection points.',
  },
];
