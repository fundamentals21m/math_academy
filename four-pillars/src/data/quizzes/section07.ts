import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two figures are congruent if:',
    options: [
      'They have the same area',
      'They have the same number of sides',
      'Their perimeters are equal',
      'One can be moved to coincide exactly with the other'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Congruence means exact coincidence when superimposed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The SAS congruence condition requires:',
    options: [
      'Two sides and the included angle equal',
      'Three sides equal',
      'Two angles and one side equal',
      'All three angles equal'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Side-Angle-Side: two sides and the angle between them determine a triangle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In modern treatments, SAS is:',
    options: [
      'Proved from more basic axioms',
      'Taken as an axiom',
      'Derived from ASA',
      'Not needed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid\'s "superposition" proof is logically problematic; SAS is now taken as an axiom.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The isosceles triangle theorem states: if AB = AC, then:',
    options: [
      '∠BAC = 90°',
      'BC = AB',
      '∠ABC = ∠ACB',
      'The triangle is equilateral'
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
      'Using the parallel axiom',
      'Area calculations',
      'Comparing the triangle with its mirror image'
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
      'They are both radii of a circle',
      'Parallel lines are always equal',
      'The area is constant'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Drawing diagonal AC creates triangles with equal alternate angles; ASA gives AB = CD, BC = DA.',
  },
];
