import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The midpoint of segment from u to v is:',
    options: [
      '$\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average of the two endpoints.',
  },
      '$\\mathbf{u} - \\mathbf{v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average of the two endpoints.',
  },
      '$\\mathbf{u} \\cdot \\mathbf{v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average of the two endpoints.',
  },
      '$\\mathbf{u} + \\mathbf{v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average of the two endpoints.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average of the two endpoints.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The centroid of a triangle with vertices u, v, w is:',
    options: [
      '$\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The centroid is the vector average of the three vertices.',
  },
      '$\\mathbf{u} + \\mathbf{v} + \\mathbf{w}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid is the vector average of the three vertices.',
  },
      '$\\mathbf{u} \\cdot \\mathbf{v} \\cdot \\mathbf{w}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid is the vector average of the three vertices.',
  },
      '$\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid is the vector average of the three vertices.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid is the vector average of the three vertices.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The diagonals of a parallelogram:',
    options: [
      'Are equal in length',
      'Are parallel',
      'Bisect each other',
      'Are perpendicular',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both diagonals pass through the midpoint ½(u + v), so they bisect each other.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The medians of a triangle are:',
    options: [
      'Angle bisectors',
      'Lines from vertices to midpoints of opposite sides',
      'Perpendiculars from vertices to opposite sides',
      'Lines connecting midpoints of sides',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A median connects a vertex to the midpoint of the opposite side.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The three medians of any triangle:',
    options: [
      'Are parallel',
      'Have equal length',
      'Are perpendicular',
      'Meet at the centroid',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'All three medians pass through ⅓(u + v + w), the centroid.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The centroid divides each median in the ratio:',
    options: [
      '2:1 (from vertex)',
      '3:1 (from vertex)',
      '1:1 (at the midpoint)',
      '1:2 (from vertex)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The centroid is located 2/3 of the way from each vertex to the opposite midpoint.',
  },
];
