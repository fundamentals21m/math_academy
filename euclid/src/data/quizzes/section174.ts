import type { QuizQuestion } from './types';

export const section174Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.29 is the counterpart to VI.28, dealing with parallelograms that:',
    options: [
      'Are deficient by a similar parallelogram',
      'Are inscribed in circles',
      'Exceed (go beyond) the given line by a similar parallelogram',
      'Have equal diagonals'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VI.29 applies a parallelogram to a line such that it exceeds (extends beyond) the line, with the excess being similar to a given parallelogram.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Unlike VI.28, the "exceeding" case in VI.29:',
    options: [
      'Always has a unique solution without area constraints',
      'Has no solution',
      'Only works for squares',
      'Requires the given figure to be at least a certain size',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The exceeding case (VI.29) always has a solution for any given area, unlike the deficient case (VI.28) which requires the area to be bounded by VI.27.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Together, VI.28 (deficient) and VI.29 (exceeding) are equivalent to finding:',
    options: [
      'Cube roots geometrically',
      'Parallel lines',
      'Circle centers',
      'The two roots of a quadratic equation',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'VI.28 and VI.29 together provide geometric solutions to quadratic equations of the form x(a-x)=b (deficient) and x(a+x)=b (exceeding), yielding the two types of quadratic solutions.',
  },
];
