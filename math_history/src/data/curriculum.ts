// =============================================================================
// CURRICULUM STRUCTURE - Mathematics and Its History
// Based on John Stillwell's "Mathematics and Its History" (Springer, 2002)
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
  // Chapter 1: The Theorem of Pythagoras
  // ==========================================================================
  {
    id: 1,
    title: 'The Theorem of Pythagoras',
    slug: 'pythagoras',
    sections: [
      {
        id: 0,
        title: 'Introduction',
        slug: 'pythagoras-intro',
        description: 'Overview of the Pythagorean theorem and its significance in mathematical history.',
      },
      {
        id: 1,
        title: 'Arithmetic and Geometry',
        slug: 'arithmetic-geometry',
        description: 'The interplay between numbers and shapes in ancient mathematics.',
      },
      {
        id: 2,
        title: 'Pythagorean Triples',
        slug: 'pythagorean-triples',
        description: 'Integer solutions to the Pythagorean equation and their patterns.',
      },
      {
        id: 3,
        title: 'Irrational Numbers',
        slug: 'irrational-numbers',
        description: 'The discovery of irrationality and its impact on Greek mathematics.',
      },
      {
        id: 4,
        title: 'The Discovery of √2',
        slug: 'sqrt2-discovery',
        description: 'How the diagonal of a square revealed a new kind of number.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 2: Greek Geometry
  // ==========================================================================
  {
    id: 2,
    title: 'Greek Geometry',
    slug: 'greek-geometry',
    sections: [
      {
        id: 5,
        title: "Euclid's Elements",
        slug: 'euclids-elements',
        description: 'The most influential mathematics textbook ever written.',
      },
      {
        id: 6,
        title: 'Constructions with Straightedge and Compass',
        slug: 'constructions',
        description: 'The tools and methods of classical geometric construction.',
      },
      {
        id: 7,
        title: 'The Parallel Postulate',
        slug: 'parallel-postulate',
        description: 'Euclid\'s fifth postulate and its role in geometry.',
      },
      {
        id: 8,
        title: 'Conic Sections',
        slug: 'conic-sections',
        description: 'Apollonius and the geometry of ellipses, parabolas, and hyperbolas.',
      },
      {
        id: 9,
        title: 'Area and Volume',
        slug: 'area-volume',
        description: 'Greek methods for measuring planar and solid figures.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 3: Greek Number Theory
  // ==========================================================================
  {
    id: 3,
    title: 'Greek Number Theory',
    slug: 'greek-number-theory',
    sections: [
      {
        id: 10,
        title: 'The Euclidean Algorithm',
        slug: 'euclidean-algorithm',
        description: 'Finding greatest common divisors and its applications.',
      },
      {
        id: 11,
        title: 'Prime Numbers',
        slug: 'prime-numbers',
        description: 'The fundamental building blocks of arithmetic.',
      },
      {
        id: 12,
        title: 'Unique Factorization',
        slug: 'unique-factorization',
        description: 'The fundamental theorem of arithmetic and its proof.',
      },
      {
        id: 13,
        title: 'Diophantine Equations',
        slug: 'diophantine-equations',
        description: 'Integer solutions to polynomial equations.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 4: Infinity in Greek Mathematics
  // ==========================================================================
  {
    id: 4,
    title: 'Infinity in Greek Mathematics',
    slug: 'infinity-greeks',
    sections: [
      {
        id: 14,
        title: "Zeno's Paradoxes",
        slug: 'zenos-paradoxes',
        description: 'Philosophical challenges to motion and infinity.',
      },
      {
        id: 15,
        title: 'The Method of Exhaustion',
        slug: 'method-exhaustion',
        description: 'Greek precursor to integral calculus.',
      },
      {
        id: 16,
        title: "Archimedes' Calculations",
        slug: 'archimedes-calculations',
        description: 'Computing areas, volumes, and approximating π.',
      },
      {
        id: 17,
        title: 'Potential vs. Actual Infinity',
        slug: 'potential-actual-infinity',
        description: 'Greek philosophical attitudes toward the infinite.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 5: Number Theory in Asia
  // ==========================================================================
  {
    id: 5,
    title: 'Number Theory in Asia',
    slug: 'number-theory-asia',
    sections: [
      {
        id: 18,
        title: 'The Chinese Remainder Theorem',
        slug: 'chinese-remainder',
        description: 'Solving systems of congruences in ancient China.',
      },
      {
        id: 19,
        title: 'Indian Mathematics',
        slug: 'indian-mathematics',
        description: 'Contributions from Brahmagupta, Bhaskara, and others.',
      },
      {
        id: 20,
        title: 'Pell\'s Equation',
        slug: 'pells-equation',
        description: 'Indian solutions to x² - Ny² = 1.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 6: Polynomial Equations
  // ==========================================================================
  {
    id: 6,
    title: 'Polynomial Equations',
    slug: 'polynomial-equations',
    sections: [
      {
        id: 21,
        title: 'Al-Khwarizmi and Algebra',
        slug: 'al-khwarizmi',
        description: 'The Islamic golden age and the birth of algebra.',
      },
      {
        id: 22,
        title: 'The Cubic Equation',
        slug: 'cubic-equation',
        description: 'Cardano, Tartaglia, and the solution of the cubic.',
      },
      {
        id: 23,
        title: 'The Quartic Equation',
        slug: 'quartic-equation',
        description: 'Ferrari\'s solution and the limits of radical solutions.',
      },
      {
        id: 24,
        title: 'Complex Numbers Enter',
        slug: 'complex-numbers-enter',
        description: 'How solving equations forced acceptance of √-1.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 7: Analytic Geometry
  // ==========================================================================
  {
    id: 7,
    title: 'Analytic Geometry',
    slug: 'analytic-geometry',
    sections: [
      {
        id: 25,
        title: 'Descartes and Coordinates',
        slug: 'descartes-coordinates',
        description: 'Unifying algebra and geometry through coordinate systems.',
      },
      {
        id: 26,
        title: 'Fermat and Tangents',
        slug: 'fermat-tangents',
        description: 'Early steps toward differential calculus.',
      },
      {
        id: 27,
        title: 'Algebraic Curves',
        slug: 'algebraic-curves',
        description: 'Equations defining geometric shapes.',
      },
      {
        id: 28,
        title: 'Newton and Higher Curves',
        slug: 'newton-curves',
        description: 'Classification of cubic curves and beyond.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 8: Projective Geometry
  // ==========================================================================
  {
    id: 8,
    title: 'Projective Geometry',
    slug: 'projective-geometry',
    sections: [
      {
        id: 29,
        title: 'Perspective and Projection',
        slug: 'perspective-projection',
        description: 'The mathematics of Renaissance art.',
      },
      {
        id: 30,
        title: 'Desargues\' Theorem',
        slug: 'desargues-theorem',
        description: 'A fundamental theorem of projective geometry.',
      },
      {
        id: 31,
        title: 'Pascal\'s Theorem',
        slug: 'pascals-theorem',
        description: 'Hexagons inscribed in conics.',
      },
      {
        id: 32,
        title: 'Duality',
        slug: 'projective-duality',
        description: 'The interchangeability of points and lines.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 9: Calculus
  // ==========================================================================
  {
    id: 9,
    title: 'Calculus',
    slug: 'calculus',
    sections: [
      {
        id: 33,
        title: 'Newton and Leibniz',
        slug: 'newton-leibniz',
        description: 'The independent invention of calculus.',
      },
      {
        id: 34,
        title: 'The Fundamental Theorem',
        slug: 'fundamental-theorem-calculus',
        description: 'Connecting differentiation and integration.',
      },
      {
        id: 35,
        title: 'Early Applications',
        slug: 'calculus-applications',
        description: 'Solving problems in physics and geometry.',
      },
      {
        id: 36,
        title: 'Foundations and Rigor',
        slug: 'calculus-foundations',
        description: 'From intuition to epsilon-delta definitions.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 10: Infinite Series
  // ==========================================================================
  {
    id: 10,
    title: 'Infinite Series',
    slug: 'infinite-series',
    sections: [
      {
        id: 37,
        title: 'Taylor and Maclaurin Series',
        slug: 'taylor-series',
        description: 'Representing functions as infinite polynomials.',
      },
      {
        id: 38,
        title: 'Euler\'s Discoveries',
        slug: 'euler-series',
        description: 'Remarkable identities and summation formulas.',
      },
      {
        id: 39,
        title: 'Convergence Questions',
        slug: 'convergence',
        description: 'When do infinite sums make sense?',
      },
      {
        id: 40,
        title: 'The Riemann Zeta Function',
        slug: 'zeta-function',
        description: 'From Euler products to the Riemann hypothesis.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 11: The Number Theory Revival
  // ==========================================================================
  {
    id: 11,
    title: 'The Number Theory Revival',
    slug: 'number-theory-revival',
    sections: [
      {
        id: 41,
        title: 'Fermat\'s Little Theorem',
        slug: 'fermat-little-theorem',
        description: 'A fundamental result in modular arithmetic.',
      },
      {
        id: 42,
        title: 'Quadratic Reciprocity',
        slug: 'quadratic-reciprocity',
        description: 'Gauss\'s golden theorem of number theory.',
      },
      {
        id: 43,
        title: 'Fermat\'s Last Theorem',
        slug: 'fermat-last-theorem',
        description: 'A 350-year journey from conjecture to proof.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 12: Elliptic Functions
  // ==========================================================================
  {
    id: 12,
    title: 'Elliptic Functions',
    slug: 'elliptic-functions',
    sections: [
      {
        id: 44,
        title: 'Elliptic Integrals',
        slug: 'elliptic-integrals',
        description: 'Integrals arising from arc length of ellipses.',
      },
      {
        id: 45,
        title: 'Abel and Jacobi',
        slug: 'abel-jacobi',
        description: 'Inverting elliptic integrals to create new functions.',
      },
      {
        id: 46,
        title: 'Doubly Periodic Functions',
        slug: 'doubly-periodic',
        description: 'Functions with two independent periods.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 13: Mechanics
  // ==========================================================================
  {
    id: 13,
    title: 'Mechanics',
    slug: 'mechanics',
    sections: [
      {
        id: 47,
        title: 'The Brachistochrone',
        slug: 'brachistochrone',
        description: 'The curve of fastest descent.',
      },
      {
        id: 48,
        title: 'Variational Principles',
        slug: 'variational-principles',
        description: 'Lagrange, Hamilton, and the calculus of variations.',
      },
      {
        id: 49,
        title: 'Conservation Laws',
        slug: 'conservation-laws',
        description: 'Energy, momentum, and Noether\'s theorem.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 14: Complex Numbers in Algebra
  // ==========================================================================
  {
    id: 14,
    title: 'Complex Numbers in Algebra',
    slug: 'complex-algebra',
    sections: [
      {
        id: 50,
        title: 'The Fundamental Theorem of Algebra',
        slug: 'fundamental-theorem-algebra',
        description: 'Every polynomial has a complex root.',
      },
      {
        id: 51,
        title: 'Symmetric Functions',
        slug: 'symmetric-functions',
        description: 'Relations between roots and coefficients.',
      },
      {
        id: 52,
        title: 'The Quintic',
        slug: 'quintic',
        description: 'Why degree 5 cannot be solved by radicals.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 15: Complex Numbers in Analysis
  // ==========================================================================
  {
    id: 15,
    title: 'Complex Numbers in Analysis',
    slug: 'complex-analysis',
    sections: [
      {
        id: 53,
        title: 'Complex Functions',
        slug: 'complex-functions',
        description: 'Functions of a complex variable.',
      },
      {
        id: 54,
        title: 'Cauchy and Complex Integration',
        slug: 'cauchy-integration',
        description: 'Path integrals and the residue theorem.',
      },
      {
        id: 55,
        title: 'Riemann Surfaces',
        slug: 'riemann-surfaces',
        description: 'Multi-valued functions and their geometry.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 16: Non-Euclidean Geometry
  // ==========================================================================
  {
    id: 16,
    title: 'Non-Euclidean Geometry',
    slug: 'non-euclidean',
    sections: [
      {
        id: 56,
        title: 'Attempts to Prove the Parallel Postulate',
        slug: 'parallel-attempts',
        description: 'Two thousand years of failed proofs.',
      },
      {
        id: 57,
        title: 'Hyperbolic Geometry',
        slug: 'hyperbolic-geometry',
        description: 'Lobachevsky, Bolyai, and curved space.',
      },
      {
        id: 58,
        title: 'Models of Hyperbolic Space',
        slug: 'hyperbolic-models',
        description: 'The Poincaré disk and half-plane models.',
      },
      {
        id: 59,
        title: 'Elliptic Geometry',
        slug: 'elliptic-geometry',
        description: 'Geometry on a sphere and beyond.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 17: Group Theory
  // ==========================================================================
  {
    id: 17,
    title: 'Group Theory',
    slug: 'group-theory',
    sections: [
      {
        id: 60,
        title: 'Permutations',
        slug: 'permutations',
        description: 'Rearrangements and their algebra.',
      },
      {
        id: 61,
        title: 'Galois Theory',
        slug: 'galois-theory',
        description: 'Symmetry and solvability of equations.',
      },
      {
        id: 62,
        title: 'Groups of Symmetries',
        slug: 'symmetry-groups',
        description: 'Geometric transformations as group elements.',
      },
      {
        id: 63,
        title: 'Abstract Groups',
        slug: 'abstract-groups',
        description: 'From concrete examples to axioms.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 18: Topology
  // ==========================================================================
  {
    id: 18,
    title: 'Topology',
    slug: 'topology',
    sections: [
      {
        id: 64,
        title: 'Euler\'s Polyhedron Formula',
        slug: 'euler-polyhedron',
        description: 'V - E + F = 2 and its generalizations.',
      },
      {
        id: 65,
        title: 'Surfaces and Classification',
        slug: 'surface-classification',
        description: 'Genus and the topology of 2-manifolds.',
      },
      {
        id: 66,
        title: 'The Fundamental Group',
        slug: 'fundamental-group',
        description: 'Loops and algebraic topology.',
      },
      {
        id: 67,
        title: 'Dimension',
        slug: 'dimension',
        description: 'What does it mean to have dimension n?',
      },
    ],
  },
  // ==========================================================================
  // Chapter 19: Sets, Logic, and Computation
  // ==========================================================================
  {
    id: 19,
    title: 'Sets, Logic, and Computation',
    slug: 'sets-logic-computation',
    sections: [
      {
        id: 68,
        title: 'Cantor and Set Theory',
        slug: 'cantor-sets',
        description: 'Different sizes of infinity.',
      },
      {
        id: 69,
        title: 'Paradoxes and Foundations',
        slug: 'paradoxes-foundations',
        description: 'Russell\'s paradox and axiomatic set theory.',
      },
      {
        id: 70,
        title: 'Gödel\'s Incompleteness Theorems',
        slug: 'godel-incompleteness',
        description: 'The limits of formal systems.',
      },
      {
        id: 71,
        title: 'Turing and Computability',
        slug: 'turing-computability',
        description: 'What can be computed in principle?',
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
