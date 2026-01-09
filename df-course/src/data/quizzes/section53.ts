import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0$ is exact if:',
    options: [
      '$f$ and $g$ are isomorphisms',
      '$f$ is injective, $g$ is surjective, and $\\ker(g) = \\text{im}(f)$',
      '$A = B = C$',
      '$f \\circ g = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A short exact sequence has $f$ injective (kernel is $0$), $g$ surjective (image is $C$), and $\\text{im}(f) = \\ker(g)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A module $P$ is projective if:',
    options: [
      'Every short exact sequence ending in $P$ splits',
      '$P$ is free',
      '$P = 0$',
      '$P$ has no submodules'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P$ is projective if every surjection $M \\twoheadrightarrow P$ splits, equivalently if $\\text{Hom}(P, -)$ is exact, or every epimorphism onto $P$ has a section.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A module $I$ is injective if:',
    options: [
      'Every short exact sequence starting with $I$ splits',
      '$I$ is free',
      '$I = 0$',
      '$I$ has no quotients'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$I$ is injective if every injection $I \\hookrightarrow M$ splits, equivalently if $\\text{Hom}(-, I)$ is exact.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every free module is:',
    options: [
      'Injective',
      'Projective',
      'Neither projective nor injective',
      'Both projective and injective'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every free module is projective. The converse is not true in general (projective does not imply free), though it is true over PIDs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A module $F$ is flat if:',
    options: [
      '$F \\otimes -$ preserves exact sequences',
      '$F$ is finite',
      '$F$ is injective',
      '$F = 0$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$F$ is flat if $- \\otimes_R F$ is an exact functor. Every projective module is flat, but not conversely. $\\mathbb{Q}$ is a flat $\\mathbb{Z}$-module but not projective.',
  },
];
