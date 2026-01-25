import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The right-hand limit $\\lim_{x \\to a^+} f(x) = L$ means:',
    options: [
      'For every $\\epsilon > 0$, there exists $\\delta > 0$ such that $a < x < a + \\delta$ implies $|f(x) - L| < \\epsilon$',
      'For every $\\epsilon > 0$, there exists $\\delta > 0$ such that $a - \\delta < x < a$ implies $|f(x) - L| < \\epsilon$',
      '$f(a) = L$',
      'For every $\\epsilon > 0$, there exists $\\delta > 0$ such that $|x - a| < \\delta$ implies $|f(x) - L| < \\epsilon$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The right-hand limit considers only values $x > a$ approaching $a$ from the right, hence $a < x < a + \\delta$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The two-sided limit $\\lim_{x \\to a} f(x) = L$ exists if and only if:',
    options: [
      '$\\lim_{x \\to a^+} f(x)$ exists',
      '$\\lim_{x \\to a^-} f(x)$ exists',
      'Both one-sided limits exist and are equal',
      'At least one one-sided limit exists',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The two-sided limit exists iff both the left and right limits exist and $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x) = |x|/x$ when $x \\neq 0$, what are the one-sided limits at $0$?',
    options: [
      '$\\lim_{x \\to 0^+} f(x) = 1$ and $\\lim_{x \\to 0^-} f(x) = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $x > 0$: $|x|/x = x/x = 1$. For $x < 0$: $|x|/x = -x/x = -1$. So right limit is $1$, left limit is $-1$.',
  },
      '$\\lim_{x \\to 0^+} f(x) = 1$ and $\\lim_{x \\to 0^-} f(x) = -1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $x > 0$: $|x|/x = x/x = 1$. For $x < 0$: $|x|/x = -x/x = -1$. So right limit is $1$, left limit is $-1$.',
  },
      '$\\lim_{x \\to 0^+} f(x) = -1$ and $\\lim_{x \\to 0^-} f(x) = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $x > 0$: $|x|/x = x/x = 1$. For $x < 0$: $|x|/x = -x/x = -1$. So right limit is $1$, left limit is $-1$.',
  },
      'Neither one-sided limit exists',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $x > 0$: $|x|/x = x/x = 1$. For $x < 0$: $|x|/x = -x/x = -1$. So right limit is $1$, left limit is $-1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $f(x) = \\lfloor x \\rfloor$ (the floor function), what is $\\lim_{x \\to 3^-} f(x)$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'As $x$ approaches $3$ from below (e.g., $2.9, 2.99, 2.999, \\ldots$), $\\lfloor x \\rfloor = 2$. So $\\lim_{x \\to 3^-} \\lfloor x \\rfloor = 2$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For the same floor function $f(x) = \\lfloor x \\rfloor$, what is $\\lim_{x \\to 3^+} f(x)$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'As $x$ approaches $3$ from above (e.g., $3.1, 3.01, 3.001, \\ldots$), $\\lfloor x \\rfloor = 3$. So $\\lim_{x \\to 3^+} \\lfloor x \\rfloor = 3$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a^+} f(x) = L^+$ and $\\lim_{x \\to a^-} f(x) = L^-$ with $L^+ \\neq L^-$, then $f$ has:',
    options: [
      'A removable discontinuity at $a$',
      'No discontinuity at $a$',
      'An essential discontinuity at $a$',
      'A jump discontinuity at $a$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When both one-sided limits exist but are unequal, the function has a jump discontinuity at that point.',
  },
];
