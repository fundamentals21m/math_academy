import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The three reflections theorem states that every Möbius transformation is a composition of at most:',
    options: [
      '2 reflections',
      '5 reflections',
      '3 reflections',
      '4 reflections',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every isometry of the hyperbolic plane is a product of at most three reflections in non-Euclidean lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An involution is a transformation $f$ satisfying:',
    options: [
      '$f = \\text{id}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
      '$f \\circ f = \\text{id}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
      '$f \\circ f = f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
      '$f \\circ f \\circ f = \\text{id}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A half-turn (rotation by 180°) is:',
    options: [
      'An orientation-preserving involution',
      'Orientation-reversing',
      'A reflection',
      'Not an involution',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A half-turn is orientation-preserving (even number of reflections) and is its own inverse.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every orientation-preserving Möbius transformation is a product of:',
    options: [
      'Three rotations',
      'Two involutions',
      'Two reflections',
      'One reflection',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The two involutions theorem states that every orientation-preserving Möbius transformation is a product of two involutions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The half-turn about the point $i$ is given by:',
    options: [
      '$z \\mapsto -1/z
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
      '$z \\mapsto z + 2i
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
      '$z \\mapsto i/z
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
      '$z \\mapsto -z
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The composition of two reflections in intersecting non-Euclidean lines is:',
    options: [
      'A hyperbolic translation',
      'A parabolic transformation',
      'The identity',
      'An elliptic rotation about the intersection point',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Two reflections in intersecting lines give a rotation about the intersection, with angle twice the angle between the lines.',
  },
];
