import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 'sec28-q1',
    type: 'multiple-choice',
    question: 'A function $f: E \\to Y$ is continuous at $p \\in E$ if:',
    options: [
      '$f$ is bounded near $p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Continuity at $p$: $f(x)$ is close to $f(p)$ whenever $x$ is close to $p$. Unlike limits, we include $x = p$ and require $f(p)$ to be defined.',
  },
      '$f(p)$ is the maximum of $f$ on $E
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Continuity at $p$: $f(x)$ is close to $f(p)$ whenever $x$ is close to $p$. Unlike limits, we include $x = p$ and require $f(p)$ to be defined.',
  },
      '$f$ is differentiable at $p
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Continuity at $p$: $f(x)$ is close to $f(p)$ whenever $x$ is close to $p$. Unlike limits, we include $x = p$ and require $f(p)$ to be defined.',
  },
      'For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $d_E(x, p) < \\delta$ implies $d_Y(f(x), f(p)) < \\varepsilon
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Continuity at $p$: $f(x)$ is close to $f(p)$ whenever $x$ is close to $p$. Unlike limits, we include $x = p$ and require $f(p)$ to be defined.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Continuity at $p$: $f(x)$ is close to $f(p)$ whenever $x$ is close to $p$. Unlike limits, we include $x = p$ and require $f(p)$ to be defined.',
  },
  {
    id: 'sec28-q2',
    type: 'multiple-choice',
    question: 'If $p$ is a limit point of $E$, then $f$ is continuous at $p$ if and only if:',
    options: [
      '$\\lim_{x \\to p} f(x) = f(p)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At a limit point, continuity is equivalent to: the limit exists and equals the function value. $\\lim_{x \\to p} f(x) = f(p)$ combines the limit definition with the value at $p$.',
  },
      '$\\lim_{x \\to p} f(x)$ does not exist',
      '$f(p) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At a limit point, continuity is equivalent to: the limit exists and equals the function value. $\\lim_{x \\to p} f(x) = f(p)$ combines the limit definition with the value at $p$.',
  },
      '$f$ is bounded',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At a limit point, continuity is equivalent to: the limit exists and equals the function value. $\\lim_{x \\to p} f(x) = f(p)$ combines the limit definition with the value at $p$.',
  },
  {
    id: 'sec28-q3',
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are continuous at $p$, then $f + g$ is:',
    options: [
      'Discontinuous at $p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sums (and products, quotients with nonzero denominator) of continuous functions are continuous. This follows from the corresponding limit laws.',
  },
      'Continuous only if $f = g
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sums (and products, quotients with nonzero denominator) of continuous functions are continuous. This follows from the corresponding limit laws.',
  },
      'Not defined at $p
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sums (and products, quotients with nonzero denominator) of continuous functions are continuous. This follows from the corresponding limit laws.',
  },
      'Continuous at $p
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sums (and products, quotients with nonzero denominator) of continuous functions are continuous. This follows from the corresponding limit laws.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sums (and products, quotients with nonzero denominator) of continuous functions are continuous. This follows from the corresponding limit laws.',
  },
  {
    id: 'sec28-q4',
    type: 'multiple-choice',
    question: 'The composition of continuous functions is:',
    options: [
      'Not necessarily continuous',
      'Always differentiable',
      'Continuous',
      'Defined only for polynomial functions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $f$ is continuous at $p$ and $g$ is continuous at $f(p)$, then $g \\circ f$ is continuous at $p$. Composition preserves continuity.',
  },
  {
    id: 'sec28-q5',
    type: 'multiple-choice',
    question: 'A function $f: X \\to Y$ is continuous (on all of $X$) if and only if:',
    options: [
      'The image of every open set in $X$ is open in $Y
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The topological characterization: $f$ is continuous iff $f^{-1}(V)$ is open in $X$ whenever $V$ is open in $Y$. This global definition is equivalent to pointwise continuity.',
  },
      'The preimage of every open set in $Y$ is open in $X
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The topological characterization: $f$ is continuous iff $f^{-1}(V)$ is open in $X$ whenever $V$ is open in $Y$. This global definition is equivalent to pointwise continuity.',
  },
      '$f$ is bounded',
      '$f$ is one-to-one',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The topological characterization: $f$ is continuous iff $f^{-1}(V)$ is open in $X$ whenever $V$ is open in $Y$. This global definition is equivalent to pointwise continuity.',
  },
];
