import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The absolute value $|x|$ of a rational number $x$ is defined as:',
    options: [
      '$x$ if $x > 0$, and $0$ otherwise',
      'The distance from $x$ to $1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The absolute value is defined piecewise: $|x| = x$ when $x \\geq 0$ and $|x| = -x$ when $x < 0$. This gives the "magnitude" of $x$.',
  },
      '$x$ if $x \\geq 0$, and $-x$ if $x < 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The absolute value is defined piecewise: $|x| = x$ when $x \\geq 0$ and $|x| = -x$ when $x < 0$. This gives the "magnitude" of $x$.',
  },
      '$\\sqrt{x^2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The absolute value is defined piecewise: $|x| = x$ when $x \\geq 0$ and $|x| = -x$ when $x < 0$. This gives the "magnitude" of $x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The absolute value is defined piecewise: $|x| = x$ when $x \\geq 0$ and $|x| = -x$ when $x < 0$. This gives the "magnitude" of $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is the triangle inequality for absolute values?',
    options: [
      '$|x + y| \\geq |x| + |y|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|x + y| \\leq |x| + |y|$. Equality holds when $x$ and $y$ have the same sign (or one is zero).',
  },
      '$|x + y| = |x| + |y|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|x + y| \\leq |x| + |y|$. Equality holds when $x$ and $y$ have the same sign (or one is zero).',
  },
      '$|xy| \\leq |x| + |y|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|x + y| \\leq |x| + |y|$. Equality holds when $x$ and $y$ have the same sign (or one is zero).',
  },
      '$|x + y| \\leq |x| + |y|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|x + y| \\leq |x| + |y|$. Equality holds when $x$ and $y$ have the same sign (or one is zero).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|x + y| \\leq |x| + |y|$. Equality holds when $x$ and $y$ have the same sign (or one is zero).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $x \\in \\mathbb{Q}$ and $n \\in \\mathbb{N}$, the expression $x^{-n}$ is defined as:',
    options: [
      '$(-x)^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Negative integer exponents are defined by $x^{-n} = \\frac{1}{x^n}$ for $x \\neq 0$. This extends the exponent laws to negative integers.',
  },
      '$-x^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Negative integer exponents are defined by $x^{-n} = \\frac{1}{x^n}$ for $x \\neq 0$. This extends the exponent laws to negative integers.',
  },
      '$\\frac{1}{x^n}$ (assuming $x \\neq 0$)',
      '$\\frac{x}{n}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Negative integer exponents are defined by $x^{-n} = \\frac{1}{x^n}$ for $x \\neq 0$. This extends the exponent laws to negative integers.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Negative integer exponents are defined by $x^{-n} = \\frac{1}{x^n}$ for $x \\neq 0$. This extends the exponent laws to negative integers.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Calculate $|(-3) \\cdot 4| + |(-2) + 7|$.',
    correctAnswer: 17,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$|(-3) \\cdot 4| = |-12| = 12$ and $|(-2) + 7| = |5| = 5$. So the sum is $12 + 5 = 17$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which property does $|xy| = |x| \\cdot |y|$ illustrate?',
    options: [
      'Triangle inequality',
      'Subadditivity',
      'Multiplicativity of absolute value',
      'Homogeneity',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The equation $|xy| = |x| \\cdot |y|$ shows that absolute value is multiplicative. This property is essential for many proofs in analysis.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For rational $x, y$ with $x \\neq 0$, which exponent law is $(x^n)^m = x^{nm}$?',
    options: [
      'Product of powers',
      'Power of a product',
      'Quotient of powers',
      'Power of a power',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the "power of a power" rule: raising $x^n$ to the power $m$ gives $x^{nm}$.',
  },
];
