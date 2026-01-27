import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a constant in mathematics?',
    options: [
      'A value that changes depending on the equation',
      'The slope of a line',
      'Any number greater than 1',
      'A value that remains the same throughout a problem'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A constant is a fixed value that does not change.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a variable?',
    options: [
      'A quantity that can take on different values',
      'A fixed number like $\\pi$',
      'The answer to an equation',
      'A type of function'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A variable is a quantity that can take on different values, usually represented by letters like $x$ or $y$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the expression $y = 3x + 5$, which are constants?',
    options: [
      '$x$ and $y$',
      '$3$ and $5$',
      'Only $5$',
      'None of them'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The numbers $3$ and $5$ are constants because they do not change. $x$ and $y$ are variables.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does Thompson say to "conquer the terror of differential notation"?',
    options: [
      'Because calculus is impossible to learn',
      'Because mathematicians like to confuse students',
      'Because the symbols look intimidating but represent simple ideas',
      'Because the notation is poorly designed'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Thompson emphasizes that the notation of calculus appears more difficult than the underlying concepts, which are actually simple.',
  },
  {
    id: 5,
    type: 'text',
    question: 'The Greek letter $\\pi$ represents approximately what value (to two decimal places)?',
    correctAnswer: '3.14',
    difficulty: 'easy',
    explanation: '$\\pi \\approx 3.14159...$, commonly approximated as $3.14$.',
  },
];
