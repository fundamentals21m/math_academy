import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $(X, d_X)$ and $(Y, d_Y)$ are metric spaces, the product metric on $X \\times Y$ can be defined as:',
    options: [
      '$d((x_1, y_1), (x_2, y_2)) = d_X(x_1, x_2) \\cdot d_Y(y_1, y_2)$',
      '$d((x_1, y_1), (x_2, y_2)) = d_X(x_1, x_2) + d_Y(y_1, y_2)$',
      '$d((x_1, y_1), (x_2, y_2)) = \\min(d_X(x_1, x_2), d_Y(y_1, y_2))$',
      '$d((x_1, y_1), (x_2, y_2)) = d_X(x_1, x_2) / d_Y(y_1, y_2)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum metric (also called the $l^1$ product metric) is one common choice. The Euclidean product metric $\\sqrt{d_X^2 + d_Y^2}$ and the sup metric $\\max(d_X, d_Y)$ are also valid.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f: X \\to Y_1 \\times Y_2$ is continuous if and only if:',
    options: [
      'At least one component function is continuous',
      'Both component functions $\\pi_1 \\circ f$ and $\\pi_2 \\circ f$ are continuous',
      'The sum of the component functions is continuous',
      '$f$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A function into a product space is continuous iff each of its component functions is continuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The projection map $\\pi_1: X \\times Y \\to X$ defined by $\\pi_1(x, y) = x$ is:',
    options: [
      'Not continuous in general',
      'Continuous',
      'Continuous only if $X$ is compact',
      'An isometry'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Projection maps are always continuous with respect to product metrics.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f: X \\to Y$ and $g: X \\to Z$ are continuous, then the map $h: X \\to Y \\times Z$ defined by $h(x) = (f(x), g(x))$ is:',
    options: [
      'Not necessarily continuous',
      'Continuous',
      'Continuous only if $f = g$',
      'Continuous only if $Y = Z$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If both components are continuous, then the combined map into the product space is continuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following product metrics on $\\mathbf{R}^2$ gives the same topology as the Euclidean metric?',
    options: [
      'Only the Euclidean metric itself',
      'The sum metric and sup metric, but not others',
      'The Euclidean, sum, and sup metrics all give the same topology',
      'No other metric gives the same topology'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Euclidean ($l^2$), sum ($l^1$), and sup ($l^\\infty$) metrics on $\\mathbf{R}^n$ are all equivalent—they induce the same topology.',
  },
];
