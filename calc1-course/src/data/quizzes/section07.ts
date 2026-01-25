import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Area as a set function must satisfy which property?',
    options: [
      'Negative values are allowed',
      'Only rectangles have area',
      'Area depends on position',
      'Area is additive for disjoint regions'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A key axiom: if two regions are disjoint, the area of their union equals the sum of their areas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The area of a rectangle with base $b$ and height $h$ is:',
    options: [
      '$2(b + h)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The area of a rectangle is base times height: $A = bh$.',
  },
      '$bh
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The area of a rectangle is base times height: $A = bh$.',
  },
      '$b + h
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The area of a rectangle is base times height: $A = bh$.',
  },
      '$\\frac{bh}{2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The area of a rectangle is base times height: $A = bh$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The area of a rectangle is base times height: $A = bh$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the area of a rectangle with base $4$ and height $3$?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Area $= 4 \\times 3 = 12$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If region $S$ is a subset of region $T$, then:',
    options: [
      '$a(S) > a(T)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Monotonicity: if $S \\subseteq T$, then $a(S) \\leq a(T)$.',
  },
      '$a(S) = a(T)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Monotonicity: if $S \\subseteq T$, then $a(S) \\leq a(T)$.',
  },
      '$a(S) \\leq a(T)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Monotonicity: if $S \\subseteq T$, then $a(S) \\leq a(T)$.',
  },
      'Cannot compare',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Monotonicity: if $S \\subseteq T$, then $a(S) \\leq a(T)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The area of the unit square $[0,1] \\times [0,1]$ is defined to be:',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By the normalization axiom, the unit square has area $1$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the normalization axiom, the unit square has area $1$.',
  },
      '$4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the normalization axiom, the unit square has area $1$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the normalization axiom, the unit square has area $1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By the normalization axiom, the unit square has area $1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Congruent regions (related by translation) have:',
    options: [
      'The same area',
      'Different areas',
      'No defined area',
      'Areas that depend on position',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Translation invariance: congruent regions have equal area.',
  },
];
