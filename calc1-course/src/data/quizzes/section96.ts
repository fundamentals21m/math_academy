import type { QuizQuestion } from './types';

export const section96Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The nullity of $T$ is:',
    options: [
      'dim(range($T$))',
      'dim(kernel($T$))',
      'dim($V$)',
      '0 always'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nullity = dimension of the kernel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The rank of $T$ is:',
    options: [
      'dim(kernel($T$))',
      'dim(range($T$))',
      'dim($V$) - dim($W$)',
      'Always equal to nullity'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rank = dimension of the range (image).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Rank-Nullity Theorem states:',
    options: [
      'rank = nullity',
      'rank + nullity = dim(domain)',
      'rank × nullity = dim(domain)',
      'rank - nullity = 0'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rank-Nullity: rank($T$) + nullity($T$) = dim($V$).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $T: \\mathbb{R}^5 \\to \\mathbb{R}^3$ has nullity 2, what is the rank?',
    correctAnswer: 3,
    numericRange: { min: 2, max: 4, precision: 0 },
    difficulty: 'easy',
    explanation: 'rank + 2 = 5, so rank = 3.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $T: \\mathbb{R}^4 \\to \\mathbb{R}^6$, the maximum possible rank is:',
    options: [
      '6',
      '4',
      '10',
      '2'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rank $\\leq$ min(dim domain, dim codomain) = min(4, 6) = 4.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$T$ is invertible if and only if:',
    options: [
      'rank = 0',
      'nullity = dim(domain)',
      'rank = dim(domain) = dim(codomain)',
      'nullity > 0'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Invertible: bijective, which requires full rank and matching dimensions.',
  },
];
