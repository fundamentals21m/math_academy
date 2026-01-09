// =============================================================================
// CURRICULUM STRUCTURE - Euler's Introductio in Analysin Infinitorum, Vol. 2
// =============================================================================
// The Theory of Curved Lines (1748)
// Based on Euler's original 22 chapters covering algebraic and transcendental curves
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
  // PART 1: FOUNDATIONS OF CURVE THEORY
  // ==========================================================================
  {
    id: 1,
    title: 'Foundations of Curve Theory',
    slug: 'foundations',
    sections: [
      {
        id: 0,
        title: 'On Curved Lines in General',
        slug: 'curved-lines-general',
        description: 'Introduction to the coordinate system, abscissas, ordinates, and the fundamental relationship between algebra and geometry.',
      },
      {
        id: 1,
        title: 'Transformation of Coordinates',
        slug: 'coordinate-transformation',
        description: 'How to change from one coordinate system to another, including translation and rotation of axes.',
      },
      {
        id: 2,
        title: 'Algebraic Curves by Order',
        slug: 'algebraic-curves-order',
        description: 'Classification of algebraic curves according to the degree of their defining equations.',
      },
      {
        id: 3,
        title: 'Properties of Different Orders',
        slug: 'properties-different-orders',
        description: 'Particular properties that distinguish curves of different algebraic orders.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: CONIC SECTIONS (SECOND ORDER CURVES)
  // ==========================================================================
  {
    id: 2,
    title: 'Conic Sections',
    slug: 'conic-sections',
    sections: [
      {
        id: 4,
        title: 'Lines of the Second Order',
        slug: 'second-order-lines',
        description: 'The general theory of second-order curves: circles, ellipses, parabolas, and hyperbolas.',
      },
      {
        id: 5,
        title: 'Species of Second Order Lines',
        slug: 'second-order-species',
        description: 'Subdivision and classification of conic sections into their distinct species.',
      },
      {
        id: 6,
        title: 'Infinite Branches',
        slug: 'infinite-branches',
        description: 'Investigation of how curve branches extend to infinity and their behavior.',
      },
      {
        id: 7,
        title: 'Asymptotes of Curves',
        slug: 'asymptotes',
        description: 'The theory of asymptotic lines and how curves approach them at infinity.',
      },
      {
        id: 8,
        title: 'Properties of Conic Sections',
        slug: 'conic-properties',
        description: 'Deep exploration of the many remarkable properties of conic sections.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: THIRD ORDER CURVES
  // ==========================================================================
  {
    id: 3,
    title: 'Third Order Curves',
    slug: 'third-order',
    sections: [
      {
        id: 9,
        title: 'Algebraic Lines of Third Order',
        slug: 'third-order-lines',
        description: 'Introduction to cubic curves and their general properties.',
      },
      {
        id: 10,
        title: 'Infinite Branches of Cubics',
        slug: 'cubic-infinite-branches',
        description: 'How third-order curves behave as they extend to infinity.',
      },
      {
        id: 11,
        title: 'Asymptotes of Third Order',
        slug: 'cubic-asymptotes',
        description: 'Asymptotic behavior specific to cubic curves.',
      },
      {
        id: 12,
        title: 'Species of Third Order Lines',
        slug: 'cubic-species',
        description: "Newton's classification of cubic curves into 72 species.",
      },
    ],
  },
  // ==========================================================================
  // PART 4: TRANSCENDENTAL AND SPECIAL CURVES
  // ==========================================================================
  {
    id: 4,
    title: 'Transcendental Curves',
    slug: 'transcendental',
    sections: [
      {
        id: 13,
        title: 'Transcendental Curved Lines',
        slug: 'transcendental-curves',
        description: 'Curves defined by transcendental functions: exponentials, logarithms, and trigonometric functions.',
      },
      {
        id: 14,
        title: 'Curves with Diameters',
        slug: 'curves-with-diameters',
        description: 'Curves possessing one or more lines of symmetry (diameters).',
      },
      {
        id: 15,
        title: 'Finding Curves from Ordinates',
        slug: 'curves-from-ordinates',
        description: 'Determining curve equations from given properties of their ordinates.',
      },
      {
        id: 16,
        title: 'Finding Curves from Other Properties',
        slug: 'curves-from-properties',
        description: 'Methods for discovering curves satisfying various geometric conditions.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: ADVANCED TOPICS
  // ==========================================================================
  {
    id: 5,
    title: 'Advanced Topics',
    slug: 'advanced',
    sections: [
      {
        id: 17,
        title: 'Similarity and Affinity',
        slug: 'similarity-affinity',
        description: 'How curves relate through similarity transformations and affine mappings.',
      },
      {
        id: 18,
        title: 'Intersection of Curves',
        slug: 'curve-intersections',
        description: "Finding where curves meet and Bezout's theorem on intersection points.",
      },
      {
        id: 19,
        title: 'Construction of Equations',
        slug: 'equation-construction',
        description: 'Geometric construction of roots of algebraic equations using curves.',
      },
      {
        id: 20,
        title: 'Transcendental Use of Curves',
        slug: 'transcendental-use',
        description: 'Applications of curves to solve transcendental problems.',
      },
      {
        id: 21,
        title: 'On Surfaces',
        slug: 'surfaces',
        description: 'Extension of curve theory to three dimensions: quadric surfaces and beyond.',
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
