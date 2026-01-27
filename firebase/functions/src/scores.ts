import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Rate limiting constants for syncScores
const SYNC_RATE_LIMIT_MAX = 30; // Max syncs per user per window
const SYNC_RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

type CourseId = 'ba' | 'crypto' | 'aa' | 'linalg' | 'advlinalg' | 'islr' | 'ra' | 'calc1' | 'calc_lib_art' | 'calc_easy' | 'wm' | 'four_pillars' | 'mom' | 'euclid' | 'thales' | 'gauss' | 'human_action' | 'atlas_shrugged' | 'template' | 'mod-race' | 'base-race' | 'bfi' | 'frost' | 'koblitz' | 'coding' | 'west_graphs' | 'numbers-geometry' | 'ross-prob' | 'intro-discrete' | 'rudin' | 'df' | 'euler-intro' | 'tao-analysis-1' | 'man_econ_state' | 'road_to_serfdom' | 'orange_btc' | 'math_history';

interface ScoreUpdate {
  courseId: CourseId;
  xp: number;
}

/**
 * Update user scores from client sync
 * Called by authenticated users to sync their local progress
 */
export const syncScores = functions.https.onCall(
  async (
    data: { scores?: ScoreUpdate[]; displayName?: string | null; totalXP?: number },
    context
  ): Promise<{ success: boolean; totalXP: number }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const npub = context.auth.uid;

    // Rate limiting: check recent sync attempts for this user
    const rateLimitRef = admin.firestore().collection('rateLimits').doc(`sync_${npub}`);
    const rateLimitDoc = await rateLimitRef.get();
    const now = Date.now();

    if (rateLimitDoc.exists) {
      const data = rateLimitDoc.data()!;
      const windowStart = now - SYNC_RATE_LIMIT_WINDOW_MS;

      // Filter to only count requests within the window
      const recentRequests = (data.timestamps || []).filter(
        (ts: number) => ts > windowStart
      );

      if (recentRequests.length >= SYNC_RATE_LIMIT_MAX) {
        console.warn(`Rate limit exceeded for syncScores: ${npub}`);
        throw new functions.https.HttpsError(
          'resource-exhausted',
          'Too many sync requests. Please try again later.'
        );
      }

      // Update with new timestamp, keeping only recent ones
      await rateLimitRef.set({
        timestamps: [...recentRequests, now].slice(-SYNC_RATE_LIMIT_MAX),
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      // First request, create rate limit document
      await rateLimitRef.set({
        timestamps: [now],
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    const { scores, displayName, totalXP: providedTotalXP } = data || {};

    if (!scores || !Array.isArray(scores)) {
      // Don't log the actual scores value to avoid exposing user data
      console.error('syncScores: scores is not an array:', typeof scores);
      throw new functions.https.HttpsError(
        'invalid-argument',
        'scores must be an array'
      );
    }

    // SECURITY: Don't log user score data to cloud function logs

    const userRef = admin.firestore().collection('users').doc(npub);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'User not found. Please authenticate first.'
      );
    }

    // Check if user is banned
    if (userDoc.data()?.banned) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'User is banned'
      );
    }

    const validCourses: CourseId[] = ['ba', 'crypto', 'aa', 'linalg', 'advlinalg', 'islr', 'ra', 'calc1', 'calc_lib_art', 'calc_easy', 'wm', 'four_pillars', 'mom', 'euclid', 'thales', 'gauss', 'human_action', 'atlas_shrugged', 'template', 'mod-race', 'base-race', 'bfi', 'frost', 'koblitz', 'coding', 'west_graphs', 'numbers-geometry', 'ross-prob', 'intro-discrete', 'rudin', 'df', 'euler-intro', 'tao-analysis-1', 'man_econ_state', 'road_to_serfdom', 'orange_btc', 'math_history'];
    const batch = admin.firestore().batch();
    const userScores: Record<CourseId, number> = { ba: 0, crypto: 0, aa: 0, linalg: 0, advlinalg: 0, islr: 0, ra: 0, calc1: 0, calc_lib_art: 0, calc_easy: 0, wm: 0, four_pillars: 0, mom: 0, euclid: 0, thales: 0, gauss: 0, human_action: 0, atlas_shrugged: 0, template: 0, 'mod-race': 0, 'base-race': 0, bfi: 0, frost: 0, koblitz: 0, coding: 0, west_graphs: 0, 'numbers-geometry': 0, 'ross-prob': 0, 'intro-discrete': 0, rudin: 0, df: 0, 'euler-intro': 0, 'tao-analysis-1': 0, man_econ_state: 0, road_to_serfdom: 0, orange_btc: 0, math_history: 0 };

    for (const score of scores) {
      if (!validCourses.includes(score.courseId)) {
        console.error('syncScores: invalid courseId:', score.courseId, 'valid:', validCourses);
        throw new functions.https.HttpsError(
          'invalid-argument',
          `Invalid courseId: ${score.courseId}`
        );
      }

      if (typeof score.xp !== 'number' || score.xp < 0) {
        console.error('syncScores: invalid xp for', score.courseId, ':', score.xp, typeof score.xp);
        throw new functions.https.HttpsError(
          'invalid-argument',
          `xp must be a non-negative number for ${score.courseId}: got ${score.xp}`
        );
      }

      // Cap XP at a reasonable maximum to prevent obvious cheating
      const cappedXP = Math.min(score.xp, 1000000);
      userScores[score.courseId] = cappedXP;

      // Update or create score document
      const scoreId = `${npub}_${score.courseId}`;
      const scoreRef = admin.firestore().collection('scores').doc(scoreId);

      batch.set(scoreRef, {
        npub,
        courseId: score.courseId,
        xp: cappedXP,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    }

    // Use provided totalXP if available (includes bonuses), otherwise sum course scores
    const calculatedXP = Object.values(userScores).reduce((sum, xp) => sum + xp, 0);
    const totalXP = (providedTotalXP !== undefined && providedTotalXP > 0) ? providedTotalXP : calculatedXP;

    // Calculate level (simple formula: level = floor(sqrt(totalXP / 100)) + 1)
    const level = Math.floor(Math.sqrt(totalXP / 100)) + 1;

    // Update user document
    const updateData: Record<string, unknown> = {
      scores: userScores,
      totalXP,
      level,
      lastSeen: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Update display name if provided
    if (displayName !== undefined) {
      // Sanitize display name - only allow alphanumeric, spaces, hyphens, apostrophes, periods
      const sanitizedName = displayName
        ? displayName.trim().replace(/[^a-zA-Z0-9\s\-'.]/g, '').slice(0, 30)
        : null;
      updateData.displayName = sanitizedName;
    }

    batch.update(userRef, updateData);
    await batch.commit();

    return { success: true, totalXP };
  }
);

/**
 * Get leaderboard for a specific course or overall
 */
export const getLeaderboard = functions.https.onCall(
  async (
    data: { courseId?: CourseId | 'overall'; limit?: number },
    context
  ): Promise<{
    rankings: Array<{
      rank: number;
      npub: string;
      displayName: string | null;
      xp: number;
      level: number;
    }>;
    userRank: number | null;
  }> => {
    const { courseId, limit = 50 } = data || {};

    const validOptions = ['ba', 'crypto', 'aa', 'linalg', 'advlinalg', 'islr', 'ra', 'calc1', 'calc_lib_art', 'calc_easy', 'wm', 'four_pillars', 'mom', 'euclid', 'thales', 'gauss', 'human_action', 'atlas_shrugged', 'template', 'mod-race', 'base-race', 'bfi', 'frost', 'koblitz', 'coding', 'west_graphs', 'numbers-geometry', 'ross-prob', 'intro-discrete', 'rudin', 'df', 'euler-intro', 'tao-analysis-1', 'man_econ_state', 'road_to_serfdom', 'orange_btc', 'math_history', 'overall'];
    if (!courseId || !validOptions.includes(courseId)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseId must be a valid course ID or "overall"'
      );
    }

    const effectiveLimit = Math.min(Math.max(limit, 1), 100);
    let rankings: Array<{
      rank: number;
      npub: string;
      displayName: string | null;
      xp: number;
      level: number;
    }> = [];

    if (courseId === 'overall') {
      // Query users collection, sorted by totalXP
      const usersSnapshot = await admin.firestore()
        .collection('users')
        .where('banned', '==', false)
        .orderBy('totalXP', 'desc')
        .limit(effectiveLimit)
        .get();

      rankings = usersSnapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
          rank: index + 1,
          npub: doc.id,
          displayName: data.displayName || null,
          xp: data.totalXP || 0,
          level: data.level || 1,
        };
      });
    } else {
      // Query scores collection for specific course
      const scoresSnapshot = await admin.firestore()
        .collection('scores')
        .where('courseId', '==', courseId)
        .orderBy('xp', 'desc')
        .limit(effectiveLimit)
        .get();

      // Get user data for each score
      const npubs = scoresSnapshot.docs.map(doc => doc.data().npub);
      const usersMap = new Map<string, { displayName: string | null; level: number; banned: boolean }>();

      // Batch fetch users (Firestore 'in' queries limited to 30 items)
      // Fetch in batches of 30 to handle all npubs
      for (let i = 0; i < npubs.length; i += 30) {
        const batch = npubs.slice(i, i + 30);
        if (batch.length > 0) {
          const userDocs = await admin.firestore()
            .collection('users')
            .where(admin.firestore.FieldPath.documentId(), 'in', batch)
            .get();

          for (const doc of userDocs.docs) {
            const data = doc.data();
            usersMap.set(doc.id, {
              displayName: data.displayName || null,
              level: data.level || 1,
              banned: data.banned || false,
            });
          }
        }
      }

      rankings = scoresSnapshot.docs
        .map((doc, index) => {
          const data = doc.data();
          const userData = usersMap.get(data.npub);

          // Skip banned users
          if (userData?.banned) return null;

          return {
            rank: index + 1,
            npub: data.npub,
            displayName: userData?.displayName || null,
            xp: data.xp || 0,
            level: userData?.level || 1,
          };
        })
        .filter((r): r is NonNullable<typeof r> => r !== null);

      // Re-number ranks after filtering
      rankings.forEach((r, i) => { r.rank = i + 1; });
    }

    // Find user's rank if authenticated
    let userRank: number | null = null;
    if (context.auth) {
      const npub = context.auth.uid;
      const userIndex = rankings.findIndex(r => r.npub === npub);

      if (userIndex !== -1) {
        userRank = userIndex + 1;
      } else {
        // User is not in top rankings, calculate their actual rank
        if (courseId === 'overall') {
          const userDoc = await admin.firestore()
            .collection('users')
            .doc(npub)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data()!;
            const countSnapshot = await admin.firestore()
              .collection('users')
              .where('banned', '==', false)
              .where('totalXP', '>', userData.totalXP)
              .count()
              .get();

            userRank = countSnapshot.data().count + 1;
          }
        } else {
          const scoreDoc = await admin.firestore()
            .collection('scores')
            .doc(`${npub}_${courseId}`)
            .get();

          if (scoreDoc.exists) {
            const scoreData = scoreDoc.data()!;
            const countSnapshot = await admin.firestore()
              .collection('scores')
              .where('courseId', '==', courseId)
              .where('xp', '>', scoreData.xp)
              .count()
              .get();

            userRank = countSnapshot.data().count + 1;
          }
        }
      }
    }

    return { rankings, userRank };
  }
);

/**
 * Get a user's scores by npub (public - for Hub progress display)
 * Returns the user's course-by-course XP breakdown
 */
export const getUserScores = functions.https.onCall(
  async (
    data: { npub: string },
    _context
  ): Promise<{
    found: boolean;
    scores?: Record<CourseId, number>;
    totalXP?: number;
    level?: number;
    displayName?: string | null;
  }> => {
    const { npub } = data || {};

    if (!npub || typeof npub !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'npub is required'
      );
    }

    // Fetch user document
    const userDoc = await admin.firestore()
      .collection('users')
      .doc(npub)
      .get();

    if (!userDoc.exists) {
      return { found: false };
    }

    const userData = userDoc.data()!;

    // Don't return data for banned users
    if (userData.banned) {
      return { found: false };
    }

    return {
      found: true,
      scores: userData.scores || { ba: 0, crypto: 0, aa: 0, linalg: 0, advlinalg: 0, islr: 0, ra: 0, calc1: 0, calc_lib_art: 0, calc_easy: 0, wm: 0, four_pillars: 0, mom: 0, euclid: 0, thales: 0, gauss: 0, human_action: 0, atlas_shrugged: 0, template: 0, 'mod-race': 0, 'base-race': 0, bfi: 0, frost: 0, koblitz: 0, coding: 0, west_graphs: 0, 'numbers-geometry': 0, 'ross-prob': 0, 'intro-discrete': 0, rudin: 0, df: 0, 'euler-intro': 0, 'tao-analysis-1': 0, man_econ_state: 0, road_to_serfdom: 0, orange_btc: 0, math_history: 0 },
      totalXP: userData.totalXP || 0,
      level: userData.level || 1,
      displayName: userData.displayName || null,
    };
  }
);
