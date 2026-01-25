import type { QuizQuestion } from './types';

export const section101Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A line integral is denoted by $\\int f \\cdot d\\alpha$ where:',
    options: [
      '$f$ is a scalar field and $\\alpha$ is a constant',
      '$f$ and $\\alpha$ are both scalar fields',
      '$f$ is a constant and $\\alpha$ is a vector field',
      '$f$ is a vector field and $\\alpha$ is a path',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A line integral $\\int f \\cdot d\\alpha$ involves a vector field $f$ defined on a curve described by a path $\\alpha$. The dot suggests an inner product of vectors.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A path $\\alpha: [a, b] \\to \\mathbb{R}^n$ is called smooth if:',
    options: [
      '$\\alpha$ is constant',
      '$\\alpha\\'$ exists and is continuous on $(a, b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A path is smooth if its derivative $\\alpha\'$ exists and is continuous on the open interval $(a, b)$. This ensures the curve has a continuously turning tangent line.',
  },
      '$\\alpha$ is continuous but not differentiable',
      '$\\alpha$ is a polynomial function',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A path is smooth if its derivative $\\alpha\'$ exists and is continuous on the open interval $(a, b)$. This ensures the curve has a continuously turning tangent line.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A piecewise smooth path has:',
    options: [
      'No tangent lines anywhere',
      'Discontinuities at every point',
      'A tangent line everywhere',
      'A tangent line at all but finitely many points'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A piecewise smooth path can be partitioned into finitely many subintervals on each of which it is smooth. The path has a tangent line at all but finitely many "corner" points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Line integrals are fundamental in physics for computing:',
    options: [
      'Mass only',
      'Temperature only',
      'Work, potential energy, heat flow, and circulation',
      'Electric charge only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Line integrals occur in many physical applications including work done by a force, potential energy, heat flow, change in entropy, and circulation of a fluid.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The difference between a curve and a path is that:',
    options: [
      'A curve is just the set of points; a path includes how the curve is traced',
      'Curves are in 2D, paths are in 3D',
      'Curves are smooth, paths are not',
      'There is no difference',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A curve is the graph (set of points) of a continuous function. A path is the function itself, which specifies how the curve is traced—direction, speed, and parametrization. Line integrals depend on the path, not just the curve.',
  },
];
