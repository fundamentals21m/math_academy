import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A constant-coefficient operator has the form:',
    options: [
      '$a_0 D^n + a_1(x) D^{n-1} + \\cdots
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant-coefficient means all the $a_i$ are real constants, not functions of $x$.',
  },
      '$x^n D^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant-coefficient means all the $a_i$ are real constants, not functions of $x$.',
  },
      '$a_0 D^n + a_1 D^{n-1} + \\cdots + a_n$ with $a_i$ constant',
      '$D + x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant-coefficient means all the $a_i$ are real constants, not functions of $x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant-coefficient means all the $a_i$ are real constants, not functions of $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Constant-coefficient operators commute, meaning:',
    options: [
      '$AB = BA$',
      '$AB = -BA$',
      '$AB = 0$',
      '$A + B = BA$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $D^r D^s = D^s D^r = D^{r+s}$, products of constant-coefficient operators commute.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The characteristic polynomial $p_A(r)$ of operator $A = a_0 D^n + a_1 D^{n-1} + \\cdots + a_n$ is:',
    options: [
      '$a_0 + a_1 r + \\cdots + a_n r^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial has the same coefficients as the operator, with $r$ replacing $D$.',
  },
      '$r^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial has the same coefficients as the operator, with $r$ replacing $D$.',
  },
      '$a_0 a_1 \\cdots a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial has the same coefficients as the operator, with $r$ replacing $D$.',
  },
      '$a_0 r^n + a_1 r^{n-1} + \\cdots + a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial has the same coefficients as the operator, with $r$ replacing $D$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial has the same coefficients as the operator, with $r$ replacing $D$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $p_A(r) = p_B(r) \\cdot p_C(r)$, then:',
    options: [
      '$A = B + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiplication of polynomials corresponds to composition of operators: $p_{AB} = p_A \\cdot p_B$.',
  },
      '$A = B C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplication of polynomials corresponds to composition of operators: $p_{AB} = p_A \\cdot p_B$.',
  },
      '$A = B - C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplication of polynomials corresponds to composition of operators: $p_{AB} = p_A \\cdot p_B$.',
  },
      '$A = B / C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplication of polynomials corresponds to composition of operators: $p_{AB} = p_A \\cdot p_B$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplication of polynomials corresponds to composition of operators: $p_{AB} = p_A \\cdot p_B$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The operator $D^2 - 5D + 6$ factors as:',
    options: [
      '$(D - 1)(D - 6)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$r^2 - 5r + 6 = (r - 2)(r - 3)$, so $D^2 - 5D + 6 = (D - 2)(D - 3)$.',
  },
      '$(D - 2)(D - 3)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 - 5r + 6 = (r - 2)(r - 3)$, so $D^2 - 5D + 6 = (D - 2)(D - 3)$.',
  },
      '$(D - 5)(D - 1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 - 5r + 6 = (r - 2)(r - 3)$, so $D^2 - 5D + 6 = (D - 2)(D - 3)$.',
  },
      '$(D + 2)(D + 3)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 - 5r + 6 = (r - 2)(r - 3)$, so $D^2 - 5D + 6 = (D - 2)(D - 3)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 - 5r + 6 = (r - 2)(r - 3)$, so $D^2 - 5D + 6 = (D - 2)(D - 3)$.',
  },
];
