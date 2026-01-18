import type { SectionProgress, MasteryLevel } from './types';

/**
 * Calculate mastery level for a section based on quiz performance.
 *
 * Mastery levels are determined by quiz scores and attempt patterns:
 * - **Mastered**: Best score >80% (81%+) OR average ≥90% with 3+ attempts
 * - **Familiar**: Best score ≥70% OR average ≥70% with 2+ attempts
 * - **Learning**: Any other performance (default state)
 *
 * @param section - Section progress containing quiz attempt history
 * @returns Calculated mastery level ('learning' | 'familiar' | 'mastered')
 *
 * @example
 * ```ts
 * const section = {
 *   sectionId: 'linalg:1',
 *   quizAttempts: [{ score: 85 }] // 85% > 80%
 * };
 * calculateMastery(section); // Returns 'mastered'
 * ```
 *
 * @see MasteryLevel for possible return values
 * @see getMasteryInfo for display information about mastery levels
 */
export function calculateMastery(section: SectionProgress): MasteryLevel {
  const { quizAttempts } = section;

  // No quiz attempts = still learning
  if (quizAttempts.length === 0) {
    return 'learning';
  }

  // Get best quiz score
  const bestScore = Math.max(...quizAttempts.map((a) => a.score));

  // Calculate average score
  const avgScore = quizAttempts.reduce((sum, a) => sum + a.score, 0) / quizAttempts.length;

  // Mastery criteria:
  // - Mastered: best score > 80 (81%+), or avg >= 90 with 3+ attempts
  // - Familiar: best score >= 70, or avg >= 70 with 2+ attempts
  // - Learning: any other case

  if (bestScore > 80 || (avgScore >= 90 && quizAttempts.length >= 3)) {
    return 'mastered';
  }

  if (bestScore >= 70 || (avgScore >= 70 && quizAttempts.length >= 2)) {
    return 'familiar';
  }

  return 'learning';
}

/**
 * Get mastery display info
 */
export function getMasteryInfo(level: MasteryLevel): {
  label: string;
  color: string;
  symbol: string;
} {
  switch (level) {
    case 'mastered':
      return { label: 'Mastered', color: 'text-emerald-400', symbol: '✓' };
    case 'familiar':
      return { label: 'Familiar', color: 'text-yellow-400', symbol: '◐' };
    case 'learning':
      return { label: 'Learning', color: 'text-blue-400', symbol: '○' };
    case 'none':
    default:
      return { label: 'Not Started', color: 'text-dark-600', symbol: '' };
  }
}
