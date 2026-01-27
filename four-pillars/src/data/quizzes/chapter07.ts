import type { QuizQuestion } from './types';

// Section 48: The Group of Isometries of the Plane
export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an isometry of the plane?',
    options: [
      'A function that changes distances proportionally',
      'A function that preserves distance',
      'A function that preserves angles only',
      'A function that maps lines to lines'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An isometry is a distance-preserving map. For any two points P and Q, an isometry f satisfies |f(P) - f(Q)| = |P - Q|.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT an isometry of the plane?',
    options: [
      'Rotation',
      'Reflection',
      'Scaling by factor 2',
      'Translation'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scaling by factor 2 doubles all distances, so it is not an isometry. Rotations, reflections, and translations all preserve distances.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Every isometry of the plane can be expressed as a product of at most how many reflections?',
    options: [
      'One',
      'Two',
      'Four',
      'Three'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Three Reflections Theorem states that every isometry of the plane is a product of at most three reflections.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the product of two reflections in lines that meet at angle θ?',
    options: [
      'A rotation through angle 2θ',
      'A reflection',
      'A translation',
      'A rotation through angle θ'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The product of reflections in two lines meeting at angle θ is a rotation about their intersection through angle 2θ.',
  },
];

// Section 49: Vector Transformations
export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a linear transformation of ℝ²?',
    options: [
      'Any function from ℝ² to ℝ²',
      'A function that preserves vector addition and scalar multiplication',
      'A function that preserves distances',
      'A function defined by a polynomial'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A linear transformation T satisfies T(u + v) = T(u) + T(v) and T(cu) = cT(u) for all vectors u, v and scalars c.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key property of an orthogonal matrix?',
    options: [
      'All entries are positive',
      'The determinant is 1',
      'A^T A = I (transpose times itself equals identity)',
      'All entries are integers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A matrix A is orthogonal if A^T A = I, meaning its transpose equals its inverse. This is equivalent to having orthonormal columns.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the determinant of an orthogonal matrix tell us?',
    options: [
      'The area of the transformation',
      'The angle of rotation',
      'The number of fixed points',
      'Whether it is a rotation (det = 1) or reflection (det = -1)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For orthogonal matrices, det = 1 indicates a rotation (orientation-preserving) and det = -1 indicates a reflection (orientation-reversing).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why are homogeneous coordinates useful for representing affine transformations?',
    options: [
      'They allow translations to be represented as matrix multiplications',
      'They make matrices smaller',
      'They preserve angles',
      'They eliminate the need for inverses'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Homogeneous coordinates allow translations (which are not linear) to be combined with linear transformations into a single matrix multiplication.',
  },
];

// Section 50: Transformations of the Projective Line
export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a linear fractional function?',
    options: [
      'A polynomial of degree 1',
      'A function of the form f(x) = (ax + b)/(cx + d)',
      'A function that preserves ratios',
      'Any function with a fraction'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A linear fractional function (Möbius transformation) has the form f(x) = (ax + b)/(cx + d) where ad - bc ≠ 0.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What quantity is preserved by all linear fractional transformations?',
    options: [
      'Distance',
      'Angle',
      'Cross-ratio',
      'Area'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cross-ratio of four points is preserved by linear fractional transformations. This is the fundamental invariant of projective geometry on the line.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many points are needed to uniquely determine a linear fractional transformation?',
    options: [
      'One point',
      'Two points',
      'Four points',
      'Three points'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A linear fractional transformation is uniquely determined by its action on three points—given three points and their images, there is exactly one such transformation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the group of all linear fractional transformations of ℝP¹ called?',
    options: [
      'PGL(2, ℝ)',
      'GL(2, ℝ)',
      'SL(2, ℝ)',
      'O(2)'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The projective general linear group PGL(2, ℝ) consists of linear fractional transformations, represented by 2×2 matrices up to scalar multiplication.',
  },
];

// Section 51: Spherical Geometry
export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the "lines" in spherical geometry?',
    options: [
      'Lines of latitude',
      'Great circles',
      'Any circle on the sphere',
      'Meridians only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Great circles—intersections of the sphere with planes through its center—are the "lines" of spherical geometry because they are geodesics (shortest paths).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do any two great circles relate to each other?',
    options: [
      'They never meet',
      'They meet at exactly one point',
      'They meet at exactly two antipodal points',
      'They may or may not meet'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Any two great circles on S² intersect at exactly two antipodal points. There are no parallel lines in spherical geometry.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is true about the angles of a spherical triangle?',
    options: [
      'They sum to less than 180°',
      'They sum to exactly 180°',
      'The sum depends on the triangle size',
      'They sum to more than 180°'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The angles of a spherical triangle always sum to more than 180°. The excess over 180° is proportional to the triangle\'s area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The isometry group of S² is isomorphic to which group?',
    options: [
      'O(3)',
      'O(2)',
      'SO(2)',
      'SO(3)'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Isom(S²) ≅ O(3), the group of 3×3 orthogonal matrices. Every isometry of S² extends to an orthogonal transformation of ℝ³.',
  },
];

// Section 52: The Rotation Group of the Sphere
export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is SO(3)?',
    options: [
      'All 3×3 matrices',
      '3×3 orthogonal matrices with determinant 1',
      'All orthogonal 3×3 matrices',
      '3×3 matrices with determinant 1'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'SO(3) is the special orthogonal group—3×3 orthogonal matrices with determinant 1. These represent rotations of ℝ³.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is special about rotations in 3D compared to 2D?',
    options: [
      '3D rotations preserve area',
      '3D rotations require matrices',
      '3D rotations do not commute in general',
      '3D rotations have no fixed points'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Unlike in 2D, rotations in 3D generally do not commute. The order of rotations matters: R₁R₂ ≠ R₂R₁ in general.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Every rotation of S² is a product of exactly how many reflections?',
    options: [
      'One',
      'Three',
      'Any number',
      'Two'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every rotation of S² is a product of exactly two reflections in great circles. The angle between the great circles determines the rotation angle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The rotation group SO(3) is topologically equivalent to which space?',
    options: [
      'ℝP³',
      'S²',
      'S³',
      'ℝ³'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'SO(3) is homeomorphic to ℝP³, the real projective 3-space. This can be seen by parameterizing rotations as a ball with antipodal boundary points identified.',
  },
];

// Section 53: Representing Space Rotations by Quaternions
export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a quaternion?',
    options: [
      'A 4×4 matrix',
      'A number of the form a + bi + cj + dk',
      'A 4-dimensional vector',
      'A type of polynomial'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A quaternion is a number q = a + bi + cj + dk where i² = j² = k² = ijk = -1, extending complex numbers to four dimensions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does a unit quaternion q represent a rotation?',
    options: [
      'By p → qp',
      'By p → pq',
      'By p → qpq⁻¹',
      'By p → q + p'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A unit quaternion q represents a rotation via the map p → qpq⁻¹, where p is a pure quaternion representing a point in ℝ³.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is special about the quaternion representation of rotations?',
    options: [
      'It is one-to-one',
      'Only positive quaternions give rotations',
      'Each rotation has infinitely many quaternions',
      'Both q and -q represent the same rotation'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quaternion representation is 2-to-1: both q and -q give the same rotation p → qpq⁻¹, since (-q)p(-q)⁻¹ = qpq⁻¹.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For rotation about axis n through angle θ, the quaternion uses which angle?',
    options: [
      'θ/2',
      'θ',
      '2θ',
      'θ²'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The unit quaternion for rotation about n through angle θ is q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k). The half-angle appears because of the 2-to-1 correspondence.',
  },
];

// Section 54: A Finite Group of Space Rotations
export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many rotational symmetries does a regular tetrahedron have?',
    options: [
      '4',
      '12',
      '8',
      '24'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The tetrahedron has 12 rotational symmetries: 1 identity, 8 face rotations (120° and 240° about each vertex-face axis), and 3 edge rotations (180° about edge midpoint axes).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The rotation group of the tetrahedron is isomorphic to which group?',
    options: [
      'S₃',
      'S₄',
      'A₄',
      'A₅'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation group of the tetrahedron is isomorphic to A₄, the alternating group of even permutations of 4 objects (the vertices).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The 24 quaternions representing tetrahedron rotations form the vertices of which 4D polytope?',
    options: [
      'The 4-simplex',
      'The hypercube',
      'The 600-cell',
      'The 24-cell'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The 24 unit quaternions (±1, ±i, ±j, ±k and the 16 of form ½(±1 ± i ± j ± k)) form the vertices of the 24-cell, an exceptional regular 4D polytope.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why do the cube and octahedron have the same rotation group?',
    options: [
      'They are dual polyhedra',
      'They have the same number of faces',
      'They have the same volume',
      'They have the same surface area'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The cube and octahedron are dual—vertices of one correspond to face centers of the other. Duality preserves the symmetry group, so both have 24 rotations (S₄).',
  },
];

// Section 55: The Groups S³ and ℝP³
export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the 3-sphere S³?',
    options: [
      'The surface of a ball in ℝ³',
      'Points at unit distance from O in ℝ⁴',
      'A 3-dimensional sphere',
      'The set of unit quaternions in ℝ³'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'S³ = {(a,b,c,d) ∈ ℝ⁴ : a² + b² + c² + d² = 1}. It lives in 4-dimensional space and is the "surface" of a 4-ball.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Unit quaternions are in one-to-one correspondence with points of which space?',
    options: [
      'ℝ³',
      'S²',
      'S³',
      'ℝP³'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Unit quaternions q = a + bi + cj + dk with |q| = 1 correspond exactly to points (a,b,c,d) on S³, since |q|² = a² + b² + c² + d² = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which spheres have continuous group structures?',
    options: [
      'All spheres Sⁿ',
      'Only S¹',
      'S¹, S², and S³',
      'Only S¹ and S³'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Only S¹ and S³ have continuous group structures. S¹ gets its structure from complex multiplication, S³ from quaternion multiplication. S² cannot have a continuous group structure.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is an isomorphism between groups?',
    options: [
      'A one-to-one correspondence that preserves products',
      'Any function between groups',
      'A function that preserves the identity',
      'A bijection between sets'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An isomorphism ϕ: G → G\' is a bijection satisfying ϕ(g₁g₂) = ϕ(g₁)ϕ(g₂). Isomorphic groups are "the same" as abstract groups.',
  },
];

// Section 56: Discussion
export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which branch of geometry is described as being concerned with how objects look rather than what they are?',
    options: [
      'Euclidean geometry',
      'Projective geometry',
      'Affine geometry',
      'Differential geometry'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Projective geometry is the most visual branch, concerned with how objects look (perspective) rather than their actual measurements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Classical Chinese and Japanese art typically uses which type of geometric projection?',
    options: [
      'Perspective projection',
      'Orthogonal projection',
      'Affine (parallel) projection',
      'Spherical projection'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Classical East Asian art often uses affine (parallel) projection, preserving parallel lines and giving a "view from infinity" that differs from Renaissance perspective.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is there no "number system" with multiplicative absolute value on ℝ³?',
    options: [
      'Three is an odd number',
      'ℝ³ is too small',
      'Complex numbers already exist in ℝ²',
      'There is no multiplication rule that makes |uv| = |u||v| while satisfying field axioms'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'It is impossible to define a multiplication on ℝ³ that satisfies the field axioms (or even weaker conditions) while having a multiplicative absolute value. The next dimension where this works is ℝ⁴ (quaternions).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Klein\'s Erlangen program, what defines a geometry?',
    options: [
      'Its transformation group',
      'Its axioms',
      'Its dimension',
      'Its coordinate system'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Klein\'s Erlangen program (1872) proposed that each geometry is characterized by its group of transformations. The properties of the geometry are exactly the invariants of its transformation group.',
  },
];
