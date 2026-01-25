import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT an elementary row operation?',
    options: [
      'Interchange two rows',
      'Add a multiple of one row to another',
      'Multiply two rows together',
      'Multiply a row by a nonzero scalar',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The three elementary row operations are: (I) interchange rows, (II) multiply a row by a nonzero scalar, (III) add a multiple of one row to another. Multiplying rows is not an elementary operation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A matrix is in row echelon form if:',
    options: [
      'All entries are zero',
      'Zero rows are at the bottom and pivots move right as you go down',
      'All entries are positive',
      'It is a square matrix',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Row echelon form requires: (a) all zero rows at bottom, (b) each leading entry (pivot) is to the right of the pivot in the row above.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What effect does adding a multiple of one row to another have on the solution set of $AX = B$?',
    options: [
      'It changes the solutions',
      'It adds new solutions',
      'It leaves the solution set unchanged',
      'It eliminates all solutions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Elementary row operations do not change the solution set. They correspond to applying invertible transformations to both sides of the equation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The rank of a matrix equals:',
    options: [
      'The number of pivot rows in its row echelon form',
      'The number of columns',
      'The number of rows',
      'The total number of nonzero entries'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The rank equals the number of nonzero rows (pivot rows) in the row echelon form. This counts the number of linearly independent rows.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Gaussian elimination, the augmented matrix $[A | B]$ is used to:',
    options: [
      'Find the determinant only',
      'Compute the transpose',
      'Find eigenvalues',
      'Solve $AX = B$ and find the null space',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The augmented matrix $[A | B]$ combines the coefficient matrix and constants. Reducing it to echelon form allows solving the system and identifying free variables.',
  },
];
