/**
 * Curated catalog of interactive visualizations across courses
 * Each entry has hand-written descriptions suitable for social media posts
 */

export const VISUALIZATION_CATALOG = [
  // =============================================================================
  // GAUSS - Disquisitiones Arithmeticae
  // =============================================================================
  {
    id: 'gauss-modular-arithmetic',
    title: 'Modular Arithmetic Calculator',
    description: 'Explore modular arithmetic interactively. Calculate remainders, find multiplicative inverses, and see how clock arithmetic works in number theory.',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 0,
    url: 'https://gauss-deploy.vercel.app/#/section/0',
    tags: ['number-theory', 'interactive', 'calculator'],
  },
  {
    id: 'gauss-euclidean-algorithm',
    title: 'Euclidean Algorithm Visualizer',
    description: 'Watch the ancient Euclidean algorithm compute greatest common divisors step by step. See how 2300-year-old mathematics still powers modern cryptography.',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 1,
    url: 'https://gauss-deploy.vercel.app/#/section/1',
    tags: ['number-theory', 'algorithm', 'gcd'],
  },
  {
    id: 'gauss-primitive-root',
    title: 'Primitive Root Explorer',
    description: 'Discover which integers generate all residues modulo a prime. Explore the cyclic structure of multiplicative groups that underlies Diffie-Hellman key exchange.',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 2,
    url: 'https://gauss-deploy.vercel.app/#/section/2',
    tags: ['number-theory', 'primitive-roots', 'group-theory'],
  },
  {
    id: 'gauss-quadratic-residue',
    title: 'Quadratic Residue Checker',
    description: 'Test which numbers are perfect squares modulo a prime. Visualize the pattern that led Gauss to call quadratic reciprocity the "golden theorem."',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 3,
    url: 'https://gauss-deploy.vercel.app/#/section/3',
    tags: ['number-theory', 'quadratic-residues'],
  },
  {
    id: 'gauss-binary-quadratic-form',
    title: 'Binary Quadratic Form Explorer',
    description: 'Investigate which integers can be represented as ax^2 + bxy + cy^2. A key tool Gauss used to study primes of the form x^2 + ny^2.',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 4,
    url: 'https://gauss-deploy.vercel.app/#/section/4',
    tags: ['number-theory', 'quadratic-forms'],
  },
  {
    id: 'gauss-pell-equation',
    title: 'Pell Equation Solver',
    description: 'Find integer solutions to x^2 - Dy^2 = 1. Watch continued fractions reveal the fundamental solution to these ancient Diophantine equations.',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 5,
    url: 'https://gauss-deploy.vercel.app/#/section/5',
    tags: ['number-theory', 'diophantine'],
  },
  {
    id: 'gauss-constructible-polygon',
    title: 'Constructible Polygon Demo',
    description: 'See which regular polygons can be constructed with compass and straightedge. Gauss proved the 17-gon is constructible at age 19!',
    courseId: 'gauss',
    courseName: 'Disquisitiones Arithmeticae',
    sectionId: 6,
    url: 'https://gauss-deploy.vercel.app/#/section/6',
    tags: ['geometry', 'construction', 'cyclotomy'],
  },

  // =============================================================================
  // FOUR PILLARS - Four Pillars of Geometry
  // =============================================================================
  {
    id: 'four-pillars-cross-ratio',
    title: 'Cross-Ratio Explorer',
    description: 'Discover the cross-ratio, the fundamental invariant of projective geometry. See how this quantity stays constant under perspective transformations.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 34,
    url: 'https://four-pillars.vercel.app/#/section/34',
    tags: ['projective-geometry', 'invariant'],
  },
  {
    id: 'four-pillars-homogeneous-coords',
    title: 'Homogeneous Coordinates Demo',
    description: 'Learn how adding an extra coordinate lets us handle points at infinity. The key trick that makes projective geometry work.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 36,
    url: 'https://four-pillars.vercel.app/#/section/36',
    tags: ['projective-geometry', 'coordinates'],
  },
  {
    id: 'four-pillars-linear-fractional',
    title: 'Linear Fractional Transformation Demo',
    description: 'Explore transformations of the form (ax+b)/(cx+d). These maps form a group and connect algebra to geometry beautifully.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 37,
    url: 'https://four-pillars.vercel.app/#/section/37',
    tags: ['transformation', 'group-theory'],
  },
  {
    id: 'four-pillars-quaternion-rotation',
    title: 'Quaternion Rotation Demo',
    description: 'Visualize 3D rotations using quaternions. See why video game developers and aerospace engineers prefer quaternions over Euler angles.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 48,
    url: 'https://four-pillars.vercel.app/#/section/48',
    tags: ['quaternions', '3d-rotation'],
  },
  {
    id: 'four-pillars-sphere-rotation',
    title: 'Sphere Rotation Group Demo',
    description: 'Explore the group SO(3) of all rotations in 3D space. Every rotation is a composition of two reflections!',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 49,
    url: 'https://four-pillars.vercel.app/#/section/49',
    tags: ['rotation', 'group-theory'],
  },
  {
    id: 'four-pillars-isometry-group',
    title: 'Isometry Group Demo',
    description: 'Discover the isometries of 3D space: translations, rotations, reflections, and glide reflections. Every distance-preserving map is one of these!',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 52,
    url: 'https://four-pillars.vercel.app/#/section/52',
    tags: ['isometry', 'group-theory'],
  },
  {
    id: 'four-pillars-angle-preservation',
    title: 'Angle Preservation in Hyperbolic Geometry',
    description: 'See how the hyperbolic plane preserves angles but distorts distances. Maps that preserve angles are called conformal.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 60,
    url: 'https://four-pillars.vercel.app/#/section/60',
    tags: ['hyperbolic-geometry', 'conformal'],
  },
  {
    id: 'four-pillars-non-euclidean-lines',
    title: 'Non-Euclidean Lines Demo',
    description: 'Explore straight lines in hyperbolic geometry. In the Poincare disk, geodesics appear as circular arcs perpendicular to the boundary.',
    courseId: 'four-pillars',
    courseName: 'Four Pillars of Geometry',
    sectionId: 61,
    url: 'https://four-pillars.vercel.app/#/section/61',
    tags: ['hyperbolic-geometry', 'geodesic'],
  },

  // =============================================================================
  // WEST GRAPHS - Introduction to Graph Theory
  // =============================================================================
  {
    id: 'west-graph-builder',
    title: 'Graph Builder',
    description: 'Build and explore graphs interactively. Add vertices, draw edges, and discover properties like connectivity and degrees.',
    courseId: 'west-graphs',
    courseName: 'Introduction to Graph Theory',
    sectionId: 0,
    url: 'https://west-graphs-deploy.vercel.app/#/section/0',
    tags: ['graph-theory', 'interactive'],
  },
  {
    id: 'west-tree-explorer',
    title: 'Tree Explorer',
    description: 'Discover trees: connected graphs with no cycles. Every tree with n vertices has exactly n-1 edges!',
    courseId: 'west-graphs',
    courseName: 'Introduction to Graph Theory',
    sectionId: 1,
    url: 'https://west-graphs-deploy.vercel.app/#/section/1',
    tags: ['graph-theory', 'trees'],
  },
  {
    id: 'west-eulerian-path',
    title: 'Eulerian Path Finder',
    description: 'Find paths that traverse every edge exactly once. Euler solved this for the Seven Bridges of Konigsberg in 1736!',
    courseId: 'west-graphs',
    courseName: 'Introduction to Graph Theory',
    sectionId: 2,
    url: 'https://west-graphs-deploy.vercel.app/#/section/2',
    tags: ['graph-theory', 'eulerian'],
  },
  {
    id: 'west-bipartite-checker',
    title: 'Bipartite Graph Checker',
    description: 'Test if a graph can be 2-colored. A graph is bipartite if and only if it contains no odd cycles!',
    courseId: 'west-graphs',
    courseName: 'Introduction to Graph Theory',
    sectionId: 3,
    url: 'https://west-graphs-deploy.vercel.app/#/section/3',
    tags: ['graph-theory', 'bipartite', 'coloring'],
  },
  {
    id: 'west-matching-visualizer',
    title: 'Matching Visualizer',
    description: 'Find maximum matchings in bipartite graphs. This algorithm solves the stable marriage problem and job assignment!',
    courseId: 'west-graphs',
    courseName: 'Introduction to Graph Theory',
    sectionId: 4,
    url: 'https://west-graphs-deploy.vercel.app/#/section/4',
    tags: ['graph-theory', 'matching'],
  },

  // =============================================================================
  // LINEAR ALGEBRA
  // =============================================================================
  {
    id: 'linalg-vector-operations',
    title: 'Vector Operations Visualizer',
    description: 'See vector addition, scalar multiplication, and linear combinations in action. The building blocks of linear algebra!',
    courseId: 'linalg',
    courseName: 'Linear Algebra',
    sectionId: 0,
    url: 'https://linalg-pink.vercel.app/#/section/0',
    tags: ['linear-algebra', 'vectors'],
  },
  {
    id: 'linalg-matrix-transform',
    title: 'Matrix Transformation Demo',
    description: 'Watch how matrices transform the plane. Rotations, reflections, shears, and stretches are all matrix multiplications!',
    courseId: 'linalg',
    courseName: 'Linear Algebra',
    sectionId: 1,
    url: 'https://linalg-pink.vercel.app/#/section/1',
    tags: ['linear-algebra', 'transformation'],
  },
  {
    id: 'linalg-determinant',
    title: 'Determinant Visualizer',
    description: 'Understand the determinant as signed area/volume. See why det(AB) = det(A)det(B) and when matrices are invertible.',
    courseId: 'linalg',
    courseName: 'Linear Algebra',
    sectionId: 5,
    url: 'https://linalg-pink.vercel.app/#/section/5',
    tags: ['linear-algebra', 'determinant'],
  },
  {
    id: 'linalg-eigenvalue',
    title: 'Eigenvalue Explorer',
    description: 'Find vectors that only get scaled by a matrix. Eigenvalues reveal the fundamental structure of linear transformations.',
    courseId: 'linalg',
    courseName: 'Linear Algebra',
    sectionId: 10,
    url: 'https://linalg-pink.vercel.app/#/section/10',
    tags: ['linear-algebra', 'eigenvalues'],
  },

  // =============================================================================
  // CRYPTOGRAPHY
  // =============================================================================
  {
    id: 'crypto-caesar-cipher',
    title: 'Caesar Cipher Demo',
    description: 'Encrypt messages like Julius Caesar did! Shift letters by a fixed amount. Try breaking it with frequency analysis.',
    courseId: 'crypto-react',
    courseName: 'Cryptography Math',
    sectionId: 0,
    url: 'https://cryptography-xi.vercel.app/#/section/0',
    tags: ['cryptography', 'classical'],
  },
  {
    id: 'crypto-rsa-demo',
    title: 'RSA Encryption Demo',
    description: 'See how RSA public-key encryption works. The security relies on the difficulty of factoring large numbers!',
    courseId: 'crypto-react',
    courseName: 'Cryptography Math',
    sectionId: 8,
    url: 'https://cryptography-xi.vercel.app/#/section/8',
    tags: ['cryptography', 'rsa', 'public-key'],
  },
  {
    id: 'crypto-diffie-hellman',
    title: 'Diffie-Hellman Key Exchange',
    description: 'Watch two parties create a shared secret over a public channel. The magic of discrete logarithms makes this possible!',
    courseId: 'crypto-react',
    courseName: 'Cryptography Math',
    sectionId: 10,
    url: 'https://cryptography-xi.vercel.app/#/section/10',
    tags: ['cryptography', 'key-exchange'],
  },

  // =============================================================================
  // CALCULUS
  // =============================================================================
  {
    id: 'calc-derivative-grapher',
    title: 'Derivative Visualizer',
    description: 'See how the derivative measures instantaneous rate of change. Watch the tangent line move along any curve.',
    courseId: 'calc1-course',
    courseName: 'Calculus I',
    sectionId: 3,
    url: 'https://calc1-course.vercel.app/#/section/3',
    tags: ['calculus', 'derivative'],
  },
  {
    id: 'calc-integral-area',
    title: 'Riemann Sum Visualizer',
    description: 'Approximate area under a curve with rectangles. Watch how the limit of Riemann sums defines the integral.',
    courseId: 'calc1-course',
    courseName: 'Calculus I',
    sectionId: 10,
    url: 'https://calc1-course.vercel.app/#/section/10',
    tags: ['calculus', 'integral'],
  },
  {
    id: 'calc-ftc-demo',
    title: 'Fundamental Theorem of Calculus',
    description: 'See how differentiation and integration are inverse operations. The most important theorem in calculus!',
    courseId: 'calc1-course',
    courseName: 'Calculus I',
    sectionId: 15,
    url: 'https://calc1-course.vercel.app/#/section/15',
    tags: ['calculus', 'ftc'],
  },

  // =============================================================================
  // ABSTRACT ALGEBRA
  // =============================================================================
  {
    id: 'abstract-group-cayley',
    title: 'Group Cayley Table Builder',
    description: 'Build multiplication tables for finite groups. Discover patterns in Z_n, symmetric groups, and dihedral groups.',
    courseId: 'abstract-algebra',
    courseName: 'Abstract Algebra',
    sectionId: 2,
    url: 'https://mathacademy-cyan.vercel.app/#/section/2',
    tags: ['abstract-algebra', 'groups'],
  },
  {
    id: 'abstract-symmetry-explorer',
    title: 'Symmetry Group Explorer',
    description: 'Find all symmetries of regular polygons. The dihedral group D_n has 2n elements: n rotations and n reflections.',
    courseId: 'abstract-algebra',
    courseName: 'Abstract Algebra',
    sectionId: 5,
    url: 'https://mathacademy-cyan.vercel.app/#/section/5',
    tags: ['abstract-algebra', 'symmetry'],
  },

  // =============================================================================
  // REAL ANALYSIS
  // =============================================================================
  {
    id: 'analysis-sequence-convergence',
    title: 'Sequence Convergence Visualizer',
    description: 'Watch sequences converge (or diverge). See the epsilon-N definition of limits come to life.',
    courseId: 'real-analysis',
    courseName: 'Real Analysis',
    sectionId: 2,
    url: 'https://real-analysis-eta.vercel.app/#/section/2',
    tags: ['analysis', 'sequences'],
  },
  {
    id: 'analysis-continuity',
    title: 'Continuity Explorer',
    description: 'Test functions for continuity at a point. Understand the epsilon-delta definition visually.',
    courseId: 'real-analysis',
    courseName: 'Real Analysis',
    sectionId: 8,
    url: 'https://real-analysis-eta.vercel.app/#/section/8',
    tags: ['analysis', 'continuity'],
  },

  // =============================================================================
  // STATISTICS (ISLR)
  // =============================================================================
  {
    id: 'islr-linear-regression',
    title: 'Linear Regression Fitter',
    description: 'Fit a line to data points using least squares. See how regression minimizes the sum of squared residuals.',
    courseId: 'islr',
    courseName: 'Intro to Statistical Learning',
    sectionId: 3,
    url: 'https://mathacademy-cyan.vercel.app/#/section/3',
    tags: ['statistics', 'regression'],
  },
  {
    id: 'islr-classification',
    title: 'Classification Boundary Visualizer',
    description: 'See how classifiers divide feature space into regions. Compare logistic regression, LDA, and KNN boundaries.',
    courseId: 'islr',
    courseName: 'Intro to Statistical Learning',
    sectionId: 10,
    url: 'https://mathacademy-cyan.vercel.app/#/section/10',
    tags: ['statistics', 'classification'],
  },

  // =============================================================================
  // BASIC ALGEBRA
  // =============================================================================
  {
    id: 'basic-number-line',
    title: 'Number Line Explorer',
    description: 'Visualize integers, rationals, and operations on the number line. The foundation of all arithmetic!',
    courseId: 'basic-algebra',
    courseName: 'Basic Algebra',
    sectionId: 0,
    url: 'https://basic-algebra.vercel.app/#/section/0',
    tags: ['algebra', 'number-line'],
  },
  {
    id: 'basic-polynomial-grapher',
    title: 'Polynomial Grapher',
    description: 'Plot polynomials and find their roots. See how the degree determines the shape of the curve.',
    courseId: 'basic-algebra',
    courseName: 'Basic Algebra',
    sectionId: 20,
    url: 'https://basic-algebra.vercel.app/#/section/20',
    tags: ['algebra', 'polynomials'],
  },

  // =============================================================================
  // WHY MATH
  // =============================================================================
  {
    id: 'why-math-proof-explorer',
    title: 'Proof Structure Visualizer',
    description: 'See the logical structure of mathematical proofs. Direct proof, contradiction, and induction explained visually.',
    courseId: 'why-math',
    courseName: 'Why Math?',
    sectionId: 5,
    url: 'https://why-math.vercel.app/#/section/5',
    tags: ['logic', 'proof'],
  },
];

/**
 * Format a visualization for posting
 */
export function formatVisualizationPost(viz) {
  const lines = [
    `🎮 Interactive: ${viz.title}`,
    '',
    viz.description,
    '',
    `From: ${viz.courseName}`,
    `Try it: ${viz.url}`,
    '',
    `Explore all courses: https://mathacademy-cyan.vercel.app`,
  ];

  return lines.join('\n');
}

/**
 * Get a content ID for a visualization
 */
export function getVisualizationContentId(viz) {
  return `viz:${viz.id}`;
}

/**
 * Get all visualizations
 */
export function getAllVisualizations() {
  return VISUALIZATION_CATALOG;
}
