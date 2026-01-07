/**
 * Nostr subscription utilities for querying followers and notifications
 */

import 'websocket-polyfill';
import { SimplePool } from 'nostr-tools/pool';
import { nip19 } from 'nostr-tools';

// Relays to query for follower and notification data
const RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://relay.primal.net',
  'wss://nostr.wine',
  'wss://purplepag.es', // Good for contact list queries
];

const QUERY_TIMEOUT = 15000; // 15 seconds

/**
 * Create a promise that rejects after timeout
 */
function createTimeout(ms, operation) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`${operation} timeout after ${ms}ms`)), ms)
  );
}

/**
 * Query relays with timeout handling
 */
async function queryWithTimeout(pool, relays, filter, operation = 'Query') {
  try {
    const result = await Promise.race([
      pool.querySync(relays, filter),
      createTimeout(QUERY_TIMEOUT, operation),
    ]);
    return result;
  } catch (error) {
    console.warn(`Warning: ${operation} failed: ${error.message}`);
    return [];
  }
}

/**
 * Convert hex pubkey to npub format
 */
export function hexToNpub(hex) {
  return nip19.npubEncode(hex);
}

/**
 * Convert npub to hex format
 */
export function npubToHex(npub) {
  const decoded = nip19.decode(npub);
  if (decoded.type !== 'npub') {
    throw new Error('Invalid npub');
  }
  return decoded.data;
}

/**
 * Shorten npub for display
 */
export function shortenNpub(npub, chars = 8) {
  if (npub.length <= chars * 2 + 3) return npub;
  return `${npub.slice(0, chars)}...${npub.slice(-chars)}`;
}

/**
 * Get all followers of a pubkey
 * Queries kind 3 (contact list) events that contain our pubkey in their tags
 * @param {string} pubkeyHex - The pubkey to get followers for (hex format)
 * @returns {Promise<string[]>} - Array of follower pubkeys (hex format)
 */
export async function getFollowers(pubkeyHex) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying followers for ${shortenNpub(hexToNpub(pubkeyHex))}...`);

    // Query kind 3 events that tag our pubkey
    // Kind 3 is the contact list - if someone follows us, we're in their contact list
    const events = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [3],
        '#p': [pubkeyHex],
        limit: 10000,
      },
      'Followers query'
    );

    // Extract unique follower pubkeys
    // Each event author is someone who follows us
    const followerSet = new Set();
    for (const event of events) {
      followerSet.add(event.pubkey);
    }

    const followers = Array.from(followerSet);
    console.log(`  Found ${followers.length} followers`);

    return followers;
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get our recent posts (for querying reactions/reposts)
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<Array>} - Array of our recent post events
 */
async function getOurPosts(pool, pubkeyHex, since) {
  const events = await queryWithTimeout(
    pool,
    RELAYS,
    {
      kinds: [1],
      authors: [pubkeyHex],
      since,
      limit: 500,
    },
    'Our posts query'
  );

  return events;
}

/**
 * Get reactions (kind 7) to our posts
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<{count: number, events: Array}>}
 */
export async function getReactions(pubkeyHex, since) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying reactions...`);

    // First get our recent posts
    const ourPosts = await getOurPosts(pool, pubkeyHex, since);
    if (ourPosts.length === 0) {
      console.log(`  No posts in timeframe, skipping reaction query`);
      return { count: 0, events: [] };
    }

    const postIds = ourPosts.map((e) => e.id);
    console.log(`  Found ${postIds.length} of our posts, querying reactions...`);

    // Query reactions to those posts
    const reactions = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [7],
        '#e': postIds,
        since,
        limit: 1000,
      },
      'Reactions query'
    );

    // Deduplicate by event id
    const uniqueReactions = [...new Map(reactions.map((e) => [e.id, e])).values()];
    console.log(`  Found ${uniqueReactions.length} reactions`);

    return { count: uniqueReactions.length, events: uniqueReactions };
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get reposts (kind 6) of our content
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<{count: number, events: Array}>}
 */
export async function getReposts(pubkeyHex, since) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying reposts...`);

    // First get our recent posts
    const ourPosts = await getOurPosts(pool, pubkeyHex, since);
    if (ourPosts.length === 0) {
      console.log(`  No posts in timeframe, skipping repost query`);
      return { count: 0, events: [] };
    }

    const postIds = ourPosts.map((e) => e.id);

    // Query reposts of our posts
    const reposts = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [6],
        '#e': postIds,
        since,
        limit: 500,
      },
      'Reposts query'
    );

    const uniqueReposts = [...new Map(reposts.map((e) => [e.id, e])).values()];
    console.log(`  Found ${uniqueReposts.length} reposts`);

    return { count: uniqueReposts.length, events: uniqueReposts };
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get replies to our posts (kind 1 with e-tag pointing to our posts)
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<{count: number, events: Array}>}
 */
export async function getReplies(pubkeyHex, since) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying replies...`);

    // First get our recent posts
    const ourPosts = await getOurPosts(pool, pubkeyHex, since);
    if (ourPosts.length === 0) {
      console.log(`  No posts in timeframe, skipping reply query`);
      return { count: 0, events: [] };
    }

    const postIds = ourPosts.map((e) => e.id);

    // Query replies to our posts (kind 1 with e-tag)
    const replies = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [1],
        '#e': postIds,
        since,
        limit: 500,
      },
      'Replies query'
    );

    // Filter out our own posts (we don't want to count ourselves)
    const otherReplies = replies.filter((e) => e.pubkey !== pubkeyHex);
    const uniqueReplies = [...new Map(otherReplies.map((e) => [e.id, e])).values()];
    console.log(`  Found ${uniqueReplies.length} replies`);

    return { count: uniqueReplies.length, events: uniqueReplies };
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get mentions of us (kind 1 with p-tag pointing to us, but not replies)
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<{count: number, events: Array}>}
 */
export async function getMentions(pubkeyHex, since) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying mentions...`);

    // Query posts that mention us via p-tag
    const mentions = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [1],
        '#p': [pubkeyHex],
        since,
        limit: 500,
      },
      'Mentions query'
    );

    // Filter out our own posts and replies (we only want direct mentions)
    // A mention is a post that tags us but isn't a reply to one of our posts
    const pureMentions = mentions.filter((e) => {
      // Not our own post
      if (e.pubkey === pubkeyHex) return false;

      // Check if this is a reply to something (has a reply marker in e-tags)
      // If it has e-tags with "reply" marker, it's probably a reply thread, not a mention
      const eTags = e.tags.filter((t) => t[0] === 'e');
      const hasReplyMarker = eTags.some((t) => t[3] === 'reply');

      // If it has reply markers, it's a thread reply not a pure mention
      // But we'll still count it if it's not tagged as reply
      return !hasReplyMarker;
    });

    const uniqueMentions = [...new Map(pureMentions.map((e) => [e.id, e])).values()];
    console.log(`  Found ${uniqueMentions.length} mentions`);

    return { count: uniqueMentions.length, events: uniqueMentions };
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get zaps sent to us (kind 9735)
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<{count: number, totalSats: number, events: Array}>}
 */
export async function getZaps(pubkeyHex, since) {
  const pool = new SimplePool();

  try {
    console.log(`  Querying zaps...`);

    // Query zap receipts that tag us
    const zaps = await queryWithTimeout(
      pool,
      RELAYS,
      {
        kinds: [9735],
        '#p': [pubkeyHex],
        since,
        limit: 500,
      },
      'Zaps query'
    );

    const uniqueZaps = [...new Map(zaps.map((e) => [e.id, e])).values()];

    // Try to extract sats amount from zap receipts
    let totalSats = 0;
    for (const zap of uniqueZaps) {
      try {
        // The amount is usually in the bolt11 invoice in the description tag
        const descTag = zap.tags.find((t) => t[0] === 'description');
        if (descTag) {
          const desc = JSON.parse(descTag[1]);
          const amountTag = desc.tags?.find((t) => t[0] === 'amount');
          if (amountTag) {
            totalSats += Math.floor(parseInt(amountTag[1]) / 1000); // Convert msats to sats
          }
        }
      } catch {
        // Ignore parsing errors
      }
    }

    console.log(`  Found ${uniqueZaps.length} zaps (${totalSats.toLocaleString()} sats)`);

    return { count: uniqueZaps.length, totalSats, events: uniqueZaps };
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Get all notifications for a pubkey since a given time
 * @param {string} pubkeyHex - Our pubkey (hex format)
 * @param {number} since - Unix timestamp to query from
 * @returns {Promise<Object>} - All notification stats
 */
export async function getAllNotifications(pubkeyHex, since) {
  const [reactions, reposts, replies, mentions, zaps] = await Promise.all([
    getReactions(pubkeyHex, since),
    getReposts(pubkeyHex, since),
    getReplies(pubkeyHex, since),
    getMentions(pubkeyHex, since),
    getZaps(pubkeyHex, since),
  ]);

  return {
    reactions: reactions.count,
    reposts: reposts.count,
    replies: replies.count,
    mentions: mentions.count,
    zaps: zaps.count,
    zapsSats: zaps.totalSats,
  };
}
