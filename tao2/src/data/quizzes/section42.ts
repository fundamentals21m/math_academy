import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: \\Omega \\to \\mathbf{R}$ is measurable if:',
    options: [
      '$f$ is continuous',
      '$f$ is differentiable',
      'For all $a \\in \\mathbf{R}$, the set $\\{x : f(x) > a\\}$ is measurable',
      '$f$ is bounded',
    ],
    correctIndex: 2,
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
      'Unbounded',
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
      'Measurable',
      'Not necessarily measurable',
      'Continuous',
      'Bounded',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Sums, products, and limits of measurable functions are measurable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A simple function is:',
    options: [
      'A function taking finitely many values, each on a measurable set',
      'A polynomial',
      'A linear function',
      'A constant function',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Simple functions are finite linear combinations of characteristic functions of measurable sets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every non-negative measurable function is:',
    options: [
      'Equal to a simple function',
      'Bounded',
      'Continuous',
      'The pointwise limit of an increasing sequence of simple functions'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Non-negative measurable functions can be approximated from below by simple functions.',
  },
];
