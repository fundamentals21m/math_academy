import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

type CourseId = 'ba' | 'crypto' | 'aa' | 'linalg' | 'advlinalg';

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
    data: { scores?: ScoreUpdate[]; displayName?: string | null },
    context
  ): Promise<{ success: boolean; totalXP: number }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { scores, displayName } = data || {};

    if (!scores || !Array.isArray(scores)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'scores must be an array'
      );
    }

    const npub = context.auth.uid;
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

    const validCourses: CourseId[] = ['ba', 'crypto', 'aa', 'linalg', 'advlinalg'];
    const batch = admin.firestore().batch();
    const userScores: Record<CourseId, number> = { ba: 0, crypto: 0, aa: 0, linalg: 0, advlinalg: 0 };

    for (const score of scores) {
      if (!validCourses.includes(score.courseId)) {
        throw new functions.https.HttpsError(
          'invalid-argument',
          `Invalid courseId: ${score.courseId}`
        );
      }

      if (typeof score.xp !== 'number' || score.xp < 0) {
        throw new functions.https.HttpsError(
          'invalid-argument',
          'xp must be a non-negative number'
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

    // Calculate total XP
    const totalXP = userScores.ba + userScores.crypto + userScores.aa + userScores.linalg + userScores.advlinalg;

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
      // Sanitize display name
      const sanitizedName = displayName
        ? displayName.trim().slice(0, 30).replace(/[<>]/g, '')
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

    const validOptions = ['ba', 'crypto', 'aa', 'linalg', 'advlinalg', 'overall'];
    if (!courseId || !validOptions.includes(courseId)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseId must be "ba", "crypto", "aa", "linalg", "advlinalg", or "overall"'
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

      // Batch fetch users
      if (npubs.length > 0) {
        const userDocs = await admin.firestore()
          .collection('users')
          .where(admin.firestore.FieldPath.documentId(), 'in', npubs.slice(0, 30))
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
