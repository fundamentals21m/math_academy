// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to secp256k1,
// Schnorr signatures, MuSig, adaptor signatures, and threshold signatures.
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
  // LIBSECP256K1 CORE
  // ==========================================================================
  {
    id: 'libsec-panel',
    title: 'Libsecp256k1 Panel Discussion',
    source: 'Bitcoin Review Podcast',
    date: '2023-09-08',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
      { name: 'Jonas Nick', role: 'Blockstream Cryptographer' },
      { name: 'Lloyd Fournier', role: 'Cryptographer' },
      { name: 'Jesse Posner', role: 'Block Inc.' },
    ],
    topics: ['libsecp256k1', 'OpenSSL', 'Side-Channel Attacks', 'Testing'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-review-podcast/libsecp256k1/',
    duration: '~2h',
    description: 'Deep dive into libsecp256k1 with its core maintainers discussing design philosophy, security considerations, and the transition away from OpenSSL.',
  },
  {
    id: 'libsec-origins',
    title: 'Origins of libsecp256k1',
    source: 'Chaincode Podcast',
    date: '2020-06-15',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
    ],
    topics: ['libsecp256k1', 'History', 'Design Decisions'],
    sourceUrl: 'https://btctranscripts.com/chaincode-labs/chaincode-podcast/2020-06-15-pieter-wuille/',
    duration: '~1h',
    description: 'Pieter Wuille discusses the origins and design of libsecp256k1, why it was created, and key implementation decisions.',
  },

  // ==========================================================================
  // SCHNORR SIGNATURES
  // ==========================================================================
  {
    id: 'schnorr-basics',
    title: 'Schnorr Signatures: From Theory to Practice',
    source: 'SF Bitcoin Devs',
    date: '2018-07-09',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
    ],
    topics: ['Schnorr Signatures', 'BIP340', 'Batch Verification'],
    sourceUrl: 'https://btctranscripts.com/sf-bitcoin-meetup/2018-07-09-schnorr-signatures/',
    duration: '~1h 15m',
    description: 'Comprehensive introduction to Schnorr signatures covering mathematical foundations, advantages over ECDSA, and Bitcoin integration plans.',
  },
  {
    id: 'schnorr-taproot',
    title: 'Taproot and Schnorr Multisignatures',
    source: 'London Bitcoin Devs',
    date: '2020-06-17',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
      { name: 'Michael Folkson', role: 'Moderator' },
    ],
    topics: ['Schnorr Signatures', 'Taproot', 'MuSig', 'Multi-Signatures'],
    sourceUrl: 'https://btctranscripts.com/london-bitcoin-devs/2020-06-17-tim-ruffing-schnorr-multisig/',
    duration: '~2h',
    description: 'Technical presentation on how Schnorr signatures enable efficient multisignature and threshold signature schemes compatible with Taproot.',
  },
  {
    id: 'schnorr-applications',
    title: 'Schnorr Applications',
    source: 'Advancing Bitcoin',
    date: '2020-02-06',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
    ],
    topics: ['Schnorr Signatures', 'MuSig', 'Threshold Signatures'],
    sourceUrl: 'https://btctranscripts.com/advancing-bitcoin/2020/2020-02-06-tim-ruffing-schnorr-applications/',
    duration: '~45m',
    description: 'Exploration of advanced applications enabled by Schnorr signatures including multi-signatures, threshold signatures, and adaptor signatures.',
  },

  // ==========================================================================
  // MUSIG
  // ==========================================================================
  {
    id: 'musig-overview',
    title: 'MuSig: Secure Key Aggregation',
    source: 'Chaincode Podcast',
    date: '2022-03-15',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
      { name: 'Jonas Nick', role: 'Blockstream Cryptographer' },
    ],
    topics: ['MuSig', 'MuSig2', 'Key Aggregation', 'Multi-Signatures'],
    sourceUrl: 'https://btctranscripts.com/chaincode-labs/chaincode-podcast/2022-03-15-musig/',
    duration: '~1h 30m',
    description: 'In-depth discussion of MuSig and MuSig2 protocols, their security proofs, and practical implementation considerations.',
  },
  {
    id: 'musig2-deep-dive',
    title: 'MuSig2: Two-Round Multi-Signatures',
    source: 'Bitcoin Optech',
    date: '2021-04-14',
    speakers: [
      { name: 'Jonas Nick', role: 'Blockstream Cryptographer' },
    ],
    topics: ['MuSig2', 'Multi-Signatures', 'Two-Round Protocol'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-optech/2021-04-14-musig2/',
    duration: '~1h',
    description: 'Technical presentation on MuSig2, explaining how it achieves secure multi-signatures in just two rounds of communication.',
  },
  {
    id: 'musig-implementations',
    title: 'Implementing MuSig in Practice',
    source: 'Bitcoin Review Podcast',
    date: '2023-05-12',
    speakers: [
      { name: 'Jesse Posner', role: 'Block Inc.' },
    ],
    topics: ['MuSig', 'Implementation', 'secp256k1-zkp'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-review-podcast/musig-implementation/',
    duration: '~1h 15m',
    description: 'Practical considerations for implementing MuSig, including nonce handling, state management, and integration with existing systems.',
  },

  // ==========================================================================
  // ADAPTOR SIGNATURES
  // ==========================================================================
  {
    id: 'adaptor-intro',
    title: 'Introduction to Adaptor Signatures',
    source: 'London Bitcoin Devs',
    date: '2020-02-05',
    speakers: [
      { name: 'Lloyd Fournier', role: 'Cryptographer' },
    ],
    topics: ['Adaptor Signatures', 'Scriptless Scripts', 'Atomic Swaps'],
    sourceUrl: 'https://btctranscripts.com/london-bitcoin-devs/2020-02-05-lloyd-fournier-adaptor-signatures/',
    duration: '~1h 30m',
    description: 'Foundational talk on adaptor signatures explaining how they enable scriptless scripts and trustless atomic swaps.',
  },
  {
    id: 'adaptor-applications',
    title: 'Adaptor Signatures for DLCs',
    source: 'Chaincode Podcast',
    date: '2021-06-08',
    speakers: [
      { name: 'Nadav Kohen', role: 'Suredbits' },
    ],
    topics: ['Adaptor Signatures', 'DLCs', 'Oracle Protocols'],
    sourceUrl: 'https://btctranscripts.com/chaincode-labs/chaincode-podcast/2021-06-08-dlcs/',
    duration: '~1h',
    description: 'How adaptor signatures enable Discreet Log Contracts (DLCs) for trustless oracle-based betting and derivatives.',
  },

  // ==========================================================================
  // THRESHOLD SIGNATURES / FROST
  // ==========================================================================
  {
    id: 'frost-intro',
    title: 'FROST: Flexible Round-Optimized Schnorr Threshold Signatures',
    source: 'Bitcoin Optech',
    date: '2022-09-21',
    speakers: [
      { name: 'Jesse Posner', role: 'Block Inc.' },
    ],
    topics: ['FROST', 'Threshold Signatures', 'Multi-Party Computation'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-optech/2022-09-21-frost/',
    duration: '~1h',
    description: 'Introduction to FROST threshold signature scheme, its security model, and advantages over alternatives like ROAST.',
  },
  {
    id: 'frost-implementation',
    title: 'Implementing FROST for Bitcoin',
    source: 'Advancing Bitcoin',
    date: '2023-03-02',
    speakers: [
      { name: 'Jesse Posner', role: 'Block Inc.' },
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
    ],
    topics: ['FROST', 'libsecp256k1', 'Implementation'],
    sourceUrl: 'https://btctranscripts.com/advancing-bitcoin/2023/frost-implementation/',
    duration: '~45m',
    description: 'Technical discussion on implementing FROST in the libsecp256k1 ecosystem and considerations for production use.',
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
