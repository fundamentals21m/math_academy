// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Branta - Bitcoin Transaction Security Course
// Learn pre-payment verification with Guardrail
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
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Welcome to Branta',
        slug: 'welcome',
        description: 'Introduction to Branta and the problem of Bitcoin transaction security.',
      },
      {
        id: 1,
        title: 'The Problem: Transaction Risks',
        slug: 'transaction-risks',
        description: 'Understanding why Bitcoin transactions need pre-payment verification.',
      },
    ],
  },
  {
    id: 2,
    title: 'Security Threats',
    slug: 'security-threats',
    sections: [
      {
        id: 2,
        title: 'Address Swap Attacks',
        slug: 'address-swap',
        description: 'How attackers substitute legitimate addresses with their own.',
      },
      {
        id: 3,
        title: 'Phishing & Social Engineering',
        slug: 'phishing',
        description: 'Recognizing and preventing phishing attacks in Bitcoin transactions.',
      },
      {
        id: 4,
        title: 'Man-in-the-Middle Attacks',
        slug: 'mitm',
        description: 'Understanding network-level interception threats.',
      },
      {
        id: 5,
        title: 'Supply Chain Compromises',
        slug: 'supply-chain',
        description: 'Risks from compromised software and dependencies.',
      },
    ],
  },
  {
    id: 3,
    title: 'Guardrail Fundamentals',
    slug: 'guardrail-fundamentals',
    sections: [
      {
        id: 6,
        title: 'What is Guardrail?',
        slug: 'what-is-guardrail',
        description: 'Core concepts and architecture of the Guardrail verification system.',
      },
      {
        id: 7,
        title: 'Environments',
        slug: 'environments',
        description: 'Staging vs Production environments and their use cases.',
      },
      {
        id: 8,
        title: 'Authentication',
        slug: 'authentication',
        description: 'API key management and secure authentication practices.',
      },
    ],
  },
  {
    id: 4,
    title: 'API Integration',
    slug: 'api-integration',
    sections: [
      {
        id: 9,
        title: 'Adding Payments',
        slug: 'adding-payments',
        description: 'Register invoices and checkouts with the Guardrail API.',
      },
      {
        id: 10,
        title: 'Getting Payments',
        slug: 'getting-payments',
        description: 'Query and verify payment details from the API.',
      },
      {
        id: 11,
        title: 'TTL & Payment Lifecycle',
        slug: 'ttl-lifecycle',
        description: 'Understanding time-to-live and payment expiration.',
      },
    ],
  },
  {
    id: 5,
    title: 'Advanced Integration',
    slug: 'advanced-integration',
    sections: [
      {
        id: 12,
        title: 'Parent Platforms',
        slug: 'parent-platforms',
        description: 'Multi-tenant integration with HMAC authentication.',
      },
      {
        id: 13,
        title: 'BTCPay Server Plugin',
        slug: 'btcpay-plugin',
        description: 'Integrating Guardrail with BTCPay Server.',
      },
      {
        id: 14,
        title: 'UI/UX Best Practices',
        slug: 'ui-ux',
        description: 'Web verification pages and user experience patterns.',
      },
    ],
  },
  {
    id: 6,
    title: 'Branta Core',
    slug: 'branta-core',
    sections: [
      {
        id: 15,
        title: 'Desktop Application',
        slug: 'desktop-app',
        description: 'Using Branta Core for clipboard monitoring and verification.',
      },
      {
        id: 16,
        title: 'Zero Knowledge Verification',
        slug: 'zero-knowledge',
        description: 'Privacy-preserving address verification techniques.',
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
