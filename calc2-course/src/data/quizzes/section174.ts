import type { QuizQuestion } from './types';

export const section174Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For continuous $(X, Y)$ with joint density $f$, $P[(X, Y) \\in Q]$ equals:',
    options: [
      '$\\int_Q f(x, y)\\,dx
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Probability is the double integral of the joint density over the region $Q$.',
  },
      '$\\iint_Q f(x, y)\\,dx\\,dy
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Probability is the double integral of the joint density over the region $Q$.',
  },
      '$f(Q)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Probability is the double integral of the joint density over the region $Q$.',
  },
      '$\\int_Q f(x)\\,dx \\cdot \\int_Q f(y)\\,dy
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Probability is the double integral of the joint density over the region $Q$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Probability is the double integral of the joint density over the region $Q$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The joint density must satisfy:',
    options: [
      '$\\iint f(x, y)\\,dx\\,dy = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A joint density integrates to 1 over the entire plane: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1$.',
  },
      '$\\iint f(x, y)\\,dx\\,dy = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A joint density integrates to 1 over the entire plane: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1$.',
  },
      '$\\iint f(x, y)\\,dx\\,dy = \\infty
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A joint density integrates to 1 over the entire plane: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1$.',
  },
      '$f(x, y) < 0$ for some $(x, y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A joint density integrates to 1 over the entire plane: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A joint density integrates to 1 over the entire plane: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The marginal density $f_X(x)$ is obtained by:',
    options: [
      '$f_X(x) = f(x, 0)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integrate out the other variable: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$.',
  },
      '$f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrate out the other variable: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$.',
  },
      '$f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrate out the other variable: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$.',
  },
      '$f_X(x) = f(x, x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrate out the other variable: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrate out the other variable: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For continuous random variables, independence means:',
    options: [
      '$f(x, y) = f_X(x) + f_Y(y)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Independence: the joint density factors as $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)$.',
  },
      '$F(a, b) = F_X(a) + F_Y(b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint density factors as $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)$.',
  },
      '$f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint density factors as $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)$.',
  },
      '$f_X(x) = f_Y(y)$ for all $x, y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint density factors as $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint density factors as $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $(x, y)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For uniform distribution on the unit square $[0,1] \\times [0,1]$, are $X$ and $Y$ independent?',
    options: [
      'No, because $f(x, y) = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The marginals are $f_X(x) = f_Y(y) = 1$ on $[0,1]$. Since $f(x, y) = 1 = f_X(x) f_Y(y)$, $X$ and $Y$ are independent.',
  },
      'Only if $x = y
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The marginals are $f_X(x) = f_Y(y) = 1$ on $[0,1]$. Since $f(x, y) = 1 = f_X(x) f_Y(y)$, $X$ and $Y$ are independent.',
  },
      'Cannot be determined',
      'Yes, because $f(x, y) = f_X(x) \\cdot f_Y(y) = 1 \\cdot 1 = 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The marginals are $f_X(x) = f_Y(y) = 1$ on $[0,1]$. Since $f(x, y) = 1 = f_X(x) f_Y(y)$, $X$ and $Y$ are independent.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The marginals are $f_X(x) = f_Y(y) = 1$ on $[0,1]$. Since $f(x, y) = 1 = f_X(x) f_Y(y)$, $X$ and $Y$ are independent.',
  },
];
