/**
 * Merge utilities for gamification state.
 * Used when syncing localStorage with server progress.
 * @module gamification/mergeProgress
 */

import type {
  GamificationState,
  UserProgress,
  SectionProgress,
  AchievementProgress,
  StreakData,
  DailyGoalState,
  QuizAttempt,
  MasteryLevel,
  SectionId,
} from './types';

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

const MASTERY_ORDER: MasteryLevel[] = ['none', 'learning', 'familiar', 'mastered'];

function getMasteryIndex(level: MasteryLevel): number {
  return MASTERY_ORDER.indexOf(level);
}

function maxMastery(a: MasteryLevel, b: MasteryLevel): MasteryLevel {
  return getMasteryIndex(a) >= getMasteryIndex(b) ? a : b;
}

function earlierDate(a: string | null, b: string | null): string | null {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) < new Date(b) ? a : b;
}

// =============================================================================
// MERGE FUNCTIONS
// =============================================================================

/**
 * Merge quiz attempts from two sources, removing duplicates.
 */
function mergeQuizAttempts(local: QuizAttempt[], server: QuizAttempt[]): QuizAttempt[] {
  const seen = new Set<string>();
  const merged: QuizAttempt[] = [];

  for (const attempt of [...local, ...server]) {
    // Create a unique key for each attempt
    const key = `${attempt.timestamp}-${attempt.difficulty}-${attempt.score}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(attempt);
    }
  }

  // Sort by timestamp
  return merged.sort((a, b) =>
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
}

/**
 * Merge section progress, taking the best from each source.
 */
function mergeSectionProgress(
  local: SectionProgress | undefined,
  server: SectionProgress | undefined
): SectionProgress | undefined {
  if (!local) return server;
  if (!server) return local;

  return {
    sectionId: local.sectionId,
    visitedAt: earlierDate(local.visitedAt, server.visitedAt),
    completedAt: earlierDate(local.completedAt, server.completedAt),
    timeSpentSeconds: Math.max(local.timeSpentSeconds, server.timeSpentSeconds),
    quizAttempts: mergeQuizAttempts(local.quizAttempts, server.quizAttempts),
    masteryLevel: maxMastery(local.masteryLevel, server.masteryLevel),
    visualizationsInteracted: [...new Set([
      ...local.visualizationsInteracted,
      ...server.visualizationsInteracted,
    ])],
  };
}

/**
 * Merge all sections from both sources.
 */
function mergeSections(
  local: Record<SectionId, SectionProgress>,
  server: Record<SectionId, SectionProgress>
): Record<SectionId, SectionProgress> {
  const allKeys = new Set([
    ...Object.keys(local),
    ...Object.keys(server),
  ]) as Set<SectionId>;

  const merged: Record<SectionId, SectionProgress> = {} as Record<SectionId, SectionProgress>;

  for (const key of allKeys) {
    const result = mergeSectionProgress(local[key], server[key]);
    if (result) {
      merged[key] = result;
    }
  }

  return merged;
}

/**
 * Merge user progress aggregates.
 */
function mergeUserProgress(local: UserProgress, server: UserProgress): UserProgress {
  return {
    totalXP: Math.max(local.totalXP, server.totalXP),
    level: Math.max(local.level, server.level),
    sectionsCompleted: [...new Set([
      ...local.sectionsCompleted,
      ...server.sectionsCompleted,
    ])] as SectionId[],
    partsCompleted: [...new Set([
      ...local.partsCompleted,
      ...server.partsCompleted,
    ])],
    quizzesTaken: Math.max(local.quizzesTaken, server.quizzesTaken),
    perfectQuizzes: Math.max(local.perfectQuizzes, server.perfectQuizzes),
    visualizationsUsed: Math.max(local.visualizationsUsed, server.visualizationsUsed),
    totalTimeSpentMinutes: Math.max(local.totalTimeSpentMinutes, server.totalTimeSpentMinutes),
    joinedAt: earlierDate(local.joinedAt, server.joinedAt) || local.joinedAt,
  };
}

/**
 * Merge achievements, preferring unlocked over locked.
 */
function mergeAchievements(
  local: AchievementProgress[],
  server: AchievementProgress[]
): AchievementProgress[] {
  const merged = new Map<string, AchievementProgress>();

  // Start with server achievements, then overlay local
  for (const achievement of [...server, ...local]) {
    const existing = merged.get(achievement.id);
    if (!existing) {
      merged.set(achievement.id, achievement);
    } else {
      // Prefer unlocked over locked
      if (achievement.unlockedAt && !existing.unlockedAt) {
        merged.set(achievement.id, achievement);
      } else if (!achievement.unlockedAt && !existing.unlockedAt) {
        // Both locked - take higher progress
        if (achievement.progress > existing.progress) {
          merged.set(achievement.id, achievement);
        }
      }
      // If existing is unlocked, keep it
    }
  }

  return Array.from(merged.values());
}

/**
 * Merge streak data, taking the best values.
 */
function mergeStreak(local: StreakData, server: StreakData): StreakData {
  // Take the state with longer streak history as base
  const useLocal = local.longestStreak >= server.longestStreak;
  const base = useLocal ? local : server;

  return {
    ...base,
    longestStreak: Math.max(local.longestStreak, server.longestStreak),
    freezesRemaining: Math.max(local.freezesRemaining, server.freezesRemaining),
  };
}

/**
 * Merge daily goals, preferring more recent data.
 */
function mergeDailyGoals(local: DailyGoalState, server: DailyGoalState): DailyGoalState {
  // Use whichever has the more recent date
  if (local.date > server.date) return local;
  if (server.date > local.date) return server;

  // Same date - merge
  return {
    date: local.date,
    xpEarned: Math.max(local.xpEarned, server.xpEarned),
    xpGoal: local.xpGoal,
    completed: local.completed || server.completed,
  };
}

// =============================================================================
// MAIN MERGE FUNCTION
// =============================================================================

/**
 * Merge two gamification states using "take the best" strategy.
 * Used for:
 * - First-time migration from localStorage to server
 * - Conflict resolution when same user edits on multiple devices
 *
 * @param local - The local (client) state
 * @param server - The server state
 * @returns Merged state with the best values from both
 */
export function mergeGamificationStates(
  local: GamificationState,
  server: GamificationState
): GamificationState {
  return {
    version: Math.max(local.version, server.version),
    user: mergeUserProgress(local.user, server.user),
    sections: mergeSections(local.sections, server.sections),
    achievements: mergeAchievements(local.achievements, server.achievements),
    streak: mergeStreak(local.streak, server.streak),
    dailyGoals: mergeDailyGoals(local.dailyGoals, server.dailyGoals),
    lastUpdated: new Date().toISOString(),
  };
}
