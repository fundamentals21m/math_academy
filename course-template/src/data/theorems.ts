/**
 * Theorem and Definition Entries
 *
 * This file contains all theorems, definitions, and important results
 * from the course. They are displayed on the Theorems page and can be
 * linked from individual sections.
 *
 * Guidelines:
 * - sectionId should match the section where the theorem is introduced
 * - Use LaTeX notation for mathematical statements
 * - Set hasProof: true if the section includes a proof
 * - Category helps organize theorems on the reference page
 */

export interface TheoremEntry {
  /** Unique identifier for the theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of the theorem */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category: string;
  /** Whether a proof is provided in the section */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
}

// =============================================================================
// THEOREMS AND DEFINITIONS
// Organize by category or chapter for easier maintenance
// =============================================================================

export const theorems: TheoremEntry[] = [
  // ---------------------------------------------------------------------------
  // FUNDAMENTALS
  // ---------------------------------------------------------------------------
  {
    id: 'def-example',
    title: 'Example Definition',
    statement: 'This is an example definition that explains a key concept.',
    sectionId: 0,
    category: 'Fundamentals',
    type: 'definition',
  },
  {
    id: 'thm-example',
    title: 'Example Theorem',
    statement: 'If condition A holds, then conclusion B follows.',
    sectionId: 1,
    category: 'Fundamentals',
    type: 'theorem',
    hasProof: true,
  },

  // ---------------------------------------------------------------------------
  // CORE CONCEPTS
  // ---------------------------------------------------------------------------
  // Add theorems for Core Concepts chapter here

  // ---------------------------------------------------------------------------
  // ADVANCED TOPICS
  // ---------------------------------------------------------------------------
  // Add theorems for Advanced Topics chapter here
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get theorems by category
 */
export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

/**
 * Get theorems by section
 */
export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category))];
}

/**
 * Search theorems by title or statement
 */
export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
