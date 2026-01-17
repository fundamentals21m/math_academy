import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The implicit function theorem concerns equations of the form:',
    options: [
      '$f(x) = 0$ where $f: \\mathbf{R} \\to \\mathbf{R}$',
      '$F(x, y) = 0$ where we want to solve for $y$ as a function of $x$',
      '$f(x) = x$',
      '$f(x, y) = x + y$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The implicit function theorem finds when $F(x, y) = 0$ implicitly defines $y = g(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $F(x, y) = 0$ to implicitly define $y = g(x)$ near $(x_0, y_0)$, we need:',
    options: [
      '$\\frac{\\partial F}{\\partial x}(x_0, y_0) \\neq 0$',
      '$\\frac{\\partial F}{\\partial y}(x_0, y_0) \\neq 0$',
      '$F(x_0, y_0) \\neq 0$',
      '$F$ to be linear'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The partial derivative with respect to the variable being solved for must be nonzero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $F(x, y) = 0$ defines $y = g(x)$ implicitly, then $g\'(x)$ equals:',
    options: [
      '$-\\frac{\\partial F/\\partial x}{\\partial F/\\partial y}$',
      '$\\frac{\\partial F}{\\partial x}$',
      '$\\frac{\\partial F}{\\partial y}$',
      '$\\frac{\\partial F/\\partial y}{\\partial F/\\partial x}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiating $F(x, g(x)) = 0$ gives $g\'(x) = -F_x/F_y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The implicit function theorem can be derived from:',
    options: [
      'The mean value theorem',
      'The inverse function theorem',
      'Integration by parts',
      'The fundamental theorem of calculus'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The implicit function theorem is essentially a corollary of the inverse function theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Consider $x^2 + y^2 = 1$. Near $(0, 1)$, can we solve for $y$ as a function of $x$?',
    options: [
      'No, because $\\frac{\\partial}{\\partial y}(x^2 + y^2) = 2y = 2 \\neq 0$',
      'Yes, because $\\frac{\\partial}{\\partial y}(x^2 + y^2) = 2y = 2 \\neq 0$',
      'No, because the circle is not a function',
      'Yes, because $x^2 + y^2$ is smooth'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At $(0, 1)$, $\\partial F/\\partial y = 2(1) = 2 \\neq 0$, so we can locally solve for $y = \\sqrt{1 - x^2}$.',
  },
];
