import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: X \\to \\mathbb{R}$ is monotonically increasing if for all $x, y \\in X$:',
    options: [
      '$x < y$ implies $f(x) < f(y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means $x \\leq y \\Rightarrow f(x) \\leq f(y)$. This is sometimes called "non-decreasing." Strict increase requires $x < y \\Rightarrow f(x) < f(y)$.',
  },
      '$f(x) \\leq f(y)$ for all $x, y
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means $x \\leq y \\Rightarrow f(x) \\leq f(y)$. This is sometimes called "non-decreasing." Strict increase requires $x < y \\Rightarrow f(x) < f(y)$.',
  },
      '$x \\leq y$ implies $f(x) \\leq f(y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means $x \\leq y \\Rightarrow f(x) \\leq f(y)$. This is sometimes called "non-decreasing." Strict increase requires $x < y \\Rightarrow f(x) < f(y)$.',
  },
      '$x < y$ implies $f(x) > f(y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means $x \\leq y \\Rightarrow f(x) \\leq f(y)$. This is sometimes called "non-decreasing." Strict increase requires $x < y \\Rightarrow f(x) < f(y)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means $x \\leq y \\Rightarrow f(x) \\leq f(y)$. This is sometimes called "non-decreasing." Strict increase requires $x < y \\Rightarrow f(x) < f(y)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f: (a,b) \\to \\mathbb{R}$ is monotonically increasing, then at each point $c \\in (a,b)$:',
    options: [
      '$f$ must be differentiable',
      '$f$ must be continuous',
      'Both one-sided limits $\\lim_{x \\to c^-} f(x)$ and $\\lim_{x \\to c^+} f(x)$ exist',
      '$f$ must have a local maximum or minimum',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Monotonic functions have one-sided limits at every interior point. They may have jump discontinuities but cannot oscillate.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a monotonically increasing function $f$ on $(a,b)$, the set of discontinuities is:',
    options: [
      'Empty',
      'Uncountable',
      'Equal to $(a,b)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A monotonic function can only have jump discontinuities, and there can be at most countably many of them (each jump corresponds to a rational in a certain interval).',
  },
      'At most countable',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A monotonic function can only have jump discontinuities, and there can be at most countably many of them (each jump corresponds to a rational in a certain interval).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is strictly increasing and continuous on $[a,b]$, then $f^{-1}$ exists and is:',
    options: [
      'Strictly increasing and continuous on $[f(a), f(b)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A strictly increasing continuous function is bijective onto its range, and its inverse is also strictly increasing and continuous.',
  },
      'Strictly decreasing on $[f(a), f(b)]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A strictly increasing continuous function is bijective onto its range, and its inverse is also strictly increasing and continuous.',
  },
      'Continuous but not monotonic',
      'Defined only on a proper subset of $[f(a), f(b)]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A strictly increasing continuous function is bijective onto its range, and its inverse is also strictly increasing and continuous.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A strictly increasing continuous function is bijective onto its range, and its inverse is also strictly increasing and continuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x) = x^3$ on $\\mathbb{R}$ is:',
    options: [
      'Strictly increasing',
      'Monotonically increasing but not strictly',
      'Neither increasing nor decreasing',
      'Monotonically decreasing',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $x < y$, we have $x^3 < y^3$ (can verify by factoring $y^3 - x^3$). So $f(x) = x^3$ is strictly increasing on $\\mathbb{R}$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f(x) = 2x + 3$ (strictly increasing) and $g(x) = -x + 5$ (strictly decreasing), how many of these compositions are strictly increasing: $f \\circ f$, $f \\circ g$, $g \\circ f$, $g \\circ g$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 4, precision: 0 },
    difficulty: 'medium',
    explanation: '$f \\circ f$: increasing $\\circ$ increasing = increasing. $f \\circ g$: increasing $\\circ$ decreasing = decreasing. $g \\circ f$: decreasing $\\circ$ increasing = decreasing. $g \\circ g$: decreasing $\\circ$ decreasing = increasing. So 2 are increasing.',
  },
];
