import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A family $\\mathscr{F}$ of functions on $E$ is equicontinuous if:',
    options: [
      'Each function in $\\mathscr{F}$ is uniformly continuous',
      'For every $\\epsilon > 0$, there exists $\\delta > 0$ such that $|x - y| < \\delta$ implies $|f(x) - f(y)| < \\epsilon$ for ALL $f \\in \\mathscr{F}$',
      'The family is uniformly bounded',
      'The family has a convergent subsequence'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Equicontinuity means the same $\\delta$ works for ALL functions in the family simultaneously. This is stronger than each function being merely uniformly continuous.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Arzel\\`a-Ascoli Theorem states that a sequence $\\{f_n\\}$ of functions on a compact set $K$ has a uniformly convergent subsequence if:',
    options: [
      '$\\{f_n\\}$ is pointwise bounded',
      '$\\{f_n\\}$ is uniformly bounded and equicontinuous',
      '$\\{f_n\\}$ converges pointwise',
      'Each $f_n$ is differentiable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arzel\\`a-Ascoli (Theorem 7.25): If $K$ is compact, $\\{f_n\\}$ is pointwise bounded and equicontinuous, then $\\{f_n\\}$ has a uniformly convergent subsequence. The limit is automatically continuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The family $\\{f_n(x) = x^n : n \\in \\mathbb{N}\\}$ on $[0, 1]$ is:',
    options: [
      'Equicontinuous',
      'Not equicontinuous (fails near $x = 1$)',
      'Uniformly bounded but not pointwise bounded',
      'Has no convergent subsequence'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near $x = 1$, $f_n(x) = x^n$ drops from $1$ to $0$ over increasingly small intervals as $n \\to \\infty$. For fixed $\\epsilon < 1$, no single $\\delta$ works for all $n$ near $x = 1$. The family is not equicontinuous.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\{f_n\\}$ satisfies $|f_n\'(x)| \\leq M$ for all $n$ and $x \\in [a, b]$, then $\\{f_n\\}$ is:',
    options: [
      'Pointwise bounded',
      'Equicontinuous',
      'Uniformly convergent',
      'Differentiable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A uniform bound on derivatives gives equicontinuity: $|f_n(x) - f_n(y)| \\leq M|x - y|$ for all $n$ (by MVT). So for $\\epsilon > 0$, take $\\delta = \\epsilon/M$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Arzel\\`a-Ascoli Theorem is the function-space analogue of:',
    options: [
      'The Intermediate Value Theorem',
      'The Mean Value Theorem',
      'The Bolzano-Weierstrass Theorem (bounded sequences have convergent subsequences)',
      'The Fundamental Theorem of Calculus'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bolzano-Weierstrass says bounded sequences in $\\mathbb{R}^n$ have convergent subsequences. Arzel\\`a-Ascoli is the analogue for function spaces: bounded + equicontinuous families have uniformly convergent subsequences.',
  },
];
