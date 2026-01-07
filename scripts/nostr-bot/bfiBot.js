#!/usr/bin/env node
/**
 * Bitcoin for Institutions Bot
 *
 * Posts insights from the BFI course to Nostr every 10 minutes.
 * Tracks posted content in Firebase to avoid duplicates.
 *
 * Usage:
 *   node bfiBot.js              # Post content
 *   node bfiBot.js --dry-run    # Preview without posting
 *   node bfiBot.js --stats      # Show posting statistics
 *   node bfiBot.js --reset      # Reset posted content tracking (use with caution!)
 */

import { postToNostr } from './postToNostr.js';
import {
  loadAllBfiInsights,
  formatBfiPost,
  getBfiContentId,
} from './contentSources/bfiExtractor.js';
import {
  initializeFirebase,
  getPostedBfiContentIds,
  getPostedBfiStats,
  recordBfiPost,
  resetPostedBfiContent,
} from './firebase/bfiContentTracker.js';

// Content weights for selection (prefer quotes and key takeaways)
const CONTENT_WEIGHTS = {
  quote: 50,      // Opening quotes are highest value
  takeaway: 40,   // Key takeaways are core content
  insight: 30,    // Core insight boxes
  callout: 20,    // Important callouts
  card: 15,       // Card content
  emphasis: 10,   // Emphasized points
};

/**
 * Weighted random selection from an array
 */
function weightedRandomPick(items) {
  if (items.length === 0) return null;

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    random -= item.weight;
    if (random <= 0) {
      return item;
    }
  }

  return items[items.length - 1];
}

/**
 * Select the next content to post
 */
async function selectNextContent(postedIds, allInsights) {
  // Filter out already posted content
  const unpostedInsights = allInsights.filter(
    insight => !postedIds.includes(getBfiContentId(insight))
  );

  console.log(`Available content: ${unpostedInsights.length} unposted insights`);

  // If all content has been posted, allow repeats
  if (unpostedInsights.length === 0) {
    console.log('All content has been posted! Selecting from all content...');
    const allPool = allInsights.map(insight => ({
      ...insight,
      weight: CONTENT_WEIGHTS[insight.type] || 10,
    }));
    return weightedRandomPick(allPool);
  }

  // Build weighted pool from unposted content
  const pool = unpostedInsights.map(insight => ({
    ...insight,
    weight: CONTENT_WEIGHTS[insight.type] || 10,
  }));

  return weightedRandomPick(pool);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const showStats = args.includes('--stats');
  const doReset = args.includes('--reset');

  // Check for required environment variables
  const nsec = process.env.BFI_BOT_NSEC;
  const firebaseServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

  // For actual posting, we need both credentials
  if (!isDryRun && !showStats && !doReset) {
    if (!nsec) {
      console.error('Error: BFI_BOT_NSEC environment variable is required');
      process.exit(1);
    }
    if (!firebaseServiceAccount) {
      console.error('Error: FIREBASE_SERVICE_ACCOUNT environment variable is required');
      console.error('Set it to the JSON content of your Firebase service account key');
      process.exit(1);
    }
  }

  // Initialize Firebase (except for dry run without it)
  if (firebaseServiceAccount) {
    initializeFirebase(firebaseServiceAccount);
  }

  // Handle stats command
  if (showStats) {
    console.log('\n📊 BFI Content Posting Statistics\n');

    if (firebaseServiceAccount) {
      const stats = await getPostedBfiStats();
      console.log(`Total posted: ${stats.total}`);
      console.log(`  - Quotes: ${stats.quotes}`);
      console.log(`  - Takeaways: ${stats.takeaways}`);
      console.log(`  - Insights: ${stats.insights}`);
      console.log(`  - Callouts: ${stats.callouts}`);
      console.log(`  - Cards: ${stats.cards}`);
      console.log(`  - Emphasis: ${stats.emphasis}`);
    }

    const allInsights = await loadAllBfiInsights();
    console.log(`\nTotal available content: ${allInsights.length} insights`);

    // Count by type
    const byType = {};
    allInsights.forEach(i => {
      byType[i.type] = (byType[i.type] || 0) + 1;
    });
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`  - ${type}: ${count}`);
    });

    return;
  }

  // Handle reset command
  if (doReset) {
    if (!firebaseServiceAccount) {
      console.error('Error: FIREBASE_SERVICE_ACCOUNT required for reset');
      process.exit(1);
    }

    console.log('\n⚠️  Resetting BFI posted content tracking...\n');
    const deleted = await resetPostedBfiContent();
    console.log(`Deleted ${deleted} records. BFI content tracking has been reset.`);
    return;
  }

  console.log('\n₿ Bitcoin for Institutions Bot\n');

  if (isDryRun) {
    console.log('🔍 DRY RUN MODE - No posts will be made\n');
  }

  // Load all content
  console.log('Loading BFI insights...');
  const allInsights = await loadAllBfiInsights();

  console.log(`Loaded ${allInsights.length} insights from BFI course`);

  // Get already posted content IDs
  const postedIds = firebaseServiceAccount ? await getPostedBfiContentIds() : [];
  console.log(`Already posted: ${postedIds.length} items`);

  // Select next content
  console.log('\nSelecting content...');
  const selectedContent = await selectNextContent(postedIds, allInsights);

  if (!selectedContent) {
    console.log('No content available to post!');
    return;
  }

  // Format the post
  const postText = formatBfiPost(selectedContent);
  const contentId = getBfiContentId(selectedContent);

  console.log(`\nSelected: ${selectedContent.type} from Section ${selectedContent.sectionId}`);
  console.log(`Content ID: ${contentId}`);
  console.log('\n--- Post Preview ---');
  console.log(postText);
  console.log('--- End Preview ---\n');

  if (isDryRun) {
    console.log('✓ Dry run complete. Use without --dry-run to post.');
    return;
  }

  // Post to Nostr
  console.log('Posting to Nostr...');
  try {
    const result = await postToNostr(postText, nsec);
    console.log(`✓ Posted successfully!`);
    console.log(`  Event ID: ${result.eventId}`);
    console.log(`  Published to: ${result.publishedTo.join(', ')}`);

    // Record the post in Firebase
    if (firebaseServiceAccount) {
      await recordBfiPost(contentId, result.eventId, {
        type: selectedContent.type,
        sectionId: selectedContent.sectionId,
        sectionTitle: selectedContent.sectionTitle,
        postContent: postText,
      });
      console.log('✓ Recorded in Firebase');
    }
  } catch (error) {
    console.error(`✗ Failed to post: ${error.message}`);
    process.exit(1);
  }

  console.log('\n✓ Done!');
}

main().then(() => {
  process.exit(0);
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
