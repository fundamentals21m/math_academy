import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Thales theorem (intercept theorem) concerns:',
    options: [
      'Circle tangents',
      'Right angles in circles',
      'The sum of angles in a triangle',
      'Parallel lines cutting transversals proportionally'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Thales theorem: parallel lines cut transversals into proportional segments.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If line DE is parallel to BC in triangle ABC, then:',
    options: [
      'AD/DB = AE/EC',
      'AD = DB',
      'DE = BC',
      'Area(ADE) = Area(ABC)'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The parallel line divides the two sides proportionally: AD/DB = AE/EC.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of Thales theorem uses the fact that triangles with equal bases and heights have:',
    options: [
      'Equal perimeters',
      'Equal areas',
      'Congruent angles',
      'Parallel sides'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Area = (1/2) × base × height, so equal base and height implies equal area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The midpoint theorem states: the segment joining midpoints of two sides of a triangle is:',
    options: [
      'Equal to the third side',
      'Perpendicular to the third side',
      'Parallel to the third side and half its length',
      'An angle bisector'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is a special case of Thales theorem when D and E are midpoints.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Euclid\'s proof, if triangles DBE and DEC have equal areas because:',
    options: [
      'They are congruent',
      'They have the same perimeter',
      'They are similar',
      'They share base DE and have equal heights (D, E both at distance h from BC)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Both triangles have base DE and the same height from that base, so equal areas.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Thales theorem can be used to:',
    options: [
      'Divide a segment into n equal parts',
      'Construct a square',
      'Find the center of a circle',
      'Prove the parallel postulate'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'To divide AB into n parts: draw n equal segments on a parallel line, connect endpoints, and use parallels.',
  },
];
