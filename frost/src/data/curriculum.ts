// =============================================================================
// FROST CURRICULUM STRUCTURE
// =============================================================================
// FROST: Flexible Round-Optimized Schnorr Threshold Signatures
// 10 Parts, 69 Sections - From mathematical foundations to Bitcoin applications
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
  // PART 1: THE PROBLEM SPACE (3 sections)
  // ==========================================================================
  {
    id: 1,
    title: 'Part 1: The Problem Space',
    slug: 'problem-space',
    sections: [
      {
        id: 1,
        title: 'The Single Point of Failure Problem',
        slug: 'single-point-failure',
        description: 'Why sharing secrets across multiple parties is essential for Bitcoin security.',
      },
      {
        id: 2,
        title: 'Traditional Approaches and Their Limitations',
        slug: 'traditional-approaches',
        description: 'Bitcoin multisig, Shamir Secret Sharing, and why they fall short.',
      },
      {
        id: 3,
        title: 'What Makes FROST Special',
        slug: 'frost-special',
        description: 'The four key properties that make FROST revolutionary for threshold signatures.',
      },
    ],
  },

  // ==========================================================================
  // PART 2: SCHNORR SIGNATURES (5 sections)
  // ==========================================================================
  {
    id: 2,
    title: 'Part 2: Schnorr Signatures',
    slug: 'schnorr-signatures',
    sections: [
      {
        id: 4,
        title: 'Group Theory Foundations',
        slug: 'group-theory',
        description: 'Abelian groups, elliptic curves, and the discrete logarithm problem.',
      },
      {
        id: 5,
        title: 'Schnorr Signature - Step by Step',
        slug: 'schnorr-step-by-step',
        description: 'The complete signing and verification algorithms explained.',
      },
      {
        id: 6,
        title: 'Why Verification Works',
        slug: 'verification-math',
        description: 'The mathematical proof that Schnorr verification is correct.',
      },
      {
        id: 7,
        title: 'Security Intuition',
        slug: 'security-intuition',
        description: 'Soundness, zero-knowledge, and the random oracle model.',
      },
      {
        id: 8,
        title: 'The Nonce Catastrophe',
        slug: 'nonce-catastrophe',
        description: 'Why nonce reuse is fatal and how attackers extract private keys.',
      },
    ],
  },

  // ==========================================================================
  // PART 3: SHAMIR SECRET SHARING (6 sections)
  // ==========================================================================
  {
    id: 3,
    title: 'Part 3: Shamir Secret Sharing',
    slug: 'shamir-secret-sharing',
    sections: [
      {
        id: 9,
        title: 'Polynomial Encoding',
        slug: 'polynomial-encoding',
        description: 'Encoding secrets as polynomial constant terms with concrete examples.',
      },
      {
        id: 10,
        title: 'Lagrange Interpolation',
        slug: 'lagrange-interpolation',
        description: 'Reconstructing polynomials from points using Lagrange basis polynomials.',
      },
      {
        id: 11,
        title: 'Concrete Reconstruction Example',
        slug: 'reconstruction-example',
        description: 'Step-by-step walkthrough of reconstructing a secret from shares.',
      },
      {
        id: 12,
        title: 'Why t-1 Points Reveal Nothing',
        slug: 'information-theoretic-security',
        description: 'Information-theoretic security and why fewer than threshold shares are useless.',
      },
      {
        id: 13,
        title: 'Verifiable Secret Sharing (Feldman VSS)',
        slug: 'feldman-vss',
        description: 'How participants verify their shares without trusting the dealer.',
      },
      {
        id: 14,
        title: 'Why SSS Alone Doesn\'t Give Threshold Signatures',
        slug: 'sss-limitations',
        description: 'The fundamental challenge of computing signatures without reconstruction.',
      },
    ],
  },

  // ==========================================================================
  // PART 4: SHARE CONVERSION (5 sections)
  // ==========================================================================
  {
    id: 4,
    title: 'Part 4: Share Conversion',
    slug: 'share-conversion',
    sections: [
      {
        id: 15,
        title: 'Two Types of Secret Sharing',
        slug: 'two-types-sharing',
        description: 'Shamir (polynomial) shares vs additive shares and their properties.',
      },
      {
        id: 16,
        title: 'The Transformation Theorem',
        slug: 'transformation-theorem',
        description: 'Converting additive shares to Shamir shares using Lagrange coefficients.',
      },
      {
        id: 17,
        title: 'Concrete Example: Share Conversion',
        slug: 'conversion-example',
        description: 'Numerical walkthrough of converting between share types.',
      },
      {
        id: 18,
        title: 'Application to Schnorr Response',
        slug: 'schnorr-response-application',
        description: 'How share conversion enables distributed computation of z = k + s·c.',
      },
      {
        id: 19,
        title: 'Why This Matters',
        slug: 'share-conversion-importance',
        description: 'The mathematical heart that makes FROST work without secret reconstruction.',
      },
    ],
  },

  // ==========================================================================
  // PART 5: THE BINDING MECHANISM (8 sections)
  // ==========================================================================
  {
    id: 5,
    title: 'Part 5: The Binding Mechanism',
    slug: 'binding-mechanism',
    sections: [
      {
        id: 20,
        title: 'The Drijvers Attack',
        slug: 'drijvers-attack',
        description: 'How parallel session attacks can forge signatures using Wagner\'s algorithm.',
      },
      {
        id: 21,
        title: 'Why Naive Solutions Fail',
        slug: 'naive-solutions-fail',
        description: 'Limiting parallelism, pre-committing to messages, and their problems.',
      },
      {
        id: 22,
        title: 'FROST\'s Binding Technique',
        slug: 'frost-binding',
        description: 'Binding each response to the message, participants, and all commitments.',
      },
      {
        id: 23,
        title: 'Modified Nonce Generation',
        slug: 'modified-nonce-generation',
        description: 'The formula k_i = d_i + e_i·ρ_i and its security implications.',
      },
      {
        id: 24,
        title: 'Complete FROST Signing Formula',
        slug: 'frost-signing-formula',
        description: 'The full participant computation: z_i = d_i + e_i·ρ_i + λ_i·s_i·c.',
      },
      {
        id: 25,
        title: 'Why Binding Defeats the Attack',
        slug: 'binding-defeats-attack',
        description: 'How commitment-binding prevents adaptive manipulation.',
      },
      {
        id: 26,
        title: 'Mathematical Formulation of Security',
        slug: 'security-formulation',
        description: 'The security reduction from FROST to discrete logarithm hardness.',
      },
      {
        id: 27,
        title: 'Concrete Security Example',
        slug: 'concrete-security-example',
        description: 'What a 3-of-5 threshold adversary can and cannot do.',
      },
    ],
  },

  // ==========================================================================
  // PART 6: THE COMPLETE PROTOCOL (6 sections)
  // ==========================================================================
  {
    id: 6,
    title: 'Part 6: The Complete Protocol',
    slug: 'complete-protocol',
    sections: [
      {
        id: 28,
        title: 'Protocol Overview',
        slug: 'protocol-overview',
        description: 'The three phases: Key Generation, Preprocessing, and Signing.',
      },
      {
        id: 29,
        title: 'Phase 1: Distributed Key Generation (DKG)',
        slug: 'dkg-phase',
        description: 'Two-round DKG with commitments, proofs, and share distribution.',
      },
      {
        id: 30,
        title: 'Phase 2: Preprocessing',
        slug: 'preprocessing-phase',
        description: 'Non-interactive generation of commitment pairs (D_i, E_i).',
      },
      {
        id: 31,
        title: 'Phase 3: Signing (Single Round!)',
        slug: 'signing-phase',
        description: 'The complete single-round signing process with verification.',
      },
      {
        id: 32,
        title: 'Final Signature Verification',
        slug: 'final-verification',
        description: 'Standard Schnorr verification: [z]G = R + [c]Y.',
      },
      {
        id: 33,
        title: 'Complete Example (2-of-3 threshold)',
        slug: 'complete-example',
        description: 'Full numerical walkthrough of a 2-of-3 FROST signature.',
      },
    ],
  },

  // ==========================================================================
  // PART 7: SECURITY ANALYSIS (7 sections)
  // ==========================================================================
  {
    id: 7,
    title: 'Part 7: Security Analysis',
    slug: 'security-analysis',
    sections: [
      {
        id: 34,
        title: 'Security Model',
        slug: 'security-model',
        description: 'Assumptions, adversary power, and security goals.',
      },
      {
        id: 35,
        title: 'Attack Scenarios FROST Prevents',
        slug: 'attack-scenarios',
        description: 'Key extraction, forgery, parallel sessions, and ROS attacks.',
      },
      {
        id: 36,
        title: 'Security Proof Structure',
        slug: 'proof-structure',
        description: 'High-level reduction from FROST unforgeability to discrete log.',
      },
      {
        id: 37,
        title: 'Why Forking Works',
        slug: 'forking-lemma',
        description: 'The Forking Lemma and random oracle programming.',
      },
      {
        id: 38,
        title: 'Concrete Security Bound',
        slug: 'security-bound',
        description: 'ε_FROST ≤ ε_DL + negligible terms for practical security.',
      },
      {
        id: 39,
        title: 'Comparison with Other Schemes',
        slug: 'scheme-comparison',
        description: 'FROST vs Stinson-Strobl, Gennaro et al., and other threshold schemes.',
      },
      {
        id: 40,
        title: 'Why Abort-on-Misbehavior Is Acceptable',
        slug: 'abort-acceptable',
        description: 'Practical considerations for misbehavior detection and mitigation.',
      },
    ],
  },

  // ==========================================================================
  // PART 8: BITCOIN APPLICATIONS (9 sections)
  // ==========================================================================
  {
    id: 8,
    title: 'Part 8: Bitcoin Applications',
    slug: 'bitcoin-applications',
    sections: [
      {
        id: 41,
        title: 'Signature Aggregation (MuSig-style)',
        slug: 'signature-aggregation',
        description: 'Combining FROST with MuSig for multi-party threshold signatures.',
      },
      {
        id: 42,
        title: 'Rerandomization (Privacy Enhancement)',
        slug: 'rerandomization',
        description: 'Signing with randomized keys for unlinkable signatures.',
      },
      {
        id: 43,
        title: 'Hierarchical Threshold (Nested FROST)',
        slug: 'hierarchical-threshold',
        description: 'Organizational structures with thresholds at multiple levels.',
      },
      {
        id: 44,
        title: 'Proactive Secret Sharing',
        slug: 'proactive-sharing',
        description: 'Periodically refreshing shares without changing the secret.',
      },
      {
        id: 45,
        title: 'Threshold Changes (Dynamic Thresholds)',
        slug: 'dynamic-thresholds',
        description: 'Changing from (t₁, n₁) to (t₂, n₂) without changing public key.',
      },
      {
        id: 46,
        title: 'Bitcoin Taproot Integration',
        slug: 'taproot-integration',
        description: 'FROST as the key path in Taproot outputs.',
      },
      {
        id: 47,
        title: 'Lightning Network Integration',
        slug: 'lightning-integration',
        description: 'Threshold-shared keys for Lightning channel participants.',
      },
      {
        id: 48,
        title: 'Scriptless Scripts with Adaptor Signatures',
        slug: 'adaptor-signatures',
        description: 'Atomic swaps and Lightning routing without on-chain scripts.',
      },
      {
        id: 49,
        title: 'Concrete Bitcoin Scenario: Cold Storage',
        slug: 'cold-storage-scenario',
        description: 'Complete 3-of-5 FROST setup for Bitcoin cold storage.',
      },
    ],
  },

  // ==========================================================================
  // PART 9: IMPLEMENTATION CHALLENGES (9 sections)
  // ==========================================================================
  {
    id: 9,
    title: 'Part 9: Implementation Challenges',
    slug: 'implementation-challenges',
    sections: [
      {
        id: 50,
        title: 'Finite Field Arithmetic',
        slug: 'finite-field-arithmetic',
        description: 'Big integer operations, constant-time code, and modular reduction.',
      },
      {
        id: 51,
        title: 'Elliptic Curve Point Arithmetic',
        slug: 'ec-point-arithmetic',
        description: 'Scalar multiplication, timing attacks, and optimizations.',
      },
      {
        id: 52,
        title: 'Random Number Generation',
        slug: 'random-number-generation',
        description: 'CSPRNG sources, hedged randomness, and catastrophic failures.',
      },
      {
        id: 53,
        title: 'Lagrange Coefficient Computation',
        slug: 'lagrange-computation',
        description: 'Rational arithmetic in finite fields with modular inverses.',
      },
      {
        id: 54,
        title: 'Hash Function Considerations',
        slug: 'hash-functions',
        description: 'Domain separation, input serialization, and point encoding.',
      },
      {
        id: 55,
        title: 'Signature Share Verification',
        slug: 'share-verification',
        description: 'Correct implementation of [z_i]G = R_i + [λ_i·c]Y_i.',
      },
      {
        id: 56,
        title: 'State Management and Nonce Deletion',
        slug: 'state-management',
        description: 'State machines, secure erasure, and never reusing nonces.',
      },
      {
        id: 57,
        title: 'Communication Protocol Design',
        slug: 'communication-protocol',
        description: 'Message types, serialization, authentication, and replay protection.',
      },
      {
        id: 58,
        title: 'Performance Optimizations',
        slug: 'performance-optimizations',
        description: 'Batch verification, precomputation tables, and multi-scalar multiplication.',
      },
    ],
  },

  // ==========================================================================
  // PART 10: FUTURE DIRECTIONS (11 sections)
  // ==========================================================================
  {
    id: 10,
    title: 'Part 10: Future Directions',
    slug: 'future-directions',
    sections: [
      {
        id: 59,
        title: 'FROST Variants and Extensions',
        slug: 'frost-variants',
        description: 'FROST2, ChillDKG, and enhanced security variants.',
      },
      {
        id: 60,
        title: 'Post-Quantum Considerations',
        slug: 'post-quantum',
        description: 'Lattice-based, hash-based, and isogeny-based threshold signatures.',
      },
      {
        id: 61,
        title: 'Verifiable FROST (Byzantine Agreement)',
        slug: 'verifiable-frost',
        description: 'Zero-knowledge proofs for coordinator-free verification.',
      },
      {
        id: 62,
        title: 'Multi-Party Computation Integration',
        slug: 'mpc-integration',
        description: 'FROST as a primitive in larger MPC protocols.',
      },
      {
        id: 63,
        title: 'Smart Contract Integration',
        slug: 'smart-contract-integration',
        description: 'Schnorr verification in EVM chains and ZK proof approaches.',
      },
      {
        id: 64,
        title: 'Threshold Decryption (FROST-like)',
        slug: 'threshold-decryption',
        description: 'ElGamal threshold decryption and encrypted mempools.',
      },
      {
        id: 65,
        title: 'Recursive FROST (Fractal Thresholds)',
        slug: 'recursive-frost',
        description: 'Thresholds at every level for maximum flexibility.',
      },
      {
        id: 66,
        title: 'FROST in Bitcoin\'s Future',
        slug: 'bitcoin-future',
        description: 'Taproot adoption, Lightning evolution, and covenant integration.',
      },
      {
        id: 67,
        title: 'Standardization Efforts',
        slug: 'standardization',
        description: 'IETF RFC 9591, ciphersuites, and test vectors.',
      },
      {
        id: 68,
        title: 'Open Research Questions',
        slug: 'open-questions',
        description: 'Robustness trade-offs, round complexity, and adaptive corruption.',
      },
      {
        id: 69,
        title: 'Final Thoughts: The Mathematics of Trust',
        slug: 'mathematics-of-trust',
        description: 'From borrowed belief to earned conviction through cryptographic mathematics.',
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
