import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The weight distribution $(A_0, A_1, \\ldots, A_n)$ of a code counts:',
    options: [
      'The minimum distance',
      'The positions of non-zero entries',
      'The number of code words of each weight',
      'The parity of each code word'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The weight distribution lists $A_i$ = the number of code words of weight $i$, for $i = 0, 1, \\ldots, n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The weight enumerator polynomial of a code with distribution $(A_0, A_1, \\ldots, A_n)$ is:',
    options: [
      '$W(x, y) = A_0 + A_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The weight enumerator is defined as $W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i$, which is a homogeneous polynomial of degree $n$.',
  },
      '$W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The weight enumerator is defined as $W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i$, which is a homogeneous polynomial of degree $n$.',
  },
      '$W(x, y) = \\sum_{i=0}^{n} A_i x^i y^i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The weight enumerator is defined as $W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i$, which is a homogeneous polynomial of degree $n$.',
  },
      '$W(x, y) = \\sum_{i=0}^{n} i \\cdot A_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The weight enumerator is defined as $W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i$, which is a homogeneous polynomial of degree $n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The weight enumerator is defined as $W(x, y) = \\sum_{i=0}^{n} A_i x^{n-i} y^i$, which is a homogeneous polynomial of degree $n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The MacWilliams identity relates:',
    options: [
      'The generator matrix to the parity check matrix',
      'The weight enumerator of $\\mathcal{C}$ to that of $\\mathcal{C}^\\perp
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The MacWilliams identity expresses the weight enumerator of the dual code $\\mathcal{C}^\\perp$ in terms of the weight enumerator of $\\mathcal{C}$.',
  },
      'The minimum distance to the dimension',
      'Binary codes to ternary codes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The MacWilliams identity expresses the weight enumerator of the dual code $\\mathcal{C}^\\perp$ in terms of the weight enumerator of $\\mathcal{C}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a binary linear $[n, k]$ code, the MacWilliams identity states:',
    options: [
      '$W_{\\mathcal{C}^\\perp}(x, y) = W_{\\mathcal{C}}(y, x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For binary codes, the MacWilliams identity is $W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)$ where $|\\mathcal{C}| = 2^k$.',
  },
      '$W_{\\mathcal{C}^\\perp}(x, y) = W_{\\mathcal{C}}(x, y)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For binary codes, the MacWilliams identity is $W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)$ where $|\\mathcal{C}| = 2^k$.',
  },
      '$W_{\\mathcal{C}^\\perp}(x, y) = 2^n W_{\\mathcal{C}}(x, y)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For binary codes, the MacWilliams identity is $W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)$ where $|\\mathcal{C}| = 2^k$.',
  },
      '$W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For binary codes, the MacWilliams identity is $W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)$ where $|\\mathcal{C}| = 2^k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For binary codes, the MacWilliams identity is $W_{\\mathcal{C}^\\perp}(x, y) = \\frac{1}{|\\mathcal{C}|} W_{\\mathcal{C}}(x+y, x-y)$ where $|\\mathcal{C}| = 2^k$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For any code, $A_0$ (the number of code words of weight 0) equals:',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'Every code contains exactly one code word of weight 0, namely the zero vector. Thus $A_0 = 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The weight enumerator of the $[7, 4, 3]$ Hamming code is:',
    options: [
      '$x^7 + 7x^4y^3 + 7x^3y^4 + y^7
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The $[7, 4, 3]$ Hamming code has 1 word of weight 0, 7 of weight 3, 7 of weight 4, and 1 of weight 7, giving $W = x^7 + 7x^4y^3 + 7x^3y^4 + y^7$.',
  },
      '$x^7 + 7x^5y^2 + 7x^2y^5 + y^7
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The $[7, 4, 3]$ Hamming code has 1 word of weight 0, 7 of weight 3, 7 of weight 4, and 1 of weight 7, giving $W = x^7 + 7x^4y^3 + 7x^3y^4 + y^7$.',
  },
      '$x^7 + y^7
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The $[7, 4, 3]$ Hamming code has 1 word of weight 0, 7 of weight 3, 7 of weight 4, and 1 of weight 7, giving $W = x^7 + 7x^4y^3 + 7x^3y^4 + y^7$.',
  },
      '$x^7 + 14x^3y^4 + y^7
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The $[7, 4, 3]$ Hamming code has 1 word of weight 0, 7 of weight 3, 7 of weight 4, and 1 of weight 7, giving $W = x^7 + 7x^4y^3 + 7x^3y^4 + y^7$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The $[7, 4, 3]$ Hamming code has 1 word of weight 0, 7 of weight 3, 7 of weight 4, and 1 of weight 7, giving $W = x^7 + 7x^4y^3 + 7x^3y^4 + y^7$.',
  },
];
