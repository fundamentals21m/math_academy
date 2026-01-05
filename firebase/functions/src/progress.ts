import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// =============================================================================
// TYPES (mirror of shared/gamification/types.ts for Cloud Functions)
// =============================================================================

type CourseId = 'ba' | 'crypto' | 'aa' | 'linalg' | 'advlinalg' | 'islr' | 'ra' | 'calc1' | 'calc_lib_art' | 'calc_easy' | 'wm' | 'four_pillars' | 'mom' | 'gauss' | 'thales' | 'euclid' | 'template';
type SectionId = `${CourseId}:${number}`;
type MasteryLevel = 'none' | 'learning' | 'familiar' | 'mastered';
type Difficulty = 'easy' | 'medium' | 'hard';

interface QuizAttempt {
  timestamp: string;
  difficulty: Difficulty;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
}

interface SectionProgress {
  sectionId: SectionId;
  visitedAt: string | null;
  completedAt: string | null;
  timeSpentSeconds: number;
  quizAttempts: QuizAttempt[];
  masteryLevel: MasteryLevel;
  visualizationsInteracted: string[];
}

interface UserProgress {
  totalXP: number;
  level: number;
  sectionsCompleted: SectionId[];
  partsCompleted: string[];
  quizzesTaken: number;
  perfectQuizzes: number;
  visualizationsUsed: number;
  totalTimeSpentMinutes: number;
  joinedAt: string;
}

interface AchievementProgress {
  id: string;
  unlockedAt: string | null;
  progress: number;
  target: number;
}

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  freezesRemaining: number;
  freezeUsedToday: boolean;
}

interface DailyGoalState {
  date: string;
  xpEarned: number;
  xpGoal: number;
  completed: boolean;
}

type RacingTier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface RacingStats {
  gamesPlayed: number;
  multiplayerGamesPlayed: number;
  totalPoints: number;
  highScore: number;
  highestTierUnlocked: RacingTier;
  longestStreak: number;
  fastAnswers: number;
  totalCorrect: number;
  totalAttempted: number;
  multiplayerWins: number;
  lastPlayedAt: string | null;
}

interface GamificationState {
  version: number;
  user: UserProgress;
  sections: Record<string, SectionProgress>;
  achievements: AchievementProgress[];
  streak: StreakData;
  dailyGoals: DailyGoalState;
  racingStats?: RacingStats;
  lastUpdated: string;
}

// =============================================================================
// MERGE UTILITIES
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

function mergeQuizAttempts(local: QuizAttempt[], server: QuizAttempt[]): QuizAttempt[] {
  const seen = new Set<string>();
  const merged: QuizAttempt[] = [];

  for (const attempt of [...local, ...server]) {
    const key = `${attempt.timestamp}-${attempt.difficulty}-${attempt.score}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(attempt);
    }
  }

  return merged.sort((a, b) =>
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
}

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

function mergeSections(
  local: Record<string, SectionProgress>,
  server: Record<string, SectionProgress>
): Record<string, SectionProgress> {
  const allKeys = new Set([...Object.keys(local), ...Object.keys(server)]);
  const merged: Record<string, SectionProgress> = {};

  for (const key of allKeys) {
    const result = mergeSectionProgress(local[key], server[key]);
    if (result) {
      merged[key] = result;
    }
  }

  return merged;
}

function mergeUserProgress(local: UserProgress, server: UserProgress): UserProgress {
  return {
    totalXP: Math.max(local.totalXP, server.totalXP),
    level: Math.max(local.level, server.level),
    sectionsCompleted: [...new Set([...local.sectionsCompleted, ...server.sectionsCompleted])] as SectionId[],
    partsCompleted: [...new Set([...local.partsCompleted, ...server.partsCompleted])],
    quizzesTaken: Math.max(local.quizzesTaken, server.quizzesTaken),
    perfectQuizzes: Math.max(local.perfectQuizzes, server.perfectQuizzes),
    visualizationsUsed: Math.max(local.visualizationsUsed, server.visualizationsUsed),
    totalTimeSpentMinutes: Math.max(local.totalTimeSpentMinutes, server.totalTimeSpentMinutes),
    joinedAt: earlierDate(local.joinedAt, server.joinedAt) || local.joinedAt,
  };
}

function mergeAchievements(
  local: AchievementProgress[],
  server: AchievementProgress[]
): AchievementProgress[] {
  const merged = new Map<string, AchievementProgress>();

  for (const achievement of [...server, ...local]) {
    const existing = merged.get(achievement.id);
    if (!existing) {
      merged.set(achievement.id, achievement);
    } else {
      // Prefer unlocked over locked, then higher progress
      if (achievement.unlockedAt && !existing.unlockedAt) {
        merged.set(achievement.id, achievement);
      } else if (!achievement.unlockedAt && !existing.unlockedAt) {
        if (achievement.progress > existing.progress) {
          merged.set(achievement.id, achievement);
        }
      }
    }
  }

  return Array.from(merged.values());
}

function mergeStreak(local: StreakData, server: StreakData): StreakData {
  // Take the state with longer streak history
  const useLocal = local.longestStreak >= server.longestStreak;
  const base = useLocal ? local : server;

  return {
    ...base,
    longestStreak: Math.max(local.longestStreak, server.longestStreak),
    freezesRemaining: Math.max(local.freezesRemaining, server.freezesRemaining),
  };
}

function mergeDailyGoals(local: DailyGoalState, server: DailyGoalState): DailyGoalState {
  // Use whichever has the more recent date, or merge if same date
  if (local.date > server.date) return local;
  if (server.date > local.date) return server;

  return {
    date: local.date,
    xpEarned: Math.max(local.xpEarned, server.xpEarned),
    xpGoal: local.xpGoal,
    completed: local.completed || server.completed,
  };
}

function mergeRacingStats(
  local: RacingStats | undefined,
  server: RacingStats | undefined
): RacingStats | undefined {
  if (!local && !server) return undefined;
  if (!local) return server;
  if (!server) return local;

  return {
    gamesPlayed: Math.max(local.gamesPlayed, server.gamesPlayed),
    multiplayerGamesPlayed: Math.max(local.multiplayerGamesPlayed, server.multiplayerGamesPlayed),
    totalPoints: Math.max(local.totalPoints, server.totalPoints),
    highScore: Math.max(local.highScore, server.highScore),
    highestTierUnlocked: Math.max(local.highestTierUnlocked, server.highestTierUnlocked) as RacingTier,
    longestStreak: Math.max(local.longestStreak, server.longestStreak),
    fastAnswers: Math.max(local.fastAnswers, server.fastAnswers),
    totalCorrect: Math.max(local.totalCorrect, server.totalCorrect),
    totalAttempted: Math.max(local.totalAttempted, server.totalAttempted),
    multiplayerWins: Math.max(local.multiplayerWins, server.multiplayerWins),
    lastPlayedAt: local.lastPlayedAt && server.lastPlayedAt
      ? (new Date(local.lastPlayedAt) > new Date(server.lastPlayedAt) ? local.lastPlayedAt : server.lastPlayedAt)
      : local.lastPlayedAt || server.lastPlayedAt,
  };
}

function mergeGamificationStates(
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
    racingStats: mergeRacingStats(local.racingStats, server.racingStats),
    lastUpdated: new Date().toISOString(),
  };
}

// =============================================================================
// VALIDATION
// =============================================================================

function isValidGamificationState(data: unknown): data is GamificationState {
  if (!data || typeof data !== 'object') return false;

  const state = data as Record<string, unknown>;

  return (
    typeof state.version === 'number' &&
    typeof state.user === 'object' && state.user !== null &&
    typeof state.sections === 'object' && state.sections !== null &&
    Array.isArray(state.achievements) &&
    typeof state.streak === 'object' && state.streak !== null &&
    typeof state.dailyGoals === 'object' && state.dailyGoals !== null &&
    typeof state.lastUpdated === 'string'
  );
}

// =============================================================================
// CLOUD FUNCTIONS
// =============================================================================

interface SyncProgressRequest {
  progress: GamificationState;
  lastSyncedAt: string | null;
}

interface SyncProgressResponse {
  success: boolean;
  serverProgress: GamificationState | null;
  lastSyncedAt: string;
  merged: boolean;
}

/**
 * Sync full gamification progress from client to server.
 * Handles merge conflicts using "take the best" strategy.
 */
export const syncProgress = functions.https.onCall(
  async (
    data: SyncProgressRequest,
    context
  ): Promise<SyncProgressResponse> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { progress, lastSyncedAt } = data || {};

    if (!progress || !isValidGamificationState(progress)) {
      console.error('syncProgress: invalid progress data:', typeof progress);
      throw new functions.https.HttpsError(
        'invalid-argument',
        'progress must be a valid GamificationState object'
      );
    }

    const npub = context.auth.uid;
    const userRef = admin.firestore().collection('users').doc(npub);
    const progressRef = userRef.collection('progress').doc('current');

    // Check if user exists and is not banned
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'User not found. Please authenticate first.'
      );
    }

    if (userDoc.data()?.banned) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'User is banned'
      );
    }

    // Fetch existing server progress
    const progressDoc = await progressRef.get();
    const serverProgress = progressDoc.exists
      ? (progressDoc.data() as GamificationState & { lastSyncedAt?: admin.firestore.Timestamp })
      : null;

    let finalProgress: GamificationState;
    let merged = false;

    if (!serverProgress) {
      // First sync - just save the client progress
      finalProgress = progress;
    } else {
      // Check for conflict using lastSyncedAt
      const serverLastSynced = serverProgress.lastSyncedAt?.toDate?.()?.toISOString?.() || serverProgress.lastUpdated;

      if (lastSyncedAt && lastSyncedAt === serverLastSynced) {
        // No conflict - client has latest
        finalProgress = progress;
      } else {
        // Conflict detected - merge states
        console.log(`syncProgress: Merging progress for ${npub} (client lastSyncedAt: ${lastSyncedAt}, server: ${serverLastSynced})`);
        finalProgress = mergeGamificationStates(progress, serverProgress);
        merged = true;
      }
    }

    const now = admin.firestore.FieldValue.serverTimestamp();

    // Save progress to subcollection
    await progressRef.set({
      ...finalProgress,
      lastSyncedAt: now,
    });

    // Also update the main user document with totalXP and level for leaderboard
    await userRef.update({
      totalXP: finalProgress.user.totalXP,
      level: finalProgress.user.level,
      lastSeen: now,
    });

    // Get the actual timestamp value for response
    const updatedDoc = await progressRef.get();
    const newLastSyncedAt = updatedDoc.data()?.lastSyncedAt?.toDate?.()?.toISOString?.() || new Date().toISOString();

    return {
      success: true,
      serverProgress: merged ? finalProgress : null,
      lastSyncedAt: newLastSyncedAt,
      merged,
    };
  }
);

interface GetProgressResponse {
  found: boolean;
  progress: GamificationState | null;
  lastSyncedAt: string | null;
}

/**
 * Get user's gamification progress from server.
 * Called on app load to restore progress.
 */
export const getProgress = functions.https.onCall(
  async (
    _data: unknown,
    context
  ): Promise<GetProgressResponse> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const npub = context.auth.uid;
    const userRef = admin.firestore().collection('users').doc(npub);
    const progressRef = userRef.collection('progress').doc('current');

    // Check if user exists and is not banned
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return { found: false, progress: null, lastSyncedAt: null };
    }

    if (userDoc.data()?.banned) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'User is banned'
      );
    }

    // Fetch progress
    const progressDoc = await progressRef.get();

    if (!progressDoc.exists) {
      return { found: false, progress: null, lastSyncedAt: null };
    }

    const data = progressDoc.data();
    const lastSyncedAt = data?.lastSyncedAt?.toDate?.()?.toISOString?.() || null;

    // Remove Firestore-specific fields before returning
    const progress: GamificationState = {
      version: data?.version || 2,
      user: data?.user,
      sections: data?.sections || {},
      achievements: data?.achievements || [],
      streak: data?.streak,
      dailyGoals: data?.dailyGoals,
      racingStats: data?.racingStats,
      lastUpdated: data?.lastUpdated || new Date().toISOString(),
    };

    return {
      found: true,
      progress,
      lastSyncedAt,
    };
  }
);
