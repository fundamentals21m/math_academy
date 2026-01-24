// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and interview transcripts related to Branta,
// Bitcoin transaction security, and pre-payment verification.
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
  // PODCAST INTERVIEWS
  // ==========================================================================
  {
    id: 'slp-611',
    title: 'Avoid Bitcoin Scams with Keith Gardner',
    source: 'Stephan Livera Podcast',
    date: '2024-10-23',
    speakers: [
      { name: 'Stephan Livera', role: 'Host' },
      { name: 'Keith Gardner', role: 'Founder & CEO, Branta' },
    ],
    topics: ['Phishing', 'Address Verification', 'Guardrail', 'Lightning Network', 'Privacy'],
    sourceUrl: 'https://stephanlivera.com/episode/611/',
    duration: '~1h',
    description: 'Keith Gardner discusses security threats in Bitcoin transactions, including phishing and address replacement attacks. The conversation explores Branta\'s Guardrail solution, mobile integration, Lightning Network support, and privacy protections.',
  },
  {
    id: 'btc-talent-44',
    title: 'Founding a Bitcoin Startup with Keith Gardner from Branta',
    source: 'The Bitcoin Talent Co. Podcast',
    date: '2024-02-16',
    speakers: [
      { name: 'Keith Gardner', role: 'Founder & CEO, Branta' },
    ],
    topics: ['Bitcoin Startup', 'Entrepreneurship', 'Branta Origins', 'Product Development'],
    sourceUrl: 'https://podcasts.apple.com/us/podcast/founding-a-bitcoin-startup-with-keith-gardner/id1674070151?i=1000645593565',
    duration: '~43m',
    description: 'Keith Gardner shares his journey founding Branta, the challenges of building a Bitcoin-focused startup, and the vision behind creating pre-payment verification for the Bitcoin ecosystem.',
  },

  // ==========================================================================
  // ARTICLES & ANNOUNCEMENTS
  // ==========================================================================
  {
    id: 'lightning-bounties',
    title: 'Lightning Bounties secures BOLT-11 Deposits with Branta',
    source: 'Branta Substack',
    date: '2025-01-08',
    speakers: [
      { name: 'Keith Gardner', role: 'Author' },
    ],
    topics: ['Lightning Bounties', 'BOLT-11', 'Partnership', 'Open Source'],
    sourceUrl: 'https://brantaops.substack.com/p/lightning-bounties-secures-bolt-11',
    duration: '~5m read',
    description: 'Announcement of the partnership between Branta and Lightning Bounties, the MIT Hackathon-winning platform for Bitcoin-based open source bounties. Details how Guardrail secures BOLT-11 invoice deposits.',
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
