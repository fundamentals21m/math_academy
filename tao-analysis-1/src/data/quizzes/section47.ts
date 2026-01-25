import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The statement $\\lim_{x \\to \\infty} f(x) = L$ means that for every $\\epsilon > 0$, there exists $M > 0$ such that:',
    options: [
      '$|x| > M$ implies $|f(x) - L| < \\epsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the limit as $x \\to +\\infty$, we require that for sufficiently large $x$ (i.e., $x > M$), $f(x)$ is within $\\epsilon$ of $L$.',
  },
      '$x > M$ implies $f(x) > L
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For the limit as $x \\to +\\infty$, we require that for sufficiently large $x$ (i.e., $x > M$), $f(x)$ is within $\\epsilon$ of $L$.',
  },
      '$|f(x)| > M$ implies $|x - L| < \\epsilon
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For the limit as $x \\to +\\infty$, we require that for sufficiently large $x$ (i.e., $x > M$), $f(x)$ is within $\\epsilon$ of $L$.',
  },
      '$x > M$ implies $|f(x) - L| < \\epsilon
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For the limit as $x \\to +\\infty$, we require that for sufficiently large $x$ (i.e., $x > M$), $f(x)$ is within $\\epsilon$ of $L$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For the limit as $x \\to +\\infty$, we require that for sufficiently large $x$ (i.e., $x > M$), $f(x)$ is within $\\epsilon$ of $L$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The horizontal asymptote of $f(x) = \\frac{2x + 1}{x - 3}$ as $x \\to \\infty$ is:',
    options: [
      '$y = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Divide numerator and denominator by $x$: $\\frac{2 + 1/x}{1 - 3/x} \\to \\frac{2}{1} = 2$ as $x \\to \\infty$. The horizontal asymptote is $y = 2$.',
  },
      '$y = 2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Divide numerator and denominator by $x$: $\\frac{2 + 1/x}{1 - 3/x} \\to \\frac{2}{1} = 2$ as $x \\to \\infty$. The horizontal asymptote is $y = 2$.',
  },
      '$y = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Divide numerator and denominator by $x$: $\\frac{2 + 1/x}{1 - 3/x} \\to \\frac{2}{1} = 2$ as $x \\to \\infty$. The horizontal asymptote is $y = 2$.',
  },
      '$y = 3
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Divide numerator and denominator by $x$: $\\frac{2 + 1/x}{1 - 3/x} \\to \\frac{2}{1} = 2$ as $x \\to \\infty$. The horizontal asymptote is $y = 2$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Divide numerator and denominator by $x$: $\\frac{2 + 1/x}{1 - 3/x} \\to \\frac{2}{1} = 2$ as $x \\to \\infty$. The horizontal asymptote is $y = 2$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\lim_{x \\to \\infty} \\frac{3x^2 + x}{x^2 + 1}$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'Divide by $x^2$: $\\frac{3 + 1/x}{1 + 1/x^2} \\to \\frac{3}{1} = 3$ as $x \\to \\infty$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to \\infty} f(x) = L$ and $\\lim_{x \\to -\\infty} f(x) = M$ with $L \\neq M$, then $f$ has:',
    options: [
      'One horizontal asymptote',
      'No horizontal asymptotes',
      'Two different horizontal asymptotes',
      'A vertical asymptote',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function approaches different values as $x \\to +\\infty$ and $x \\to -\\infty$, giving two distinct horizontal asymptotes $y = L$ and $y = M$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The limit $\\lim_{x \\to \\infty} \\sin(x)$:',
    options: [
      'Equals $0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The function $\\sin(x)$ oscillates between $-1$ and $1$ forever and does not approach any single value as $x \\to \\infty$.',
  },
      'Equals $1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The function $\\sin(x)$ oscillates between $-1$ and $1$ forever and does not approach any single value as $x \\to \\infty$.',
  },
      'Equals $\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The function $\\sin(x)$ oscillates between $-1$ and $1$ forever and does not approach any single value as $x \\to \\infty$.',
  },
      'Does not exist',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The function $\\sin(x)$ oscillates between $-1$ and $1$ forever and does not approach any single value as $x \\to \\infty$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'We write $\\lim_{x \\to \\infty} f(x) = \\infty$ if for every $N > 0$, there exists $M > 0$ such that:',
    options: [
      '$x > M$ implies $f(x) > N
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The function tends to infinity means $f(x)$ eventually exceeds any prescribed bound $N$ when $x$ is large enough (greater than some $M$).',
  },
      '$x > M$ implies $|f(x)| < N
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function tends to infinity means $f(x)$ eventually exceeds any prescribed bound $N$ when $x$ is large enough (greater than some $M$).',
  },
      '$f(x) > N$ implies $x > M
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function tends to infinity means $f(x)$ eventually exceeds any prescribed bound $N$ when $x$ is large enough (greater than some $M$).',
  },
      '$x > N$ implies $f(x) > M
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function tends to infinity means $f(x)$ eventually exceeds any prescribed bound $N$ when $x$ is large enough (greater than some $M$).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function tends to infinity means $f(x)$ eventually exceeds any prescribed bound $N$ when $x$ is large enough (greater than some $M$).',
  },
];
