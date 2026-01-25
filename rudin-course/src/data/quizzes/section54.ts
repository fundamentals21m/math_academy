import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential function $E(z) = \\sum_{n=0}^{\\infty} \\frac{z^n}{n!}$ satisfies:',
    options: [
      '$E(z + w) = E(z) + E(w)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
      '$E(zw) = E(z) \\cdot E(w)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
      '$E(z)E(w) = E(z) + E(w)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
      '$E(z + w) = E(z) \\cdot E(w)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The natural logarithm $L(x)$ is defined for $x > 0$ as:',
    options: [
      '$\\int_0^x E(t) \\, dt
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $E: \\mathbb{R} \\to (0, \\infty)$ is strictly increasing (with $E\' = E > 0$), it has an inverse function $L: (0, \\infty) \\to \\mathbb{R}$, the natural logarithm.',
  },
      'The inverse function of $E$ restricted to real numbers',
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $E: \\mathbb{R} \\to (0, \\infty)$ is strictly increasing (with $E\' = E > 0$), it has an inverse function $L: (0, \\infty) \\to \\mathbb{R}$, the natural logarithm.',
  },
      'The derivative of $E(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $E: \\mathbb{R} \\to (0, \\infty)$ is strictly increasing (with $E\' = E > 0$), it has an inverse function $L: (0, \\infty) \\to \\mathbb{R}$, the natural logarithm.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $E: \\mathbb{R} \\to (0, \\infty)$ is strictly increasing (with $E\' = E > 0$), it has an inverse function $L: (0, \\infty) \\to \\mathbb{R}$, the natural logarithm.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivative of $L(x)$ equals:',
    options: [
      '$L(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
      '$E(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
      '$1/x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
      '$x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For real $x$ and $y > 0$, $y^x$ is defined as:',
    options: [
      '$y$ multiplied by itself $x$ times',
      '$L(x \\cdot E(y))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For arbitrary real exponents, we define $y^x = E(x \\cdot L(y)) = e^{x \\ln y}$. This extends the definition from rational to all real exponents while preserving the expected properties.',
  },
      '$x^y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For arbitrary real exponents, we define $y^x = E(x \\cdot L(y)) = e^{x \\ln y}$. This extends the definition from rational to all real exponents while preserving the expected properties.',
  },
      '$E(x \\cdot L(y))
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For arbitrary real exponents, we define $y^x = E(x \\cdot L(y)) = e^{x \\ln y}$. This extends the definition from rational to all real exponents while preserving the expected properties.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For arbitrary real exponents, we define $y^x = E(x \\cdot L(y)) = e^{x \\ln y}$. This extends the definition from rational to all real exponents while preserving the expected properties.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The limit $\\lim_{n \\to \\infty} (1 + 1/n)^n$ equals:',
    options: [
      '$e = E(1)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
      '$\\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
];
