import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a function?',
    options: [
      'A rule that assigns exactly one output to each input',
      'A random set of numbers',
      'Any equation with variables',
      'A relationship between two unrelated things'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function is a rule that assigns exactly one output to each input from its domain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the function $f(x) = 2x + 3$, what is the output when $x = 4$?',
    options: ['$7$', '$9$', '$11$', '$14$'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f(4) = 2(4) + 3 = 8 + 3 = 11$',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the domain of a function?',
    options: [
      'The set of all possible outputs',
      'The set of all possible inputs',
      'The graph of the function',
      'The slope of the function'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The domain is the set of all possible inputs for which the function is defined.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $f(x) = x^2$, what is $f(5)$?',
    correctAnswer: 25,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f(5) = 5^2 = 25$',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a valid function?',
    options: [
      '$f(x) = x^2$',
      '$f(x) = \\sqrt{x}$ for $x \\geq 0$',
      'A rule where $x = 2$ gives outputs 3 and 5',
      '$f(x) = 2x - 1$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A function must assign exactly one output to each input. If $x=2$ gives two different outputs, it is not a function.',
  },
];
