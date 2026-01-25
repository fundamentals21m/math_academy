import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f, g: X \\to \\mathbb{R}$ are functions and $c \\in \\mathbb{R}$, then $(cf)(x)$ is defined as:',
    options: [
      '$f(cx)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Scalar multiplication of a function is defined pointwise: $(cf)(x) = c \\cdot f(x)$ for all $x$ in the domain.',
  },
      '$c + f(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication of a function is defined pointwise: $(cf)(x) = c \\cdot f(x)$ for all $x$ in the domain.',
  },
      '$f(x)^c
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication of a function is defined pointwise: $(cf)(x) = c \\cdot f(x)$ for all $x$ in the domain.',
  },
      '$c \\cdot f(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication of a function is defined pointwise: $(cf)(x) = c \\cdot f(x)$ for all $x$ in the domain.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication of a function is defined pointwise: $(cf)(x) = c \\cdot f(x)$ for all $x$ in the domain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sum of two functions $f + g$ is defined by $(f + g)(x) =$',
    options: [
      '$f(g(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Function addition is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for all $x$ in the common domain.',
  },
      '$f(x) + g(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Function addition is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for all $x$ in the common domain.',
  },
      '$\\max\\{f(x), g(x)\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Function addition is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for all $x$ in the common domain.',
  },
      '$f(x) \\cdot g(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Function addition is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for all $x$ in the common domain.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Function addition is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for all $x$ in the common domain.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $f(x) = x^2$ and $g(x) = 3x$, what is $(f \\cdot g)(2)$?',
    correctAnswer: 24,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$(f \\cdot g)(2) = f(2) \\cdot g(2) = 4 \\cdot 6 = 24$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The quotient $f/g$ of two functions is defined on the set:',
    options: [
      'The entire domain of $f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division by a function requires excluding points where the denominator is zero. The domain of $f/g$ is $\\{x \\in \\text{dom}(f) \\cap \\text{dom}(g) : g(x) \\neq 0\\}$.',
  },
      'The entire domain of $g
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Division by a function requires excluding points where the denominator is zero. The domain of $f/g$ is $\\{x \\in \\text{dom}(f) \\cap \\text{dom}(g) : g(x) \\neq 0\\}$.',
  },
      '$\\{x : g(x) \\neq 0\\}$ intersected with the common domain',
      'The union of the domains of $f$ and $g
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Division by a function requires excluding points where the denominator is zero. The domain of $f/g$ is $\\{x \\in \\text{dom}(f) \\cap \\text{dom}(g) : g(x) \\neq 0\\}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Division by a function requires excluding points where the denominator is zero. The domain of $f/g$ is $\\{x \\in \\text{dom}(f) \\cap \\text{dom}(g) : g(x) \\neq 0\\}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f(x) = |x|$ is the absolute value function, then $f$ satisfies:',
    options: [
      '$f(x) \\geq 0$ for all $x$ and $f(x) = 0$ iff $x = 0$',
      '$f(xy) = f(x)f(y)$ for all $x, y$',
      '$f(x + y) = f(x) + f(y)$ for all $x, y$',
      '$f(-x) = -f(x)$ for all $x$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The absolute value satisfies $|x| \\geq 0$ with equality iff $x = 0$. It also satisfies $|xy| = |x||y|$, but NOT $|x+y| = |x| + |y|$ in general.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f(x) = 2x + 1$ and $g(x) = x - 3$, what is $(f - g)(5)$?',
    correctAnswer: 9,
    numericRange: { min: -50, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$(f - g)(5) = f(5) - g(5) = (2 \\cdot 5 + 1) - (5 - 3) = 11 - 2 = 9$.',
  },
];
