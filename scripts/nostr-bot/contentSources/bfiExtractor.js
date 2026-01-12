/**
 * Extract insights from BFI (Bitcoin for Institutions) section TSX files
 */

import { readFileSync } from 'fs';
import { glob } from 'glob';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BFI_SECTIONS_PATH = join(__dirname, '..', '..', '..', 'bfi', 'src', 'pages', 'sections');

const BFI_METADATA = {
  name: 'Bitcoin for Institutions',
  author: 'Brian Hirschfield',
  url: 'https://bfi-deploy.vercel.app',
};

// Section titles from curriculum.ts
const SECTION_TITLES = {
  0: 'Introduction',
  1: "HODL'ing Bitcoin is Irrational",
  2: 'Bitcoin Requires a Deflationary Mindset',
  3: 'Bitcoin Custody Requires a Higher Understanding of Tradeoffs',
  4: 'Bitcoin Requires More Patience and Time than Institutions Have',
  5: 'Bitcoin is a Bearer Asset',
  6: 'Bitcoin Users Value Privacy',
  7: 'Strategy (Balance Sheet Strength)',
  8: 'BlackRock (Redefining Portfolio Construction)',
  9: 'Deferred Compensation - Riding the Wave',
  10: 'Mutual Funds / ETFs - Wielding the Blade',
  11: 'Treasury / Balance Sheet - Having Optionality',
  12: 'Structured Credit',
  13: 'Pensions',
  14: 'Epilogue',
};

/**
 * Clean HTML/JSX content to plain text
 */
function cleanHtmlToText(html) {
  if (!html) return '';

  let result = html;

  // Remove JSX expressions
  result = result.replace(/\{[^}]+\}/g, '');

  // Remove HTML tags but keep content
  result = result.replace(/<[^>]+>/g, ' ');

  // Decode HTML entities
  result = result.replace(/&amp;/g, '&');
  result = result.replace(/&lt;/g, '<');
  result = result.replace(/&gt;/g, '>');
  result = result.replace(/&quot;/g, '"');
  result = result.replace(/&#39;/g, "'");
  result = result.replace(/&nbsp;/g, ' ');
  result = result.replace(/&mdash;/g, '—');
  result = result.replace(/&ndash;/g, '–');

  // Clean up whitespace
  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

/**
 * Extract blockquotes (opening quotes with attribution)
 */
function extractBlockquotes(content, sectionId) {
  const insights = [];

  // Pattern for blockquotes with border-l-4 border-orange-500
  const blockquoteRegex = /<blockquote[^>]*className="[^"]*border-l-4 border-orange-500[^"]*"[^>]*>([\s\S]*?)<\/blockquote>/g;

  let match;
  while ((match = blockquoteRegex.exec(content)) !== null) {
    const blockquoteContent = match[1];

    // Extract the quote text (before footer)
    const footerIndex = blockquoteContent.indexOf('<footer');
    const quoteText = footerIndex > -1
      ? blockquoteContent.slice(0, footerIndex)
      : blockquoteContent;

    const cleanQuote = cleanHtmlToText(quoteText);

    if (cleanQuote && cleanQuote.length > 20) {
      insights.push({
        type: 'quote',
        content: cleanQuote,
        sectionId,
        sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
      });
    }
  }

  return insights;
}

/**
 * Extract key takeaways (numbered list items)
 */
function extractKeyTakeaways(content, sectionId) {
  const insights = [];

  // Look for Key Takeaways section
  const takeawaysSectionMatch = content.match(/Key Takeaways[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i);

  if (takeawaysSectionMatch) {
    const listContent = takeawaysSectionMatch[1];

    // Extract individual list items
    const itemRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
    let itemMatch;

    while ((itemMatch = itemRegex.exec(listContent)) !== null) {
      const itemText = cleanHtmlToText(itemMatch[1]);

      // Skip very short items
      if (itemText && itemText.length > 30) {
        insights.push({
          type: 'takeaway',
          content: itemText,
          sectionId,
          sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
        });
      }
    }
  }

  return insights;
}

/**
 * Extract core insight boxes (orange-bordered)
 */
function extractCoreInsights(content, sectionId) {
  const insights = [];

  // Pattern for insight boxes with border-orange-600/30
  const insightBoxRegex = /<div[^>]*className="[^"]*border-orange-600\/30[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?=<(?:div|h2|p|section)|$)/g;

  let match;
  while ((match = insightBoxRegex.exec(content)) !== null) {
    const boxContent = match[1];

    // Extract title (h4)
    const titleMatch = boxContent.match(/<h4[^>]*>([^<]+)<\/h4>/);
    const title = titleMatch ? cleanHtmlToText(titleMatch[1]) : '';

    // Extract content (p tags)
    const paragraphs = [];
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
    let pMatch;
    while ((pMatch = pRegex.exec(boxContent)) !== null) {
      const pText = cleanHtmlToText(pMatch[1]);
      if (pText) paragraphs.push(pText);
    }

    if (title || paragraphs.length > 0) {
      insights.push({
        type: 'insight',
        title: title,
        content: paragraphs.join(' '),
        sectionId,
        sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
      });
    }
  }

  return insights;
}

/**
 * Extract callout content
 */
function extractCallouts(content, sectionId) {
  const insights = [];

  // Pattern for <Callout> components
  const calloutRegex = /<Callout[^>]*type="([^"]+)"[^>]*>([\s\S]*?)<\/Callout>/g;

  let match;
  while ((match = calloutRegex.exec(content)) !== null) {
    const calloutType = match[1];
    const calloutContent = match[2];

    const cleanContent = cleanHtmlToText(calloutContent);

    // Skip very short callouts
    if (cleanContent && cleanContent.length > 40) {
      insights.push({
        type: 'callout',
        calloutType,
        content: cleanContent,
        sectionId,
        sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
      });
    }
  }

  return insights;
}

/**
 * Extract card content (key concepts)
 */
function extractCards(content, sectionId) {
  const insights = [];

  // Pattern for <Card> components
  const cardRegex = /<Card[^>]*>([\s\S]*?)<\/Card>/g;

  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    const cardContent = match[1];

    // Extract title (h4)
    const titleMatch = cardContent.match(/<h4[^>]*>([^<]+)<\/h4>/);
    const title = titleMatch ? cleanHtmlToText(titleMatch[1]) : '';

    // Extract content (p tags)
    const pMatch = cardContent.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const cardText = pMatch ? cleanHtmlToText(pMatch[1]) : '';

    if (title && cardText && cardText.length > 20) {
      insights.push({
        type: 'card',
        title,
        content: cardText,
        sectionId,
        sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
      });
    }
  }

  return insights;
}

/**
 * Extract strong/emphasized points from paragraphs
 */
function extractEmphasis(content, sectionId) {
  const insights = [];

  // Find paragraphs containing <strong> with text-orange-400
  const emphasisRegex = /<p[^>]*>([^<]*<strong[^>]*className="[^"]*text-orange-400[^"]*"[^>]*>([^<]+)<\/strong>[^<]*)<\/p>/g;

  let match;
  while ((match = emphasisRegex.exec(content)) !== null) {
    const fullParagraph = cleanHtmlToText(match[1]);
    const emphasisText = cleanHtmlToText(match[2]);

    if (emphasisText && emphasisText.length > 10 && fullParagraph.length > 40) {
      insights.push({
        type: 'emphasis',
        emphasis: emphasisText,
        content: fullParagraph,
        sectionId,
        sectionTitle: SECTION_TITLES[sectionId] || `Section ${sectionId}`,
      });
    }
  }

  return insights;
}

/**
 * Parse a single section file and extract all insights
 */
function parseSectionFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');

    // Extract section ID from filename (Section00.tsx -> 0)
    const filenameMatch = filePath.match(/Section(\d+)\.tsx$/);
    if (!filenameMatch) return [];

    const sectionId = parseInt(filenameMatch[1], 10);

    const insights = [
      ...extractBlockquotes(content, sectionId),
      ...extractKeyTakeaways(content, sectionId),
      ...extractCoreInsights(content, sectionId),
      ...extractCallouts(content, sectionId),
      ...extractCards(content, sectionId),
      ...extractEmphasis(content, sectionId),
    ];

    return insights;
  } catch (error) {
    console.error(`Error parsing ${filePath}: ${error.message}`);
    return [];
  }
}

/**
 * Load all insights from all BFI sections
 */
export async function loadAllBfiInsights() {
  const sectionFiles = await glob(`${BFI_SECTIONS_PATH}/Section*.tsx`);
  const allInsights = [];

  console.log(`Found ${sectionFiles.length} BFI section files`);

  for (const filePath of sectionFiles) {
    const insights = parseSectionFile(filePath);
    if (insights.length > 0) {
      const sectionNum = filePath.match(/Section(\d+)/)?.[1];
      console.log(`  - Section ${sectionNum}: ${insights.length} insights`);
    }
    allInsights.push(...insights);
  }

  console.log(`Loaded ${allInsights.length} total insights from BFI course`);
  return allInsights;
}

/**
 * Format an insight for posting to Nostr
 */
export function formatBfiPost(insight) {
  const lines = [];

  switch (insight.type) {
    case 'quote':
      lines.push(`"${insight.content}"`);
      lines.push(`  — ${BFI_METADATA.author}`);
      lines.push('');
      lines.push(`From: ${insight.sectionTitle}`);
      break;

    case 'takeaway':
      lines.push('Key Insight from Bitcoin for Institutions:');
      lines.push('');
      lines.push(insight.content);
      lines.push('');
      lines.push(`Chapter: ${insight.sectionTitle}`);
      break;

    case 'insight':
      if (insight.title) {
        lines.push(insight.title);
        lines.push('');
      }
      lines.push(insight.content);
      lines.push('');
      lines.push(`From: ${BFI_METADATA.name}`);
      break;

    case 'callout':
      const emoji = {
        warning: '⚠️',
        note: '📝',
        info: 'ℹ️',
        tip: '💡',
      }[insight.calloutType] || '📌';
      lines.push(`${emoji} ${insight.content}`);
      lines.push('');
      lines.push(`From: ${insight.sectionTitle}`);
      break;

    case 'card':
      lines.push(`${insight.title}`);
      lines.push('');
      lines.push(insight.content);
      lines.push('');
      lines.push(`From: ${BFI_METADATA.name}`);
      break;

    case 'emphasis':
      lines.push(insight.content);
      lines.push('');
      lines.push(`From: ${insight.sectionTitle}`);
      break;

    default:
      lines.push(insight.content);
  }

  // Add course link
  lines.push(`${BFI_METADATA.url}/#/section/${insight.sectionId}`);

  // Truncate if too long (Nostr has ~1000 char soft limit)
  let post = lines.join('\n');
  if (post.length > 900) {
    // Truncate content but keep attribution
    const contentIndex = insight.type === 'quote' ? 0 : (insight.title ? 2 : 0);
    const truncatedContent = insight.content.slice(0, 700) + '...';

    if (insight.type === 'quote') {
      post = `"${truncatedContent}"\n  — ${BFI_METADATA.author}\n\nFrom: ${insight.sectionTitle}\n${BFI_METADATA.url}/#/section/${insight.sectionId}`;
    } else {
      post = `${truncatedContent}\n\nFrom: ${insight.sectionTitle}\n${BFI_METADATA.url}/#/section/${insight.sectionId}`;
    }
  }

  return post;
}

/**
 * Generate a unique content ID for an insight
 */
export function getBfiContentId(insight) {
  // Create a simple hash from the content
  const contentHash = insight.content
    .slice(0, 50)
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .slice(0, 16);

  return `bfi:${insight.type}:${insight.sectionId}:${contentHash}`;
}

// For testing
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Testing BFI Extractor...\n');

  const insights = await loadAllBfiInsights();

  console.log('\nSample insights:');
  for (const type of ['quote', 'takeaway', 'insight', 'callout', 'card']) {
    const sample = insights.find(i => i.type === type);
    if (sample) {
      console.log(`\n--- ${type.toUpperCase()} ---`);
      console.log(formatBfiPost(sample));
    }
  }
}
