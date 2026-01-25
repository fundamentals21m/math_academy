// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast, conference, and video transcripts related to
// zero-knowledge proofs, cryptographic commitments, and multi-signatures.
// Sources manually curated from academic lectures, podcasts, and industry talks.
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
  // ZERO-KNOWLEDGE PROOFS - FUNDAMENTALS
  // ==========================================================================
  {
    id: 'groth-zk-research',
    title: 'Exploring ZK Research with Jens Groth',
    source: 'Zero Knowledge Podcast',
    date: '2022-07-06',
    speakers: [
      { name: 'Jens Groth', role: 'Creator of Groth16, Director at DFINITY' },
      { name: 'Anna Rose', role: 'ZK Podcast Host' },
      { name: 'Kobi Gurkan', role: 'ZK Podcast Cohost' },
    ],
    topics: ['Groth16', 'zk-SNARKs', 'Zero-Knowledge Research', 'Subversion-ZK'],
    sourceUrl: 'https://zeroknowledge.fm/237-2/',
    duration: '~1h',
    description: 'The creator of Groth16 discusses his career trajectory, the cryptographic challenges he solved to create one of the most widely-used proving systems, and the future of zero-knowledge research.',
  },
  {
    id: 'groth16-ivc-nexus',
    title: 'Groth16, IVC and Formal Verification with Nexus',
    source: 'Zero Knowledge Podcast',
    date: '2024-08-14',
    speakers: [
      { name: 'Jens Groth', role: 'Chief Scientist at Nexus' },
      { name: 'Daniel Marin', role: 'Nexus' },
      { name: 'Anna Rose', role: 'ZK Podcast Host' },
    ],
    topics: ['Groth16', 'IVC', 'Formal Verification', 'zkVM', 'Commitment Schemes'],
    sourceUrl: 'https://zeroknowledge.fm/335-2/',
    duration: '~1h 15m',
    description: 'Jens Groth returns to discuss Groth16 standardization efforts, formal verification of ZK systems, and the architecture of Nexus\'s zkVM combining HyperNova IVC with proof compression.',
  },
  {
    id: 'boneh-zk-research-2024',
    title: 'Latest ZK Research with Dan Boneh',
    source: 'Zero Knowledge Podcast',
    date: '2024-11-27',
    speakers: [
      { name: 'Dan Boneh', role: 'Professor, Stanford University' },
      { name: 'Anna Rose', role: 'ZK Podcast Host' },
    ],
    topics: ['Lattice SNARKs', 'Content Provenance', 'FHE', 'Machine Learning', 'Folding Schemes'],
    sourceUrl: 'https://zeroknowledge.fm/345-2/',
    duration: '~1h',
    description: 'Dan Boneh covers cutting-edge ZK research including lattice-based SNARKs, ZK for content provenance, integration with FHE systems, and applications in machine learning verification.',
  },

  // ==========================================================================
  // BULLETPROOFS & RANGE PROOFS
  // ==========================================================================
  {
    id: 'bunz-bulletproofs',
    title: 'Bulletproofs and Verifiable Delay Functions',
    source: 'Zero Knowledge Podcast',
    date: '2018-08-29',
    speakers: [
      { name: 'Benedikt Bunz', role: 'Stanford Cryptographer, Bulletproofs Author' },
    ],
    topics: ['Bulletproofs', 'Range Proofs', 'VDFs', 'Confidential Transactions'],
    sourceUrl: 'https://zeroknowledge.fm/40-2/',
    duration: '~45m',
    description: 'The author of Bulletproofs explains how this novel zero-knowledge proof system enables efficient range proofs without trusted setup, revolutionizing confidential transactions.',
  },

  // ==========================================================================
  // MULTI-SIGNATURES
  // ==========================================================================
  {
    id: 'musig2-blockstream',
    title: 'MuSig2: Schnorr Multi-Signatures for Bitcoin',
    source: 'Stephan Livera Podcast',
    date: '2020-10-27',
    speakers: [
      { name: 'Jonas Nick', role: 'Blockstream Researcher' },
      { name: 'Tim Ruffing', role: 'Blockstream Researcher' },
      { name: 'Stephan Livera', role: 'Host' },
    ],
    topics: ['MuSig2', 'Schnorr Signatures', 'Multi-Signatures', 'Taproot', 'Lightning'],
    sourceUrl: 'https://stephanlivera.com/episode/222/',
    duration: '~1h 12m',
    description: 'The creators of MuSig2 explain how this two-round multi-signature scheme enables efficient N-of-N signing while maintaining security under concurrent sessions, with applications for Lightning and hardware wallets.',
  },

  // ==========================================================================
  // ZK ECOSYSTEM & TRENDS
  // ==========================================================================
  {
    id: 'zk-predictions-2024',
    title: 'Predictions: ZK in 2024',
    source: 'Zero Knowledge Podcast',
    date: '2024-01-10',
    speakers: [
      { name: 'Anna Rose', role: 'ZK Podcast Host' },
      { name: 'Guillermo Angeris', role: 'Cohost' },
      { name: 'Kobi Gurkan', role: 'Cohost' },
      { name: 'Nico Mohnblatt', role: 'Cohost' },
      { name: 'Tarun Chitra', role: 'Cohost' },
    ],
    topics: ['ZK Trends', 'Research Predictions', 'Applications', 'Industry Outlook'],
    sourceUrl: 'https://zeroknowledge.fm/306-2/',
    duration: '~1h 30m',
    description: 'The ZK Podcast cohosts share forecasts for zero-knowledge cryptography in 2024, covering emerging research, killer applications, best and worst case scenarios, and potential black swan events.',
  },
  {
    id: 'zk-review-2024',
    title: 'ZK in Review: Decoding 2024 & Predicting 2025',
    source: 'Zero Knowledge Podcast',
    date: '2024-12-23',
    speakers: [
      { name: 'Anna Rose', role: 'ZK Podcast Host' },
      { name: 'Tarun Chitra', role: 'Cohost' },
      { name: 'Nico Mohnblatt', role: 'Cohost' },
      { name: 'Guillermo Angeris', role: 'Cohost' },
    ],
    topics: ['Circle STARKs', 'Lattice Cryptography', 'zkVMs', 'Quantum Security', 'zkTLS'],
    sourceUrl: 'https://zeroknowledge.fm/podcast/346/',
    duration: '~2h',
    description: 'Year-end review of major ZK developments including hash vs curve-based SNARKs, lattice-based approaches like LatticeFold, zkVM proliferation, and implications of quantum computing advances.',
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
