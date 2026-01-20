export interface TheoremEntry {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // =============================================================================
  // SECTION 1: EQUILATERAL TRIANGLE CONSTRUCTION
  // =============================================================================
  {
    id: 'prop-equilateral-construction',
    title: 'Equilateral Triangle Construction (Euclid I.1)',
    statement: 'Given a line segment $AB$, construct circles centered at $A$ and $B$ with radius $|AB|$. If they intersect at point $C$, then $\\triangle ABC$ is equilateral.',
    sectionId: 1,
    sectionTitle: 'The First Proposition',
    category: 'Constructions',
    type: 'proposition',
    hasProof: true,
    proof: `Since $C$ lies on the circle centered at $A$, we have $|AC| = |AB|$ by definition of circle.
Since $C$ lies on the circle centered at $B$, we have $|BC| = |AB|$ by definition of circle.
Therefore $|AB| = |AC| = |BC|$, making $\\triangle ABC$ equilateral.`,
  },
  {
    id: 'thm-gauss-wantzel',
    title: 'Gauss-Wantzel Theorem',
    statement: 'A regular $n$-gon is constructible with straightedge and compass if and only if $n = 2^k \\cdot p_1 \\cdot p_2 \\cdots p_r$ where each $p_i$ is a distinct Fermat prime.',
    sectionId: 1,
    sectionTitle: 'The First Proposition',
    category: 'Constructions',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'def-fermat-primes',
    title: 'Fermat Primes',
    statement: 'A Fermat prime is a prime of the form $F_m = 2^{2^m} + 1$. The known Fermat primes are $3, 5, 17, 257, 65537$.',
    sectionId: 1,
    sectionTitle: 'The First Proposition',
    category: 'Constructions',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 2: BASIC CONSTRUCTIONS
  // =============================================================================
  {
    id: 'prop-bisect-segment',
    title: 'Line Segment Bisection',
    statement: 'Given segment $AB$, construct circles of radius $|AB|$ centered at $A$ and $B$. The line through their intersection points is the perpendicular bisector of $AB$.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Constructions',
    type: 'proposition',
    hasProof: true,
    proof: `The intersection points $C$ and $D$ are equidistant from both $A$ and $B$ (each lies on both circles).
Therefore $CD$ is the locus of points equidistant from $A$ and $B$, which is the perpendicular bisector.`,
  },
  {
    id: 'prop-perpendicular-on-line',
    title: 'Perpendicular at Point on Line',
    statement: 'Given line $L$ and point $P$ on $L$, we can construct a line through $P$ perpendicular to $L$ using only straightedge and compass.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Constructions',
    type: 'proposition',
  },
  {
    id: 'prop-perpendicular-from-point',
    title: 'Perpendicular from Point to Line',
    statement: 'Given line $L$ and point $P$ not on $L$, we can construct the perpendicular from $P$ to $L$ using only straightedge and compass.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Constructions',
    type: 'proposition',
  },
  {
    id: 'prop-angle-bisection',
    title: 'Angle Bisection',
    statement: 'Given an angle $\\angle AOB$, we can construct its bisector using only straightedge and compass.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Constructions',
    type: 'proposition',
  },
  {
    id: 'prop-parallel-construction',
    title: 'Parallel Line Construction',
    statement: 'Given line $L$ and point $P$ not on $L$, we can construct a line through $P$ parallel to $L$.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Constructions',
    type: 'proposition',
  },
  {
    id: 'thm-thales-parallels',
    title: "Thales' Theorem (Parallel Proportions)",
    statement: 'If parallel lines cut two transversals, then the segments cut off on one transversal are proportional to the corresponding segments on the other. That is, if $PQ \\parallel RS$ and they cut transversals at $A, P, B$ and $A, R, C$, then $\\frac{|AP|}{|PB|} = \\frac{|AR|}{|RC|}$.',
    sectionId: 2,
    sectionTitle: 'Basic Constructions',
    category: 'Similar Triangles',
    type: 'theorem',
    hasProof: true,
    proof: `Consider triangles $\\triangle APR$ and $\\triangle BPS$. The parallel lines create equal corresponding angles.
By similarity of triangles, the sides are proportional: $\\frac{|AP|}{|PB|} = \\frac{|AR|}{|RC|}$.`,
  },

  // =============================================================================
  // SECTION 3: MULTIPLICATION AND DIVISION
  // =============================================================================
  {
    id: 'def-geometric-multiplication',
    title: 'Geometric Multiplication',
    statement: 'Given segments of length $a$, $b$, and a unit segment, we can construct a segment of length $ab$ using parallel lines and Thales theorem.',
    sectionId: 3,
    sectionTitle: 'Multiplication and Division',
    category: 'Arithmetic Operations',
    type: 'definition',
  },
  {
    id: 'def-geometric-division',
    title: 'Geometric Division',
    statement: 'Given segments of length $a$, $b$ and a unit segment, we can construct a segment of length $\\frac{a}{b}$ using parallel lines and Thales theorem.',
    sectionId: 3,
    sectionTitle: 'Multiplication and Division',
    category: 'Arithmetic Operations',
    type: 'definition',
  },
  {
    id: 'thm-rationals-constructible',
    title: 'Rational Lengths are Constructible',
    statement: 'Every positive rational number can be constructed as the length of a segment using straightedge and compass, starting from a unit segment.',
    sectionId: 3,
    sectionTitle: 'Multiplication and Division',
    category: 'Arithmetic Operations',
    type: 'theorem',
    hasProof: true,
    proof: `Given a rational $\\frac{m}{n}$ with positive integers $m, n$:
1. Construct segment of length $m$ by laying off $m$ copies of the unit.
2. Construct segment of length $n$ similarly.
3. Use geometric division to obtain length $\\frac{m}{n}$.`,
  },
  {
    id: 'thm-sqrt2-irrational',
    title: 'Irrationality of $\\sqrt{2}$',
    statement: '$\\sqrt{2}$ is irrational: there exist no integers $m, n$ with $\\sqrt{2} = \\frac{m}{n}$.',
    sectionId: 3,
    sectionTitle: 'Multiplication and Division',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Suppose $\\sqrt{2} = \\frac{m}{n}$ with $\\gcd(m,n) = 1$.
Then $2 = \\frac{m^2}{n^2}$, so $m^2 = 2n^2$.
Thus $m^2$ is even, so $m$ is even. Write $m = 2k$.
Then $4k^2 = 2n^2$, so $n^2 = 2k^2$, meaning $n$ is also even.
This contradicts $\\gcd(m,n) = 1$. Therefore $\\sqrt{2}$ is irrational.`,
  },

  // =============================================================================
  // SECTION 4: SIMILAR TRIANGLES
  // =============================================================================
  {
    id: 'def-similar-triangles',
    title: 'Similar Triangles',
    statement: 'Two triangles are similar if their corresponding angles are equal. Notation: $\\triangle ABC \\sim \\triangle DEF$.',
    sectionId: 4,
    sectionTitle: 'Similar Triangles',
    category: 'Similar Triangles',
    type: 'definition',
  },
  {
    id: 'thm-similar-proportional',
    title: 'Proportional Sides of Similar Triangles',
    statement: 'If $\\triangle ABC \\sim \\triangle DEF$, then corresponding sides are proportional: $\\frac{|AB|}{|DE|} = \\frac{|BC|}{|EF|} = \\frac{|CA|}{|FD|}$.',
    sectionId: 4,
    sectionTitle: 'Similar Triangles',
    category: 'Similar Triangles',
    type: 'theorem',
    hasProof: true,
    proof: `Using Thales' theorem and the equality of corresponding angles,
we can show that the ratio of any two corresponding sides equals the ratio of any other two corresponding sides.`,
  },
  {
    id: 'thm-pappus-parallel',
    title: "Pappus's Theorem (Parallel Case)",
    statement: 'Let $A, B, C$ be collinear and $D, E, F$ be collinear on a parallel line. If $AB \\parallel ED$ and $FE \\parallel BC$, then $AF \\parallel CD$.',
    sectionId: 4,
    sectionTitle: 'Similar Triangles',
    category: 'Projective Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `By similar triangles formed by the parallel lines, we establish proportions that force $AF \\parallel CD$.`,
  },
  {
    id: 'thm-desargues-parallel',
    title: "Desargues's Theorem (Parallel Case)",
    statement: `If triangles $\\triangle ABC$ and $\\triangle A'B'C'$ are in perspective from a point $O$ (meaning $AA'$, $BB'$, $CC'$ meet at $O$), and if $AB \\parallel A'B'$ and $BC \\parallel B'C'$, then $AC \\parallel A'C'$.`,
    sectionId: 4,
    sectionTitle: 'Similar Triangles',
    category: 'Projective Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `From the perspective condition, the lines through corresponding vertices pass through $O$.
The parallel conditions on two pairs of sides, combined with similar triangles, force the third pair to be parallel.`,
  },

  // =============================================================================
  // SECTION 6: THE PARALLEL AXIOM
  // =============================================================================
  {
    id: 'axiom-euclid-fifth',
    title: "Euclid's Fifth Postulate",
    statement: 'If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, the two lines, if extended indefinitely, meet on that side.',
    sectionId: 6,
    sectionTitle: 'The Parallel Axiom',
    category: 'Axioms',
    type: 'definition',
  },
  {
    id: 'axiom-playfair',
    title: "Playfair's Axiom",
    statement: 'Given a line $L$ and a point $P$ not on $L$, there exists exactly one line through $P$ parallel to $L$.',
    sectionId: 6,
    sectionTitle: 'The Parallel Axiom',
    category: 'Axioms',
    type: 'definition',
  },
  {
    id: 'thm-alternate-interior',
    title: 'Alternate Interior Angles',
    statement: 'If a transversal crosses two parallel lines, the alternate interior angles are equal.',
    sectionId: 6,
    sectionTitle: 'The Parallel Axiom',
    category: 'Parallel Lines',
    type: 'theorem',
    hasProof: true,
    proof: `Suppose lines $L_1 \\parallel L_2$ are crossed by transversal $T$.
If the alternate interior angles were unequal, we could construct a different line through the intersection point
with equal alternate interior angles, contradicting the uniqueness of parallels (Playfair's Axiom).`,
  },
  {
    id: 'thm-triangle-angle-sum',
    title: 'Triangle Angle Sum',
    statement: 'The sum of the interior angles of a triangle is $\\pi$ radians ($180°$).',
    sectionId: 6,
    sectionTitle: 'The Parallel Axiom',
    category: 'Triangle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Given $\\triangle ABC$, draw line $DE$ through $A$ parallel to $BC$.
By alternate interior angles: $\\angle DAB = \\angle ABC$ and $\\angle EAC = \\angle ACB$.
Since $\\angle DAB + \\angle BAC + \\angle EAC = \\pi$ (straight line),
we have $\\angle ABC + \\angle BAC + \\angle ACB = \\pi$.`,
  },
  {
    id: 'thm-exterior-angle',
    title: 'Exterior Angle Theorem',
    statement: 'An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.',
    sectionId: 6,
    sectionTitle: 'The Parallel Axiom',
    category: 'Triangle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Let $\\angle ACD$ be an exterior angle at $C$ of $\\triangle ABC$.
Since $\\angle ACB + \\angle ACD = \\pi$ (straight line) and
$\\angle CAB + \\angle ABC + \\angle ACB = \\pi$ (triangle angle sum),
we have $\\angle ACD = \\angle CAB + \\angle ABC$.`,
  },

  // =============================================================================
  // SECTION 7: CONGRUENCE AXIOMS
  // =============================================================================
  {
    id: 'axiom-sas',
    title: 'SAS Congruence Axiom',
    statement: 'If two triangles have two sides and the included angle of one equal to two sides and the included angle of the other, then the triangles are congruent.',
    sectionId: 7,
    sectionTitle: 'Congruence Axioms',
    category: 'Congruence',
    type: 'definition',
  },
  {
    id: 'thm-asa-congruence',
    title: 'ASA Congruence',
    statement: 'If two triangles have two angles and the included side of one equal to two angles and the included side of the other, then the triangles are congruent.',
    sectionId: 7,
    sectionTitle: 'Congruence Axioms',
    category: 'Congruence',
    type: 'theorem',
    hasProof: true,
    proof: `Given $\\triangle ABC$ and $\\triangle DEF$ with $\\angle A = \\angle D$, $|AB| = |DE|$, $\\angle B = \\angle E$.
By triangle angle sum, $\\angle C = \\angle F$.
Construct $\\triangle DEF'$ with $|EF'| = |BC|$ on ray $EF$. By SAS, $\\triangle ABC \\cong \\triangle DEF'$.
Thus $\\angle DEF' = \\angle B = \\angle DEF$, so $F' = F$, giving $\\triangle ABC \\cong \\triangle DEF$.`,
  },
  {
    id: 'thm-isosceles-euclid-i5',
    title: 'Isosceles Triangle Theorem (Euclid I.5)',
    statement: 'In an isosceles triangle, the base angles are equal. If $|AB| = |AC|$, then $\\angle ABC = \\angle ACB$.',
    sectionId: 7,
    sectionTitle: 'Congruence Axioms',
    category: 'Triangle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Pappus's elegant proof: Consider $\\triangle ABC$ and $\\triangle ACB$ (same triangle, vertices relabeled).
We have $|AB| = |AC|$ (given), $|AC| = |AB|$ (given), and $\\angle BAC = \\angle CAB$ (same angle).
By SAS, $\\triangle ABC \\cong \\triangle ACB$.
Therefore corresponding angles are equal: $\\angle ABC = \\angle ACB$.`,
  },
  {
    id: 'thm-isosceles-converse',
    title: 'Converse of Isosceles Triangle Theorem',
    statement: 'If two angles of a triangle are equal, then the sides opposite those angles are equal. If $\\angle ABC = \\angle ACB$, then $|AB| = |AC|$.',
    sectionId: 7,
    sectionTitle: 'Congruence Axioms',
    category: 'Triangle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Given $\\angle ABC = \\angle ACB$. Consider $\\triangle ABC$ and $\\triangle ACB$.
We have $\\angle ABC = \\angle ACB$ (given), $|BC| = |CB|$ (same segment), $\\angle ACB = \\angle ABC$ (given).
By ASA, $\\triangle ABC \\cong \\triangle ACB$. Therefore $|AB| = |AC|$.`,
  },
  {
    id: 'thm-parallelogram-opposite-sides',
    title: 'Opposite Sides of Parallelogram',
    statement: 'The opposite sides of a parallelogram are equal in length.',
    sectionId: 7,
    sectionTitle: 'Congruence Axioms',
    category: 'Quadrilaterals',
    type: 'theorem',
    hasProof: true,
    proof: `Let $ABCD$ be a parallelogram. Draw diagonal $AC$.
In triangles $\\triangle ABC$ and $\\triangle CDA$:
By alternate interior angles: $\\angle BAC = \\angle DCA$ and $\\angle BCA = \\angle DAC$.
The side $AC$ is common.
By ASA, $\\triangle ABC \\cong \\triangle CDA$.
Therefore $|AB| = |CD|$ and $|BC| = |DA|$.`,
  },

  // =============================================================================
  // SECTION 8: AREA AND EQUALITY
  // =============================================================================
  {
    id: 'def-common-notions',
    title: "Euclid's Common Notions",
    statement: '1. Things equal to the same thing are equal. 2. If equals be added to equals, the wholes are equal. 3. If equals be subtracted from equals, the remainders are equal. 4. Things which coincide are equal. 5. The whole is greater than the part.',
    sectionId: 8,
    sectionTitle: 'Area and Equality',
    category: 'Axioms',
    type: 'definition',
  },
  {
    id: 'thm-square-of-sum',
    title: 'Square of a Sum (Euclid II.4)',
    statement: '$(a + b)^2 = a^2 + 2ab + b^2$. Geometrically: if a line is cut at a point, the square on the whole equals the sum of the squares on the parts plus twice the rectangle on the parts.',
    sectionId: 8,
    sectionTitle: 'Area and Equality',
    category: 'Area Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Construct a square on segment $a + b$. Divide it by lines parallel to the sides at distance $a$ and $b$.
The square decomposes into: a square of side $a$, a square of side $b$, and two rectangles of dimensions $a \\times b$.
Therefore $(a + b)^2 = a^2 + b^2 + 2ab$.`,
  },
  {
    id: 'thm-difference-of-squares',
    title: 'Difference of Squares',
    statement: '$a^2 - b^2 = (a + b)(a - b)$. Geometrically: the gnomon (L-shaped region) in a square can be rearranged into a rectangle.',
    sectionId: 8,
    sectionTitle: 'Area and Equality',
    category: 'Area Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Consider a square of side $a$. Remove a square of side $b$ from one corner, leaving an L-shaped gnomon.
The gnomon can be cut and rearranged into a rectangle of dimensions $(a + b) \\times (a - b)$.
Therefore $a^2 - b^2 = (a + b)(a - b)$.`,
  },

  // =============================================================================
  // SECTION 9: AREA OF PARALLELOGRAMS AND TRIANGLES
  // =============================================================================
  {
    id: 'thm-parallelograms-equal-area',
    title: 'Parallelograms on Equal Base (Euclid I.35)',
    statement: 'Parallelograms on the same base and between the same parallels are equal in area.',
    sectionId: 9,
    sectionTitle: 'Area of Parallelograms and Triangles',
    category: 'Area Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Let $ABCD$ and $EBCF$ be parallelograms on base $BC$ between parallels $BC$ and $AF$.
Add triangle $DEB$ to both: $ABCD + \\triangle DEB = \\triangle AEB + \\square EBCD$ (rearrangement).
Similarly, $EBCF + \\triangle DEB = \\triangle DFC + \\square EBCD$.
Since $\\triangle AEB \\cong \\triangle DFC$ (by ASA), we have $ABCD = EBCF$.`,
  },
  {
    id: 'thm-triangles-equal-area',
    title: 'Triangles on Equal Base (Euclid I.37)',
    statement: 'Triangles on the same base and between the same parallels are equal in area.',
    sectionId: 9,
    sectionTitle: 'Area of Parallelograms and Triangles',
    category: 'Area Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Let $\\triangle ABC$ and $\\triangle DBC$ have base $BC$ and vertices $A, D$ on a line parallel to $BC$.
Construct parallelograms $ABCE$ and $DBCF$ by drawing parallels.
By Euclid I.35, these parallelograms are equal.
Each triangle is half its parallelogram (Euclid I.34).
Therefore $\\triangle ABC = \\triangle DBC$.`,
  },
  {
    id: 'thm-parallelogram-double-triangle',
    title: 'Parallelogram is Double the Triangle (Euclid I.41)',
    statement: 'If a parallelogram and a triangle have the same base and are between the same parallels, the parallelogram is double the triangle.',
    sectionId: 9,
    sectionTitle: 'Area of Parallelograms and Triangles',
    category: 'Area Theory',
    type: 'theorem',
    hasProof: true,
    proof: `The diagonal of a parallelogram divides it into two congruent triangles.
Each triangle has the same base and height as the original triangle.
By Euclid I.37, each half equals the original triangle.
Therefore the parallelogram equals twice the triangle.`,
  },
  {
    id: 'prop-shearing',
    title: 'Shearing Principle',
    statement: 'Shearing a parallelogram (sliding one side parallel to itself) preserves area.',
    sectionId: 9,
    sectionTitle: 'Area of Parallelograms and Triangles',
    category: 'Area Theory',
    type: 'proposition',
    hasProof: true,
    proof: `A sheared parallelogram has the same base and height as the original.
By Euclid I.35, parallelograms with equal base and height have equal area.`,
  },

  // =============================================================================
  // SECTION 10: THE PYTHAGOREAN THEOREM
  // =============================================================================
  {
    id: 'thm-pythagorean',
    title: 'Pythagorean Theorem (Euclid I.47)',
    statement: 'In a right triangle, the square on the hypotenuse equals the sum of the squares on the other two sides: $a^2 + b^2 = c^2$.',
    sectionId: 10,
    sectionTitle: 'The Pythagorean Theorem',
    category: 'Pythagorean Theorem',
    type: 'theorem',
    hasProof: true,
    proof: `Construct squares on all three sides of right triangle $\\triangle ABC$ with right angle at $C$.
Drop an altitude from $C$ to the hypotenuse $AB$, extended through the square on $AB$.
This divides the square on $AB$ into two rectangles.
By area decomposition and congruent triangles:
- The rectangle adjacent to $A$ equals the square on $AC$.
- The rectangle adjacent to $B$ equals the square on $BC$.
Therefore $|AC|^2 + |BC|^2 = |AB|^2$.`,
  },
  {
    id: 'thm-pythagorean-converse',
    title: 'Converse of Pythagorean Theorem (Euclid I.48)',
    statement: 'If in a triangle $a^2 + b^2 = c^2$, then the angle opposite the side of length $c$ is a right angle.',
    sectionId: 10,
    sectionTitle: 'The Pythagorean Theorem',
    category: 'Pythagorean Theorem',
    type: 'theorem',
    hasProof: true,
    proof: `Given $\\triangle ABC$ with $|AC|^2 + |BC|^2 = |AB|^2$.
Construct right triangle $\\triangle DEF$ with legs $|DE| = |AC|$, $|EF| = |BC|$, right angle at $E$.
By the Pythagorean theorem, $|DF|^2 = |DE|^2 + |EF|^2 = |AC|^2 + |BC|^2 = |AB|^2$.
So $|DF| = |AB|$.
By SSS congruence, $\\triangle ABC \\cong \\triangle DEF$.
Therefore $\\angle ACB = \\angle DEF = 90°$.`,
  },
  {
    id: 'def-pythagorean-triples',
    title: 'Pythagorean Triples',
    statement: 'A Pythagorean triple $(a, b, c)$ is a set of positive integers satisfying $a^2 + b^2 = c^2$. Examples: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$.',
    sectionId: 10,
    sectionTitle: 'The Pythagorean Theorem',
    category: 'Pythagorean Theorem',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 11: PROOF OF THE THALES THEOREM
  // =============================================================================
  {
    id: 'thm-thales-semicircle',
    title: "Thales' Theorem (Semicircle)",
    statement: 'An angle inscribed in a semicircle is a right angle. If $AB$ is a diameter of a circle and $C$ is any other point on the circle, then $\\angle ACB = 90°$.',
    sectionId: 11,
    sectionTitle: 'Proof of the Thales Theorem',
    category: 'Circle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Let $O$ be the center of the circle (midpoint of diameter $AB$).
Draw radii $OA$, $OB$, $OC$. Since all radii are equal: $|OA| = |OB| = |OC|$.
Triangles $\\triangle OAC$ and $\\triangle OBC$ are isosceles.
Let $\\angle OCA = \\alpha$ and $\\angle OCB = \\beta$.
Then $\\angle OAC = \\alpha$ and $\\angle OBC = \\beta$.
In $\\triangle ABC$: $\\angle ACB = \\alpha + \\beta$.
Sum of angles in $\\triangle ABC$: $\\alpha + (\\alpha + \\beta) + \\beta = 180°$.
Therefore $2(\\alpha + \\beta) = 180°$, so $\\angle ACB = \\alpha + \\beta = 90°$.`,
  },
  {
    id: 'cor-thales-converse',
    title: 'Converse of Thales Theorem',
    statement: 'If $\\angle ACB = 90°$ and $A$, $B$ are endpoints of segment $AB$, then $C$ lies on the circle with diameter $AB$.',
    sectionId: 11,
    sectionTitle: 'Proof of the Thales Theorem',
    category: 'Circle Theorems',
    type: 'corollary',
    hasProof: true,
    proof: `Let $M$ be the midpoint of $AB$. We show $|MC| = |MA| = |MB|$.
By the Pythagorean theorem in $\\triangle ACB$: $|AC|^2 + |CB|^2 = |AB|^2$.
The median to the hypotenuse of a right triangle equals half the hypotenuse.
Therefore $|MC| = \\frac{1}{2}|AB| = |MA| = |MB|$.
So $C$ lies on the circle with center $M$ and diameter $AB$.`,
  },

  // =============================================================================
  // SECTION 12: ANGLES IN A CIRCLE
  // =============================================================================
  {
    id: 'thm-inscribed-angle',
    title: 'Inscribed Angle Theorem',
    statement: 'An inscribed angle is half the central angle that subtends the same arc. If $\\angle ACB$ is inscribed and $\\angle AOB$ is the central angle on arc $AB$, then $\\angle ACB = \\frac{1}{2}\\angle AOB$.',
    sectionId: 12,
    sectionTitle: 'Angles in a Circle',
    category: 'Circle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Case when one side of inscribed angle passes through center:
Let $C$ be on circle, $O$ center, and $CB$ pass through $O$.
Triangle $\\triangle OAC$ is isosceles ($|OA| = |OC|$).
So $\\angle OCA = \\angle OAC = \\alpha$.
Exterior angle: $\\angle AOB = 2\\alpha = 2\\angle ACB$.
The general case follows by adding or subtracting such cases.`,
  },
  {
    id: 'cor-inscribed-angles-same-arc',
    title: 'Inscribed Angles on Same Arc',
    statement: 'All inscribed angles that subtend the same arc are equal.',
    sectionId: 12,
    sectionTitle: 'Angles in a Circle',
    category: 'Circle Theorems',
    type: 'corollary',
    hasProof: true,
    proof: `Each inscribed angle equals half the central angle on that arc. Since the central angle is unique, all inscribed angles on the same arc are equal.`,
  },
  {
    id: 'thm-cyclic-quadrilateral',
    title: 'Cyclic Quadrilateral Theorem',
    statement: 'A quadrilateral is inscribed in a circle if and only if its opposite angles sum to $180°$.',
    sectionId: 12,
    sectionTitle: 'Angles in a Circle',
    category: 'Circle Theorems',
    type: 'theorem',
    hasProof: true,
    proof: `Forward: Let $ABCD$ be inscribed in a circle.
$\\angle A$ subtends arc $BCD$, $\\angle C$ subtends arc $DAB$.
Together these arcs form the whole circle ($360°$ central angle).
So $\\angle A + \\angle C = \\frac{1}{2}(360°) = 180°$.
Similarly $\\angle B + \\angle D = 180°$.`,
  },

  // =============================================================================
  // SECTION 13: THE PYTHAGOREAN THEOREM REVISITED
  // =============================================================================
  {
    id: 'thm-pythagorean-altitude',
    title: 'Altitude to Hypotenuse',
    statement: 'In a right triangle, the altitude to the hypotenuse creates two triangles similar to the original and to each other. The altitude length is the geometric mean of the two segments it creates on the hypotenuse.',
    sectionId: 13,
    sectionTitle: 'The Pythagorean Theorem Revisited',
    category: 'Pythagorean Theorem',
    type: 'theorem',
    hasProof: true,
    proof: `Let $\\triangle ABC$ have right angle at $C$, with altitude $CD$ to hypotenuse $AB$.
$\\triangle ACD \\sim \\triangle ABC$ (AA similarity: shared angle at $A$, right angles).
$\\triangle BCD \\sim \\triangle ABC$ (AA similarity: shared angle at $B$, right angles).
Therefore $\\triangle ACD \\sim \\triangle CBD$.
From similarity: $\\frac{|AD|}{|CD|} = \\frac{|CD|}{|BD|}$, so $|CD|^2 = |AD| \\cdot |BD|$.`,
  },
  {
    id: 'thm-pythagorean-euclid-vi',
    title: 'Pythagorean Theorem via Similar Triangles',
    statement: 'The Pythagorean theorem can be proved using similar triangles: in $\\triangle ABC$ with right angle at $C$, $|AC|^2 + |BC|^2 = |AB|^2$.',
    sectionId: 13,
    sectionTitle: 'The Pythagorean Theorem Revisited',
    category: 'Pythagorean Theorem',
    type: 'theorem',
    hasProof: true,
    proof: `Drop altitude $CD$ to hypotenuse $AB$, creating segments $|AD| = p$, $|DB| = q$.
From similar triangles: $\\frac{|AC|}{|AB|} = \\frac{|AD|}{|AC|}$, so $|AC|^2 = |AB| \\cdot |AD| = (p+q) \\cdot p$.
Similarly: $|BC|^2 = |AB| \\cdot |BD| = (p+q) \\cdot q$.
Therefore: $|AC|^2 + |BC|^2 = (p+q)(p+q) = |AB|^2$.`,
  },

  // =============================================================================
  // SECTION 15: THE NUMBER LINE AND THE NUMBER PLANE
  // =============================================================================
  {
    id: 'def-cartesian-coordinates',
    title: 'Cartesian Coordinates',
    statement: 'The Cartesian coordinate system assigns to each point $P$ in the plane an ordered pair $(x, y)$ of real numbers, where $x$ is the signed distance from the $y$-axis and $y$ is the signed distance from the $x$-axis.',
    sectionId: 15,
    sectionTitle: 'The Number Line and the Number Plane',
    category: 'Coordinate Geometry',
    type: 'definition',
  },
  {
    id: 'def-number-plane',
    title: 'The Number Plane $\\mathbb{R}^2$',
    statement: 'The number plane $\\mathbb{R}^2$ is the set of all ordered pairs $(x, y)$ of real numbers, equipped with the Cartesian coordinate system.',
    sectionId: 15,
    sectionTitle: 'The Number Line and the Number Plane',
    category: 'Coordinate Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 16: LINES AND THEIR EQUATIONS
  // =============================================================================
  {
    id: 'thm-line-equation',
    title: 'Equation of a Line',
    statement: 'Every line in $\\mathbb{R}^2$ can be described by a linear equation $ax + by = c$ where $(a, b) \\neq (0, 0)$. Conversely, every such equation describes a line.',
    sectionId: 16,
    sectionTitle: 'Lines and Their Equations',
    category: 'Coordinate Geometry',
    type: 'theorem',
  },
  {
    id: 'def-slope',
    title: 'Slope of a Line',
    statement: 'The slope of a non-vertical line through points $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\frac{y_2 - y_1}{x_2 - x_1}$. A line with equation $y = mx + b$ has slope $m$ and $y$-intercept $b$.',
    sectionId: 16,
    sectionTitle: 'Lines and Their Equations',
    category: 'Coordinate Geometry',
    type: 'definition',
  },
  {
    id: 'thm-parallel-slopes',
    title: 'Parallel and Perpendicular Slopes',
    statement: 'Two non-vertical lines are parallel iff they have equal slopes. Two non-vertical lines are perpendicular iff the product of their slopes is $-1$.',
    sectionId: 16,
    sectionTitle: 'Lines and Their Equations',
    category: 'Coordinate Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `Parallel: Lines $y = m_1x + b_1$ and $y = m_2x + b_2$ are parallel iff they have no intersection (except possibly coinciding). Setting equal: $m_1x + b_1 = m_2x + b_2$ has no solution iff $m_1 = m_2$ and $b_1 \\neq b_2$.
Perpendicular: If lines make angles $\\theta_1$ and $\\theta_2$ with the $x$-axis, perpendicularity means $\\theta_2 = \\theta_1 + 90°$. Using $\\tan(\\theta + 90°) = -\\cot\\theta = -1/\\tan\\theta$, we get $m_2 = -1/m_1$, so $m_1m_2 = -1$.`,
  },

  // =============================================================================
  // SECTION 17: DISTANCE
  // =============================================================================
  {
    id: 'thm-distance-formula',
    title: 'Distance Formula',
    statement: 'The distance between points $(x_1, y_1)$ and $(x_2, y_2)$ in $\\mathbb{R}^2$ is $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
    sectionId: 17,
    sectionTitle: 'Distance',
    category: 'Coordinate Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `Form a right triangle with horizontal leg $|x_2 - x_1|$ and vertical leg $|y_2 - y_1|$.
By the Pythagorean theorem: $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$.
Therefore $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.`,
  },
  {
    id: 'def-circle-equation',
    title: 'Equation of a Circle',
    statement: 'A circle with center $(h, k)$ and radius $r$ consists of all points $(x, y)$ satisfying $(x - h)^2 + (y - k)^2 = r^2$.',
    sectionId: 17,
    sectionTitle: 'Distance',
    category: 'Coordinate Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 18: INTERSECTIONS OF LINES AND CIRCLES
  // =============================================================================
  {
    id: 'thm-line-circle-intersection',
    title: 'Line-Circle Intersection',
    statement: 'A line intersects a circle in at most two points. If the distance from the center to the line is less than, equal to, or greater than the radius, the line is a secant, tangent, or non-intersecting respectively.',
    sectionId: 18,
    sectionTitle: 'Intersections of Lines and Circles',
    category: 'Coordinate Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-constructible-numbers',
    title: 'Constructible Numbers',
    statement: 'A length is constructible with straightedge and compass from a unit segment iff it can be obtained from rational numbers using only the operations $+, -, \\times, \\div, \\sqrt{\\phantom{x}}$.',
    sectionId: 18,
    sectionTitle: 'Intersections of Lines and Circles',
    category: 'Constructibility',
    type: 'theorem',
    hasProof: true,
    proof: `Line-line intersections involve solving linear equations, giving rational results from rational inputs.
Line-circle intersections require solving a quadratic, introducing at most one square root.
Circle-circle intersections also reduce to solving a quadratic after eliminating one variable.
Therefore, starting from rationals, only square roots can be introduced.`,
  },

  // =============================================================================
  // SECTION 19: ANGLE AND SLOPE
  // =============================================================================
  {
    id: 'thm-slope-tangent',
    title: 'Slope as Tangent',
    statement: 'If a line makes angle $\\theta$ with the positive $x$-axis, its slope is $m = \\tan\\theta$.',
    sectionId: 19,
    sectionTitle: 'Angle and Slope',
    category: 'Coordinate Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `Consider a line through the origin making angle $\\theta$ with the $x$-axis.
A point on this line has coordinates $(r\\cos\\theta, r\\sin\\theta)$ for some $r > 0$.
The slope is $m = \\frac{r\\sin\\theta - 0}{r\\cos\\theta - 0} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.`,
  },
  {
    id: 'thm-angle-between-lines',
    title: 'Angle Between Lines',
    statement: 'The angle $\\theta$ between lines with slopes $m_1$ and $m_2$ satisfies $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1m_2}\\right|$ when $m_1m_2 \\neq -1$.',
    sectionId: 19,
    sectionTitle: 'Angle and Slope',
    category: 'Coordinate Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `Let the lines make angles $\\alpha$ and $\\beta$ with the $x$-axis, so $m_1 = \\tan\\alpha$, $m_2 = \\tan\\beta$.
The angle between them is $\\theta = |\\alpha - \\beta|$.
Using the tangent subtraction formula: $\\tan(\\alpha - \\beta) = \\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta} = \\frac{m_1 - m_2}{1 + m_1m_2}$.`,
  },

  // =============================================================================
  // SECTION 20: ISOMETRIES
  // =============================================================================
  {
    id: 'def-isometry',
    title: 'Isometry',
    statement: 'An isometry of the plane is a transformation $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ that preserves distances: $|T(P)T(Q)| = |PQ|$ for all points $P, Q$.',
    sectionId: 20,
    sectionTitle: 'Isometries',
    category: 'Transformations',
    type: 'definition',
  },
  {
    id: 'thm-isometry-types',
    title: 'Classification of Plane Isometries',
    statement: 'Every isometry of the plane is one of: translation, rotation, reflection, or glide reflection.',
    sectionId: 20,
    sectionTitle: 'Isometries',
    category: 'Transformations',
    type: 'theorem',
  },
  {
    id: 'def-translation',
    title: 'Translation',
    statement: 'A translation by vector $(a, b)$ maps each point $(x, y)$ to $(x + a, y + b)$.',
    sectionId: 20,
    sectionTitle: 'Isometries',
    category: 'Transformations',
    type: 'definition',
  },
  {
    id: 'def-reflection',
    title: 'Reflection',
    statement: `A reflection in line $L$ maps each point $P$ to the point $P'$ such that $L$ is the perpendicular bisector of $PP'$.`,
    sectionId: 20,
    sectionTitle: 'Isometries',
    category: 'Transformations',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 21: THE THREE REFLECTIONS THEOREM
  // =============================================================================
  {
    id: 'thm-three-reflections',
    title: 'Three Reflections Theorem',
    statement: 'Every isometry of the plane is a composition of at most three reflections.',
    sectionId: 21,
    sectionTitle: 'The Three Reflections Theorem',
    category: 'Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `An isometry is determined by its effect on three non-collinear points.
Reflection in the perpendicular bisector of $PP'$ sends $P$ to $P'$.
Using at most three such reflections, we can map any triangle to its image.
Since the isometry and our composition of reflections agree on three non-collinear points, they are equal.`,
  },
  {
    id: 'cor-reflection-parity',
    title: 'Orientation and Reflections',
    statement: 'An isometry preserves orientation iff it is a composition of an even number of reflections.',
    sectionId: 21,
    sectionTitle: 'The Three Reflections Theorem',
    category: 'Transformations',
    type: 'corollary',
    hasProof: true,
    proof: `A single reflection reverses orientation (it swaps clockwise/counterclockwise).
Two reflections preserve orientation (reverse then reverse).
Translations (2 reflections in parallel lines) and rotations (2 reflections in intersecting lines) preserve orientation.
Reflections and glide reflections (1 or 3 reflections) reverse orientation.`,
  },

  // =============================================================================
  // SECTION 23: VECTORS
  // =============================================================================
  {
    id: 'def-vector',
    title: 'Vector',
    statement: 'A vector in $\\mathbb{R}^n$ is an ordered $n$-tuple $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ of real numbers. Vectors can be added componentwise and multiplied by scalars.',
    sectionId: 23,
    sectionTitle: 'Vectors',
    category: 'Vector Geometry',
    type: 'definition',
  },
  {
    id: 'def-vector-addition',
    title: 'Vector Addition',
    statement: 'The sum of vectors $\\mathbf{u} = (u_1, \\ldots, u_n)$ and $\\mathbf{v} = (v_1, \\ldots, v_n)$ is $\\mathbf{u} + \\mathbf{v} = (u_1 + v_1, \\ldots, u_n + v_n)$.',
    sectionId: 23,
    sectionTitle: 'Vectors',
    category: 'Vector Geometry',
    type: 'definition',
  },
  {
    id: 'def-scalar-multiplication',
    title: 'Scalar Multiplication',
    statement: 'For scalar $c$ and vector $\\mathbf{v} = (v_1, \\ldots, v_n)$, the scalar multiple is $c\\mathbf{v} = (cv_1, \\ldots, cv_n)$.',
    sectionId: 23,
    sectionTitle: 'Vectors',
    category: 'Vector Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 24: DIRECTION AND LINEAR INDEPENDENCE
  // =============================================================================
  {
    id: 'def-linear-independence',
    title: 'Linear Independence',
    statement: 'Vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ are linearly independent if the only solution to $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is $c_1 = \\cdots = c_k = 0$.',
    sectionId: 24,
    sectionTitle: 'Direction and Linear Independence',
    category: 'Vector Geometry',
    type: 'definition',
  },
  {
    id: 'thm-two-vectors-plane',
    title: 'Two Vectors Span a Plane',
    statement: 'Two non-parallel vectors in $\\mathbb{R}^n$ are linearly independent and span a 2-dimensional subspace (a plane through the origin).',
    sectionId: 24,
    sectionTitle: 'Direction and Linear Independence',
    category: 'Vector Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 25: MIDPOINTS AND CENTROIDS
  // =============================================================================
  {
    id: 'thm-midpoint-formula',
    title: 'Midpoint Formula',
    statement: 'The midpoint of the segment from $\\mathbf{a}$ to $\\mathbf{b}$ is $\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$.',
    sectionId: 25,
    sectionTitle: 'Midpoints and Centroids',
    category: 'Vector Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-centroid-formula',
    title: 'Centroid of a Triangle',
    statement: 'The centroid of a triangle with vertices $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ is $\\frac{1}{3}(\\mathbf{a} + \\mathbf{b} + \\mathbf{c})$.',
    sectionId: 25,
    sectionTitle: 'Midpoints and Centroids',
    category: 'Vector Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `The centroid is the intersection of medians. A median from $\\mathbf{a}$ to midpoint $\\frac{1}{2}(\\mathbf{b} + \\mathbf{c})$ can be parameterized as $\\mathbf{a} + t(\\frac{1}{2}(\\mathbf{b} + \\mathbf{c}) - \\mathbf{a})$.
The medians intersect at $t = \\frac{2}{3}$, giving $\\frac{1}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b} + \\frac{1}{3}\\mathbf{c}$.`,
  },
  {
    id: 'thm-medians-concurrent',
    title: 'Medians are Concurrent',
    statement: 'The three medians of a triangle meet at a single point (the centroid), which divides each median in the ratio $2:1$.',
    sectionId: 25,
    sectionTitle: 'Midpoints and Centroids',
    category: 'Vector Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 26: THE INNER PRODUCT
  // =============================================================================
  {
    id: 'def-inner-product',
    title: 'Inner Product (Dot Product)',
    statement: 'The inner product of $\\mathbf{u} = (u_1, \\ldots, u_n)$ and $\\mathbf{v} = (v_1, \\ldots, v_n)$ is $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n$.',
    sectionId: 26,
    sectionTitle: 'The Inner Product',
    category: 'Vector Geometry',
    type: 'definition',
  },
  {
    id: 'thm-inner-product-properties',
    title: 'Properties of Inner Product',
    statement: 'The inner product satisfies: (1) $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$, (2) $(\\mathbf{u} + \\mathbf{v}) \\cdot \\mathbf{w} = \\mathbf{u} \\cdot \\mathbf{w} + \\mathbf{v} \\cdot \\mathbf{w}$, (3) $(c\\mathbf{u}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v})$, (4) $\\mathbf{u} \\cdot \\mathbf{u} \\geq 0$ with equality iff $\\mathbf{u} = \\mathbf{0}$.',
    sectionId: 26,
    sectionTitle: 'The Inner Product',
    category: 'Vector Geometry',
    type: 'theorem',
  },
  {
    id: 'def-vector-norm',
    title: 'Vector Norm (Length)',
    statement: 'The norm (length) of vector $\\mathbf{v}$ is $|\\mathbf{v}| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$.',
    sectionId: 26,
    sectionTitle: 'The Inner Product',
    category: 'Vector Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 27: INNER PRODUCT AND COSINE
  // =============================================================================
  {
    id: 'thm-inner-product-angle',
    title: 'Inner Product and Angle',
    statement: 'For nonzero vectors $\\mathbf{u}$ and $\\mathbf{v}$, $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}| |\\mathbf{v}| \\cos\\theta$, where $\\theta$ is the angle between them.',
    sectionId: 27,
    sectionTitle: 'Inner Product and Cosine',
    category: 'Vector Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `By the law of cosines in the triangle with sides $\\mathbf{u}$, $\\mathbf{v}$, $\\mathbf{u} - \\mathbf{v}$:
$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.
Expanding: $|\\mathbf{u} - \\mathbf{v}|^2 = (\\mathbf{u} - \\mathbf{v}) \\cdot (\\mathbf{u} - \\mathbf{v}) = |\\mathbf{u}|^2 - 2\\mathbf{u}\\cdot\\mathbf{v} + |\\mathbf{v}|^2$.
Comparing: $-2\\mathbf{u}\\cdot\\mathbf{v} = -2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$.`,
  },
  {
    id: 'thm-orthogonality',
    title: 'Orthogonality Criterion',
    statement: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are perpendicular (orthogonal) if and only if $\\mathbf{u} \\cdot \\mathbf{v} = 0$.',
    sectionId: 27,
    sectionTitle: 'Inner Product and Cosine',
    category: 'Vector Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `$\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta = 0$ iff $\\cos\\theta = 0$ (assuming nonzero vectors), which occurs iff $\\theta = 90°$.`,
  },

  // =============================================================================
  // SECTION 28: THE TRIANGLE INEQUALITY
  // =============================================================================
  {
    id: 'thm-cauchy-schwarz-inequality',
    title: 'Cauchy-Schwarz Inequality',
    statement: 'For any vectors $\\mathbf{u}$ and $\\mathbf{v}$: $|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}| |\\mathbf{v}|$, with equality iff $\\mathbf{u}$ and $\\mathbf{v}$ are parallel.',
    sectionId: 28,
    sectionTitle: 'The Triangle Inequality',
    category: 'Vector Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `For $t \\in \\mathbb{R}$, $|\\mathbf{u} + t\\mathbf{v}|^2 \\geq 0$.
Expanding: $|\\mathbf{u}|^2 + 2t(\\mathbf{u}\\cdot\\mathbf{v}) + t^2|\\mathbf{v}|^2 \\geq 0$.
This quadratic in $t$ is non-negative, so its discriminant $\\leq 0$:
$4(\\mathbf{u}\\cdot\\mathbf{v})^2 - 4|\\mathbf{u}|^2|\\mathbf{v}|^2 \\leq 0$.
Therefore $(\\mathbf{u}\\cdot\\mathbf{v})^2 \\leq |\\mathbf{u}|^2|\\mathbf{v}|^2$.`,
  },
  {
    id: 'thm-triangle-inequality-vectors',
    title: 'Triangle Inequality',
    statement: 'For any vectors $\\mathbf{u}$ and $\\mathbf{v}$: $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.',
    sectionId: 28,
    sectionTitle: 'The Triangle Inequality',
    category: 'Vector Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `$|\\mathbf{u} + \\mathbf{v}|^2 = |\\mathbf{u}|^2 + 2\\mathbf{u}\\cdot\\mathbf{v} + |\\mathbf{v}|^2$
$\\leq |\\mathbf{u}|^2 + 2|\\mathbf{u}||\\mathbf{v}| + |\\mathbf{v}|^2$ (by Cauchy-Schwarz)
$= (|\\mathbf{u}| + |\\mathbf{v}|)^2$.
Taking square roots: $|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$.`,
  },

  // =============================================================================
  // SECTION 29: ROTATIONS, MATRICES, AND COMPLEX NUMBERS
  // =============================================================================
  {
    id: 'thm-rotation-matrix',
    title: 'Rotation Matrix',
    statement: 'Rotation by angle $\\theta$ about the origin in $\\mathbb{R}^2$ is given by the matrix $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
    sectionId: 29,
    sectionTitle: 'Rotations, Matrices, and Complex Numbers',
    category: 'Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `The point $(1, 0)$ rotates to $(\\cos\\theta, \\sin\\theta)$.
The point $(0, 1)$ rotates to $(-\\sin\\theta, \\cos\\theta)$.
A general point $(x, y) = x(1, 0) + y(0, 1)$ rotates to $x(\\cos\\theta, \\sin\\theta) + y(-\\sin\\theta, \\cos\\theta)$.
In matrix form: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$.`,
  },
  {
    id: 'thm-complex-rotation',
    title: 'Complex Numbers and Rotation',
    statement: 'Identifying $(x, y)$ with $z = x + iy$, rotation by $\\theta$ corresponds to multiplication by $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.',
    sectionId: 29,
    sectionTitle: 'Rotations, Matrices, and Complex Numbers',
    category: 'Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `$(\\cos\\theta + i\\sin\\theta)(x + iy) = (x\\cos\\theta - y\\sin\\theta) + i(x\\sin\\theta + y\\cos\\theta)$.
This matches the result of the rotation matrix applied to $(x, y)$.`,
  },

  // =============================================================================
  // SECTION 31: PERSPECTIVE DRAWING
  // =============================================================================
  {
    id: 'def-central-projection',
    title: 'Central Projection',
    statement: 'Central projection from a point $O$ (the eye) onto a plane $\\Pi$ maps each point $P$ (not on the line through $O$ parallel to $\\Pi$) to the intersection of line $OP$ with $\\Pi$.',
    sectionId: 31,
    sectionTitle: 'Perspective Drawing',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'def-vanishing-point',
    title: 'Vanishing Point',
    statement: 'The vanishing point of a family of parallel lines is the point on the picture plane where their projections appear to meet. Parallel lines not parallel to the picture plane have a common vanishing point.',
    sectionId: 31,
    sectionTitle: 'Perspective Drawing',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'thm-horizon-line',
    title: 'Horizon Line',
    statement: 'The vanishing points of all horizontal lines lie on a single horizontal line called the horizon line, at eye level.',
    sectionId: 31,
    sectionTitle: 'Perspective Drawing',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 32: DRAWING WITH STRAIGHTEDGE ALONE
  // =============================================================================
  {
    id: 'thm-straightedge-preserves',
    title: 'Straightedge Constructions',
    statement: 'With straightedge alone, we can: construct lines through given points, find intersection of lines. We cannot: bisect a segment, construct perpendiculars, or construct parallels.',
    sectionId: 32,
    sectionTitle: 'Drawing with Straightedge Alone',
    category: 'Projective Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-projective-straightedge',
    title: 'Projective Constructions',
    statement: 'Straightedge constructions are precisely those that are valid in projective geometry: they preserve incidence (collinearity of points, concurrence of lines).',
    sectionId: 32,
    sectionTitle: 'Drawing with Straightedge Alone',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 33: PROJECTIVE PLANE AXIOMS AND THEIR MODELS
  // =============================================================================
  {
    id: 'axiom-projective-plane',
    title: 'Axioms for Projective Plane',
    statement: 'A projective plane satisfies: (1) Any two distinct points lie on exactly one line. (2) Any two distinct lines meet in exactly one point. (3) There exist four points, no three collinear.',
    sectionId: 33,
    sectionTitle: 'Projective Plane Axioms and Their Models',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'def-real-projective-plane',
    title: 'Real Projective Plane $\\mathbb{RP}^2$',
    statement: 'The real projective plane $\\mathbb{RP}^2$ is the set of lines through the origin in $\\mathbb{R}^3$. Points of $\\mathbb{RP}^2$ are lines in $\\mathbb{R}^3$ through $O$; lines of $\\mathbb{RP}^2$ are planes in $\\mathbb{R}^3$ through $O$.',
    sectionId: 33,
    sectionTitle: 'Projective Plane Axioms and Their Models',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'thm-duality-principle',
    title: 'Principle of Duality',
    statement: 'In projective geometry, any theorem remains valid when "point" and "line" are interchanged, and "lies on" and "passes through" are interchanged.',
    sectionId: 33,
    sectionTitle: 'Projective Plane Axioms and Their Models',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 34: HOMOGENEOUS COORDINATES
  // =============================================================================
  {
    id: 'def-homogeneous-coords',
    title: 'Homogeneous Coordinates',
    statement: 'A point in $\\mathbb{RP}^2$ is represented by homogeneous coordinates $[x : y : z]$, where $(x, y, z) \\neq (0, 0, 0)$ and $[x : y : z] = [\\lambda x : \\lambda y : \\lambda z]$ for any $\\lambda \\neq 0$.',
    sectionId: 34,
    sectionTitle: 'Homogeneous Coordinates',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'thm-line-homogeneous',
    title: 'Lines in Homogeneous Coordinates',
    statement: 'A line in $\\mathbb{RP}^2$ is the set of points $[x : y : z]$ satisfying $ax + by + cz = 0$ for some $(a, b, c) \\neq (0, 0, 0)$. The line can be represented by $[a : b : c]$.',
    sectionId: 34,
    sectionTitle: 'Homogeneous Coordinates',
    category: 'Projective Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-points-at-infinity',
    title: 'Points at Infinity',
    statement: 'Points at infinity have coordinates $[x : y : 0]$. They form the "line at infinity" $z = 0$. The ordinary plane corresponds to points with $z \\neq 0$, identified with $(x/z, y/z)$.',
    sectionId: 34,
    sectionTitle: 'Homogeneous Coordinates',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 35: PROJECTION
  // =============================================================================
  {
    id: 'thm-projection-matrix',
    title: 'Projective Transformation',
    statement: `A projective transformation (projectivity) of $\\mathbb{RP}^2$ is given by $[x : y : z] \\mapsto [x' : y' : z']$ where $(x', y', z')^T = A(x, y, z)^T$ for an invertible $3 \\times 3$ matrix $A$.`,
    sectionId: 35,
    sectionTitle: 'Projection',
    category: 'Projective Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-four-points',
    title: 'Fundamental Theorem of Projective Geometry',
    statement: 'Given any four points in general position (no three collinear) in $\\mathbb{RP}^2$, there is a unique projectivity mapping them to any other four points in general position.',
    sectionId: 35,
    sectionTitle: 'Projection',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 36: LINEAR FRACTIONAL FUNCTIONS
  // =============================================================================
  {
    id: 'def-mobius-transformation',
    title: 'Mobius Transformation',
    statement: 'A Mobius (linear fractional) transformation of $\\mathbb{RP}^1$ is $x \\mapsto \\frac{ax + b}{cx + d}$ where $ad - bc \\neq 0$.',
    sectionId: 36,
    sectionTitle: 'Linear Fractional Functions',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'thm-mobius-group',
    title: 'Mobius Transformations Form a Group',
    statement: 'The Mobius transformations form a group under composition, isomorphic to $\\text{PGL}(2, \\mathbb{R})$.',
    sectionId: 36,
    sectionTitle: 'Linear Fractional Functions',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 37: THE CROSS-RATIO
  // =============================================================================
  {
    id: 'def-cross-ratio',
    title: 'Cross-Ratio',
    statement: 'The cross-ratio of four collinear points $A, B, C, D$ is $(A, B; C, D) = \\frac{|AC|}{|BC|} : \\frac{|AD|}{|BD|}$ with appropriate signs. In coordinates: $(a, b; c, d) = \\frac{(c-a)(d-b)}{(c-b)(d-a)}$.',
    sectionId: 37,
    sectionTitle: 'The Cross-Ratio',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'thm-cross-ratio-invariant',
    title: 'Cross-Ratio is Projectively Invariant',
    statement: 'The cross-ratio of four collinear points is preserved by any projectivity (and hence by any central projection).',
    sectionId: 37,
    sectionTitle: 'The Cross-Ratio',
    category: 'Projective Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `A Mobius transformation $f(x) = \\frac{ax + b}{cx + d}$ preserves cross-ratio:
$(f(a), f(b); f(c), f(d)) = (a, b; c, d)$.
Direct calculation shows the cross-ratio is unchanged after substituting the linear fractional expressions.`,
  },

  // =============================================================================
  // SECTION 38: WHAT IS SPECIAL ABOUT THE CROSS-RATIO?
  // =============================================================================
  {
    id: 'thm-cross-ratio-unique',
    title: 'Uniqueness of Cross-Ratio',
    statement: 'The cross-ratio is essentially the only projective invariant of four collinear points: any other invariant is a function of the cross-ratio.',
    sectionId: 38,
    sectionTitle: 'What is Special About the Cross-Ratio?',
    category: 'Projective Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-harmonic-conjugates',
    title: 'Harmonic Conjugates',
    statement: 'Points $C$ and $D$ are harmonic conjugates with respect to $A$ and $B$ if $(A, B; C, D) = -1$. If $C$ is the midpoint of $AB$, then $D$ is at infinity.',
    sectionId: 38,
    sectionTitle: 'What is Special About the Cross-Ratio?',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 40: PAPPUS AND DESARGUES REVISITED
  // =============================================================================
  {
    id: 'thm-pappus-general',
    title: "Pappus's Theorem (General)",
    statement: 'Let $A, B, C$ be on line $L_1$ and $D, E, F$ be on line $L_2$. Then the intersections $X = AE \\cap BD$, $Y = AF \\cap CD$, $Z = BF \\cap CE$ are collinear.',
    sectionId: 40,
    sectionTitle: 'Pappus and Desargues Revisited',
    category: 'Projective Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `This is a central theorem of projective geometry, proved using the theory of cross-ratios or by computation in homogeneous coordinates. The theorem holds in any projective plane coordinatized by a commutative field.`,
  },
  {
    id: 'thm-desargues-general',
    title: "Desargues's Theorem (General)",
    statement: `If triangles $\\triangle ABC$ and $\\triangle A'B'C'$ are in perspective from a point $O$ (lines $AA'$, $BB'$, $CC'$ concurrent at $O$), then they are in perspective from a line (intersections $AB \\cap A'B'$, $BC \\cap B'C'$, $CA \\cap C'A'$ are collinear).`,
    sectionId: 40,
    sectionTitle: 'Pappus and Desargues Revisited',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 43: PROJECTIVE ARITHMETIC
  // =============================================================================
  {
    id: 'def-projective-addition',
    title: 'Projective Addition',
    statement: 'Given points $0$, $1$, $\\infty$ on a projective line, addition of points can be defined using the complete quadrilateral construction, recovering ordinary addition of coordinates.',
    sectionId: 43,
    sectionTitle: 'Projective Arithmetic',
    category: 'Projective Geometry',
    type: 'definition',
  },
  {
    id: 'def-projective-multiplication',
    title: 'Projective Multiplication',
    statement: 'Given points $0$, $1$, $\\infty$ on a projective line, multiplication can be defined using cross-ratio: $ab$ is the unique point such that $(0, \\infty; 1, a) \\cdot (0, \\infty; 1, b) = (0, \\infty; 1, ab)$.',
    sectionId: 43,
    sectionTitle: 'Projective Arithmetic',
    category: 'Projective Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 44: THE FIELD AXIOMS
  // =============================================================================
  {
    id: 'thm-projective-field',
    title: 'Coordinates from Projective Geometry',
    statement: `The points on a line in a Desarguesian projective plane form a division ring under projective addition and multiplication. If Pappus' theorem holds, this ring is a field (commutative).`,
    sectionId: 44,
    sectionTitle: 'The Field Axioms',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 48: THE GROUP OF ISOMETRIES OF THE PLANE
  // =============================================================================
  {
    id: 'def-group',
    title: 'Group',
    statement: 'A group is a set $G$ with an operation $\\cdot$ satisfying: (1) Closure: $a \\cdot b \\in G$, (2) Associativity: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$, (3) Identity: $\\exists e$ with $e \\cdot a = a \\cdot e = a$, (4) Inverses: $\\forall a, \\exists a^{-1}$ with $a \\cdot a^{-1} = e$.',
    sectionId: 48,
    sectionTitle: 'The Group of Isometries of the Plane',
    category: 'Groups and Symmetry',
    type: 'definition',
  },
  {
    id: 'thm-isometry-group',
    title: 'Isometries Form a Group',
    statement: 'The isometries of the Euclidean plane form a group $E(2)$ under composition. The subgroup of orientation-preserving isometries is $SE(2)$.',
    sectionId: 48,
    sectionTitle: 'The Group of Isometries of the Plane',
    category: 'Groups and Symmetry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 49: VECTOR TRANSFORMATIONS
  // =============================================================================
  {
    id: 'def-linear-transformation',
    title: 'Linear Transformation',
    statement: 'A linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ satisfies $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{v}) = cT(\\mathbf{v})$.',
    sectionId: 49,
    sectionTitle: 'Vector Transformations',
    category: 'Transformations',
    type: 'definition',
  },
  {
    id: 'thm-orthogonal-matrix',
    title: 'Orthogonal Transformations',
    statement: 'A linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ preserves lengths and angles iff its matrix $A$ satisfies $A^TA = I$ (orthogonal matrix). Such transformations preserve the inner product.',
    sectionId: 49,
    sectionTitle: 'Vector Transformations',
    category: 'Transformations',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 50: TRANSFORMATIONS OF THE PROJECTIVE LINE
  // =============================================================================
  {
    id: 'thm-pgl2-projective-line',
    title: 'Projective Transformations of the Line',
    statement: 'The group of projective transformations of $\\mathbb{RP}^1$ is $\\text{PGL}(2, \\mathbb{R})$, consisting of Mobius transformations $x \\mapsto \\frac{ax+b}{cx+d}$ with $ad - bc \\neq 0$.',
    sectionId: 50,
    sectionTitle: 'Transformations of the Projective Line',
    category: 'Projective Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 51: SPHERICAL GEOMETRY
  // =============================================================================
  {
    id: 'def-great-circle',
    title: 'Great Circle',
    statement: 'A great circle on a sphere is the intersection of the sphere with a plane through its center. Great circles are the geodesics (shortest paths) on a sphere.',
    sectionId: 51,
    sectionTitle: 'Spherical Geometry',
    category: 'Non-Euclidean Geometry',
    type: 'definition',
  },
  {
    id: 'thm-spherical-triangles',
    title: 'Spherical Triangle Angle Sum',
    statement: 'The sum of angles in a spherical triangle exceeds $180°$. The excess $(\\alpha + \\beta + \\gamma) - \\pi$ is proportional to the area of the triangle.',
    sectionId: 51,
    sectionTitle: 'Spherical Geometry',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `On a sphere of radius $R$, the area of a spherical triangle with angles $\\alpha, \\beta, \\gamma$ is $R^2(\\alpha + \\beta + \\gamma - \\pi)$. This is the Girard-Harriot theorem, proved by decomposing the sphere into lunes.`,
  },

  // =============================================================================
  // SECTION 52: THE ROTATION GROUP OF THE SPHERE
  // =============================================================================
  {
    id: 'def-so3',
    title: 'Special Orthogonal Group $SO(3)$',
    statement: '$SO(3)$ is the group of $3 \\times 3$ orthogonal matrices with determinant $1$. It represents rotations of $\\mathbb{R}^3$ about the origin.',
    sectionId: 52,
    sectionTitle: 'The Rotation Group of the Sphere',
    category: 'Groups and Symmetry',
    type: 'definition',
  },
  {
    id: 'thm-euler-rotation',
    title: "Euler's Rotation Theorem",
    statement: 'Every rotation of $\\mathbb{R}^3$ about the origin is a rotation about some axis through the origin.',
    sectionId: 52,
    sectionTitle: 'The Rotation Group of the Sphere',
    category: 'Groups and Symmetry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 53: REPRESENTING SPACE ROTATIONS BY QUATERNIONS
  // =============================================================================
  {
    id: 'def-quaternions',
    title: 'Quaternions',
    statement: 'The quaternions $\\mathbb{H}$ are numbers $q = a + bi + cj + dk$ where $i^2 = j^2 = k^2 = ijk = -1$. Quaternion multiplication is associative but not commutative.',
    sectionId: 53,
    sectionTitle: 'Representing Space Rotations by Quaternions',
    category: 'Groups and Symmetry',
    type: 'definition',
  },
  {
    id: 'thm-quaternion-rotation',
    title: 'Quaternion Rotation Formula',
    statement: 'A unit quaternion $q$ represents a rotation: the image of vector $\\mathbf{v}$ (viewed as a pure quaternion $vi + vj + vk$) is $q\\mathbf{v}q^{-1}$. This gives a double cover $S^3 \\to SO(3)$.',
    sectionId: 53,
    sectionTitle: 'Representing Space Rotations by Quaternions',
    category: 'Groups and Symmetry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 54: A FINITE GROUP OF SPACE ROTATIONS
  // =============================================================================
  {
    id: 'thm-platonic-symmetry',
    title: 'Symmetry Groups of Platonic Solids',
    statement: 'The rotation symmetries of a regular polyhedron form a finite subgroup of $SO(3)$: tetrahedron ($A_4$, order 12), cube/octahedron ($S_4$, order 24), dodecahedron/icosahedron ($A_5$, order 60).',
    sectionId: 54,
    sectionTitle: 'A Finite Group of Space Rotations',
    category: 'Groups and Symmetry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 57: EXTENDING THE PROJECTIVE LINE TO A PLANE
  // =============================================================================
  {
    id: 'def-hyperbolic-plane',
    title: 'Hyperbolic Plane',
    statement: 'The hyperbolic plane is a geometry where the parallel postulate fails: through a point not on a line, there are infinitely many lines that do not intersect the given line.',
    sectionId: 57,
    sectionTitle: 'Extending the Projective Line to a Plane',
    category: 'Non-Euclidean Geometry',
    type: 'definition',
  },
  {
    id: 'def-poincare-disk',
    title: 'Poincare Disk Model',
    statement: 'The Poincare disk model represents the hyperbolic plane as the open unit disk $|z| < 1$ in $\\mathbb{C}$. Hyperbolic lines are arcs of circles orthogonal to the boundary.',
    sectionId: 57,
    sectionTitle: 'Extending the Projective Line to a Plane',
    category: 'Non-Euclidean Geometry',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 59: REFLECTIONS AND MOBIUS TRANSFORMATIONS
  // =============================================================================
  {
    id: 'thm-hyperbolic-reflection',
    title: 'Hyperbolic Reflections',
    statement: 'In the Poincare disk model, reflection in a hyperbolic line (circular arc orthogonal to the boundary) is given by inversion in that circle.',
    sectionId: 59,
    sectionTitle: 'Reflections and Mobius Transformations',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-hyperbolic-isometries',
    title: 'Hyperbolic Isometries',
    statement: 'The isometries of the Poincare disk are the Mobius transformations that preserve the unit disk. These have the form $z \\mapsto e^{i\\theta}\\frac{z - a}{1 - \\bar{a}z}$ for $|a| < 1$.',
    sectionId: 59,
    sectionTitle: 'Reflections and Mobius Transformations',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 62: NON-EUCLIDEAN DISTANCE
  // =============================================================================
  {
    id: 'thm-hyperbolic-distance',
    title: 'Hyperbolic Distance Formula',
    statement: 'In the Poincare disk, the hyperbolic distance from $0$ to $r$ (where $0 < r < 1$) is $d(0, r) = \\ln\\frac{1+r}{1-r}$. The general formula uses the cross-ratio.',
    sectionId: 62,
    sectionTitle: 'Non-Euclidean Distance',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },
  {
    id: 'thm-hyperbolic-triangle-sum',
    title: 'Hyperbolic Triangle Angle Sum',
    statement: 'The sum of angles in a hyperbolic triangle is less than $180°$. The defect $\\pi - (\\alpha + \\beta + \\gamma)$ is proportional to the area.',
    sectionId: 62,
    sectionTitle: 'Non-Euclidean Distance',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 63: NON-EUCLIDEAN TRANSLATIONS AND ROTATIONS
  // =============================================================================
  {
    id: 'def-hyperbolic-translation',
    title: 'Hyperbolic Translation',
    statement: 'A hyperbolic translation moves points along a geodesic (hyperbolic line) by a fixed hyperbolic distance. It has no fixed points in the hyperbolic plane.',
    sectionId: 63,
    sectionTitle: 'Non-Euclidean Translations and Rotations',
    category: 'Non-Euclidean Geometry',
    type: 'definition',
  },
  {
    id: 'thm-hyperbolic-rotation',
    title: 'Hyperbolic Rotation',
    statement: 'A hyperbolic rotation about a point $P$ in the Poincare disk is an ordinary Euclidean rotation if $P = 0$. In general, it is a Mobius transformation fixing $P$.',
    sectionId: 63,
    sectionTitle: 'Non-Euclidean Translations and Rotations',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 64: THREE REFLECTIONS OR TWO INVOLUTIONS
  // =============================================================================
  {
    id: 'thm-hyperbolic-three-reflections',
    title: 'Three Reflections Theorem (Hyperbolic)',
    statement: 'Every isometry of the hyperbolic plane is a composition of at most three reflections in hyperbolic lines.',
    sectionId: 64,
    sectionTitle: 'Three Reflections or Two Involutions',
    category: 'Non-Euclidean Geometry',
    type: 'theorem',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
