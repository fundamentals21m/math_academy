import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If root $r$ has multiplicity $m$, the factor $(D-r)^m$ annihilates:',
    options: [
      '$e^{rx}$ only',
      '$e^{rx}, e^{2rx}, \\ldots, e^{mrx}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A root of multiplicity $m$ contributes $m$ independent solutions: $e^{rx}, xe^{rx}, x^2 e^{rx}, \\ldots, x^{m-1}e^{rx}$.',
  },
      '$1, x, x^2, \\ldots, x^{m-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A root of multiplicity $m$ contributes $m$ independent solutions: $e^{rx}, xe^{rx}, x^2 e^{rx}, \\ldots, x^{m-1}e^{rx}$.',
  },
      '$e^{rx}, xe^{rx}, \\ldots, x^{m-1}e^{rx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A root of multiplicity $m$ contributes $m$ independent solutions: $e^{rx}, xe^{rx}, x^2 e^{rx}, \\ldots, x^{m-1}e^{rx}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A root of multiplicity $m$ contributes $m$ independent solutions: $e^{rx}, xe^{rx}, x^2 e^{rx}, \\ldots, x^{m-1}e^{rx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the equation $(D-2)^2(D+3)y = 0$, the general solution is:',
    options: [
      '$y = c_1 e^{2x} + c_2 e^{-3x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Root $2$ with multiplicity $2$ gives $e^{2x}, xe^{2x}$. Root $-3$ with multiplicity $1$ gives $e^{-3x}$.',
  },
      '$y = c_1 e^{2x} + c_2 x e^{2x} + c_3 e^{-3x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Root $2$ with multiplicity $2$ gives $e^{2x}, xe^{2x}$. Root $-3$ with multiplicity $1$ gives $e^{-3x}$.',
  },
      '$y = (c_1 + c_2 x + c_3 x^2)e^{2x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Root $2$ with multiplicity $2$ gives $e^{2x}, xe^{2x}$. Root $-3$ with multiplicity $1$ gives $e^{-3x}$.',
  },
      '$y = c_1 e^{2x} + c_2 e^{3x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Root $2$ with multiplicity $2$ gives $e^{2x}, xe^{2x}$. Root $-3$ with multiplicity $1$ gives $e^{-3x}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Root $2$ with multiplicity $2$ gives $e^{2x}, xe^{2x}$. Root $-3$ with multiplicity $1$ gives $e^{-3x}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The functions $1, x, x^2, \\ldots, x^{m-1}$ multiplied by $e^{rx}$ are:',
    options: [
      'Linearly dependent',
      'Equal',
      'Linearly independent',
      'Orthogonal',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Polynomials $1, x, \\ldots, x^{m-1}$ are independent, and multiplying by $e^{rx}$ preserves independence.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $D^2 y = 0$ (root $0$ with multiplicity $2$), the solutions are:',
    options: [
      '$1, x$',
      '$e^x, e^{-x}$',
      '$\\sin x, \\cos x$',
      '$x, x^2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Root $r = 0$ with multiplicity $2$ gives $e^{0 \\cdot x} = 1$ and $xe^{0 \\cdot x} = x$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $(D-1)^3(D+2)^2 y = 0$, how many independent solutions are there?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Root $1$ with multiplicity $3$ gives $3$ solutions; root $-2$ with multiplicity $2$ gives $2$ solutions. Total: $5$.',
  },
];
