import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Proposition III.2, if two points are on a circle, what can be said about the straight line joining them?',
    options: [
      'It passes through the center',
      'It lies entirely outside the circle',
      'It falls within the circle (is a chord)',
      'It is tangent to the circle'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.2 states that if two points are on a circle\'s circumference, the straight line joining them (a chord) falls within the circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of III.2 uses which method?',
    options: [
      'Direct construction',
      'Proof by contradiction (reductio ad absurdum)',
      'Proportional reasoning',
      'Parallel lines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid proves III.2 by assuming some point on the line AB lies outside the circle, then deriving a contradiction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What geometric fact about distances from the center makes III.2 true?',
    options: [
      'All chords are equal',
      'Points on a chord between the endpoints are closer to the center than radius length',
      'The chord is perpendicular to the radius',
      'The center bisects all chords'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Points on the chord between A and B are closer to the center than points on the circumference, so they lie inside the circle.',
  },
];
