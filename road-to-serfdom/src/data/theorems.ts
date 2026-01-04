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
  // ===== DEFINITIONS =====
  {
    id: 'def-individualism',
    title: 'Individualism',
    statement: 'The political tradition that recognizes the individual as the ultimate judge of their own ends, respects their opinions and tastes as supreme within their sphere, and believes society should be organized to allow the maximum scope for individual initiative and choice.',
    sectionId: 1,
    sectionTitle: 'The Abandoned Road',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-collectivism',
    title: 'Collectivism',
    statement: 'Any system that organizes society to pursue collective goals chosen by central authority, deliberately subordinating individual purposes to the aims of the group. Socialism is merely one species of this broader genus.',
    sectionId: 3,
    sectionTitle: 'Individualism and Collectivism',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-planning',
    title: 'Economic Planning',
    statement: 'Central direction of all economic activity according to a single plan, laying down how society\'s resources should be "consciously directed" to serve particular ends in a definite way—as opposed to the competitive system where nobody has such power.',
    sectionId: 3,
    sectionTitle: 'Individualism and Collectivism',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-rule-of-law',
    title: 'The Rule of Law',
    statement: 'The principle that government is bound by rules fixed and announced beforehand—rules that make it possible to foresee with certainty how authority will use its coercive powers, enabling individuals to plan their affairs accordingly.',
    sectionId: 6,
    sectionTitle: 'Planning and the Rule of Law',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-spontaneous-order',
    title: 'Spontaneous Order',
    statement: 'Social coordination emerging from individuals pursuing their own purposes within general rules, producing results that no one designed but serve human needs better than any conscious planning could achieve.',
    sectionId: 4,
    sectionTitle: 'The "Inevitability" of Planning',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-totalitarianism',
    title: 'Totalitarianism',
    statement: 'A system where political power extends to the whole of life—where the state recognizes no autonomous spheres of individual action and all aspects of existence are subordinated to political ends.',
    sectionId: 7,
    sectionTitle: 'Economic Control and Totalitarianism',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-serfdom',
    title: 'The New Serfdom',
    statement: 'The condition of modern totalitarian servitude where the individual is bound not to the soil but to the economic machine—unable to choose occupation, residence, or lifestyle, yet denied the security the old serf possessed.',
    sectionId: 9,
    sectionTitle: 'Security and Freedom',
    category: 'Definitions',
    type: 'definition',
  },
  {
    id: 'def-formal-equality',
    title: 'Formal Equality',
    statement: 'Equality before the law: the liberal principle that the same rules apply to all regardless of status, as opposed to material equality which requires differential treatment and arbitrary power.',
    sectionId: 6,
    sectionTitle: 'Planning and the Rule of Law',
    category: 'Definitions',
    type: 'definition',
  },

  // ===== CORE PRINCIPLES =====
  {
    id: 'prin-competition',
    title: 'The Principle of Competition',
    statement: 'Competition is the only method by which complex economic activities can be adjusted to changing circumstances without coercive or arbitrary intervention. It dispenses with the need for "conscious social control" and gives individuals a chance to decide whether their prospects are sufficient.',
    sectionId: 3,
    sectionTitle: 'Individualism and Collectivism',
    category: 'Core Principles',
    type: 'proposition',
  },
  {
    id: 'prin-knowledge',
    title: 'The Knowledge Problem',
    statement: 'The economic problem is not merely allocating given resources but utilizing knowledge dispersed among millions of individuals—knowledge of particular circumstances of time and place that no central authority can possess.',
    sectionId: 4,
    sectionTitle: 'The "Inevitability" of Planning',
    category: 'Core Principles',
    type: 'proposition',
  },
  {
    id: 'prin-economic-political',
    title: 'Unity of Economic and Political Freedom',
    statement: 'Economic control is not control of a separate sector of life but control of the means for all our ends. Whoever has sole control of the means must also determine which ends are to be served.',
    sectionId: 7,
    sectionTitle: 'Economic Control and Totalitarianism',
    category: 'Core Principles',
    type: 'theorem',
    hasProof: true,
    proof: 'Economic freedom means freedom to choose how we earn and spend our income. Without it, there is no freedom of the press (you need printing resources), no freedom of movement (you need transportation), no effective freedom at all. All freedoms require economic means for their exercise.',
  },
  {
    id: 'prin-democracy-limits',
    title: 'The Limits of Democracy',
    statement: 'Democracy is a means, not an end—a method of peaceful change, not a guarantee of liberty. It can be as tyrannical as dictatorship when the majority claims unlimited power over all aspects of life.',
    sectionId: 5,
    sectionTitle: 'Planning and Democracy',
    category: 'Core Principles',
    type: 'proposition',
  },
  {
    id: 'prin-morality-freedom',
    title: 'Freedom and Moral Responsibility',
    statement: 'Outside of the sphere of individual responsibility there is neither goodness nor badness. Only where we are responsible for our own interests and free to sacrifice them has our decision moral value.',
    sectionId: 14,
    sectionTitle: 'Material Conditions and Ideal Ends',
    category: 'Core Principles',
    type: 'theorem',
  },

  // ===== WARNINGS =====
  {
    id: 'warn-worst-on-top',
    title: 'Why the Worst Get on Top',
    statement: 'In a totalitarian system, the ruthless and unscrupulous are most likely to succeed: (1) the less intelligent form larger homogeneous groups, (2) gaining support requires appealing to negative passions, and (3) success requires willingness to do bad things.',
    sectionId: 10,
    sectionTitle: 'Why the Worst Get on Top',
    category: 'Warnings',
    type: 'theorem',
    hasProof: true,
    proof: 'The higher the education and intelligence of individuals, the more their tastes and views differ. To form a large homogeneous group, one must descend to the lowest common denominator. Furthermore, it is easier to unite people against an enemy than for a positive program. Finally, the leader must be prepared to break every moral rule—ordinary people will not do this, but the ruthless will.',
  },
  {
    id: 'warn-middle-way',
    title: 'The Illusion of the Middle Way',
    statement: 'There is no "middle way" between competition and central direction. Both are alternatives for solving the same problem; a mixture means neither works effectively, and the logic of intervention leads to ever more control.',
    sectionId: 3,
    sectionTitle: 'Individualism and Collectivism',
    category: 'Warnings',
    type: 'proposition',
  },
  {
    id: 'warn-end-of-truth',
    title: 'The End of Truth',
    statement: 'Totalitarianism inevitably destroys truth: (1) doctrine must never be questioned, (2) every activity becomes political, (3) words are perverted to mean their opposite, and (4) science is corrupted to serve the party.',
    sectionId: 11,
    sectionTitle: 'The End of Truth',
    category: 'Warnings',
    type: 'proposition',
  },
  {
    id: 'warn-security-freedom',
    title: 'The Security Trap',
    statement: 'The more we seek absolute security through state provision, the more we sacrifice liberty. Ultimate security means complete dependence—and the "security" of the slave who is fed but not free.',
    sectionId: 9,
    sectionTitle: 'Security and Freedom',
    category: 'Warnings',
    type: 'proposition',
  },
  {
    id: 'warn-good-intentions',
    title: 'Good Intentions Lead to Serfdom',
    statement: 'The worst evils are not caused by wicked men pursuing evil ends, but by earnest idealists striving to create heaven on earth. When people are convinced they are building utopia, they will commit any atrocity.',
    sectionId: 2,
    sectionTitle: 'The Great Utopia',
    category: 'Warnings',
    type: 'proposition',
  },
  {
    id: 'warn-socialist-nazis',
    title: 'The Socialist Roots of Nazism',
    statement: 'Nazism emerged not as a reaction against socialism but as its evolution. The Nazis were recruited from socialist ranks, adopted socialist methods, and fulfilled socialist predictions about capitalism\'s collapse.',
    sectionId: 12,
    sectionTitle: 'The Socialist Roots of Nazism',
    category: 'Warnings',
    type: 'proposition',
  },

  // ===== HISTORICAL OBSERVATIONS =====
  {
    id: 'obs-german-development',
    title: 'The German Path',
    statement: 'Germany did not abandon liberalism because it failed, but because Germany never fully embraced it. What failed was socialism—but socialists blamed liberalism for problems socialism created.',
    sectionId: 1,
    sectionTitle: 'The Abandoned Road',
    category: 'Historical Observations',
    type: 'proposition',
  },
  {
    id: 'obs-liberal-achievement',
    title: 'The Liberal Achievement',
    statement: 'The 19th century saw unprecedented progress in freedom, prosperity, and knowledge. This was not despite liberalism but because of it—yet we have forgotten what made it possible.',
    sectionId: 1,
    sectionTitle: 'The Abandoned Road',
    category: 'Historical Observations',
    type: 'proposition',
  },
  {
    id: 'obs-tocqueville',
    title: 'Tocqueville\'s Warning',
    statement: '"Democracy extends the sphere of individual freedom, socialism restricts it. Democracy attaches all possible value to each man; socialism makes each man a mere agent. Democracy and socialism have nothing in common but one word: equality. But notice the difference: while democracy seeks equality in liberty, socialism seeks equality in restraint and servitude."',
    sectionId: 2,
    sectionTitle: 'The Great Utopia',
    category: 'Historical Observations',
    type: 'proposition',
  },

  // ===== CONCLUSIONS =====
  {
    id: 'conc-international',
    title: 'The Federal Solution',
    statement: 'International order requires federation with limited powers—authority to restrain nations from harmful actions (say "no" to restrictions) but not to direct them. An omnipotent super-state would be worse than nationalism; a loose association insufficient.',
    sectionId: 15,
    sectionTitle: 'The Prospects of International Order',
    category: 'Conclusions',
    type: 'proposition',
  },
  {
    id: 'conc-progressive-policy',
    title: 'The Only Progressive Policy',
    statement: '"If in the first attempt to create a world of free men we have failed, we must try again." Freedom for the individual remains the only truly progressive policy—not returning to the past, but building on its achievements.',
    sectionId: 16,
    sectionTitle: 'Conclusion',
    category: 'Conclusions',
    type: 'proposition',
  },
  {
    id: 'conc-local-government',
    title: 'Local Self-Government',
    statement: 'Nowhere has democracy worked well without a great measure of local self-government. It serves as a school of political training, allows ordinary people to participate in familiar affairs, and prevents the dangerous concentration of power.',
    sectionId: 15,
    sectionTitle: 'The Prospects of International Order',
    category: 'Conclusions',
    type: 'proposition',
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
