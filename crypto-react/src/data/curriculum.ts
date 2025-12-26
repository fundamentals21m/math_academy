// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Cryptography Mathematics Course
// 3 Parts, 12 Sections
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
  // PART 1: FOUNDATIONS
  // ==========================================================================
  {
    id: 1,
    title: 'Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 1,
        title: 'Introduction to Cryptography',
        slug: 'intro',
        description: 'Why math matters for cryptography and the concept of one-way functions.',
      },
      {
        id: 2,
        title: 'Numerical Bases',
        slug: 'numerical-bases',
        description: 'Binary, hexadecimal, and base conversions essential for cryptography.',
      },
      {
        id: 3,
        title: 'Modular Arithmetic',
        slug: 'modular-arithmetic',
        description: 'Clock math - the foundation of all cryptographic operations.',
      },
      {
        id: 4,
        title: 'Prime Numbers',
        slug: 'primes',
        description: 'The indivisible building blocks of cryptography.',
      },
      {
        id: 5,
        title: 'Greatest Common Divisor',
        slug: 'gcd',
        description: 'The Euclidean algorithm and finding what numbers share.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: CORE TOOLS
  // ==========================================================================
  {
    id: 2,
    title: 'Core Tools',
    slug: 'core-tools',
    sections: [
      {
        id: 6,
        title: 'Modular Inverse',
        slug: 'modular-inverse',
        description: 'Division in modular arithmetic and the Extended Euclidean Algorithm.',
      },
      {
        id: 7,
        title: "Euler's Totient Function",
        slug: 'euler-totient',
        description: "Counting coprime numbers and Euler's powerful theorem.",
      },
      {
        id: 8,
        title: 'Modular Exponentiation',
        slug: 'mod-exp',
        description: 'Fast computation of huge powers using square-and-multiply.',
      },
      {
        id: 9,
        title: 'Discrete Logarithm',
        slug: 'discrete-log',
        description: 'The hard problem that secures the web.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: CRYPTOGRAPHIC PROTOCOLS
  // ==========================================================================
  {
    id: 3,
    title: 'Cryptographic Protocols',
    slug: 'protocols',
    sections: [
      {
        id: 10,
        title: 'RSA Encryption',
        slug: 'rsa',
        description: 'The most famous public-key encryption algorithm.',
      },
      {
        id: 11,
        title: 'Diffie-Hellman Key Exchange',
        slug: 'diffie-hellman',
        description: 'Sharing secrets over public channels.',
      },
      {
        id: 12,
        title: 'Elliptic Curve Cryptography',
        slug: 'elliptic-curves',
        description: 'Modern cryptography on curves - smaller keys, same security.',
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
