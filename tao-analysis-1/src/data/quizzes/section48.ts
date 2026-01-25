import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Let $f: (a,b) \\to \\mathbb{R}$ and $x_0 \\in (a,b)$. The derivative $f\'(x_0)$ is defined as:',
    options: [
      '$\\lim_{x \\to x_0} f(x) - f(x_0)$',
      '$\\lim_{x \\to x_0} \\frac{f(x_0) - f(x)}{x_0 - x}$',
      '$\\lim_{h \\to 0} \\frac{f(x_0 + h) + f(x_0)}{h}$',
      '$\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative $f\'(x_0)$ is defined as the limit $\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$, which represents the slope of the tangent line at $x_0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $x_0$, which of the following must be true?',
    options: [
      '$f$ is continuous at $x_0$',
      '$f$ is bounded near $x_0$',
      '$f\'$ is continuous at $x_0$',
      '$f$ is monotonic near $x_0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity. If $f\'(x_0)$ exists, then $\\lim_{x \\to x_0} f(x) = f(x_0)$, so $f$ is continuous at $x_0$. The converse is false: continuity does not imply differentiability.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f(x) = |x|$. At $x = 0$, which statement is correct?',
    options: [
      '$f$ is differentiable with $f\'(0) = 0$',
      '$f$ is continuous but not differentiable',
      '$f$ is differentiable with $f\'(0) = 1$',
      '$f$ is neither continuous nor differentiable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The function $f(x) = |x|$ is continuous at $0$ since $\\lim_{x \\to 0}|x| = 0 = f(0)$. However, the left derivative is $-1$ and the right derivative is $1$, so the derivative does not exist at $0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are differentiable at $x_0$, then $(fg)\'(x_0)$ equals:',
    options: [
      '$f\'(x_0)g\'(x_0)$',
      '$f(x_0)g\'(x_0) - f\'(x_0)g(x_0)$',
      '$f\'(x_0)g(x_0) + f(x_0)g\'(x_0)$',
      '$\\frac{f\'(x_0)}{g\'(x_0)}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The product rule states that $(fg)\'(x_0) = f\'(x_0)g(x_0) + f(x_0)g\'(x_0)$. This is a fundamental differentiation rule.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Let $f(x) = x^3$. Using the definition of derivative, compute $f\'(2)$.',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(2) = \\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x^2+2x+4)}{x-2} = \\lim_{x \\to 2}(x^2+2x+4) = 4 + 4 + 4 = 12$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The chain rule states that if $g$ is differentiable at $x_0$ and $f$ is differentiable at $g(x_0)$, then $(f \\circ g)\'(x_0)$ equals:',
    options: [
      '$f\\'(g(x_0)) \\cdot g\\'(x_0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x_0) = f\'(g(x_0)) \\cdot g\'(x_0)$. We evaluate $f\'$ at $g(x_0)$, not at $x_0$.',
  },
      '$f\\'(x_0) \\cdot g\\'(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x_0) = f\'(g(x_0)) \\cdot g\'(x_0)$. We evaluate $f\'$ at $g(x_0)$, not at $x_0$.',
  },
      '$f(g\\'(x_0)) \\cdot g\\'(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x_0) = f\'(g(x_0)) \\cdot g\'(x_0)$. We evaluate $f\'$ at $g(x_0)$, not at $x_0$.',
  },
      '$f\\'(g\\'(x_0)) \\cdot g(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x_0) = f\'(g(x_0)) \\cdot g\'(x_0)$. We evaluate $f\'$ at $g(x_0)$, not at $x_0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x_0) = f\'(g(x_0)) \\cdot g\'(x_0)$. We evaluate $f\'$ at $g(x_0)$, not at $x_0$.',
  },
];
