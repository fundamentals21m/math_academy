import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: K \\to \\mathbb{R}$ is uniformly continuous on a compact set $K$ if and only if:',
    options: [
      'It is continuous at each point of $K$',
      'It is bounded on $K$',
      'It is differentiable on $K$',
      'It has a continuous derivative on $K$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Rudin\'s Theorem 4.19 states that if $K$ is compact and $f: K \\to \\mathbb{R}$ is continuous, then $f$ is uniformly continuous on $K$. The key insight is that continuity on a compact set automatically implies uniform continuity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which function is NOT uniformly continuous on $(0, 1)$?',
    options: [
      '$f(x) = x^2$',
      '$f(x) = \\sin(x)$',
      '$f(x) = \\frac{1}{x}$',
      '$f(x) = \\sqrt{x}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\frac{1}{x}$ is not uniformly continuous on $(0, 1)$ because as $x \\to 0^+$, the function grows without bound. For any $\\delta > 0$, we can find points $x, y$ with $|x - y| < \\delta$ but $|f(x) - f(y)|$ arbitrarily large near $0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The definition of uniform continuity differs from pointwise continuity because:',
    options: [
      'The function must be bounded',
      'The choice of $\\delta$ depends only on $\\epsilon$, not on the point',
      'The function must be differentiable',
      'The domain must be an interval'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In uniform continuity, given $\\epsilon > 0$, we find $\\delta > 0$ such that $|x - y| < \\delta$ implies $|f(x) - f(y)| < \\epsilon$ for ALL pairs $x, y$. The $\\delta$ works uniformly across the entire domain, independent of the particular point.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is uniformly continuous on $(a, b)$, then:',
    options: [
      '$f$ can be extended to a continuous function on $[a, b]$',
      '$f$ must be bounded on $(a, b)$',
      '$f$ must be differentiable on $(a, b)$',
      'Both A and B are true'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If $f$ is uniformly continuous on $(a, b)$, then $\\lim_{x \\to a^+} f(x)$ and $\\lim_{x \\to b^-} f(x)$ both exist (by the Cauchy criterion applied to sequences). Thus $f$ extends continuously to $[a, b]$, and continuous functions on compact sets are bounded.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Let $f(x) = x \\sin(1/x)$ for $x \\neq 0$. On which set is $f$ uniformly continuous?',
    options: [
      '$(0, 1)$',
      '$(0, \\infty)$',
      '$[1, \\infty)$',
      '$f$ is not uniformly continuous on any interval'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'On $[1, \\infty)$, we have $|f\'(x)| = |\\sin(1/x) - (1/x)\\cos(1/x)| \\leq 1 + 1 = 2$. A function with bounded derivative on an interval is Lipschitz, hence uniformly continuous. On $(0, 1)$, the oscillations near $0$ prevent uniform continuity.',
  },
];
