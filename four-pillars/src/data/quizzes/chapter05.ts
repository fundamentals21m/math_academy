import type { QuizQuestion } from './types';

// Section 31: Perspective Drawing
export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the key technique introduced by Brunelleschi around 1420 for drawing in perspective?',
    options: [
      'The costruzione legittima (legitimate construction)',
      'Using only circles and arcs',
      'Drawing without any vanishing points',
      'Using parallel projection only'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Brunelleschi introduced the costruzione legittima (legitimate construction), a method for creating correct perspective drawings using vanishing points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Where do parallel lines appear to meet in a perspective drawing?',
    options: [
      'At the center of the picture',
      'At a vanishing point on the horizon',
      'At random points',
      'They never meet'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In perspective drawing, parallel lines (except those parallel to the picture plane) appear to meet at a vanishing point on the horizon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the horizon line in perspective drawing?',
    options: [
      'The bottom edge of the picture',
      'A vertical line through the center',
      'The line at eye level where all vanishing points for ground-level parallel lines lie',
      'The top edge of the canvas'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The horizon is the line at eye level that contains the vanishing points for all sets of parallel lines on the ground plane.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In a one-point perspective drawing of a tiled floor, the diagonals help determine:',
    options: [
      'The color of the tiles',
      'The height of the viewer',
      'The number of tiles',
      'The correct spacing of rows receding into the distance'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The diagonals of square tiles have their own vanishing point, which helps determine where to place the horizontal lines for each row of tiles.',
  },
];

// Section 32: Drawing with Straightedge Alone
export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In projective geometry, what replaces compass constructions?',
    options: [
      'Points at infinity (vanishing points)',
      'Protractor constructions',
      'Ruler measurements',
      'Curved line segments'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Points at infinity (vanishing points) allow straightedge-only constructions to accomplish tasks that would otherwise require a compass.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How can you draw a line through point $P$ parallel to line $\\mathcal{L}$ using only a straightedge?',
    options: [
      'It is impossible with straightedge alone',
      'Draw a line from $P$ through the vanishing point of $\\mathcal{L}$',
      'Draw a perpendicular first',
      'Measure equal distances with the straightedge'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A line through $P$ parallel to $\\mathcal{L}$ is drawn by connecting $P$ to the vanishing point of $\\mathcal{L}$, since parallel lines share the same vanishing point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Given two parallel lines and their vanishing point $V$, how do you find the midpoint of a segment $AB$ on one line?',
    options: [
      'Measure with a ruler',
      'Use a compass to bisect',
      'Draw parallel lines from $A$ and $B$ to the other line, then use diagonals and $V$',
      'It cannot be done with straightedge alone'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Using the vanishing point and a second parallel line, you can construct a parallelogram and use its diagonals to find the midpoint.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the key advantage of using points at infinity in straightedge constructions?',
    options: [
      'Drawings become more colorful',
      'Lines can be made perfectly straight',
      'The drawings become three-dimensional',
      'Parallelism becomes a matter of incidence (passing through a point)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Points at infinity convert the property of parallelism into incidence—parallel lines all pass through their vanishing point.',
  },
];

// Section 33: Projective Plane Axioms and Their Models
export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many axioms define a projective plane?',
    options: [
      'Three',
      'One',
      'Two',
      'Five'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A projective plane is defined by exactly three axioms about incidence of points and lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is one of the projective plane axioms?',
    options: [
      'Parallel lines never meet',
      'Any two points lie on exactly one line',
      'All lines have the same length',
      'Every line passes through the origin'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'One axiom states: Any two "points" lie on exactly one "line."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the model $\\mathbb{R}P^2$, what are the "points"?',
    options: [
      'Points in $\\mathbb{R}^2$',
      'Circles in the plane',
      'Lines through the origin $O$ in $\\mathbb{R}^3$',
      'Triangles in space'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}P^2$, each "point" is a line through the origin $O$ in $\\mathbb{R}^3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}P^2$, what are the "lines"?',
    options: [
      'Lines in $\\mathbb{R}^2$',
      'Spheres centered at the origin',
      'Cylinders around the z-axis',
      'Planes through the origin $O$ in $\\mathbb{R}^3$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}P^2$, each "line" is a plane through the origin $O$ in $\\mathbb{R}^3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What distinguishes projective geometry from Euclidean geometry regarding parallel lines?',
    options: [
      'In projective geometry, any two lines meet',
      'Projective geometry has more parallel lines',
      'Euclidean geometry has no parallel lines',
      'They are identical in this regard'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In projective geometry, there are no parallel lines—any two distinct lines meet at exactly one point.',
  },
];

// Section 34: Homogeneous Coordinates
export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Homogeneous coordinates for a point in $\\mathbb{R}P^2$ consist of:',
    options: [
      'A pair $(x, y)$',
      'A triple $(x, y, z)$ not all zero, where $(kx, ky, kz)$ represents the same point',
      'A single number $x$',
      'Four coordinates $(w, x, y, z)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A point in $\\mathbb{R}P^2$ is represented by a triple $(x, y, z)$ where not all are zero, and $(kx, ky, kz)$ represents the same point for any nonzero $k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A "line" in $\\mathbb{R}P^2$ is defined by what type of equation?',
    options: [
      '$x^2 + y^2 + z^2 = 1$',
      '$ax + by + cz = 1$ (linear, non-homogeneous)',
      '$ax + by + cz = 0$ (linear, homogeneous)',
      '$xyz = 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lines in $\\mathbb{R}P^2$ are defined by homogeneous linear equations $ax + by + cz = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "ordinary" points of $\\mathbb{R}P^2$ are those with:',
    options: [
      '$x = 0$',
      '$y = 0$',
      '$z = 0$',
      '$z \\neq 0$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Ordinary points have $z \\neq 0$ and can be normalized to $(x, y, 1)$, corresponding to $(x, y)$ in $\\mathbb{R}^2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Points with $z = 0$ in homogeneous coordinates correspond to:',
    options: [
      'Points at infinity (the "line at infinity")',
      'The origin',
      'The y-axis',
      'Invalid coordinates'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Points with $z = 0$ are the "points at infinity" which together form the line at infinity in $\\mathbb{R}P^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To find the "line" through two "points" $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ in $\\mathbb{R}P^2$, you solve:',
    options: [
      'A quadratic equation in $a, b, c$',
      'Two linear equations $ax_1 + by_1 + cz_1 = 0$ and $ax_2 + by_2 + cz_2 = 0$',
      'The equation $x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$',
      'No solution is needed; just connect the points'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coefficients $(a, b, c)$ of the line must satisfy both $ax_1 + by_1 + cz_1 = 0$ and $ax_2 + by_2 + cz_2 = 0$, giving a family of solutions $(ta, tb, tc)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What makes the complex projective plane $\\mathbb{C}P^2$ different from $\\mathbb{R}P^2$?',
    options: [
      'It has different axioms',
      'Lines are defined by non-homogeneous equations',
      'The coordinates $x, y, z$ and scalar $t$ are complex numbers instead of real',
      'It has no points at infinity'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{C}P^2$, the coordinates are complex numbers and $t$ ranges over nonzero complex numbers. The algebraic structure and axioms remain the same.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}P^3$ (projective 3-space), a "point" is represented by:',
    options: [
      'A triple $(x, y, z)$',
      'A pair $(x, y)$',
      'A single coordinate $x$',
      'A quadruple $(w, x, y, z)$ with multiples $(tw, tx, ty, tz)$ representing the same point'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{R}P^3$, points are represented by quadruples $(w, x, y, z)$ not all zero, with $(tw, tx, ty, tz)$ representing the same point for any $t \\neq 0$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}P^3$, what is a "line"?',
    options: [
      'A 2-dimensional subspace (plane through O) in $\\mathbb{R}^4$',
      'A 1-dimensional subspace (line through O) in $\\mathbb{R}^4$',
      'A 3-dimensional subspace in $\\mathbb{R}^4$',
      'A circle in $\\mathbb{R}^4$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In $\\mathbb{R}P^3$, a "line" is a plane through the origin in $\\mathbb{R}^4$, spanned by two linearly independent vectors.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Which property holds in $\\mathbb{R}P^3$?',
    options: [
      'Two "points" determine a unique "plane"',
      'Two "planes" have a unique "line" in common',
      'Two "planes" have a unique "point" in common',
      'Three "planes" always have a common "line"'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}P^3$, any two distinct "planes" intersect in exactly one "line." This follows from linear algebra: two 3-dimensional subspaces of $\\mathbb{R}^4$ through O intersect in a 2-dimensional subspace.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Why is the equation $ax + by + cz = 0$ called "homogeneous"?',
    options: [
      'Because the coefficients $a, b, c$ are equal',
      'Because it has a unique solution',
      'Because all terms have the same degree (degree 1)',
      'Because it describes a sphere'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A homogeneous equation has all terms of the same degree. In $ax + by + cz = 0$, each term has degree 1. This ensures that if $(x, y, z)$ is a solution, so is $(tx, ty, tz)$ for any $t$.',
  },
];

// Section 35: Projection
export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When projecting parallel lines $\\mathcal{L}_1$ and $\\mathcal{L}_2$, what transformation does the map represent?',
    options: [
      'Rotation',
      'Reflection',
      '$x \\mapsto 1/x$ (reciprocation)',
      '$x \\mapsto x + l$ (translation)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Projection from a point at infinity onto parallel lines produces a translation: $x \\mapsto x + l$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Projection from a finite point onto parallel lines produces:',
    options: [
      '$x \\mapsto kx$ (scaling)',
      '$x \\mapsto x + l$',
      '$x \\mapsto 1/x$',
      '$x \\mapsto x^2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Projection from a finite point onto parallel lines scales distances by a constant factor: $x \\mapsto kx$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Projection onto perpendicular lines (from an equidistant point) produces:',
    options: [
      '$x \\mapsto x + l$',
      '$x \\mapsto 1/x$ (reciprocation)',
      '$x \\mapsto kx$',
      '$x \\mapsto -x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When projecting onto perpendicular lines from an equidistant point, the transformation is $x \\mapsto 1/x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Any combination of projections can be expressed as:',
    options: [
      'A rotation',
      'A polynomial',
      'A linear fractional function $f(x) = (ax + b)/(cx + d)$',
      'An exponential function'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Any sequence of projections is equivalent to a linear fractional function $f(x) = (ax + b)/(cx + d)$ where $ad - bc \\neq 0$.',
  },
];

// Section 36: Linear Fractional Functions
export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear fractional function has the form $f(x) = (ax + b)/(cx + d)$. What condition must the coefficients satisfy?',
    options: [
      '$a + b + c + d = 1$',
      '$a = d$ and $b = c$',
      '$abcd = 1$',
      '$ad - bc \\neq 0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The condition $ad - bc \\neq 0$ ensures the function is not constant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the real projective line $\\mathbb{R}P^1$?',
    options: [
      '$\\mathbb{R} \\cup \\{\\infty\\}$, the real numbers plus a point at infinity',
      'Just the real numbers $\\mathbb{R}$',
      'The complex numbers',
      'The integers'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}P^1 = \\mathbb{R} \\cup \\{\\infty\\}$ extends the real line by adding a single point at infinity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'On $\\mathbb{R}P^1$, what is $1/0$?',
    options: [
      'Undefined',
      '$\\infty$',
      '$0$',
      '$1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'On the projective line, we define $1/0 = \\infty$ and $1/\\infty = 0$, making reciprocation well-defined everywhere.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many points on $\\mathbb{R}P^1$ determine a unique linear fractional transformation?',
    options: [
      'One point',
      'Two points',
      'Three points (and their images)',
      'Four points'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Three points and their images determine a unique linear fractional transformation. Once three points are fixed, every other point is determined.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The composition of two linear fractional functions is:',
    options: [
      'Not a linear fractional function',
      'Always the identity',
      'A quadratic function',
      'Another linear fractional function'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The composition of linear fractional functions is again linear fractional, and corresponds to matrix multiplication of the coefficient matrices.',
  },
];

// Section 37: The Cross-Ratio
export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cross-ratio of four points $p, q, r, s$ on a line is defined as:',
    options: [
      '$\\frac{(r - p)(s - q)}{(r - q)(s - p)}$',
      '$(r - p) + (s - q)$',
      '$(r - p)(s - q)(r - q)(s - p)$',
      '$\\frac{r + s}{p + q}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The cross-ratio is $\\frac{(r - p)(s - q)}{(r - q)(s - p)}$, a ratio of ratios.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cross-ratio is called a "ratio of ratios" because:',
    options: [
      'It involves four additions',
      'It is the ratio $\\frac{(r-p)/(s-p)}{(r-q)/(s-q)}$',
      'It always equals a ratio of integers',
      'It is computed by taking ratios repeatedly'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The cross-ratio can be written as $\\frac{(r-p)/(s-p)}{(r-q)/(s-q)}$, making it a ratio of two ratios.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cross-ratio is preserved by:',
    options: [
      'Only translations',
      'Only rotations',
      'All linear fractional transformations (projections)',
      'No transformations'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The cross-ratio is invariant under all linear fractional transformations, which represent projections.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For four equally spaced points $p = 0, q = 1, r = 2, s = 3$, what is the cross-ratio?',
    options: [
      '$1$',
      '$2$',
      '$3/2$',
      '$4/3$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cross-ratio is $\\frac{(2-0)(3-1)}{(2-1)(3-0)} = \\frac{2 \\cdot 2}{1 \\cdot 3} = \\frac{4}{3}$.',
  },
];

// Section 38: What is Special About the Cross-Ratio?
export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is there no nontrivial projective invariant for three points?',
    options: [
      'Any three points can be sent to any other three points by a linear fractional transformation',
      'Three points do not determine a line',
      'Three is not enough points for a ratio',
      'The formula requires four variables'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since any three points can be mapped to any three points by a linear fractional transformation, any invariant of triples would have the same value for all triples—thus trivial.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The theorem of "fourth point determination" states:',
    options: [
      'Any fourth point is arbitrary',
      'Given three points and a cross-ratio value, the fourth point is uniquely determined',
      'Four points always have cross-ratio 1',
      'The fourth point can be anywhere'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Given three points $p, q, r$ and a cross-ratio value $y$, there is exactly one fourth point $x$ such that $[p, q; r, x] = y$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Linear fractional transformations are characterized as precisely those maps that:',
    options: [
      'Preserve distances',
      'Preserve angles',
      'Preserve the cross-ratio',
      'Preserve areas'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Linear fractional transformations are exactly the transformations of $\\mathbb{R}P^1$ that preserve the cross-ratio.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many distinct values can the cross-ratio take when we permute four points?',
    options: [
      '$24$ (all permutations give different values)',
      '$4$',
      '$2$',
      '$6$ (generated by $1/y$ and $1-y$)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Although there are 24 permutations of four points, only 6 distinct cross-ratio values arise, generated by the transformations $y \\mapsto 1/y$ and $y \\mapsto 1-y$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $[p, q; r, s] = y$, then $[p, q; s, r] = $',
    options: [
      '$1/y$',
      '$y$',
      '$-y$',
      '$1 - y$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Swapping the last two points inverts the cross-ratio: $[p, q; s, r] = 1/y$.',
  },
];

// Section 39: Discussion
export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The projective plane $FP^2$ can be constructed over any:',
    options: [
      'Ring',
      'Field',
      'Group',
      'Vector space'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The projective plane construction works over any field $F$, using triples from $F^3$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The smallest projective plane, the Fano plane $F_2P^2$, has how many points?',
    options: [
      '$3$',
      '$5$',
      '$7$',
      '$9$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Fano plane has 7 points, corresponding to the 7 nonzero points in $F_2^3$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the field $F_2 = \\{0, 1\\}$, what is $1 + 1$?',
    options: [
      '$1$',
      '$2$',
      'Undefined',
      '$0$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In $F_2$ (the field with two elements), $1 + 1 = 0$. This is addition modulo 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The invariance of the cross-ratio was discovered by:',
    options: [
      'Pappus around 300 CE',
      'Euclid around 300 BCE',
      'Newton in the 17th century',
      'Gauss in the 19th century'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The invariance of the cross-ratio was discovered by Pappus around 300 CE and rediscovered by Desargues around 1640.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What additional axiom ensures that a projective plane has coordinates from a field?',
    options: [
      'The parallel axiom',
      'The theorem of Pappus',
      'The completeness axiom',
      'The Archimedean axiom'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The theorem of Pappus is the fourth axiom needed to ensure that the projective plane has coordinates satisfying the field axioms.',
  },
];
