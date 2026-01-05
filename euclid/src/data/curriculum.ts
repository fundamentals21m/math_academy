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
  // BOOK IV: INSCRIBED AND CIRCUMSCRIBED FIGURES
  // ==========================================================================
  {
    id: 4,
    title: 'Book IV: Inscribed and Circumscribed Figures',
    slug: 'book-iv',
    sections: [
      {
        id: 102,
        title: 'Book IV Definitions',
        slug: 'book-iv-definitions',
        description: 'Definitions of inscribed and circumscribed figures in circles.',
      },
      {
        id: 103,
        title: 'Proposition IV.1: Fitting a Chord Equal to Given Line',
        slug: 'prop-iv-1',
        description: 'Into a given circle to fit a straight line equal to a given straight line which is not greater than the diameter of the circle.',
      },
      {
        id: 104,
        title: 'Proposition IV.2: Inscribing a Triangle',
        slug: 'prop-iv-2',
        description: 'In a given circle to inscribe a triangle equiangular with a given triangle.',
      },
      {
        id: 105,
        title: 'Proposition IV.3: Circumscribing a Triangle',
        slug: 'prop-iv-3',
        description: 'About a given circle to circumscribe a triangle equiangular with a given triangle.',
      },
      {
        id: 106,
        title: 'Proposition IV.4: Inscribing a Circle in a Triangle',
        slug: 'prop-iv-4',
        description: 'In a given triangle to inscribe a circle.',
      },
      {
        id: 107,
        title: 'Proposition IV.5: Circumscribing a Circle About a Triangle',
        slug: 'prop-iv-5',
        description: 'About a given triangle to circumscribe a circle.',
      },
      {
        id: 108,
        title: 'Proposition IV.6: Inscribing a Square in a Circle',
        slug: 'prop-iv-6',
        description: 'In a given circle to inscribe a square.',
      },
      {
        id: 109,
        title: 'Proposition IV.7: Circumscribing a Square About a Circle',
        slug: 'prop-iv-7',
        description: 'About a given circle to circumscribe a square.',
      },
      {
        id: 110,
        title: 'Proposition IV.8: Inscribing a Circle in a Square',
        slug: 'prop-iv-8',
        description: 'In a given square to inscribe a circle.',
      },
      {
        id: 111,
        title: 'Proposition IV.9: Circumscribing a Circle About a Square',
        slug: 'prop-iv-9',
        description: 'About a given square to circumscribe a circle.',
      },
      {
        id: 112,
        title: 'Proposition IV.10: Isosceles Triangle for Pentagon',
        slug: 'prop-iv-10',
        description: 'To construct an isosceles triangle having each of the angles at the base double of the remaining one.',
      },
      {
        id: 113,
        title: 'Proposition IV.11: Inscribing a Regular Pentagon',
        slug: 'prop-iv-11',
        description: 'In a given circle to inscribe an equilateral and equiangular pentagon.',
      },
      {
        id: 114,
        title: 'Proposition IV.12: Circumscribing a Regular Pentagon',
        slug: 'prop-iv-12',
        description: 'About a given circle to circumscribe an equilateral and equiangular pentagon.',
      },
      {
        id: 115,
        title: 'Proposition IV.13: Inscribing a Circle in a Pentagon',
        slug: 'prop-iv-13',
        description: 'In a given equilateral and equiangular pentagon to inscribe a circle.',
      },
      {
        id: 116,
        title: 'Proposition IV.14: Circumscribing a Circle About a Pentagon',
        slug: 'prop-iv-14',
        description: 'About a given equilateral and equiangular pentagon to circumscribe a circle.',
      },
      {
        id: 117,
        title: 'Proposition IV.15: Inscribing a Regular Hexagon',
        slug: 'prop-iv-15',
        description: 'In a given circle to inscribe an equilateral and equiangular hexagon.',
      },
      {
        id: 118,
        title: 'Proposition IV.16: Inscribing a Regular 15-gon',
        slug: 'prop-iv-16',
        description: 'In a given circle to inscribe a fifteen-angled figure which shall be both equilateral and equiangular.',
      },
    ],
  },
  // ==========================================================================
  // BOOK V: THEORY OF PROPORTIONS
  // ==========================================================================
  {
    id: 5,
    title: 'Book V: Theory of Proportions',
    slug: 'book-v',
    sections: [
      {
        id: 119,
        title: 'Book V Definitions',
        slug: 'book-v-definitions',
        description: 'Definitions of ratio, proportion, and the fundamental concepts needed to compare magnitudes.',
      },
      {
        id: 120,
        title: 'Proposition V.1: Equimultiples Preserve Ratio',
        slug: 'prop-v-1',
        description: 'If any number of magnitudes are proportional, equimultiples taken of antecedents and consequents preserve the ratio.',
      },
      {
        id: 121,
        title: 'Proposition V.2: Sum with Equimultiples',
        slug: 'prop-v-2',
        description: 'If first:second = third:fourth, and fifth:second = sixth:fourth, then (first+fifth):second = (third+sixth):fourth.',
      },
      {
        id: 122,
        title: 'Proposition V.3: Multiples of Proportional Magnitudes',
        slug: 'prop-v-3',
        description: 'If first:second = third:fourth, then equimultiples of first and third have the same ratio to equimultiples of second and fourth.',
      },
      {
        id: 123,
        title: 'Proposition V.4: General Equimultiple Theorem',
        slug: 'prop-v-4',
        description: 'If first:second = third:fourth, any equimultiples of first and third have the same ratio to any equimultiples of second and fourth.',
      },
      {
        id: 124,
        title: 'Proposition V.5: Subtraction of Equimultiples',
        slug: 'prop-v-5',
        description: 'If a magnitude is the same multiple of another that a part subtracted is of a part subtracted, the remainder is the same multiple of the remainder.',
      },
      {
        id: 125,
        title: 'Proposition V.6: Equimultiples and Remainders',
        slug: 'prop-v-6',
        description: 'If two magnitudes are equimultiples of two others, and parts subtracted are equimultiples of the same, the remainders are either equal or equimultiples.',
      },
      {
        id: 126,
        title: 'Proposition V.7: Equal Magnitudes and Ratio',
        slug: 'prop-v-7',
        description: 'Equal magnitudes have the same ratio to the same magnitude, and the same magnitude has the same ratio to equal magnitudes.',
      },
      {
        id: 127,
        title: 'Proposition V.8: Unequal Magnitudes and Ratio',
        slug: 'prop-v-8',
        description: 'Of unequal magnitudes, the greater has a greater ratio to the same than the less has; and the same has a greater ratio to the less than to the greater.',
      },
      {
        id: 128,
        title: 'Proposition V.9: Same Ratio Implies Equality',
        slug: 'prop-v-9',
        description: 'Magnitudes having the same ratio to the same are equal; and magnitudes to which the same has the same ratio are equal.',
      },
      {
        id: 129,
        title: 'Proposition V.10: Greater Ratio Implies Greater Magnitude',
        slug: 'prop-v-10',
        description: 'Of magnitudes having ratio to the same, that which has the greater ratio is greater; that to which the same has the greater ratio is less.',
      },
      {
        id: 130,
        title: 'Proposition V.11: Transitivity of Equal Ratios',
        slug: 'prop-v-11',
        description: 'Ratios equal to the same ratio are equal to one another.',
      },
      {
        id: 131,
        title: 'Proposition V.12: Sum of Proportional Magnitudes',
        slug: 'prop-v-12',
        description: 'If any number of magnitudes are proportional, as one antecedent is to one consequent, so are all antecedents to all consequents.',
      },
      {
        id: 132,
        title: 'Proposition V.13: Order of Ratios',
        slug: 'prop-v-13',
        description: 'If first:second = third:fourth, and third:fourth > fifth:sixth, then first:second > fifth:sixth.',
      },
      {
        id: 133,
        title: 'Proposition V.14: Proportional Magnitudes and Order',
        slug: 'prop-v-14',
        description: 'If first:second = third:fourth, and first > third, then second > fourth; if equal, then equal; if less, then less.',
      },
      {
        id: 134,
        title: 'Proposition V.15: Parts and Like Multiples',
        slug: 'prop-v-15',
        description: 'Parts have the same ratio as the like multiples taken in corresponding order.',
      },
      {
        id: 135,
        title: 'Proposition V.16: Alternation (Alternando)',
        slug: 'prop-v-16',
        description: 'If four magnitudes are proportional, they will also be proportional alternately: first:third = second:fourth.',
      },
      {
        id: 136,
        title: 'Proposition V.17: Separation (Separando)',
        slug: 'prop-v-17',
        description: 'If magnitudes are proportional componendo, they will also be proportional separando: (A-B):B = (C-D):D.',
      },
      {
        id: 137,
        title: 'Proposition V.18: Composition (Componendo)',
        slug: 'prop-v-18',
        description: 'If magnitudes are proportional separando, they will also be proportional componendo: (A+B):B = (C+D):D.',
      },
      {
        id: 138,
        title: 'Proposition V.19: Conversion (Convertendo)',
        slug: 'prop-v-19',
        description: 'If whole:whole = part:part, then remainder:remainder = whole:whole.',
      },
      {
        id: 139,
        title: 'Proposition V.20: Perturbed Proportion (Ex Aequali)',
        slug: 'prop-v-20',
        description: 'If A:B = D:E and B:C = E:F in perturbed order, then A:C = D:F.',
      },
      {
        id: 140,
        title: 'Proposition V.21: Ordered Proportion (Ex Aequali)',
        slug: 'prop-v-21',
        description: 'If A:B = D:E and B:C = E:F in ordered proportion, then A:C = D:F.',
      },
      {
        id: 141,
        title: 'Proposition V.22: General Ex Aequali',
        slug: 'prop-v-22',
        description: 'If there are any number of magnitudes and others equal to them in multitude, taken two and two in the same ratio, they will also be in the same ratio ex aequali.',
      },
      {
        id: 142,
        title: 'Proposition V.23: Cross Multiplication (Ex Aequali)',
        slug: 'prop-v-23',
        description: 'If A:B = E:F and B:C = D:E (cross order), then A:C = D:F.',
      },
      {
        id: 143,
        title: 'Proposition V.24: Adding Proportional Magnitudes',
        slug: 'prop-v-24',
        description: 'If first:second = third:fourth and fifth:second = sixth:fourth, then (first+fifth):second = (third+sixth):fourth.',
      },
      {
        id: 144,
        title: 'Proposition V.25: Greatest and Least of Proportionals',
        slug: 'prop-v-25',
        description: 'If four magnitudes are proportional, the greatest and least together are greater than the remaining two together.',
      },
    ],
  },
  // ==========================================================================
  // BOOK VI: SIMILAR FIGURES
  // ==========================================================================
  {
    id: 6,
    title: 'Book VI: Similar Figures',
    slug: 'book-vi',
    sections: [
      {
        id: 145,
        title: 'Book VI Definitions',
        slug: 'book-vi-definitions',
        description: 'Definitions of similar rectilinear figures, reciprocally related figures, and extreme/mean ratio.',
      },
      {
        id: 146,
        title: 'Proposition VI.1: Triangles and Parallelograms with Same Height',
        slug: 'prop-vi-1',
        description: 'Triangles and parallelograms under the same height are to one another as their bases.',
      },
      {
        id: 147,
        title: 'Proposition VI.2: Parallel to Base Cuts Proportionally',
        slug: 'prop-vi-2',
        description: 'If a straight line is drawn parallel to one side of a triangle, it cuts the other sides proportionally; and conversely.',
      },
      {
        id: 148,
        title: 'Proposition VI.3: Angle Bisector Theorem',
        slug: 'prop-vi-3',
        description: 'If an angle of a triangle is bisected, the bisector divides the opposite side in the ratio of the adjacent sides.',
      },
      {
        id: 149,
        title: 'Proposition VI.4: Equiangular Triangles Have Proportional Sides',
        slug: 'prop-vi-4',
        description: 'In equiangular triangles the sides about the equal angles are proportional.',
      },
      {
        id: 150,
        title: 'Proposition VI.5: Proportional Sides Imply Equiangular',
        slug: 'prop-vi-5',
        description: 'If two triangles have their sides proportional, the triangles are equiangular with equal angles opposite corresponding sides.',
      },
      {
        id: 151,
        title: 'Proposition VI.6: Two Angles and Proportional Sides',
        slug: 'prop-vi-6',
        description: 'If two triangles have one angle equal and the sides about that angle proportional, the triangles are equiangular.',
      },
      {
        id: 152,
        title: 'Proposition VI.7: One Angle Equal and Adjacent Sides Proportional',
        slug: 'prop-vi-7',
        description: 'If two triangles have one angle equal and sides about other angles proportional, and the remaining angles both less than or both not less than a right angle, the triangles are equiangular.',
      },
      {
        id: 153,
        title: 'Proposition VI.8: Right Triangle Altitude',
        slug: 'prop-vi-8',
        description: 'If in a right-angled triangle a perpendicular is drawn from the right angle to the hypotenuse, the triangles formed are similar to the whole and to one another.',
      },
      {
        id: 154,
        title: 'Proposition VI.9: Cutting Off a Given Fraction',
        slug: 'prop-vi-9',
        description: 'From a given straight line to cut off a prescribed part.',
      },
      {
        id: 155,
        title: 'Proposition VI.10: Dividing a Line Similarly',
        slug: 'prop-vi-10',
        description: 'To cut a given uncut straight line similarly to a given cut straight line.',
      },
      {
        id: 156,
        title: 'Proposition VI.11: Third Proportional',
        slug: 'prop-vi-11',
        description: 'To find a third proportional to two given straight lines.',
      },
      {
        id: 157,
        title: 'Proposition VI.12: Fourth Proportional',
        slug: 'prop-vi-12',
        description: 'To find a fourth proportional to three given straight lines.',
      },
      {
        id: 158,
        title: 'Proposition VI.13: Mean Proportional',
        slug: 'prop-vi-13',
        description: 'To find a mean proportional to two given straight lines.',
      },
      {
        id: 159,
        title: 'Proposition VI.14: Equal Parallelograms with Equal Angles',
        slug: 'prop-vi-14',
        description: 'In equal parallelograms with one angle equal to one angle, the sides about the equal angles are reciprocally proportional; and conversely.',
      },
      {
        id: 160,
        title: 'Proposition VI.15: Equal Triangles with One Angle Equal',
        slug: 'prop-vi-15',
        description: 'In equal triangles with one angle equal to one angle, the sides about the equal angles are reciprocally proportional; and conversely.',
      },
      {
        id: 161,
        title: 'Proposition VI.16: Rectangle from Extremes Equals Rectangle from Means',
        slug: 'prop-vi-16',
        description: 'If four straight lines are proportional, the rectangle of the extremes equals the rectangle of the means; and conversely.',
      },
      {
        id: 162,
        title: 'Proposition VI.17: Rectangle from Three Proportionals',
        slug: 'prop-vi-17',
        description: 'If three straight lines are proportional, the rectangle of the extremes equals the square on the mean; and conversely.',
      },
      {
        id: 163,
        title: 'Proposition VI.18: Constructing Similar Polygons',
        slug: 'prop-vi-18',
        description: 'On a given straight line to describe a rectilinear figure similar and similarly situated to a given one.',
      },
      {
        id: 164,
        title: 'Proposition VI.19: Similar Triangles and Duplicate Ratio',
        slug: 'prop-vi-19',
        description: 'Similar triangles are to one another in the duplicate ratio of their corresponding sides.',
      },
      {
        id: 165,
        title: 'Proposition VI.20: Similar Polygons and Duplicate Ratio',
        slug: 'prop-vi-20',
        description: 'Similar polygons are divided into similar triangles, and the polygons are in the duplicate ratio of corresponding sides.',
      },
      {
        id: 166,
        title: 'Proposition VI.21: Figures with Same Ratio to Third',
        slug: 'prop-vi-21',
        description: 'Figures which are similar to the same rectilinear figure are also similar to one another.',
      },
      {
        id: 167,
        title: 'Proposition VI.22: Proportional Lines Give Similar Figures',
        slug: 'prop-vi-22',
        description: 'If four straight lines are proportional, similar rectilinear figures similarly described on them are also proportional.',
      },
      {
        id: 168,
        title: 'Proposition VI.23: Equiangular Parallelograms',
        slug: 'prop-vi-23',
        description: 'Equiangular parallelograms have to one another the ratio compounded of the ratios of their sides.',
      },
      {
        id: 169,
        title: 'Proposition VI.24: Parallelograms About Diameter',
        slug: 'prop-vi-24',
        description: 'In any parallelogram the parallelograms about the diameter are similar to the whole and to one another.',
      },
      {
        id: 170,
        title: 'Proposition VI.25: Constructing Equal Similar Figures',
        slug: 'prop-vi-25',
        description: 'To construct a figure similar to one given figure and equal to another.',
      },
      {
        id: 171,
        title: 'Proposition VI.26: Parallelogram Gnomon',
        slug: 'prop-vi-26',
        description: 'If from a parallelogram a parallelogram is subtracted similar and similarly situated to the whole and sharing one angle, it is about the same diameter as the whole.',
      },
      {
        id: 172,
        title: 'Proposition VI.27: Maximum Parallelogram on Half Line',
        slug: 'prop-vi-27',
        description: 'Of all parallelograms applied to the same straight line and deficient by parallelogrammic figures similar to a given one, the greatest is that applied to the half and similar to the defect.',
      },
      {
        id: 173,
        title: 'Proposition VI.28: Applying Deficient Parallelogram',
        slug: 'prop-vi-28',
        description: 'To apply to a given straight line a parallelogram equal to a given rectilinear figure and deficient by a parallelogrammic figure similar to a given one.',
      },
      {
        id: 174,
        title: 'Proposition VI.29: Applying Exceeding Parallelogram',
        slug: 'prop-vi-29',
        description: 'To apply to a given straight line a parallelogram equal to a given rectilinear figure and exceeding by a parallelogrammic figure similar to a given one.',
      },
      {
        id: 175,
        title: 'Proposition VI.30: Extreme and Mean Ratio',
        slug: 'prop-vi-30',
        description: 'To cut a given finite straight line in extreme and mean ratio.',
      },
      {
        id: 176,
        title: 'Proposition VI.31: Generalized Pythagorean Theorem',
        slug: 'prop-vi-31',
        description: 'In right-angled triangles the figure on the hypotenuse is equal to the similar figures on the sides containing the right angle.',
      },
      {
        id: 177,
        title: 'Proposition VI.32: Triangles with Parallel Sides',
        slug: 'prop-vi-32',
        description: 'If two triangles have two sides proportional to two sides and are placed with the corresponding sides parallel, their remaining sides are in a straight line.',
      },
      {
        id: 178,
        title: 'Proposition VI.33: Arcs and Central Angles',
        slug: 'prop-vi-33',
        description: 'In equal circles, angles have the same ratio as the arcs on which they stand, whether at the centers or at the circumferences.',
      },
    ],
  },
  // ==========================================================================
  // BOOK VII: ELEMENTARY NUMBER THEORY
  // ==========================================================================
  {
    id: 7,
    title: 'Book VII: Elementary Number Theory',
    slug: 'book-vii',
    sections: [
      {
        id: 179,
        title: 'Book VII Definitions',
        slug: 'book-vii-definitions',
        description: 'Definitions of unit, number, even, odd, prime, composite, relatively prime, perfect number, and operations on numbers.',
      },
      {
        id: 180,
        title: 'Proposition VII.1: Test for Relatively Prime Numbers',
        slug: 'prop-vii-1',
        description: 'Two unequal numbers being set out, and the less being continually subtracted from the greater, if the remainder never measures the one before it until a unit is left, the original numbers are relatively prime.',
      },
      {
        id: 181,
        title: 'Proposition VII.2: The Euclidean Algorithm',
        slug: 'prop-vii-2',
        description: 'Given two numbers not relatively prime to one another, to find their greatest common measure.',
      },
      {
        id: 182,
        title: 'Proposition VII.3: GCD of Three Numbers',
        slug: 'prop-vii-3',
        description: 'Given three numbers not relatively prime to one another, to find their greatest common measure.',
      },
      {
        id: 183,
        title: 'Proposition VII.4: Part or Parts',
        slug: 'prop-vii-4',
        description: 'Any number is either a part or parts of any number, the less of the greater.',
      },
      {
        id: 184,
        title: 'Proposition VII.5: Sum of Parts',
        slug: 'prop-vii-5',
        description: 'If a number be a part of a number, and another be the same part of another, the sum will also be the same part of the sum.',
      },
      {
        id: 185,
        title: 'Proposition VII.6: Sum of Parts (General)',
        slug: 'prop-vii-6',
        description: 'If a number be parts of a number, and another be the same parts of another, the sum will also be the same parts of the sum.',
      },
      {
        id: 186,
        title: 'Proposition VII.7: Subtraction of Parts',
        slug: 'prop-vii-7',
        description: 'If a number be that part of a number which a subtracted number is of a subtracted number, the remainder is the same part of the remainder.',
      },
      {
        id: 187,
        title: 'Proposition VII.8: Subtraction of Parts (General)',
        slug: 'prop-vii-8',
        description: 'If a number be the same parts of a number that a subtracted number is of a subtracted number, the remainder is the same parts of the remainder.',
      },
      {
        id: 188,
        title: 'Proposition VII.9: Alternation of Parts',
        slug: 'prop-vii-9',
        description: 'If a number be a part of a number, and another be the same part of another, alternately, whatever part the first is of the third, the same part is the second of the fourth.',
      },
      {
        id: 189,
        title: 'Proposition VII.10: Alternation of Parts (General)',
        slug: 'prop-vii-10',
        description: 'If a number be parts of a number, and another be the same parts of another, alternately, whatever parts the first is of the third, the same parts is the second of the fourth.',
      },
      {
        id: 190,
        title: 'Proposition VII.11: Proportion of Remainders',
        slug: 'prop-vii-11',
        description: 'If whole is to whole as a subtracted number is to a subtracted number, the remainder is to the remainder as whole is to whole.',
      },
      {
        id: 191,
        title: 'Proposition VII.12: Sum of Proportional Numbers',
        slug: 'prop-vii-12',
        description: 'If there be as many numbers as we please in proportion, as one of the antecedents is to one of the consequents, so are all the antecedents to all the consequents.',
      },
      {
        id: 192,
        title: 'Proposition VII.13: Alternation of Proportion',
        slug: 'prop-vii-13',
        description: 'If four numbers be proportional, they will also be proportional alternately.',
      },
      {
        id: 193,
        title: 'Proposition VII.14: Ex Aequali for Numbers',
        slug: 'prop-vii-14',
        description: 'If there be as many numbers as we please, and others equal to them in multitude, which taken two and two are in the same ratio, they will also be in the same ratio ex aequali.',
      },
      {
        id: 194,
        title: 'Proposition VII.15: Unit and Multiplication',
        slug: 'prop-vii-15',
        description: 'If a unit measures any number, and another number measures any other number the same number of times, alternately also, the unit will measure the third number the same number of times.',
      },
      {
        id: 195,
        title: 'Proposition VII.16: Commutativity of Multiplication',
        slug: 'prop-vii-16',
        description: 'If two numbers by multiplying one another make certain numbers, the numbers so produced will be equal to one another.',
      },
      {
        id: 196,
        title: 'Proposition VII.17: Products and Proportions',
        slug: 'prop-vii-17',
        description: 'If a number by multiplying two numbers make certain numbers, the numbers so produced will have the same ratio as the numbers multiplied.',
      },
      {
        id: 197,
        title: 'Proposition VII.18: Products and Proportions (Converse)',
        slug: 'prop-vii-18',
        description: 'If two numbers by multiplying any number make certain numbers, the numbers so produced will have the same ratio as the multipliers.',
      },
      {
        id: 198,
        title: 'Proposition VII.19: Products of Proportional Numbers',
        slug: 'prop-vii-19',
        description: 'If four numbers be proportional, the number produced from the first and fourth will be equal to the number produced from the second and third.',
      },
      {
        id: 199,
        title: 'Proposition VII.20: Least Numbers in Ratio',
        slug: 'prop-vii-20',
        description: 'The least numbers of those which have the same ratio with them measure those which have the same ratio the same number of times.',
      },
      {
        id: 200,
        title: 'Proposition VII.21: Relatively Prime are Least',
        slug: 'prop-vii-21',
        description: 'Numbers relatively prime to one another are the least of those which have the same ratio with them.',
      },
      {
        id: 201,
        title: 'Proposition VII.22: Least Numbers are Relatively Prime',
        slug: 'prop-vii-22',
        description: 'The least numbers of those which have the same ratio with them are relatively prime to one another.',
      },
      {
        id: 202,
        title: 'Proposition VII.23: Divisor of Relatively Prime',
        slug: 'prop-vii-23',
        description: 'If two numbers be relatively prime to one another, the number which measures one of them will be relatively prime to the remaining number.',
      },
      {
        id: 203,
        title: 'Proposition VII.24: Product Relatively Prime',
        slug: 'prop-vii-24',
        description: 'If two numbers be relatively prime to any number, their product also will be relatively prime to the same.',
      },
      {
        id: 204,
        title: 'Proposition VII.25: Square Relatively Prime',
        slug: 'prop-vii-25',
        description: 'If two numbers be relatively prime to one another, the product of one of them into itself will be relatively prime to the remaining one.',
      },
      {
        id: 205,
        title: 'Proposition VII.26: Products of Relatively Prime Pairs',
        slug: 'prop-vii-26',
        description: 'If two numbers be relatively prime to two numbers, both to each, their products also will be relatively prime to one another.',
      },
      {
        id: 206,
        title: 'Proposition VII.27: Powers of Relatively Prime Numbers',
        slug: 'prop-vii-27',
        description: 'If two numbers be relatively prime to one another, and each multiplying itself make a certain number, the products will be relatively prime; and if the originals multiplying the products make certain numbers, these will also be relatively prime.',
      },
      {
        id: 207,
        title: 'Proposition VII.28: Sum of Relatively Prime Numbers',
        slug: 'prop-vii-28',
        description: 'If two numbers be relatively prime to one another, the sum will also be relatively prime to each of them; and conversely.',
      },
      {
        id: 208,
        title: 'Proposition VII.29: Prime to Non-Multiple',
        slug: 'prop-vii-29',
        description: 'Any prime number is relatively prime to any number which it does not measure.',
      },
      {
        id: 209,
        title: "Proposition VII.30: Euclid's Lemma",
        slug: 'prop-vii-30',
        description: 'If two numbers by multiplying one another make some number, and any prime number measure the product, it will also measure one of the original numbers.',
      },
      {
        id: 210,
        title: 'Proposition VII.31: Composite Has Prime Factor',
        slug: 'prop-vii-31',
        description: 'Any composite number is measured by some prime number.',
      },
      {
        id: 211,
        title: 'Proposition VII.32: Every Number is Prime or Has Prime Factor',
        slug: 'prop-vii-32',
        description: 'Any number either is prime or is measured by some prime number.',
      },
      {
        id: 212,
        title: 'Proposition VII.33: Finding Least Numbers in Ratio',
        slug: 'prop-vii-33',
        description: 'Given as many numbers as we please, to find the least of those which have the same ratio with them.',
      },
      {
        id: 213,
        title: 'Proposition VII.34: Finding LCM of Two Numbers',
        slug: 'prop-vii-34',
        description: 'Given two numbers, to find the least number which they measure.',
      },
      {
        id: 214,
        title: 'Proposition VII.35: LCM Divides Common Multiples',
        slug: 'prop-vii-35',
        description: 'If two numbers measure any number, the least number measured by them will also measure the same.',
      },
      {
        id: 215,
        title: 'Proposition VII.36: Finding LCM of Three Numbers',
        slug: 'prop-vii-36',
        description: 'Given three numbers, to find the least number which they measure.',
      },
      {
        id: 216,
        title: 'Proposition VII.37: Divisor and Named Parts',
        slug: 'prop-vii-37',
        description: 'If a number be measured by any number, the number which is measured will have a part called by the same name as the measuring number.',
      },
      {
        id: 217,
        title: 'Proposition VII.38: Part and Divisor',
        slug: 'prop-vii-38',
        description: 'If a number have any part whatever, it will be measured by a number called by the same name as the part.',
      },
      {
        id: 218,
        title: 'Proposition VII.39: Finding Number with Given Parts',
        slug: 'prop-vii-39',
        description: 'To find the number which is the least that will have given parts.',
      },
    ],
  },
  // ==========================================================================
  // BOOKS VIII-IX: NUMBER THEORY (Continued) - Placeholder
  // ==========================================================================
  {
    id: 8,
    title: 'Books VIII-IX: Number Theory (Continued)',
    slug: 'books-viii-ix',
    sections: [
      {
        id: 219,
        title: 'Coming Soon: Book VIII',
        slug: 'book-viii-placeholder',
        description: 'Book VIII continues number theory with proportions in continued proportion and properties of squares and cubes.',
      },
    ],
  },
  // ==========================================================================
  // BOOK X: INCOMMENSURABLE MAGNITUDES - Placeholder
  // ==========================================================================
  {
    id: 9,
    title: 'Book X: Incommensurable Magnitudes',
    slug: 'incommensurables',
    sections: [
      {
        id: 220,
        title: 'Coming Soon: Book X',
        slug: 'book-x-placeholder',
        description: 'Book X classifies incommensurable (irrational) magnitudes—the longest book in the Elements.',
      },
    ],
  },
  // ==========================================================================
  // BOOKS XI-XIII: SOLID GEOMETRY - Placeholder
  // ==========================================================================
  {
    id: 10,
    title: 'Books XI-XIII: Solid Geometry',
    slug: 'solid-geometry',
    sections: [
      {
        id: 221,
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
  if (sectionId <= 118) return 4;
  if (sectionId <= 144) return 5;
  if (sectionId <= 178) return 6;
  if (sectionId <= 218) return 7;
  if (sectionId <= 219) return 8; // Placeholder for VIII-IX
  if (sectionId <= 220) return 10; // Placeholder for X
  return 11; // Placeholder for XI-XIII
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
  if (sectionId === 102) return 'IV Definitions';
  if (sectionId <= 118) return `IV.${sectionId - 102}`;
  if (sectionId === 119) return 'V Definitions';
  if (sectionId <= 144) return `V.${sectionId - 119}`;
  if (sectionId === 145) return 'VI Definitions';
  if (sectionId <= 178) return `VI.${sectionId - 145}`;
  if (sectionId === 179) return 'VII Definitions';
  if (sectionId <= 218) return `VII.${sectionId - 179}`;
  return '';
}
