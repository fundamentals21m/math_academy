import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The sum rule for derivatives states $(f + g)\' = ?$',
    options: [
      '$f\\' + g\\'
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Sum rule: the derivative of a sum is the sum of derivatives.',
  },
      '$f\\' \\cdot g\\'
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sum rule: the derivative of a sum is the sum of derivatives.',
  },
      '$(fg)\\'
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sum rule: the derivative of a sum is the sum of derivatives.',
  },
      '$f\\' - g\\'
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sum rule: the derivative of a sum is the sum of derivatives.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sum rule: the derivative of a sum is the sum of derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The product rule states $(fg)\' = ?$',
    options: [
      '$f\\'g\\'
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
  },
      '$f\\'g - fg\\'
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
  },
      '$f\\'g + fg\\'
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
  },
      '$f\\'/g\\'
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The quotient rule states $(f/g)\' = ?$',
    options: [
      '$f\\'/g\\'
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Quotient rule: $(f/g)\' = \\frac{f\'g - fg\'}{g^2}$.',
  },
      '$\\frac{f\\'g + fg\\'}{g^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Quotient rule: $(f/g)\' = \\frac{f\'g - fg\'}{g^2}$.',
  },
      '$\\frac{f\\'g - fg\\'}{g^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Quotient rule: $(f/g)\' = \\frac{f\'g - fg\'}{g^2}$.',
  },
      '$\\frac{f\\' - g\\'}{g}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Quotient rule: $(f/g)\' = \\frac{f\'g - fg\'}{g^2}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Quotient rule: $(f/g)\' = \\frac{f\'g - fg\'}{g^2}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $f(x) = 3x^2 + 2x$, what is $f\'(1)$?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 6x + 2$, so $f\'(1) = 8$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $f(x) = x \\cdot e^x$, then $f\'(x) = e^x + xe^x$. What is $f\'(0)$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(0) = e^0 + 0 \\cdot e^0 = 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f(x) = cf(x)$ where $c$ is a constant, then $(cf)\' = ?$',
    options: [
      '$f\\'
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant multiple rule: $(cf)\' = cf\'$.',
  },
      '$c\\'f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant multiple rule: $(cf)\' = cf\'$.',
  },
      '$c + f\\'
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant multiple rule: $(cf)\' = cf\'$.',
  },
      '$cf\\'
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant multiple rule: $(cf)\' = cf\'$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant multiple rule: $(cf)\' = cf\'$.',
  },
];
