// =============================================================================
// CURRICULUM STRUCTURE - Why Math? by R.D. Driver
// =============================================================================
// Course based on "Why Math?" (Undergraduate Texts in Mathematics)
// by Rodney David Driver, Springer 1984
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
  // Part I: Foundations of Arithmetic
  {
    id: 1,
    title: 'Foundations of Arithmetic',
    slug: 'foundations',
    sections: [
      {
        id: 1,
        title: 'Arithmetic Review',
        slug: 'arithmetic-review',
        description: 'Basic arithmetic rules, fractions, exponents, percentages, and rates.',
      },
      {
        id: 2,
        title: 'Prime Numbers and Fractions',
        slug: 'primes-fractions',
        description: 'Prime factorization, divisibility, the Euclidean algorithm, and rational vs irrational numbers.',
      },
    ],
  },
  // Part II: Geometry and Measurement
  {
    id: 2,
    title: 'Geometry and Measurement',
    slug: 'geometry',
    sections: [
      {
        id: 3,
        title: 'The Pythagorean Theorem',
        slug: 'pythagorean-theorem',
        description: 'The famous theorem, its proofs, square roots, and irrational numbers.',
      },
    ],
  },
  // Part III: Algebra and Equations
  {
    id: 3,
    title: 'Algebra and Equations',
    slug: 'algebra',
    sections: [
      {
        id: 4,
        title: 'Elementary Equations',
        slug: 'elementary-equations',
        description: 'Solving equations in one unknown: word problems, mixtures, rates, and temperature conversions.',
      },
      {
        id: 5,
        title: 'Quadratic Polynomials and Equations',
        slug: 'quadratic-polynomials',
        description: 'Solving quadratic equations by factoring, completing the square, and the quadratic formula. Graphing parabolas.',
      },
      {
        id: 6,
        title: 'Powers and Geometric Sequences',
        slug: 'powers-geometric-sequences',
        description: 'Geometric sequences, exponential growth and decay, compound interest, and infinite series.',
      },
    ],
  },
  // Part IV: Functions and Graphs
  {
    id: 4,
    title: 'Functions and Graphs',
    slug: 'functions',
    sections: [
      {
        id: 7,
        title: 'Areas and Volumes',
        slug: 'areas-volumes',
        description: 'How areas scale by m² and volumes by m³, with applications to pizza pricing, cooling rates, and animal sizes.',
      },
      {
        id: 8,
        title: 'Galilean Relativity',
        slug: 'galilean-relativity',
        description: 'Vectors, velocity addition, the Doppler effect, and how different observers see moving objects.',
      },
    ],
  },
  // Part V: Relativity
  {
    id: 5,
    title: 'Relativity',
    slug: 'relativity',
    sections: [
      {
        id: 9,
        title: 'Special Relativity',
        slug: 'special-relativity',
        description: 'Einstein\'s postulate, time dilation, length contraction, and how moving clocks run slow.',
      },
    ],
  },
  // Part VI: Binary Arithmetic
  {
    id: 6,
    title: 'Binary Arithmetic',
    slug: 'binary',
    sections: [
      {
        id: 10,
        title: 'Binary Arithmetic',
        slug: 'binary-arithmetic',
        description: 'The binary system, how computers represent numbers, and applications to data transmission.',
      },
    ],
  },
  // Part VII: Sets and Probability
  {
    id: 7,
    title: 'Sets and Probability',
    slug: 'sets-probability',
    sections: [
      {
        id: 11,
        title: 'Sets and Counting',
        slug: 'sets-counting',
        description: 'Set notation, union, intersection, permutations, combinations, and factorials.',
      },
      {
        id: 12,
        title: 'Probability',
        slug: 'probability',
        description: 'Elementary probability, sample spaces, and applications to games and real life.',
      },
    ],
  },
  // Part VIII: Cardinality
  {
    id: 8,
    title: 'Cardinality',
    slug: 'cardinality',
    sections: [
      {
        id: 13,
        title: 'Cardinality',
        slug: 'cardinality',
        description: 'Countable and uncountable sets, Cantor\'s diagonal argument, and different sizes of infinity.',
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
