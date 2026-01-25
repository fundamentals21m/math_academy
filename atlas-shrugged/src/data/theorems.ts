export interface TheoremEntry {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // =============================================================================
  // FOUNDATIONAL CONCEPTS (Sections 0-1)
  // =============================================================================
  {
    id: 'as-001',
    title: 'The Mind on Strike',
    statement: "The central premise that if the world's productive minds and thinkers simply stopped working, civilization would collapse without them.",
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-002',
    title: 'Who is John Galt?',
    statement: 'An expression of despair and the central mystery of the novel, eventually revealing the identity of the man organizing the strike of the mind.',
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Metaphysics',
    type: 'proposition',
  },
  {
    id: 'as-003',
    title: 'Objectivism',
    statement: 'A philosophical system that holds reason as the only means to knowledge, rational self-interest as the proper moral code, and laissez-faire capitalism as the ideal political system.',
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Philosophy',
    type: 'definition',
  },
  {
    id: 'as-004',
    title: 'The Three Parts of the Novel Structure',
    statement: "The novel is organized into three parts named after principles of Aristotelian logic: 'Non-Contradiction' (Part 1), 'Either-Or' (Part 2), and 'A Is A' (Part 3).",
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Metaphysics',
    type: 'definition',
  },
  {
    id: 'as-005',
    title: 'Competence vs. Pull',
    statement: 'The fundamental contrast between those who succeed through ability and merit versus those who succeed through political connections and manipulation.',
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-006',
    title: 'Rational Self-Interest as Moral Standard',
    statement: 'The proper moral code is rational self-interest; acting in one\'s own enlightened interests is not selfish in a contemptible sense but virtuous.',
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Ethics',
    type: 'definition',
  },
  {
    id: 'as-007',
    title: 'Laissez-Faire Capitalism',
    statement: "The ideal political system is one of pure capitalism with no government intervention; government's only legitimate role is to protect individual rights.",
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Politics',
    type: 'definition',
  },

  // =============================================================================
  // PRODUCERS AND LOOTERS (Sections 1-3)
  // =============================================================================
  {
    id: 'as-008',
    title: 'Creation vs. Consumption',
    statement: 'The distinction between those who create value through their effort and intelligence versus those who consume what others create without gratitude or understanding.',
    sectionId: 1,
    sectionTitle: 'The Theme',
    category: 'Economics',
    type: 'proposition',
  },
  {
    id: 'as-009',
    title: 'Sanction of the Victim',
    statement: 'The concept that producers are trained to accept guilt for their achievements and responsibility for supporting those who exploit them, effectively consenting to their own exploitation.',
    sectionId: 1,
    sectionTitle: 'The Theme',
    category: 'Ethics',
    type: 'definition',
  },
  {
    id: 'as-010',
    title: 'Producers and Looters',
    statement: 'The distinction between those who create value (producers) and those who survive by seizing values from others through political manipulation or force (looters).',
    sectionId: 2,
    sectionTitle: 'The Chain',
    category: 'Politics',
    type: 'definition',
  },
  {
    id: 'as-011',
    title: 'Pull Replaces Merit',
    statement: 'In a corrupted society, political manipulation and connections become the primary means of success, replacing genuine competence and achievement.',
    sectionId: 2,
    sectionTitle: 'The Chain',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-012',
    title: 'Destructive Competition',
    statement: "The looters' term for honest competition. They call it 'destructive' because superior competition exposes the inferiority of those who cannot compete.",
    sectionId: 2,
    sectionTitle: 'The Chain',
    category: 'Politics',
    type: 'definition',
  },
  {
    id: 'as-013',
    title: 'Prime Movers',
    statement: "The industrialists, inventors, and creators who are the source of productive action and drive civilization forward, like Aristotle's 'unmoved mover' of philosophy.",
    sectionId: 3,
    sectionTitle: 'The Top and the Bottom',
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-014',
    title: 'The Cost of Looting',
    statement: 'When looters destroy producers, they destroy the source of the wealth they seek to seize, ultimately causing their own defeat.',
    sectionId: 3,
    sectionTitle: 'The Top and the Bottom',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-015',
    title: 'Human Potential',
    statement: 'When individuals are free to develop their abilities without restraint or guilt, they can achieve extraordinary heights of creativity and accomplishment.',
    sectionId: 3,
    sectionTitle: 'The Top and the Bottom',
    category: 'Ethics',
    type: 'proposition',
  },

  // =============================================================================
  // MONEY PHILOSOPHY (Section 4)
  // =============================================================================
  {
    id: 'as-016',
    title: 'Money as a Tool of Exchange',
    statement: 'Money is a tool that allows people to trade value for value. It represents voluntary trade; its abolition means the rule of force.',
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Economics',
    type: 'definition',
  },
  {
    id: 'as-017',
    title: 'Money is the Barometer of Virtue',
    statement: "A society's treatment of money reflects its deeper values; when money ceases to be the tool of free exchange, men become tools of men through force.",
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Economics',
    type: 'proposition',
  },
  {
    id: 'as-018',
    title: 'The Root of Money',
    statement: 'The source of money is the productive effort of every honest person, each contributing according to their ability.',
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Economics',
    type: 'definition',
  },
  {
    id: 'as-019',
    title: 'Run for Your Life From Those Who Condemn Money',
    statement: 'Anyone who tells you money is evil is announcing themselves as a looter—someone who wants to take what others have created.',
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-020',
    title: 'Trading by Consent vs. Compulsion',
    statement: "A society's viability depends on whether trading is done by consent or compulsion; when production requires permission from non-producers, the society is doomed.",
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-021',
    title: 'Intellectual Corruption',
    statement: 'Intellectuals provide philosophical cover for looting by preaching that nothing can be known, man is worthless, and suffering is noble.',
    sectionId: 4,
    sectionTitle: "The Money Speech",
    category: 'Politics',
    type: 'proposition',
  },

  // =============================================================================
  // SCIENCE AND INTEGRITY (Section 5)
  // =============================================================================
  {
    id: 'as-022',
    title: 'The Corruption of Science',
    statement: 'When science becomes dependent on government, it loses independence and becomes a tool of political manipulation rather than truth-seeking.',
    sectionId: 5,
    sectionTitle: 'The Climax of the d\'Anconias',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-023',
    title: 'Mind-Body Dichotomy Rejection',
    statement: "The false separation between 'pure science' and practical matters is rejected; truth is truth whether in the laboratory or the marketplace.",
    sectionId: 5,
    sectionTitle: 'The Climax of the d\'Anconias',
    category: 'Epistemology',
    type: 'proposition',
  },
  {
    id: 'as-024',
    title: 'The Price of Compromise',
    statement: 'Those who compromise their integrity for safety lose everything that made them great and become unable to pursue the values they claim to hold.',
    sectionId: 5,
    sectionTitle: 'The Climax of the d\'Anconias',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-025',
    title: 'The John Galt Line',
    statement: "Dagny's separate venture to build a railroad line with Rearden Metal, named after the symbol of impossibility as an act of defiance.",
    sectionId: 5,
    sectionTitle: 'The Climax of the d\'Anconias',
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-026',
    title: 'Science Serves Truth or Force',
    statement: 'Science exists either to discover truth or to serve political masters; it cannot do both, and choosing the latter destroys its capacity for the former.',
    sectionId: 5,
    sectionTitle: 'The Climax of the d\'Anconias',
    category: 'Politics',
    type: 'proposition',
  },

  // =============================================================================
  // EITHER-OR LOGIC (Sections 10-12)
  // =============================================================================
  {
    id: 'as-027',
    title: 'Either-Or Logic',
    statement: 'The law of the excluded middle: as conflict intensifies, characters and society are forced to choose sides with no middle ground possible.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Metaphysics',
    type: 'definition',
  },
  {
    id: 'as-028',
    title: 'The Weapon of Anti-Mind Philosophy',
    statement: 'Those in power use anti-reason philosophy to give people intellectual permission not to think, removing the last barrier to mindless compliance.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-029',
    title: 'The Choice to Think',
    statement: 'The fundamental choice available to every person is whether to exercise their mind or to evade thinking.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Epistemology',
    type: 'proposition',
  },
  {
    id: 'as-030',
    title: 'No Justification for Self-Made Weapons',
    statement: 'It is immoral to manufacture the weapons that will be used against oneself; a man should not produce for those who seek to destroy him.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-031',
    title: 'Force Cannot Create',
    statement: 'Political power and force can destroy or redistribute what minds have created, but cannot produce new values.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Politics',
    type: 'definition',
  },
  {
    id: 'as-032',
    title: 'Reason is the Only Means to Knowledge',
    statement: 'Truth can only be discovered through the faculty of reason; faith, feeling, and intuition are unreliable guides to reality.',
    sectionId: 10,
    sectionTitle: 'The Sign of the Dollar',
    category: 'Epistemology',
    type: 'definition',
  },

  // =============================================================================
  // PROMETHEUS AND SACRIFICE (Sections 15-17)
  // =============================================================================
  {
    id: 'as-033',
    title: 'Prometheus Unchained',
    statement: 'John Galt is Prometheus who changed his mind—after centuries of being torn by vultures for bringing fire to men, he withdrew his fire until men withdraw their vultures.',
    sectionId: 15,
    sectionTitle: 'Account Overdrawn',
    category: 'Metaphysics',
    type: 'definition',
  },
  {
    id: 'as-034',
    title: 'Creative Destruction',
    statement: 'Producers must sometimes destroy what they have created to preserve the larger values at stake.',
    sectionId: 15,
    sectionTitle: 'Account Overdrawn',
    category: 'Productive Achievement',
    type: 'proposition',
  },
  {
    id: 'as-035',
    title: 'Hidden Purpose and Sacrifice',
    statement: 'The apparent abandonment of great potential by Francisco and other strikers is actually purposeful sacrifice in service of a larger cause.',
    sectionId: 15,
    sectionTitle: 'Account Overdrawn',
    category: 'Productive Achievement',
    type: 'proposition',
  },
  {
    id: 'as-036',
    title: 'Political Control Replaces Business Decision-Making',
    statement: 'In a corrupted system, government officials make business decisions; company directors can only discuss what political authorities permit.',
    sectionId: 15,
    sectionTitle: 'Account Overdrawn',
    category: 'Politics',
    type: 'proposition',
  },

  // =============================================================================
  // GALT'S GULCH - THE IDEAL SOCIETY (Section 20)
  // =============================================================================
  {
    id: 'as-037',
    title: 'The Strike of the Mind',
    statement: 'The most productive individuals withdraw their talents and creative energy from a society that exploits and condemns them.',
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-038',
    title: 'Atlantis Redefined',
    statement: "The legendary lost civilization is reimagined as Galt's Gulch—a place built by the greatest minds of the present who refused to be sacrificed.",
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-039',
    title: 'Voluntary Association Principle',
    statement: 'A society where every transaction is voluntary, every relationship is based on mutual benefit, and no man may obtain values by force or fraud.',
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Politics',
    type: 'definition',
  },
  {
    id: 'as-040',
    title: "The Striker's Oath",
    statement: "'I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine.'",
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Ethics',
    type: 'definition',
  },
  {
    id: 'as-041',
    title: 'No Sacrifice, No Forced Obligation',
    statement: "The moral foundation of the strikers' community rejects the concept of sacrifice and forced duty.",
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Ethics',
    type: 'definition',
  },
  {
    id: 'as-042',
    title: 'Free Exchange Among Equals',
    statement: "The basis of all relationships is free exchange of values between people who recognize each other's independence and rights.",
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Economics',
    type: 'definition',
  },
  {
    id: 'as-043',
    title: 'Individual Rights',
    statement: 'Every individual has the right to their own life, to pursue their own happiness, and to keep the products of their labor.',
    sectionId: 20,
    sectionTitle: "Atlantis",
    category: 'Politics',
    type: 'definition',
  },

  // =============================================================================
  // ART AND SPIRITUAL VALUES (Section 25)
  // =============================================================================
  {
    id: 'as-044',
    title: 'Art as Metaphysics',
    statement: "Great art expresses the artist's fundamental sense of what life is and can be—it is a projection of their view of existence.",
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-045',
    title: 'Art Should Project the Ideal',
    statement: 'Great art shows what life could and should be at its best, not wallowing in depravity or meaningless chaos.',
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Productive Achievement',
    type: 'proposition',
  },
  {
    id: 'as-046',
    title: 'Art as Spiritual Fuel',
    statement: 'Great art provides concrete images of abstract values that inspire and sustain us in the struggle to live by those values.',
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Productive Achievement',
    type: 'definition',
  },
  {
    id: 'as-047',
    title: 'Joy as Achievement',
    statement: 'The Fifth Concerto celebrates joy not as accident but as earned—the reward of successful living and creative achievement.',
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-048',
    title: 'Recognition Must Be Earned',
    statement: 'Recognition given as an arbitrary favor is worthless; true recognition must reflect genuine respect and justice.',
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-049',
    title: 'Freedom Enables Creation',
    statement: 'Only when freed from those who demand sacrifice can artists and creators produce their greatest work.',
    sectionId: 25,
    sectionTitle: 'Their Brothers\' Keepers',
    category: 'Productive Achievement',
    type: 'proposition',
  },

  // =============================================================================
  // THE MIND AND FORCE (Section 28)
  // =============================================================================
  {
    id: 'as-050',
    title: 'The Mind is the Source of All Values',
    statement: 'All productive achievement and value creation originates from the human mind; matter without mind has no value.',
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Metaphysics',
    type: 'definition',
  },
  {
    id: 'as-051',
    title: 'Knowledge Cannot Be Forced',
    statement: 'While force can destroy, torture, or kill a body, it cannot compel the mind to produce new knowledge or creative thoughts.',
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Politics',
    type: 'definition',
  },
  {
    id: 'as-052',
    title: 'The Right to Withhold',
    statement: 'If a person owns their own mind, they have the absolute right to refuse to use it for those who would enslave them.',
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-053',
    title: 'Force vs. Persuasion',
    statement: "While force can constrain a person's body, it cannot constrain their mind; the gun is ultimately powerless against a mind that refuses.",
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-054',
    title: 'The Limits of Political Power',
    statement: 'Political force can destroy existing values and structures but cannot produce new ones; its ultimate impotence is revealed when confronted with unwilling minds.',
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-055',
    title: 'Intellectual Property is Inseparable From Creator',
    statement: "Knowledge and creative inventions cannot truly be seized because they exist in the mind; without the creator's will, they remain inert.",
    sectionId: 28,
    sectionTitle: 'The Egoist',
    category: 'Economics',
    type: 'proposition',
  },

  // =============================================================================
  // THE COLLAPSE AND RESOLUTION (Section 29)
  // =============================================================================
  {
    id: 'as-056',
    title: 'The Collapse of Collectivism',
    statement: "A system built on the expropriation of producer's efforts cannot sustain itself; without the minds of the productive, it collapses under its own contradictions.",
    sectionId: 29,
    sectionTitle: 'In the Name of the Best Within Us',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-057',
    title: 'Force in Defense of Rights is Moral',
    statement: 'There is a fundamental moral distinction between initiating force (which is evil) and using force in defense of rights (which is just).',
    sectionId: 29,
    sectionTitle: 'In the Name of the Best Within Us',
    category: 'Ethics',
    type: 'proposition',
  },
  {
    id: 'as-058',
    title: 'The Return of the Creators',
    statement: 'Those who produce will rebuild civilization, but only when they can do so freely, without guilt or sacrifice.',
    sectionId: 29,
    sectionTitle: 'In the Name of the Best Within Us',
    category: 'Productive Achievement',
    type: 'proposition',
  },
  {
    id: 'as-059',
    title: 'Destruction as Prerequisite for Creation',
    statement: 'The old system built on force and sacrifice cannot be reformed; it must be destroyed so that a new civilization based on reason and freedom can be built.',
    sectionId: 29,
    sectionTitle: 'In the Name of the Best Within Us',
    category: 'Politics',
    type: 'proposition',
  },
  {
    id: 'as-060',
    title: 'The Sign of the Dollar',
    statement: 'The dollar represents productive achievement and voluntary exchange; it symbolizes the promise to rebuild a world based on reason and merit.',
    sectionId: 29,
    sectionTitle: 'In the Name of the Best Within Us',
    category: 'Economics',
    type: 'definition',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
