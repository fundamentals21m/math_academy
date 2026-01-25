import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $\\lim_{x \\to a} f(x) = +\\infty$ mean precisely?',
    options: [
      'The function $f$ is unbounded near $a
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The precise definition: $\\lim_{x \\to a} f(x) = +\\infty$ means for every $M > 0$ (no matter how large), there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, we have $f(x) > M$.',
  },
      'The function $f(a) = +\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The precise definition: $\\lim_{x \\to a} f(x) = +\\infty$ means for every $M > 0$ (no matter how large), there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, we have $f(x) > M$.',
  },
      '$f$ is increasing near $a
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The precise definition: $\\lim_{x \\to a} f(x) = +\\infty$ means for every $M > 0$ (no matter how large), there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, we have $f(x) > M$.',
  },
      'For every $M > 0$, there exists $\\delta > 0$ such that $0 < |x - a| < \\delta$ implies $f(x) > M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The precise definition: $\\lim_{x \\to a} f(x) = +\\infty$ means for every $M > 0$ (no matter how large), there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, we have $f(x) > M$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The precise definition: $\\lim_{x \\to a} f(x) = +\\infty$ means for every $M > 0$ (no matter how large), there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, we have $f(x) > M$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} f(x) = +\\infty$ and $\\lim_{x \\to a} g(x) = +\\infty$, what can we say about $\\lim_{x \\to a} (f(x) - g(x))$?',
    options: [
      'It equals $0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The expression $\\infty - \\infty$ is an indeterminate form. Examples: $x^2 - x \\to +\\infty$, $x - x \\to 0$, $x - x^2 \\to -\\infty$, and $x - x\\sin(1/x)$ may not have a limit.',
  },
      'It could be any real number, $+\\infty$, $-\\infty$, or not exist',
      'It equals $+\\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expression $\\infty - \\infty$ is an indeterminate form. Examples: $x^2 - x \\to +\\infty$, $x - x \\to 0$, $x - x^2 \\to -\\infty$, and $x - x\\sin(1/x)$ may not have a limit.',
  },
      'It does not exist',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expression $\\infty - \\infty$ is an indeterminate form. Examples: $x^2 - x \\to +\\infty$, $x - x \\to 0$, $x - x^2 \\to -\\infty$, and $x - x\\sin(1/x)$ may not have a limit.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x) = \\frac{1}{(x-1)^2}$, evaluate $\\lim_{x \\to 1} f(x)$:',
    options: [
      '$+\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'As $x \\to 1$, $(x-1)^2 \\to 0^+$ (always positive), so $\\frac{1}{(x-1)^2} \\to +\\infty$. Both one-sided limits are $+\\infty$, so the limit is $+\\infty$.',
  },
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'As $x \\to 1$, $(x-1)^2 \\to 0^+$ (always positive), so $\\frac{1}{(x-1)^2} \\to +\\infty$. Both one-sided limits are $+\\infty$, so the limit is $+\\infty$.',
  },
      '$-\\infty
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'As $x \\to 1$, $(x-1)^2 \\to 0^+$ (always positive), so $\\frac{1}{(x-1)^2} \\to +\\infty$. Both one-sided limits are $+\\infty$, so the limit is $+\\infty$.',
  },
      'Does not exist (left and right limits differ)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'As $x \\to 1$, $(x-1)^2 \\to 0^+$ (always positive), so $\\frac{1}{(x-1)^2} \\to +\\infty$. Both one-sided limits are $+\\infty$, so the limit is $+\\infty$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement about limits at infinity is correct?',
    options: [
      '$\\lim_{x \\to \\infty} \\sin(x) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $|\\sin(x)| \\leq 1$ for all $x$, we have $|\\sin(x)/x| \\leq 1/|x| \\to 0$ as $x \\to \\infty$. By the squeeze theorem, $\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} = 0$.',
  },
      '$\\lim_{x \\to \\infty} x\\sin(1/x) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $|\\sin(x)| \\leq 1$ for all $x$, we have $|\\sin(x)/x| \\leq 1/|x| \\to 0$ as $x \\to \\infty$. By the squeeze theorem, $\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} = 0$.',
  },
      '$\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $|\\sin(x)| \\leq 1$ for all $x$, we have $|\\sin(x)/x| \\leq 1/|x| \\to 0$ as $x \\to \\infty$. By the squeeze theorem, $\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} = 0$.',
  },
      '$\\lim_{x \\to \\infty} \\sin(x)/\\sin(x) = 1$ proves that $\\lim_{x \\to \\infty} \\sin(x)$ exists',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $|\\sin(x)| \\leq 1$ for all $x$, we have $|\\sin(x)/x| \\leq 1/|x| \\to 0$ as $x \\to \\infty$. By the squeeze theorem, $\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to \\infty} f(x) = L$ (finite), which statement must be true?',
    options: [
      '$f$ is bounded on $\\mathbb{R}$',
      '$f$ is bounded on $[a, \\infty)$ for some $a$',
      '$f$ is monotonic for large $x$',
      '$f$ is uniformly continuous on $\\mathbb{R}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\lim_{x \\to \\infty} f(x) = L$, then for $\\epsilon = 1$, there exists $a$ such that $x > a$ implies $|f(x) - L| < 1$. Thus $|f(x)| < |L| + 1$ for $x > a$, so $f$ is bounded on $(a, \\infty)$.',
  },
];
