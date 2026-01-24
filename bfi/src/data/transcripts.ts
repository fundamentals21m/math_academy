// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for articles related to Bitcoin for institutional investors,
// covering credit ratings, treasury companies, mining valuation, pensions,
// and economic frameworks.
// All sourceUrls verified against fundamentals.ghost.io as of 2026-01.
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
  // INSTITUTIONAL BITCOIN ANALYSIS
  // ==========================================================================
  {
    id: 'credit-rating-methodology',
    title: 'The Credit Rating Methodology of Bitcoin Treasury Companies',
    source: 'Orthogonal Divergence',
    date: '2025-11-01',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Credit Ratings', 'S&P Global', 'Treasury Companies', 'Fixed Income', 'MSTR'],
    sourceUrl: 'https://fundamentals.ghost.io/the-credit-rating-methodology-of-bitcoin-treasury-companies/',
    duration: '4 min read',
    description: 'Analysis of S&P Global\'s first credit rating methodology for Bitcoin treasury companies. Explores currency mismatch risk, asset concentration, and how this framework opens the $130 trillion fixed-income market to Bitcoin exposure.',
  },
  {
    id: 'sp-global-understands-bitcoin',
    title: 'S&P Global Understands Bitcoin',
    source: 'Orthogonal Divergence',
    date: '2025-04-10',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['S&P Global', 'Pensions', 'State Reserves', 'Institutional Adoption', 'Risk Assessment'],
    sourceUrl: 'https://fundamentals.ghost.io/s-p-global-understands-bitcoin-the-institutions-theyre-covering-probably-dont/',
    duration: '4 min read',
    description: 'Examination of S&P Global\'s sophisticated understanding of Bitcoin versus altcoins, 30 years of pension mismanagement, and why Bitcoin may be pensions\' final chance to achieve solvent plan terminations.',
  },
  {
    id: 'bitcoin-miner-valuation',
    title: 'What is the Value of a Bitcoin Miner?',
    source: 'Orthogonal Divergence',
    date: '2024-09-16',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Mining', 'Valuation', 'ASIC', 'Breakeven Analysis', 'Difficulty Adjustment'],
    sourceUrl: 'https://fundamentals.ghost.io/what-is-the-value-of-a-bitcoin-miner/',
    duration: '11 min read',
    description: 'Institutional-grade valuation framework for Bitcoin ASIC miners. Covers the irrationality of mining economics, bankruptcy case studies (Core Scientific, Argo), and why most miners are priced beyond breakeven value.',
  },
  {
    id: 'say-it-satoshi',
    title: 'Say it to Me S.A.T.O.S.H.I.',
    source: 'Orthogonal Divergence',
    date: '2024-03-08',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Hal Finney', 'Satoshi Nakamoto', 'Bitcoin Origins', 'Cryonics', 'Phish'],
    sourceUrl: 'https://fundamentals.ghost.io/say-it-to-me-s-a-t-o-s-h-i/',
    duration: '4 min read',
    description: 'Exploration of Hal Finney\'s connection to Bitcoin\'s origins, his cryonic preservation, and symbolic parallels drawn through Phish\'s 2018 Kasvot Voxt project. Themes of preservation and alternative systems.',
  },
  {
    id: 'everybody-has-a-price',
    title: 'Everybody Has A Price (even Satoshi)',
    source: 'Orthogonal Divergence',
    date: '2023-09-22',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Monetary Control', 'Fiat Currency', 'Suppression', 'Bitcoin Alternative', 'Incentives'],
    sourceUrl: 'https://fundamentals.ghost.io/everybody-has-a-price/',
    duration: '5 min read',
    description: 'Examination of how state power shifted from overt control to financial coercion. Argues that Bitcoin offers an alternative to fiat-based compliance systems through technological design and fixed supply.',
  },
  {
    id: 'hodling-human-action',
    title: 'HODL\'ing Bitcoin is a Human Action',
    source: 'Orthogonal Divergence',
    date: '2023-06-01',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Praxeology', 'Human Action', 'AI Limitations', 'HODL', 'Institutional Behavior'],
    sourceUrl: 'https://fundamentals.ghost.io/hodling-is-a-human-action/',
    duration: '7 min read',
    description: 'Analysis of why HODLing defies conventional financial logic and AI prediction. Explores praxeology, institutional time preference, and why only individuals (not institutions) can truly HODL.',
  },
  {
    id: 'lightning-annuities',
    title: 'Creating Annuities on The Lightning Network',
    source: 'Orthogonal Divergence',
    date: '2023-05-16',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Lightning Network', 'Annuities', 'Game Theory', 'Cooperation', 'Financial Instruments'],
    sourceUrl: 'https://fundamentals.ghost.io/building-annuities-on-the-lightning-protocol/',
    duration: '9 min read',
    description: 'Vision for peer-to-peer annuities on Bitcoin\'s Lightning Network. Draws from game theory (Axelrod\'s Evolution of Cooperation) to explain how Bitcoin\'s low interest rate environment maximizes cooperation incentives.',
  },
  {
    id: 'pensions-come-of-age',
    title: 'Pensions Finally Come of Age',
    source: 'Orthogonal Divergence',
    date: '2023-04-20',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Pensions', 'ERISA', 'LDI', 'Liability-Driven Investing', 'UK Gilt Crisis'],
    sourceUrl: 'https://fundamentals.ghost.io/pensions-finally-come-of-age/',
    duration: '7 min read',
    description: 'Historical analysis of pension system evolution from ERISA (1974) through the 2022 UK gilt crisis. Examines liability-driven investing, discount rate manipulation, and systemic vulnerabilities in fiat-denominated pension obligations.',
  },
  {
    id: 'rock-paper-bitcoin',
    title: 'Rock Paper Bitcoin',
    source: 'Orthogonal Divergence',
    date: '2023-03-20',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Value Framework', 'Hard Assets', 'Fiat Systems', 'Bitcoin Standard', 'Economics'],
    sourceUrl: 'https://fundamentals.ghost.io/rock-paper-bitcoin/',
    duration: '6 min read',
    description: 'A framework for understanding value on a Bitcoin standard. Rock (physical assets), Paper (fiat abstractions), and Bitcoin (metaphysical reality) as a lens for re-evaluating health, education, and business.',
  },
  {
    id: 'highway-to-hex',
    title: 'Highway to Hex',
    source: 'Orthogonal Divergence',
    date: '2023-04-20',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['SHA256', 'Hexadecimal', 'Cryptography', 'One-Way Functions', 'Bitcoin Fundamentals'],
    sourceUrl: 'https://fundamentals.ghost.io/highway-to-hex/',
    duration: '4 min read',
    description: 'Technical introduction to Bitcoin\'s cryptographic foundations using cultural metaphor. Explains SHA256 hashing, one-way functions, elliptic-curve cryptography, and hexadecimal notation as the "amino acids" of Bitcoin.',
  },
  {
    id: 'phish-and-bitcoin',
    title: 'Phish and Bitcoin',
    source: 'Orthogonal Divergence',
    date: '2023-03-12',
    speakers: [
      { name: 'Brian Hirschfield', role: 'Author' },
    ],
    topics: ['Phish', 'Network Effects', 'Prophecy', 'Music', 'Bitcoin Culture'],
    sourceUrl: 'https://fundamentals.ghost.io/phish-and-bitcoin-a-continuum-of-genius-network-effects-and-unintentional-foreshadowing/',
    duration: '14 min read',
    description: 'Exploration of parallels between Phish\'s rise and Bitcoin\'s growth through network effects. Analyzes prophetic songwriting, the Gamehendge narrative, and connections to Satoshi\'s vision of decentralized systems.',
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
