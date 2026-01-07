#!/usr/bin/env node
/**
 * Nostr Daily Report Bot
 *
 * Generates daily reports of new followers and notifications for bot accounts.
 * Tracks Magic Internet Math and Bitcoin for Institutions accounts.
 *
 * Usage:
 *   node dailyReport.js              # Generate report and save to Firebase
 *   node dailyReport.js --dry-run    # Generate report without saving
 *   node dailyReport.js --history    # Show last 7 days of reports
 */

import 'websocket-polyfill';
import { nip19, getPublicKey } from 'nostr-tools';
import { initializeFirebase } from './firebase/contentTracker.js';
import {
  getStoredFollowers,
  saveFollowers,
  saveDailyReport,
  getReportHistory,
  calculateFollowerDelta,
} from './firebase/reportTracker.js';
import {
  getFollowers,
  getAllNotifications,
  hexToNpub,
  shortenNpub,
} from './lib/nostrSubscribe.js';

// Account configuration
const ACCOUNTS = [
  {
    name: 'mim',
    displayName: 'Magic Internet Math',
    emoji: '🎓',
    nsecEnv: 'NOSTR_BOT_NSEC',
  },
  {
    name: 'bfi',
    displayName: 'Bitcoin for Institutions',
    emoji: '₿',
    nsecEnv: 'BFI_BOT_NSEC',
  },
];

/**
 * Derive public key from nsec
 */
function getPubkeyFromNsec(nsec) {
  const decoded = nip19.decode(nsec);
  if (decoded.type !== 'nsec') {
    throw new Error('Invalid nsec format');
  }
  return getPublicKey(decoded.data);
}

/**
 * Format a single account's report section
 */
function formatAccountReport(account, report) {
  const lines = [];
  lines.push(`${account.emoji} ${account.displayName.toUpperCase()}`);
  lines.push('───────────────────────────────────────────────────');

  // Followers
  const followerSign = report.followerDelta >= 0 ? '+' : '';
  lines.push(
    `👥 Followers: ${report.totalFollowers.toLocaleString()} (${followerSign}${report.followerDelta} new)`
  );

  if (report.newFollowers.length > 0) {
    const displayFollowers = report.newFollowers
      .slice(0, 5)
      .map((f) => shortenNpub(hexToNpub(f)))
      .join(', ');
    const extra = report.newFollowers.length > 5 ? ` +${report.newFollowers.length - 5} more` : '';
    lines.push(`   New: ${displayFollowers}${extra}`);
  }

  // Notifications
  lines.push(`❤️  Reactions: ${report.notifications.reactions}`);
  lines.push(`🔁 Reposts: ${report.notifications.reposts}`);
  lines.push(`💬 Replies: ${report.notifications.replies}`);
  lines.push(`🗣️  Mentions: ${report.notifications.mentions}`);

  if (report.notifications.zapsSats > 0) {
    lines.push(
      `⚡ Zaps: ${report.notifications.zaps} (${report.notifications.zapsSats.toLocaleString()} sats)`
    );
  } else {
    lines.push(`⚡ Zaps: ${report.notifications.zaps}`);
  }

  return lines.join('\n');
}

/**
 * Format the full daily report
 */
function formatFullReport(reports, date) {
  const lines = [];
  lines.push('═══════════════════════════════════════════════════');
  lines.push(`📊 NOSTR DAILY REPORT - ${date}`);
  lines.push('═══════════════════════════════════════════════════');
  lines.push('');

  for (let i = 0; i < reports.length; i++) {
    const { account, report } = reports[i];
    lines.push(formatAccountReport(account, report));
    if (i < reports.length - 1) {
      lines.push('');
    }
  }

  lines.push('═══════════════════════════════════════════════════');

  return lines.join('\n');
}

/**
 * Generate report for a single account
 */
async function generateAccountReport(account, isDryRun) {
  const nsec = process.env[account.nsecEnv];
  if (!nsec) {
    console.log(`⚠️  Skipping ${account.displayName}: ${account.nsecEnv} not set`);
    return null;
  }

  console.log(`\n📊 Generating report for ${account.displayName}...`);

  // Derive public key
  const pubkeyHex = getPubkeyFromNsec(nsec);
  console.log(`  Pubkey: ${shortenNpub(hexToNpub(pubkeyHex))}`);

  // Get current followers
  const currentFollowers = await getFollowers(pubkeyHex);

  // Get stored followers (for delta calculation)
  let storedFollowers = [];
  if (!isDryRun) {
    storedFollowers = await getStoredFollowers(account.name);
    console.log(`  Previously stored: ${storedFollowers.length} followers`);
  }

  // Calculate follower delta
  const { newFollowers, lostFollowers, delta } = calculateFollowerDelta(
    currentFollowers,
    storedFollowers
  );

  if (newFollowers.length > 0) {
    console.log(`  New followers: ${newFollowers.length}`);
  }
  if (lostFollowers.length > 0) {
    console.log(`  Lost followers: ${lostFollowers.length}`);
  }

  // Get notifications from last 24 hours
  const oneDayAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  const notifications = await getAllNotifications(pubkeyHex, oneDayAgo);

  const report = {
    totalFollowers: currentFollowers.length,
    followerDelta: delta,
    newFollowers,
    lostFollowers,
    notifications,
  };

  // Save updated followers and report to Firebase
  if (!isDryRun) {
    await saveFollowers(account.name, currentFollowers);
    await saveDailyReport(account.name, report);
  }

  return report;
}

/**
 * Show history of reports
 */
async function showHistory() {
  console.log('\n📜 Report History (Last 7 Days)\n');

  for (const account of ACCOUNTS) {
    console.log(`${account.emoji} ${account.displayName}`);
    console.log('─'.repeat(50));

    const history = await getReportHistory(account.name, 7);

    if (history.length === 0) {
      console.log('  No reports found');
    } else {
      for (const report of history) {
        const sign = report.followerDelta >= 0 ? '+' : '';
        console.log(
          `  ${report.date}: ${report.totalFollowers} followers (${sign}${report.followerDelta}), ` +
            `${report.notifications?.reactions || 0} reactions, ` +
            `${report.notifications?.zaps || 0} zaps`
        );
      }
    }
    console.log('');
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const showHistoryFlag = args.includes('--history');

  // Check for Firebase credentials
  const firebaseServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!isDryRun && !firebaseServiceAccount) {
    console.error('Error: FIREBASE_SERVICE_ACCOUNT environment variable is required');
    console.error('Use --dry-run to generate report without saving');
    process.exit(1);
  }

  // Initialize Firebase
  if (firebaseServiceAccount) {
    initializeFirebase(firebaseServiceAccount);
  }

  // Handle history command
  if (showHistoryFlag) {
    await showHistory();
    return;
  }

  console.log('\n📊 NOSTR DAILY REPORT GENERATOR');
  if (isDryRun) {
    console.log('🔍 DRY RUN MODE - Data will not be saved to Firebase');
  }

  const date = new Date().toISOString().split('T')[0];
  const reports = [];

  // Generate reports for each account
  for (const account of ACCOUNTS) {
    const report = await generateAccountReport(account, isDryRun);
    if (report) {
      reports.push({ account, report });
    }
  }

  if (reports.length === 0) {
    console.log('\n⚠️  No accounts configured. Set NOSTR_BOT_NSEC and/or BFI_BOT_NSEC');
    process.exit(1);
  }

  // Output formatted report
  console.log('\n');
  console.log(formatFullReport(reports, date));

  if (isDryRun) {
    console.log('\n✓ Dry run complete. Use without --dry-run to save to Firebase.');
  } else {
    console.log('\n✓ Report saved to Firebase');
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
