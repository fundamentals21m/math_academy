import type { QuizQuestion } from './types';

// Section 57: Extending the Projective Line to a Plane
export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the upper half plane in the context of hyperbolic geometry?',
    options: [
      'The set of complex numbers z = x + iy with y > 0',
      'The set of real numbers greater than zero',
      'The upper hemisphere of a sphere',
      'The top half of the Euclidean plane',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The upper half plane ℋ = {z = x + iy ∈ ℂ : y > 0} consists of all complex numbers with positive imaginary part.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the two types of non-Euclidean lines in the upper half plane model?',
    options: [
      'Horizontal lines and circles',
      'Diagonal lines and ellipses',
      'Parabolas and hyperbolas',
      'Vertical rays and semicircles with centers on the x-axis',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Non-Euclidean lines are either vertical rays (x = constant, y > 0) or semicircles with centers on the x-axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, how many lines through a point P are parallel to a given line L?',
    options: [
      'Infinitely many',
      'Zero',
      'Exactly one',
      'Exactly two',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unlike Euclidean geometry where there is exactly one parallel, hyperbolic geometry has infinitely many lines through P that do not intersect L.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What condition ensures a linear fractional transformation f(z) = (az+b)/(cz+d) maps the upper half plane to itself?',
    options: [
      'a, b, c, d are complex and ad - bc = 1',
      'a, b, c, d are integers',
      'c = 0',
      'a, b, c, d are real and ad - bc > 0',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'When a, b, c, d are real and ad - bc > 0, the transformation preserves the upper half plane. If ad - bc < 0, it maps to the lower half plane.',
  },
];

// Section 58: Complex Conjugation
export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the complex conjugate of z = 3 + 4i?',
    options: [
      '3 - 4i',
      '3 + 4i',
      '-3 + 4i',
      '-3 - 4i',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The complex conjugate of z = x + iy is z̄ = x - iy. So the conjugate of 3 + 4i is 3 - 4i.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is z · z̄ for any complex number z = x + iy?',
    options: [
      'x² - y²',
      '2xy',
      'x² + y²',
      'x - y',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'z · z̄ = (x + iy)(x - iy) = x² + y² = |z|², the square of the absolute value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which transformation maps the upper half plane to itself?',
    options: [
      'z → z̄',
      'z → -z',
      'z → -z̄',
      'z → iz',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'z → -z̄ reflects across the imaginary axis while preserving the upper half plane. z → z̄ sends y > 0 to y < 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What property makes complex conjugation an automorphism of ℂ?',
    options: [
      'It is continuous',
      'It preserves addition and multiplication',
      'It is bijective',
      'It fixes real numbers',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Conjugation satisfies (z + w)̄ = z̄ + w̄ and (zw)̄ = z̄w̄, meaning it preserves the algebraic structure of ℂ.',
  },
];

// Section 59: Reflections and Möbius Transformations
export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which transformations generate all Möbius transformations of the upper half plane?',
    options: [
      'Only translations',
      'Only rotations and reflections',
      'Only inversions',
      'z → z + l, z → kz, z → -z̄, z → 1/z̄',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'All Möbius transformations can be built from translations (z → z + l), scalings (z → kz), reflection in the imaginary axis (z → -z̄), and inversion-reflection (z → 1/z̄).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the formula for reflection in the vertical line x = a?',
    options: [
      'z → 2a - z̄',
      'z → z + 2a',
      'z → z̄ - 2a',
      'z → a/z',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reflection in the vertical line x = a is given by z → 2a - z̄. This fixes points on x = a and reverses orientation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What type of transformation is z → kz for k > 0?',
    options: [
      'Scaling (dilation)',
      'Rotation',
      'Reflection',
      'Translation',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'z → kz is a scaling or dilation centered at the origin. It multiplies all distances from the origin by k.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The composition of two reflections in non-Euclidean lines produces what type of transformation?',
    options: [
      'An orientation-preserving Möbius transformation',
      'A reflection',
      'A translation only',
      'A rotation only',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The composition of two reflections is always orientation-preserving. Depending on how the lines meet, it could be a translation, rotation, or limit rotation.',
  },
];

// Section 60: Preserving Non-Euclidean Lines
export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a "generalized circle" in complex analysis?',
    options: [
      'An ellipse',
      'Any closed curve',
      'A spiral',
      'A circle or a straight line',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A generalized circle is either an ordinary circle or a straight line (viewed as a "circle through ∞").',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What do Möbius transformations preserve?',
    options: [
      'Euclidean distances',
      'Areas',
      'Curvature',
      'Generalized circles',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Möbius transformations map generalized circles to generalized circles. A line might map to a circle and vice versa, but circles/lines map to circles/lines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do Möbius transformations preserve non-Euclidean lines?',
    options: [
      'They preserve distances',
      'They preserve angles, and non-Euclidean lines meet the boundary orthogonally',
      'They are linear',
      'They fix the origin',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Non-Euclidean lines are characterized by meeting the x-axis at right angles. Since Möbius transformations preserve both the boundary and angles, they preserve non-Euclidean lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens to the vertical line x = 1 under the map z → 1/z?',
    options: [
      'It remains a vertical line',
      'It becomes a horizontal line',
      'It becomes a semicircle through the origin',
      'It becomes the unit circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Under z → 1/z, lines not through the origin map to circles through the origin. The vertical line x = 1 maps to a circle passing through 0.',
  },
];

// Section 61: Preserving Angle
export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does it mean for a map to be conformal?',
    options: [
      'It preserves distances',
      'It preserves areas',
      'It preserves straight lines',
      'It preserves angles',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A conformal map preserves angles between curves at their intersection points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Are all Möbius transformations conformal?',
    options: [
      'No, only rotations are conformal',
      'Yes, all Möbius transformations preserve angles',
      'Only orientation-preserving ones',
      'Only at certain points',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All Möbius transformations are conformal. Orientation-preserving ones preserve the sense of angles; orientation-reversing ones (involving conjugation) reverse the sense but preserve magnitude.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For f(z) = (az + b)/(cz + d), where is f conformal?',
    options: [
      'Only at z = 0',
      'Everywhere except where cz + d = 0',
      'Only on the real line',
      'Everywhere including at poles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Möbius transformation is conformal everywhere in its domain. It is undefined only where cz + d = 0 (the pole).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, how are angles measured?',
    options: [
      'Using a special hyperbolic protractor',
      'Using the Euclidean angle between curves',
      'Using the cross-ratio',
      'They cannot be measured',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Hyperbolic angles equal Euclidean angles. We measure angles using the standard Euclidean metric on tangent vectors.',
  },
];

// Section 62: Non-Euclidean Distance
export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the hyperbolic distance from i to 2i on the imaginary axis?',
    options: [
      '1',
      '2',
      'π',
      'log 2',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For points pi and qi on the imaginary axis, ndist(pi, qi) = |log(q/p)|. So ndist(i, 2i) = log(2/1) = log 2.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does z → kz (k > 0) preserve hyperbolic distance on the imaginary axis?',
    options: [
      'It fixes the origin',
      'It preserves the ratio q/p',
      'It is a rotation',
      'It preserves Euclidean distance',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ndist(kpi, kqi) = log(kq/kp) = log(q/p) = ndist(pi, qi). The k cancels in the ratio.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the hyperbolic distance from any point in ℋ to the boundary (x-axis)?',
    options: [
      'Zero',
      'Infinite',
      'One',
      'Finite but depends on the point',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The boundary is at infinite hyperbolic distance from every interior point. This is why the boundary is "unreachable" in finite hyperbolic time.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The hyperbolic metric ds = |dz|/y means that at height y, the hyperbolic length of a Euclidean segment is:',
    options: [
      'Multiplied by y',
      'Independent of y',
      'Squared by y',
      'Divided by y',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The metric ds = |dz|/y means hyperbolic length = Euclidean length / y. Near the x-axis (small y), even small Euclidean distances are large hyperbolic distances.',
  },
];

// Section 63: Non-Euclidean Translations and Rotations
export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How are orientation-preserving Möbius transformations classified?',
    options: [
      'By their determinant',
      'By the number of fixed points on ℝ ∪ {∞}',
      'By their trace only',
      'By whether they preserve area',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'They are classified as hyperbolic (2 fixed points on boundary), elliptic (1 fixed point in interior), or parabolic (1 fixed point on boundary).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a hyperbolic translation?',
    options: [
      'Movement along a horocycle',
      'Rotation about a point',
      'Reflection in a line',
      'Movement along a non-Euclidean line (geodesic)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A hyperbolic translation moves points along a geodesic (non-Euclidean line). It has two fixed points on the boundary, the endpoints of its axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a horocycle?',
    options: [
      'A hyperbolic circle',
      'A geodesic',
      'A curve tangent to the boundary at one point',
      'An ellipse',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A horocycle is tangent to the boundary at exactly one point. In the upper half plane, horocycles are horizontal lines (tangent to ∞) or circles tangent to the x-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The transformation z → z + 1 is which type?',
    options: [
      'Hyperbolic (translation along a geodesic)',
      'Elliptic (rotation)',
      'Parabolic (limit rotation)',
      'Reflection',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'z → z + 1 has only ∞ as a fixed point (one fixed point on boundary), making it parabolic. Points move along horizontal horocycles.',
  },
];

// Section 64: Three Reflections or Two Involutions
export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Every Möbius transformation of the upper half plane can be expressed as a product of at most how many reflections?',
    options: [
      'One',
      'Two',
      'Three',
      'Four',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Three Reflections Theorem states that every Möbius transformation is a composition of at most three reflections in non-Euclidean lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an involution?',
    options: [
      'A transformation with no fixed points',
      'A transformation with exactly one fixed point',
      'A transformation that is its own inverse (f ∘ f = id)',
      'A continuous transformation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An involution satisfies f(f(z)) = z for all z. Applying it twice returns to the original. Every reflection is an involution.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a half-turn in hyperbolic geometry?',
    options: [
      'A rotation by 180° about a point in ℋ',
      'A reflection',
      'A translation by half the distance',
      'A parabolic transformation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A half-turn is a rotation by π (180°) about a point. It is an orientation-preserving involution: applying it twice gives the identity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every orientation-preserving Möbius transformation can be written as a product of how many involutions?',
    options: [
      'One',
      'Three',
      'Two',
      'It varies',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Two Involutions Theorem states that every orientation-preserving Möbius transformation is a product of exactly two involutions (such as half-turns).',
  },
];

// Section 65: Discussion
export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who were the independent discoverers of hyperbolic geometry?',
    options: [
      'Newton and Leibniz',
      'Euclid and Pythagoras',
      'Bolyai and Lobachevsky',
      'Gauss and Riemann',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'János Bolyai (Hungary) and Nikolai Lobachevsky (Russia) independently discovered hyperbolic geometry around 1830. Gauss also knew of it but never published.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Saccheri attempt to prove in 1733?',
    options: [
      'The parallel postulate by contradiction',
      'The existence of non-Euclidean geometry',
      'The consistency of Euclidean geometry',
      'The Pythagorean theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Saccheri tried to prove the parallel postulate by assuming its negation and deriving a contradiction. He derived many hyperbolic theorems but rejected the valid geometry he had discovered.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the existence of a model prove about hyperbolic geometry?',
    options: [
      'That it is true in the real world',
      'That it is consistent (if Euclidean geometry is)',
      'That the parallel postulate is false',
      'That Euclid was wrong',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A model shows that hyperbolic geometry is consistent relative to Euclidean geometry: if Euclidean geometry has no contradictions, neither does hyperbolic geometry.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the three constant-curvature geometries, which has angle sums greater than 180° for triangles?',
    options: [
      'Spherical',
      'Euclidean',
      'Hyperbolic',
      'Projective',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Spherical geometry (positive curvature) has triangles with angle sum > 180°. Euclidean has exactly 180°. Hyperbolic (negative curvature) has < 180°.',
  },
];
