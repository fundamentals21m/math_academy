import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The point where parallel lines appear to meet in perspective is called:',
    options: [
      'The origin',
      'The vanishing point (or point at infinity)',
      'The center',
      'The focus'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Artists call it the vanishing point; mathematicians call it the point at infinity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The line at infinity is:',
    options: [
      'A line that doesn\'t exist',
      'A vertical line',
      'The horizon, consisting of all vanishing points',
      'The x-axis'
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
      'Calculus',
      'Coordinate calculations',
      'Only incidence properties (points and intersections)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The straightedge method uses only line intersections, not measurement or parallel construction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the straightedge construction, a tile is a quadrilateral whose opposite sides:',
    options: [
      'Meet on the horizon',
      'Are equal in length',
      'Are perpendicular',
      'Do not intersect'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parallel sides meet at a point at infinity on the horizon.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In perspective, what property of lines is preserved?',
    options: [
      'Length',
      'Straightness and intersection',
      'Angle',
      'Parallelism'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Straight lines remain straight and intersections remain intersections under perspective projection.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When points at infinity are added to the Euclidean plane:',
    options: [
      'Some pairs of lines don\'t intersect',
      'All lines become curves',
      'Any two distinct lines have exactly one common point',
      'The parallel postulate still holds'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With points at infinity, every pair of lines meets — either at a finite point or at infinity.',
  },
];
