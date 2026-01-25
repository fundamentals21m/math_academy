import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Bézout\'s theorem, how many points do curves of degrees $m$ and $n$ intersect?',
    options: [
      '$m + n$ points',
      '$\\max(m, n)$ points',
      '$\\min(m, n)$ points',
      '$m \\times n$ points',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bézout\'s theorem states that two algebraic curves of degrees $m$ and $n$ intersect in exactly $mn$ points (counting multiplicity and complex/infinite intersections).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many points do two distinct conics generally intersect?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'Two conics (degree 2 each) intersect in $2 \\times 2 = 4$ points by Bézout\'s theorem, counting multiplicity and complex points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a point of tangency in the context of curve intersection?',
    options: [
      'A point where curves cross at right angles',
      'A point counted with multiplicity greater than 1',
      'The highest point of intersection',
      'A point at infinity',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When curves are tangent at a point, that intersection has multiplicity > 1 and counts as multiple intersections in Bézout\'s count.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why must we "count complex points" in Bézout\'s theorem?',
    options: [
      'To make the calculation easier',
      'Because real intersection points don\\\\'t exist',
      'To achieve the exact count of $mn$ intersections',
      'Complex points are larger than real points',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In the real plane, curves might have fewer than $mn$ visible intersections. Including complex coordinates ensures the theorem gives exactly $mn$ intersections.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are "intersections at infinity"?',
    options: [
      'Points where curves meet when extended infinitely, analyzed via projective geometry',
      'Points very far from the origin',
      'Points inside the curves',
      'Points that don\\\'t exist',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In projective geometry, we add "points at infinity" where parallel lines meet. Curves can intersect at these ideal points, which count in Bézout\'s theorem.',
  },
];
