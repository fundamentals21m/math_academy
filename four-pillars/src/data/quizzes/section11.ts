import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Thales theorem (intercept theorem) concerns:',
    options: [
      'Parallel lines cutting transversals proportionally',
      'Circle tangents',
      'The sum of angles in a triangle',
      'Right angles in circles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Thales theorem: parallel lines cut transversals into proportional segments.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If line DE is parallel to BC in triangle ABC, then:',
    options: [
      'DE = BC',
      'AD = DB',
      'Area(ADE) = Area(ABC)',
      'AD/DB = AE/EC',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The parallel line divides the two sides proportionally: AD/DB = AE/EC.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of Thales theorem uses the fact that triangles with equal bases and heights have:',
    options: [
      'Equal perimeters',
      'Parallel sides',
      'Equal areas',
      'Congruent angles',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Area = (1/2) × base × height, so equal base and height implies equal area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The midpoint theorem states: the segment joining midpoints of two sides of a triangle is:',
    options: [
      'Perpendicular to the third side',
      'Parallel to the third side and half its length',
      'Equal to the third side',
      'An angle bisector',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is a special case of Thales theorem when D and E are midpoints.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Euclid\'s proof, if triangles DBE and DEC have equal areas because:',
    options: [
      'They share base DE and have equal heights (D, E both at distance h from BC)',
      'They are congruent',
      'They are similar',
      'They have the same perimeter',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Both triangles have base DE and the same height from that base, so equal areas.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Thales theorem can be used to:',
    options: [
      'Find the center of a circle',
      'Construct a square',
      'Divide a segment into n equal parts',
      'Prove the parallel postulate'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'To divide AB into n parts: draw n equal segments on a parallel line, connect endpoints, and use parallels.',
  },
];
