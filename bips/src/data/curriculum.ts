// =============================================================================
// CURRICULUM STRUCTURE - Bitcoin Improvement Proposals
// =============================================================================
// A comprehensive course covering 100+ Bitcoin Improvement Proposals (BIPs)
// organized by functional category.
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
  // Part 1: BIP Process & Foundations (8 sections)
  // ==========================================================================
  {
    id: 1,
    title: 'BIP Process & Foundations',
    slug: 'bip-process-foundations',
    sections: [
      {
        id: 0,
        title: 'Introduction to BIPs',
        slug: 'introduction',
        description: 'What are Bitcoin Improvement Proposals and why they matter.',
      },
      {
        id: 1,
        title: 'BIP-1: BIP Purpose and Guidelines',
        slug: 'bip-1',
        description: 'The original document defining what a BIP is and how to write one.',
      },
      {
        id: 2,
        title: 'BIP-2: BIP Process (Superseded)',
        slug: 'bip-2',
        description: 'The original BIP process and why it was updated.',
      },
      {
        id: 3,
        title: 'BIP-3: Updated BIP Process',
        slug: 'bip-3',
        description: 'Current guidelines for proposing and implementing BIPs.',
      },
      {
        id: 4,
        title: 'BIP Layers and Categories',
        slug: 'bip-layers',
        description: 'Understanding Consensus, Peer Services, API/RPC, and Application layers.',
      },
      {
        id: 5,
        title: 'BIP Status Lifecycle',
        slug: 'bip-status',
        description: 'Draft, Proposed, Final, Active, Replaced, and Rejected statuses.',
      },
      {
        id: 6,
        title: 'How Bitcoin Upgrades Work',
        slug: 'bitcoin-upgrades',
        description: 'Soft forks, hard forks, and the consensus process.',
      },
      {
        id: 7,
        title: 'Reading and Understanding BIPs',
        slug: 'reading-bips',
        description: 'A practical guide to interpreting BIP documents.',
      },
    ],
  },
  // ==========================================================================
  // Part 2: Consensus Layer - Soft Forks (15 sections)
  // ==========================================================================
  {
    id: 2,
    title: 'Consensus Layer - Soft Forks',
    slug: 'consensus-soft-forks',
    sections: [
      {
        id: 8,
        title: 'BIP-9: Version Bits with Timeout',
        slug: 'bip-9',
        description: 'Mechanism for deploying soft forks using block version bits.',
      },
      {
        id: 9,
        title: 'BIP-16: Pay to Script Hash (P2SH)',
        slug: 'bip-16',
        description: 'Enabling complex spending conditions with simple addresses.',
      },
      {
        id: 10,
        title: 'BIP-34: Block v2, Height in Coinbase',
        slug: 'bip-34',
        description: 'Requiring block height in coinbase transactions.',
      },
      {
        id: 11,
        title: 'BIP-65: OP_CHECKLOCKTIMEVERIFY',
        slug: 'bip-65',
        description: 'Enabling absolute time-locked transactions.',
      },
      {
        id: 12,
        title: 'BIP-66: Strict DER Signatures',
        slug: 'bip-66',
        description: 'Enforcing strict signature encoding for security.',
      },
      {
        id: 13,
        title: 'BIP-68: Relative Lock-Time',
        slug: 'bip-68',
        description: 'Enabling relative time locks using sequence numbers.',
      },
      {
        id: 14,
        title: 'BIP-112: OP_CHECKSEQUENCEVERIFY',
        slug: 'bip-112',
        description: 'Script-level relative time lock verification.',
      },
      {
        id: 15,
        title: 'BIP-113: Median Time Past',
        slug: 'bip-113',
        description: 'Using median time for lock time validation.',
      },
      {
        id: 16,
        title: 'BIP-141: Segregated Witness (Consensus)',
        slug: 'bip-141',
        description: 'The SegWit soft fork: separating signatures from transaction data.',
      },
      {
        id: 17,
        title: 'BIP-143: SegWit Transaction Signing',
        slug: 'bip-143',
        description: 'New signature digest algorithm for SegWit.',
      },
      {
        id: 18,
        title: 'BIP-144: SegWit Peer Services',
        slug: 'bip-144',
        description: 'Network protocol extensions for SegWit.',
      },
      {
        id: 19,
        title: 'BIP-147: Dealing with Dummy Stack Element',
        slug: 'bip-147',
        description: 'Fixing the CHECKMULTISIG dummy element bug.',
      },
      {
        id: 20,
        title: 'BIP-340: Schnorr Signatures',
        slug: 'bip-340',
        description: 'Efficient, provably secure Schnorr signatures for Bitcoin.',
      },
      {
        id: 21,
        title: 'BIP-341: Taproot',
        slug: 'bip-341',
        description: 'SegWit version 1 spending rules with MAST.',
      },
      {
        id: 22,
        title: 'BIP-342: Tapscript',
        slug: 'bip-342',
        description: 'Validation rules for Taproot script paths.',
      },
    ],
  },
  // ==========================================================================
  // Part 3: Wallet Standards - Key Management (14 sections)
  // ==========================================================================
  {
    id: 3,
    title: 'Wallet Standards - Key Management',
    slug: 'wallet-key-management',
    sections: [
      {
        id: 23,
        title: 'BIP-32: Hierarchical Deterministic Wallets',
        slug: 'bip-32',
        description: 'Deriving unlimited keys from a single seed.',
      },
      {
        id: 24,
        title: 'BIP-38: Passphrase-Protected Private Keys',
        slug: 'bip-38',
        description: 'Encrypting private keys with passphrases.',
      },
      {
        id: 25,
        title: 'BIP-39: Mnemonic Code for Seeds',
        slug: 'bip-39',
        description: 'Converting seeds to memorable word sequences.',
      },
      {
        id: 26,
        title: 'BIP-43: Purpose Field for HD Wallets',
        slug: 'bip-43',
        description: 'Standardizing the first level of HD derivation.',
      },
      {
        id: 27,
        title: 'BIP-44: Multi-Account Hierarchy',
        slug: 'bip-44',
        description: 'Standard derivation paths for multiple accounts and coins.',
      },
      {
        id: 28,
        title: 'BIP-45: Multi-Signature HD Wallet Structure',
        slug: 'bip-45',
        description: 'HD paths for multi-signature wallets.',
      },
      {
        id: 29,
        title: 'BIP-49: P2WPKH-nested-in-P2SH Derivation',
        slug: 'bip-49',
        description: 'Derivation paths for wrapped SegWit addresses.',
      },
      {
        id: 30,
        title: 'BIP-84: Native SegWit Derivation',
        slug: 'bip-84',
        description: 'Derivation paths for native bech32 addresses.',
      },
      {
        id: 31,
        title: 'BIP-85: Deterministic Entropy from BIP32',
        slug: 'bip-85',
        description: 'Deriving child seeds and other secrets from a master key.',
      },
      {
        id: 32,
        title: 'BIP-86: Taproot Key Derivation',
        slug: 'bip-86',
        description: 'Derivation paths for Taproot addresses.',
      },
      {
        id: 33,
        title: 'BIP-129: Bitcoin Secure Multisig Setup',
        slug: 'bip-129',
        description: 'Standardized process for setting up multisig wallets.',
      },
      {
        id: 34,
        title: 'BIP-380: Output Script Descriptors',
        slug: 'bip-380',
        description: 'General language for describing output scripts.',
      },
      {
        id: 35,
        title: 'BIP-381/382/383/384: Descriptor Extensions',
        slug: 'bip-381-384',
        description: 'Specific descriptor functions for various script types.',
      },
      {
        id: 36,
        title: 'BIP-389: Multipath Descriptors',
        slug: 'bip-389',
        description: 'Describing multiple derivation paths in a single descriptor.',
      },
    ],
  },
  // ==========================================================================
  // Part 4: Transaction Standards (12 sections)
  // ==========================================================================
  {
    id: 4,
    title: 'Transaction Standards',
    slug: 'transaction-standards',
    sections: [
      {
        id: 37,
        title: 'BIP-11: M-of-N Standard Transactions',
        slug: 'bip-11',
        description: 'Multi-signature transaction types.',
      },
      {
        id: 38,
        title: 'BIP-13: Address Format for P2SH',
        slug: 'bip-13',
        description: 'Base58Check encoding for script addresses.',
      },
      {
        id: 39,
        title: 'BIP-62: Dealing with Malleability',
        slug: 'bip-62',
        description: 'Rules to prevent third-party transaction modification.',
      },
      {
        id: 40,
        title: 'BIP-69: Lexicographical Indexing',
        slug: 'bip-69',
        description: 'Deterministic transaction input/output ordering.',
      },
      {
        id: 41,
        title: 'BIP-125: Opt-in Replace-by-Fee',
        slug: 'bip-125',
        description: 'Signaling that a transaction may be replaced.',
      },
      {
        id: 42,
        title: 'BIP-174: PSBT v0',
        slug: 'bip-174',
        description: 'Partially Signed Bitcoin Transactions format.',
      },
      {
        id: 43,
        title: 'BIP-370: PSBT Version 2',
        slug: 'bip-370',
        description: 'Enhanced PSBT with more flexible construction.',
      },
      {
        id: 44,
        title: 'BIP-371: Taproot Fields for PSBT',
        slug: 'bip-371',
        description: 'PSBT extensions for Taproot transactions.',
      },
      {
        id: 45,
        title: 'BIP-118: SIGHASH_ANYPREVOUT',
        slug: 'bip-118',
        description: 'Signature hash flag for rebindable transactions.',
      },
      {
        id: 46,
        title: 'BIP-119: OP_CHECKTEMPLATEVERIFY',
        slug: 'bip-119',
        description: 'Constraining outputs with hash commitments.',
      },
      {
        id: 47,
        title: 'BIP-327: MuSig2',
        slug: 'bip-327',
        description: 'Two-round multi-signature scheme for Schnorr.',
      },
      {
        id: 48,
        title: 'BIP-352: Silent Payments',
        slug: 'bip-352',
        description: 'Static addresses with no address reuse.',
      },
    ],
  },
  // ==========================================================================
  // Part 5: Address Encoding (10 sections)
  // ==========================================================================
  {
    id: 5,
    title: 'Address Encoding',
    slug: 'address-encoding',
    sections: [
      {
        id: 49,
        title: 'BIP-21: URI Scheme',
        slug: 'bip-21',
        description: 'Bitcoin payment URIs (bitcoin:address?amount=...).',
      },
      {
        id: 50,
        title: 'BIP-70: Payment Protocol (Deprecated)',
        slug: 'bip-70',
        description: 'Payment request messages and protocol (historical).',
      },
      {
        id: 51,
        title: 'BIP-71: Payment Protocol MIME Types',
        slug: 'bip-71',
        description: 'MIME types for payment protocol messages.',
      },
      {
        id: 52,
        title: 'BIP-72: Payment Protocol URIs',
        slug: 'bip-72',
        description: 'URI extensions for payment requests.',
      },
      {
        id: 53,
        title: 'BIP-173: Bech32 Addresses',
        slug: 'bip-173',
        description: 'Native SegWit address format with error detection.',
      },
      {
        id: 54,
        title: 'BIP-350: Bech32m',
        slug: 'bip-350',
        description: 'Modified Bech32 for SegWit v1+ addresses.',
      },
      {
        id: 55,
        title: 'BIP-78: Payjoin',
        slug: 'bip-78',
        description: 'Pay-to-endpoint protocol for privacy.',
      },
      {
        id: 56,
        title: 'BIP-47: Reusable Payment Codes',
        slug: 'bip-47',
        description: 'Stealth addresses via payment codes.',
      },
      {
        id: 57,
        title: 'BIP-75: Out of Band Address Exchange',
        slug: 'bip-75',
        description: 'Secure address exchange with authentication.',
      },
      {
        id: 58,
        title: 'BIP-322: Generic Message Signing',
        slug: 'bip-322',
        description: 'Proof of funds via signed messages.',
      },
    ],
  },
  // ==========================================================================
  // Part 6: Network & Peer Services (14 sections)
  // ==========================================================================
  {
    id: 6,
    title: 'Network & Peer Services',
    slug: 'network-peer-services',
    sections: [
      {
        id: 59,
        title: 'BIP-14: Protocol Version and User Agent',
        slug: 'bip-14',
        description: 'Version message format and user agent strings.',
      },
      {
        id: 60,
        title: 'BIP-31: Pong Message',
        slug: 'bip-31',
        description: 'Connection liveness testing with ping/pong.',
      },
      {
        id: 61,
        title: 'BIP-35: Mempool Message',
        slug: 'bip-35',
        description: 'Requesting mempool transaction inventory.',
      },
      {
        id: 62,
        title: 'BIP-37: Bloom Filtering (Deprecated)',
        slug: 'bip-37',
        description: 'Lightweight client filtering (historical).',
      },
      {
        id: 63,
        title: 'BIP-61: Reject P2P Message',
        slug: 'bip-61',
        description: 'Protocol-level rejection notifications.',
      },
      {
        id: 64,
        title: 'BIP-111: NODE_BLOOM Service Bit',
        slug: 'bip-111',
        description: 'Advertising Bloom filter support.',
      },
      {
        id: 65,
        title: 'BIP-130: sendheaders Message',
        slug: 'bip-130',
        description: 'Direct header announcement instead of inv.',
      },
      {
        id: 66,
        title: 'BIP-133: feefilter Message',
        slug: 'bip-133',
        description: 'Filtering transactions by fee rate.',
      },
      {
        id: 67,
        title: 'BIP-152: Compact Block Relay',
        slug: 'bip-152',
        description: 'Efficient block propagation using short IDs.',
      },
      {
        id: 68,
        title: 'BIP-155: addrv2 Message',
        slug: 'bip-155',
        description: 'Extended address format for Tor v3 and I2P.',
      },
      {
        id: 69,
        title: 'BIP-157: Client Side Block Filtering',
        slug: 'bip-157',
        description: 'Light client protocol with Golomb filters.',
      },
      {
        id: 70,
        title: 'BIP-158: Compact Block Filters',
        slug: 'bip-158',
        description: 'Golomb-coded set filters for blocks.',
      },
      {
        id: 71,
        title: 'BIP-324: Version 2 P2P Transport',
        slug: 'bip-324',
        description: 'Encrypted and authenticated peer connections.',
      },
      {
        id: 72,
        title: 'BIP-330: Erlay',
        slug: 'bip-330',
        description: 'Transaction announcement reconciliation.',
      },
    ],
  },
  // ==========================================================================
  // Part 7: Mining & Validation (10 sections)
  // ==========================================================================
  {
    id: 7,
    title: 'Mining & Validation',
    slug: 'mining-validation',
    sections: [
      {
        id: 73,
        title: 'BIP-22: getblocktemplate Fundamentals',
        slug: 'bip-22',
        description: 'Block template construction for miners.',
      },
      {
        id: 74,
        title: 'BIP-23: getblocktemplate Pooled Mining',
        slug: 'bip-23',
        description: 'Extensions for mining pools.',
      },
      {
        id: 75,
        title: 'BIP-30: Duplicate Transactions',
        slug: 'bip-30',
        description: 'Preventing duplicate transaction IDs.',
      },
      {
        id: 76,
        title: 'BIP-42: Finite Monetary Supply',
        slug: 'bip-42',
        description: 'Ensuring the 21 million cap is enforced.',
      },
      {
        id: 77,
        title: 'BIP-50: March 2013 Chain Fork',
        slug: 'bip-50',
        description: 'Post-mortem of an accidental hard fork.',
      },
      {
        id: 78,
        title: 'BIP-91: Reduced Threshold SegWit MASF',
        slug: 'bip-91',
        description: 'Lowered activation threshold for SegWit.',
      },
      {
        id: 79,
        title: 'BIP-145: getblocktemplate for SegWit',
        slug: 'bip-145',
        description: 'Block template extensions for SegWit.',
      },
      {
        id: 80,
        title: 'BIP-320: nVersion Bits General Purpose',
        slug: 'bip-320',
        description: 'Using version bits for mining coordination.',
      },
      {
        id: 81,
        title: 'Stratum V2 Overview',
        slug: 'stratum-v2',
        description: 'Modern mining protocol (not a BIP but essential).',
      },
      {
        id: 82,
        title: 'Mining Pool Protocols',
        slug: 'mining-pools',
        description: 'Overview of pool communication standards.',
      },
    ],
  },
  // ==========================================================================
  // Part 8: Lightning & Layer 2 (12 sections)
  // ==========================================================================
  {
    id: 8,
    title: 'Lightning & Layer 2',
    slug: 'lightning-layer2',
    sections: [
      {
        id: 83,
        title: 'Introduction to Layer 2',
        slug: 'layer2-intro',
        description: 'Scaling Bitcoin beyond the base layer.',
      },
      {
        id: 84,
        title: 'BIP-199: Hashed Time-Locked Contracts',
        slug: 'bip-199',
        description: 'The cryptographic primitive enabling Lightning.',
      },
      {
        id: 85,
        title: 'Lightning Network Overview',
        slug: 'lightning-overview',
        description: 'How the Lightning Network works (BOLTs introduction).',
      },
      {
        id: 86,
        title: 'BIP-118 Deep Dive: Eltoo',
        slug: 'bip-118-eltoo',
        description: 'ANYPREVOUT enabling simplified channel updates.',
      },
      {
        id: 87,
        title: 'BIP-119 Deep Dive: Vaults',
        slug: 'bip-119-vaults',
        description: 'Using CTV for secure custody solutions.',
      },
      {
        id: 88,
        title: 'Channel Factories',
        slug: 'channel-factories',
        description: 'Scaling Lightning with shared UTXO ownership.',
      },
      {
        id: 89,
        title: 'Statechains',
        slug: 'statechains',
        description: 'Off-chain UTXO transfers via key delegation.',
      },
      {
        id: 90,
        title: 'RGB Protocol',
        slug: 'rgb-protocol',
        description: 'Client-validated contracts on Bitcoin.',
      },
      {
        id: 91,
        title: 'Fedimint and E-Cash',
        slug: 'fedimint-ecash',
        description: 'Federated Chaumian mints for Bitcoin.',
      },
      {
        id: 92,
        title: 'Sidechains (BIP-301/302)',
        slug: 'bip-301-302',
        description: 'Drivechain proposals for two-way pegged sidechains.',
      },
      {
        id: 93,
        title: 'Future BIP Proposals',
        slug: 'future-bips',
        description: 'Active proposals and research directions.',
      },
      {
        id: 94,
        title: 'Course Summary & Resources',
        slug: 'summary-resources',
        description: 'Review and further reading.',
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
