import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'L\'Hospital\'s Rule applies when evaluating $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ if:',
    options: [
      '$f(a) = g(a) = 0$ only',
      '$\\lim_{x \\to a} f(x) = \\lim_{x \\to a} g(x) = \\pm\\infty$ only',
      'Either both limits are $0$, or both are $\\pm\\infty$, and $\\lim \\frac{f\'(x)}{g\'(x)}$ exists',
      '$f$ and $g$ are both continuous at $a$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'L\'Hospital\'s Rule (Theorem 5.13) applies to indeterminate forms $0/0$ or $\\infty/\\infty$. If $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = L$ (or $\\pm\\infty$), then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = L$ (or $\\pm\\infty$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ using L\'Hospital\'s Rule:',
    options: [
      '$0$',
      '$1$',
      '$e$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is $0/0$ form. Applying L\'Hospital: $\\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1$. (This also equals the definition of the derivative of $e^x$ at $x=0$.)',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Evaluate $\\lim_{x \\to 0^+} x \\ln x$:',
    options: [
      '$0$',
      '$-\\infty$',
      '$+\\infty$',
      '$1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Write as $\\frac{\\ln x}{1/x}$ which is $-\\infty/\\infty$. By L\'Hospital: $\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$, how many applications of L\'Hospital\'s Rule are needed?',
    options: [
      '$1$',
      '$2$',
      '$3$',
      'L\'Hospital\'s Rule does not apply'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Apply L\'Hospital three times: $\\frac{1 - \\cos x}{3x^2}$ (still $0/0$) $\\to$ $\\frac{\\sin x}{6x}$ (still $0/0$) $\\to$ $\\frac{\\cos x}{6} \\to \\frac{1}{6}$ as $x \\to 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$ does not exist, can we conclude that $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ does not exist?',
    options: [
      'Yes, the original limit must also not exist',
      'No, the original limit may still exist',
      'Yes, if the indeterminate form is $0/0$',
      'Yes, if the indeterminate form is $\\infty/\\infty$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'L\'Hospital\'s Rule is one-directional. Example: $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$, but $\\frac{1 + \\cos x}{1}$ oscillates and has no limit. The original limit can exist even when the derivative ratio has no limit.',
  },
];
