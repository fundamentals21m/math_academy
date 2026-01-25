// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast, conference, and video transcripts related to
// Bitcoin Improvement Proposals (BIPs) - consensus rules, wallet standards,
// and protocol development.
// Sources manually curated from developer podcasts and technical talks.
// =============================================================================

export interface Speaker {
  name: string;
  role?: string;
}

export interface Transcript {
  id: string;
  title: string;
  source: string;
  date: string;
  speakers: Speaker[];
  topics: string[];
  sourceUrl: string;
  duration?: string;
  description: string;
}

export const transcripts: Transcript[] = [
  // ==========================================================================
  // CORE BITCOIN DEVELOPMENT
  // ==========================================================================
  {
    id: 'wuille-chaincode-part1',
    title: 'Pieter Wuille: Headers First, Ultraprune, and BIP66',
    source: 'The Chaincode Podcast',
    date: '2020-01-28',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
      { name: 'Jonas', role: 'Chaincode Podcast Host' },
      { name: 'John', role: 'Chaincode Podcast Host' },
    ],
    topics: ['BIP66', 'libsecp256k1', 'UTXO Set', 'Headers First Sync', 'Consensus'],
    sourceUrl: 'https://btctranscripts.com/chaincode-podcast/2020-01-28-pieter-wuille-part1',
    duration: '~1h',
    description: 'Pieter Wuille discusses his major contributions including headers-first synchronization, the ultraprune UTXO database, BIP66 strict DER signatures, and the creation of libsecp256k1.',
  },
  {
    id: 'wuille-chaincode-part2',
    title: 'Pieter Wuille: OpenSSL, Consensus Failures, and Bitcoin Design',
    source: 'The Chaincode Podcast',
    date: '2020-01-28',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
      { name: 'Jonas', role: 'Chaincode Podcast Host' },
      { name: 'John', role: 'Chaincode Podcast Host' },
    ],
    topics: ['Consensus Failures', 'OpenSSL', 'P2SH', 'SegWit', 'Taproot'],
    sourceUrl: 'https://btctranscripts.com/chaincode-podcast/2020-01-28-pieter-wuille-part2',
    duration: '~1h',
    description: 'Continuation discussing the 2013 consensus failure, OpenSSL vulnerabilities, and reflections on Bitcoin\'s original design including P2SH, SegWit, and future work on Taproot.',
  },

  // ==========================================================================
  // SCHNORR, MUSIG & THRESHOLD SIGNATURES
  // ==========================================================================
  {
    id: 'wuille-ruffing-schnorr-musig',
    title: 'Schnorr, Multi-Signatures, MuSig, and FROST',
    source: 'The Chaincode Podcast',
    date: '2022-12-15',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
      { name: 'Tim Ruffing', role: 'Blockstream Researcher' },
    ],
    topics: ['BIP340', 'Schnorr Signatures', 'MuSig', 'FROST', 'Threshold Signatures'],
    sourceUrl: 'https://podcast.chaincode.com/2022/12/15/pieter-wuille-tim-ruffing-schnorr-musig-part1.html',
    duration: '~1h',
    description: 'Deep dive into Schnorr signatures (BIP340), why they\'re preferable to ECDSA, MuSig multi-signature protocols, rogue key attacks, and the FROST threshold signature scheme.',
  },

  // ==========================================================================
  // BIP324 - P2P ENCRYPTION
  // ==========================================================================
  {
    id: 'bip324-p2p-encryption',
    title: 'BIP324: Encrypted P2P Transport for Bitcoin',
    source: 'Stephan Livera Podcast',
    date: '2022-11-13',
    speakers: [
      { name: 'Dhruv', role: 'BIP324 Implementer' },
      { name: 'Pieter Wuille', role: 'BIP324 Co-author' },
      { name: 'Tim Ruffing', role: 'BIP324 Co-author' },
      { name: 'Stephan Livera', role: 'Host' },
    ],
    topics: ['BIP324', 'P2P Protocol', 'Encryption', 'Privacy', 'Censorship Resistance'],
    sourceUrl: 'https://btctranscripts.com/stephan-livera-podcast/2022-11-13-dhruv-pieter-wuille-and-tim-ruffing',
    duration: '~1h 15m',
    description: 'Discussion of BIP324 encrypted P2P transport, its evolution from BIP150/151, how opportunistic encryption works without authentication, and implications for privacy and censorship resistance.',
  },

  // ==========================================================================
  // BITCOIN CORE DEVELOPMENT
  // ==========================================================================
  {
    id: 'gloria-zhao-maintainers',
    title: 'What Do Bitcoin Core Maintainers Do?',
    source: 'Stephan Livera Podcast',
    date: '2022-08-11',
    speakers: [
      { name: 'Gloria Zhao', role: 'Bitcoin Core Maintainer' },
      { name: 'Stephan Livera', role: 'Host' },
    ],
    topics: ['Bitcoin Core', 'Maintainers', 'Package Relay', 'Mempool', 'Protocol Development'],
    sourceUrl: 'https://stephanlivera.com/episode/404/',
    duration: '~1h',
    description: 'Gloria Zhao explains the role of Bitcoin Core maintainers, the code review process, mempool fundamentals, package relay for fee bumping, and protecting Layer 2 protocols from pinning attacks.',
  },

  // ==========================================================================
  // BIP GOVERNANCE
  // ==========================================================================
  {
    id: 'optech-bip-editors-2024',
    title: 'New BIP Editors and the BIP Process',
    source: 'Bitcoin Optech Podcast',
    date: '2024-04-25',
    speakers: [
      { name: 'Mark "Murch" Erhardt', role: 'BIP Editor, Chaincode Labs' },
      { name: 'Mike Schmidt', role: 'Optech Contributor, Brink' },
      { name: 'Gregory Sanders', role: 'Bitcoin Developer' },
    ],
    topics: ['BIP Process', 'BIP Editors', 'BIP2', 'Governance', 'Weak Blocks'],
    sourceUrl: 'https://bitcoinops.org/en/podcast/2024/04/25/',
    duration: '~1h',
    description: 'Discussion of the five new BIP editors appointed in 2024, updates to the BIP process including BIP2 revisions, and technical topics like weak blocks for improved propagation.',
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getTranscriptById(id: string): Transcript | undefined {
  return transcripts.find(t => t.id === id);
}

export function getTranscriptsByTopic(topic: string): Transcript[] {
  return transcripts.filter(t =>
    t.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  );
}

export function getTranscriptsBySpeaker(speakerName: string): Transcript[] {
  return transcripts.filter(t =>
    t.speakers.some(s => s.name.toLowerCase().includes(speakerName.toLowerCase()))
  );
}

export function getAllTopics(): string[] {
  const topics = new Set<string>();
  transcripts.forEach(t => t.topics.forEach(topic => topics.add(topic)));
  return Array.from(topics).sort();
}

export function getAllSpeakers(): Speaker[] {
  const speakerMap = new Map<string, Speaker>();
  transcripts.forEach(t => {
    t.speakers.forEach(s => {
      if (!speakerMap.has(s.name)) {
        speakerMap.set(s.name, s);
      }
    });
  });
  return Array.from(speakerMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getTranscriptIndex(id: string): number {
  return transcripts.findIndex(t => t.id === id);
}

export function getAdjacentTranscripts(id: string): { prev: Transcript | null; next: Transcript | null } {
  const index = getTranscriptIndex(id);
  return {
    prev: index > 0 ? transcripts[index - 1] : null,
    next: index < transcripts.length - 1 ? transcripts[index + 1] : null,
  };
}
