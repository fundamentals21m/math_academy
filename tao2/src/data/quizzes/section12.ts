import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly and each $f_n$ is continuous, then:',
    options: [
      '$f$ is bounded',
      '$f$ is continuous',
      '$f$ is differentiable',
      '$f$ might be discontinuous'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The uniform limit of continuous functions is continuous. This is a key theorem about uniform convergence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = x^n$ on $[0, 1]$ with pointwise limit $f$. Why is $f$ discontinuous at $x = 1$?',
    options: [
      'Because $1^n = 1$ for all $n$, but nearby $x^n \\to 0$',
      'Because the functions $f_n$ are discontinuous',
      'Because the domain is not open',
      'Because the convergence is uniform'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f(1) = 1$ but $f(x) = 0$ for all $x < 1$, creating a jump discontinuity. This shows pointwise limits need not preserve continuity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The statement "uniform limits of continuous functions are continuous" is sometimes called:',
    options: [
      'The Intermediate Value Theorem',
      'The Extreme Value Theorem',
      'The Uniform Limit Theorem',
      'The Weierstrass Theorem'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This result is often called the Uniform Limit Theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f_n$ converges pointwise (but not uniformly) to $f$, and each $f_n$ is continuous, then $f$:',
    options: [
      'Must be continuous',
      'Must be discontinuous',
      'Might or might not be continuous',
      'Must be bounded'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Without uniform convergence, we cannot conclude anything about continuity of the limit. The limit could be continuous or discontinuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To show $f_n$ does NOT converge uniformly to $f$, it suffices to find:',
    options: [
      'A single $x$ where $f_n(x) \\not\\to f(x)$',
      'A sequence $x_n$ such that $|f_n(x_n) - f(x_n)| \\not\\to 0$',
      'That $f$ is discontinuous while each $f_n$ is continuous',
      'Both B and C work'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Both methods work: finding points where the sup doesn\'t go to zero, or using the fact that uniform limits of continuous functions are continuous.',
  },
];
