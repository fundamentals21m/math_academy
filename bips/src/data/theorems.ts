/** Base fields shared by all theorem entries */
interface TheoremEntryBase {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
}

/** Theorem entry without a proof */
interface TheoremEntryWithoutProof extends TheoremEntryBase {
  hasProof?: false;
  proof?: never;
}

/** Theorem entry with a proof - proof content is REQUIRED when hasProof is true */
interface TheoremEntryWithProof extends TheoremEntryBase {
  hasProof: true;
  /** LaTeX-formatted proof content - REQUIRED when hasProof is true */
  proof: string;
}

/**
 * Discriminated union type for theorem entries.
 * Enforces that when hasProof: true, proof content must be provided.
 */
export type TheoremEntry = TheoremEntryWithoutProof | TheoremEntryWithProof;

export const theorems: TheoremEntry[] = [
  // =============================================================================
  // BIP PROCESS & GOVERNANCE
  // =============================================================================
  {
    id: 'def-bip',
    title: 'Bitcoin Improvement Proposal (BIP)',
    statement: 'A BIP is a design document providing information to the Bitcoin community, or describing a new feature, process, or environment affecting Bitcoin. BIPs are the primary mechanism for proposing major changes to the Bitcoin protocol.',
    sectionId: 0,
    sectionTitle: 'Introduction to BIPs',
    category: 'BIP Process',
    type: 'definition',
  },
  {
    id: 'def-bip-types',
    title: 'BIP Types',
    statement: 'BIPs fall into three categories: (1) Standards Track - protocol changes affecting interoperability; (2) Informational - design issues or general guidelines; (3) Process - procedures or governance changes.',
    sectionId: 1,
    sectionTitle: 'BIP-1: Purpose and Guidelines',
    category: 'BIP Process',
    type: 'definition',
  },
  {
    id: 'def-bip-status',
    title: 'BIP Status Lifecycle',
    statement: 'A BIP progresses through: Draft → Proposed → Final (or Rejected/Withdrawn/Deferred/Replaced). Final status indicates community consensus and implementation.',
    sectionId: 5,
    sectionTitle: 'BIP Status Lifecycle',
    category: 'BIP Process',
    type: 'definition',
  },

  // =============================================================================
  // CRYPTOGRAPHIC PRIMITIVES
  // =============================================================================
  {
    id: 'def-sha256',
    title: 'SHA-256 Hash Function',
    statement: 'SHA-256 is a cryptographic hash function producing a 256-bit (32-byte) digest. Bitcoin uses double-SHA256 (SHA256d): $H(x) = \\text{SHA256}(\\text{SHA256}(x))$ for transaction and block hashing.',
    sectionId: 0,
    sectionTitle: 'Introduction to BIPs',
    category: 'Cryptographic Primitives',
    type: 'definition',
  },
  {
    id: 'def-ecdsa',
    title: 'ECDSA Signature Scheme',
    statement: 'ECDSA (Elliptic Curve Digital Signature Algorithm) on secp256k1 creates signatures $(r, s)$ where $r$ is derived from a random nonce point and $s = k^{-1}(z + rd) \\mod n$, with $z$ the message hash, $d$ the private key, and $n$ the curve order.',
    sectionId: 12,
    sectionTitle: 'BIP-66: Strict DER Signatures',
    category: 'Cryptographic Primitives',
    type: 'definition',
  },
  {
    id: 'def-schnorr',
    title: 'Schnorr Signature Scheme',
    statement: 'A Schnorr signature for public key $P = dG$ on message $m$ is $(R, s)$ where $R = kG$ for random nonce $k$, and $s = k + H(R \\| P \\| m) \\cdot d$. Verification checks $sG = R + H(R \\| P \\| m) \\cdot P$.',
    sectionId: 20,
    sectionTitle: 'BIP-340: Schnorr Signatures',
    category: 'Cryptographic Primitives',
    type: 'definition',
  },
  {
    id: 'thm-schnorr-linearity',
    title: 'Schnorr Signature Linearity',
    statement: 'Schnorr signatures are linear: for public keys $P_1, P_2$ with signatures $s_1, s_2$ on the same message, $(R_1 + R_2, s_1 + s_2)$ is a valid signature for $P_1 + P_2$. This enables MuSig aggregation.',
    sectionId: 47,
    sectionTitle: 'BIP-327: MuSig2',
    category: 'Cryptographic Primitives',
    type: 'theorem',
  },
  {
    id: 'def-tagged-hash',
    title: 'Tagged Hash (BIP-340)',
    statement: 'Tagged hashes prevent cross-protocol attacks: $\\text{TaggedHash}(\\text{tag}, x) = \\text{SHA256}(\\text{SHA256}(\\text{tag}) \\| \\text{SHA256}(\\text{tag}) \\| x)$. Different tags yield independent hash functions.',
    sectionId: 20,
    sectionTitle: 'BIP-340: Schnorr Signatures',
    category: 'Cryptographic Primitives',
    type: 'definition',
  },

  // =============================================================================
  // CONSENSUS RULES
  // =============================================================================
  {
    id: 'def-soft-fork',
    title: 'Soft Fork',
    statement: 'A soft fork tightens consensus rules such that blocks valid under new rules are also valid under old rules. Old nodes continue to validate the chain, but may not understand new transaction types.',
    sectionId: 6,
    sectionTitle: 'How Bitcoin Upgrades Work',
    category: 'Consensus Rules',
    type: 'definition',
  },
  {
    id: 'def-hard-fork',
    title: 'Hard Fork',
    statement: 'A hard fork loosens or changes consensus rules such that blocks valid under new rules may be invalid under old rules. This causes a permanent chain split unless all nodes upgrade.',
    sectionId: 6,
    sectionTitle: 'How Bitcoin Upgrades Work',
    category: 'Consensus Rules',
    type: 'definition',
  },
  {
    id: 'def-version-bits',
    title: 'Version Bits Signaling (BIP-9)',
    statement: 'Miners signal soft fork support by setting specific bits in block headers. Activation requires 95% signaling over a 2016-block difficulty period, with timeout preventing indefinite waiting.',
    sectionId: 8,
    sectionTitle: 'BIP-9: Version Bits',
    category: 'Consensus Rules',
    type: 'definition',
  },
  {
    id: 'def-segwit',
    title: 'Segregated Witness (SegWit)',
    statement: 'SegWit separates signature data into a witness structure outside the base transaction, fixing malleability and enabling a 4MB block weight limit: $\\text{weight} = 3 \\times \\text{base size} + \\text{total size}$.',
    sectionId: 16,
    sectionTitle: 'BIP-141: Segregated Witness',
    category: 'Consensus Rules',
    type: 'definition',
  },
  {
    id: 'def-taproot',
    title: 'Taproot (SegWit v1)',
    statement: 'Taproot commits to both a key path (direct Schnorr signature) and script path (Merkle tree of scripts) in a single 32-byte output key: $Q = P + H(P \\| \\text{merkle\\_root}) \\cdot G$.',
    sectionId: 21,
    sectionTitle: 'BIP-341: Taproot',
    category: 'Consensus Rules',
    type: 'definition',
  },

  // =============================================================================
  // SCRIPT OPCODES
  // =============================================================================
  {
    id: 'def-op-cltv',
    title: 'OP_CHECKLOCKTIMEVERIFY (BIP-65)',
    statement: 'OP_CLTV compares the top stack item to the transaction nLockTime. If nLockTime < stack value, the script fails. Enables absolute time locks: "cannot spend until block N or time T".',
    sectionId: 11,
    sectionTitle: 'BIP-65: OP_CHECKLOCKTIMEVERIFY',
    category: 'Script Opcodes',
    type: 'definition',
  },
  {
    id: 'def-op-csv',
    title: 'OP_CHECKSEQUENCEVERIFY (BIP-112)',
    statement: 'OP_CSV compares the top stack item to the input nSequence. Enables relative time locks: "cannot spend until N blocks/512 seconds after the input was confirmed".',
    sectionId: 14,
    sectionTitle: 'BIP-112: OP_CHECKSEQUENCEVERIFY',
    category: 'Script Opcodes',
    type: 'definition',
  },
  {
    id: 'def-op-ctv',
    title: 'OP_CHECKTEMPLATEVERIFY (BIP-119)',
    statement: 'OP_CTV verifies that the spending transaction matches a committed template hash, enabling covenants: restrictions on how funds can be spent, including outputs, amounts, and structure.',
    sectionId: 46,
    sectionTitle: 'BIP-119: OP_CHECKTEMPLATEVERIFY',
    category: 'Script Opcodes',
    type: 'definition',
  },

  // =============================================================================
  // KEY DERIVATION
  // =============================================================================
  {
    id: 'def-hd-wallet',
    title: 'Hierarchical Deterministic Wallet (BIP-32)',
    statement: 'HD wallets derive all keys from a single seed using a tree structure. Child keys are derived: $\\text{CKD}(k_{\\text{par}}, c_{\\text{par}}, i) = \\text{HMAC-SHA512}(c_{\\text{par}}, \\text{data}_i)$ where data depends on hardened vs. normal derivation.',
    sectionId: 23,
    sectionTitle: 'BIP-32: HD Wallets',
    category: 'Key Derivation',
    type: 'definition',
  },
  {
    id: 'def-hardened-derivation',
    title: 'Hardened vs. Normal Derivation',
    statement: 'Normal derivation ($i < 2^{31}$) uses the public key, enabling xpub-based key generation. Hardened derivation ($i \\geq 2^{31}$) uses the private key, providing stronger isolation between branches.',
    sectionId: 23,
    sectionTitle: 'BIP-32: HD Wallets',
    category: 'Key Derivation',
    type: 'definition',
  },
  {
    id: 'def-mnemonic',
    title: 'Mnemonic Seed Phrase (BIP-39)',
    statement: 'A mnemonic encodes entropy as 12-24 words from a 2048-word list. The final word includes a checksum. PBKDF2 derives the seed: $\\text{seed} = \\text{PBKDF2}(\\text{mnemonic}, \\text{"mnemonic"} + \\text{passphrase}, 2048, 64)$.',
    sectionId: 25,
    sectionTitle: 'BIP-39: Mnemonic Seeds',
    category: 'Key Derivation',
    type: 'definition',
  },
  {
    id: 'def-bip44-path',
    title: 'BIP-44 Derivation Path',
    statement: 'Standard path: $m / 44\' / \\text{coin}\' / \\text{account}\' / \\text{change} / \\text{index}$. The purpose field (44\') indicates BIP-44, coin type (0\' for Bitcoin), and hardened account isolation.',
    sectionId: 27,
    sectionTitle: 'BIP-44: Multi-Account Hierarchy',
    category: 'Key Derivation',
    type: 'definition',
  },

  // =============================================================================
  // ADDRESS ENCODING
  // =============================================================================
  {
    id: 'def-p2sh',
    title: 'Pay-to-Script-Hash (BIP-16)',
    statement: 'P2SH addresses encode the hash of a script (HASH160). The spender provides the script and data satisfying it. Address format: base58check with version byte 0x05, starting with "3".',
    sectionId: 9,
    sectionTitle: 'BIP-16: Pay to Script Hash',
    category: 'Address Encoding',
    type: 'definition',
  },
  {
    id: 'def-bech32',
    title: 'Bech32 Address Encoding (BIP-173)',
    statement: 'Bech32 uses a 32-character alphabet (no 1, b, i, o) with BCH error detection. Native SegWit addresses: "bc1q..." for v0 (P2WPKH/P2WSH). Detects up to 4 errors, locates up to 2.',
    sectionId: 53,
    sectionTitle: 'BIP-173: Bech32',
    category: 'Address Encoding',
    type: 'definition',
  },
  {
    id: 'def-bech32m',
    title: 'Bech32m (BIP-350)',
    statement: 'Bech32m modifies the BCH constant from 1 to 0x2bc830a3 for witness versions 1+. This fixes a length-extension weakness in original Bech32. Taproot addresses: "bc1p...".',
    sectionId: 54,
    sectionTitle: 'BIP-350: Bech32m',
    category: 'Address Encoding',
    type: 'definition',
  },

  // =============================================================================
  // TRANSACTION FORMATS
  // =============================================================================
  {
    id: 'def-psbt',
    title: 'Partially Signed Bitcoin Transaction (BIP-174)',
    statement: 'PSBT is a portable format for unsigned/partially-signed transactions. Contains global data, per-input data (UTXOs, scripts, signatures), and per-output data. Enables hardware wallet and multisig coordination.',
    sectionId: 42,
    sectionTitle: 'BIP-174: PSBT',
    category: 'Transaction Formats',
    type: 'definition',
  },
  {
    id: 'def-rbf',
    title: 'Replace-by-Fee (BIP-125)',
    statement: 'Opt-in RBF allows unconfirmed transactions to be replaced by versions with higher fees. Signaled by nSequence < 0xFFFFFFFE. Replacements must pay higher total and absolute fees.',
    sectionId: 41,
    sectionTitle: 'BIP-125: Replace-by-Fee',
    category: 'Transaction Formats',
    type: 'definition',
  },
  {
    id: 'def-malleability',
    title: 'Transaction Malleability',
    statement: 'Malleability occurs when a transaction\'s txid can be changed without invalidating signatures. SegWit fixes this by moving signatures to a separate witness structure not included in the txid.',
    sectionId: 39,
    sectionTitle: 'BIP-62: Malleability',
    category: 'Transaction Formats',
    type: 'definition',
  },

  // =============================================================================
  // NETWORK PROTOCOL
  // =============================================================================
  {
    id: 'def-compact-blocks',
    title: 'Compact Block Relay (BIP-152)',
    statement: 'Compact blocks transmit only short transaction IDs (6 bytes) since most transactions are already in mempools. Reduces block propagation bandwidth by ~99% in typical conditions.',
    sectionId: 67,
    sectionTitle: 'BIP-152: Compact Blocks',
    category: 'Network Protocol',
    type: 'definition',
  },
  {
    id: 'def-v2-transport',
    title: 'Encrypted P2P Transport (BIP-324)',
    statement: 'BIP-324 encrypts P2P connections using ChaCha20-Poly1305 after an ECDH key exchange. Prevents passive surveillance and enables optional authentication of peer identity.',
    sectionId: 71,
    sectionTitle: 'BIP-324: V2 Transport',
    category: 'Network Protocol',
    type: 'definition',
  },
  {
    id: 'def-neutrino',
    title: 'Compact Block Filters (BIP-157/158)',
    statement: 'Neutrino/BIP-157 clients download compact Golomb-coded set filters for each block. They can privately determine if blocks contain relevant transactions without downloading full blocks.',
    sectionId: 69,
    sectionTitle: 'BIP-157: Client Block Filtering',
    category: 'Network Protocol',
    type: 'definition',
  },

  // =============================================================================
  // LAYER 2 PROTOCOLS
  // =============================================================================
  {
    id: 'def-htlc',
    title: 'Hash Time-Locked Contract (BIP-199)',
    statement: 'An HTLC locks funds to a hash preimage reveal OR timeout: "Pay if you know $x$ where $H(x) = h$, else refund after time $T$". Enables trustless atomic swaps and Lightning payments.',
    sectionId: 84,
    sectionTitle: 'BIP-199: HTLCs',
    category: 'Layer 2',
    type: 'definition',
  },
  {
    id: 'def-lightning-channel',
    title: 'Lightning Payment Channel',
    statement: 'A payment channel is a 2-of-2 multisig with off-chain state updates. Commitment transactions allocate funds; HTLCs route payments. Either party can close by broadcasting the latest state.',
    sectionId: 85,
    sectionTitle: 'Lightning Network Overview',
    category: 'Layer 2',
    type: 'definition',
  },
  {
    id: 'def-sighash-apo',
    title: 'SIGHASH_ANYPREVOUT (BIP-118)',
    statement: 'APO/ANYPREVOUTANYSCRIPT signatures do not commit to the input being spent, only to amounts and scripts. Enables Eltoo: channels with a single update transaction that supersedes all prior states.',
    sectionId: 45,
    sectionTitle: 'BIP-118: ANYPREVOUT',
    category: 'Layer 2',
    type: 'definition',
  },
  {
    id: 'def-vault',
    title: 'Bitcoin Vault',
    statement: 'A vault is a covenant that enforces a time-delayed withdrawal path. If an attacker steals keys, the owner can use a recovery path to claw back funds before the delay expires.',
    sectionId: 87,
    sectionTitle: 'BIP-119 Deep Dive: Vaults',
    category: 'Layer 2',
    type: 'definition',
  },

  // =============================================================================
  // ADVANCED PROTOCOLS
  // =============================================================================
  {
    id: 'def-silent-payments',
    title: 'Silent Payments (BIP-352)',
    statement: 'Silent payments derive unique addresses from sender\'s inputs and recipient\'s static key: $P_{\\text{output}} = B + \\text{hash}(a \\cdot B) \\cdot G$. No address reuse, no interaction required.',
    sectionId: 48,
    sectionTitle: 'BIP-352: Silent Payments',
    category: 'Privacy',
    type: 'definition',
  },
  {
    id: 'def-payjoin',
    title: 'Payjoin (BIP-78)',
    statement: 'Payjoin has both sender and receiver contribute inputs to a transaction. Breaks the common-input-ownership heuristic, improving privacy for both parties.',
    sectionId: 55,
    sectionTitle: 'BIP-78: Payjoin',
    category: 'Privacy',
    type: 'definition',
  },
  {
    id: 'def-musig2',
    title: 'MuSig2 Aggregated Signatures (BIP-327)',
    statement: 'MuSig2 creates a single Schnorr signature for multiple parties. Aggregate key $\\tilde{P} = \\sum a_i P_i$ with coefficients preventing rogue-key attacks. Two-round signing with precomputed nonces.',
    sectionId: 47,
    sectionTitle: 'BIP-327: MuSig2',
    category: 'Cryptographic Primitives',
    type: 'definition',
  },
  {
    id: 'def-output-descriptors',
    title: 'Output Script Descriptors (BIP-380)',
    statement: 'Descriptors are human-readable scripts descriptions: wpkh([fingerprint/path]xpub/0/*). Fully specify how to derive addresses and sign, replacing ambiguous xpub-only backups.',
    sectionId: 34,
    sectionTitle: 'BIP-380: Output Descriptors',
    category: 'Key Derivation',
    type: 'definition',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
