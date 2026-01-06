/**
 * Firebase integration for tracking posted content to avoid duplicates
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

let db = null;

/**
 * Initialize Firebase Admin SDK
 * @param {string} serviceAccountJson - JSON string of service account credentials
 */
export function initializeFirebase(serviceAccountJson) {
  if (db) return db;

  try {
    const serviceAccount = JSON.parse(serviceAccountJson);

    initializeApp({
      credential: cert(serviceAccount),
    });

    db = getFirestore();
    console.log('Firebase initialized successfully');
    return db;
  } catch (error) {
    console.error('Failed to initialize Firebase:', error.message);
    throw error;
  }
}

/**
 * Get the Firestore instance
 */
export function getDb() {
  if (!db) {
    throw new Error('Firebase not initialized. Call initializeFirebase first.');
  }
  return db;
}

const COLLECTION_NAME = 'nostr_posted_content';

/**
 * Check if content has already been posted
 * @param {string} contentId - Unique content identifier (e.g., "theorem:gauss:thm-crt")
 * @returns {Promise<boolean>}
 */
export async function isContentPosted(contentId) {
  try {
    const doc = await getDb().collection(COLLECTION_NAME).doc(contentId).get();
    return doc.exists;
  } catch (error) {
    console.error(`Error checking if content posted: ${error.message}`);
    return false; // Assume not posted on error to allow posting
  }
}

/**
 * Get all posted content IDs
 * @returns {Promise<string[]>}
 */
export async function getPostedContentIds() {
  try {
    const snapshot = await getDb().collection(COLLECTION_NAME).get();
    return snapshot.docs.map(doc => doc.id);
  } catch (error) {
    console.error(`Error getting posted content IDs: ${error.message}`);
    return [];
  }
}

/**
 * Get count of posted content
 * @returns {Promise<{total: number, theorems: number, visualizations: number}>}
 */
export async function getPostedContentStats() {
  try {
    const snapshot = await getDb().collection(COLLECTION_NAME).get();
    let theorems = 0;
    let visualizations = 0;

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.type === 'theorem') theorems++;
      else if (data.type === 'visualization') visualizations++;
    });

    return {
      total: snapshot.size,
      theorems,
      visualizations,
    };
  } catch (error) {
    console.error(`Error getting posted content stats: ${error.message}`);
    return { total: 0, theorems: 0, visualizations: 0 };
  }
}

/**
 * Record that content was posted
 * @param {string} contentId - Unique content identifier
 * @param {string} nostrEventId - The Nostr event ID from posting
 * @param {Object} metadata - Additional metadata about the content
 * @returns {Promise<void>}
 */
export async function recordPost(contentId, nostrEventId, metadata) {
  try {
    await getDb().collection(COLLECTION_NAME).doc(contentId).set({
      id: contentId,
      type: metadata.type,
      courseId: metadata.courseId,
      title: metadata.title,
      postedAt: FieldValue.serverTimestamp(),
      nostrEventId: nostrEventId,
      postContent: metadata.postContent || '',
    });
    console.log(`Recorded post: ${contentId}`);
  } catch (error) {
    console.error(`Error recording post: ${error.message}`);
    throw error;
  }
}

/**
 * Reset all posted content (start fresh)
 * Use with caution!
 * @returns {Promise<number>} Number of documents deleted
 */
export async function resetPostedContent() {
  try {
    const snapshot = await getDb().collection(COLLECTION_NAME).get();
    const batch = getDb().batch();

    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Reset: Deleted ${snapshot.size} posted content records`);
    return snapshot.size;
  } catch (error) {
    console.error(`Error resetting posted content: ${error.message}`);
    throw error;
  }
}

/**
 * Get recently posted content
 * @param {number} limit - Maximum number of items to return
 * @returns {Promise<Array>}
 */
export async function getRecentPosts(limit = 10) {
  try {
    const snapshot = await getDb()
      .collection(COLLECTION_NAME)
      .orderBy('postedAt', 'desc')
      .limit(limit)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      postedAt: doc.data().postedAt?.toDate?.() || null,
    }));
  } catch (error) {
    console.error(`Error getting recent posts: ${error.message}`);
    return [];
  }
}
