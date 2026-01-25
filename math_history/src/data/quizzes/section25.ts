import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 's25-e01',
    type: 'multiple-choice',
    question: 'Who independently discovered analytic geometry around the same time?',
    difficulty: 'easy',
    options: [
      'Newton and Leibniz',
      'Euler and Gauss',
      'Fermat and Descartes',
      'Cardano and Tartaglia',
    ],
    correctIndex: 2,
    explanation:
      'Analytic geometry was independently discovered by Fermat (1629) and Descartes (1637). Both began with the same classical problem and both discovered that second-degree equations give conic sections.',
  },
  {
    id: 's25-e02',
    type: 'multiple-choice',
    question: 'What coordinate system is named after Descartes?',
    difficulty: 'easy',
    options: [
      'Polar coordinates',
      'Cylindrical coordinates',
      'Spherical coordinates',
      'Cartesian coordinates',
    ],
    correctIndex: 3,
    explanation:
      'The Cartesian coordinate system, using perpendicular x and y axes, is named after René Descartes, whose Latin name was Cartesius.',
  },
  {
    id: 's25-m01',
    type: 'multiple-choice',
    question:
      'What type of curve does every second-degree equation in x and y represent?',
    difficulty: 'medium',
    options: [
      'A cubic curve',
      'A straight line',
      'A conic section (or degenerate case)',
      'A transcendental curve',
    ],
    correctIndex: 2,
    explanation:
      'Both Fermat and Descartes discovered that every quadratic equation $ax^2 + bxy + cy^2 + dx + ey + f = 0$ represents a conic section (ellipse, parabola, or hyperbola) or a degenerate case like two lines.',
  },
  {
    id: 's25-m02',
    type: 'multiple-choice',
    question:
      'Who used coordinates called "longitude" and "latitude" to represent functions before Descartes?',
    difficulty: 'medium',
    options: [
      'Nicole Oresme',
      'Apollonius',
      'Archimedes',
      'Euclid',
    ],
    correctIndex: 0,
    explanation:
      'Nicole Oresme (1323-1382) used coordinates called "longitude" and "latitude" to represent functions like velocity vs. time. He set up the coordinate system before determining the curve—a key step beyond the Greeks.',
  },
  {
    id: 's25-h01',
    type: 'multiple-choice',
    question:
      'To reduce a general quadratic equation to standard conic form, which transformations are needed?',
    difficulty: 'hard',
    options: [
      'Only translation (shifting the origin)',
      'Only rotation of axes',
      'Translation then rotation',
      'Rotation (to eliminate xy term) then translation',
    ],
    correctIndex: 3,
    explanation:
      'First, a rotation is used to eliminate the $xy$ term (making $b\' = 0$). Then a translation shifts the origin to eliminate linear terms, yielding the standard form.',
  },
  {
    id: 's25-h02',
    type: 'multiple-choice',
    question:
      'Descartes famously claimed that something "cannot be discovered by human minds." What was he wrong about?',
    difficulty: 'hard',
    options: [
      'The solution of cubic equations',
      'The arc length of curves',
      'The volume of a sphere',
      'The existence of complex numbers',
    ],
    correctIndex: 1,
    explanation:
      'Descartes claimed "the ratios between straight and curved lines are not known, and I believe cannot be discovered." Just 20 years later, Neil and van Heuraet found the arc length of the semicubical parabola $y^2 = x^3$.',
  },
];
