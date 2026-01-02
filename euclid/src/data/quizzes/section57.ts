import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.8 proves that 4ab + (a-b)² equals:',
    options: [
      '(a+b)²',
      'a² + b²',
      '2(a² + b²)',
      '(a-b)²'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'II.8 proves that 4ab + (a-b)² = (a+b)², relating the square of a sum to the square of a difference.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'From II.8, we can derive that (a+b)² - (a-b)² equals:',
    options: [
      '2ab',
      '4ab',
      'a² + b²',
      '2(a² + b²)'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rearranging II.8 gives (a+b)² - (a-b)² = 4ab, showing the difference of these squares.',
  },
];
