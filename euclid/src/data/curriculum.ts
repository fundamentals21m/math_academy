// =============================================================================
// CURRICULUM STRUCTURE - Euclid's Elements
// =============================================================================
// The Elements is organized into 13 Books, grouped into 5 Parts:
// Part 1: Books I-IV (Plane Geometry)
// Part 2: Books V-VI (Theory of Proportions)
// Part 3: Books VII-IX (Number Theory)
// Part 4: Book X (Incommensurable Magnitudes)
// Part 5: Books XI-XIII (Solid Geometry)
// =============================================================================

/**
 * Individual section within a part
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Part containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // PART 1: PLANE GEOMETRY (Books I-IV)
  // ==========================================================================
  {
    id: 1,
    title: 'Book I: Fundamentals of Plane Geometry',
    slug: 'book-i',
    sections: [
      {
        id: 0,
        title: 'Definitions, Postulates, and Common Notions',
        slug: 'definitions',
        description: 'The foundational concepts: 23 definitions, 5 postulates, and 5 common notions that form the basis of Euclidean geometry.',
      },
      {
        id: 1,
        title: 'Proposition I.1: Constructing an Equilateral Triangle',
        slug: 'prop-1',
        description: 'To construct an equilateral triangle on a given finite straight-line.',
      },
      {
        id: 2,
        title: 'Proposition I.2: Placing a Line Equal to Another',
        slug: 'prop-2',
        description: 'To place a straight-line equal to a given straight-line at a given point.',
      },
      {
        id: 3,
        title: 'Proposition I.3: Cutting Off Equal Lines',
        slug: 'prop-3',
        description: 'To cut off from the greater of two unequal straight-lines a straight-line equal to the lesser.',
      },
      {
        id: 4,
        title: 'Proposition I.4: Side-Angle-Side Congruence',
        slug: 'prop-4',
        description: 'If two triangles have two sides equal to two sides respectively, and the included angles equal, then the triangles are congruent.',
      },
      {
        id: 5,
        title: 'Proposition I.5: Isosceles Triangle Theorem',
        slug: 'prop-5',
        description: 'In isosceles triangles, the base angles are equal to one another.',
      },
      {
        id: 6,
        title: 'Proposition I.6: Converse of Isosceles Theorem',
        slug: 'prop-6',
        description: 'If a triangle has two angles equal, then the sides subtending those angles are also equal.',
      },
      {
        id: 7,
        title: 'Proposition I.7: Uniqueness of Triangle Construction',
        slug: 'prop-7',
        description: 'On the same straight-line, two triangles with equal corresponding sides cannot be constructed on the same side.',
      },
      {
        id: 8,
        title: 'Proposition I.8: Side-Side-Side Congruence',
        slug: 'prop-8',
        description: 'If two triangles have three sides equal to three sides respectively, then they are congruent.',
      },
      {
        id: 9,
        title: 'Proposition I.9: Bisecting an Angle',
        slug: 'prop-9',
        description: 'To bisect a given rectilinear angle.',
      },
      {
        id: 10,
        title: 'Proposition I.10: Bisecting a Line Segment',
        slug: 'prop-10',
        description: 'To bisect a given finite straight-line.',
      },
      {
        id: 11,
        title: 'Proposition I.11: Perpendicular at a Point',
        slug: 'prop-11',
        description: 'To draw a straight-line at right angles to a given straight-line from a given point on it.',
      },
      {
        id: 12,
        title: 'Proposition I.12: Perpendicular from a Point',
        slug: 'prop-12',
        description: 'To draw a straight-line perpendicular to a given infinite straight-line from a given point not on it.',
      },
      {
        id: 13,
        title: 'Proposition I.13: Supplementary Angles',
        slug: 'prop-13',
        description: 'If a straight-line stands on another, it makes angles whose sum equals two right angles.',
      },
      {
        id: 14,
        title: 'Proposition I.14: Straight Line from Supplementary Angles',
        slug: 'prop-14',
        description: 'If angles on opposite sides of a line sum to two right angles, the lines are straight-on with one another.',
      },
      {
        id: 15,
        title: 'Proposition I.15: Vertical Angles',
        slug: 'prop-15',
        description: 'If two straight-lines cut one another, they make vertical angles equal to one another.',
      },
      {
        id: 16,
        title: 'Proposition I.16: Exterior Angle Theorem',
        slug: 'prop-16',
        description: 'In any triangle, an exterior angle is greater than either of the interior opposite angles.',
      },
      {
        id: 17,
        title: 'Proposition I.17: Two Angles Less Than Two Right Angles',
        slug: 'prop-17',
        description: 'In any triangle, the sum of any two angles is less than two right angles.',
      },
      {
        id: 18,
        title: 'Proposition I.18: Greater Side Subtends Greater Angle',
        slug: 'prop-18',
        description: 'In any triangle, the greater side subtends the greater angle.',
      },
      {
        id: 19,
        title: 'Proposition I.19: Greater Angle Subtended by Greater Side',
        slug: 'prop-19',
        description: 'In any triangle, the greater angle is subtended by the greater side.',
      },
      {
        id: 20,
        title: 'Proposition I.20: Triangle Inequality',
        slug: 'prop-20',
        description: 'In any triangle, the sum of any two sides is greater than the remaining side.',
      },
      {
        id: 21,
        title: 'Proposition I.21: Lines Within a Triangle',
        slug: 'prop-21',
        description: 'If from the ends of one side of a triangle two lines are drawn to a point within the triangle, they are less than the other two sides but contain a greater angle.',
      },
      {
        id: 22,
        title: 'Proposition I.22: Constructing a Triangle from Three Lines',
        slug: 'prop-22',
        description: 'To construct a triangle from three straight-lines which satisfy the triangle inequality.',
      },
      {
        id: 23,
        title: 'Proposition I.23: Copying an Angle',
        slug: 'prop-23',
        description: 'To construct a rectilinear angle equal to a given angle on a given line at a given point.',
      },
      {
        id: 24,
        title: 'Proposition I.24: Comparing Triangles with Two Equal Sides',
        slug: 'prop-24',
        description: 'If two triangles have two sides equal but the included angle of one is greater, then its base is also greater.',
      },
      {
        id: 25,
        title: 'Proposition I.25: Converse of I.24',
        slug: 'prop-25',
        description: 'If two triangles have two sides equal but one base is greater, then its included angle is also greater.',
      },
      {
        id: 26,
        title: 'Proposition I.26: Angle-Side-Angle and Angle-Angle-Side',
        slug: 'prop-26',
        description: 'Two triangles are congruent if they have two angles and the included side equal, or two angles and a corresponding side equal.',
      },
      {
        id: 27,
        title: 'Proposition I.27: Alternate Interior Angles',
        slug: 'prop-27',
        description: 'If a transversal makes alternate interior angles equal, then the lines are parallel.',
      },
      {
        id: 28,
        title: 'Proposition I.28: More Conditions for Parallels',
        slug: 'prop-28',
        description: 'If a transversal makes exterior and interior angles on the same side equal, or interior angles on the same side summing to two right angles, the lines are parallel.',
      },
      {
        id: 29,
        title: 'Proposition I.29: Properties of Parallel Lines',
        slug: 'prop-29',
        description: 'A transversal falling on parallel lines makes alternate angles equal, and interior angles on the same side equal to two right angles.',
      },
      {
        id: 30,
        title: 'Proposition I.30: Lines Parallel to the Same Line',
        slug: 'prop-30',
        description: 'Straight-lines parallel to the same straight-line are also parallel to one another.',
      },
      {
        id: 31,
        title: 'Proposition I.31: Constructing a Parallel Line',
        slug: 'prop-31',
        description: 'To draw a straight-line parallel to a given line through a given point.',
      },
      {
        id: 32,
        title: 'Proposition I.32: Angle Sum of a Triangle',
        slug: 'prop-32',
        description: 'The sum of the interior angles of a triangle equals two right angles, and an exterior angle equals the sum of the two interior opposite angles.',
      },
      {
        id: 33,
        title: 'Proposition I.33: Parallelogram from Equal Parallels',
        slug: 'prop-33',
        description: 'Straight-lines joining equal and parallel lines in the same directions are themselves equal and parallel.',
      },
      {
        id: 34,
        title: 'Proposition I.34: Properties of Parallelograms',
        slug: 'prop-34',
        description: 'In a parallelogram, opposite sides and angles are equal, and the diagonal bisects the area.',
      },
      {
        id: 35,
        title: 'Proposition I.35: Parallelograms on Same Base',
        slug: 'prop-35',
        description: 'Parallelograms on the same base and between the same parallels are equal in area.',
      },
      {
        id: 36,
        title: 'Proposition I.36: Parallelograms on Equal Bases',
        slug: 'prop-36',
        description: 'Parallelograms on equal bases and between the same parallels are equal in area.',
      },
      {
        id: 37,
        title: 'Proposition I.37: Triangles on Same Base',
        slug: 'prop-37',
        description: 'Triangles on the same base and between the same parallels are equal in area.',
      },
      {
        id: 38,
        title: 'Proposition I.38: Triangles on Equal Bases',
        slug: 'prop-38',
        description: 'Triangles on equal bases and between the same parallels are equal in area.',
      },
      {
        id: 39,
        title: 'Proposition I.39: Equal Triangles Share Parallels',
        slug: 'prop-39',
        description: 'Equal triangles on the same base and on the same side lie between the same parallels.',
      },
      {
        id: 40,
        title: 'Proposition I.40: Equal Triangles on Equal Bases',
        slug: 'prop-40',
        description: 'Equal triangles on equal bases and on the same side lie between the same parallels.',
      },
      {
        id: 41,
        title: 'Proposition I.41: Parallelogram Double Triangle',
        slug: 'prop-41',
        description: 'If a parallelogram and triangle share the same base and parallels, the parallelogram is double the triangle.',
      },
      {
        id: 42,
        title: 'Proposition I.42: Constructing Equal Parallelogram',
        slug: 'prop-42',
        description: 'To construct a parallelogram equal to a given triangle in a given angle.',
      },
      {
        id: 43,
        title: 'Proposition I.43: Complements of Parallelograms',
        slug: 'prop-43',
        description: 'In any parallelogram, the complements of parallelograms about the diagonal are equal.',
      },
      {
        id: 44,
        title: 'Proposition I.44: Applying a Parallelogram',
        slug: 'prop-44',
        description: 'To apply a parallelogram equal to a given triangle to a given line in a given angle.',
      },
      {
        id: 45,
        title: 'Proposition I.45: Constructing Parallelogram Equal to Figure',
        slug: 'prop-45',
        description: 'To construct a parallelogram equal to a given rectilinear figure in a given angle.',
      },
      {
        id: 46,
        title: 'Proposition I.46: Constructing a Square',
        slug: 'prop-46',
        description: 'To construct a square on a given straight-line.',
      },
      {
        id: 47,
        title: 'Proposition I.47: The Pythagorean Theorem',
        slug: 'prop-47',
        description: 'In right-angled triangles, the square on the hypotenuse equals the sum of the squares on the other two sides.',
      },
      {
        id: 48,
        title: 'Proposition I.48: Converse of the Pythagorean Theorem',
        slug: 'prop-48',
        description: 'If the square on one side of a triangle equals the sum of the squares on the other two sides, the angle between those sides is a right angle.',
      },
    ],
  },
  // ==========================================================================
  // BOOK II: GEOMETRIC ALGEBRA
  // ==========================================================================
  {
    id: 2,
    title: 'Book II: Geometric Algebra',
    slug: 'book-ii',
    sections: [
      {
        id: 49,
        title: 'Book II Definitions',
        slug: 'book-ii-definitions',
        description: 'Definitions of rectangles, gnomons, and the geometric representation of algebraic identities.',
      },
      {
        id: 50,
        title: 'Proposition II.1: Distributive Law',
        slug: 'prop-ii-1',
        description: 'If there are two straight lines and one is cut into any number of segments, the rectangle contained by the two lines equals the sum of the rectangles contained by the uncut line and each segment.',
      },
      {
        id: 51,
        title: 'Proposition II.2: Square as Sum of Rectangles',
        slug: 'prop-ii-2',
        description: 'If a straight line is cut at random, the sum of the rectangles contained by the whole and each segment equals the square on the whole.',
      },
      {
        id: 52,
        title: 'Proposition II.3: Rectangle from Whole and Part',
        slug: 'prop-ii-3',
        description: 'If a straight line is cut at random, the rectangle contained by the whole and one segment equals the rectangle contained by the segments plus the square on that segment.',
      },
      {
        id: 53,
        title: 'Proposition II.4: Square of a Sum',
        slug: 'prop-ii-4',
        description: 'If a straight line is cut at random, the square on the whole equals the squares on the segments plus twice the rectangle contained by them. (a + b)² = a² + 2ab + b²',
      },
      {
        id: 54,
        title: 'Proposition II.5: Rectangle and Square Relation',
        slug: 'prop-ii-5',
        description: 'If a straight line is cut into equal and unequal segments, the rectangle contained by the unequal segments plus the square on the difference equals the square on the half.',
      },
      {
        id: 55,
        title: 'Proposition II.6: Extended Line Rectangle',
        slug: 'prop-ii-6',
        description: 'If a straight line is bisected and a straight line added to it, the rectangle contained by the whole with the added line and the added line, plus the square on the half, equals the square on the line made up of the half and the added line.',
      },
      {
        id: 56,
        title: 'Proposition II.7: Sum of Squares Identity',
        slug: 'prop-ii-7',
        description: 'If a straight line is cut at random, the square on the whole plus the square on one segment equals twice the rectangle contained by the whole and that segment, plus the square on the remaining segment.',
      },
      {
        id: 57,
        title: 'Proposition II.8: Four Times Rectangle',
        slug: 'prop-ii-8',
        description: 'If a straight line is cut at random, four times the rectangle contained by the whole and one segment, plus the square on the remaining segment, equals the square on the whole and that segment taken together.',
      },
      {
        id: 58,
        title: 'Proposition II.9: Sum of Squares on Unequal Segments',
        slug: 'prop-ii-9',
        description: 'If a straight line is cut into equal and unequal segments, the squares on the unequal segments together are double the square on the half plus the square on the segment between the points of section.',
      },
      {
        id: 59,
        title: 'Proposition II.10: Square on Extended Line',
        slug: 'prop-ii-10',
        description: 'If a straight line is bisected and a straight line added to it, the square on the whole with the added line plus the square on the added line is double the square on the half plus the square on the line made up of the half and the added line.',
      },
      {
        id: 60,
        title: 'Proposition II.11: Extreme and Mean Ratio (Golden Ratio)',
        slug: 'prop-ii-11',
        description: 'To cut a given straight line so that the rectangle contained by the whole and one segment equals the square on the remaining segment. This constructs the golden ratio.',
      },
      {
        id: 61,
        title: 'Proposition II.12: Law of Cosines (Obtuse)',
        slug: 'prop-ii-12',
        description: 'In obtuse-angled triangles, the square on the side subtending the obtuse angle is greater than the squares on the other sides by twice the rectangle contained by one side and the projection of the other.',
      },
      {
        id: 62,
        title: 'Proposition II.13: Law of Cosines (Acute)',
        slug: 'prop-ii-13',
        description: 'In acute-angled triangles, the square on the side subtending the acute angle is less than the squares on the other sides by twice the rectangle contained by one side and the projection of the other.',
      },
      {
        id: 63,
        title: 'Proposition II.14: Squaring a Figure',
        slug: 'prop-ii-14',
        description: 'To construct a square equal to a given rectilinear figure.',
      },
    ],
  },
  // ==========================================================================
  // BOOK III: CIRCLES
  // ==========================================================================
  {
    id: 3,
    title: 'Book III: Circles',
    slug: 'book-iii',
    sections: [
      {
        id: 64,
        title: 'Book III Definitions',
        slug: 'book-iii-definitions',
        description: 'Definitions of circles, tangent lines, segments, sectors, and angles in circles.',
      },
      {
        id: 65,
        title: 'Proposition III.1: Finding the Center of a Circle',
        slug: 'prop-iii-1',
        description: 'To find the center of a given circle.',
      },
      {
        id: 66,
        title: 'Proposition III.2: Chord Lies Within Circle',
        slug: 'prop-iii-2',
        description: 'If any two points are taken on the circumference of a circle, the straight line joining them will fall within the circle.',
      },
      {
        id: 67,
        title: 'Proposition III.3: Diameter Bisecting a Chord',
        slug: 'prop-iii-3',
        description: 'If a diameter of a circle bisects a chord which is not a diameter, it also cuts it at right angles; and if it cuts it at right angles, it also bisects it.',
      },
      {
        id: 68,
        title: 'Proposition III.4: Non-Bisecting Chords',
        slug: 'prop-iii-4',
        description: 'If in a circle two straight lines which do not pass through the center cut one another, they do not bisect one another.',
      },
      {
        id: 69,
        title: 'Proposition III.5: Intersecting Circles',
        slug: 'prop-iii-5',
        description: 'If two circles cut one another, they do not have the same center.',
      },
      {
        id: 70,
        title: 'Proposition III.6: Internally Tangent Circles',
        slug: 'prop-iii-6',
        description: 'If two circles touch one another internally, they do not have the same center.',
      },
      {
        id: 71,
        title: 'Proposition III.7: Distances from Center on Diameter',
        slug: 'prop-iii-7',
        description: 'If any point is taken on the diameter of a circle which is not the center, of all the straight lines which can be drawn from it to the circumference, the greatest is that in which the center is, the least is the remainder of the same diameter.',
      },
      {
        id: 72,
        title: 'Proposition III.8: Lines from External Point',
        slug: 'prop-iii-8',
        description: 'If any point is taken outside a circle and straight lines are drawn to the circumference, the line through the center is greatest, and of the others the nearer to that through the center is greater.',
      },
      {
        id: 73,
        title: 'Proposition III.9: Point Inside from Which Lines Equal',
        slug: 'prop-iii-9',
        description: 'If a point is taken within a circle, and more than two equal straight lines fall from it to the circumference, the point taken is the center.',
      },
      {
        id: 74,
        title: 'Proposition III.10: Two Circles Intersect in Two Points',
        slug: 'prop-iii-10',
        description: 'A circle does not cut another circle at more than two points.',
      },
      {
        id: 75,
        title: 'Proposition III.11: Internally Tangent Circles Line of Centers',
        slug: 'prop-iii-11',
        description: 'If two circles touch one another internally, and their centers are taken, the straight line joining their centers passes through the point of contact.',
      },
      {
        id: 76,
        title: 'Proposition III.12: Externally Tangent Circles Line of Centers',
        slug: 'prop-iii-12',
        description: 'If two circles touch one another externally, the straight line joining their centers passes through the point of contact.',
      },
      {
        id: 77,
        title: 'Proposition III.13: Circle Touches Another at One Point',
        slug: 'prop-iii-13',
        description: 'A circle does not touch another circle at more than one point, whether it touches internally or externally.',
      },
      {
        id: 78,
        title: 'Proposition III.14: Equal Chords Equidistant from Center',
        slug: 'prop-iii-14',
        description: 'In a circle equal straight lines are equally distant from the center, and those which are equally distant from the center are equal.',
      },
      {
        id: 79,
        title: 'Proposition III.15: Diameter is Greatest Chord',
        slug: 'prop-iii-15',
        description: 'Of straight lines in a circle the diameter is greatest, and of the rest the nearer to the center is always greater than the more remote.',
      },
      {
        id: 80,
        title: 'Proposition III.16: Perpendicular from Diameter End is Tangent',
        slug: 'prop-iii-16',
        description: 'The straight line drawn at right angles to the diameter of a circle from its end falls outside the circle, and no straight line can be interposed between it and the circumference.',
      },
      {
        id: 81,
        title: 'Proposition III.17: Drawing a Tangent',
        slug: 'prop-iii-17',
        description: 'From a given point to draw a straight line touching a given circle.',
      },
      {
        id: 82,
        title: 'Proposition III.18: Tangent Perpendicular to Radius',
        slug: 'prop-iii-18',
        description: 'If a straight line touches a circle, and a straight line is joined from the center to the point of contact, the line joined will be perpendicular to the tangent.',
      },
      {
        id: 83,
        title: 'Proposition III.19: Perpendicular at Point of Tangency',
        slug: 'prop-iii-19',
        description: 'If a straight line touches a circle, and from the point of contact a straight line is drawn at right angles to the tangent, the center of the circle will be on that line.',
      },
      {
        id: 84,
        title: 'Proposition III.20: Central Angle is Double Inscribed Angle',
        slug: 'prop-iii-20',
        description: 'In a circle the angle at the center is double the angle at the circumference when the angles have the same arc as base.',
      },
      {
        id: 85,
        title: 'Proposition III.21: Angles in Same Segment are Equal',
        slug: 'prop-iii-21',
        description: 'In a circle the angles in the same segment are equal to one another.',
      },
      {
        id: 86,
        title: 'Proposition III.22: Opposite Angles in Cyclic Quadrilateral',
        slug: 'prop-iii-22',
        description: 'The sum of the opposite angles of quadrilaterals inscribed in circles equals two right angles.',
      },
      {
        id: 87,
        title: 'Proposition III.23: Two Similar Segments Not on Same Base',
        slug: 'prop-iii-23',
        description: 'On the same straight line there cannot be constructed two similar and unequal segments of circles on the same side.',
      },
      {
        id: 88,
        title: 'Proposition III.24: Similar Segments on Equal Chords',
        slug: 'prop-iii-24',
        description: 'Similar segments of circles on equal straight lines are equal to one another.',
      },
      {
        id: 89,
        title: 'Proposition III.25: Completing a Circle from Arc',
        slug: 'prop-iii-25',
        description: 'Given a segment of a circle, to describe the complete circle of which it is a segment.',
      },
      {
        id: 90,
        title: 'Proposition III.26: Equal Angles Stand on Equal Arcs',
        slug: 'prop-iii-26',
        description: 'In equal circles equal angles stand on equal arcs, whether at the center or at the circumference.',
      },
      {
        id: 91,
        title: 'Proposition III.27: Angles on Equal Arcs are Equal',
        slug: 'prop-iii-27',
        description: 'In equal circles angles standing on equal arcs are equal, whether at the center or at the circumference.',
      },
      {
        id: 92,
        title: 'Proposition III.28: Equal Chords Cut Off Equal Arcs',
        slug: 'prop-iii-28',
        description: 'In equal circles equal straight lines cut off equal arcs, the greater with the greater and the less with the less.',
      },
      {
        id: 93,
        title: 'Proposition III.29: Equal Arcs Subtended by Equal Chords',
        slug: 'prop-iii-29',
        description: 'In equal circles equal arcs are subtended by equal straight lines.',
      },
      {
        id: 94,
        title: 'Proposition III.30: Bisecting an Arc',
        slug: 'prop-iii-30',
        description: 'To bisect a given arc.',
      },
      {
        id: 95,
        title: 'Proposition III.31: Angle in Semicircle is Right',
        slug: 'prop-iii-31',
        description: 'In a circle the angle in the semicircle is right, that in a greater segment is less than a right angle, and that in a less segment is greater than a right angle.',
      },
      {
        id: 96,
        title: 'Proposition III.32: Tangent-Chord Angle',
        slug: 'prop-iii-32',
        description: 'If a straight line touches a circle, and from the point of contact a chord is drawn, the angles which it makes with the tangent equal the angles in the alternate segments.',
      },
      {
        id: 97,
        title: 'Proposition III.33: Segment Admitting Given Angle',
        slug: 'prop-iii-33',
        description: 'On a given straight line to describe a segment of a circle admitting an angle equal to a given angle.',
      },
      {
        id: 98,
        title: 'Proposition III.34: Cutting Off Segment Admitting Angle',
        slug: 'prop-iii-34',
        description: 'From a given circle to cut off a segment admitting an angle equal to a given angle.',
      },
      {
        id: 99,
        title: 'Proposition III.35: Intersecting Chords',
        slug: 'prop-iii-35',
        description: 'If two straight lines cut one another within a circle, the rectangle contained by the segments of one equals the rectangle contained by the segments of the other.',
      },
      {
        id: 100,
        title: 'Proposition III.36: Tangent-Secant Theorem',
        slug: 'prop-iii-36',
        description: 'If a point is taken outside a circle and two straight lines fall from it on the circle, one cutting and one touching, the rectangle contained by the whole secant and the external part equals the square on the tangent.',
      },
      {
        id: 101,
        title: 'Proposition III.37: Converse of Tangent-Secant',
        slug: 'prop-iii-37',
        description: 'If a point is taken outside a circle, and from it two straight lines are drawn, one cutting the circle and one meeting it, and the rectangle contained by the whole line cutting the circle and the part outside equals the square on the line meeting the circle, then the line meeting the circle is tangent to it.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: THEORY OF PROPORTIONS (Books V-VI) - Placeholder
  // ==========================================================================
  {
    id: 4,
    title: 'Books V-VI: Theory of Proportions',
    slug: 'proportions',
    sections: [
      {
        id: 102,
        title: 'Coming Soon: Book V',
        slug: 'book-v-placeholder',
        description: 'Book V develops the arithmetic theory of proportion, applicable to commensurable and incommensurable magnitudes.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: NUMBER THEORY (Books VII-IX) - Placeholder
  // ==========================================================================
  {
    id: 5,
    title: 'Books VII-IX: Number Theory',
    slug: 'number-theory',
    sections: [
      {
        id: 103,
        title: 'Coming Soon: Book VII',
        slug: 'book-vii-placeholder',
        description: 'Books VII-IX deal with elementary number theory: prime numbers, greatest common divisors, and geometric series.',
      },
    ],
  },
  // ==========================================================================
  // PART 6: INCOMMENSURABLE MAGNITUDES (Book X) - Placeholder
  // ==========================================================================
  {
    id: 6,
    title: 'Book X: Incommensurable Magnitudes',
    slug: 'incommensurables',
    sections: [
      {
        id: 104,
        title: 'Coming Soon: Book X',
        slug: 'book-x-placeholder',
        description: 'Book X classifies incommensurable (irrational) magnitudes using the method of exhaustion.',
      },
    ],
  },
  // ==========================================================================
  // PART 7: SOLID GEOMETRY (Books XI-XIII) - Placeholder
  // ==========================================================================
  {
    id: 7,
    title: 'Books XI-XIII: Solid Geometry',
    slug: 'solid-geometry',
    sections: [
      {
        id: 105,
        title: 'Coming Soon: Book XI',
        slug: 'book-xi-placeholder',
        description: 'Books XI-XIII cover three-dimensional geometry, culminating in the construction of the five Platonic solids.',
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}

/**
 * Get book number from section ID
 */
export function getBookNumber(sectionId: number): number {
  if (sectionId <= 48) return 1;
  if (sectionId <= 63) return 2;
  if (sectionId <= 101) return 3;
  if (sectionId <= 102) return 5; // Placeholder
  if (sectionId <= 103) return 7; // Placeholder
  if (sectionId <= 104) return 10; // Placeholder
  return 11; // Placeholder
}

/**
 * Get proposition number from section ID
 */
export function getPropositionNumber(sectionId: number): string {
  if (sectionId === 0) return 'Definitions';
  if (sectionId <= 48) return `I.${sectionId}`;
  if (sectionId === 49) return 'II Definitions';
  if (sectionId <= 63) return `II.${sectionId - 49}`;
  if (sectionId === 64) return 'III Definitions';
  if (sectionId <= 101) return `III.${sectionId - 64}`;
  return '';
}
