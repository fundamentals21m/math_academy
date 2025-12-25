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
  {
    id: 'def-sample',
    title: 'Sample Definition',
    statement: 'A function $f: A \\to B$ is a mapping from set $A$ to set $B$.',
    sectionId: 1,
    category: 'Fundamentals',
    type: 'definition',
  },
  {
    id: 'thm-sample',
    title: 'Sample Theorem',
    statement: 'If $A \\subseteq B$ and $B \\subseteq A$, then $A = B$',
    sectionId: 2,
    category: 'Fundamentals',
    type: 'theorem',
    hasProof: true,
    proof: `
      Let $x \\in A$. Since $A \\subseteq B$, we have $x \\in B$ by definition of subset.
      Therefore, every element of $A$ is in $B$.
      
      Now, let $y \\in B$. Since $B \\subseteq A$, we have $y \\in A$ by definition.
      Therefore, every element of $B$ is in $A$.
      
      Since $A \\subseteq B$ and $B \\subseteq A$, the two sets contain exactly the same elements.
      Thus, $A = B$.
    `,
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter(Boolean))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
