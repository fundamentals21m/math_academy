import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 's32-e01',
    type: 'multiple-choice',
    question: 'What is the "principle of duality" in projective geometry?',
    difficulty: 'easy',
    options: [
      'Every line has exactly two points',
      'The plane has two sides',
      'Every theorem has two proofs',
      'Points and lines can be interchanged to produce equally valid theorems'
    ],
    correctIndex: 3,
    explanation:
      'Duality states that in projective geometry, swapping "point" and "line" throughout any valid statement produces another valid statement. This is possible because the axioms are symmetric in points and lines.',
  },
  {
    id: 's32-e02',
    type: 'multiple-choice',
    question: 'What is the dual of "three points are collinear"?',
    difficulty: 'easy',
    options: [
      'Three lines are concurrent (pass through one point)',
      'Three lines are parallel',
      'Three points form a triangle',
      'Three points are equidistant'
    ],
    correctIndex: 0,
    explanation:
      'Using the duality dictionary: "points" → "lines" and "collinear" → "concurrent." So "three points are collinear" becomes "three lines are concurrent."',
  },
  {
    id: 's32-m01',
    type: 'multiple-choice',
    question: 'What is Brianchon\'s theorem?',
    difficulty: 'medium',
    options: [
      'A theorem about triangle medians',
      'The dual of Pascal\'s theorem—about hexagons circumscribed around conics',
      'The converse of Desargues\' theorem',
      'A theorem about parallel lines'
    ],
    correctIndex: 1,
    explanation:
      'Brianchon\'s theorem (1806) is the dual of Pascal\'s: if a hexagon is circumscribed about a conic (sides tangent), then the three main diagonals (connecting opposite vertices) are concurrent.',
  },
  {
    id: 's32-m02',
    type: 'multiple-choice',
    question:
      'Why does duality work algebraically in the projective plane?',
    difficulty: 'medium',
    options: [
      'Because all coordinates are positive',
      'Because projections preserve distances',
      'Because the incidence condition $ax + by + cz = 0$ is symmetric in point and line coordinates',
      'Because the plane is infinite'
    ],
    correctIndex: 2,
    explanation:
      'A point $(x:y:z)$ lies on line $(a:b:c)$ iff $ax + by + cz = 0$. This equation is symmetric—swapping the roles of $(x,y,z)$ and $(a,b,c)$ preserves incidence. This is the algebraic foundation of duality.',
  },
  {
    id: 's32-h01',
    type: 'multiple-choice',
    question: 'What is the "dual conic" of a given conic?',
    difficulty: 'hard',
    options: [
      'The conic reflected across an axis',
      'A conic with the same area',
      'The conic rotated 90 degrees',
      'The set of tangent lines to the conic (which also satisfy a quadratic equation)'
    ],
    correctIndex: 3,
    explanation:
      'The dual of a point conic is its "line conic"—the set of all tangent lines. Remarkably, these tangent lines satisfy their own quadratic equation in line coordinates, forming a "dual" quadratic object.',
  },
  {
    id: 's32-h02',
    type: 'multiple-choice',
    question:
      'Who first rigorously established the algebraic foundation of duality using homogeneous coordinates?',
    difficulty: 'hard',
    options: [
      'Plücker',
      'Desargues',
      'Pascal',
      'Euclid'
    ],
    correctIndex: 0,
    explanation:
      'Julius Plücker (1830s) developed homogeneous coordinates systematically, providing a rigorous algebraic basis for the duality principle that Poncelet and Gergonne had been using geometrically.',
  },
];
