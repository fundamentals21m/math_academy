import type { QuizQuestion } from './types';

export const section116Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How is the circumcenter of a regular pentagon found in IV.14?',
    options: [
      'By drawing altitudes',
      'By bisecting two adjacent angles',
      'By using the Pythagorean theorem',
      'By drawing medians',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Like IV.13 (incircle), the circumcenter is found by bisecting angles. For a regular pentagon, the same point is equidistant from vertices AND sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key difference between finding the incircle (IV.13) and circumcircle (IV.14) of a regular pentagon?',
    options: [
      'Different center points are found',
      'IV.14 requires the golden ratio; IV.13 does not',
      'Same center, but incircle measures distance to sides; circumcircle to vertices',
      'They use completely different methods',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both constructions find the same center point. The incircle uses the perpendicular distance to sides; the circumcircle uses the distance to vertices.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Do IV.13 and IV.14 also work for regular hexagons?',
    options: [
      'Yes, the method generalizes to all regular polygons',
      'No, only for pentagons',
      'Only for odd-sided polygons',
      'Only for polygons with fewer than 6 sides',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The method of bisecting angles to find the center works for any regular polygon. The center is equidistant from all sides and all vertices.',
  },
];
