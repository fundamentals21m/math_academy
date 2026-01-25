import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A rotation through angle θ can be represented by a 2×2 matrix with entries:',
    options: [
      '$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$',
      '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$',
      '$\\begin{pmatrix} \\theta & 0 \\\\ 0 & \\theta \\end{pmatrix}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The rotation matrix uses cosine and sine in a specific arrangement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A rotation of the plane can be represented by multiplying by the complex number:',
    options: [
      '$e^\\theta$',
      '$\\theta$',
      '$\\cos\\theta + i\\sin\\theta$',
      '$1 + i$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiplying by cos θ + i sin θ rotates every point by angle θ.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The property $i^2 = -1$ implies that multiplication by i is a rotation of:',
    options: [
      '45°',
      '360°',
      '90°',
      '180°',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplying by i = cos(π/2) + i sin(π/2) rotates by π/2 = 90°.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Matrix multiplication is useful for rotations because:',
    options: [
      'Composing rotations corresponds to multiplying matrices',
      'Matrices require fewer axioms',
      'Matrices are easier to draw',
      'Matrices are always invertible'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The matrix of a composed rotation is the product of the individual rotation matrices.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The angle addition formulas follow from:',
    options: [
      'The Pythagorean theorem only',
      'The Cauchy-Schwarz inequality',
      'The triangle inequality',
      'Multiplying rotation matrices or complex numbers',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Composing two rotations and equating entries gives the addition formulas.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Complex numbers z with |z| = 1 form:',
    options: [
      'A parabola',
      'A line',
      'A square',
      'A unit circle',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unit complex numbers satisfy x² + y² = 1, the equation of the unit circle.',
  },
];
