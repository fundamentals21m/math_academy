import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $T: V \\to W$ is a linear transformation if it satisfies:',
    options: [
      '$T(x + y) = T(x) + T(y)$ only',
      '$T(cx) = cT(x)$ only',
      '$T(x) = x$ for all $x$',
      'Both $T(x + y) = T(x) + T(y)$ and $T(cx) = cT(x)$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A linear transformation must satisfy both additivity $T(x + y) = T(x) + T(y)$ and homogeneity $T(cx) = cT(x)$ for all elements and scalars.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does a linear transformation $T$ map the zero element of $V$ to?',
    options: [
      'The zero element of $W$',
      'Any element of $W$',
      'The identity element',
      'It is undefined'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For any linear transformation, $T(0) = T(0 \\cdot x) = 0 \\cdot T(x) = 0$. The zero of $V$ always maps to the zero of $W$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The null space (kernel) of a linear transformation $T: V \\to W$ is:',
    options: [
      'The set of all outputs of $T$',
      'The set of all $x$ such that $T(x) = 0$',
      'The set $\\{0\\}$ only',
      'The entire space $V$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The null space $N(T) = \\{x \\in V : T(x) = 0\\}$ consists of all elements that $T$ maps to zero. It is always a subspace of $V$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is a linear transformation?',
    options: [
      '$T(x) = x + 1$ on $\\mathbb{R}$',
      '$T(x) = x^2$ on $\\mathbb{R}$',
      '$T(f) = f\'$ (differentiation) on differentiable functions',
      '$T(x) = |x|$ on $\\mathbb{R}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiation is linear because $(f + g)\' = f\' + g\'$ and $(cf)\' = cf\'$. The others fail: $T(x) = x + 1$ fails $T(0) = 0$; $T(x) = x^2$ fails $(2x)^2 \\neq 2(x^2)$; $|x|$ fails $|-x| = |x| \\neq -|x|$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The range $T(V)$ of a linear transformation $T: V \\to W$ is:',
    options: [
      'Always equal to $W$',
      'Always $\\{0\\}$',
      'A subspace of $V$',
      'A subspace of $W$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 2.1 states that the range $T(V)$ of any linear transformation is a subspace of $W$. It may or may not equal all of $W$.',
  },
];
