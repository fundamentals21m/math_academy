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
 * Complete curriculum structure - Lightning Network BOLTs
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
        id: 0,
        title: 'Introduction to Lightning',
        slug: 'introduction',
        description: 'Overview of the Lightning Network and the BOLT specifications.',
      },
      {
        id: 1,
        title: 'Key Terminology',
        slug: 'terminology',
        description: 'Essential terms and concepts used throughout the BOLT specifications.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: TRANSPORT & MESSAGING (BOLT #1, #8)
  // ==========================================================================
  {
    id: 2,
    title: 'Transport & Messaging',
    slug: 'transport-messaging',
    sections: [
      {
        id: 2,
        title: 'BOLT #8: Encrypted Transport',
        slug: 'bolt-08-transport',
        description: 'Noise protocol, handshake mechanism, and ChaCha20-Poly1305 encryption.',
      },
      {
        id: 3,
        title: 'BOLT #1: Message Structure',
        slug: 'bolt-01-messaging',
        description: 'Base protocol messaging, TLV encoding, and message types.',
      },
      {
        id: 4,
        title: 'Feature Negotiation (BOLT #9)',
        slug: 'bolt-09-features',
        description: 'Feature flags, versioning, and backward compatibility.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: CHANNEL MANAGEMENT (BOLT #2)
  // ==========================================================================
  {
    id: 3,
    title: 'Channel Management',
    slug: 'channel-management',
    sections: [
      {
        id: 5,
        title: 'BOLT #2: Channel Establishment',
        slug: 'bolt-02-channel-open',
        description: 'Opening channels, funding transactions, and the channel_ready flow.',
      },
      {
        id: 6,
        title: 'Interactive Transaction Construction',
        slug: 'bolt-02-interactive-tx',
        description: 'Dual-funded channels and collaborative transaction building.',
      },
      {
        id: 7,
        title: 'Channel Operations',
        slug: 'bolt-02-operations',
        description: 'Normal operations, HTLC updates, and commitment signatures.',
      },
      {
        id: 8,
        title: 'Channel Closure',
        slug: 'bolt-02-closure',
        description: 'Mutual close, simple close protocol, and fee negotiation.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: TRANSACTIONS (BOLT #3)
  // ==========================================================================
  {
    id: 4,
    title: 'Transaction Formats',
    slug: 'transactions',
    sections: [
      {
        id: 9,
        title: 'BOLT #3: Funding Transactions',
        slug: 'bolt-03-funding',
        description: '2-of-2 multisig funding outputs and transaction structure.',
      },
      {
        id: 10,
        title: 'Commitment Transactions',
        slug: 'bolt-03-commitment',
        description: 'Commitment transaction structure, outputs, and obscured commitment numbers.',
      },
      {
        id: 11,
        title: 'HTLC Transactions',
        slug: 'bolt-03-htlc',
        description: 'HTLC-timeout and HTLC-success transactions, scripts, and witness data.',
      },
      {
        id: 12,
        title: 'Key Derivation',
        slug: 'bolt-03-keys',
        description: 'Per-commitment points, revocation keys, and key derivation paths.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: ON-CHAIN OPERATIONS (BOLT #5)
  // ==========================================================================
  {
    id: 5,
    title: 'On-Chain Operations',
    slug: 'onchain',
    sections: [
      {
        id: 13,
        title: 'BOLT #5: Mutual Close',
        slug: 'bolt-05-mutual-close',
        description: 'Cooperative channel closing and closing transaction generation.',
      },
      {
        id: 14,
        title: 'Unilateral Close',
        slug: 'bolt-05-unilateral',
        description: 'Force-closing channels and handling commitment transactions on-chain.',
      },
      {
        id: 15,
        title: 'Revoked Transaction Close',
        slug: 'bolt-05-revoked',
        description: 'Fraud detection, penalty transactions, and justice transactions.',
      },
    ],
  },
  // ==========================================================================
  // PART 6: ROUTING (BOLT #4, #7)
  // ==========================================================================
  {
    id: 6,
    title: 'Routing & Gossip',
    slug: 'routing',
    sections: [
      {
        id: 16,
        title: 'BOLT #7: Network Topology',
        slug: 'bolt-07-topology',
        description: 'Channel announcements, node announcements, and gossip protocol.',
      },
      {
        id: 17,
        title: 'Channel Updates',
        slug: 'bolt-07-updates',
        description: 'Fee announcements, CLTV expiry, and channel policy updates.',
      },
      {
        id: 18,
        title: 'BOLT #4: Onion Routing',
        slug: 'bolt-04-onion',
        description: 'Sphinx packet construction, shared secrets, and ephemeral key blinding.',
      },
      {
        id: 19,
        title: 'Blinded Paths',
        slug: 'bolt-04-blinded',
        description: 'Route blinding for receiver privacy and blinded path construction.',
      },
    ],
  },
  // ==========================================================================
  // PART 7: BOOTSTRAP & DISCOVERY (BOLT #10)
  // ==========================================================================
  {
    id: 7,
    title: 'Bootstrap & Discovery',
    slug: 'bootstrap',
    sections: [
      {
        id: 20,
        title: 'BOLT #10: DNS Bootstrap',
        slug: 'bolt-10-dns',
        description: 'DNS seed format, query parameters, and initial peer discovery.',
      },
    ],
  },
  // ==========================================================================
  // PART 8: PAYMENT ENCODING (BOLT #11, #12)
  // ==========================================================================
  {
    id: 8,
    title: 'Payment Encoding',
    slug: 'payment-encoding',
    sections: [
      {
        id: 21,
        title: 'BOLT #11: Invoice Encoding',
        slug: 'bolt-11-invoices',
        description: 'Bech32 invoice format, tagged fields, and payment requests.',
      },
      {
        id: 22,
        title: 'BOLT #12: Offers',
        slug: 'bolt-12-offers',
        description: 'Offer format, invoice requests, and merchant-pays-user flows.',
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
