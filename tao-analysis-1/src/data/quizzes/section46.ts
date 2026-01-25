import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: X \\to \\mathbb{R}$ is uniformly continuous if for every $\\epsilon > 0$, there exists $\\delta > 0$ such that for all $x, y \\in X$:',
    options: [
      '$|x - y| < \\delta$ implies $|f(x) - f(y)| < \\epsilon$',
      '$|f(x) - f(y)| < \\delta$ implies $|x - y| < \\epsilon$',
      '$|x - y| < \\epsilon$ implies $|f(x) - f(y)| < \\delta$',
      'For each $x$, there exists $\\delta_x$ such that $|x - y| < \\delta_x$ implies $|f(x) - f(y)| < \\epsilon$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Uniform continuity means $\\delta$ depends only on $\\epsilon$, not on the point. The same $\\delta$ works for all points in the domain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The key difference between continuity and uniform continuity is:',
    options: [
      'Continuous functions are defined on open sets; uniformly continuous on closed sets',
      'Uniform continuity implies differentiability',
      'For continuity, $\\delta$ may depend on $x$; for uniform continuity, $\\delta$ depends only on $\\epsilon
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In ordinary continuity, $\\delta$ can vary with the point $x$. Uniform continuity requires a single $\\delta$ that works uniformly across the entire domain.',
  },
      'Continuous functions are bounded; uniformly continuous functions are unbounded',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In ordinary continuity, $\\delta$ can vary with the point $x$. Uniform continuity requires a single $\\delta$ that works uniformly across the entire domain.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $f(x) = 1/x$ on $(0, 1]$ is:',
    options: [
      'Uniformly continuous',
      'Continuous but not uniformly continuous',
      'Neither continuous nor uniformly continuous',
      'Uniformly continuous only on $[1/2, 1]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is continuous on $(0,1]$, but near $0$ the function grows without bound, so no single $\\delta$ works for all points. It is not uniformly continuous.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is continuous on $(0,1]$, but near $0$ the function grows without bound, so no single $\\delta$ works for all points. It is not uniformly continuous.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f: [a,b] \\to \\mathbb{R}$ is continuous on the closed bounded interval $[a,b]$, then $f$ is:',
    options: [
      'Differentiable',
      'Uniformly continuous',
      'Lipschitz continuous',
      'Constant',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is a fundamental theorem: every continuous function on a compact set (like $[a,b]$) is uniformly continuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function $f$ is Lipschitz continuous with constant $K$ if $|f(x) - f(y)| \\leq K|x - y|$ for all $x, y$. Lipschitz continuity implies:',
    options: [
      'Differentiability',
      'That $f$ is bounded',
      'Uniform continuity',
      'That $f$ is monotonic',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lipschitz continuity implies uniform continuity: given $\\epsilon$, take $\\delta = \\epsilon/K$. But uniform continuity does not imply Lipschitz (e.g., $\\sqrt{x}$ on $[0,1]$).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The function $f(x) = x^2$ on $\\mathbb{R}$ is:',
    options: [
      'Uniformly continuous',
      'Lipschitz continuous',
      'Discontinuous at some points',
      'Continuous but not uniformly continuous',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$f(x) = x^2$ is continuous everywhere. But $|f(x) - f(y)| = |x+y||x-y|$, so as $|x|, |y| \\to \\infty$, we need smaller $\\delta$ for the same $\\epsilon$. Not uniformly continuous on $\\mathbb{R}$.',
  },
];
