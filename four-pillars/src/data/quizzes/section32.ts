import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The point where parallel lines appear to meet in perspective is called:',
    options: [
      'The vanishing point (or point at infinity)',
      'The origin',
      'The focus',
      'The center',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Artists call it the vanishing point; mathematicians call it the point at infinity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The line at infinity is:',
    options: [
      'A vertical line',
      'A line that doesn\\'t exist',
      'The horizon, consisting of all vanishing points',
      'The x-axis',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'All points at infinity form the line at infinity, which appears as the horizon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Unlike the costruzione legittima, the straightedge-only construction requires:',
    options: [
      'A compass and ruler',
      'Only incidence properties (points and intersections)',
      'Coordinate calculations',
      'Calculus'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The straightedge method uses only line intersections, not measurement or parallel construction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the straightedge construction, a tile is a quadrilateral whose opposite sides:',
    options: [
      'Are perpendicular',
      'Are equal in length',
      'Do not intersect',
      'Meet on the horizon',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Parallel sides meet at a point at infinity on the horizon.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In perspective, what property of lines is preserved?',
    options: [
      'Straightness and intersection',
      'Length',
      'Parallelism',
      'Angle',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Straight lines remain straight and intersections remain intersections under perspective projection.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When points at infinity are added to the Euclidean plane:',
    options: [
      'All lines become curves',
      'Any two distinct lines have exactly one common point',
      'Some pairs of lines don\\'t intersect',
      'The parallel postulate still holds',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With points at infinity, every pair of lines meets — either at a finite point or at infinity.',
  },
];
