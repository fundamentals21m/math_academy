// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to Lightning Network
// BOLTs, payment channels, HTLCs, onion routing, and protocol specifications.
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
  // BOLT SPECIFICATIONS
  // ==========================================================================
  {
    id: 'bolt-by-bolt',
    title: 'Lightning Network BOLT by BOLT',
    source: 'LA Blockchain Meetup',
    date: '2018-07-24',
    speakers: [
      { name: 'Jim Posen', role: 'Lightning Developer' },
    ],
    topics: ['BOLTs', 'Payment Channels', 'HTLCs', 'Onion Routing', 'Channel Gossip'],
    sourceUrl: 'https://btctranscripts.com/misc/2018-07-24-la-blockchain-jim-posen-lightning-bolt-by-bolt',
    duration: '~1h',
    description: 'Comprehensive walkthrough of all 11 BOLT specifications. Uses a bar tab analogy to explain payment channels, covers commitment transactions, revocation keys, HTLCs, Noise encryption, onion routing, and gossip protocols.',
  },
  {
    id: 'bolt12-offers',
    title: 'Offers and BOLT 12',
    source: 'Lightning Conference 2019',
    date: '2019-10-19',
    speakers: [
      { name: 'Rusty Russell', role: 'c-lightning Developer' },
    ],
    topics: ['BOLT 12', 'Offers', 'Static Invoices', 'Recurring Payments', 'Privacy'],
    sourceUrl: 'https://btctranscripts.com/lightning-conference/2019/2019-10-19-rusty-russell-offers',
    duration: '~45m',
    description: 'Introduction to BOLT 12 by its author. Covers static invoices, user-controlled recurring payments, spontaneous donations with receipts, refund mechanisms, Merkle tree proofs, and currency flexibility.',
  },
  {
    id: 'static-invoices',
    title: 'Static Invoices in Lightning: BOLT 11 vs LNURL vs Offers vs AMP',
    source: 'Advancing Bitcoin 2022',
    date: '2022-03-03',
    speakers: [
      { name: 'Elle Mouton', role: 'Lightning Labs Developer' },
    ],
    topics: ['BOLT 11', 'BOLT 12', 'LNURL', 'AMP', 'Static Invoices'],
    sourceUrl: 'https://btctranscripts.com/advancing-bitcoin/2022/static-invoices-in-lightning',
    duration: '~30m',
    description: 'Deep comparison of invoice solutions: LNURL with HTTP servers, BOLT 12 Offers with onion messaging, and AMP for spontaneous payments. Covers privacy tradeoffs and proof-of-payment mechanisms.',
  },

  // ==========================================================================
  // LIGHTNING OVERVIEW & ARCHITECTURE
  // ==========================================================================
  {
    id: 'lightning-overview',
    title: 'Lightning Overview: AMPs, Splicing, and Watchtowers',
    source: 'Layer 2 Summit 2018',
    date: '2018-04-25',
    speakers: [
      { name: 'Conner Fromknecht', role: 'Lightning Labs Developer' },
    ],
    topics: ['AMPs', 'Splicing', 'Watchtowers', 'Payment Channels'],
    sourceUrl: 'https://btctranscripts.com/layer2-summit/2018/lightning-overview',
    duration: '~45m',
    description: 'Overview of Lightning Network features including Atomic Multipath Payments for splitting payments, splicing for dynamic channel funding, and watchtowers for offline channel protection.',
  },
  {
    id: 'security-analysis',
    title: 'Security Analysis of the Lightning Network',
    source: 'BPASE 2017',
    date: '2017-02-03',
    speakers: [
      { name: 'Olaoluwa Osuntokun', role: 'Lightning Labs Co-Founder (roasbeef)' },
    ],
    topics: ['Security', 'Privacy', 'Brontide', 'Sphinx', 'Vulnerabilities'],
    sourceUrl: 'https://btctranscripts.com/blockchain-protocol-analysis-security-engineering/2017/lightning-network-security-analysis',
    duration: '~1h',
    description: 'Deep security analysis covering P2P encryption with Brontide, Sphinx onion routing for privacy, channel announcement authentication, and potential vulnerabilities like hash-lock correlation and thundering herd attacks.',
  },

  // ==========================================================================
  // HTLCS & ROUTING
  // ==========================================================================
  {
    id: 'multihop-routing',
    title: 'Multihop of the Lightning Network',
    source: 'Chaincode Residency 2019',
    date: '2019-06-24',
    speakers: [
      { name: 'Rene Pickhardt', role: 'Lightning Network Researcher' },
    ],
    topics: ['HTLCs', 'Multihop Routing', 'SPHINX', 'Channel Updates', 'Fees'],
    sourceUrl: 'https://btctranscripts.com/chaincode-residency/2019-06-24-rene-pickhardt-multihop-in-lightning',
    duration: '~1h 30m',
    description: 'Technical deep dive into multihop payments covering hash time lock contracts, SPHINX mix format for onion routing, the five stages for HTLC validity, routing myth debunking, and fee encoding through decreasing amounts.',
  },
  {
    id: 'major-limitations',
    title: 'Major Limitations of Lightning',
    source: 'Boltathon 2019',
    date: '2019-04-06',
    speakers: [
      { name: 'Alex Bosworth', role: 'Lightning Labs Developer' },
    ],
    topics: ['Limitations', 'Channel Capacity', 'Routing', 'Capital Constraints'],
    sourceUrl: 'https://btctranscripts.com/boltathon/2019-04-06-alex-bosworth-major-limitations',
    duration: '~30m',
    description: 'Honest assessment of Lightning limitations: fixed channel capacity, routing challenges at scale, capital constraints for both small and large payments, Layer 1 dependency, and user responsibility for state management.',
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
