/**
 * Firebase integration for tracking posted BFI content
 * Uses a separate collection from the educational bot to avoid conflicts
 */

import { getDb, initializeFirebase } from './contentTracker.js';
import { FieldValue } from 'firebase-admin/firestore';

const BFI_COLLECTION = 'nostr_bfi_posted_content';

// Re-export initializeFirebase for convenience
export { initializeFirebase };

/**
 * Get all posted BFI content IDs
 * @returns {Promise<string[]>}
 */
export async function getPostedBfiContentIds() {
  try {
    const snapshot = await getDb().collection(BFI_COLLECTION).get();
    return snapshot.docs.map(doc => doc.id);
  } catch (error) {
    console.error(`Error getting posted BFI content IDs: ${error.message}`);
    return [];
  }
}

/**
 * Get count of posted BFI content by type
 * @returns {Promise<{total: number, quotes: number, takeaways: number, insights: number, callouts: number, cards: number, emphasis: number}>}
 */
export async function getPostedBfiStats() {
  try {
    const snapshot = await getDb().collection(BFI_COLLECTION).get();

    const stats = {
      total: snapshot.size,
      quotes: 0,
      takeaways: 0,
      insights: 0,
      callouts: 0,
      cards: 0,
      emphasis: 0,
    };

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (stats[data.type + 's'] !== undefined) {
        stats[data.type + 's']++;
      } else if (data.type === 'emphasis') {
        stats.emphasis++;
      }
    });

    return stats;
  } catch (error) {
    console.error(`Error getting BFI posted content stats: ${error.message}`);
    return { total: 0, quotes: 0, takeaways: 0, insights: 0, callouts: 0, cards: 0, emphasis: 0 };
  }
}

/**
 * Record that BFI content was posted
 * @param {string} contentId - Unique content identifier
 * @param {string} nostrEventId - The Nostr event ID from posting
 * @param {Object} metadata - Additional metadata about the content
 * @returns {Promise<void>}
 */
export async function recordBfiPost(contentId, nostrEventId, metadata) {
  try {
    await getDb().collection(BFI_COLLECTION).doc(contentId).set({
      id: contentId,
      type: metadata.type,
      sectionId: metadata.sectionId,
      sectionTitle: metadata.sectionTitle,
      postedAt: FieldValue.serverTimestamp(),
      nostrEventId: nostrEventId,
      postContent: metadata.postContent || '',
    });
    console.log(`Recorded BFI post: ${contentId}`);
  } catch (error) {
    console.error(`Error recording BFI post: ${error.message}`);
    throw error;
  }
}

/**
 * Reset all posted BFI content (start fresh)
 * Use with caution!
 * @returns {Promise<number>} Number of documents deleted
 */
export async function resetPostedBfiContent() {
  try {
    const snapshot = await getDb().collection(BFI_COLLECTION).get();
    const batch = getDb().batch();

    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Reset: Deleted ${snapshot.size} BFI posted content records`);
    return snapshot.size;
  } catch (error) {
    console.error(`Error resetting BFI posted content: ${error.message}`);
    throw error;
  }
}

/**
 * Get recently posted BFI content
 * @param {number} limit - Maximum number of items to return
 * @returns {Promise<Array>}
 */
export async function getRecentBfiPosts(limit = 10) {
  try {
    const snapshot = await getDb()
      .collection(BFI_COLLECTION)
      .orderBy('postedAt', 'desc')
      .limit(limit)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      postedAt: doc.data().postedAt?.toDate?.() || null,
    }));
  } catch (error) {
    console.error(`Error getting recent BFI posts: ${error.message}`);
    return [];
  }
}
