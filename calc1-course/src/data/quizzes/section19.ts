import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to a} f(x) = L$ means:',
    options: [
      '$f(a) = L$',
      '$f$ is continuous at $a$',
      '$f(x) = L$ for all $x$ near $a$',
      '$f(x)$ gets arbitrarily close to $L$ as $x$ approaches $a$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit describes the behavior of $f(x)$ as $x$ approaches $a$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f$ is continuous at $a$ if:',
    options: [
      '$\\lim_{x \\to a} f(x) = f(a)$',
      '$\\lim_{x \\to a} f(x)$ exists',
      '$f(a)$ exists',
      '$f$ is differentiable at $a$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Continuity requires: $f(a)$ exists, the limit exists, and they are equal.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\lim_{x \\to 2} (3x + 1)$?',
    correctAnswer: 7,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'For polynomials, just substitute: $3(2) + 1 = 7$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = ?$',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is a fundamental limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then $\\lim_{x \\to a} [f(x) + g(x)] = ?$',
    options: [
      '$LM$',
      '$L - M$',
      '$L + M$',
      'Cannot determine'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limit of a sum equals sum of limits: $L + M$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The function $f(x) = |x|$ is continuous at $x = 0$ because:',
    options: [
      'It has a corner there',
      'It is not continuous at 0',
      'It is differentiable at 0',
      '$\\lim_{x \\to 0}|x| = 0 = f(0)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit equals the function value: $\\lim_{x \\to 0}|x| = 0 = |0|$.',
  },
];
