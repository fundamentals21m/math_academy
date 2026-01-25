import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the first four triangular numbers?',
    options: [
      '$1, 2, 3, 4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Triangular numbers are: $T_1=1$, $T_2=1+2=3$, $T_3=1+2+3=6$, $T_4=1+2+3+4=10$.',
  },
      '$1, 4, 9, 16
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Triangular numbers are: $T_1=1$, $T_2=1+2=3$, $T_3=1+2+3=6$, $T_4=1+2+3+4=10$.',
  },
      '$1, 3, 6, 10
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Triangular numbers are: $T_1=1$, $T_2=1+2=3$, $T_3=1+2+3=6$, $T_4=1+2+3+4=10$.',
  },
      '$2, 4, 6, 8
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Triangular numbers are: $T_1=1$, $T_2=1+2=3$, $T_3=1+2+3=6$, $T_4=1+2+3+4=10$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Triangular numbers are: $T_1=1$, $T_2=1+2=3$, $T_3=1+2+3=6$, $T_4=1+2+3+4=10$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the 5th triangular number $T_5$?',
    correctAnswer: 15,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$T_5 = 1 + 2 + 3 + 4 + 5 = 15$. Using the formula: $T_5 = \\frac{5 \\cdot 6}{2} = 15$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The sum $1 + 3 + 5 + 7 + 9$ equals:',
    options: [
      '$25
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sum of the first $n$ odd numbers equals $n^2$. Here we have 5 odd numbers, so the sum is $5^2 = 25$.',
  },
      '$16
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of the first $n$ odd numbers equals $n^2$. Here we have 5 odd numbers, so the sum is $5^2 = 25$.',
  },
      '$20
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of the first $n$ odd numbers equals $n^2$. Here we have 5 odd numbers, so the sum is $5^2 = 25$.',
  },
      '$36
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of the first $n$ odd numbers equals $n^2$. Here we have 5 odd numbers, so the sum is $5^2 = 25$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of the first $n$ odd numbers equals $n^2$. Here we have 5 odd numbers, so the sum is $5^2 = 25$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to the Pythagoreans, two lengths are commensurable if:',
    options: [
      'They are equal',
      'One is longer than the other',
      'They form a right angle',
      'Their ratio is a rational number',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Two lengths are commensurable if they have a common measure, which is equivalent to their ratio being rational (expressible as a fraction).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $T_3 + T_4 = n^2$, what is $n$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: '$T_3 = 6$ and $T_4 = 10$, so $T_3 + T_4 = 16 = 4^2$. Therefore $n = 4$.',
  },
];
