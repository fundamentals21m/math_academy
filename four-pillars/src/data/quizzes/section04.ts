import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two triangles are similar if:',
    options: [
      'They have the same area',
      'Their corresponding angles are equal',
      'One is inside the other',
      'They have the same perimeter',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Similarity means equal corresponding angles; this implies proportional sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If triangles ABC and A\'B\'C\' are similar with sides b, c and b\', c\' opposite corresponding angles, then:',
    options: [
      'b · c = b\\' · c\\'',
      'b + c = b\\' + c\\'',
      'b - c = b\\' - c\\'',
      'b/c = b\\'/c\\'',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Similar triangles have proportional corresponding sides: the ratios are equal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof that similar triangles have proportional sides relies on:',
    options: [
      'The Thales theorem (parallel lines)',
      'The Pythagorean theorem',
      'Angle bisection',
      'Circle properties',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By superimposing triangles, BC and B\'C\' become parallel, and Thales theorem applies.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using similar triangles, we can prove that the diagonal of the unit square equals:',
    options: [
      '2',
      '1',
      '$\\sqrt{2}$',
      '$\\sqrt{3}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Comparing half-square and quarter-square triangles: 1/d = (d/2)/1, so d² = 2.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Pappus\'s theorem (parallel case) states: if AB ∥ ED and FE ∥ BC, then:',
    options: [
      'AB = BC',
      'The areas are equal',
      'The triangles are congruent',
      'AF ∥ CD'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Pappus\'s theorem relates parallel conditions among six points on two lines.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Desargues\'s theorem (parallel case) concerns two triangles that are:',
    options: [
      'Equal in area',
      'Congruent',
      'In perspective from a point O',
      'Inscribed in a circle',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If triangles are in perspective from O with two pairs of parallel sides, the third pair is also parallel.',
  },
];
