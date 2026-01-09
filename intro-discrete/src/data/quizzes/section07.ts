import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is injective (one-to-one) if:',
    options: [
      '$f(a_1) = f(a_2)$ implies $a_1 = a_2$',
      'Every element of $B$ is in the range',
      '$f$ has an inverse',
      '$|A| = |B|$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Injective means distinct inputs give distinct outputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is surjective (onto) if:',
    options: [
      'For every $b \\in B$, there exists $a \\in A$ with $f(a) = b$',
      'Different inputs give different outputs',
      '$f$ is invertible',
      '$A = B$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Surjective means every element of the codomain is hit by at least one input.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A bijection is a function that is:',
    options: [
      'Both injective and surjective',
      'Only injective',
      'Only surjective',
      'Neither injective nor surjective'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A bijection is both one-to-one and onto, establishing a perfect correspondence.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f: A \\to B$ and $g: B \\to C$ are both injective, then $g \\circ f$ is:',
    options: [
      'Injective',
      'Surjective',
      'Neither injective nor surjective',
      'A bijection'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The composition of injective functions is injective.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function $f$ has an inverse if and only if it is:',
    options: [
      'A bijection',
      'Injective only',
      'Surjective only',
      'Any function'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A function is invertible iff it is bijective (both injective and surjective).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f: A \\to B$ has an inverse $f^{-1}$, then $f^{-1} \\circ f$ equals:',
    options: [
      'The identity function on $A$',
      'The identity function on $B$',
      '$f$',
      '$f^{-1}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f^{-1} \\circ f = \\text{id}_A$ and $f \\circ f^{-1} = \\text{id}_B$.',
  },
];
