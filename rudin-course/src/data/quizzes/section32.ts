import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f: (a, b) \\to \\mathbb{R}$ is monotonically increasing, then at each point $x \\in (a, b)$:',
    options: [
      '$f$ is differentiable',
      '$f$ is continuous',
      '$f$ is uniformly continuous',
      'Both $f(x^+)$ and $f(x^-)$ exist, with $f(x^-) \\leq f(x) \\leq f(x^+)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For monotonically increasing $f$, the left and right limits always exist at interior points, and we have $f(x^-) \\leq f(x) \\leq f(x^+)$. The function is continuous at $x$ if and only if $f(x^-) = f(x^+)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For monotonically increasing $f$, the left and right limits always exist at interior points, and we have $f(x^-) \\leq f(x) \\leq f(x^+)$. The function is continuous at $x$ if and only if $f(x^-) = f(x^+)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The set of discontinuities of a monotonic function on $(a, b)$ is:',
    options: [
      'Always finite',
      'Always empty',
      'Possibly uncountable',
      'At most countable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each discontinuity of a monotonic function corresponds to a "jump" which occupies a non-empty open interval in the range. Since disjoint open intervals in $\\mathbb{R}$ can be put in bijection with rationals they contain, there can be at most countably many such jumps.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is strictly increasing on $[a, b]$, then $f^{-1}$:',
    options: [
      'May not exist',
      'Exists and is continuous on $f([a, b])
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A strictly increasing function is injective, so $f^{-1}$ exists on the range. Since $f$ is continuous and strictly increasing on the compact set $[a, b]$, $f([a, b]) = [f(a), f(b)]$, and $f^{-1}$ is also strictly increasing and continuous on this interval.',
  },
      'Exists but may be discontinuous',
      'Exists only if $f$ is differentiable',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A strictly increasing function is injective, so $f^{-1}$ exists on the range. Since $f$ is continuous and strictly increasing on the compact set $[a, b]$, $f([a, b]) = [f(a), f(b)]$, and $f^{-1}$ is also strictly increasing and continuous on this interval.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement about monotonic functions is FALSE?',
    options: [
      'A monotonic function has one-sided limits at every point',
      'A monotonic function is Riemann integrable on any closed bounded interval',
      'A monotonic function is uniformly continuous on any bounded interval',
      'A monotonic function is differentiable almost everywhere',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Consider a monotonic function with infinitely many jump discontinuities accumulating at a point (e.g., $f(x) = \\sum_{n: 1/n < x} 2^{-n}$). Such a function is not uniformly continuous on intervals containing the accumulation point. The other statements are all true.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Let $f$ be increasing on $(a, b)$ and let $E = \\{x : f(x^-) < f(x^+)\\}$. Then:',
    options: [
      '$E$ is finite',
      '$E$ is empty',
      '$\\sum_{x \\in E} (f(x^+) - f(x^-)) \\leq f(b^-) - f(a^+)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The jumps correspond to disjoint intervals in the range of $f$, so the sum of all jump sizes is bounded by the total variation of $f$ on $(a, b)$, which is at most $f(b^-) - f(a^+)$ for an increasing function.',
  },
      '$E$ is uncountable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The jumps correspond to disjoint intervals in the range of $f$, so the sum of all jump sizes is bounded by the total variation of $f$ on $(a, b)$, which is at most $f(b^-) - f(a^+)$ for an increasing function.',
  },
];
