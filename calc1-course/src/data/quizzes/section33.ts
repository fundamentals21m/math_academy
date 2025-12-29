import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Mean Value Theorem states that if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \\in (a,b)$ with:',
    options: [
      '$f(c) = 0$',
      '$f\'(c) = \\frac{f(b) - f(a)}{b - a}$',
      '$f\'(c) = 0$',
      '$f(c) = f(a)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MVT: there is a point where the instantaneous rate equals the average rate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Rolle\'s Theorem is a special case of MVT when:',
    options: [
      '$f\'(a) = f\'(b)$',
      '$f(a) = f(b)$',
      '$a = b$',
      '$f$ is constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rolle: if $f(a) = f(b)$, then there exists $c$ with $f\'(c) = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f\'(x) = 0$ for all $x$ in an interval, then $f$ is:',
    options: [
      'Increasing',
      'Decreasing',
      'Constant',
      'Undefined'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Zero derivative everywhere implies constant function (by MVT).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f\'(x) > 0$ for all $x$ in $(a, b)$, then $f$ is:',
    options: [
      'Constant on $(a,b)$',
      'Strictly increasing on $[a,b]$',
      'Decreasing on $(a,b)$',
      'Has a minimum in $(a,b)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Positive derivative implies strictly increasing.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $f(x) = x^2$ on $[0, 2]$, MVT guarantees a $c$ with $f\'(c) = \\frac{f(2)-f(0)}{2-0} = 2$. What is $c$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(x) = 2x = 2$ gives $x = 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The MVT requires $f$ to be:',
    options: [
      'Differentiable on $[a, b]$',
      'Continuous on $[a, b]$ and differentiable on $(a, b)$',
      'Twice differentiable',
      'A polynomial'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MVT hypotheses: continuous on closed interval, differentiable on open interior.',
  },
];
