import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 's29-e01',
    type: 'multiple-choice',
    question: 'What happens to parallel lines when viewed in perspective?',
    difficulty: 'easy',
    options: [
      'They remain parallel',
      'They appear to meet at a vanishing point',
      'They become curved',
      'They disappear',
    ],
    correctIndex: 1,
    explanation:
      'In perspective projection, parallel lines that recede into the distance appear to converge at a "vanishing point." Think of railroad tracks seeming to meet on the horizon.',
  },
  {
    id: 's29-e02',
    type: 'multiple-choice',
    question: 'Which property is preserved under central projection?',
    difficulty: 'easy',
    options: [
      'Distances between points',
      'Angles between lines',
      'Collinearity (points on a line stay on a line)',
      'Parallelism of lines',
    ],
    correctIndex: 2,
    explanation:
      'Central projection preserves collinearity—if points lie on a line, their images also lie on a line. It does NOT preserve distances, angles, or parallelism.',
  },
  {
    id: 's29-m01',
    type: 'multiple-choice',
    question:
      'What is added to the Euclidean plane to create the projective plane?',
    difficulty: 'medium',
    options: [
      'A center point',
      'Points at infinity (one for each direction)',
      'Additional coordinate axes',
      'A third dimension',
    ],
    correctIndex: 1,
    explanation:
      'The projective plane adds one "point at infinity" for each direction (parallel class of lines). These points all lie on a single "line at infinity." This ensures any two distinct lines meet in exactly one point.',
  },
  {
    id: 's29-m02',
    type: 'multiple-choice',
    question: 'What is the cross-ratio of four collinear points?',
    difficulty: 'medium',
    options: [
      'The sum of distances between consecutive points',
      'The ratio of two distances',
      'A ratio of ratios: $(AC \\cdot BD)/(AD \\cdot BC)$',
      'The area of the quadrilateral they form',
    ],
    correctIndex: 2,
    explanation:
      'The cross-ratio $(A, B; C, D) = \\frac{AC \\cdot BD}{AD \\cdot BC}$ is the fundamental projective invariant. It is preserved under all projections.',
  },
  {
    id: 's29-h01',
    type: 'multiple-choice',
    question:
      'According to Newton, how many basic types of cubic curves produce all 72+ species under projection?',
    difficulty: 'hard',
    options: [
      '3',
      '5',
      '10',
      '72',
    ],
    correctIndex: 1,
    explanation:
      'Newton observed that all cubic curves are "shadows" (projections) of just 5 basic types. This unifying principle shows that projective geometry simplifies curve classification dramatically.',
  },
  {
    id: 's29-h02',
    type: 'multiple-choice',
    question:
      'In the projective plane, what does Bézout\'s theorem state about two curves of degrees $m$ and $n$?',
    difficulty: 'hard',
    options: [
      'They meet in at most $m + n$ points',
      'They meet in exactly $mn$ points (counting properly)',
      'They meet in $m \\cdot n^2$ points',
      'They may not meet at all',
    ],
    correctIndex: 1,
    explanation:
      'In the projective plane with complex coordinates, Bézout\'s theorem states that curves of degrees $m$ and $n$ meet in exactly $mn$ points (counted with multiplicity). The projective setting eliminates the "missing" intersections at infinity.',
  },
];
