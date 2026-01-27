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
  // Part 1: Lagrange Equations
  // ==========================================================================
  {
    id: 1,
    title: 'Lagrange Equations',
    slug: 'lagrange-equations',
    sections: [
      {
        id: 0,
        title: 'Introduction to Lagrangian Mechanics',
        slug: 'introduction',
        description: 'A heuristic introduction to Lagrangian mechanics and the principle of virtual work.',
      },
      {
        id: 1,
        title: "Fermat's Equations",
        slug: 'fermat-equations',
        description: 'Deriving equations of motion using Fermat\'s principle of least time.',
      },
      {
        id: 2,
        title: 'Intrinsic Formalism',
        slug: 'intrinsic-formalism',
        description: 'The coordinate-independent geometric formulation of Lagrangian mechanics.',
      },
      {
        id: 3,
        title: 'Holonomic Constraints',
        slug: 'holonomic-constraints',
        description: 'Systems with constraints that can be expressed as functions of coordinates alone.',
      },
      {
        id: 4,
        title: 'Electromagnetic Coupling',
        slug: 'em-coupling',
        description: 'Minimal coupling of charged particles to electromagnetic fields.',
      },
    ],
  },
  // ==========================================================================
  // Part 2: Hamilton Equations
  // ==========================================================================
  {
    id: 2,
    title: 'Hamilton Equations',
    slug: 'hamilton-equations',
    sections: [
      {
        id: 5,
        title: 'Canonical Equations',
        slug: 'canonical-equations',
        description: 'The Hamiltonian formulation and Hamilton\'s equations of motion.',
      },
      {
        id: 6,
        title: 'Poisson Brackets',
        slug: 'poisson-brackets',
        description: 'The Poisson bracket structure and its role in classical mechanics.',
      },
      {
        id: 7,
        title: 'Symplectic Structure',
        slug: 'symplectic-structure',
        description: 'The geometric foundation of Hamiltonian mechanics on phase space.',
      },
      {
        id: 8,
        title: 'Canonical Transformations',
        slug: 'canonical-transformations',
        description: 'Transformations preserving the form of Hamilton\'s equations.',
      },
    ],
  },
  // ==========================================================================
  // Part 3: Non-Inertial Reference Frames
  // ==========================================================================
  {
    id: 3,
    title: 'Non-Inertial Reference Frames',
    slug: 'non-inertial-frames',
    sections: [
      {
        id: 9,
        title: 'The Euclidean Group',
        slug: 'euclidean-group',
        description: 'Euclidean space and the structure of rigid motions.',
      },
      {
        id: 10,
        title: 'Euclidean Isometries',
        slug: 'euclidean-isometries',
        description: 'Distance-preserving transformations in Euclidean space.',
      },
      {
        id: 11,
        title: 'Non-Inertial Reference Frames',
        slug: 'reference-frame-changes',
        description: 'Velocity and acceleration transformations between frames.',
      },
      {
        id: 12,
        title: 'Inertial Forces',
        slug: 'inertial-forces',
        description: 'Centrifugal, Coriolis, and other fictitious forces.',
      },
      {
        id: 13,
        title: 'Foucault Pendulum',
        slug: 'foucault-pendulum',
        description: 'A classic demonstration of Earth\'s rotation using pendulum dynamics.',
      },
    ],
  },
  // ==========================================================================
  // Part 4: Rigid Body Mechanics
  // ==========================================================================
  {
    id: 4,
    title: 'Rigid Body Mechanics',
    slug: 'rigid-body-mechanics',
    sections: [
      {
        id: 14,
        title: 'System Dynamics',
        slug: 'system-dynamics',
        description: 'General theorems for the dynamics of mechanical systems.',
      },
      {
        id: 15,
        title: 'Solid Configurations',
        slug: 'solid-configurations',
        description: 'Configuration space and velocity fields in rigid bodies.',
      },
      {
        id: 16,
        title: 'Solid Kinetics',
        slug: 'solid-kinetics',
        description: 'Center of mass, inertia tensor, and kinetic energy of rigid bodies.',
      },
      {
        id: 17,
        title: "Euler's Equations",
        slug: 'euler-equations',
        description: 'The equations of rotational motion for rigid bodies.',
      },
      {
        id: 18,
        title: 'Poinsot Motion',
        slug: 'poinsot-motion',
        description: 'Torque-free rotation and the polhode/herpolhode construction.',
      },
      {
        id: 19,
        title: 'Euler Angles',
        slug: 'euler-angles',
        description: 'Parameterizing rotations using three angular coordinates.',
      },
      {
        id: 20,
        title: "Lagrange's Top",
        slug: 'lagrange-top',
        description: 'The symmetric top in a gravitational field and its motion.',
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
