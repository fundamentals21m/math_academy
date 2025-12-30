// =============================================================================
// CURRICULUM STRUCTURE - The Four Pillars of Geometry
// Based on John Stillwell's "The Four Pillars of Geometry" (Springer, 2005)
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
  // Chapter 1: Straightedge and Compass
  // ==========================================================================
  {
    id: 1,
    title: 'Straightedge and Compass',
    slug: 'straightedge-compass',
    sections: [
      {
        id: 0,
        title: "Euclid's Construction Axioms",
        slug: 'euclids-construction-axioms',
        description: 'The fundamental axioms for straightedge and compass constructions.',
      },
      {
        id: 1,
        title: "Euclid's Construction of the Equilateral Triangle",
        slug: 'equilateral-triangle-construction',
        description: 'The first proposition of the Elements: constructing an equilateral triangle.',
      },
      {
        id: 2,
        title: 'Some Basic Constructions',
        slug: 'basic-constructions',
        description: 'Essential constructions including perpendiculars and angle bisectors.',
      },
      {
        id: 3,
        title: 'Multiplication and Division',
        slug: 'multiplication-division',
        description: 'Geometric constructions for arithmetic operations.',
      },
      {
        id: 4,
        title: 'Similar Triangles',
        slug: 'similar-triangles',
        description: 'Properties and constructions involving similar triangles.',
      },
      {
        id: 5,
        title: 'Discussion',
        slug: 'ch1-discussion',
        description: 'Historical context and the scope of straightedge and compass constructions.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 2: Euclid's Approach to Geometry
  // ==========================================================================
  {
    id: 2,
    title: "Euclid's Approach to Geometry",
    slug: 'euclids-approach',
    sections: [
      {
        id: 6,
        title: 'The Parallel Axiom',
        slug: 'parallel-axiom',
        description: 'The famous fifth postulate and its significance in geometry.',
      },
      {
        id: 7,
        title: 'Congruence Axioms',
        slug: 'congruence-axioms',
        description: 'Axioms governing the congruence of geometric figures.',
      },
      {
        id: 8,
        title: 'Area and Equality',
        slug: 'area-equality',
        description: 'The concept of area and equality of figures.',
      },
      {
        id: 9,
        title: 'Area of Parallelograms and Triangles',
        slug: 'area-parallelograms-triangles',
        description: 'Computing areas of basic geometric shapes.',
      },
      {
        id: 10,
        title: 'The Pythagorean Theorem',
        slug: 'pythagorean-theorem',
        description: 'The most famous theorem in geometry and its proof.',
      },
      {
        id: 11,
        title: 'Proof of the Thales Theorem',
        slug: 'thales-theorem-proof',
        description: 'Proving that an angle inscribed in a semicircle is a right angle.',
      },
      {
        id: 12,
        title: 'Angles in a Circle',
        slug: 'angles-in-circle',
        description: 'Relationships between angles and arcs in circles.',
      },
      {
        id: 13,
        title: 'The Pythagorean Theorem Revisited',
        slug: 'pythagorean-theorem-revisited',
        description: 'Alternative proofs and deeper understanding of the theorem.',
      },
      {
        id: 14,
        title: 'Discussion',
        slug: 'ch2-discussion',
        description: 'The axiomatic method and its role in mathematics.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 3: Coordinates
  // ==========================================================================
  {
    id: 3,
    title: 'Coordinates',
    slug: 'coordinates',
    sections: [
      {
        id: 15,
        title: 'The Number Line and the Number Plane',
        slug: 'number-line-plane',
        description: 'Introduction to coordinate systems and the Cartesian plane.',
      },
      {
        id: 16,
        title: 'Lines and Their Equations',
        slug: 'lines-equations',
        description: 'Algebraic representation of lines in the coordinate plane.',
      },
      {
        id: 17,
        title: 'Distance',
        slug: 'distance',
        description: 'The distance formula derived from the Pythagorean theorem.',
      },
      {
        id: 18,
        title: 'Intersections of Lines and Circles',
        slug: 'intersections-lines-circles',
        description: 'Finding intersection points using algebra.',
      },
      {
        id: 19,
        title: 'Angle and Slope',
        slug: 'angle-slope',
        description: 'The relationship between angle and slope of a line.',
      },
      {
        id: 20,
        title: 'Isometries',
        slug: 'isometries',
        description: 'Distance-preserving transformations in the plane.',
      },
      {
        id: 21,
        title: 'The Three Reflections Theorem',
        slug: 'three-reflections-theorem',
        description: 'Every isometry is a composition of at most three reflections.',
      },
      {
        id: 22,
        title: 'Discussion',
        slug: 'ch3-discussion',
        description: 'The power of coordinates in geometry.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 4: Vectors and Euclidean Spaces
  // ==========================================================================
  {
    id: 4,
    title: 'Vectors and Euclidean Spaces',
    slug: 'vectors-euclidean-spaces',
    sections: [
      {
        id: 23,
        title: 'Vectors',
        slug: 'vectors',
        description: 'Introduction to vectors and vector operations.',
      },
      {
        id: 24,
        title: 'Direction and Linear Independence',
        slug: 'direction-linear-independence',
        description: 'Linear independence and spanning sets.',
      },
      {
        id: 25,
        title: 'Midpoints and Centroids',
        slug: 'midpoints-centroids',
        description: 'Using vectors to find midpoints and centroids.',
      },
      {
        id: 26,
        title: 'The Inner Product',
        slug: 'inner-product',
        description: 'The dot product and its geometric meaning.',
      },
      {
        id: 27,
        title: 'Inner Product and Cosine',
        slug: 'inner-product-cosine',
        description: 'The relationship between inner product and angle.',
      },
      {
        id: 28,
        title: 'The Triangle Inequality',
        slug: 'triangle-inequality',
        description: 'Proving the triangle inequality using vectors.',
      },
      {
        id: 29,
        title: 'Rotations, Matrices, and Complex Numbers',
        slug: 'rotations-matrices-complex',
        description: 'Representing rotations with matrices and complex numbers.',
      },
      {
        id: 30,
        title: 'Discussion',
        slug: 'ch4-discussion',
        description: 'The algebraic approach to geometry.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 5: Perspective
  // ==========================================================================
  {
    id: 5,
    title: 'Perspective',
    slug: 'perspective',
    sections: [
      {
        id: 31,
        title: 'Perspective Drawing',
        slug: 'perspective-drawing',
        description: 'The mathematics behind perspective art.',
      },
      {
        id: 32,
        title: 'Drawing with Straightedge Alone',
        slug: 'straightedge-alone',
        description: 'What can be constructed without a compass.',
      },
      {
        id: 33,
        title: 'Projective Plane Axioms and Their Models',
        slug: 'projective-plane-axioms',
        description: 'The axiomatic foundation of projective geometry.',
      },
      {
        id: 34,
        title: 'Homogeneous Coordinates',
        slug: 'homogeneous-coordinates',
        description: 'A coordinate system for projective geometry.',
      },
      {
        id: 35,
        title: 'Projection',
        slug: 'projection',
        description: 'The mathematics of projection from 3D to 2D.',
      },
      {
        id: 36,
        title: 'Linear Fractional Functions',
        slug: 'linear-fractional-functions',
        description: 'Transformations of the projective line.',
      },
      {
        id: 37,
        title: 'The Cross-Ratio',
        slug: 'cross-ratio',
        description: 'The fundamental invariant of projective geometry.',
      },
      {
        id: 38,
        title: 'What is Special About the Cross-Ratio?',
        slug: 'cross-ratio-special',
        description: 'Why the cross-ratio is preserved under projection.',
      },
      {
        id: 39,
        title: 'Discussion',
        slug: 'ch5-discussion',
        description: 'The role of perspective in mathematics and art.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 6: Projective Planes
  // ==========================================================================
  {
    id: 6,
    title: 'Projective Planes',
    slug: 'projective-planes',
    sections: [
      {
        id: 40,
        title: 'Pappus and Desargues Revisited',
        slug: 'pappus-desargues-revisited',
        description: 'Classic theorems of projective geometry.',
      },
      {
        id: 41,
        title: 'Coincidences',
        slug: 'coincidences',
        description: 'Incidence relations in projective planes.',
      },
      {
        id: 42,
        title: 'Variations on the Desargues Theorem',
        slug: 'desargues-variations',
        description: 'Different forms and consequences of Desargues theorem.',
      },
      {
        id: 43,
        title: 'Projective Arithmetic',
        slug: 'projective-arithmetic',
        description: 'Constructing number systems from projective geometry.',
      },
      {
        id: 44,
        title: 'The Field Axioms',
        slug: 'field-axioms',
        description: 'How geometry gives rise to algebraic structures.',
      },
      {
        id: 45,
        title: 'The Associative Laws',
        slug: 'associative-laws',
        description: 'Proving associativity from geometric axioms.',
      },
      {
        id: 46,
        title: 'The Distributive Law',
        slug: 'distributive-law',
        description: 'Proving distributivity from geometric axioms.',
      },
      {
        id: 47,
        title: 'Discussion',
        slug: 'ch6-discussion',
        description: 'The deep connection between geometry and algebra.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 7: Transformations
  // ==========================================================================
  {
    id: 7,
    title: 'Transformations',
    slug: 'transformations',
    sections: [
      {
        id: 48,
        title: 'The Group of Isometries of the Plane',
        slug: 'isometry-group',
        description: 'Isometries form a mathematical group.',
      },
      {
        id: 49,
        title: 'Vector Transformations',
        slug: 'vector-transformations',
        description: 'Linear transformations and their properties.',
      },
      {
        id: 50,
        title: 'Transformations of the Projective Line',
        slug: 'projective-line-transformations',
        description: 'Mobius transformations and their geometry.',
      },
      {
        id: 51,
        title: 'Spherical Geometry',
        slug: 'spherical-geometry',
        description: 'Geometry on the surface of a sphere.',
      },
      {
        id: 52,
        title: 'The Rotation Group of the Sphere',
        slug: 'sphere-rotation-group',
        description: 'The group SO(3) of rotations in three dimensions.',
      },
      {
        id: 53,
        title: 'Representing Space Rotations by Quaternions',
        slug: 'quaternions',
        description: 'Hamilton\'s quaternions and 3D rotations.',
      },
      {
        id: 54,
        title: 'A Finite Group of Space Rotations',
        slug: 'finite-rotation-groups',
        description: 'Symmetry groups of regular polyhedra.',
      },
      {
        id: 55,
        title: 'The Groups S3 and RP3',
        slug: 's3-rp3-groups',
        description: 'The 3-sphere and real projective 3-space.',
      },
      {
        id: 56,
        title: 'Discussion',
        slug: 'ch7-discussion',
        description: 'The Erlangen program: geometry as transformation groups.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 8: Non-Euclidean Geometry
  // ==========================================================================
  {
    id: 8,
    title: 'Non-Euclidean Geometry',
    slug: 'non-euclidean-geometry',
    sections: [
      {
        id: 57,
        title: 'Extending the Projective Line to a Plane',
        slug: 'extending-projective-line',
        description: 'Building the hyperbolic plane from projective concepts.',
      },
      {
        id: 58,
        title: 'Complex Conjugation',
        slug: 'complex-conjugation',
        description: 'Complex numbers and their conjugates in geometry.',
      },
      {
        id: 59,
        title: 'Reflections and Mobius Transformations',
        slug: 'reflections-mobius',
        description: 'Mobius transformations and hyperbolic reflections.',
      },
      {
        id: 60,
        title: 'Preserving Non-Euclidean Lines',
        slug: 'preserving-non-euclidean-lines',
        description: 'Geodesics in hyperbolic geometry.',
      },
      {
        id: 61,
        title: 'Preserving Angle',
        slug: 'preserving-angle',
        description: 'Conformal mappings in hyperbolic geometry.',
      },
      {
        id: 62,
        title: 'Non-Euclidean Distance',
        slug: 'non-euclidean-distance',
        description: 'The hyperbolic metric and distance formula.',
      },
      {
        id: 63,
        title: 'Non-Euclidean Translations and Rotations',
        slug: 'non-euclidean-translations-rotations',
        description: 'Isometries of the hyperbolic plane.',
      },
      {
        id: 64,
        title: 'Three Reflections or Two Involutions',
        slug: 'three-reflections-two-involutions',
        description: 'Decomposing hyperbolic isometries.',
      },
      {
        id: 65,
        title: 'Discussion',
        slug: 'ch8-discussion',
        description: 'The significance of non-Euclidean geometry in mathematics.',
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
