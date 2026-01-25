import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What famous algebraic identity does Proposition II.4 prove?',
    options: [
      'a² - b² = (a+b)(a-b)',
      '(a - b)² = a² - 2ab + b²',
      '(a + b)² = a² + 2ab + b²',
      'a³ + b³ = (a+b)(a² - ab + b²)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'II.4 proves the square of a sum: when a line is cut into two parts, the square on the whole equals the squares on the parts plus twice the rectangle they contain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the geometric proof of II.4, the large square is divided into how many regions?',
    options: [
      'Three',
      'Four',
      'Two',
      'Six',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The square on (a+b) is divided into four regions: two smaller squares (a² and b²) and two equal rectangles (each of area ab).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which earlier proposition proves that the two rectangles in II.4 are equal?',
    options: [
      'I.34',
      'I.46',
      'I.47',
      'I.43',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Proposition I.43 proves that complements of parallelograms about the diagonal are equal, which shows the two rectangles ab are equal.',
  },
];
