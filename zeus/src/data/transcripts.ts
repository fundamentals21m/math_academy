// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to Zeus Lightning
// wallet, self-custody, Lightning Network, and Bitcoin payments.
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
  // ZEUS WALLET & SELF-CUSTODY
  // ==========================================================================
  {
    id: 'cd156-zeus-cashu',
    title: 'Zeus and Cashu',
    source: 'Citadel Dispatch',
    date: '2025-04-22',
    speakers: [
      { name: 'Odell', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Zeus Wallet', 'Cashu', 'Self-Custody', 'Lightning Network', 'eCash', 'Neutrino'],
    sourceUrl: 'https://www.podpage.com/citadeldispatch/cd156-evan-kaloudis-zeus-and-cashu/',
    duration: '~1h 38m',
    description: 'Evan Kaloudis discusses Zeus wallet\'s Cashu integration, the importance of self-custody, and how users can progressively move from custodial eCash to running their own Lightning node.',
  },
  {
    id: 'slp376-zeus-sovereign',
    title: 'Zeus: Self Sovereign LN Wallet',
    source: 'Stephan Livera Podcast',
    date: '2022-05-11',
    speakers: [
      { name: 'Stephan Livera', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Zeus Wallet', 'Self-Custody', 'FOSS', 'Lightning Network', 'Privacy', 'Route Blinding'],
    sourceUrl: 'https://stephanlivera.com/episode/376/',
    duration: '~1h',
    description: 'Evan Kaloudis joins to discuss building Zeus as a free and open-source Lightning wallet for users running their own nodes, supporting multiple implementations, and privacy on the Lightning Network.',
  },
  {
    id: 'tls90-building-zeus',
    title: 'Building Zeus, Lightning Self Custody, Open Source Funding',
    source: 'The Kevin Rooke Show',
    date: '2023-01-04',
    speakers: [
      { name: 'Kevin Rooke', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Zeus Wallet', 'Self-Custody', 'Open Source', 'Lightning Network', 'Tor', 'Taro'],
    sourceUrl: 'https://podcasts.apple.com/us/podcast/tls90-evan-kaloudis-on-building-zeus-lightning-self/id1592522623?i=1000592235271',
    duration: '~1h 23m',
    description: 'Discussion on building Zeus, the tension between custodial and self-custodial Lightning wallets, channel management challenges, and the roadmap and business model for Zeus.',
  },
  {
    id: 'lnj019-zeus-intro',
    title: 'Evan Kaloudis from Zeus',
    source: 'Lightning Junkies',
    date: '2020-01-15',
    speakers: [
      { name: 'Chaz', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Zeus Wallet', 'Lightning Network', 'LND', 'C-Lightning', 'Privacy', 'Tor'],
    sourceUrl: 'https://podcasters.spotify.com/pod/show/lightning-junkies/episodes/Evan-Kaloudis-from-Zeus---LNJ019-ea55ud',
    duration: '~1h 15m',
    description: 'Early discussion of Zeus wallet as a remote node controller, covering background, getting into Bitcoin, developing on Zap, Zeus best features, LND vs C-Lightning, and Lightning as a privacy tool.',
  },
  {
    id: 'walker-bitcoin-adoption',
    title: 'Bitcoin Adoption, Self-Custody, eCash & Fighting State Control',
    source: 'THE Bitcoin Podcast (Walker America)',
    date: '2025-06-24',
    speakers: [
      { name: 'Walker', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Bitcoin Adoption', 'Self-Custody', 'Cashu', 'eCash', 'Privacy', 'Circular Economies'],
    sourceUrl: 'https://walkeramerica.substack.com/p/evan-kaloudis-bitcoin-adoption-self',
    duration: '~1h 30m',
    description: 'Kaloudis discusses Bitcoin adoption for commerce, Zeus\'s transition to a comprehensive wallet with Cashu, resisting financial surveillance, and why Bitcoin as merely a store of value would be a failure.',
  },

  // ==========================================================================
  // ZEUS FEATURES & TECHNICAL
  // ==========================================================================
  {
    id: 'zeus-v080-release',
    title: 'Zeus v0.8.0: Embedded Node, OLYMPUS LSP & Zeus Pay',
    source: 'Zeus Blog',
    date: '2023-12-04',
    speakers: [
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Embedded Node', 'OLYMPUS LSP', 'Zeus Pay', 'Taproot Channels', 'Neutrino', 'Privacy'],
    sourceUrl: 'https://blog.zeusln.com/new-release-zeus-v0-8-0/',
    duration: 'Article',
    description: 'Release announcement for Zeus v0.8.0, the first mobile wallet with an embedded LND node, self-custodial lightning addresses, Simple Taproot Channels, and the OLYMPUS Lightning Service Provider.',
  },
  {
    id: 'bitcoin-mag-zeus-fight',
    title: 'Bitcoin Lightning Wallet ZEUS Isn\'t Going Anywhere',
    source: 'Bitcoin Magazine',
    date: '2024-05-08',
    speakers: [
      { name: 'Frank Corva', role: 'Author' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Self-Custody', 'Regulation', 'Samourai Arrest', 'Privacy', 'KYC-Free', 'Lightning Network'],
    sourceUrl: 'https://bitcoinmagazine.com/business/bitcoin-lightning-wallet-zeus-isnt-going-anywhere',
    duration: 'Article',
    description: 'Following the Samourai wallet arrests and Phoenix leaving the US, Kaloudis commits to fighting for KYC-free self-custody Bitcoin wallets, emphasizing Zeus\'s priorities of self-custody and no KYC.',
  },
  {
    id: 'thriller-founder-talk',
    title: 'Founder Talk with Evan Kaloudis',
    source: 'Thriller Bitcoin',
    date: '2024-02-01',
    speakers: [
      { name: 'ThrillerX_', role: 'Host' },
      { name: 'Evan Kaloudis', role: 'Founder, Zeus' },
    ],
    topics: ['Zeus Wallet', 'Point of Sale', 'Nostr', 'Open Source', 'Accessibility', 'Business Model'],
    sourceUrl: 'https://www.thrillerbitcoin.com/founder-talk-with-evan-kaloudis/',
    duration: '~45m',
    description: 'Interview covering Evan\'s solo founder journey, core values, Zeus Point of Sale with inventory management, Nostr integration, and the potential to disrupt traditional finance systems.',
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
