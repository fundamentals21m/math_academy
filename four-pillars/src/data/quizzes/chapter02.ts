/**
 * Chapter 2: Euclid's Approach to Geometry
 * Quiz questions for sections 6-14
 */

import type { QuizQuestion } from './types';

// Section 6: The Parallel Axiom
export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s parallel axiom (fifth postulate) states that if a transversal crosses two lines making interior angles on one side summing to less than two right angles, then:',
    options: [
      'The lines are parallel',
      'The lines are perpendicular',
      'The lines never meet',
      'The lines meet on that side',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When interior angles sum to less than 180°, the lines will eventually meet on that side. If equal to 180°, they are parallel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Playfair\'s axiom states:',
    options: [
      'Given a line L and point P not on L, exactly one parallel to L passes through P',
      'Through any point, infinitely many parallels to a line exist',
      'All lines eventually meet',
      'Parallel lines have equal length',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Playfair\'s axiom is a simpler, equivalent form of Euclid\'s fifth postulate: exactly one parallel exists through any external point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The sum of angles in a triangle equals:',
    options: [
      'Exactly 180° (π radians) in Euclidean geometry',
      'Less than 180° in all geometries',
      'More than 180° in Euclidean geometry',
      '360°',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In Euclidean geometry, the angle sum is exactly 180°. This depends on the parallel axiom; in non-Euclidean geometries it differs.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When a transversal crosses two parallel lines, alternate interior angles are:',
    options: [
      'Supplementary (sum to 180°)',
      'Complementary (sum to 90°)',
      'Always acute',
      'Equal',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Alternate interior angles formed by a transversal crossing parallel lines are equal.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'An exterior angle of a triangle equals:',
    options: [
      'The adjacent interior angle',
      'The sum of the two non-adjacent interior angles',
      'Both B and C are correct',
      '180° minus the adjacent angle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An exterior angle equals both the sum of the remote interior angles (by the angle sum theorem) and 180° minus its adjacent interior angle (supplementary angles).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In non-Euclidean geometry, the angle sum of a triangle can be:',
    options: [
      'Only exactly 180°',
      'Any value from 0° to 360°',
      'Always 270°',
      'Greater than 180° (spherical) or less than 180° (hyperbolic)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'On a sphere, angle sum exceeds 180°; in hyperbolic geometry, it is less than 180°. The parallel axiom determines which.',
  },
];

// Section 7: Congruence Axioms
export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'SAS congruence means two triangles are congruent if they have equal:',
    options: [
      'Three sides',
      'Two angles and one side',
      'Two sides and the included angle',
      'All three angles',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Side-Angle-Side: if two sides and the angle between them are equal, the triangles are congruent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern treatments, SAS is taken as:',
    options: [
      'A theorem proved from simpler axioms',
      'A definition of congruence',
      'A corollary of ASA',
      'An axiom (accepted without proof)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Euclid "proved" SAS by superposition, but this is logically problematic. Modern geometry takes SAS as an axiom.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'ASA congruence can be proved from:',
    options: [
      'The parallel axiom',
      'SAS congruence',
      'The Pythagorean theorem',
      'The definition of angle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ASA is a theorem that follows from SAS and the exterior angle theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Pappus\'s elegant proof of the isosceles triangle theorem compares:',
    options: [
      'The triangle with itself read in reverse order (ABC vs ACB)',
      'The triangle with a congruent copy',
      'Two smaller triangles formed by the altitude',
      'The triangle with its reflection',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Pappus compared triangle ABC with "triangle ACB" (the same triangle with vertices relabeled). By SAS, they are congruent, proving the base angles equal.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The isosceles triangle theorem states:',
    options: [
      'All triangles are isosceles',
      'If two angles are equal, the triangle is equilateral',
      'The base of an isosceles triangle is longest',
      'If two sides are equal, the opposite angles are equal',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If AB = AC in triangle ABC, then angle ABC = angle ACB (the base angles are equal).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To prove that opposite sides of a parallelogram are equal, we use:',
    options: [
      'SAS with the two triangles formed by a diagonal',
      'The Pythagorean theorem',
      'ASA with the two triangles formed by a diagonal',
      'The definition of parallel lines',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Drawing a diagonal creates two triangles. Alternate interior angles give two pairs of equal angles, and the diagonal is shared. By ASA, the triangles are congruent.',
  },
];

// Section 8: Area and Equality
export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s concept of "equal" figures means:',
    options: [
      'Congruent (same shape and size)',
      'Having equal area',
      'Similar (same shape)',
      'Having equal perimeter'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For Euclid, figures are "equal" if they have the same area, even if they have different shapes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two parallelograms with the same base and height have:',
    options: [
      'Equal area',
      'Equal perimeter',
      'Equal diagonals',
      'The same shape',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euclid I.35 establishes that parallelograms on the same base between the same parallels have equal areas.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The area of a triangle with base b and height h is:',
    options: [
      '$bh
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A triangle is half of a parallelogram with the same base and height.',
  },
      '$2bh
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A triangle is half of a parallelogram with the same base and height.',
  },
      '$\\frac{1}{2}bh
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A triangle is half of a parallelogram with the same base and height.',
  },
      '$b + h
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A triangle is half of a parallelogram with the same base and height.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A triangle is half of a parallelogram with the same base and height.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '"Shearing" a parallelogram means:',
    options: [
      'Cutting it in half',
      'Sliding the top edge parallel to the base, keeping base and height constant',
      'Rotating it 90°',
      'Reflecting it across a diagonal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shearing slides one edge parallel to the opposite edge. This preserves base and height, hence area.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A square with side s can be "sheared" into:',
    options: [
      'Only other squares',
      'Any parallelogram with base s and height s',
      'Any rectangle',
      'Only rhombuses'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shearing transforms a square into a parallelogram with the same base and height, preserving area.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The principle that equal figures can be added to equal figures to give equal figures is used by Euclid to:',
    options: [
      'Define congruence',
      'Prove the Pythagorean theorem',
      'Construct regular polygons',
      'Bisect angles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid\'s proof of the Pythagorean theorem relies on adding and comparing equal areas.',
  },
];

// Section 9: Area of Parallelograms and Triangles
export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid I.35 proves that parallelograms on the same base between the same parallels:',
    options: [
      'Are congruent',
      'Have equal perimeter',
      'Are similar',
      'Have equal area',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Same base and same height (distance between parallels) means equal area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If two triangles share the same base and lie between the same parallel lines, then:',
    options: [
      'They have equal area',
      'They are congruent',
      'They are similar',
      'They have the same angles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Triangles with the same base and height have equal area (each is half of a parallelogram with that base and height).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To compare the areas of triangles ABC and DBC (sharing base BC), we compare:',
    options: [
      'Their perimeters',
      'The angles at A and D',
      'Their heights from A and D to BC',
      'The lengths of AC and DC',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Same base means areas are proportional to heights. Equal heights mean equal areas.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A parallelogram has twice the area of:',
    options: [
      'A square with the same side',
      'A triangle with the same base and height',
      'A rectangle with the same perimeter',
      'A rhombus with the same diagonals'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A triangle is half of the parallelogram with the same base and height.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two triangles with equal areas and the same base have:',
    options: [
      'Equal heights',
      'Equal perimeters',
      'Equal angles',
      'All of the above',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since Area = ½ × base × height, same base and area implies same height.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The medians of a triangle divide it into:',
    options: [
      'Six triangles of equal area',
      'Three congruent triangles',
      'Two congruent triangles',
      'Four similar triangles',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The three medians divide a triangle into six smaller triangles, all with equal area.',
  },
];

// Section 10: The Pythagorean Theorem
export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem states that in a right triangle:',
    options: [
      '$a + b = c$ where c is the hypotenuse',
      '$a^2 - b^2 = c^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sum of squares of the legs equals the square of the hypotenuse.',
  },
      'The angles satisfy $\\alpha + \\beta + \\gamma = 180°
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sum of squares of the legs equals the square of the hypotenuse.',
  },
      '$a^2 + b^2 = c^2$ where c is the hypotenuse',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sum of squares of the legs equals the square of the hypotenuse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Euclid\'s proof of the Pythagorean theorem uses:',
    options: [
      'Algebra and coordinates',
      'Shearing (area-preserving transformations)',
      'Trigonometry',
      'Similar triangles only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid shears the squares on the legs to match rectangles that together form the square on the hypotenuse.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The converse of the Pythagorean theorem states:',
    options: [
      'All right triangles satisfy $a^2 + b^2 = c^2$',
      'If $a^2 + b^2 = c^2$, then the triangle has a right angle opposite side c',
      'If a triangle has a right angle, then $a^2 = b^2 + c^2$',
      'Only isosceles right triangles satisfy the theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The converse (Euclid I.48): if the sides satisfy the Pythagorean relation, the angle opposite the longest side is 90°.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which is a Pythagorean triple?',
    options: [
      '(2, 3, 4)',
      '(4, 5, 6)',
      '(1, 2, 3)',
      '(3, 4, 5)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$3^2 + 4^2 = 9 + 16 = 25 = 5^2$, so (3, 4, 5) is a Pythagorean triple.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem was known to:',
    options: [
      'Only the Greeks',
      'Only medieval mathematicians',
      'Babylonians before Pythagoras',
      'Only Euclid',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Babylonian tablets from c. 1800 BCE show knowledge of Pythagorean triples. The Greeks provided rigorous proofs.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If m > n are positive integers, then $(m^2 - n^2, 2mn, m^2 + n^2)$ is:',
    options: [
      'A Pythagorean triple',
      'An arithmetic sequence',
      'A geometric sequence',
      'Three prime numbers',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 = (m^2 + n^2)^2$.',
  },
];

// Section 11: Proof of the Thales Theorem
export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Thales theorem (basic proportionality) states that a line parallel to one side of a triangle:',
    options: [
      'Bisects the other two sides',
      'Divides the other two sides proportionally',
      'Creates a right angle',
      'Passes through the centroid'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If DE ∥ BC in triangle ABC, then AD/DB = AE/EC.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of the Thales theorem relies on:',
    options: [
      'Congruent triangles',
      'The Pythagorean theorem',
      'Triangles with equal areas having the same base share the same height',
      'Angle bisector properties',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof compares areas of triangles sharing a vertex. Triangles between parallels with the same base have equal areas.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The converse of Thales\' theorem states:',
    options: [
      'If a line bisects two sides, it\'s parallel to the third',
      'If a line divides two sides proportionally, it\'s parallel to the third',
      'Parallel lines always divide segments proportionally',
      'Only midpoint segments are parallel to the base'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If AD/DB = AE/EC, then DE is parallel to BC.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The midpoint theorem states that the segment joining midpoints of two sides of a triangle:',
    options: [
      'Equals the third side',
      'Bisects the third side',
      'Is parallel to the third side and half its length',
      'Is perpendicular to the third side',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If D and E are midpoints of AB and AC, then DE ∥ BC and DE = ½BC.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If D divides AB in ratio 2:1 (AD = 2·DB), and DE ∥ BC, then E divides AC in ratio:',
    options: [
      '2:1',
      '1:2',
      '1:1',
      '3:1',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Thales\' theorem, DE ∥ BC implies AD/DB = AE/EC = 2/1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Thales of Miletus lived around:',
    options: [
      '624-546 BCE (before Pythagoras)',
      '300 BCE (same time as Euclid)',
      '100 CE (Roman era)',
      '1600 CE (Renaissance)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Thales (c. 624-546 BCE) is considered the first mathematician in the Greek tradition.',
  },
];

// Section 12: Angles in a Circle
export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An inscribed angle in a circle is:',
    options: [
      'An angle at the center',
      'An angle between two radii',
      'A 90° angle',
      'An angle whose vertex is on the circle and whose sides are chords',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An inscribed angle has its vertex on the circle and is formed by two chords.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The inscribed angle theorem states that an inscribed angle is:',
    options: [
      'Equal to the central angle on the same arc',
      'Half the central angle subtending the same arc',
      'Twice the central angle',
      'Always 90°'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An inscribed angle is half the central angle that subtends the same arc.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'All inscribed angles subtending the same arc are:',
    options: [
      'Supplementary',
      'Complementary',
      'Right angles',
      'Equal',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since each equals half the central angle on that arc, all inscribed angles on the same arc are equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An angle inscribed in a semicircle (subtending a diameter) is:',
    options: [
      '45°',
      '60°',
      '180°',
      '90°',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The central angle is 180° (a straight line), so the inscribed angle is 90°. This is Thales\' theorem on circles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If inscribed angle APB = 50°, then the central angle AOB equals:',
    options: [
      '100°',
      '25°',
      '50°',
      '75°',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The central angle is twice the inscribed angle: 2 × 50° = 100°.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Two inscribed angles on opposite sides of a chord:',
    options: [
      'Are equal',
      'Are complementary (sum to 90°)',
      'Are supplementary (sum to 180°)',
      'Have no special relationship',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Inscribed angles in the two arcs sum to 180° because the two central angles sum to 360°.',
  },
];

// Section 13: The Pythagorean Theorem Revisited
export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An alternative proof of the Pythagorean theorem uses:',
    options: [
      'Only algebra',
      'Coordinate geometry',
      'Trigonometric functions',
      'Similar triangles formed by the altitude to the hypotenuse',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Dropping an altitude from the right angle to the hypotenuse creates two triangles similar to the original.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the altitude from C meets hypotenuse AB at H, then triangles ACH and ABC are:',
    options: [
      'Similar',
      'Congruent',
      'Equal in area',
      'Isosceles',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Both share angle A, and both have a right angle, so by AA similarity they are similar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the altitude proof, if h is the altitude to hypotenuse c, then:',
    options: [
      '$h = a + b$',
      '$h^2 = (c-x)x$ where x = AH',
      '$h = c/2$',
      '$h = \\sqrt{ab}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By similar triangles, h/x = (c-x)/h, giving $h^2 = x(c-x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The "similar triangles proof" of the Pythagorean theorem avoids:',
    options: [
      'Using the concept of area',
      'All use of congruence',
      'Using shearing and area arguments',
      'Any reference to right angles'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The similar triangles proof uses proportions from similarity rather than Euclid\'s shearing argument.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many distinct proofs of the Pythagorean theorem are known?',
    options: [
      'Hundreds',
      'Only Euclid\\'s original proof',
      'About 10',
      'It cannot be proven in more than one way',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There are hundreds of known proofs, including ones by President James Garfield and Leonardo da Vinci.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The geometric mean of segments a and b is the length x satisfying:',
    options: [
      '$x = (a + b)/2$',
      '$x^2 = ab$',
      '$x = \\sqrt{a^2 + b^2}$',
      '$x = a - b$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The geometric mean x satisfies a/x = x/b, so $x^2 = ab$, or $x = \\sqrt{ab}$.',
  },
];

// Section 14: Discussion (Chapter 2 Summary)
export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s axiomatic method consists of:',
    options: [
      'Proving every statement',
      'Starting with accepted axioms and deriving all other results by logical deduction',
      'Using only constructions',
      'Avoiding any assumptions'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The axiomatic method begins with axioms (unproven assumptions) and derives theorems through logical proof.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of Euclid\'s axioms was most controversial historically?',
    options: [
      'The first axiom (two points determine a line)',
      'The third axiom (a circle can be drawn with any center and radius)',
      'The fifth axiom (the parallel postulate)',
      'The second axiom (a line segment can be extended)'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The parallel postulate was controversial because it seemed less "obvious" than the others, leading to attempts to prove it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Attempts to prove the parallel postulate from the other axioms led to:',
    options: [
      'A successful proof by Gauss',
      'Proof that the postulate is false',
      'The discovery of non-Euclidean geometries',
      'Abandonment of the axiomatic method',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Attempts to prove the parallel postulate by contradiction instead revealed consistent non-Euclidean geometries.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hilbert\'s 1899 work on geometry:',
    options: [
      'Provided a rigorous modern axiom system filling gaps in Euclid',
      'Proved Euclid was wrong',
      'Abandoned the Euclidean approach entirely',
      'Focused only on non-Euclidean geometry',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hilbert provided a complete, rigorous axiom system for Euclidean geometry, addressing gaps and implicit assumptions in Euclid.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The importance of the axiomatic method extends beyond geometry to:',
    options: [
      'Only physics',
      'Only number theory',
      'All areas of modern mathematics',
      'Only applied mathematics',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The axiomatic method, pioneered in geometry, is now fundamental to all modern mathematics.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Euclid\'s Elements contains how many books?',
    options: [
      '5',
      '9',
      '20',
      '13',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Elements consists of 13 books covering plane geometry, number theory, and solid geometry.',
  },
];
