#!/usr/bin/env node

/**
 * Magic Internet Math - Daily Leaderboard Bot
 *
 * Posts the top 10 leaderboard to Nostr daily
 *
 * Usage:
 *   NOSTR_BOT_NSEC=nsec1... node index.js
 *   node index.js --dry-run  (preview without posting)
 */

import { fetchLeaderboard } from './fetchLeaderboard.js';
import { postToNostr } from './postToNostr.js';

const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * Format a ranking entry with medal or number
 */
function formatRank(ranking) {
  const { rank, displayName, xp, level } = ranking;
  const name = displayName || 'Anonymous';
  const formattedXP = xp.toLocaleString();

  let prefix;
  switch (rank) {
    case 1: prefix = '🥇'; break;
    case 2: prefix = '🥈'; break;
    case 3: prefix = '🥉'; break;
    default: prefix = `${rank}.`; break;
  }

  return `${prefix} ${name} - ${formattedXP} XP | Level ${level}`;
}

/**
 * Format the full leaderboard post
 */
function formatLeaderboardPost(rankings) {
  const lines = [
    '🏆 Magic Internet Math - Daily Top 10',
    '',
  ];

  for (const ranking of rankings) {
    lines.push(formatRank(ranking));
  }

  lines.push('');
  lines.push(`📚 Start learning: ${HUB_URL}`);

  return lines.join('\n');
}

/**
 * Main function
 */
async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  const nsec = process.env.NOSTR_BOT_NSEC;

  if (!isDryRun && !nsec) {
    console.error('Error: NOSTR_BOT_NSEC environment variable is required');
    console.error('Usage: NOSTR_BOT_NSEC=nsec1... node index.js');
    console.error('       node index.js --dry-run');
    process.exit(1);
  }

  console.log('Fetching leaderboard...');
  const rankings = await fetchLeaderboard();
  console.log(`Got ${rankings.length} rankings`);

  const post = formatLeaderboardPost(rankings);

  console.log('\n--- POST CONTENT ---');
  console.log(post);
  console.log('--- END POST ---\n');

  if (isDryRun) {
    console.log('Dry run mode - not posting to Nostr');
    return;
  }

  console.log('Posting to Nostr...');
  const result = await postToNostr(post, nsec);

  console.log(`\nSuccess! Event ID: ${result.eventId}`);
  console.log(`Published to ${result.publishedTo.length} relays`);
}

main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
