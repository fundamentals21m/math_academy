#!/usr/bin/env node
/**
 * Educational Content Bot
 *
 * Posts educational content (theorems and visualizations) to Nostr every 10 minutes.
 * Tracks posted content in Firebase to avoid duplicates.
 *
 * Usage:
 *   node educationalBot.js              # Post content
 *   node educationalBot.js --dry-run    # Preview without posting
 *   node educationalBot.js --stats      # Show posting statistics
 *   node educationalBot.js --reset      # Reset posted content tracking (use with caution!)
 */

import { postToNostr } from './postToNostr.js';
import {
  loadAllTheorems,
  formatTheoremPost,
  getTheoremContentId,
} from './contentSources/theoremExtractor.js';
import {
  getAllVisualizations,
  formatVisualizationPost,
  getVisualizationContentId,
} from './contentSources/visualizationCatalog.js';
import {
  initializeFirebase,
  getPostedContentIds,
  getPostedContentStats,
  recordPost,
  resetPostedContent,
} from './firebase/contentTracker.js';

// Content weights for selection
const CONTENT_WEIGHTS = {
  theorem_with_proof: 50,     // Prefer theorems with proofs
  theorem_without_proof: 30,  // Still post definitions/theorems without proofs
  visualization: 20,          // Interactive demos
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
async function selectNextContent(postedIds, allTheorems, allVisualizations) {
  // Filter out already posted content
  const unpostedTheorems = allTheorems.filter(
    t => !postedIds.includes(getTheoremContentId(t))
  );
  const unpostedViz = allVisualizations.filter(
    v => !postedIds.includes(getVisualizationContentId(v))
  );

  console.log(`Available content: ${unpostedTheorems.length} theorems, ${unpostedViz.length} visualizations`);

  // If all content has been posted, we could reset - but for now just pick random
  if (unpostedTheorems.length === 0 && unpostedViz.length === 0) {
    console.log('All content has been posted! Selecting from all content...');
    // Pick from all content (allow repeats after full cycle)
    const allPool = [
      ...allTheorems.map(t => ({
        ...t,
        weight: t.hasProof && t.proof ? CONTENT_WEIGHTS.theorem_with_proof : CONTENT_WEIGHTS.theorem_without_proof,
        contentType: 'theorem',
      })),
      ...allVisualizations.map(v => ({
        ...v,
        weight: CONTENT_WEIGHTS.visualization,
        contentType: 'visualization',
      })),
    ];
    return weightedRandomPick(allPool);
  }

  // Build weighted pool from unposted content
  const pool = [
    ...unpostedTheorems
      .filter(t => t.hasProof && t.proof)
      .map(t => ({
        ...t,
        weight: CONTENT_WEIGHTS.theorem_with_proof,
        contentType: 'theorem',
      })),
    ...unpostedTheorems
      .filter(t => !t.hasProof || !t.proof)
      .map(t => ({
        ...t,
        weight: CONTENT_WEIGHTS.theorem_without_proof,
        contentType: 'theorem',
      })),
    ...unpostedViz.map(v => ({
      ...v,
      weight: CONTENT_WEIGHTS.visualization,
      contentType: 'visualization',
    })),
  ];

  return weightedRandomPick(pool);
}

/**
 * Format content for posting based on type
 */
function formatContent(content) {
  if (content.contentType === 'theorem') {
    return formatTheoremPost(content);
  } else if (content.contentType === 'visualization') {
    return formatVisualizationPost(content);
  }
  throw new Error(`Unknown content type: ${content.contentType}`);
}

/**
 * Get content ID based on type
 */
function getContentId(content) {
  if (content.contentType === 'theorem') {
    return getTheoremContentId(content);
  } else if (content.contentType === 'visualization') {
    return getVisualizationContentId(content);
  }
  throw new Error(`Unknown content type: ${content.contentType}`);
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
  const nsec = process.env.NOSTR_BOT_NSEC;
  const firebaseServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

  // For actual posting, we need both credentials
  if (!isDryRun && !showStats && !doReset) {
    if (!nsec) {
      console.error('Error: NOSTR_BOT_NSEC environment variable is required');
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
    console.log('\n📊 Content Posting Statistics\n');

    if (firebaseServiceAccount) {
      const stats = await getPostedContentStats();
      console.log(`Total posted: ${stats.total}`);
      console.log(`  - Theorems: ${stats.theorems}`);
      console.log(`  - Visualizations: ${stats.visualizations}`);
    }

    const allTheorems = await loadAllTheorems();
    const allVisualizations = getAllVisualizations();
    console.log(`\nTotal available content:`);
    console.log(`  - Theorems: ${allTheorems.length}`);
    console.log(`  - Visualizations: ${allVisualizations.length}`);

    const theoremsWithProof = allTheorems.filter(t => t.hasProof && t.proof).length;
    console.log(`  - Theorems with proofs: ${theoremsWithProof}`);

    return;
  }

  // Handle reset command
  if (doReset) {
    if (!firebaseServiceAccount) {
      console.error('Error: FIREBASE_SERVICE_ACCOUNT required for reset');
      process.exit(1);
    }

    console.log('\n⚠️  Resetting posted content tracking...\n');
    const deleted = await resetPostedContent();
    console.log(`Deleted ${deleted} records. Content tracking has been reset.`);
    return;
  }

  console.log('\n📚 Educational Content Bot\n');

  if (isDryRun) {
    console.log('🔍 DRY RUN MODE - No posts will be made\n');
  }

  // Load all content
  console.log('Loading content...');
  const allTheorems = await loadAllTheorems();
  const allVisualizations = getAllVisualizations();

  console.log(`Loaded ${allTheorems.length} theorems and ${allVisualizations.length} visualizations`);

  // Get already posted content IDs
  const postedIds = firebaseServiceAccount ? await getPostedContentIds() : [];
  console.log(`Already posted: ${postedIds.length} items`);

  // Select next content
  console.log('\nSelecting content...');
  const selectedContent = await selectNextContent(postedIds, allTheorems, allVisualizations);

  if (!selectedContent) {
    console.log('No content available to post!');
    return;
  }

  // Format the post
  const postText = formatContent(selectedContent);
  const contentId = getContentId(selectedContent);

  console.log(`\nSelected: ${selectedContent.title} (${selectedContent.contentType})`);
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
      await recordPost(contentId, result.eventId, {
        type: selectedContent.contentType,
        courseId: selectedContent.courseId,
        title: selectedContent.title,
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
