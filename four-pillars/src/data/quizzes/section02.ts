import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To bisect a line segment AB, we construct:',
    options: [
      'A single circle centered at the midpoint',
      'Two circles centered at A and B with radius AB, finding both intersection points',
      'A perpendicular from A',
      'Two parallel lines'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The line connecting both intersection points of these circles is the perpendicular bisector.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To bisect an angle POQ, we first draw a circle centered at O, then:',
    options: [
      'Bisect the arc',
      'Draw a parallel line',
      'Construct the perpendicular bisector of the chord AB',
      'Extend the angle arms'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'After marking points A and B on the angle arms, the perpendicular bisector of AB bisects the angle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Thales theorem states that parallel lines cut transversals in:',
    options: [
      'Equal segments',
      'Random segments',
      'Perpendicular segments',
      'Proportional segments'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If L ∥ BC cuts sides AB and AC at P and Q, then |AP|/|PB| = |AQ|/|QC|.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To construct a parallel to line L through point P, we use:',
    options: [
      'Two perpendicular constructions',
      'One perpendicular construction',
      'Angle bisection',
      'Circle intersection'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First construct perpendicular M to L through P, then construct perpendicular to M through P.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why can angle trisection NOT be done the same way as segment trisection?',
    options: [
      'Angles are harder to measure',
      'There is no parallel-line tool for dividing angles',
      'Angles don\'t have length',
      'It can be done the same way'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Parallel lines provide the tool for dividing segments; no analogous tool exists for angles.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Thales theorem is fundamental because it allows us to:',
    options: [
      'Construct circles',
      'Bisect angles',
      'Use algebra in geometry (multiply/divide lengths)',
      'Prove lines are perpendicular'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Thales theorem enables geometric multiplication and division, bridging geometry and algebra.',
  },
];
