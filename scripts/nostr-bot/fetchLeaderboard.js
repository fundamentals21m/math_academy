/**
 * Fetch leaderboard data from Firebase Cloud Functions
 */

const FIREBASE_PROJECT_ID = 'magic-internet-math-96630';
const FIREBASE_REGION = 'us-central1';

/**
 * Fetch top 10 overall rankings from the leaderboard
 * @returns {Promise<Array<{rank: number, npub: string, displayName: string|null, xp: number, level: number}>>}
 */
export async function fetchLeaderboard() {
  const url = `https://${FIREBASE_REGION}-${FIREBASE_PROJECT_ID}.cloudfunctions.net/getLeaderboard`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        courseId: 'overall',
        limit: 10
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch leaderboard: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  // Firebase callable functions wrap the response in { result: ... }
  const data = result.result || result;

  if (!data.rankings) {
    throw new Error('No rankings data in response');
  }

  return data.rankings;
}
