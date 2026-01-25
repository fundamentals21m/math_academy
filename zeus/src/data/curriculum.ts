// =============================================================================
// CURRICULUM STRUCTURE - Zeus Lightning Wallet
// =============================================================================
// A comprehensive course on using the Zeus mobile wallet for Bitcoin
// and Lightning Network transactions, node management, and self-custody.
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
  {
    id: 1,
    title: 'Bitcoin & Lightning Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 0,
        title: 'Introduction to Zeus',
        slug: 'introduction',
        description: 'Overview of Zeus wallet, its philosophy of self-custody, and why it exists.',
      },
      {
        id: 1,
        title: 'Bitcoin Fundamentals',
        slug: 'bitcoin-fundamentals',
        description: 'Understanding Bitcoin transactions, UTXOs, and on-chain payments.',
      },
      {
        id: 2,
        title: 'Lightning Network Basics',
        slug: 'lightning-basics',
        description: 'How the Lightning Network enables fast, cheap Bitcoin payments.',
      },
    ],
  },
  {
    id: 2,
    title: 'Setting Up Zeus',
    slug: 'setup',
    sections: [
      {
        id: 3,
        title: 'Installation & First Launch',
        slug: 'installation',
        description: 'Installing Zeus on iOS or Android and initial configuration.',
      },
      {
        id: 4,
        title: 'Connecting to a Node',
        slug: 'connecting-node',
        description: 'Connecting Zeus to LND, Core Lightning, or other Lightning implementations.',
      },
      {
        id: 5,
        title: 'Embedded Node Mode',
        slug: 'embedded-node',
        description: 'Using Zeus with its built-in LND node for a self-contained experience.',
      },
    ],
  },
  {
    id: 3,
    title: 'Using Zeus',
    slug: 'usage',
    sections: [
      {
        id: 6,
        title: 'Sending & Receiving Payments',
        slug: 'payments',
        description: 'How to send and receive both on-chain and Lightning payments.',
      },
      {
        id: 7,
        title: 'Channel Management',
        slug: 'channels',
        description: 'Opening, closing, and managing Lightning channels for liquidity.',
      },
      {
        id: 8,
        title: 'LNURL & Payment Protocols',
        slug: 'lnurl',
        description: 'Using LNURL-pay, LNURL-withdraw, and other payment standards.',
      },
    ],
  },
  {
    id: 4,
    title: 'Advanced Features',
    slug: 'advanced',
    sections: [
      {
        id: 9,
        title: 'Security & Privacy',
        slug: 'security',
        description: 'Protecting your funds with PINs, passphrases, and privacy best practices.',
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
