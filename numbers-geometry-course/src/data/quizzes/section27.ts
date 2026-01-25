import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 27: The Non-Euclidean Plane
 */
export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who introduced the upper half-plane model of non-Euclidean geometry?',
    options: [
      'Euclid',
      'Klein',
      'Poincaré',
      'Dedekind',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Henri Poincaré introduced this model of non-Euclidean geometry in 1882. It uses the upper half-plane with reflection in circles as the fundamental transformation.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In what year did Poincaré introduce his non-Euclidean model?',
    correctAnswer: 1882,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Poincaré introduced his upper half-plane model of non-Euclidean geometry in 1882.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Poincaré model, what are the "lines"?',
    options: [
      'Only horizontal lines',
      'Vertical half-lines and semicircles centered on the x-axis',
      'Only straight Euclidean lines',
      'All circles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The "lines" in the Poincaré model are vertical Euclidean half-lines (x = constant, y > 0) and Euclidean semicircles with centers on the x-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The reflection of P in a circle with center Z and radius r satisfies:',
    options: [
      '$ZP + ZP\\' = r
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Reflection in a circle is defined so that the product ZP · ZP\' = r². This is called "inversion in the circle."',
  },
      '$ZP = ZP\\' = r
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Reflection in a circle is defined so that the product ZP · ZP\' = r². This is called "inversion in the circle."',
  },
      '$ZP - ZP\\' = r
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Reflection in a circle is defined so that the product ZP · ZP\' = r². This is called "inversion in the circle."',
  },
      '$ZP \\cdot ZP\\' = r^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Reflection in a circle is defined so that the product ZP · ZP\' = r². This is called "inversion in the circle."',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Reflection in a circle is defined so that the product ZP · ZP\' = r². This is called "inversion in the circle."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which Euclidean axiom fails in the Poincaré model?',
    options: [
      'Two points determine a unique line',
      'A circle can be drawn with any center and radius',
      'All right angles are equal',
      'The parallel axiom',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The parallel axiom fails: through a point not on a "line" L, there are multiple "lines" that do not meet L. All other Euclidean axioms hold in the Poincaré model.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the Poincaré model, angles between "lines" are:',
    options: [
      'Ordinary Euclidean angles (between tangents)',
      'Always 90°',
      'Undefined',
      'Always acute',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A pleasant property of the Poincaré model is that non-Euclidean "angles" are ordinary Euclidean angles between the tangent lines at the point of intersection.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is the x-axis infinitely far from every point in the non-Euclidean plane?',
    options: [
      'Non-Euclidean distances compress as y → 0',
      'The x-axis is not part of the plane',
      'It is a definition',
      'The x-axis is a circle',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'A "translation" by reflection in concentric semicircles shows that points (0, 1), (0, 1/4), (0, 1/16), ... are equally spaced in non-Euclidean distance. It takes infinitely many such steps to reach y = 0.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is a "limit rotation" in the Poincaré model?',
    options: [
      'A rotation about a point in the half-plane',
      'A rotation about a point on the x-axis (at infinity)',
      'A translation',
      'A reflection',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'When two "lines" of reflection meet on the x-axis (which is at infinity), the composite is called a limit rotation. The center of rotation is infinitely far away in non-Euclidean distance.',
  },
];
