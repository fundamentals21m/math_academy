import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's59-e01',
    type: 'multiple-choice',
    question: 'In spherical geometry, "lines" are:',
    options: [
      'Great circles on the sphere',
      'Any circle on the sphere',
      'Straight lines tangent to the sphere',
      'Lines of latitude',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In spherical geometry, the role of "straight lines" is played by great circles—circles whose center coincides with the center of the sphere. These are the shortest paths (geodesics) between points on the sphere.',
  },
  {
    id: 's59-e02',
    type: 'multiple-choice',
    question: 'In elliptic geometry, given a line and a point not on it, how many parallel lines exist through that point?',
    options: [
      'None',
      'Exactly one',
      'Infinitely many',
      'Exactly two',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In elliptic geometry, there are no parallel lines—every pair of lines intersects. This contrasts with Euclidean geometry (exactly one parallel) and hyperbolic geometry (infinitely many parallels).',
  },
  // Medium questions
  {
    id: 's59-m01',
    type: 'multiple-choice',
    question: 'In spherical geometry, the sum of angles in a triangle is:',
    options: [
      'Greater than 180 degrees',
      'Exactly 180 degrees',
      'Less than 180 degrees',
      'Always 270 degrees',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'On a sphere, triangle angle sums exceed 180°. The excess (called angular excess ε) is proportional to the triangle\'s area: Area = R²ε. A triangle with three 90° angles (sum = 270°) is possible on a sphere.',
  },
  {
    id: 's59-m02',
    type: 'multiple-choice',
    question: 'Girard\'s theorem states that the area of a spherical triangle equals:',
    options: [
      '$R^2$ times the angular excess (in radians)',
      '$R^2$ times the angular defect',
      'The sum of its angles',
      'Half the base times height',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Girard\'s theorem (1629) states that Area = R²ε, where R is the sphere\'s radius and ε is the angular excess (sum of angles minus 180°, in radians). This is analogous to the area-defect relationship in hyperbolic geometry.',
  },
  // Hard questions
  {
    id: 's59-h01',
    type: 'multiple-choice',
    question: 'The three constant-curvature geometries have curvature:',
    options: [
      'Euclidean: K = 0, Hyperbolic: K < 0, Elliptic: K > 0',
      'Euclidean: K > 0, Hyperbolic: K = 0, Elliptic: K < 0',
      'All three have K = 0',
      'Euclidean: K < 0, Hyperbolic: K > 0, Elliptic: K = 0',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Euclidean geometry is flat (K = 0). Hyperbolic geometry has negative (saddle-like) curvature. Elliptic/spherical geometry has positive (sphere-like) curvature. These are the only three geometries with constant curvature.',
  },
  {
    id: 's59-h02',
    type: 'multiple-choice',
    question: 'Elliptic geometry proper differs from spherical geometry because:',
    options: [
      'Antipodal points are identified, so two lines meet at one point, not two',
      'It uses flat planes instead of spheres',
      'It has negative curvature',
      'Parallel lines exist in elliptic geometry',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'In spherical geometry, two great circles meet at two antipodal points. In elliptic geometry (the projective plane), antipodal points are identified as a single point, so two lines meet at exactly one point. This gives cleaner axioms analogous to Euclidean geometry.',
  },
];
