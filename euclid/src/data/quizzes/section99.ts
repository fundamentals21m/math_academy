import type { QuizQuestion } from './types';

export const section99Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.35 is the famous "Intersecting Chords Theorem." What does it state?',
    options: [
      'Intersecting chords are perpendicular',
      'Intersecting chords bisect each other',
      'The sum of intersecting chord lengths is constant',
      'When two chords intersect inside a circle, the products of their segments are equal',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.35 proves that when chords AC and BD intersect at E inside a circle, AE × EC = BE × ED.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If chords intersect at E with AE = 3, EC = 4, and BE = 2, what is ED?',
    options: [
      '6',
      '5',
      '7',
      '12',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By III.35: AE × EC = BE × ED, so 3 × 4 = 2 × ED, giving ED = 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The quantity AE × EC is called the "power" of point E. This value is:',
    options: [
      'Different for each chord through E',
      'Constant for all chords through E',
      'Equal to the diameter',
      'Equal to the radius squared',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The power of a point is the same for all chords through that point. This is why III.35 equates the products for two different chords.',
  },
];
