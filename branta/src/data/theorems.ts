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
  // Core Concepts
  {
    id: 'def-pre-payment-verification',
    title: 'Pre-Payment Verification',
    statement: 'The process of confirming that a Bitcoin address or Lightning invoice belongs to the intended recipient before executing a transaction, without touching keys, addresses, or transaction flow.',
    sectionId: 0,
    sectionTitle: 'Welcome to Branta',
    category: 'Core Concepts',
    type: 'definition',
  },
  {
    id: 'def-transaction-irreversibility',
    title: 'Transaction Irreversibility',
    statement: 'A property of Bitcoin where confirmed transactions cannot be modified or reversed by any party, achieved through proof-of-work mining where each subsequent block makes previous transactions exponentially harder to change.',
    sectionId: 1,
    sectionTitle: 'The Problem: Transaction Risks',
    category: 'Core Concepts',
    type: 'definition',
  },
  {
    id: 'def-guardrail',
    title: 'Guardrail',
    statement: 'A pre-payment verification system that lets merchants register their Bitcoin addresses and Lightning invoices, enabling customers to verify payment destinations before executing transactions.',
    sectionId: 6,
    sectionTitle: 'What is Guardrail?',
    category: 'Core Concepts',
    type: 'definition',
  },

  // Security Threats
  {
    id: 'def-address-swap',
    title: 'Address Swap Attack',
    statement: 'An attack where a malicious actor replaces a legitimate Bitcoin address with one they control. The swap can occur in transit, on the clipboard, in a compromised website, or through modified software.',
    sectionId: 2,
    sectionTitle: 'Address Swap Attacks',
    category: 'Security Threats',
    type: 'definition',
  },
  {
    id: 'def-clipboard-hijacking',
    title: 'Clipboard Hijacking',
    statement: 'Malware that monitors the system clipboard and automatically replaces any copied Bitcoin address with an attacker-controlled address.',
    sectionId: 2,
    sectionTitle: 'Address Swap Attacks',
    category: 'Security Threats',
    type: 'definition',
  },
  {
    id: 'def-phishing',
    title: 'Phishing',
    statement: 'A social engineering attack where attackers impersonate trusted entities (exchanges, wallets, merchants) to trick victims into revealing sensitive information or sending funds to attacker-controlled addresses.',
    sectionId: 3,
    sectionTitle: 'Phishing & Social Engineering',
    category: 'Security Threats',
    type: 'definition',
  },
  {
    id: 'def-mitm',
    title: 'Man-in-the-Middle Attack (MITM)',
    statement: 'A cyberattack where an attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating. The attacker can eavesdrop, modify data, or inject malicious content.',
    sectionId: 4,
    sectionTitle: 'Man-in-the-Middle Attacks',
    category: 'Security Threats',
    type: 'definition',
  },
  {
    id: 'def-supply-chain',
    title: 'Supply Chain Attack',
    statement: 'A cyberattack that targets the less-secure elements in the supply network, such as third-party vendors, open-source libraries, build systems, or distribution channels. The attack is then propagated to all users of the compromised component.',
    sectionId: 5,
    sectionTitle: 'Supply Chain Compromises',
    category: 'Security Threats',
    type: 'definition',
  },

  // API Concepts
  {
    id: 'def-ttl',
    title: 'Time-to-Live (TTL)',
    statement: 'The duration in seconds that a payment registration remains active in Branta\'s system. After the TTL expires, the registration is automatically removed and verification queries will return 404 Not Found.',
    sectionId: 11,
    sectionTitle: 'TTL & Payment Lifecycle',
    category: 'API Concepts',
    type: 'definition',
  },
  {
    id: 'def-bearer-auth',
    title: 'Bearer Token Authentication',
    statement: 'An HTTP authentication scheme where the API key is passed in the Authorization header with the format "Bearer {api_key}". The key authenticates the client for API access.',
    sectionId: 8,
    sectionTitle: 'Authentication',
    category: 'API Concepts',
    type: 'definition',
  },
  {
    id: 'def-hmac',
    title: 'HMAC (Hash-based Message Authentication Code)',
    statement: 'A cryptographic signature that proves a message was created by someone with knowledge of a shared secret. Branta uses HMAC-SHA256 for parent platform authentication.',
    sectionId: 12,
    sectionTitle: 'Parent Platforms',
    category: 'API Concepts',
    type: 'definition',
  },

  // Advanced Concepts
  {
    id: 'def-parent-platform',
    title: 'Parent Platform',
    statement: 'A business that provides Bitcoin payment infrastructure to other businesses, such as payment processors, e-commerce platforms, and POS systems. Parent platforms register payments on behalf of their child merchants.',
    sectionId: 12,
    sectionTitle: 'Parent Platforms',
    category: 'Advanced Integration',
    type: 'definition',
  },
  {
    id: 'def-zero-knowledge',
    title: 'Zero-Knowledge Proof (ZKP)',
    statement: 'A cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself.',
    sectionId: 16,
    sectionTitle: 'Zero Knowledge Verification',
    category: 'Privacy',
    type: 'definition',
  },
  {
    id: 'def-commitment-scheme',
    title: 'Commitment Scheme',
    statement: 'A cryptographic method that allows you to "commit" to a value without revealing it. Later, you can "open" the commitment to prove what value you committed to.',
    sectionId: 16,
    sectionTitle: 'Zero Knowledge Verification',
    category: 'Privacy',
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
