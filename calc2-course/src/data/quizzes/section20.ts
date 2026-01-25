import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the determinant of the matrix $\\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix}$?',
    options: ['$2$', '$7$', '$22$', '$-2$'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For a $2 \\times 2$ matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the determinant is $ad - bc = 3 \\cdot 4 - 5 \\cdot 2 = 12 - 10 = 2$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The absolute value of the determinant of a $3 \\times 3$ matrix with row vectors $A_1, A_2, A_3$ represents:',
    options: [
      'The sum of the vector lengths',
      'The area of a triangle',
      'The volume of the parallelepiped formed by the vectors',
      'The perimeter of the region enclosed',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The scalar triple product $A_1 \\times A_2 \\cdot A_3$, which equals the determinant, gives the signed volume of the parallelepiped determined by the three vectors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the rows of a $3 \\times 3$ matrix are linearly dependent, what is the determinant?',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When rows are linearly dependent, the parallelepiped degenerates to a plane figure of zero volume, so the determinant is zero.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When rows are linearly dependent, the parallelepiped degenerates to a plane figure of zero volume, so the determinant is zero.',
  },
      '$-1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When rows are linearly dependent, the parallelepiped degenerates to a plane figure of zero volume, so the determinant is zero.',
  },
      'Cannot be determined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When rows are linearly dependent, the parallelepiped degenerates to a plane figure of zero volume, so the determinant is zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The determinant of a $3 \\times 3$ matrix is defined in terms of:',
    options: [
      '$3 \\times 3$ determinants',
      '$2 \\times 2$ determinants',
      '$4 \\times 4$ determinants',
      'Only the diagonal elements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $3 \\times 3$ determinant is defined recursively using cofactor expansion along a row or column, expressing it as a sum of products with $2 \\times 2$ determinants.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A negative determinant for a linear transformation indicates:',
    options: [
      'The transformation is not invertible',
      'The transformation scales by a factor less than 1',
      'The rows are dependent',
      'An orientation reversal',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The sign of the determinant indicates whether the transformation preserves or reverses orientation. A negative determinant means the transformation reverses orientation (like a reflection).',
  },
];
