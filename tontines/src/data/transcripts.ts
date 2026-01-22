// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast, conference, and video transcripts related to tontines,
// longevity risk pooling, and retirement income mathematics.
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
  // TONTINE HISTORY & ECONOMICS
  // ==========================================================================
  {
    id: 'milevsky-tontine-history',
    title: 'The History and Mathematics of Tontines',
    source: 'Thinking Ahead Institute',
    date: '2019-05-15',
    speakers: [
      { name: 'Moshe Milevsky', role: 'York University Professor' },
      { name: 'Roger Urwin', role: 'Thinking Ahead Institute' },
    ],
    topics: ['Tontine History', 'Longevity Risk', 'King William\'s Tontine', 'Actuarial Science'],
    sourceUrl: 'https://www.thinkingaheadinstitute.org/research-papers/moshe-milevsky-on-the-economics-of-tontines/',
    duration: '~45m',
    description: 'Professor Milevsky discusses the fascinating history of tontines from 17th century France to their modern revival, explaining why they were banned and how they could solve today\'s retirement crisis.',
  },
  {
    id: 'milevsky-annuity-man',
    title: 'Tontines and the Future of Retirement Income',
    source: 'The Annuity Man Podcast',
    date: '2021-03-22',
    speakers: [
      { name: 'Moshe Milevsky', role: 'York University Professor' },
      { name: 'Stan Haithcock', role: 'The Annuity Man' },
    ],
    topics: ['Tontines', 'Annuities', 'Retirement Planning', 'Longevity Pooling'],
    sourceUrl: 'https://www.theannuityman.com/moshe-milevsky/',
    duration: '~40m',
    description: 'Discussion comparing tontines to traditional annuities, exploring how mortality credits work and why tontines could offer better returns for retirees willing to pool longevity risk.',
  },

  // ==========================================================================
  // MODERN TONTINE DESIGN
  // ==========================================================================
  {
    id: 'mcclelland-tontine-trust',
    title: 'Building a Modern Tontine: Tontine Trust',
    source: 'Real Vision Finance',
    date: '2022-08-10',
    speakers: [
      { name: 'Dean McClelland', role: 'Founder, Tontine Trust' },
    ],
    topics: ['Modern Tontines', 'Blockchain', 'Retirement Innovation', 'Fair Tontines'],
    sourceUrl: 'https://www.realvision.com/',
    duration: '~35m',
    description: 'Dean McClelland explains how Tontine Trust is using blockchain technology and actuarial science to create transparent, fair tontine products for the modern era.',
  },
  {
    id: 'fullmer-tontine-design',
    title: 'Tontine Design: From Theory to Practice',
    source: 'CFA Institute Research',
    date: '2020-06-18',
    speakers: [
      { name: 'Richard Fullmer', role: 'Founder, Nuova Longevita Research' },
    ],
    topics: ['Tontine Design', 'Actuarial Fairness', 'Mortality Credits', 'Product Design'],
    sourceUrl: 'https://rpc.cfainstitute.org/en/research/foundation/2019/tontines',
    duration: '~1h',
    description: 'Comprehensive overview of modern tontine design principles, covering actuarial fairness, redistribution mechanisms, and how to structure products that are both equitable and efficient.',
  },

  // ==========================================================================
  // POLICY & REGULATION
  // ==========================================================================
  {
    id: 'brookings-gateway',
    title: 'Tontines: A Gateway Drug to Lifetime Income',
    source: 'Brookings Institution',
    date: '2020-09-15',
    speakers: [
      { name: 'Mark Iwry', role: 'Brookings Institution' },
      { name: 'William Gale', role: 'Brookings Institution' },
      { name: 'Olivia Mitchell', role: 'Wharton School' },
    ],
    topics: ['Retirement Policy', 'Tontine Regulation', 'Social Security', 'Pension Reform'],
    sourceUrl: 'https://www.brookings.edu/articles/retirement-tontines/',
    duration: '~1h 15m',
    description: 'Policy experts discuss whether tontines could help solve America\'s retirement crisis, examining regulatory hurdles, consumer protection issues, and potential integration with existing retirement systems.',
  },
  {
    id: 'forman-tontine-pensions',
    title: 'Tontine Pensions: A New Old Solution',
    source: 'American Law and Economics Association',
    date: '2019-05-20',
    speakers: [
      { name: 'Jonathan Barry Forman', role: 'University of Oklahoma' },
      { name: 'Michael Sabin', role: 'Independent Researcher' },
    ],
    topics: ['Pension Design', 'Tontine Law', 'Retirement Policy', 'Legal Framework'],
    sourceUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3399040',
    duration: '~50m',
    description: 'Legal and policy analysis of how tontines could be integrated into the pension system, examining historical precedents and modern regulatory frameworks.',
  },

  // ==========================================================================
  // ACTUARIAL MATHEMATICS
  // ==========================================================================
  {
    id: 'donnelly-pooling',
    title: 'Pooled Annuities and Group Self-Annuitization',
    source: 'Society of Actuaries',
    date: '2021-11-08',
    speakers: [
      { name: 'Catherine Donnelly', role: 'Heriot-Watt University' },
    ],
    topics: ['Mortality Credits', 'Group Annuities', 'Risk Pooling', 'Actuarial Mathematics'],
    sourceUrl: 'https://www.soa.org/',
    duration: '~45m',
    description: 'Technical presentation on the mathematics of longevity pooling, explaining how mortality credits are calculated and distributed among participants.',
  },
  {
    id: 'chen-optimal-tontine',
    title: 'Optimal Tontine Design',
    source: 'Journal of Pension Economics and Finance',
    date: '2022-03-15',
    speakers: [
      { name: 'An Chen', role: 'University of Ulm' },
      { name: 'Manuel Rach', role: 'University of Ulm' },
    ],
    topics: ['Optimal Design', 'Utility Theory', 'Fair Value', 'Mathematical Finance'],
    sourceUrl: 'https://www.cambridge.org/core/journals/journal-of-pension-economics-and-finance',
    duration: '~1h',
    description: 'Academic lecture on optimal tontine design using utility theory, showing how to balance immediate income against bequest motives and how different designs affect participant welfare.',
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
