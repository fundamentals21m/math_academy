import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the four axioms required for a distance function $d$ to be a metric?',
    options: [
      'Reflexivity: $d(x, x) = 0$',
      'Commutativity: $d(x, y) + d(y, z) = d(y, x) + d(z, y)$',
      'Symmetry: $d(x, y) = d(y, x)$',
      'Triangle inequality: $d(x, z) \\leq d(x, y) + d(y, z)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The four metric axioms are reflexivity, positivity (distinct points have positive distance), symmetry, and the triangle inequality. Commutativity of addition is not a metric axiom.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the taxicab (or $l^1$) distance between the points $(1, 2)$ and $(4, 6)$ in $\\mathbf{R}^2$?',
    options: ['$5$', '$7$', '$25$', '$\\sqrt{25}$'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The taxicab distance is $|1-4| + |2-6| = 3 + 4 = 7$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the Euclidean distance $d_{l^2}$ between $(0, 0)$ and $(3, 4)$ in $\\mathbf{R}^2$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'The Euclidean distance is $\\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the discrete metric, what is $d_{\\text{disc}}(x, y)$ when $x \\neq y$?',
    options: ['$0$', '$1$', '$|x - y|$', '$\\infty$'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In the discrete metric, $d(x, y) = 0$ if $x = y$, and $d(x, y) = 1$ if $x \\neq y$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The sequence $(1/n, 1/n)$ in $\\mathbf{R}^2$ converges to $(0, 0)$ in the Euclidean metric. Does it converge to $(0, 0)$ in the discrete metric?',
    options: [
      'Yes, because all metrics give the same convergence',
      'No, because $d_{\\text{disc}}((1/n, 1/n), (0, 0)) = 1$ for all $n \\geq 1$',
      'Yes, because $1/n \\to 0$',
      'No, because the discrete metric is not defined on $\\mathbf{R}^2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the discrete metric, any two distinct points are distance 1 apart. Since $(1/n, 1/n) \\neq (0, 0)$ for all $n \\geq 1$, we have $d_{\\text{disc}}((1/n, 1/n), (0, 0)) = 1$ always, so there is no convergence.',
  },
];
