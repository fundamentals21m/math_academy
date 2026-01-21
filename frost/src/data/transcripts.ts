// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to FROST threshold
// signatures, ROAST, MuSig2, and distributed key generation.
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
  // FROST FUNDAMENTALS
  // ==========================================================================
  {
    id: 'frost-fundamentals',
    title: 'FROST: Flexible Round-Optimized Schnorr Threshold Signatures',
    source: 'Zcon3',
    date: '2022-08-07',
    speakers: [
      { name: 'Chelsea Komlo', role: 'Principal Researcher, Zcash Foundation' },
      { name: 'Elizabeth Crites', role: 'Postdoc, University of Edinburgh' },
    ],
    topics: ['FROST', 'Threshold Signatures', 'Schnorr Signatures', 'DKG', 'PedPop'],
    sourceUrl: 'https://btctranscripts.com/misc/2022-08-07-komlo-crites-frost/',
    duration: '~1h',
    description: 'The FROST authors explain their threshold signature scheme from first principles, covering FROST1 vs FROST2 trade-offs, ROS attack defenses, and the path to practical adoption.',
  },
  {
    id: 'frost-implementation',
    title: 'FROST Implementation Discussion',
    source: 'Bitcoin Core Dev Tech',
    date: '2022-10-11',
    speakers: [
      { name: 'Bitcoin Core Developers', role: 'Core Contributors' },
    ],
    topics: ['FROST', 'Implementation', 'DKG', 'Key Refresh', 'Lightning'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-core-dev-tech/2022-10/2022-10-11-frost/',
    duration: '~45m',
    description: 'Technical deep dive into FROST implementation for Bitcoin, covering distributed key generation, signing mechanics, and potential Lightning Network integration.',
  },

  // ==========================================================================
  // ROAST - ROBUST WRAPPER
  // ==========================================================================
  {
    id: 'roast-protocol',
    title: 'ROAST: Robust Asynchronous Schnorr Threshold Signatures',
    source: 'Monash Cybersecurity Seminars',
    date: '2022-07-14',
    speakers: [
      { name: 'Tim Ruffing', role: 'Cryptographer, Blockstream Research' },
    ],
    topics: ['ROAST', 'FROST', 'Async Signing', 'Robustness', 'Byzantine Fault Tolerance'],
    sourceUrl: 'https://btctranscripts.com/misc/2022-07-14-tim-ruffing-roast/',
    duration: '~1h',
    description: 'Tim Ruffing presents ROAST, a wrapper protocol that adds robustness guarantees to FROST, ensuring signing completes even when some signers are unresponsive.',
  },

  // ==========================================================================
  // MUSIG2 - FOUNDATIONAL MULTI-SIGNATURES
  // ==========================================================================
  {
    id: 'musig2-rwc',
    title: 'MuSig2: Simple Two-Round Schnorr Multi-Signatures',
    source: 'Real World Crypto',
    date: '2021-01-12',
    speakers: [
      { name: 'Tim Ruffing', role: 'Cryptographer, Blockstream' },
    ],
    topics: ['MuSig2', 'Schnorr Signatures', 'Multi-Signatures', 'Bitcoin'],
    sourceUrl: 'https://btctranscripts.com/realworldcrypto/2021/2021-01-12-tim-ruffing-musig2/',
    duration: '~30m',
    description: 'Tim Ruffing introduces MuSig2, a two-round multi-signature scheme that enables the first round to be precomputed, making signing effectively non-interactive.',
  },
  {
    id: 'musig2-london',
    title: 'MuSig2 Deep Dive',
    source: 'London Bitcoin Devs',
    date: '2022-08-11',
    speakers: [
      { name: 'Tim Ruffing', role: 'Cryptographer, Blockstream' },
      { name: 'Elizabeth Crites', role: 'Postdoc, University of Edinburgh' },
    ],
    topics: ['MuSig2', 'BIP340', 'Security Proofs', 'FROST Comparison', 'Implementation'],
    sourceUrl: 'https://btctranscripts.com/london-bitcoin-devs/2022-08-11-tim-ruffing-musig2/',
    duration: '~2h',
    description: 'Extended discussion covering MuSig2 security models, comparison with FROST threshold signatures, and practical implementation considerations for Bitcoin.',
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
