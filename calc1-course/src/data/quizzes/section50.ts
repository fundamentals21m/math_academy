import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'L\'Hôpital\'s Rule applies to limits of the form:',
    options: [
      'Only $0/0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'L\'Hôpital\'s Rule works for both $0/0$ and $\\infty/\\infty$ forms.',
  },
      'Only $\\infty/\\infty
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'L\'Hôpital\'s Rule works for both $0/0$ and $\\infty/\\infty$ forms.',
  },
      'All limits',
      'Both $0/0$ and $\\infty/\\infty
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'L\'Hôpital\'s Rule works for both $0/0$ and $\\infty/\\infty$ forms.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'L\'Hôpital\'s Rule works for both $0/0$ and $\\infty/\\infty$ forms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'L\'Hôpital\'s Rule states: if $\\lim f/g$ is $0/0$ or $\\infty/\\infty$, then $\\lim f/g = ?$',
    options: [
      '$\\lim f\\'/g\\'$ (if this limit exists)',
      '$\\lim f\\' \\cdot g\\'
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$ when applicable.',
  },
      '$\\lim f - g
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$ when applicable.',
  },
      '$\\lim (f \\cdot g)\\'
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$ when applicable.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$ when applicable.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Use L\'Hôpital\'s Rule: $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{d(\\sin x)/dx}{d(x)/dx} = \\frac{\\cos x}{1} \\to 1$ as $x \\to 0$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Use L\'Hôpital: $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{e^x}{1} \\to 1$ as $x \\to 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Before using L\'Hôpital\'s Rule, we must verify:',
    options: [
      'The functions are polynomials',
      'The functions are equal',
      'The limit is in $0/0$ or $\\infty/\\infty$ form',
      'The limit equals zero',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'L\'Hôpital\'s Rule requires an indeterminate form.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Use L\'Hôpital: $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$. (May need multiple applications)',
    correctAnswer: 0.167,
    numericRange: { min: 0.15, max: 0.18, precision: 3 },
    difficulty: 'hard',
    explanation: 'Apply L\'Hôpital three times: $\\frac{1 - \\cos x}{3x^2} \\to \\frac{\\sin x}{6x} \\to \\frac{\\cos x}{6} = 1/6$.',
  },
];
