import type { QuizQuestion } from './types';

export const section91Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The dimension of a vector space is:',
    options: [
      'The number of vectors in the space',
      'The number of vectors in any basis',
      'The largest coordinate',
      'Always infinite'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Dimension = number of vectors in a basis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Any two bases of a finite-dimensional space have:',
    options: [
      'Different numbers of vectors',
      'The same number of vectors',
      'At least one common vector',
      'Orthogonal vectors'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All bases have the same cardinality (the dimension).',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the dimension of $\\mathbb{R}^5$?',
    correctAnswer: 5,
    numericRange: { min: 4, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^n$ has dimension $n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In an $n$-dimensional space, any set of $n+1$ vectors is:',
    options: [
      'Linearly independent',
      'Linearly dependent',
      'A basis',
      'Orthogonal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'More than $n$ vectors in $n$-dimensional space must be dependent.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A linearly independent set of $n$ vectors in $\\mathbb{R}^n$ is:',
    options: [
      'Not a basis',
      'A basis',
      'Dependent',
      'Empty'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$n$ independent vectors in $n$-dim space form a basis.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A spanning set can be reduced to a basis by:',
    options: [
      'Adding more vectors',
      'Removing dependent vectors',
      'Scaling vectors',
      'Orthogonalizing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Remove redundant (dependent) vectors to get a basis.',
  },
];
