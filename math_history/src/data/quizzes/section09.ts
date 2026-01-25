import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many regular convex polyhedra exist?',
    options: [
      '3',
      '5',
      '4',
      '6',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'There are exactly 5 regular convex polyhedra (Platonic solids): tetrahedron, cube, octahedron, dodecahedron, and icosahedron.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which Greek mathematician is famous for calculating the area of a circle and volume of a sphere?',
    options: [
      'Euclid',
      'Pythagoras',
      'Archimedes',
      'Apollonius',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Archimedes (c. 287-212 BCE) proved formulas for the area of a circle and volume of a sphere.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The method of exhaustion proves results about curved figures by:',
    options: [
      'Using calculus',
      'Measuring with a ruler',
      'Using coordinate geometry',
      'Approximating with polygons and showing the answer cannot be larger or smaller',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The method of exhaustion uses inscribed and circumscribed polygons to prove that the area/volume cannot exceed or fall short of the claimed value.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Archimedes proved that the volume of a sphere is what fraction of its circumscribing cylinder?',
    options: [
      '$\\frac{1}{2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Archimedes proved that a sphere\'s volume is exactly $\\frac{2}{3}$ of the cylinder that just contains it. He was so proud of this that he asked for it to be inscribed on his tomb.',
  },
      '$\\frac{3}{4}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Archimedes proved that a sphere\'s volume is exactly $\\frac{2}{3}$ of the cylinder that just contains it. He was so proud of this that he asked for it to be inscribed on his tomb.',
  },
      '$\\frac{2}{3}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Archimedes proved that a sphere\'s volume is exactly $\\frac{2}{3}$ of the cylinder that just contains it. He was so proud of this that he asked for it to be inscribed on his tomb.',
  },
      '$\\frac{4}{5}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Archimedes proved that a sphere\'s volume is exactly $\\frac{2}{3}$ of the cylinder that just contains it. He was so proud of this that he asked for it to be inscribed on his tomb.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Archimedes proved that a sphere\'s volume is exactly $\\frac{2}{3}$ of the cylinder that just contains it. He was so proud of this that he asked for it to be inscribed on his tomb.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many faces does a dodecahedron have?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 30, precision: 0 },
    difficulty: 'easy',
    explanation: 'A dodecahedron has 12 pentagonal faces. The name comes from the Greek "dodeca" meaning 12.',
  },
];
