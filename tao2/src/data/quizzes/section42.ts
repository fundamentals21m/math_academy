import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: \\Omega \\to \\mathbf{R}$ is measurable if:',
    options: [
      '$f$ is continuous',
      'For all $a \\in \\mathbf{R}$, the set $\\{x : f(x) > a\\}$ is measurable',
      '$f$ is bounded',
      '$f$ is differentiable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Measurability means preimages of intervals (or rays) are measurable sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every continuous function on a measurable domain is:',
    options: [
      'Not measurable',
      'Measurable',
      'Constant',
      'Unbounded'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Continuous functions are measurable: preimages of open sets are open (hence measurable).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are measurable, then $f + g$ is:',
    options: [
      'Not necessarily measurable',
      'Measurable',
      'Continuous',
      'Bounded'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sums, products, and limits of measurable functions are measurable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A simple function is:',
    options: [
      'A polynomial',
      'A function taking finitely many values, each on a measurable set',
      'A linear function',
      'A constant function'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Simple functions are finite linear combinations of characteristic functions of measurable sets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every non-negative measurable function is:',
    options: [
      'Equal to a simple function',
      'The pointwise limit of an increasing sequence of simple functions',
      'Continuous',
      'Bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Non-negative measurable functions can be approximated from below by simple functions.',
  },
];
