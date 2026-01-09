import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The general linear group $GL_n(\\mathbb{R})$ consists of all $n \\times n$ real matrices that are:',
    options: [
      'Symmetric',
      'Orthogonal',
      'Invertible (nonzero determinant)',
      'Have determinant 1'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$GL_n(\\mathbb{R})$ is the group of all invertible $n \\times n$ real matrices, i.e., matrices with nonzero determinant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The special linear group $SL_n(\\mathbb{R})$ is the set of all $n \\times n$ real matrices with:',
    options: [
      'Determinant $0$',
      'Determinant $1$',
      'Determinant $-1$',
      'Positive determinant'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$SL_n(\\mathbb{R}) = \\{A \\in GL_n(\\mathbb{R}) : \\det(A) = 1\\}$ is the special linear group.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A, B \\in GL_n(\\mathbb{R})$, what is $\\det(AB)$?',
    options: [
      '$\\det(A) + \\det(B)$',
      '$\\det(A) \\cdot \\det(B)$',
      '$\\det(A) - \\det(B)$',
      '$\\det(A) / \\det(B)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\det(B)$. This is why $SL_n$ is closed under multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is a subgroup of $GL_2(\\mathbb{R})$?',
    options: [
      'Matrices with trace $0$',
      'Upper triangular matrices with nonzero diagonal entries',
      'Matrices with determinant $2$',
      'Symmetric matrices'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Upper triangular matrices with nonzero diagonal entries form a subgroup (closed under multiplication and inverses). The others are not closed under the group operation.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many elements are in $GL_2(\\mathbb{Z}/2\\mathbb{Z})$, the group of invertible $2 \\times 2$ matrices over $\\mathbb{Z}/2\\mathbb{Z}$?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'hard',
    explanation: 'The first row can be any nonzero vector (3 choices). The second row can be any vector not in the span of the first (2 choices). Total: $3 \\times 2 = 6$.',
  },
];
