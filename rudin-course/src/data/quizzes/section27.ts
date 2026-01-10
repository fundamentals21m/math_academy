import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 'sec27-q1',
    type: 'multiple-choice',
    question: 'Let $f: E \\to \\mathbb{R}$ and $p$ be a limit point of $E$. We say $\\lim_{x \\to p} f(x) = q$ if:',
    options: [
      '$f(p) = q$',
      'For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $0 < |x - p| < \\delta$ and $x \\in E$ implies $|f(x) - q| < \\varepsilon$',
      '$f$ is continuous at $p$',
      '$q$ is in the range of $f$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $\\varepsilon$-$\\delta$ definition of limit: $f(x)$ can be made arbitrarily close to $q$ by taking $x$ sufficiently close to (but not equal to) $p$.',
  },
  {
    id: 'sec27-q2',
    type: 'multiple-choice',
    question: 'The condition $0 < |x - p|$ in the limit definition means:',
    options: [
      '$x$ must be positive',
      '$x$ must equal $p$',
      '$x \\neq p$ (we exclude the point $p$ itself)',
      '$|x - p|$ must be an integer'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The strict inequality $0 < |x - p|$ means $x \\neq p$. The limit depends only on the behavior of $f$ near $p$, not at $p$. Indeed, $f(p)$ need not even be defined.',
  },
  {
    id: 'sec27-q3',
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to p} f(x) = A$ and $\\lim_{x \\to p} g(x) = B$, then $\\lim_{x \\to p} (f(x) + g(x)) =$',
    options: [
      '$AB$',
      '$A/B$',
      '$A + B$',
      'Does not exist'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits respect arithmetic operations: $\\lim(f + g) = \\lim f + \\lim g$, provided both limits exist. Similarly for products and quotients (when denominator limit is nonzero).',
  },
  {
    id: 'sec27-q4',
    type: 'multiple-choice',
    question: 'The sequential characterization of limits: $\\lim_{x \\to p} f(x) = q$ if and only if:',
    options: [
      '$f(p) = q$',
      'For every sequence $\\{p_n\\} \\to p$ with $p_n \\neq p$, we have $f(p_n) \\to q$',
      '$f$ is bounded near $p$',
      '$f$ is monotonic near $p$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $\\varepsilon$-$\\delta$ limit equals $q$ iff for every sequence $p_n \\to p$ (with $p_n \\neq p$), the sequence $f(p_n) \\to q$. This links limits of functions to limits of sequences.',
  },
  {
    id: 'sec27-q5',
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to p} f(x)$ exists, it is:',
    options: [
      'Not necessarily unique',
      'Unique',
      'Always equal to $f(p)$',
      'Always rational'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Limits, when they exist, are unique. If $\\lim_{x \\to p} f(x) = q_1$ and $= q_2$, then for any $\\varepsilon$, $|q_1 - q_2| \\leq |q_1 - f(x)| + |f(x) - q_2| < 2\\varepsilon$, so $q_1 = q_2$.',
  },
];
