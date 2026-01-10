import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Intermediate Value Theorem requires that the domain be:',
    options: [
      'Compact',
      'Connected',
      'Open',
      'Bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The IVT states that continuous images of connected sets are connected. In $\\mathbb{R}$, connected sets are intervals, so a continuous function on an interval takes all values between any two of its values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f: [0, 1] \\to \\mathbb{R}$ is continuous with $f(0) = -1$ and $f(1) = 1$, which statement must be true?',
    options: [
      'There exists exactly one $c \\in (0, 1)$ with $f(c) = 0$',
      'There exists at least one $c \\in (0, 1)$ with $f(c) = 0$',
      '$f$ is monotonic on $[0, 1]$',
      '$f$ is differentiable at some point in $(0, 1)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the IVT, since $f(0) < 0 < f(1)$ and $f$ is continuous, there exists at least one $c \\in (0, 1)$ where $f(c) = 0$. There may be multiple such points (consider $f(x) = \\sin(10\\pi x) + 2x - 1$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A continuous function $f: \\mathbb{R} \\to \\mathbb{R}$ maps connected sets to:',
    options: [
      'Open sets',
      'Closed sets',
      'Connected sets',
      'Compact sets'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 4.22 in Rudin: If $f$ is continuous and $E$ is connected, then $f(E)$ is connected. This is the topological generalization of the Intermediate Value Theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which function demonstrates that the converse of the IVT is false?',
    options: [
      '$f(x) = x^3$',
      '$f(x) = \\begin{cases} x & x < 0 \\\\ x + 1 & x \\geq 0 \\end{cases}$',
      '$f(x) = \\begin{cases} \\sin(1/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$',
      '$f(x) = |x|$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The topologist\'s sine curve $f(x) = \\sin(1/x)$ (extended by $f(0) = 0$) satisfies the intermediate value property on any interval containing $0$, but is discontinuous at $x = 0$. This shows having the IVP does not imply continuity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: [a, b] \\to [a, b]$ is continuous, then:',
    options: [
      '$f$ has exactly one fixed point',
      '$f$ has at least one fixed point',
      '$f$ may have no fixed points',
      '$f$ is a contraction mapping'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Consider $g(x) = f(x) - x$. Then $g(a) = f(a) - a \\geq 0$ (since $f(a) \\geq a$) and $g(b) = f(b) - b \\leq 0$ (since $f(b) \\leq b$). By the IVT, there exists $c \\in [a, b]$ with $g(c) = 0$, i.e., $f(c) = c$.',
  },
];
