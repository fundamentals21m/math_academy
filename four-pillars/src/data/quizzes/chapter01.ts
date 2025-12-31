/**
 * Chapter 1: Straightedge and Compass
 * Quiz questions for sections 1-5
 */

import type { QuizQuestion } from './types';

// Section 1: Euclid's Construction of the Equilateral Triangle
export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Euclid\'s construction of an equilateral triangle on segment AB, the third vertex C is found by:',
    options: [
      'Drawing a perpendicular bisector of AB',
      'Drawing circles centered at A and B, both with radius AB, and finding their intersection',
      'Measuring 60° angles at A and B',
      'Finding the midpoint of AB and drawing a perpendicular'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euclid draws two circles of radius AB centered at A and B. Their intersection point C forms the third vertex of the equilateral triangle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why are all three sides of the constructed triangle equal?',
    options: [
      'Because Euclid assumed they are equal',
      'Because AB and CA are radii of the first circle, AB and BC are radii of the second circle',
      'Because the angles are all 60°',
      'Because the triangle is inscribed in a circle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'AB = CA (radii of circle centered at A) and AB = BC (radii of circle centered at B), so all three sides equal AB.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What gap exists in Euclid\'s first proposition?',
    options: [
      'He doesn\'t prove the angles are 60°',
      'He has no axiom guaranteeing that the two circles intersect',
      'He assumes the compass radius remains fixed',
      'He doesn\'t define what a circle is'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid never states an axiom about circle intersection, so he hasn\'t justified that point C exists. This gap was only filled by modern mathematicians.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A regular hexagon can be constructed by:',
    options: [
      'Drawing six equilateral triangles sharing a common vertex',
      'Starting with a circle and marking points at compass-radius intervals around it',
      'Bisecting the angles of a regular 12-gon',
      'Both A and B are correct'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A regular hexagon can be constructed either by arranging six equilateral triangles around a center, or by stepping around a circle with compass set to the radius.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to the Gauss-Wantzel theorem, a regular polygon with a prime number p of sides is constructible if and only if:',
    options: [
      'p is odd',
      'p is of the form $2^{2^m} + 1$ (a Fermat prime)',
      'p is less than 100',
      'p divides 360'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Gauss showed that a regular p-gon (p prime) is constructible iff p is a Fermat prime of the form $2^{2^m} + 1$. Known Fermat primes are 3, 5, 17, 257, and 65537.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following regular polygons was NOT known to be constructible by the ancient Greeks?',
    options: [
      'Regular triangle (3-gon)',
      'Regular pentagon (5-gon)',
      'Regular hexagon (6-gon)',
      'Regular 17-gon'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The regular 17-gon was first constructed by Gauss in 1796, over 2000 years after Euclid.',
  },
];

// Section 2: Some Basic Constructions
export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To bisect a line segment AB using straightedge and compass:',
    options: [
      'Draw perpendicular lines at A and B',
      'Draw circles of radius AB centered at A and B, then connect their two intersection points',
      'Find a point equidistant from A and B by trial and error',
      'Measure the segment and mark the halfway point'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Drawing circles of radius AB at both endpoints creates two intersection points. The line through these points is the perpendicular bisector of AB.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The line constructed when bisecting segment AB is:',
    options: [
      'Parallel to AB',
      'Perpendicular to AB and passes through its midpoint',
      'At a 45° angle to AB',
      'Tangent to the circles used in construction'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The perpendicular bisector is perpendicular to AB and passes through its midpoint.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is angle trisection fundamentally different from line segment trisection?',
    options: [
      'Angles cannot be measured',
      'There is no tool like parallel lines for dividing angles into equal parts',
      'Angles are always less than 180°',
      'Trisecting angles requires a protractor'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Line segments can be divided using parallel lines (via Thales\' theorem), but there is no corresponding tool for angles, making angle trisection impossible with straightedge and compass alone.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To divide a line segment into n equal parts, we use:',
    options: [
      'n circles of equal radius',
      'An auxiliary line with n equally spaced points and parallel lines',
      'n perpendicular bisector constructions',
      'A series of angle bisections'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Mark n points on an auxiliary line, connect the last to the endpoint, then draw parallels through the other points. By Thales\' theorem, these divide the segment equally.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Thales theorem states that:',
    options: [
      'The sum of angles in a triangle is 180°',
      'Parallel lines cut any lines they cross in proportional segments',
      'An angle inscribed in a semicircle is 90°',
      'The base angles of an isosceles triangle are equal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Thales theorem (basic proportionality) states that parallels cut transversals in proportional segments. This is key for dividing segments and for similar triangles.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To construct a line parallel to L through point P (not on L):',
    options: [
      'Draw any line through P',
      'Construct two perpendiculars: first to L through P, then to that perpendicular through P',
      'Bisect the angle between P and L',
      'Draw a circle centered at P tangent to L'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'First construct the perpendicular from P to L, then construct a perpendicular to that line through P. This second perpendicular is parallel to L.',
  },
];

// Section 3: Multiplication and Division
export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To multiply line segments geometrically, we first need to choose:',
    options: [
      'A coordinate system',
      'A unit length segment',
      'A right angle',
      'A circle of reference'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Unlike addition, multiplication requires a reference unit length. The choice is arbitrary but must be fixed for all calculations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the geometric construction for the product ab, if we have unit length 1 and segments a and b:',
    options: [
      'We draw a right triangle with legs a and b',
      'We use similar triangles with sides 1, a and b, ab',
      'We bisect the segment a + b',
      'We construct the perpendicular bisector of ab'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using the Thales theorem with a triangle having sides 1 and a, we extend by b and draw a parallel to get ab by similar triangles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The diagonal of a unit square has length:',
    options: [
      '2',
      '$\\sqrt{2}$',
      '1.5',
      '$\\sqrt{3}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the Pythagorean theorem, $d^2 = 1^2 + 1^2 = 2$, so $d = \\sqrt{2}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Pythagoreans proved that $\\sqrt{2}$ is irrational by:',
    options: [
      'Calculating its decimal expansion',
      'Showing that assuming $\\sqrt{2} = m/n$ leads to both m and n being even, contradicting that they have no common factor',
      'Constructing a line segment that doesn\'t fit any ruler',
      'Showing it cannot be expressed as a fraction'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\sqrt{2} = m/n$ with no common factors, then $m^2 = 2n^2$ implies m is even, say m = 2l, so $4l^2 = 2n^2$, meaning n is also even—a contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Greeks interpreted the product of line segments a and b as:',
    options: [
      'Another line segment',
      'The rectangle with sides a and b (an area)',
      'The diagonal of a rectangle with sides a and b',
      'The circle with diameter a + b'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Greeks viewed ab as the area of a rectangle with perpendicular sides a and b. Descartes later reinterpreted the product as a line segment.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why did the Greek interpretation of products as areas cause difficulties?',
    options: [
      'Areas are hard to measure',
      'The product of three lengths is a volume, but four lengths has no geometric meaning',
      'Rectangles are not constructible',
      'They couldn\'t compute square roots'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If ab is an area and abc is a volume, what is abcd? This dimensional problem hindered the development of algebra until Descartes\' reinterpretation.',
  },
];

// Section 4: Similar Triangles
export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two triangles are similar if:',
    options: [
      'They have the same area',
      'Their corresponding angles are equal',
      'Their corresponding sides are equal',
      'They share a common vertex'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Similar triangles have equal corresponding angles. This implies proportional sides—one is a scaled version of the other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If triangles ABC and DEF are similar with corresponding sides in ratio k, then:',
    options: [
      'Their areas are in ratio k',
      'Their perimeters are in ratio $k^2$',
      'All corresponding sides are in ratio k',
      'Their angles are in ratio k'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Similar triangles have all corresponding sides in the same ratio k. (Areas would be in ratio $k^2$, perimeters in ratio k.)',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof that similar triangles have proportional sides uses:',
    options: [
      'The Pythagorean theorem',
      'The Thales theorem (parallel lines cut proportional segments)',
      'The angle sum theorem',
      'Congruence axioms'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By placing one triangle inside the other (matching one angle), the parallel sides are cut proportionally by the Thales theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In Pappus\'s theorem (parallel case), if points A, B, C and D, E, F lie alternately on two lines through O, and AB ∥ ED and FE ∥ BC, then:',
    options: [
      'AC = DF',
      'AF ∥ CD',
      'Triangles ABC and DEF are congruent',
      'O is the midpoint of AD'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Pappus\'s theorem states that under these conditions, AF is parallel to CD.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The half-square and quarter-square (formed by diagonals of the unit square) are similar because:',
    options: [
      'They have the same area',
      'They both have one right angle and two 45° angles',
      'They share a common vertex',
      'Their sides are equal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Both triangles have angles 90°, 45°, 45°, making them similar. Comparing their sides gives $d = \\sqrt{2}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Desargues\'s theorem (parallel case) concerns two triangles that are:',
    options: [
      'Congruent',
      'In perspective from a point O (corresponding vertices lie on lines through O)',
      'Inscribed in the same circle',
      'Reflections of each other'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Desargues\'s theorem applies to triangles "in perspective from O"—where lines through corresponding vertices all pass through O.',
  },
];

// Section 5: Discussion (Chapter 1 Summary)
export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many regular polyhedra exist?',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'There are exactly 5 regular polyhedra: tetrahedron, cube, octahedron, dodecahedron, and icosahedron.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which regular polygons appear as faces of the five regular polyhedra?',
    options: [
      'Triangles, squares, and hexagons',
      'Triangles, squares, and pentagons',
      'Only triangles and squares',
      'All regular polygons up to the hexagon'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The five polyhedra use equilateral triangles (tetrahedron, octahedron, icosahedron), squares (cube), and regular pentagons (dodecahedron).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who first constructed the regular 17-gon?',
    options: [
      'Euclid (c. 300 BCE)',
      'Archimedes (c. 250 BCE)',
      'Gauss (1796)',
      'Descartes (1637)'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Carl Friedrich Gauss constructed the regular 17-gon in 1796 at age 19, the first new constructible prime-gon since antiquity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Fermat prime is a prime of the form:',
    options: [
      '$2^n + 1$',
      '$2^{2^m} + 1$',
      '$2^n - 1$',
      '$n^2 + 1$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat primes have the form $2^{2^m} + 1$. The known Fermat primes are 3, 5, 17, 257, and 65537.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is $F_5 = 2^{32} + 1 = 4,294,967,297$ NOT a Fermat prime?',
    options: [
      'It is even',
      'It is divisible by 641',
      'It is too large to be prime',
      'Fermat proved it was composite'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Euler showed in 1732 that $F_5$ is divisible by 641. This disproved Fermat\'s conjecture that all numbers of this form are prime.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A regular n-gon is constructible by straightedge and compass if and only if n has the form:',
    options: [
      '$2^k$ where k ≥ 0',
      '$2^k \\cdot p_1 \\cdot p_2 \\cdots p_r$ where the $p_i$ are distinct Fermat primes',
      'Any power of 2 or any prime',
      'Any integer greater than 2'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'n must be a power of 2 times a product of distinct Fermat primes (3, 5, 17, 257, 65537, or possibly others not yet discovered).',
  },
];
