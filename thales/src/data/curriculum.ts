// =============================================================================
// CURRICULUM STRUCTURE - The Heritage of Thales
// =============================================================================
// Based on "The Heritage of Thales" by W.S. Anglin & J. Lambek (1995)
// Part I: History and Philosophy of Mathematics (31 chapters)
// Part II: Foundations of Mathematics (35 sections)
// Total: 66 sections
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
  // PART I: HISTORY AND PHILOSOPHY OF MATHEMATICS
  // ==========================================================================
  {
    id: 1,
    title: 'Ancient Mathematics',
    slug: 'ancient-mathematics',
    sections: [
      {
        id: 0,
        title: 'Egyptian Mathematics',
        slug: 'egyptian-mathematics',
        description: 'The mathematical achievements of ancient Egypt, including the Rhind Papyrus and practical arithmetic.',
      },
      {
        id: 1,
        title: 'Scales of Notation',
        slug: 'scales-of-notation',
        description: 'Number systems and positional notation across ancient civilizations.',
      },
      {
        id: 2,
        title: 'Prime Numbers',
        slug: 'prime-numbers',
        description: 'The discovery and early study of prime numbers.',
      },
      {
        id: 3,
        title: 'Sumerian-Babylonian Mathematics',
        slug: 'sumerian-babylonian',
        description: 'The sexagesimal system and mathematical tablets of Mesopotamia.',
      },
      {
        id: 4,
        title: 'More about Mesopotamian Mathematics',
        slug: 'mesopotamian-continued',
        description: 'Advanced Babylonian algebra and geometry.',
      },
    ],
  },
  {
    id: 2,
    title: 'Dawn of Greek Mathematics',
    slug: 'dawn-greek-mathematics',
    sections: [
      {
        id: 5,
        title: 'The Dawn of Greek Mathematics',
        slug: 'dawn-greek',
        description: 'The birth of deductive reasoning and mathematical proof in ancient Greece.',
      },
      {
        id: 6,
        title: 'Pythagoras and His School',
        slug: 'pythagoras',
        description: 'The Pythagorean brotherhood and their mathematical discoveries.',
      },
      {
        id: 7,
        title: 'Perfect Numbers',
        slug: 'perfect-numbers',
        description: 'The mystical and mathematical properties of perfect numbers.',
      },
      {
        id: 8,
        title: 'Regular Polyhedra',
        slug: 'regular-polyhedra',
        description: 'The five Platonic solids and their geometric significance.',
      },
      {
        id: 9,
        title: 'The Crisis of Incommensurables',
        slug: 'crisis-incommensurables',
        description: 'The discovery of irrational numbers and its philosophical implications.',
      },
      {
        id: 10,
        title: 'From Heraclitus to Democritus',
        slug: 'heraclitus-democritus',
        description: 'Pre-Socratic philosophers and their influence on mathematical thought.',
      },
    ],
  },
  {
    id: 3,
    title: 'Classical Greek Mathematics',
    slug: 'classical-greek',
    sections: [
      {
        id: 11,
        title: 'Mathematics in Athens',
        slug: 'mathematics-athens',
        description: 'The golden age of Greek mathematics in classical Athens.',
      },
      {
        id: 12,
        title: 'Plato and Aristotle on Mathematics',
        slug: 'plato-aristotle',
        description: 'The philosophical foundations of mathematics in Greek thought.',
      },
      {
        id: 13,
        title: 'Constructions with Ruler and Compass',
        slug: 'ruler-compass',
        description: 'Classical geometric constructions and their constraints.',
      },
      {
        id: 14,
        title: 'The Impossibility of Solving Classical Problems',
        slug: 'impossible-problems',
        description: 'Squaring the circle, doubling the cube, and trisecting the angle.',
      },
      {
        id: 15,
        title: 'Euclid',
        slug: 'euclid',
        description: 'The Elements and the axiomatic method.',
      },
      {
        id: 16,
        title: 'Non-Euclidean Geometry and Hilbert\'s Axioms',
        slug: 'non-euclidean',
        description: 'The parallel postulate and alternative geometries.',
      },
      {
        id: 17,
        title: 'Alexandria from 300 BC to 200 BC',
        slug: 'alexandria-early',
        description: 'The Library of Alexandria and early Hellenistic mathematics.',
      },
      {
        id: 18,
        title: 'Archimedes',
        slug: 'archimedes',
        description: 'The greatest mathematician of antiquity and his discoveries.',
      },
      {
        id: 19,
        title: 'Alexandria from 200 BC to 500 AD',
        slug: 'alexandria-late',
        description: 'Late Hellenistic and Roman period mathematics.',
      },
    ],
  },
  {
    id: 4,
    title: 'Global Mathematics',
    slug: 'global-mathematics',
    sections: [
      {
        id: 20,
        title: 'Mathematics in China and India',
        slug: 'china-india',
        description: 'Independent mathematical traditions in Asia.',
      },
      {
        id: 21,
        title: 'Mathematics in Islamic Countries',
        slug: 'islamic-mathematics',
        description: 'The golden age of Islamic mathematics and algebra.',
      },
      {
        id: 22,
        title: 'New Beginnings in Europe',
        slug: 'europe-beginnings',
        description: 'The transmission of mathematical knowledge to medieval Europe.',
      },
      {
        id: 23,
        title: 'Mathematics in the Renaissance',
        slug: 'renaissance',
        description: 'The revival of mathematics in 15th-16th century Europe.',
      },
      {
        id: 24,
        title: 'The Cubic and Quartic Equations',
        slug: 'cubic-quartic',
        description: 'Cardano, Tartaglia, and the solution of polynomial equations.',
      },
      {
        id: 25,
        title: 'Renaissance Mathematics Continued',
        slug: 'renaissance-continued',
        description: 'Viète, Stevin, and the development of algebraic notation.',
      },
    ],
  },
  {
    id: 5,
    title: 'Early Modern Mathematics',
    slug: 'early-modern',
    sections: [
      {
        id: 26,
        title: 'The Seventeenth Century in France',
        slug: 'france-17th',
        description: 'Descartes, Fermat, and the birth of analytic geometry.',
      },
      {
        id: 27,
        title: 'The Seventeenth Century Continued',
        slug: 'seventeenth-continued',
        description: 'Pascal, probability, and the scientific revolution.',
      },
      {
        id: 28,
        title: 'Leibniz',
        slug: 'leibniz',
        description: 'The development of calculus and symbolic logic.',
      },
      {
        id: 29,
        title: 'The Eighteenth Century',
        slug: 'eighteenth-century',
        description: 'Euler, the Bernoullis, and the expansion of analysis.',
      },
      {
        id: 30,
        title: 'The Law of Quadratic Reciprocity',
        slug: 'quadratic-reciprocity',
        description: 'Gauss and the foundations of modern number theory.',
      },
    ],
  },
  // ==========================================================================
  // PART II: FOUNDATIONS OF MATHEMATICS
  // ==========================================================================
  {
    id: 6,
    title: 'Number Systems',
    slug: 'number-systems',
    sections: [
      {
        id: 31,
        title: 'The Number System',
        slug: 'number-system-intro',
        description: 'An overview of mathematical number systems.',
      },
      {
        id: 32,
        title: 'Natural Numbers (Peano\'s Approach)',
        slug: 'natural-numbers',
        description: 'Peano axioms and the construction of natural numbers.',
      },
      {
        id: 33,
        title: 'The Integers',
        slug: 'integers',
        description: 'Extending naturals to include negative numbers.',
      },
      {
        id: 34,
        title: 'The Rationals',
        slug: 'rationals',
        description: 'Constructing the rational numbers from integers.',
      },
      {
        id: 35,
        title: 'The Real Numbers',
        slug: 'real-numbers',
        description: 'Dedekind cuts and the completion of the rationals.',
      },
      {
        id: 36,
        title: 'Complex Numbers',
        slug: 'complex-numbers',
        description: 'The algebraic closure of the reals.',
      },
    ],
  },
  {
    id: 7,
    title: 'Advanced Number Systems',
    slug: 'advanced-number-systems',
    sections: [
      {
        id: 37,
        title: 'The Fundamental Theorem of Algebra',
        slug: 'fundamental-theorem-algebra',
        description: 'Every polynomial has a root in the complex numbers.',
      },
      {
        id: 38,
        title: 'Quaternions',
        slug: 'quaternions',
        description: 'Hamilton\'s four-dimensional number system.',
      },
      {
        id: 39,
        title: 'Quaternions Applied to Number Theory',
        slug: 'quaternions-number-theory',
        description: 'Using quaternions to prove number-theoretic results.',
      },
      {
        id: 40,
        title: 'Quaternions Applied to Physics',
        slug: 'quaternions-physics',
        description: 'Quaternions in mechanics and electromagnetism.',
      },
      {
        id: 41,
        title: 'Quaternions in Quantum Mechanics',
        slug: 'quaternions-quantum',
        description: 'Applications to spin and quantum rotations.',
      },
    ],
  },
  {
    id: 8,
    title: 'Set Theory and Number Theory',
    slug: 'set-number-theory',
    sections: [
      {
        id: 42,
        title: 'Cardinal Numbers',
        slug: 'cardinal-numbers',
        description: 'Comparing the sizes of infinite sets.',
      },
      {
        id: 43,
        title: 'Cardinal Arithmetic',
        slug: 'cardinal-arithmetic',
        description: 'Operations on infinite cardinalities.',
      },
      {
        id: 44,
        title: 'Continued Fractions',
        slug: 'continued-fractions',
        description: 'Representing real numbers as continued fractions.',
      },
      {
        id: 45,
        title: 'The Fundamental Theorem of Arithmetic',
        slug: 'fundamental-theorem-arithmetic',
        description: 'Unique prime factorization.',
      },
      {
        id: 46,
        title: 'Linear Diophantine Equations',
        slug: 'linear-diophantine',
        description: 'Solving integer equations.',
      },
      {
        id: 47,
        title: 'Quadratic Surds',
        slug: 'quadratic-surds',
        description: 'Continued fractions and quadratic irrationals.',
      },
      {
        id: 48,
        title: 'Pythagorean Triangles and Fermat\'s Last Theorem',
        slug: 'pythagorean-fermat',
        description: 'From Pythagorean triples to Wiles\' proof.',
      },
    ],
  },
  {
    id: 9,
    title: 'Computability and Logic',
    slug: 'computability-logic',
    sections: [
      {
        id: 49,
        title: 'What Is a Calculation?',
        slug: 'what-is-calculation',
        description: 'Turing machines and the formalization of computation.',
      },
      {
        id: 50,
        title: 'Recursive and Recursively Enumerable Sets',
        slug: 'recursive-sets',
        description: 'Decidable and semi-decidable problems.',
      },
      {
        id: 51,
        title: 'Hilbert\'s Tenth Problem',
        slug: 'hilbert-tenth',
        description: 'The undecidability of Diophantine equations.',
      },
      {
        id: 52,
        title: 'Lambda Calculus',
        slug: 'lambda-calculus',
        description: 'Church\'s formal system for computation.',
      },
      {
        id: 53,
        title: 'Logic from Aristotle to Russell',
        slug: 'logic-history',
        description: 'The development of formal logic.',
      },
      {
        id: 54,
        title: 'Intuitionistic Propositional Calculus',
        slug: 'intuitionistic-propositional',
        description: 'Brouwer\'s constructive approach to logic.',
      },
      {
        id: 55,
        title: 'How to Interpret Intuitionistic Logic',
        slug: 'interpreting-intuitionistic',
        description: 'Semantics of constructive reasoning.',
      },
      {
        id: 56,
        title: 'Intuitionistic Predicate Calculus',
        slug: 'intuitionistic-predicate',
        description: 'Constructive first-order logic.',
      },
      {
        id: 57,
        title: 'Intuitionistic Type Theory',
        slug: 'type-theory',
        description: 'Martin-Löf type theory and constructive mathematics.',
      },
    ],
  },
  {
    id: 10,
    title: 'Gödel\'s Theorems',
    slug: 'godel-theorems',
    sections: [
      {
        id: 58,
        title: 'Gödel\'s Theorems',
        slug: 'godel-intro',
        description: 'The incompleteness theorems and their significance.',
      },
      {
        id: 59,
        title: 'Proof of Gödel\'s Incompleteness Theorem',
        slug: 'godel-proof',
        description: 'The technical construction of the incompleteness proof.',
      },
      {
        id: 60,
        title: 'More about Gödel\'s Theorems',
        slug: 'godel-extensions',
        description: 'Consequences and generalizations.',
      },
    ],
  },
  {
    id: 11,
    title: 'Category Theory',
    slug: 'category-theory',
    sections: [
      {
        id: 61,
        title: 'Concrete Categories',
        slug: 'concrete-categories',
        description: 'Introduction to categories and morphisms.',
      },
      {
        id: 62,
        title: 'Graphs and Categories',
        slug: 'graphs-categories',
        description: 'Graph-theoretic foundations of category theory.',
      },
      {
        id: 63,
        title: 'Functors',
        slug: 'functors',
        description: 'Mappings between categories.',
      },
      {
        id: 64,
        title: 'Natural Transformations',
        slug: 'natural-transformations',
        description: 'Morphisms between functors.',
      },
      {
        id: 65,
        title: 'A Natural Transformation between Vector Spaces',
        slug: 'vector-spaces-example',
        description: 'A concrete example of naturality.',
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
 * Get chapter by section ID (for historical chapters in Part I)
 */
export function getChapterBySectionId(sectionId: number): Part | undefined {
  return getPartBySectionId(sectionId);
}
