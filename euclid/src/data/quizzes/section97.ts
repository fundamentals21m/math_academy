import type { QuizQuestion } from './types';

export const section97Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.33 constructs what?',
    options: [
      'A tangent line from an external point',
      'A circular segment on a given line admitting a given angle',
      'The center of a circle',
      'A chord equal to a given line'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.33 constructs a circular arc (segment) on a given straight line such that inscribed angles in that segment equal a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To construct a segment admitting a given angle θ, the construction uses:',
    options: [
      'The inscribed angle theorem directly',
      'A tangent line and III.32 (tangent-chord angle equals inscribed angle)',
      'The Pythagorean theorem',
      'Parallel lines'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The construction creates a tangent-chord angle equal to θ. By III.32, the inscribed angle in the alternate segment also equals θ.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'This construction is useful for:',
    options: [
      'Finding circle centers',
      'Creating arcs where all inscribed angles have a specific measure',
      'Bisecting angles',
      'Drawing parallel lines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.33 creates a "locus" of points from which a given line segment subtends a given angle.',
  },
];
