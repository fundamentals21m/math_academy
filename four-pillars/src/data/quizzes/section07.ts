import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two figures are congruent if:',
    options: [
      'They have the same area',
      'Their perimeters are equal',
      'One can be moved to coincide exactly with the other',
      'They have the same number of sides',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Congruence means exact coincidence when superimposed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The SAS congruence condition requires:',
    options: [
      'Two angles and one side equal',
      'Two sides and the included angle equal',
      'Three sides equal',
      'All three angles equal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Side-Angle-Side: two sides and the angle between them determine a triangle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In modern treatments, SAS is:',
    options: [
      'Proved from more basic axioms',
      'Not needed',
      'Derived from ASA',
      'Taken as an axiom'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Euclid\'s "superposition" proof is logically problematic; SAS is now taken as an axiom.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The isosceles triangle theorem states: if AB = AC, then:',
    options: [
      'BC = AB',
      '∠BAC = 90°',
      '∠ABC = ∠ACB',
      'The triangle is equilateral',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equal sides imply equal base angles (the angles opposite the equal sides).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Pappus proved the isosceles triangle theorem by:',
    options: [
      'Constructing additional points',
      'Area calculations',
      'Using the parallel axiom',
      'Comparing the triangle with its mirror image',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Pappus showed △ABC ≅ △ACB by SAS, comparing the triangle to itself reflected.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In a parallelogram, opposite sides are equal because:',
    options: [
      'The diagonal creates congruent triangles via ASA',
      'Parallel lines are always equal',
      'They are both radii of a circle',
      'The area is constant',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Drawing diagonal AC creates triangles with equal alternate angles; ASA gives AB = CD, BC = DA.',
  },
];
