import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The altitude to the hypotenuse of a right triangle creates:',
    options: [
      'Two equilateral triangles',
      'Two congruent triangles',
      'An isosceles triangle',
      'Two smaller triangles similar to the original'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The altitude creates two triangles, each similar to the original right triangle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The geometric mean of a and b is:',
    options: [
      '$\\sqrt{ab}$',
      '$(a + b)/2$',
      '$ab$',
      '$a - b$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The geometric mean is $\\sqrt{ab}$, the "middle term" in a geometric progression.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If h is the altitude to the hypotenuse c = p + q (with p, q the segments), then h equals:',
    options: [
      'p + q',
      '$\\sqrt{pq}$',
      'pq',
      '(p + q)/2'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The altitude is the geometric mean of the two segments of the hypotenuse: $h = \\sqrt{pq}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To construct $\\sqrt{ab}$ geometrically, one draws a semicircle on diameter a + b and:',
    options: [
      'Measures the diameter',
      'Bisects the arc',
      'Draws the perpendicular at the junction of a and b to meet the circle',
      'Draws a tangent'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The perpendicular from the point dividing the diameter into a and b, to the circle, has length $\\sqrt{ab}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The similar triangles proof of the Pythagorean theorem shows $a^2 + b^2 = c^2$ by:',
    options: [
      'Using coordinates',
      'Calculating areas of squares',
      'Using the parallel postulate',
      'Showing $a^2 = cp$ and $b^2 = cq$, so $a^2 + b^2 = c(p+q) = c^2$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'From similarity: $a/c = p/a$ gives $a^2 = cp$; $b/c = q/b$ gives $b^2 = cq$. Sum: $a^2 + b^2 = c^2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To construct $\\sqrt{5}$, one can use a right triangle with legs:',
    options: [
      '1 and 2',
      '1 and 1',
      '2 and 2',
      '1 and 3'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'With legs 1 and 2: hypotenuse = $\\sqrt{1^2 + 2^2} = \\sqrt{5}$.',
  },
];
