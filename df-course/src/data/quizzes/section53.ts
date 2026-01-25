import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0$ is exact if:',
    options: [
      '$f$ and $g$ are isomorphisms',
      '$A = B = C
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A short exact sequence has $f$ injective (kernel is $0$), $g$ surjective (image is $C$), and $\\text{im}(f) = \\ker(g)$.',
  },
      '$f \\circ g = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A short exact sequence has $f$ injective (kernel is $0$), $g$ surjective (image is $C$), and $\\text{im}(f) = \\ker(g)$.',
  },
      '$f$ is injective, $g$ is surjective, and $\\ker(g) = \\text{im}(f)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A short exact sequence has $f$ injective (kernel is $0$), $g$ surjective (image is $C$), and $\\text{im}(f) = \\ker(g)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A short exact sequence has $f$ injective (kernel is $0$), $g$ surjective (image is $C$), and $\\text{im}(f) = \\ker(g)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A module $P$ is projective if:',
    options: [
      '$P$ has no submodules',
      '$P$ is free',
      'Every short exact sequence ending in $P$ splits',
      '$P = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P$ is projective if every surjection $M \\twoheadrightarrow P$ splits, equivalently if $\\text{Hom}(P, -)$ is exact, or every epimorphism onto $P$ has a section.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P$ is projective if every surjection $M \\twoheadrightarrow P$ splits, equivalently if $\\text{Hom}(P, -)$ is exact, or every epimorphism onto $P$ has a section.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A module $I$ is injective if:',
    options: [
      '$I$ is free',
      '$I = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$I$ is injective if every injection $I \\hookrightarrow M$ splits, equivalently if $\\text{Hom}(-, I)$ is exact.',
  },
      '$I$ has no quotients',
      'Every short exact sequence starting with $I$ splits',
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
      'Projective',
      'Injective',
      'Neither projective nor injective',
      'Both projective and injective',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every free module is projective. The converse is not true in general (projective does not imply free), though it is true over PIDs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A module $F$ is flat if:',
    options: [
      '$F$ is injective',
      '$F \\otimes -$ preserves exact sequences',
      '$F$ is finite',
      '$F = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$F$ is flat if $- \\otimes_R F$ is an exact functor. Every projective module is flat, but not conversely. $\\mathbb{Q}$ is a flat $\\mathbb{Z}$-module but not projective.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$F$ is flat if $- \\otimes_R F$ is an exact functor. Every projective module is flat, but not conversely. $\\mathbb{Q}$ is a flat $\\mathbb{Z}$-module but not projective.',
  },
];
