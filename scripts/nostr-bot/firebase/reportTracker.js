/**
 * Firebase integration for tracking Nostr followers and daily reports
 */

import { getDb } from './contentTracker.js';
import { FieldValue } from 'firebase-admin/firestore';

const FOLLOWERS_COLLECTION = 'nostr_followers';
const REPORTS_COLLECTION = 'nostr_daily_reports';

/**
 * Get stored followers for an account
 * @param {string} accountName - Account identifier (e.g., 'mim', 'bfi')
 * @returns {Promise<string[]>} - Array of follower pubkeys (hex format)
 */
export async function getStoredFollowers(accountName) {
  try {
    const doc = await getDb().collection(FOLLOWERS_COLLECTION).doc(accountName).get();
    if (!doc.exists) {
      return [];
    }
    return doc.data().followers || [];
  } catch (error) {
    console.error(`Error getting stored followers for ${accountName}: ${error.message}`);
    return [];
  }
}

/**
 * Save current followers for an account
 * @param {string} accountName - Account identifier
 * @param {string[]} followers - Array of follower pubkeys (hex format)
 * @returns {Promise<void>}
 */
export async function saveFollowers(accountName, followers) {
  try {
    await getDb().collection(FOLLOWERS_COLLECTION).doc(accountName).set({
      accountName,
      followers,
      followerCount: followers.length,
      updatedAt: FieldValue.serverTimestamp(),
    });
    console.log(`Saved ${followers.length} followers for ${accountName}`);
  } catch (error) {
    console.error(`Error saving followers for ${accountName}: ${error.message}`);
    throw error;
  }
}

/**
 * Save a daily report
 * @param {string} accountName - Account identifier
 * @param {Object} report - Report data
 * @returns {Promise<void>}
 */
export async function saveDailyReport(accountName, report) {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const docId = `${accountName}_${date}`;

  try {
    await getDb().collection(REPORTS_COLLECTION).doc(docId).set({
      accountName,
      date,
      ...report,
      createdAt: FieldValue.serverTimestamp(),
    });
    console.log(`Saved daily report for ${accountName} on ${date}`);
  } catch (error) {
    console.error(`Error saving daily report: ${error.message}`);
    throw error;
  }
}

/**
 * Get report history for an account
 * @param {string} accountName - Account identifier
 * @param {number} days - Number of days to retrieve
 * @returns {Promise<Array>}
 */
export async function getReportHistory(accountName, days = 7) {
  try {
    const snapshot = await getDb()
      .collection(REPORTS_COLLECTION)
      .where('accountName', '==', accountName)
      .orderBy('date', 'desc')
      .limit(days)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || null,
    }));
  } catch (error) {
    console.error(`Error getting report history: ${error.message}`);
    return [];
  }
}

/**
 * Get the most recent report for an account
 * @param {string} accountName - Account identifier
 * @returns {Promise<Object|null>}
 */
export async function getLatestReport(accountName) {
  try {
    const snapshot = await getDb()
      .collection(REPORTS_COLLECTION)
      .where('accountName', '==', accountName)
      .orderBy('date', 'desc')
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || null,
    };
  } catch (error) {
    console.error(`Error getting latest report: ${error.message}`);
    return null;
  }
}

/**
 * Calculate follower delta between current and stored followers
 * @param {string[]} currentFollowers - Current follower list (hex pubkeys)
 * @param {string[]} storedFollowers - Previously stored followers (hex pubkeys)
 * @returns {{newFollowers: string[], lostFollowers: string[], delta: number}}
 */
export function calculateFollowerDelta(currentFollowers, storedFollowers) {
  const currentSet = new Set(currentFollowers);
  const storedSet = new Set(storedFollowers);

  const newFollowers = currentFollowers.filter((f) => !storedSet.has(f));
  const lostFollowers = storedFollowers.filter((f) => !currentSet.has(f));

  return {
    newFollowers,
    lostFollowers,
    delta: newFollowers.length - lostFollowers.length,
  };
}
