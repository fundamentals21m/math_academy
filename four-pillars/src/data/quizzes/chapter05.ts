import type { QuizQuestion } from './types';

// Section 31: Perspective Drawing
export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the key technique introduced by Brunelleschi around 1420 for drawing in perspective?',
    options: [
      'Using only circles and arcs',
      'The costruzione legittima (legitimate construction)',
      'Drawing without any vanishing points',
      'Using parallel projection only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Brunelleschi introduced the costruzione legittima (legitimate construction), a method for creating correct perspective drawings using vanishing points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Where do parallel lines appear to meet in a perspective drawing?',
    options: [
      'At the center of the picture',
      'At random points',
      'At a vanishing point on the horizon',
      'They never meet'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In perspective drawing, parallel lines (except those parallel to the picture plane) appear to meet at a vanishing point on the horizon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the horizon line in perspective drawing?',
    options: [
      'The bottom edge of the picture',
      'The line at eye level where all vanishing points for ground-level parallel lines lie',
      'A vertical line through the center',
      'The top edge of the canvas'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The horizon is the line at eye level that contains the vanishing points for all sets of parallel lines on the ground plane.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In a one-point perspective drawing of a tiled floor, the diagonals help determine:',
    options: [
      'The color of the tiles',
      'The correct spacing of rows receding into the distance',
      'The height of the viewer',
      'The number of tiles'
    ],
    correctIndex: 1,
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
      'Protractor constructions',
      'Ruler measurements',
      'Points at infinity (vanishing points)',
      'Curved line segments'
    ],
    correctIndex: 2,
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
      'Draw parallel lines from $A$ and $B$ to the other line, then use diagonals and $V$',
      'Use a compass to bisect',
      'It cannot be done with straightedge alone'
    ],
    correctIndex: 1,
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
      'Parallelism becomes a matter of incidence (passing through a point)',
      'The drawings become three-dimensional'
    ],
    correctIndex: 2,
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
      'One',
      'Two',
      'Three',
      'Five'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A projective plane is defined by exactly three axioms about incidence of points and lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is one of the projective plane axioms?',
    options: [
      'Any two points lie on exactly one line',
      'Parallel lines never meet',
      'All lines have the same length',
      'Every line passes through the origin'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'One axiom states: Any two "points" lie on exactly one "line."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the model $\\mathbb{R}P^2$, what are the "points"?',
    options: [
      'Points in $\\mathbb{R}^2$',
      'Lines through the origin $O$ in $\\mathbb{R}^3$',
      'Circles in the plane',
      'Triangles in space'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}P^2$, each "point" is a line through the origin $O$ in $\\mathbb{R}^3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}P^2$, what are the "lines"?',
    options: [
      'Lines in $\\mathbb{R}^2$',
      'Planes through the origin $O$ in $\\mathbb{R}^3$',
      'Spheres centered at the origin',
      'Cylinders around the z-axis'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}P^2$, each "line" is a plane through the origin $O$ in $\\mathbb{R}^3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What distinguishes projective geometry from Euclidean geometry regarding parallel lines?',
    options: [
      'Projective geometry has more parallel lines',
      'In projective geometry, any two lines meet',
      'Euclidean geometry has no parallel lines',
      'They are identical in this regard'
    ],
    correctIndex: 1,
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
      '$ax + by + cz = 0$ (linear, homogeneous)',
      '$ax + by + cz = 1$ (linear, non-homogeneous)',
      '$xyz = 0$'
    ],
    correctIndex: 1,
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
      '$z \\neq 0$',
      '$z = 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Ordinary points have $z \\neq 0$ and can be normalized to $(x, y, 1)$, corresponding to $(x, y)$ in $\\mathbb{R}^2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Points with $z = 0$ in homogeneous coordinates correspond to:',
    options: [
      'The origin',
      'Points at infinity (the "line at infinity")',
      'The y-axis',
      'Invalid coordinates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Points with $z = 0$ are the "points at infinity" which together form the line at infinity in $\\mathbb{R}P^2$.',
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
      '$x \\mapsto x + l$ (translation)',
      '$x \\mapsto 1/x$ (reciprocation)'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Projection from a point at infinity onto parallel lines produces a translation: $x \\mapsto x + l$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Projection from a finite point onto parallel lines produces:',
    options: [
      '$x \\mapsto x + l$',
      '$x \\mapsto kx$ (scaling)',
      '$x \\mapsto 1/x$',
      '$x \\mapsto x^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Projection from a finite point onto parallel lines scales distances by a constant factor: $x \\mapsto kx$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Projection onto perpendicular lines (from an equidistant point) produces:',
    options: [
      '$x \\mapsto x + l$',
      '$x \\mapsto kx$',
      '$x \\mapsto 1/x$ (reciprocation)',
      '$x \\mapsto -x$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When projecting onto perpendicular lines from an equidistant point, the transformation is $x \\mapsto 1/x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Any combination of projections can be expressed as:',
    options: [
      'A rotation',
      'A linear fractional function $f(x) = (ax + b)/(cx + d)$',
      'A polynomial',
      'An exponential function'
    ],
    correctIndex: 1,
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
      '$ad - bc \\neq 0$',
      '$a = d$ and $b = c$',
      '$abcd = 1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The condition $ad - bc \\neq 0$ ensures the function is not constant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the real projective line $\\mathbb{R}P^1$?',
    options: [
      'Just the real numbers $\\mathbb{R}$',
      '$\\mathbb{R} \\cup \\{\\infty\\}$, the real numbers plus a point at infinity',
      'The complex numbers',
      'The integers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}P^1 = \\mathbb{R} \\cup \\{\\infty\\}$ extends the real line by adding a single point at infinity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'On $\\mathbb{R}P^1$, what is $1/0$?',
    options: [
      'Undefined',
      '$0$',
      '$1$',
      '$\\infty$'
    ],
    correctIndex: 3,
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
      'Another linear fractional function',
      'A quadratic function'
    ],
    correctIndex: 2,
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
      '$(r - p) + (s - q)$',
      '$\\frac{(r - p)(s - q)}{(r - q)(s - p)}$',
      '$(r - p)(s - q)(r - q)(s - p)$',
      '$\\frac{r + s}{p + q}$'
    ],
    correctIndex: 1,
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
      '$4/3$',
      '$3/2$'
    ],
    correctIndex: 2,
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
      'Three points do not determine a line',
      'Any three points can be sent to any other three points by a linear fractional transformation',
      'Three is not enough points for a ratio',
      'The formula requires four variables'
    ],
    correctIndex: 1,
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
      '$6$ (generated by $1/y$ and $1-y$)',
      '$4$',
      '$2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Although there are 24 permutations of four points, only 6 distinct cross-ratio values arise, generated by the transformations $y \\mapsto 1/y$ and $y \\mapsto 1-y$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $[p, q; r, s] = y$, then $[p, q; s, r] = $',
    options: [
      '$y$',
      '$-y$',
      '$1/y$',
      '$1 - y$'
    ],
    correctIndex: 2,
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
      'Group',
      'Field',
      'Vector space'
    ],
    correctIndex: 2,
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
      '$0$',
      '$1$',
      '$2$',
      'Undefined'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In $F_2$ (the field with two elements), $1 + 1 = 0$. This is addition modulo 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The invariance of the cross-ratio was discovered by:',
    options: [
      'Euclid around 300 BCE',
      'Pappus around 300 CE',
      'Newton in the 17th century',
      'Gauss in the 19th century'
    ],
    correctIndex: 1,
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
