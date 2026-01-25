import type { QuizQuestion } from './types';

export const section101Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.37 is the converse of III.36. What does it prove?',
    options: [
      'If a line is tangent, then DA × DC = DB²',
      'The power of a point is constant',
      'If DA × DC = DB², then DB is tangent to the circle',
      'All tangent lines are equal',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.37 proves the converse: if a line from an external point satisfies the tangent-secant relation (DA × DC = DB²), then that line must be tangent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'III.37 provides a test for tangency. A line DB from external point D is tangent if and only if:',
    options: [
      'DB is perpendicular to a radius',
      'DB equals the radius',
      'DB passes through the center',
      'DA × DC = DB² for any secant DCA',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'III.36 and III.37 together: DB is tangent ⟺ DB² = DA × DC for any secant through D.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Book III concludes with III.37, completing the theory of:',
    options: [
      'The power of a point',
      'Regular polygons',
      'Parallel lines',
      'Triangle congruence',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Book III ends with the power of a point theorems (III.35-37), characterizing how lines through a point interact with a circle.',
  },
];
