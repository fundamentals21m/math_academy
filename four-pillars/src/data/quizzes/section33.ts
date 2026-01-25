import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The first axiom of a projective plane states that any two "points":',
    options: [
      'Are the same',
      'Lie on a unique "line"',
      'Have the same coordinates',
      'Are parallel'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Axiom 1: Any two points determine a unique line through them.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The second axiom of a projective plane states that any two "lines":',
    options: [
      'Are perpendicular',
      'Are parallel',
      'Have no intersection',
      'Contain a unique common "point"',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Axiom 2: Any two lines intersect at exactly one point (no parallel lines in projective geometry).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the model ℝP², a "point" is:',
    options: [
      'An ordered pair (x, y)',
      'A triple (x, y, z)',
      'A plane through O in ℝ³',
      'A line through the origin O in ℝ³'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In ℝP², "points" are lines through the origin in ℝ³.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the model ℝP², a "line" is:',
    options: [
      'An ordinary line y = mx + b',
      'A line through O in ℝ³',
      'A plane through O in ℝ³',
      'A circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In ℝP², "lines" are planes through the origin in ℝ³.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Each line in the Euclidean plane has how many points at infinity?',
    options: [
      'One',
      'Zero',
      'Infinitely many',
      'Two',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Each line has exactly one point at infinity (both directions converge to the same point).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The "horizon" or "line at infinity" in ℝP² corresponds to:',
    options: [
      'All horizontal lines through O in ℝ³',
      'All vertical lines through O in ℝ³',
      'All lines through O in the horizontal plane z = 0',
      'The z-axis'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The horizon is the plane of horizontal lines through O (i.e., the xy-plane z = 0).',
  },
];
