import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A finite set $S$ is a basis for $V$ if and only if:',
    options: [
      '$S$ spans $V
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A finite basis must satisfy two conditions: (1) the elements are linearly independent, and (2) the elements span the entire space $V$.',
  },
      '$S$ is independent',
      '$S$ contains the zero element',
      '$S$ is independent and spans $V
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A finite basis must satisfy two conditions: (1) the elements are linearly independent, and (2) the elements span the entire space $V$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A finite basis must satisfy two conditions: (1) the elements are linearly independent, and (2) the elements span the entire space $V$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the dimension of the space of all polynomials of degree $\\leq 4$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'A basis is $\\{1, t, t^2, t^3, t^4\\}$, which has 5 elements. Therefore $\\dim V = 5$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $V$ has dimension $n$ and $S$ is an independent set with $n$ elements, what is $S$?',
    options: [
      'A basis for $V
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.7(b) states that any set of $n$ independent elements in an $n$-dimensional space is automatically a basis.',
  },
      'A proper subset of some basis',
      'Larger than any basis',
      'It depends on the specific elements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.7(b) states that any set of $n$ independent elements in an $n$-dimensional space is automatically a basis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The components of an element $x$ relative to an ordered basis $(e_1, \\ldots, e_n)$ are:',
    options: [
      'Uniquely determined by $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $x = \\sum c_i e_i$, the coefficients $(c_1, \\ldots, c_n)$ are uniquely determined because the basis elements are independent. Different representations would imply dependence.',
  },
      'Always positive',
      'The same for all bases',
      'Not well-defined',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $x = \\sum c_i e_i$, the coefficients $(c_1, \\ldots, c_n)$ are uniquely determined because the basis elements are independent. Different representations would imply dependence.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The solution space of the differential equation $y\'\' - 2y\' - 3y = 0$ has what dimension?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'The solution space is spanned by $\\{e^{-x}, e^{3x}\\}$, which are linearly independent. Therefore the dimension is 2.',
  },
];
