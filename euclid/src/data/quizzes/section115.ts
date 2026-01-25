import type { QuizQuestion } from './types';

export const section115Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How is the incenter of a regular pentagon found in IV.13?',
    options: [
      'By drawing medians',
      'By bisecting two adjacent angles',
      'By drawing perpendicular bisectors of sides',
      'By finding the midpoint of a diagonal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The incenter is found by bisecting two (or more) angles of the pentagon. The angle bisectors meet at a point equidistant from all five sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a regular polygon, where is the incircle\'s center located?',
    options: [
      'At a vertex',
      'On a side',
      'Outside the polygon',
      'At the center of the polygon (coinciding with the circumcenter)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In any regular polygon, the incircle and circumcircle share the same center—the center of symmetry of the polygon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What makes a point the incenter of a polygon?',
    options: [
      'It is equidistant from all vertices',
      'It is on the circumcircle',
      'It is equidistant from all sides',
      'It is at the centroid',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The incenter is the unique point equidistant from all sides of the polygon. This allows an inscribed circle tangent to every side.',
  },
];
