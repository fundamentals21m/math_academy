// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Advanced Linear Algebra Course - Based on Hoffman & Kunze
// 4 Parts, 12 Sections
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
  // PART 1: ALGEBRAIC FOUNDATIONS
  // ==========================================================================
  {
    id: 1,
    title: 'Algebraic Foundations',
    slug: 'algebraic-foundations',
    sections: [
      {
        id: 1,
        title: 'Fields and Number Systems',
        slug: 'fields',
        description: 'Fields, subfields, complex numbers, and algebraic structures that form the foundation of linear algebra.',
      },
      {
        id: 2,
        title: 'Vector Spaces',
        slug: 'vector-spaces',
        description: 'The formal definition of vector spaces, axioms, and fundamental examples including Rⁿ, polynomials, and function spaces.',
      },
      {
        id: 3,
        title: 'Subspaces',
        slug: 'subspaces',
        description: 'Subspace criteria, span, linear combinations, and the geometry of subspaces.',
      },
      {
        id: 4,
        title: 'Bases and Dimension',
        slug: 'bases-dimension',
        description: 'Linear independence, basis, dimension, and coordinate systems for finite-dimensional vector spaces.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: LINEAR TRANSFORMATIONS
  // ==========================================================================
  {
    id: 2,
    title: 'Linear Transformations',
    slug: 'linear-transformations',
    sections: [
      {
        id: 5,
        title: 'Linear Transformations',
        slug: 'transformations',
        description: 'Definition of linear transformations, kernel, image, and the fundamental Rank-Nullity Theorem.',
      },
      {
        id: 6,
        title: 'Matrix Representation',
        slug: 'matrix-representation',
        description: 'Representing linear maps as matrices, change of basis, similarity, and the algebra of linear transformations.',
      },
      {
        id: 7,
        title: 'Linear Functionals and Dual Spaces',
        slug: 'dual-spaces',
        description: 'Linear functionals, the dual space V*, dual basis, annihilators, and the double dual.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: DETERMINANTS AND SYSTEMS
  // ==========================================================================
  {
    id: 3,
    title: 'Determinants and Systems',
    slug: 'determinants-systems',
    sections: [
      {
        id: 8,
        title: 'Systems of Linear Equations',
        slug: 'linear-systems',
        description: 'Homogeneous and non-homogeneous systems, Gaussian elimination, RREF, and solution space structure.',
      },
      {
        id: 9,
        title: 'Determinants',
        slug: 'determinants',
        description: 'Multilinear alternating functions, properties of determinants, cofactor expansion, and Cramer\'s rule.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: EIGENTHEORY AND CANONICAL FORMS
  // ==========================================================================
  {
    id: 4,
    title: 'Eigentheory and Canonical Forms',
    slug: 'eigentheory',
    sections: [
      {
        id: 10,
        title: 'Eigenvalues and Eigenvectors',
        slug: 'eigenvalues',
        description: 'Characteristic polynomial, eigenspaces, algebraic and geometric multiplicity.',
      },
      {
        id: 11,
        title: 'Diagonalization',
        slug: 'diagonalization',
        description: 'Criteria for diagonalizability, the Spectral Theorem for symmetric matrices, and applications.',
      },
      {
        id: 12,
        title: 'Jordan Canonical Form',
        slug: 'jordan-form',
        description: 'Generalized eigenvectors, Jordan blocks, invariant subspaces, and the Jordan decomposition theorem.',
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
