import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An element $\\alpha$ is transcendental over $F$ if:',
    options: [
      '$\\alpha$ generates an infinite extension of $F$',
      'There is no nonzero polynomial $f \\in F[x]$ with $f(\\alpha) = 0$',
      '$\\alpha \\notin F$',
      '$\\alpha$ is irrational'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An element $\\alpha$ is transcendental over $F$ if it is not algebraic, meaning no nonzero polynomial in $F[x]$ has $\\alpha$ as a root.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The transcendence degree of $\\mathbb{C}$ over $\\mathbb{Q}$ is:',
    options: [
      '$0$',
      '$1$',
      'Uncountable',
      '$2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{C}$ has uncountable cardinality while any extension of $\\mathbb{Q}$ by countably many elements is countable. Hence the transcendence degree of $\\mathbb{C}/\\mathbb{Q}$ is uncountable (specifically, $|\\mathbb{R}| = 2^{\\aleph_0}$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A transcendence basis of $E/F$ is:',
    options: [
      'Any generating set for $E$ over $F$',
      'A basis for $E$ as a vector space over $F$',
      'The smallest field containing $F$ and $E$',
      'A maximal algebraically independent subset of $E$ over $F$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A transcendence basis is a maximal algebraically independent set. Equivalently, it is a minimal set $B$ such that $E$ is algebraic over $F(B)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The field $F(x)$ of rational functions in one variable over $F$ has transcendence degree over $F$ equal to:',
    options: [
      '$1$',
      '$0$',
      '$\\infty$',
      'It depends on $F$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The indeterminate $x$ is transcendental over $F$, and $F(x)$ is algebraic over $F(x)$ (it equals $F(x)$). So $\\{x\\}$ is a transcendence basis, giving transcendence degree $1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $F \\subseteq K \\subseteq E$ are field extensions, then:',
    options: [
      '$\\text{tr.deg}(E/F) = \\text{tr.deg}(E/K) \\cdot \\text{tr.deg}(K/F)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Transcendence degree is additive in towers: if $B_1$ is a transcendence basis for $K/F$ and $B_2$ is a transcendence basis for $E/K$, then $B_1 \\cup B_2$ is a transcendence basis for $E/F$.',
  },
      '$\\text{tr.deg}(E/F) = \\max(\\text{tr.deg}(E/K), \\text{tr.deg}(K/F))
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendence degree is additive in towers: if $B_1$ is a transcendence basis for $K/F$ and $B_2$ is a transcendence basis for $E/K$, then $B_1 \\cup B_2$ is a transcendence basis for $E/F$.',
  },
      '$\\text{tr.deg}(E/F) = \\text{tr.deg}(E/K) - \\text{tr.deg}(K/F)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendence degree is additive in towers: if $B_1$ is a transcendence basis for $K/F$ and $B_2$ is a transcendence basis for $E/K$, then $B_1 \\cup B_2$ is a transcendence basis for $E/F$.',
  },
      '$\\text{tr.deg}(E/F) = \\text{tr.deg}(E/K) + \\text{tr.deg}(K/F)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendence degree is additive in towers: if $B_1$ is a transcendence basis for $K/F$ and $B_2$ is a transcendence basis for $E/K$, then $B_1 \\cup B_2$ is a transcendence basis for $E/F$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendence degree is additive in towers: if $B_1$ is a transcendence basis for $K/F$ and $B_2$ is a transcendence basis for $E/K$, then $B_1 \\cup B_2$ is a transcendence basis for $E/F$.',
  },
];
