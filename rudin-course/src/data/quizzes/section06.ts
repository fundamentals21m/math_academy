import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 'sec06-q1',
    type: 'multiple-choice',
    question: 'For vectors $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^k$, the inner product $\\mathbf{x} \\cdot \\mathbf{y}$ is defined as:',
    options: [
      '$(x_1 y_1, x_2 y_2, \\ldots, x_k y_k)$',
      '$\\sum_{i=1}^{k} |x_i - y_i|$',
      '$\\sum_{i=1}^{k} x_i y_i$',
      '$\\max_i |x_i y_i|$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product (dot product) of $\\mathbf{x} = (x_1, \\ldots, x_k)$ and $\\mathbf{y} = (y_1, \\ldots, y_k)$ is $\\mathbf{x} \\cdot \\mathbf{y} = \\sum_{i=1}^{k} x_i y_i$.',
  },
  {
    id: 'sec06-q2',
    type: 'multiple-choice',
    question: 'The Euclidean norm $|\\mathbf{x}|$ of a vector $\\mathbf{x} \\in \\mathbb{R}^k$ satisfies:',
    options: [
      '$|\\mathbf{x}| = \\mathbf{x} \\cdot \\mathbf{x}$',
      '$|\\mathbf{x}| = \\max_i |x_i|$',
      '$|\\mathbf{x}| = \\sum_i |x_i|$',
      '$|\\mathbf{x}|^2 = \\mathbf{x} \\cdot \\mathbf{x}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Euclidean norm is $|\\mathbf{x}| = \\sqrt{\\mathbf{x} \\cdot \\mathbf{x}} = \\sqrt{\\sum x_i^2}$, so $|\\mathbf{x}|^2 = \\mathbf{x} \\cdot \\mathbf{x}$.',
  },
  {
    id: 'sec06-q3',
    type: 'multiple-choice',
    question: 'The Schwarz inequality states that for $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^k$:',
    options: [
      '$|\\mathbf{x} \\cdot \\mathbf{y}| \\leq |\\mathbf{x}| |\\mathbf{y}|$',
      '$|\\mathbf{x} \\cdot \\mathbf{y}| \\geq |\\mathbf{x}| |\\mathbf{y}|$',
      '$|\\mathbf{x} \\cdot \\mathbf{y}| = |\\mathbf{x}| + |\\mathbf{y}|$',
      '$|\\mathbf{x} + \\mathbf{y}| = |\\mathbf{x}| |\\mathbf{y}|$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schwarz (Cauchy-Schwarz) inequality: $|\\mathbf{x} \\cdot \\mathbf{y}| \\leq |\\mathbf{x}| |\\mathbf{y}|$. Equality holds if and only if one vector is a scalar multiple of the other.',
  },
  {
    id: 'sec06-q4',
    type: 'multiple-choice',
    question: 'The triangle inequality in $\\mathbb{R}^k$ states:',
    options: [
      '$|\\mathbf{x} + \\mathbf{y}| \\geq |\\mathbf{x}| + |\\mathbf{y}|$',
      '$|\\mathbf{x} + \\mathbf{y}| \\leq |\\mathbf{x}| + |\\mathbf{y}|$',
      '$|\\mathbf{x} - \\mathbf{y}| = |\\mathbf{x}| - |\\mathbf{y}|$',
      '$|\\mathbf{x} \\cdot \\mathbf{y}| \\leq |\\mathbf{x} + \\mathbf{y}|$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The triangle inequality $|\\mathbf{x} + \\mathbf{y}| \\leq |\\mathbf{x}| + |\\mathbf{y}|$ follows from the Schwarz inequality. It gets its name from the geometric fact that any side of a triangle is at most the sum of the other two.',
  },
  {
    id: 'sec06-q5',
    type: 'multiple-choice',
    question: 'If $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^k$ with $\\mathbf{x} \\cdot \\mathbf{y} = 0$, then:',
    options: [
      '$\\mathbf{x} = \\mathbf{0}$ or $\\mathbf{y} = \\mathbf{0}$',
      '$\\mathbf{x} = \\mathbf{y}$',
      '$|\\mathbf{x} + \\mathbf{y}|^2 = |\\mathbf{x}|^2 + |\\mathbf{y}|^2$',
      '$|\\mathbf{x}| = |\\mathbf{y}|$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\mathbf{x} \\cdot \\mathbf{y} = 0$ (orthogonal vectors), then $|\\mathbf{x} + \\mathbf{y}|^2 = (\\mathbf{x} + \\mathbf{y}) \\cdot (\\mathbf{x} + \\mathbf{y}) = |\\mathbf{x}|^2 + 2\\mathbf{x}\\cdot\\mathbf{y} + |\\mathbf{y}|^2 = |\\mathbf{x}|^2 + |\\mathbf{y}|^2$. This is the Pythagorean theorem.',
  },
];
