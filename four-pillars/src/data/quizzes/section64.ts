import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The three reflections theorem states that every Möbius transformation is a composition of at most:',
    options: [
      '2 reflections',
      '3 reflections',
      '4 reflections',
      '5 reflections'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every isometry of the hyperbolic plane is a product of at most three reflections in non-Euclidean lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An involution is a transformation $f$ satisfying:',
    options: [
      '$f \\circ f = f$',
      '$f = \\text{id}$',
      '$f \\circ f = \\text{id}$',
      '$f \\circ f \\circ f = \\text{id}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z, meaning applying it twice gives the identity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A half-turn (rotation by 180°) is:',
    options: [
      'Orientation-reversing',
      'Not an involution',
      'A reflection',
      'An orientation-preserving involution'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A half-turn is orientation-preserving (even number of reflections) and is its own inverse.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every orientation-preserving Möbius transformation is a product of:',
    options: [
      'Two involutions',
      'Two reflections',
      'Three rotations',
      'One reflection'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The two involutions theorem states that every orientation-preserving Möbius transformation is a product of two involutions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The half-turn about the point $i$ is given by:',
    options: [
      '$z \\mapsto z + 2i$',
      '$z \\mapsto -1/z$',
      '$z \\mapsto -z$',
      '$z \\mapsto i/z$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'h(z) = −1/z fixes i (since h(i) = −1/i = i) and satisfies h(h(z)) = z.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The composition of two reflections in intersecting non-Euclidean lines is:',
    options: [
      'A parabolic transformation',
      'A hyperbolic translation',
      'An elliptic rotation about the intersection point',
      'The identity'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Two reflections in intersecting lines give a rotation about the intersection, with angle twice the angle between the lines.',
  },
];
