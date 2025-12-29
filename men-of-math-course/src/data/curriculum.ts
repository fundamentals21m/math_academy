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
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // MEN OF MATHEMATICS - E.T. Bell (1937)
  // A journey through 2500 years of mathematical history
  // ==========================================================================
  {
    id: 1,
    title: 'Ancient Mathematics',
    slug: 'ancient-mathematics',
    sections: [
      {
        id: 0,
        title: 'Introduction',
        slug: 'introduction',
        description: 'Overview of the book and its approach to mathematical history.',
      },
      {
        id: 1,
        title: 'Zeno of Elea',
        slug: 'zeno',
        description: 'The paradoxes of motion and infinity (495-435 BC).',
      },
      {
        id: 2,
        title: 'Eudoxus of Cnidus',
        slug: 'eudoxus',
        description: 'The method of exhaustion and theory of proportions (408-355 BC).',
      },
      {
        id: 3,
        title: 'Archimedes',
        slug: 'archimedes',
        description: 'The greatest mathematician of antiquity (287-212 BC).',
      },
    ],
  },
  {
    id: 2,
    title: 'Birth of Modern Mathematics',
    slug: 'birth-of-modern-math',
    sections: [
      {
        id: 4,
        title: 'René Descartes',
        slug: 'descartes',
        description: 'Analytic geometry and the Cartesian coordinate system (1596-1650).',
      },
      {
        id: 5,
        title: 'Pierre de Fermat',
        slug: 'fermat',
        description: 'Number theory, probability, and the famous Last Theorem (1601-1665).',
      },
      {
        id: 6,
        title: 'Blaise Pascal',
        slug: 'pascal',
        description: 'Probability, the triangle, and religious philosophy (1623-1662).',
      },
    ],
  },
  {
    id: 3,
    title: 'The Calculus Creators',
    slug: 'calculus-creators',
    sections: [
      {
        id: 7,
        title: 'Isaac Newton',
        slug: 'newton',
        description: 'Universal gravitation and the invention of calculus (1642-1727).',
      },
      {
        id: 8,
        title: 'Gottfried Wilhelm Leibniz',
        slug: 'leibniz',
        description: 'Calculus notation, binary numbers, and universal symbolism (1646-1716).',
      },
      {
        id: 9,
        title: 'The Bernoullis',
        slug: 'bernoullis',
        description: 'A dynasty of mathematical genius across three generations.',
      },
    ],
  },
  {
    id: 4,
    title: 'The Age of Euler',
    slug: 'age-of-euler',
    sections: [
      {
        id: 10,
        title: 'Leonhard Euler',
        slug: 'euler',
        description: 'The most prolific mathematician in history (1707-1783).',
      },
      {
        id: 11,
        title: 'Joseph-Louis Lagrange',
        slug: 'lagrange',
        description: 'Analytical mechanics and the calculus of variations (1736-1813).',
      },
      {
        id: 12,
        title: 'Pierre-Simon Laplace',
        slug: 'laplace',
        description: 'Celestial mechanics and probability theory (1749-1827).',
      },
    ],
  },
  {
    id: 5,
    title: 'French Revolutionary Era',
    slug: 'french-revolutionary-era',
    sections: [
      {
        id: 13,
        title: 'Gaspard Monge',
        slug: 'monge',
        description: 'Descriptive geometry and the École Polytechnique (1746-1818).',
      },
      {
        id: 14,
        title: 'Joseph Fourier',
        slug: 'fourier',
        description: 'Heat conduction and the revolutionary Fourier series (1768-1830).',
      },
      {
        id: 15,
        title: 'Jean-Victor Poncelet',
        slug: 'poncelet',
        description: 'Projective geometry born in a Russian prison (1788-1867).',
      },
    ],
  },
  {
    id: 6,
    title: 'The Prince of Mathematicians',
    slug: 'prince-of-mathematicians',
    sections: [
      {
        id: 16,
        title: 'Carl Friedrich Gauss',
        slug: 'gauss',
        description: 'Number theory, astronomy, and mathematical rigor (1777-1855).',
      },
      {
        id: 17,
        title: 'Augustin-Louis Cauchy',
        slug: 'cauchy',
        description: 'Rigorous analysis and 789 mathematical papers (1789-1857).',
      },
      {
        id: 18,
        title: 'Nikolai Lobachevsky',
        slug: 'lobachevsky',
        description: 'The Copernicus of geometry and non-Euclidean space (1792-1856).',
      },
    ],
  },
  {
    id: 7,
    title: 'Tragic Geniuses',
    slug: 'tragic-geniuses',
    sections: [
      {
        id: 19,
        title: 'Niels Henrik Abel',
        slug: 'abel',
        description: 'Algebraic unsolvability and death at 26 (1802-1829).',
      },
      {
        id: 20,
        title: 'Carl Gustav Jacobi',
        slug: 'jacobi',
        description: 'Elliptic functions and pure mathematical devotion (1804-1851).',
      },
      {
        id: 21,
        title: 'William Rowan Hamilton',
        slug: 'hamilton',
        description: 'Quaternions, optics, and dynamics (1805-1865).',
      },
      {
        id: 22,
        title: 'Évariste Galois',
        slug: 'galois',
        description: 'Group theory created the night before a fatal duel (1811-1832).',
      },
    ],
  },
  {
    id: 8,
    title: 'Victorian Algebraists',
    slug: 'victorian-algebraists',
    sections: [
      {
        id: 23,
        title: 'James Joseph Sylvester',
        slug: 'sylvester',
        description: 'Matrices, invariants, and the poetry of mathematics (1814-1897).',
      },
      {
        id: 24,
        title: 'Arthur Cayley',
        slug: 'cayley',
        description: 'The Cayley-Hamilton theorem and abstract algebra (1821-1895).',
      },
      {
        id: 25,
        title: 'Karl Weierstrass',
        slug: 'weierstrass',
        description: 'Epsilon-delta rigor and the late-blooming master analyst (1815-1897).',
      },
      {
        id: 26,
        title: 'George Boole',
        slug: 'boole',
        description: 'Boolean algebra and the laws of thought (1815-1864).',
      },
      {
        id: 27,
        title: 'Charles Hermite',
        slug: 'hermite',
        description: 'Transcendental numbers and the proof that e is transcendental (1822-1901).',
      },
      {
        id: 28,
        title: 'Leopold Kronecker',
        slug: 'kronecker',
        description: '"God made the integers; all else is the work of man" (1823-1891).',
      },
    ],
  },
  {
    id: 9,
    title: 'The Rigor Revolution',
    slug: 'rigor-revolution',
    sections: [
      {
        id: 29,
        title: 'Bernhard Riemann',
        slug: 'riemann',
        description: 'Geometry, complex analysis, and the famous hypothesis (1826-1866).',
      },
      {
        id: 30,
        title: 'Georg Cantor',
        slug: 'cantor',
        description: 'Set theory, transfinite numbers, and the paradise of the infinite (1845-1918).',
      },
      {
        id: 31,
        title: 'Richard Dedekind',
        slug: 'dedekind',
        description: 'Dedekind cuts, ideals, and the anatomy of number (1831-1916).',
      },
    ],
  },
  {
    id: 10,
    title: 'The Modern Era',
    slug: 'modern-era',
    sections: [
      {
        id: 32,
        title: 'Henri Poincaré',
        slug: 'poincare',
        description: 'Topology, chaos theory, and the last universalist (1854-1912).',
      },
      {
        id: 33,
        title: 'Sofia Kovalevskaya',
        slug: 'kovalevskaya',
        description: 'The Kovalevskaya top and breaking barriers (1850-1891).',
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
