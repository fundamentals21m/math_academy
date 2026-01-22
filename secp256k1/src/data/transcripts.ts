// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to secp256k1,
// Schnorr signatures, MuSig, adaptor signatures, and threshold signatures.
// All sourceUrls verified against btctranscripts.com as of 2026-01.
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
    title: 'Libsecp256k1 Maintainers Meeting',
    source: 'Bitcoin Core Dev Tech',
    date: '2022-10-12',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
      { name: 'Jonas Nick', role: 'Blockstream Cryptographer' },
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
    ],
    topics: ['libsecp256k1', 'Side-Channel Attacks', 'API Design', 'MuSig2', 'FROST'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-core-dev-tech/2022-10/2022-10-12-libsecp256k1/',
    duration: '~1h',
    description: 'Technical discussion among libsecp256k1 maintainers covering release strategy, sidechannel security, context API design, and whether to expand scope to include MuSig2 and FROST.',
  },
  {
    id: 'libsec-origins',
    title: 'Schnorr Signatures and the Libsecp256k1 Library',
    source: 'Bitcoin Explained Podcast',
    date: '2021-08-26',
    speakers: [
      { name: 'Aaron van Wirdum', role: 'Bitcoin Magazine' },
      { name: 'Sjors Provoost', role: 'Bitcoin Core Developer' },
    ],
    topics: ['libsecp256k1', 'History', 'Schnorr Signatures', 'OpenSSL'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-explained/the-libsecp256k1-library/',
    duration: '~45m',
    description: 'Discussion of why Satoshi chose the secp256k1 curve, the transition from OpenSSL to libsecp256k1, and how Schnorr signatures work.',
  },

  // ==========================================================================
  // SCHNORR SIGNATURES
  // ==========================================================================
  {
    id: 'schnorr-basics',
    title: 'Taproot, Schnorr Signatures, and SIGHASH_NOINPUT',
    source: 'SF Bitcoin Meetup',
    date: '2018-07-09',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
    ],
    topics: ['Schnorr Signatures', 'Taproot', 'MAST', 'Adaptor Signatures'],
    sourceUrl: 'https://btctranscripts.com/sf-bitcoin-meetup/2018-07-09-taproot-schnorr-signatures-and-sighash-noinput-oh-my/',
    duration: '~1h 15m',
    description: 'Comprehensive introduction to Schnorr signatures covering mathematical foundations, advantages over ECDSA, Taproot, and the court model for smart contracts.',
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
    title: 'Schnorr Signatures for Bitcoin: Challenges and Opportunities',
    source: 'BPASE 2018',
    date: '2018-01-25',
    speakers: [
      { name: 'Pieter Wuille', role: 'Bitcoin Core Developer' },
    ],
    topics: ['Schnorr Signatures', 'MuSig', 'Batch Verification', 'Key Aggregation'],
    sourceUrl: 'https://btctranscripts.com/blockchain-protocol-analysis-security-engineering/2018/schnorr-signatures-for-bitcoin-challenges-opportunities/',
    duration: '~45m',
    description: 'Exploration of Schnorr signature applications including native multisignatures with MuSig, batch verification, and cross-input aggregation possibilities.',
  },

  // ==========================================================================
  // MUSIG
  // ==========================================================================
  {
    id: 'musig-overview',
    title: 'MuSig, MuSig-DN and MuSig2',
    source: 'Stephan Livera Podcast',
    date: '2020-10-27',
    speakers: [
      { name: 'Jonas Nick', role: 'Blockstream Cryptographer' },
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
    ],
    topics: ['MuSig', 'MuSig2', 'MuSig-DN', 'Nonce Security'],
    sourceUrl: 'https://btctranscripts.com/stephan-livera-podcast/2020-10-27-jonas-nick-tim-ruffing-musig2/',
    duration: '~1h 30m',
    description: 'In-depth discussion of MuSig evolution from MuSig1 through MuSig-DN to MuSig2, covering security proofs, nonce handling, and state management.',
  },
  {
    id: 'musig2-deep-dive',
    title: 'MuSig2: Two-Round Multi-Signatures',
    source: 'London Bitcoin Devs',
    date: '2022-08-11',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
      { name: 'Elizabeth Crites', role: 'University of Edinburgh' },
      { name: 'Michael Folkson', role: 'Moderator' },
    ],
    topics: ['MuSig2', 'Multi-Signatures', 'Security Models', 'FROST'],
    sourceUrl: 'https://btctranscripts.com/london-bitcoin-devs/2022-08-11-tim-ruffing-musig2/',
    duration: '~2h',
    description: 'Technical seminar covering MuSig2 protocol details, security models (ROM, AGM, OMDL), comparison with FROST, and implementation considerations for hardware wallets.',
  },
  {
    id: 'musig-implementations',
    title: 'MuSig2: Simple Two-Round Schnorr Multi-Signatures',
    source: 'Real World Crypto',
    date: '2021-01-12',
    speakers: [
      { name: 'Tim Ruffing', role: 'Blockstream Cryptographer' },
    ],
    topics: ['MuSig2', 'Implementation', 'Two-Round Protocol', 'Concurrent Sessions'],
    sourceUrl: 'https://btctranscripts.com/realworldcrypto/2021/2021-01-12-tim-ruffing-musig2/',
    duration: '~30m',
    description: 'Academic presentation introducing MuSig2, explaining how it achieves secure multi-signatures in two rounds while maintaining security across concurrent sessions.',
  },

  // ==========================================================================
  // ADAPTOR SIGNATURES
  // ==========================================================================
  {
    id: 'adaptor-intro',
    title: 'Using Chains for What They\'re Good For',
    source: 'Scaling Bitcoin Stanford',
    date: '2017-11-04',
    speakers: [
      { name: 'Andrew Poelstra', role: 'Blockstream Cryptographer' },
    ],
    topics: ['Adaptor Signatures', 'Scriptless Scripts', 'Atomic Swaps', 'Privacy'],
    sourceUrl: 'https://btctranscripts.com/scalingbitcoin/stanford-2017/using-the-chain-for-what-chains-are-good-for/',
    duration: '~30m',
    description: 'Foundational talk on scriptless scripts and adaptor signatures, explaining how to hide witness data within signatures for atomic swaps and enhanced privacy.',
  },
  {
    id: 'adaptor-applications',
    title: 'Discreet Log Contracts',
    source: 'Scaling Bitcoin Stanford',
    date: '2017-11-04',
    speakers: [
      { name: 'Tadge Dryja', role: 'MIT DCI' },
    ],
    topics: ['Adaptor Signatures', 'DLCs', 'Oracle Protocols', 'Smart Contracts'],
    sourceUrl: 'https://btctranscripts.com/scalingbitcoin/stanford-2017/discreet-log-contracts/',
    duration: '~25m',
    description: 'Introduction to Discreet Log Contracts, a private smart contract system using anticipated signatures and oracle attestations without revealing contract details on-chain.',
  },

  // ==========================================================================
  // THRESHOLD SIGNATURES / FROST
  // ==========================================================================
  {
    id: 'frost-intro',
    title: 'FROST: Flexible Round-Optimized Schnorr Threshold Signatures',
    source: 'Zcon3',
    date: '2022-08-07',
    speakers: [
      { name: 'Chelsea Komlo', role: 'Zcash Foundation / University of Waterloo' },
      { name: 'Elizabeth Crites', role: 'University of Edinburgh' },
    ],
    topics: ['FROST', 'Threshold Signatures', 'DKG', 'ROAST'],
    sourceUrl: 'https://btctranscripts.com/misc/2022-08-07-komlo-crites-frost/',
    duration: '~1h',
    description: 'Technical presentation by FROST authors covering distributed key generation, 2-round threshold signing, security against concurrent sessions, and the ROAST robustness wrapper.',
  },
  {
    id: 'frost-implementation',
    title: 'FROST Implementation',
    source: 'Bitcoin Core Dev Tech',
    date: '2022-10-11',
    speakers: [
      { name: 'Jesse Posner', role: 'Block Inc.' },
    ],
    topics: ['FROST', 'libsecp256k1', 'Implementation', 'Lightning Network'],
    sourceUrl: 'https://btctranscripts.com/bitcoin-core-dev-tech/2022-10/2022-10-11-frost/',
    duration: '~45m',
    description: 'Technical discussion on implementing FROST, covering differences from the academic paper, participant identification by public key, session IDs, and potential Lightning Network applications.',
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
