import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Let $f: X \\to Y$ be a function and $x_0$ be a limit point of $X$. We say $\\lim_{x \\to x_0} f(x) = L$ if:',
    options: [
      'For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $0 < d(x, x_0) < \\delta$ implies $d(f(x), L) < \\varepsilon
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The limit can be characterized by $\\varepsilon$-$\\delta$ or by sequences. Note: $x \\neq x_0$ is required (hence $0 < d(x, x_0)$).',
  },
      '$f(x_0) = L
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit can be characterized by $\\varepsilon$-$\\delta$ or by sequences. Note: $x \\neq x_0$ is required (hence $0 < d(x, x_0)$).',
  },
      'Both A and C are equivalent',
      'For every sequence $x_n \\to x_0$, we have $f(x_n) \\to L
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit can be characterized by $\\varepsilon$-$\\delta$ or by sequences. Note: $x \\neq x_0$ is required (hence $0 < d(x, x_0)$).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit can be characterized by $\\varepsilon$-$\\delta$ or by sequences. Note: $x \\neq x_0$ is required (hence $0 < d(x, x_0)$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to x_0} f(x) = L$ and $f$ is continuous at $x_0$, then:',
    options: [
      '$L$ might not equal $f(x_0)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Continuity at $x_0$ means exactly that $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
  },
      '$L = f(x_0)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity at $x_0$ means exactly that $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
  },
      '$f$ must be differentiable at $x_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity at $x_0$ means exactly that $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
  },
      'The limit does not exist',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity at $x_0$ means exactly that $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A limit point (or accumulation point) of a set $E$ is a point $x_0$ such that:',
    options: [
      '$x_0 \\in E
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A limit point has other points of $E$ arbitrarily close to it. It need not be in $E$ itself.',
  },
      '$x_0$ is an interior point of $E
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A limit point has other points of $E$ arbitrarily close to it. It need not be in $E$ itself.',
  },
      '$x_0$ is a boundary point of $E
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A limit point has other points of $E$ arbitrarily close to it. It need not be in $E$ itself.',
  },
      'Every neighborhood of $x_0$ contains a point of $E$ different from $x_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A limit point has other points of $E$ arbitrarily close to it. It need not be in $E$ itself.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A limit point has other points of $E$ arbitrarily close to it. It need not be in $E$ itself.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to x_0} f(x) = L$ and $\\lim_{x \\to x_0} g(x) = M$, then $\\lim_{x \\to x_0}(f(x) + g(x)) = $',
    options: [
      '$L + M
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limits respect addition: the limit of a sum is the sum of the limits.',
  },
      '$L \\cdot M
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits respect addition: the limit of a sum is the sum of the limits.',
  },
      '$L - M
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits respect addition: the limit of a sum is the sum of the limits.',
  },
      'Cannot be determined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits respect addition: the limit of a sum is the sum of the limits.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x) = \\sin(1/x)$ for $x \\neq 0$:',
    options: [
      'Does not have a limit as $x \\to 0$ because it oscillates',
      'Has a limit as $x \\to 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often as $x \\to 0$, so no limit exists.',
  },
      'Has limit $1$ as $x \\to 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often as $x \\to 0$, so no limit exists.',
  },
      'Has limit $0$ as $x \\to 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often as $x \\to 0$, so no limit exists.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often as $x \\to 0$, so no limit exists.',
  },
];
