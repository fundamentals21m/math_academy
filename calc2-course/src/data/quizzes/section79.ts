import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The limit $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = L$ means:',
    options: [
      'For all $\\epsilon > 0$, there exists $\\delta > 0$ such that $\\|\\mathbf{x} - \\mathbf{a}\\| < \\delta$ implies $|f(\\mathbf{x}) - L| < \\epsilon
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The $\\epsilon$-$\\delta$ definition: $f(\\mathbf{x})$ can be made arbitrarily close to $L$ by taking $\\mathbf{x}$ sufficiently close to $\\mathbf{a}$.',
  },
      '$f(\\mathbf{a}) = L
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $\\epsilon$-$\\delta$ definition: $f(\\mathbf{x})$ can be made arbitrarily close to $L$ by taking $\\mathbf{x}$ sufficiently close to $\\mathbf{a}$.',
  },
      '$f$ is differentiable at $\\mathbf{a}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $\\epsilon$-$\\delta$ definition: $f(\\mathbf{x})$ can be made arbitrarily close to $L$ by taking $\\mathbf{x}$ sufficiently close to $\\mathbf{a}$.',
  },
      'The function is continuous at $\\mathbf{a}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $\\epsilon$-$\\delta$ definition: $f(\\mathbf{x})$ can be made arbitrarily close to $L$ by taking $\\mathbf{x}$ sufficiently close to $\\mathbf{a}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $\\epsilon$-$\\delta$ definition: $f(\\mathbf{x})$ can be made arbitrarily close to $L$ by taking $\\mathbf{x}$ sufficiently close to $\\mathbf{a}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f: \\mathbb{R}^n \\to \\mathbb{R}$ is continuous at $\\mathbf{a}$ if:',
    options: [
      '$\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x})$ exists',
      '$f$ is defined at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Continuity requires three conditions: $f(\\mathbf{a})$ defined, limit exists, and limit equals function value.',
  },
      '$\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = f(\\mathbf{a})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity requires three conditions: $f(\\mathbf{a})$ defined, limit exists, and limit equals function value.',
  },
      '$f$ is bounded near $\\mathbf{a}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity requires three conditions: $f(\\mathbf{a})$ defined, limit exists, and limit equals function value.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity requires three conditions: $f(\\mathbf{a})$ defined, limit exists, and limit equals function value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x,y) = \\frac{xy}{x^2 + y^2}$ (with $f(0,0) = 0$), approaching $(0,0)$ along $y = mx$ gives:',
    options: [
      '$0$ for all $m$',
      '$\\frac{m}{1+m^2}$ (depends on $m$)',
      '$1$ for all $m$',
      '$m$ for all $m$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Along $y = mx$: $f(x, mx) = \\frac{mx^2}{x^2 + m^2x^2} = \\frac{m}{1+m^2}$, which depends on the slope $m$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If a limit depends on the path of approach, then:',
    options: [
      'The limit exists and equals the average of path limits',
      'The function is continuous',
      'The function is differentiable',
      'The limit does not exist',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If different paths give different limits, the overall limit does not exist (the limit must be unique if it exists).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ given by $f(\\mathbf{x}) = (f_1(\\mathbf{x}), \\ldots, f_m(\\mathbf{x}))$, continuity means:',
    options: [
      'Only $f_1$ needs to be continuous',
      '$f_1 \\cdot f_2 \\cdots f_m$ is continuous',
      '$\\sum_i f_i$ is continuous',
      'Each component $f_i$ is continuous'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A vector-valued function is continuous iff each component function is continuous.',
  },
];
