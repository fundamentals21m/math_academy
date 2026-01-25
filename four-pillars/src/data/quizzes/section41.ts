import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In projective geometry, a "coincidence" refers to:',
    options: [
      'Two parallel lines meeting',
      'Two incidences occurring together (e.g., three points on one line)',
      'Two congruent triangles',
      'A point equidistant from two others'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A coincidence is co-incidence: two incidences occurring together, such as when a third point unexpectedly lies on a line through two other points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The tiled floor construction involves a coincidence that can be traced to:',
    options: [
      'A special case of the little Desargues theorem',
      'The Pappus theorem',
      'The Pythagorean theorem',
      'The parallel postulate',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The tiled floor coincidence follows from the little Desargues configuration that appears in the construction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When lines that would meet on the horizon are drawn as actual parallels, the little Desargues theorem:',
    options: [
      'Becomes more visually intuitive',
      'No longer applies',
      'Fails to hold',
      'Requires complex numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Drawing lines as parallels (instead of meeting on the horizon) makes the little Desargues configuration easier to see.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The special case of little Desargues in the tiled floor occurs when:',
    options: [
      'Both triangles are equilateral',
      'All triangles are congruent',
      'The triangles share a common side',
      'A vertex of one triangle lies on a side of the other',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tiled floor construction involves a special case where a vertex of one triangle lies on a side of the other.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the Moulton plane, the tiled floor coincidence:',
    options: [
      'Always holds',
      'Is equivalent to Pappus',
      'Fails when the x-axis is placed suitably',
      'Holds only for right angles',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The tiled floor coincidence fails in the Moulton plane by placing an x-axis in a suitable position.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The "diagonals of double tiles" in the tiled floor construction meet:',
    options: [
      'At the origin',
      'At the center of perspective',
      'Nowhere (they are parallel)',
      'On the horizon',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By the little Desargues theorem, the diagonals of double tiles meet on the horizon.',
  },
];
