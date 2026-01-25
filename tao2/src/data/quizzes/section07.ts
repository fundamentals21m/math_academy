import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f: X \\to Y$ is continuous and $K \\subseteq X$ is compact, then:',
    options: [
      '$f(K)$ is compact',
      '$f(K)$ is open',
      '$f(K)$ is closed but not necessarily compact',
      '$f^{-1}(K)$ is compact'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuous images of compact sets are compact. This is one of the most important properties relating continuity and compactness.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Extreme Value Theorem states that if $f: K \\to \\mathbf{R}$ is continuous and $K$ is compact, then:',
    options: [
      '$f$ is bounded',
      '$f$ is uniformly continuous',
      'All of the above',
      '$f$ attains its maximum and minimum values',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'On a compact domain, a continuous real-valued function is bounded, attains its max and min, and is uniformly continuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A function $f: X \\to Y$ is uniformly continuous if:',
    options: [
      'For each $x$, for each $\\varepsilon > 0$, there exists $\\delta > 0$ (depending on $x$ and $\\varepsilon$)',
      'For each $\\varepsilon > 0$, there exists $\\delta > 0$ (depending only on $\\varepsilon$) such that $d(x, y) < \\delta \\Rightarrow d(f(x), f(y)) < \\varepsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform continuity requires one $\\delta$ that works for all points, not a different $\\delta$ for each point.',
  },
      '$f$ is bounded',
      '$f$ is Lipschitz',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Uniform continuity requires one $\\delta$ that works for all points, not a different $\\delta$ for each point.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which function is continuous but NOT uniformly continuous on $(0, 1)$?',
    options: [
      '$f(x) = x$',
      '$f(x) = x^2$',
      '$f(x) = \\sin(x)$',
      '$f(x) = 1/x$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is continuous on $(0, 1)$ but not uniformly continuous because it becomes unbounded as $x \\to 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every continuous function on a compact metric space is:',
    options: [
      'Uniformly continuous',
      'Lipschitz continuous',
      'Constant',
      'Differentiable'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A fundamental theorem: continuous functions on compact spaces are automatically uniformly continuous.',
  },
];
