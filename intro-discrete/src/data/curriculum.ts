// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Define your course structure here. The curriculum is organized by Parts,
// where each Part contains multiple Sections.
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
 * Based on "Numbers, Groups and Codes" (2nd ed.) by J.F. Humphreys & M.Y. Prest
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // CHAPTER 1: NUMBER THEORY
  // ==========================================================================
  {
    id: 1,
    title: 'Number Theory',
    slug: 'number-theory',
    sections: [
      {
        id: 0,
        title: 'The Division Algorithm and GCD',
        slug: 'division-algorithm',
        description: 'The well-ordering principle, division theorem, and greatest common divisors.',
      },
      {
        id: 1,
        title: 'Mathematical Induction',
        slug: 'mathematical-induction',
        description: 'The induction principle, base case, induction step, and strong induction.',
      },
      {
        id: 2,
        title: 'Primes and Unique Factorisation',
        slug: 'primes-factorisation',
        description: 'Prime numbers, the Sieve of Eratosthenes, and the Fundamental Theorem of Arithmetic.',
      },
      {
        id: 3,
        title: 'Congruence Classes',
        slug: 'congruence-classes',
        description: 'Modular arithmetic, congruence relations, and equivalence classes.',
      },
      {
        id: 4,
        title: 'Solving Linear Congruences',
        slug: 'linear-congruences',
        description: 'The Chinese Remainder Theorem and solving systems of congruences.',
      },
      {
        id: 5,
        title: "Euler's Theorem and Public Key Codes",
        slug: 'euler-theorem-rsa',
        description: "Euler's totient function, Fermat's Little Theorem, and RSA cryptography.",
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 2: SETS, FUNCTIONS AND RELATIONS
  // ==========================================================================
  {
    id: 2,
    title: 'Sets, Functions and Relations',
    slug: 'sets-functions-relations',
    sections: [
      {
        id: 6,
        title: 'Elementary Set Theory',
        slug: 'set-theory',
        description: 'Sets, subsets, unions, intersections, and complements.',
      },
      {
        id: 7,
        title: 'Functions',
        slug: 'functions',
        description: 'Injections, surjections, bijections, and function composition.',
      },
      {
        id: 8,
        title: 'Relations',
        slug: 'relations',
        description: 'Equivalence relations, partitions, and order relations.',
      },
      {
        id: 9,
        title: 'Finite State Machines',
        slug: 'finite-state-machines',
        description: 'Automata, state diagrams, and applications to computer science.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 3: LOGIC AND MATHEMATICAL ARGUMENT
  // ==========================================================================
  {
    id: 3,
    title: 'Logic and Mathematical Argument',
    slug: 'logic',
    sections: [
      {
        id: 10,
        title: 'Propositional Logic',
        slug: 'propositional-logic',
        description: 'Propositions, truth tables, logical connectives, and tautologies.',
      },
      {
        id: 11,
        title: 'Quantifiers',
        slug: 'quantifiers',
        description: 'Universal and existential quantifiers, negation of quantified statements.',
      },
      {
        id: 12,
        title: 'Proof Strategies',
        slug: 'proof-strategies',
        description: 'Direct proof, proof by contradiction, contrapositive, and counterexamples.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 4: EXAMPLES OF GROUPS
  // ==========================================================================
  {
    id: 4,
    title: 'Examples of Groups',
    slug: 'examples-of-groups',
    sections: [
      {
        id: 13,
        title: 'Permutations',
        slug: 'permutations',
        description: 'Permutation notation, cycles, and the symmetric group.',
      },
      {
        id: 14,
        title: 'Order and Sign of a Permutation',
        slug: 'permutation-order-sign',
        description: 'Transpositions, even and odd permutations, and the alternating group.',
      },
      {
        id: 15,
        title: 'Definition and Examples of Groups',
        slug: 'group-definition',
        description: 'Group axioms: closure, associativity, identity, and inverses.',
      },
      {
        id: 16,
        title: 'Algebraic Structures',
        slug: 'algebraic-structures',
        description: 'Rings, fields, and their relationship to groups.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 5: GROUP THEORY AND ERROR-CORRECTING CODES
  // ==========================================================================
  {
    id: 5,
    title: 'Group Theory and Codes',
    slug: 'group-theory-codes',
    sections: [
      {
        id: 17,
        title: 'Subgroups and Preliminaries',
        slug: 'subgroups',
        description: 'Subgroups, cyclic groups, and group generators.',
      },
      {
        id: 18,
        title: "Cosets and Lagrange's Theorem",
        slug: 'cosets-lagrange',
        description: 'Left and right cosets, Lagrange\'s theorem, and its consequences.',
      },
      {
        id: 19,
        title: 'Groups of Small Order',
        slug: 'small-groups',
        description: 'Classification of groups of order 2, 3, 4, and 6.',
      },
      {
        id: 20,
        title: 'Error-Detecting and Error-Correcting Codes',
        slug: 'error-correcting-codes',
        description: 'Hamming distance, parity check codes, and linear codes.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 6: POLYNOMIALS
  // ==========================================================================
  {
    id: 6,
    title: 'Polynomials',
    slug: 'polynomials',
    sections: [
      {
        id: 21,
        title: 'Introduction to Polynomials',
        slug: 'polynomial-intro',
        description: 'Polynomial rings, degree, and basic operations.',
      },
      {
        id: 22,
        title: 'Division Algorithm for Polynomials',
        slug: 'polynomial-division',
        description: 'Polynomial division, remainders, and the GCD of polynomials.',
      },
      {
        id: 23,
        title: 'Factorisation of Polynomials',
        slug: 'polynomial-factorisation',
        description: 'Irreducible polynomials and unique factorisation.',
      },
      {
        id: 24,
        title: 'Polynomial Congruence Classes',
        slug: 'polynomial-congruences',
        description: 'Quotient rings and finite fields.',
      },
      {
        id: 25,
        title: 'Cyclic Codes',
        slug: 'cyclic-codes',
        description: 'Generator polynomials and cyclic error-correcting codes.',
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
