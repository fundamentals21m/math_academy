import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.5 relates to which algebraic identity?',
    options: [
      '(a+x)(a-x) + x² = a²',
      '(a+b)² = a² + 2ab + b²',
      '(a-b)² = a² - 2ab + b²',
      'a³ - b³ = (a-b)(a² + ab + b²)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'II.5 proves that when a line is cut into equal (a) and unequal (a+x, a-x) segments, the rectangle on unequal parts plus the square on their difference equals the square on the half.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What technique is II.5 the geometric basis for?',
    options: [
      'Long division',
      'Cross multiplication',
      'Completing the square',
      'Factoring trinomials',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'II.5 provides the geometric foundation for completing the square, a technique essential for solving quadratic equations.',
  },
];
