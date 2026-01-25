import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ is strictly monotonic on an interval $I$, then $f$:',
    options: [
      'Has an inverse $f^{-1}$ defined on $f(I)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A strictly monotonic function is one-to-one (injective), so it has an inverse function defined on its range $f(I)$.',
  },
      'May not have an inverse',
      'Is necessarily differentiable',
      'Is necessarily bounded',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A strictly monotonic function is one-to-one (injective), so it has an inverse function defined on its range $f(I)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $x_0$ with $f\'(x_0) \\neq 0$, and $f^{-1}$ is the inverse function, then $(f^{-1})\'(f(x_0))$ equals:',
    options: [
      '$f\\'(x_0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse function theorem gives $(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))}$. At $y = f(x_0)$, we have $f^{-1}(f(x_0)) = x_0$, so $(f^{-1})\'(f(x_0)) = \\frac{1}{f\'(x_0)}$.',
  },
      '$\\frac{1}{f\\'(x_0)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse function theorem gives $(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))}$. At $y = f(x_0)$, we have $f^{-1}(f(x_0)) = x_0$, so $(f^{-1})\'(f(x_0)) = \\frac{1}{f\'(x_0)}$.',
  },
      '$-f\\'(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse function theorem gives $(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))}$. At $y = f(x_0)$, we have $f^{-1}(f(x_0)) = x_0$, so $(f^{-1})\'(f(x_0)) = \\frac{1}{f\'(x_0)}$.',
  },
      '$\\frac{1}{f\\'(f^{-1}(x_0))}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse function theorem gives $(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))}$. At $y = f(x_0)$, we have $f^{-1}(f(x_0)) = x_0$, so $(f^{-1})\'(f(x_0)) = \\frac{1}{f\'(x_0)}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse function theorem gives $(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))}$. At $y = f(x_0)$, we have $f^{-1}(f(x_0)) = x_0$, so $(f^{-1})\'(f(x_0)) = \\frac{1}{f\'(x_0)}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Let $f(x) = x^3$ and $g = f^{-1}$, so $g(x) = x^{1/3}$. Then $g\'(8)$ equals:',
    options: [
      '$12
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $f(2) = 8$ and $f\'(x) = 3x^2$, we have $f\'(2) = 12$. By the inverse function theorem, $g\'(8) = \\frac{1}{f\'(2)} = \\frac{1}{12}$.',
  },
      '$3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $f(2) = 8$ and $f\'(x) = 3x^2$, we have $f\'(2) = 12$. By the inverse function theorem, $g\'(8) = \\frac{1}{f\'(2)} = \\frac{1}{12}$.',
  },
      '$\\frac{1}{3}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $f(2) = 8$ and $f\'(x) = 3x^2$, we have $f\'(2) = 12$. By the inverse function theorem, $g\'(8) = \\frac{1}{f\'(2)} = \\frac{1}{12}$.',
  },
      '$\\frac{1}{12}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $f(2) = 8$ and $f\'(x) = 3x^2$, we have $f\'(2) = 12$. By the inverse function theorem, $g\'(8) = \\frac{1}{f\'(2)} = \\frac{1}{12}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $f(2) = 8$ and $f\'(x) = 3x^2$, we have $f\'(2) = 12$. By the inverse function theorem, $g\'(8) = \\frac{1}{f\'(2)} = \\frac{1}{12}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f\'(x_0) = 0$ but $f$ is still locally invertible near $x_0$, what can we conclude?',
    options: [
      'The inverse function theorem still applies',
      '$(f^{-1})\\'$ exists but equals $0$ at $f(x_0)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If $f\'(x_0) = 0$, then $f$ is not locally invertible near $x_0$ in the differentiable sense. A function with zero derivative cannot be strictly monotonic in any neighborhood of that point (it has a horizontal tangent).',
  },
      'This is impossible; $f\\'(x_0) \\neq 0$ is necessary for local invertibility',
      '$f^{-1}$ is differentiable at $f(x_0)$ with infinite derivative',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If $f\'(x_0) = 0$, then $f$ is not locally invertible near $x_0$ in the differentiable sense. A function with zero derivative cannot be strictly monotonic in any neighborhood of that point (it has a horizontal tangent).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Let $f(x) = x^2$ for $x \\geq 0$, so $f^{-1}(x) = \\sqrt{x}$. Compute $(f^{-1})\'(9)$.',
    correctAnswer: 0.167,
    numericRange: { min: 0, max: 1, precision: 3 },
    difficulty: 'medium',
    explanation: 'We have $f^{-1}(9) = 3$ and $f\'(x) = 2x$, so $f\'(3) = 6$. Thus $(f^{-1})\'(9) = \\frac{1}{f\'(3)} = \\frac{1}{6} \\approx 0.167$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f$ and $f^{-1}$ are both differentiable, and we differentiate $f(f^{-1}(y)) = y$ with respect to $y$, we get:',
    options: [
      '$f\\'(f^{-1}(y)) \\cdot (f^{-1})\\'(y) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Using the chain rule on $f(f^{-1}(y)) = y$, we get $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$. This is the derivation of the inverse function derivative formula.',
  },
      '$f\\'(f^{-1}(y)) = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using the chain rule on $f(f^{-1}(y)) = y$, we get $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$. This is the derivation of the inverse function derivative formula.',
  },
      '$(f^{-1})\\'(y) = f\\'(y)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using the chain rule on $f(f^{-1}(y)) = y$, we get $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$. This is the derivation of the inverse function derivative formula.',
  },
      '$f\\'(f^{-1}(y)) + (f^{-1})\\'(y) = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using the chain rule on $f(f^{-1}(y)) = y$, we get $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$. This is the derivation of the inverse function derivative formula.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using the chain rule on $f(f^{-1}(y)) = y$, we get $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$. This is the derivation of the inverse function derivative formula.',
  },
];
