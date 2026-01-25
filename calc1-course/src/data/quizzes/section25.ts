import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Uniform continuity on $[a,b]$ means that for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that:',
    options: [
      '$\\delta$ depends on the point $x
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniform continuity: one $\\delta$ works everywhere, not depending on the point.',
  },
      '$\\delta$ works for ALL points $x, y$ in the interval',
      'The function is differentiable',
      '$\\delta = \\varepsilon
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Uniform continuity: one $\\delta$ works everywhere, not depending on the point.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Uniform continuity: one $\\delta$ works everywhere, not depending on the point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every continuous function on a closed bounded interval is:',
    options: [
      'Only pointwise continuous',
      'Uniformly continuous',
      'Discontinuous somewhere',
      'Unbounded',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Heine-Cantor Theorem: continuous on $[a,b]$ implies uniformly continuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $f(x) = 1/x$ on $(0, 1)$ is:',
    options: [
      'Continuous but not uniformly continuous',
      'Uniformly continuous',
      'Discontinuous',
      'Bounded',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$1/x$ is continuous on $(0,1)$ but not uniformly continuous (blows up near 0).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The small-span theorem says that a uniformly continuous function on $[a,b]$:',
    options: [
      'Is unbounded',
      'Is constant',
      'Has large gaps',
      'Has arbitrarily small oscillation on sufficiently small subintervals',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Uniform continuity controls oscillation uniformly across the interval.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Uniform continuity is important for integration because:',
    options: [
      'It guarantees the function is a polynomial',
      'It has no relation to integration',
      'It ensures integrability via approximation by step functions',
      'It makes the function differentiable',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Uniform continuity allows uniform approximation by step functions, proving integrability.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which function is uniformly continuous on $\\mathbb{R}$?',
    options: [
      '$f(x) = e^x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sin x$ is uniformly continuous on $\\mathbb{R}$ (bounded derivative).',
  },
      '$f(x) = \\sin x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sin x$ is uniformly continuous on $\\mathbb{R}$ (bounded derivative).',
  },
      '$f(x) = x^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sin x$ is uniformly continuous on $\\mathbb{R}$ (bounded derivative).',
  },
      '$f(x) = 1/x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sin x$ is uniformly continuous on $\\mathbb{R}$ (bounded derivative).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sin x$ is uniformly continuous on $\\mathbb{R}$ (bounded derivative).',
  },
];
