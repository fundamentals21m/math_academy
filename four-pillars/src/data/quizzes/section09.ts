import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A shearing transformation preserves:',
    options: [
      'Angles',
      'Perpendicularity',
      'Shape',
      'Area'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Shearing slides layers parallel to the base; the base and height are unchanged, so area is preserved.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The area of a parallelogram equals:',
    options: [
      'Base times height',
      'Side times side',
      'Diagonal times diagonal',
      'Perimeter divided by 2'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Area = base × height, where height is perpendicular distance between parallel sides.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The area of a triangle is related to a parallelogram by:',
    options: [
      'Triangle area = parallelogram area',
      'Triangle area = (1/2) × parallelogram area',
      'Triangle area = 2 × parallelogram area',
      'They are unrelated'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A diagonal divides a parallelogram into two congruent triangles, each with half the area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two parallelograms with the same base and equal heights have:',
    options: [
      'Different areas',
      'The same shape',
      'Equal areas',
      'Equal perimeters'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Area depends only on base and height, not on the slant of the sides.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To prove parallelogram area = base × height, Euclid uses:',
    options: [
      'Calculus',
      'Coordinate geometry',
      'The Pythagorean theorem',
      'Shearing to transform it into a rectangle'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By shearing, any parallelogram becomes a rectangle with the same base and height.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'All triangles with the same base and apex on a line parallel to the base have:',
    options: [
      'The same area',
      'The same angles',
      'The same perimeter',
      'Congruent shapes'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Moving the apex along a parallel line keeps the height constant, so area = (1/2)bh is constant.',
  },
];
