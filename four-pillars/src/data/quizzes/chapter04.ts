import type { QuizQuestion } from './types';

// Section 23: Vectors
export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the parallelogram rule for vector addition?',
    options: [
      'Vectors are multiplied component by component',
      'Vectors are added by concatenating them end to end',
      'The sum is always perpendicular to both vectors',
      '$\\mathbf{u} + \\mathbf{v}$ is the fourth vertex of a parallelogram formed by $\\mathbf{0}$, $\\mathbf{u}$, and $\\mathbf{v}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The vector sum $\\mathbf{u} + \\mathbf{v}$ is the fourth vertex of the parallelogram formed by the points $\\mathbf{0}$, $\\mathbf{u}$, and $\\mathbf{v}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The vector sum $\\mathbf{u} + \\mathbf{v}$ is the fourth vertex of the parallelogram formed by the points $\\mathbf{0}$, $\\mathbf{u}$, and $\\mathbf{v}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does scalar multiplication by $a$ represent geometrically?',
    options: [
      'Magnification (dilation) by factor $a
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Scalar multiplication by $a$ magnifies or dilates the whole plane by the factor $a$, transforming each figure into a similar copy of itself.',
  },
      'Rotation by angle $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scalar multiplication by $a$ magnifies or dilates the whole plane by the factor $a$, transforming each figure into a similar copy of itself.',
  },
      'Translation by $a$ units',
      'Reflection across the origin',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scalar multiplication by $a$ magnifies or dilates the whole plane by the factor $a$, transforming each figure into a similar copy of itself.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many properties must vector addition and scalar multiplication satisfy to form a real vector space?',
    options: [
      'Four',
      'Eight',
      'Six',
      'Ten',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A real vector space requires eight properties: commutativity, associativity, zero element, additive inverse for addition, plus identity, and three distributive/associative properties for scalar multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the geometric meaning when every vector in $\\mathbb{R}^2$ is multiplied by $-1$?',
    options: [
      'Rotation by 90°',
      'Reflection across the x-axis',
      'No change',
      'Rotation by 180° (point reflection through origin)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Multiplying every vector by $-1$ is equivalent to rotation by 180° about the origin, also called point reflection through the origin.',
  },
];

// Section 24: Direction and Linear Independence
export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When are two nonzero vectors $\\mathbf{u}$ and $\\mathbf{v}$ linearly independent?',
    options: [
      'When $\\mathbf{u} = \\mathbf{v}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are linearly independent if neither is a multiple of the other, meaning there are no real numbers $a$ and $b$ (not both zero) with $a\\mathbf{u} + b\\mathbf{v} = \\mathbf{0}$.',
  },
      'When $\\mathbf{u} \\cdot \\mathbf{v} = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are linearly independent if neither is a multiple of the other, meaning there are no real numbers $a$ and $b$ (not both zero) with $a\\mathbf{u} + b\\mathbf{v} = \\mathbf{0}$.',
  },
      'When neither is a multiple of the other',
      'When they have the same length',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are linearly independent if neither is a multiple of the other, meaning there are no real numbers $a$ and $b$ (not both zero) with $a\\mathbf{u} + b\\mathbf{v} = \\mathbf{0}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Line segments from $\\mathbf{v}$ to $\\mathbf{w}$ and from $\\mathbf{s}$ to $\\mathbf{t}$ are parallel if:',
    options: [
      '$\\mathbf{w} + \\mathbf{v} = \\mathbf{t} + \\mathbf{s}$',
      '$\\mathbf{w} - \\mathbf{v} = a(\\mathbf{t} - \\mathbf{s})$ for some $a \\neq 0$',
      '$|\\mathbf{w} - \\mathbf{v}| = |\\mathbf{t} - \\mathbf{s}|$',
      '$\\mathbf{v} = \\mathbf{s}$ and $\\mathbf{w} = \\mathbf{t}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Line segments are parallel if they have the same direction, which means $\\mathbf{w} - \\mathbf{v} = a(\\mathbf{t} - \\mathbf{s})$ for some nonzero real number $a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Vector Thales theorem, if $\\mathbf{w} - \\mathbf{v}$ is parallel to $\\mathbf{t} - \\mathbf{s}$, what can we conclude?',
    options: [
      '$\\mathbf{v} = \\mathbf{s}$ and $\\mathbf{w} = \\mathbf{t}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Vector Thales theorem states that if $\\mathbf{s}$, $\\mathbf{v}$ are on one line through $\\mathbf{0}$, $\\mathbf{t}$, $\\mathbf{w}$ are on another, and $\\mathbf{w} - \\mathbf{v}$ is parallel to $\\mathbf{t} - \\mathbf{s}$, then $\\mathbf{v} = a\\mathbf{s}$ and $\\mathbf{w} = a\\mathbf{t}$ for some $a$.',
  },
      'The vectors are perpendicular',
      '$\\mathbf{v} = a\\mathbf{s}$ and $\\mathbf{w} = a\\mathbf{t}$ for some number $a
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Vector Thales theorem states that if $\\mathbf{s}$, $\\mathbf{v}$ are on one line through $\\mathbf{0}$, $\\mathbf{t}$, $\\mathbf{w}$ are on another, and $\\mathbf{w} - \\mathbf{v}$ is parallel to $\\mathbf{t} - \\mathbf{s}$, then $\\mathbf{v} = a\\mathbf{s}$ and $\\mathbf{w} = a\\mathbf{t}$ for some $a$.',
  },
      'The sum $\\mathbf{v} + \\mathbf{w} = \\mathbf{s} + \\mathbf{t}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Vector Thales theorem states that if $\\mathbf{s}$, $\\mathbf{v}$ are on one line through $\\mathbf{0}$, $\\mathbf{t}$, $\\mathbf{w}$ are on another, and $\\mathbf{w} - \\mathbf{v}$ is parallel to $\\mathbf{t} - \\mathbf{s}$, then $\\mathbf{v} = a\\mathbf{s}$ and $\\mathbf{w} = a\\mathbf{t}$ for some $a$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Vector Thales theorem states that if $\\mathbf{s}$, $\\mathbf{v}$ are on one line through $\\mathbf{0}$, $\\mathbf{t}$, $\\mathbf{w}$ are on another, and $\\mathbf{w} - \\mathbf{v}$ is parallel to $\\mathbf{t} - \\mathbf{s}$, then $\\mathbf{v} = a\\mathbf{s}$ and $\\mathbf{w} = a\\mathbf{t}$ for some $a$.',
  },
];

// Section 25: Midpoints and Centroids
export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the formula for the midpoint of the segment between $\\mathbf{u}$ and $\\mathbf{v}$?',
    options: [
      '$\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average: $\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})$.',
  },
      '$\\mathbf{u} - \\mathbf{v}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average: $\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})$.',
  },
      '$\\mathbf{u} \\cdot \\mathbf{v}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average: $\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})$.',
  },
      '$2(\\mathbf{u} + \\mathbf{v})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average: $\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The midpoint is the vector average: $\\frac{1}{2}(\\mathbf{u} + \\mathbf{v})$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the centroid of a triangle with vertices $\\mathbf{u}$, $\\mathbf{v}$, and $\\mathbf{w}$?',
    options: [
      '$\\mathbf{u} + \\mathbf{v} + \\mathbf{w}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The centroid of a triangle is the vector average of its vertices: $\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})$.',
  },
      '$\\frac{1}{2}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid of a triangle is the vector average of its vertices: $\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})$.',
  },
      '$\\frac{1}{4}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid of a triangle is the vector average of its vertices: $\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})$.',
  },
      '$\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid of a triangle is the vector average of its vertices: $\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The centroid of a triangle is the vector average of its vertices: $\\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What fraction of the way along a median does the centroid lie from a vertex?',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{3}{4}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The centroid lies $\\frac{2}{3}$ of the way from each vertex to the midpoint of the opposite side.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The medians of any triangle:',
    options: [
      'All pass through the same point (the centroid)',
      'Are all equal in length',
      'Are all perpendicular',
      'Never intersect',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The three medians of any triangle are concurrent—they all pass through the centroid.',
  },
];

// Section 26: The Inner Product
export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $\\mathbf{u} = (u_1, u_2)$ and $\\mathbf{v} = (v_1, v_2)$, what is $\\mathbf{u} \\cdot \\mathbf{v}$?',
    options: [
      '$(u_1v_1, u_2v_2)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product (or scalar product) is defined as $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2$.',
  },
      '$u_1v_1 + u_2v_2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product (or scalar product) is defined as $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2$.',
  },
      '$u_1v_2 + u_2v_1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product (or scalar product) is defined as $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2$.',
  },
      '$u_1v_2 - u_2v_1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product (or scalar product) is defined as $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product (or scalar product) is defined as $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ are perpendicular if and only if:',
    options: [
      '$\\mathbf{u} \\cdot \\mathbf{v} = 1$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = -1$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = 0$',
      '$|\\mathbf{u}| = |\\mathbf{v}|$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Vectors are perpendicular if and only if their inner product is zero: $\\mathbf{u} \\cdot \\mathbf{v} = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $|\\mathbf{u}|^2$ in terms of the inner product?',
    options: [
      '$\\mathbf{u} \\cdot \\mathbf{u}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The square of the length is the inner product of a vector with itself: $|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$.',
  },
      '$\\mathbf{u} \\cdot \\mathbf{0}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The square of the length is the inner product of a vector with itself: $|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$.',
  },
      '$2\\mathbf{u} \\cdot \\mathbf{u}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The square of the length is the inner product of a vector with itself: $|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$.',
  },
      '$\\sqrt{\\mathbf{u} \\cdot \\mathbf{u}}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The square of the length is the inner product of a vector with itself: $|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The square of the length is the inner product of a vector with itself: $|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The altitudes of any triangle:',
    options: [
      'Are always equal in length',
      'Pass through the centroid',
      'Are parallel to the sides',
      'Meet at a common point (the orthocenter)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The three altitudes of any triangle are concurrent—they all meet at the orthocenter.',
  },
];

// Section 27: Inner Product and Cosine
export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The inner product formula states that $\\mathbf{u} \\cdot \\mathbf{v}$ equals:',
    options: [
      '$|\\mathbf{u}| + |\\mathbf{v}|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product formula is $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors.',
  },
      '$|\\mathbf{u}||\\mathbf{v}|\\cos\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product formula is $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors.',
  },
      '$|\\mathbf{u}||\\mathbf{v}|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product formula is $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors.',
  },
      '$|\\mathbf{u}||\\mathbf{v}|\\sin\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product formula is $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The inner product formula is $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cosine rule (law of cosines) states that for a triangle with angle $\\theta$ opposite side $\\mathbf{u} - \\mathbf{v}$:',
    options: [
      '$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The cosine rule is $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.',
  },
      '$|\\mathbf{u} - \\mathbf{v}| = |\\mathbf{u}| - |\\mathbf{v}|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cosine rule is $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.',
  },
      '$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cosine rule is $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.',
  },
      '$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 - |\\mathbf{v}|^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cosine rule is $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cosine rule is $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When $\\mathbf{u}$ and $\\mathbf{v}$ are perpendicular, the cosine rule becomes:',
    options: [
      'The triangle inequality',
      'The midpoint formula',
      'The Pythagorean theorem',
      'The Cauchy-Schwarz inequality',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\mathbf{u} \\perp \\mathbf{v}$, $\\cos\\theta = 0$, and the cosine rule reduces to $|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2$—the Pythagorean theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The formula $(\\mathbf{v} + \\mathbf{u}) \\cdot (\\mathbf{v} - \\mathbf{u})$ equals:',
    options: [
      '$|\\mathbf{v}|^2 + |\\mathbf{u}|^2$',
      '$|\\mathbf{v}|^2 - |\\mathbf{u}|^2$',
      '$2\\mathbf{u} \\cdot \\mathbf{v}$',
      '$0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is a difference of squares: $(\\mathbf{v} + \\mathbf{u}) \\cdot (\\mathbf{v} - \\mathbf{u}) = |\\mathbf{v}|^2 - |\\mathbf{u}|^2$.',
  },
];

// Section 28: The Triangle Inequality
export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality states:',
    options: [
      '$|\\mathbf{u} \\cdot \\mathbf{v}| \\geq |\\mathbf{u}||\\mathbf{v}|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cauchy-Schwarz inequality states $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
      '$|\\mathbf{u} + \\mathbf{v}| = |\\mathbf{u}| + |\\mathbf{v}|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy-Schwarz inequality states $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
      '$|\\mathbf{u}| = |\\mathbf{v}|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy-Schwarz inequality states $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
      '$|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy-Schwarz inequality states $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cauchy-Schwarz inequality states $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The triangle inequality states:',
    options: [
      '$|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
  },
      '$|\\mathbf{u} + \\mathbf{v}| = |\\mathbf{u}| + |\\mathbf{v}|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
  },
      '$|\\mathbf{u} + \\mathbf{v}| \\geq |\\mathbf{u}| + |\\mathbf{v}|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
  },
      '$|\\mathbf{u} + \\mathbf{v}| = |\\mathbf{u}| - |\\mathbf{v}|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The triangle inequality states $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality follows from the inner product formula because:',
    options: [
      '$\\cos\\theta$ can be any real number',
      '$|\\cos\\theta| \\leq 1$ for any angle $\\theta$',
      '$\\sin\\theta$ is always positive',
      'The inner product is always positive'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$ and $|\\cos\\theta| \\leq 1$, we get $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^n$, the inner product is defined as:',
    options: [
      '$u_1v_1 \\cdot u_2v_2 \\cdots u_nv_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The inner product in $\\mathbb{R}^n$ is the sum of products: $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
  },
      '$(u_1 + v_1, u_2 + v_2, \\ldots, u_n + v_n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product in $\\mathbb{R}^n$ is the sum of products: $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
  },
      '$\\max(u_1v_1, u_2v_2, \\ldots, u_nv_n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product in $\\mathbb{R}^n$ is the sum of products: $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
  },
      '$u_1v_1 + u_2v_2 + \\cdots + u_nv_n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product in $\\mathbb{R}^n$ is the sum of products: $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product in $\\mathbb{R}^n$ is the sum of products: $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
  },
];

// Section 29: Rotations, Matrices, and Complex Numbers
export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A rotation through angle $\\theta$ is represented by the matrix:',
    options: [
      '$\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation matrix is $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} \\sin\\theta & \\cos\\theta \\\\ \\cos\\theta & \\sin\\theta \\end{pmatrix}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rotation matrix is $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rotation matrix is $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} 1 & \\theta \\\\ \\theta & 1 \\end{pmatrix}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rotation matrix is $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rotation matrix is $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In complex number notation, rotation through angle $\\theta$ is achieved by multiplying by:',
    options: [
      '$\\theta
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rotation through angle $\\theta$ is multiplication by $\\cos\\theta + i\\sin\\theta$.',
  },
      '$\\cos\\theta + i\\sin\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation through angle $\\theta$ is multiplication by $\\cos\\theta + i\\sin\\theta$.',
  },
      '$e^{\\theta}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation through angle $\\theta$ is multiplication by $\\cos\\theta + i\\sin\\theta$.',
  },
      '$\\cos\\theta - i\\sin\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation through angle $\\theta$ is multiplication by $\\cos\\theta + i\\sin\\theta$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation through angle $\\theta$ is multiplication by $\\cos\\theta + i\\sin\\theta$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does $i^2 = -1$ in complex numbers?',
    options: [
      'It is defined arbitrarily',
      'Multiplication by $i$ rotates through $\\pi/2$, so $i^2$ rotates through $\\pi$, which equals multiplication by $-1$',
      'Because $i = \\sqrt{-1}$ by definition only',
      'It follows from the triangle inequality'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Multiplication by $i$ rotates the plane through $\\pi/2$, so $i^2$ rotates through $\\pi$, which is the same as multiplication by $-1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The angle addition formulas can be derived from:',
    options: [
      'Multiplication of rotation matrices or complex numbers',
      'The Pythagorean theorem only',
      'The triangle inequality',
      'The midpoint formula',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The angle addition formulas for sine and cosine follow from multiplying rotation matrices or complex numbers representing consecutive rotations.',
  },
];

// Section 30: Discussion
export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many Hilbert axioms are needed to describe the Euclidean plane?',
    options: [
      '8',
      '12',
      '17 (or 16 without completeness)',
      '20'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'It takes 17 Hilbert axioms to describe the Euclidean plane, or 16 if we drop completeness of the line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The field axioms are needed in vector space geometry because:',
    options: [
      'They define what a vector is',
      'They prove the Pythagorean theorem',
      'They describe the rules for the scalars (real numbers)',
      'They are equivalent to the Hilbert axioms',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The field axioms describe the ordinary rules of calculation for the scalars (real numbers) used in scalar multiplication.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What geometry is used in Einstein\'s special theory of relativity?',
    options: [
      'Euclidean geometry',
      'Spherical geometry',
      'Projective geometry',
      'Minkowski space',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Minkowski space, obtained by varying the inner product, is used in Einstein\'s special theory of relativity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'After this chapter, what type of geometry promises a simpler axiom system?',
    options: [
      'Projective geometry',
      'Spherical geometry',
      'Hyperbolic geometry',
      'Riemannian geometry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Projective geometry, studied in Chapters 5 and 6, can be built on a much simpler set of axioms.',
  },
];
