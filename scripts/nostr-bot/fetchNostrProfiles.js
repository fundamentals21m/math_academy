/**
 * Fetch Nostr profile metadata for users
 */

import 'websocket-polyfill';
import { nip19 } from 'nostr-tools';
import { Relay } from 'nostr-tools/relay';

const RELAY_URL = 'wss://relay.primal.net';

/**
 * Fetch Nostr profile (kind 0) for a given npub
 * @param {string} npub - The user's npub
 * @returns {Promise<{name?: string, display_name?: string} | null>}
 */
async function fetchProfile(npub) {
  try {
    const decoded = nip19.decode(npub);
    if (decoded.type !== 'npub') return null;

    const pubkey = decoded.data;
    const relay = await Relay.connect(RELAY_URL);

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        relay.close();
        resolve(null);
      }, 5000);

      relay.subscribe([
        { kinds: [0], authors: [pubkey], limit: 1 }
      ], {
        onevent(event) {
          clearTimeout(timeout);
          try {
            const metadata = JSON.parse(event.content);
            relay.close();
            resolve(metadata);
          } catch {
            relay.close();
            resolve(null);
          }
        },
        oneose() {
          clearTimeout(timeout);
          relay.close();
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.error(`Error fetching profile for ${npub}:`, error.message);
    return null;
  }
}

/**
 * Enrich rankings with Nostr display names
 * @param {Array<{npub: string, displayName: string|null, ...}>} rankings
 * @returns {Promise<Array>}
 */
export async function enrichWithNostrProfiles(rankings) {
  const enriched = [];

  for (const ranking of rankings) {
    if (ranking.displayName) {
      // Already has a display name from the app
      enriched.push(ranking);
    } else if (ranking.npub) {
      // Try to fetch from Nostr
      console.log(`  Fetching Nostr profile for ${ranking.npub.slice(0, 20)}...`);
      const profile = await fetchProfile(ranking.npub);
      const name = profile?.display_name || profile?.name || null;
      enriched.push({ ...ranking, displayName: name });
    } else {
      enriched.push(ranking);
    }
  }

  return enriched;
}
