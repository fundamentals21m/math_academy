import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The sum of vectors (u₁, u₂) and (v₁, v₂) in ℝ² is:',
    options: [
      '$(u_1 v_1, u_2 v_2)$',
      '$(u_1 - v_1, u_2 - v_2)$',
      '$u_1 v_1 + u_2 v_2$',
      '$(u_1 + v_1, u_2 + v_2)$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Vector addition is done componentwise: add corresponding coordinates.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The scalar multiple a(u₁, u₂) is:',
    options: [
      '$(au_1, au_2)$',
      '$(a + u_1, a + u_2)$',
      '$(u_1/a, u_2/a)$',
      '$(a, a)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Scalar multiplication multiplies each component by the scalar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The parallelogram rule states that u + v:',
    options: [
      'Equals u − v',
      'Is the fourth vertex of the parallelogram with vertices 0, u, v',
      'Is perpendicular to both u and v',
      'Has length |u| + |v|'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'u + v completes the parallelogram formed by the origin and vectors u and v.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Scalar multiplication by a represents:',
    options: [
      'Translation by a',
      'Rotation by angle a',
      'Magnification (dilation) by factor a',
      'Reflection'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplying all vectors by a scales the entire plane by factor a from the origin.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In ℝ², multiplying every vector by −1 is geometrically:',
    options: [
      'A translation',
      'A reflection in the x-axis',
      'The identity transformation',
      'A reflection in the origin (180° rotation)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '(x, y) → (−x, −y) is rotation by 180° about the origin, also called central inversion.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In ℝ³, multiplying every vector by −1 is:',
    options: [
      'An inversion (not a rotation)',
      'A rotation',
      'A reflection',
      'The identity'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In odd dimensions, central inversion reverses orientation and is not a rotation.',
  },
];
