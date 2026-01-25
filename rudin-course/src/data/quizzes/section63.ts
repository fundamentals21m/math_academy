import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Implicit Function Theorem considers an equation $F(x,y) = 0$ where $F: \\mathbb{R}^{n+m} \\to \\mathbb{R}^m$. The key hypothesis is:',
    options: [
      'Both partial derivatives are zero',
      'The partial derivative $\\frac{\\partial F}{\\partial x}$ is invertible at the point',
      'The partial derivative $\\frac{\\partial F}{\\partial y}$ is invertible at the point',
      '$F$ is a linear function',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Implicit Function Theorem requires that $\\frac{\\partial F}{\\partial y}$, the $m \\times m$ matrix of partial derivatives with respect to $y$, be invertible. This allows solving for $y$ as a function of $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $F(a,b) = 0$ and the hypotheses of the Implicit Function Theorem hold, then:',
    options: [
      'There exists a global function $g$ with $F(x, g(x)) = 0$ for all $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The theorem guarantees local existence and uniqueness of a function $g$ such that $F(x, g(x)) = 0$ in a neighborhood of $a$, with $g$ having the same smoothness as $F$.',
  },
      'There exists a unique $C^1$ function $g$ with $g(a) = b$ and $F(x, g(x)) = 0$ near $a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The theorem guarantees local existence and uniqueness of a function $g$ such that $F(x, g(x)) = 0$ in a neighborhood of $a$, with $g$ having the same smoothness as $F$.',
  },
      '$F$ can be written as a product of functions of $x$ and $y$ separately',
      'The level set $F^{-1}(0)$ is a linear subspace',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The theorem guarantees local existence and uniqueness of a function $g$ such that $F(x, g(x)) = 0$ in a neighborhood of $a$, with $g$ having the same smoothness as $F$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivative of the implicitly defined function $g$ in $F(x,g(x)) = 0$ is:',
    options: [
      '$g\\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} g\'(x) = 0$, so $g\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}$.',
  },
      '$g\\'(x) = -\\frac{\\partial F}{\\partial x} / \\frac{\\partial F}{\\partial y}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} g\'(x) = 0$, so $g\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}$.',
  },
      '$g\\'(x) = \\frac{\\partial F}{\\partial y} / \\frac{\\partial F}{\\partial x}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} g\'(x) = 0$, so $g\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}$.',
  },
      '$g\\'(x) = -\\frac{\\partial F}{\\partial y}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} g\'(x) = 0$, so $g\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} g\'(x) = 0$, so $g\'(x) = -\\left(\\frac{\\partial F}{\\partial y}\\right)^{-1} \\frac{\\partial F}{\\partial x}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Implicit Function Theorem is proved using:',
    options: [
      'The Extreme Value Theorem',
      'The Mean Value Theorem',
      'The Intermediate Value Theorem',
      'The Inverse Function Theorem',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Implicit Function Theorem is typically derived from the Inverse Function Theorem by considering the map $(x,y) \\mapsto (x, F(x,y))$ and applying the Inverse Function Theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $F: \\mathbb{R}^2 \\to \\mathbb{R}$ with $F(a,b) = 0$ and $\\frac{\\partial F}{\\partial y}(a,b) \\neq 0$, the level curve $F(x,y) = 0$ near $(a,b)$:',
    options: [
      'Cannot be parameterized',
      'Is a straight line',
      'Is a circle',
      'Is the graph of a $C^1$ function $y = g(x)$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $\\frac{\\partial F}{\\partial y} \\neq 0$, the implicit function theorem guarantees the level curve is locally the graph of a smooth function $y = g(x)$.',
  },
];
