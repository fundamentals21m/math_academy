import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A definite integral $\\int_a^b f(x) \\, dx$ represents:',
    options: [
      'The derivative at points $a$ and $b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A definite integral calculates the (signed) area between the curve and the x-axis.',
  },
      'The slope of the secant line',
      'The area under the curve between $x = a$ and $x = b
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A definite integral calculates the (signed) area between the curve and the x-axis.',
  },
      'The maximum value of the function',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A definite integral calculates the (signed) area between the curve and the x-axis.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $\\int_0^2 x \\, dx$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\int_0^2 x \\, dx = \\frac{x^2}{2}\\Big|_0^2 = \\frac{4}{2} - 0 = 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a function is negative on an interval, its definite integral on that interval is:',
    options: [
      'Always positive',
      'Zero',
      'Undefined',
      'Negative (representing area below the x-axis)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The integral gives signed area—negative for regions below the x-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Calculus connects:',
    options: [
      'Differentiation and integration',
      'Algebra and geometry',
      'Trigonometry and calculus',
      'Limits and infinity',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem shows that differentiation and integration are inverse operations.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $\\int_1^3 2x \\, dx$?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\int_1^3 2x \\, dx = x^2\\Big|_1^3 = 9 - 1 = 8$.',
  },
];
