import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 'sec04-q1',
    type: 'multiple-choice',
    question: 'The extended real number system is defined as:',
    options: [
      '$\\mathbb{R} \\cup \\{i, -i\\}$',
      '$\\mathbb{R} \\cup \\{+\\infty, -\\infty\\}$',
      'All complex numbers with real part in $\\mathbb{R}$',
      'The closure of $\\mathbb{R}$ under limits'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The extended real numbers add two symbols $+\\infty$ and $-\\infty$ to $\\mathbb{R}$, with the convention that $-\\infty < x < +\\infty$ for all $x \\in \\mathbb{R}$.',
  },
  {
    id: 'sec04-q2',
    type: 'multiple-choice',
    question: 'In the extended reals, which expression is NOT defined?',
    options: [
      '$\\infty + \\infty$',
      '$\\infty \\cdot \\infty$',
      '$\\infty - \\infty$',
      '$x + \\infty$ for $x \\in \\mathbb{R}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The expression $\\infty - \\infty$ is indeterminate and left undefined. Similarly, $0 \\cdot \\infty$ and $\\infty/\\infty$ are undefined. However, $\\infty + \\infty = \\infty$, $\\infty \\cdot \\infty = \\infty$, and $x + \\infty = \\infty$ for real $x$.',
  },
  {
    id: 'sec04-q3',
    type: 'multiple-choice',
    question: 'In the extended reals, if $x > 0$, then $x \\cdot (+\\infty) = $?',
    options: [
      '$x$',
      '$+\\infty$',
      '$0$',
      'Undefined'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $x > 0$, we define $x \\cdot (+\\infty) = +\\infty$. Similarly, $x \\cdot (-\\infty) = -\\infty$ for $x > 0$.',
  },
  {
    id: 'sec04-q4',
    type: 'multiple-choice',
    question: 'What is the main advantage of the extended real number system?',
    options: [
      'It makes $\\mathbb{R}$ into a field',
      'Every subset has both a supremum and infimum',
      'It simplifies complex number arithmetic',
      'It allows division by zero'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the extended reals, every subset $E$ has $\\sup E$ and $\\inf E$ (possibly $\\pm\\infty$). If $E$ is unbounded above, $\\sup E = +\\infty$; if $E$ is empty, $\\sup E = -\\infty$. This simplifies many statements.',
  },
  {
    id: 'sec04-q5',
    type: 'multiple-choice',
    question: 'In the extended reals, what is $(-3) \\cdot (-\\infty)$?',
    options: [
      '$-\\infty$',
      '$+\\infty$',
      '$3$',
      'Undefined'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $x < 0$, we have $x \\cdot (-\\infty) = +\\infty$ and $x \\cdot (+\\infty) = -\\infty$. Since $-3 < 0$, $(-3) \\cdot (-\\infty) = +\\infty$.',
  },
];
