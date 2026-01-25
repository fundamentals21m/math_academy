import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'L\'Hopital\'s rule applies to limits of the form $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ when:',
    options: [
      'Both $f(a)$ and $g(a)$ are defined and nonzero',
      'The limit is of indeterminate form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'L\'Hopital\'s rule applies when the limit is of indeterminate form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$. It allows us to evaluate $\\lim \\frac{f(x)}{g(x)}$ by computing $\\lim \\frac{f\'(x)}{g\'(x)}$ instead.',
  },
      '$g\\'(a) \\neq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'L\'Hopital\'s rule applies when the limit is of indeterminate form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$. It allows us to evaluate $\\lim \\frac{f(x)}{g(x)}$ by computing $\\lim \\frac{f\'(x)}{g\'(x)}$ instead.',
  },
      '$f$ and $g$ are continuous at $a
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'L\'Hopital\'s rule applies when the limit is of indeterminate form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$. It allows us to evaluate $\\lim \\frac{f(x)}{g(x)}$ by computing $\\lim \\frac{f\'(x)}{g\'(x)}$ instead.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'L\'Hopital\'s rule applies when the limit is of indeterminate form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$. It allows us to evaluate $\\lim \\frac{f(x)}{g(x)}$ by computing $\\lim \\frac{f\'(x)}{g\'(x)}$ instead.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using L\'Hopital\'s rule, $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ equals:',
    options: [
      '$1$',
      '$0$',
      '$\\infty$',
      'Does not exist'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is $\\frac{0}{0}$ form. Applying L\'Hopital\'s rule: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For L\'Hopital\'s rule to be valid, which condition must hold?',
    options: [
      '$\\lim_{x \\to a} \\frac{f\\'(x)}{g\\'(x)}$ must exist (or be $\\pm\\infty$)',
      '$f$ and $g$ must be twice differentiable',
      '$f\\'(a)$ and $g\\'(a)$ must both exist',
      '$g(x) \\neq 0$ for all $x$ near $a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'L\'Hopital\'s rule states that if $\\lim \\frac{f\'(x)}{g\'(x)}$ exists (or is $\\pm\\infty$), then $\\lim \\frac{f(x)}{g(x)}$ equals the same value. The converse may fail.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'L\'Hopital\'s rule states that if $\\lim \\frac{f\'(x)}{g\'(x)}$ exists (or is $\\pm\\infty$), then $\\lim \\frac{f(x)}{g(x)}$ equals the same value. The converse may fail.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Use L\'Hopital\'s rule to evaluate $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'This is $\\frac{0}{0}$ form. Applying L\'Hopital\'s rule: $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$ using L\'Hopital\'s rule:',
    options: [
      '$\\infty$',
      '$1$',
      '$0$',
      '$2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is $\\frac{\\infty}{\\infty}$. Apply L\'Hopital twice: $\\lim \\frac{x^2}{e^x} = \\lim \\frac{2x}{e^x} = \\lim \\frac{2}{e^x} = 0$. Exponentials grow faster than polynomials.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Consider $f(x) = x^2\\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$. Then $\\lim_{x \\to 0} \\frac{f(x)}{x}$:',
    options: [
      'Requires L\'Hopital\'s rule to evaluate',
      'Equals $1$',
      'Does not exist',
      'Equals $0$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\frac{f(x)}{x} = x\\sin(1/x)$ for $x \\neq 0$. Since $|\\sin(1/x)| \\leq 1$, we have $|x\\sin(1/x)| \\leq |x| \\to 0$. By the squeeze theorem, the limit is $0$. L\'Hopital\'s rule would be problematic here since $f\'(x)$ oscillates.',
  },
];
