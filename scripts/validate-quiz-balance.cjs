#!/usr/bin/env node
/**
 * Quiz Balance Validation Script
 *
 * Validates that quiz answer distributions are balanced across all courses.
 * For multiple-choice questions, the correct answer should be distributed
 * roughly equally across positions A (0), B (1), C (2), D (3).
 *
 * Acceptable range: 20-30% per position (with 10+ questions)
 *
 * Usage:
 *   node scripts/validate-quiz-balance.cjs
 *   node scripts/validate-quiz-balance.cjs --verbose
 *   node scripts/validate-quiz-balance.cjs --course calc1-course
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const POSITION_LABELS = ['A (0)', 'B (1)', 'C (2)', 'D (3)'];
const MIN_QUESTIONS_FOR_BALANCE_CHECK = 10;
const MIN_PERCENTAGE = 20;
const MAX_PERCENTAGE = 30;

// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('--verbose') || args.includes('-v');
const courseFilter = args.find((a, i) => args[i - 1] === '--course');
const showHelp = args.includes('--help') || args.includes('-h');

if (showHelp) {
  console.log(`
Quiz Balance Validation Script

Validates that quiz answer distributions are balanced across all courses.

Usage:
  node scripts/validate-quiz-balance.cjs [options]

Options:
  --verbose, -v     Show detailed per-section breakdown
  --course <name>   Only check specified course directory
  --help, -h        Show this help message

Balance Criteria:
  - Only applies to courses with ${MIN_QUESTIONS_FOR_BALANCE_CHECK}+ multiple-choice questions
  - Each answer position (A/B/C/D) should be ${MIN_PERCENTAGE}-${MAX_PERCENTAGE}%
  - Courses outside this range are flagged

Exit Codes:
  0 - All courses pass balance check
  1 - One or more courses fail balance check
`);
  process.exit(0);
}

/**
 * Find all quiz files in a course directory
 * Supports both section-based (section*.ts) and chapter-based (chapter*.ts) formats
 */
function findQuizFiles(courseDir) {
  const quizzesPath = path.join(courseDir, 'src', 'data', 'quizzes');
  if (!fs.existsSync(quizzesPath)) {
    return [];
  }

  try {
    const files = fs.readdirSync(quizzesPath);
    // Match both section*.ts and chapter*.ts files
    return files
      .filter((f) => /^(section|chapter)\d+\.ts$/.test(f))
      .map((f) => path.join(quizzesPath, f));
  } catch {
    return [];
  }
}

/**
 * Extract correctIndex values from a quiz file
 */
function extractCorrectIndices(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const indices = [];

  // Match correctIndex values in the file
  // Pattern: correctIndex: N (where N is 0-3)
  const regex = /correctIndex:\s*(\d)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const index = parseInt(match[1], 10);
    if (index >= 0 && index <= 3) {
      indices.push(index);
    }
  }

  return indices;
}

/**
 * Calculate distribution statistics
 */
function calculateDistribution(indices) {
  const counts = [0, 0, 0, 0];
  for (const idx of indices) {
    counts[idx]++;
  }

  const total = indices.length;
  const percentages = counts.map((c) => (total > 0 ? (c / total) * 100 : 0));

  return { counts, percentages, total };
}

/**
 * Check if distribution is within acceptable range
 */
function isBalanced(percentages, total) {
  if (total < MIN_QUESTIONS_FOR_BALANCE_CHECK) {
    return { pass: true, reason: 'skipped (too few questions)' };
  }

  const outOfRange = percentages
    .map((p, i) => ({ position: POSITION_LABELS[i], percentage: p }))
    .filter((p) => p.percentage < MIN_PERCENTAGE || p.percentage > MAX_PERCENTAGE);

  if (outOfRange.length === 0) {
    return { pass: true, reason: null };
  }

  return {
    pass: false,
    reason: outOfRange
      .map((p) => `${p.position}: ${p.percentage.toFixed(1)}%`)
      .join(', '),
  };
}

/**
 * Find all course directories
 */
function findCourseDirs() {
  const dirs = [];
  const entries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue;
    if (entry.name === 'node_modules') continue;
    if (entry.name.endsWith('-deploy')) continue;
    if (entry.name === 'firebase') continue;
    if (entry.name === 'scripts') continue;
    if (entry.name === 'shared') continue;
    if (entry.name === 'e2e') continue;
    if (entry.name === 'styles') continue;
    if (entry.name === 'textbook-chunks') continue;

    const quizzesPath = path.join(ROOT_DIR, entry.name, 'src', 'data', 'quizzes');
    if (fs.existsSync(quizzesPath)) {
      dirs.push(path.join(ROOT_DIR, entry.name));
    }
  }

  return dirs;
}

/**
 * Main function
 */
function main() {
  console.log('Quiz Balance Validation');
  console.log('='.repeat(60) + '\n');

  let courseDirs = findCourseDirs();

  if (courseFilter) {
    const filtered = courseDirs.filter((d) => path.basename(d) === courseFilter);
    if (filtered.length === 0) {
      console.error(`Error: Course '${courseFilter}' not found or has no quizzes`);
      process.exit(1);
    }
    courseDirs = filtered;
  }

  console.log(`Found ${courseDirs.length} course(s) with quiz directories\n`);

  const results = [];
  let totalMCQuestions = 0;
  const globalCounts = [0, 0, 0, 0];

  for (const courseDir of courseDirs) {
    const courseName = path.basename(courseDir);
    const quizFiles = findQuizFiles(courseDir);

    if (quizFiles.length === 0) {
      if (verbose) {
        console.log(`[SKIP] ${courseName}: No quiz files found`);
      }
      continue;
    }

    let allIndices = [];
    const sectionDetails = [];

    for (const file of quizFiles) {
      const indices = extractCorrectIndices(file);
      if (indices.length > 0) {
        allIndices = allIndices.concat(indices);
        if (verbose) {
          const sectionName = path.basename(file, '.ts');
          sectionDetails.push({ name: sectionName, count: indices.length });
        }
      }
    }

    const { counts, percentages, total } = calculateDistribution(allIndices);
    const balanced = isBalanced(percentages, total);

    // Add to global counts
    counts.forEach((c, i) => {
      globalCounts[i] += c;
    });
    totalMCQuestions += total;

    results.push({
      name: courseName,
      total,
      counts,
      percentages,
      pass: balanced.pass,
      reason: balanced.reason,
      sectionDetails,
    });
  }

  // Sort results: failures first, then by name
  results.sort((a, b) => {
    if (a.pass !== b.pass) return a.pass ? 1 : -1;
    return a.name.localeCompare(b.name);
  });

  // Print results
  let failCount = 0;
  let passCount = 0;
  let skipCount = 0;

  for (const result of results) {
    const icon = result.pass
      ? result.reason === 'skipped (too few questions)'
        ? '-'
        : '\u2705'
      : '\u274C';

    if (result.pass) {
      if (result.reason === 'skipped (too few questions)') {
        skipCount++;
      } else {
        passCount++;
      }
    } else {
      failCount++;
    }

    console.log(`${icon} ${result.name}`);
    console.log(`   MC questions: ${result.total}`);

    if (result.total > 0) {
      const dist = POSITION_LABELS.map(
        (label, i) =>
          `${label}: ${result.counts[i]} (${result.percentages[i].toFixed(1)}%)`
      ).join(', ');
      console.log(`   Distribution: ${dist}`);
    }

    if (!result.pass) {
      console.log(`   Out of range: ${result.reason}`);
    } else if (result.reason) {
      console.log(`   Status: ${result.reason}`);
    }

    if (verbose && result.sectionDetails.length > 0) {
      console.log(
        `   Sections: ${result.sectionDetails.map((s) => `${s.name}(${s.count})`).join(', ')}`
      );
    }

    console.log('');
  }

  // Global statistics
  console.log('='.repeat(60));
  console.log('Global Statistics');
  console.log('='.repeat(60));
  console.log(`Total multiple-choice questions: ${totalMCQuestions}`);

  if (totalMCQuestions > 0) {
    const globalPercentages = globalCounts.map((c) => (c / totalMCQuestions) * 100);
    const globalDist = POSITION_LABELS.map(
      (label, i) =>
        `${label}: ${globalCounts[i]} (${globalPercentages[i].toFixed(1)}%)`
    ).join('\n   ');
    console.log(`Global distribution:\n   ${globalDist}`);
  }

  console.log('');
  console.log('-'.repeat(60));
  console.log(
    `Summary: ${passCount} passed, ${failCount} failed, ${skipCount} skipped (<${MIN_QUESTIONS_FOR_BALANCE_CHECK} questions)`
  );
  console.log('-'.repeat(60));

  if (failCount > 0) {
    console.log(
      `\n\u274C ${failCount} course(s) have unbalanced quiz distributions.`
    );
    console.log(
      `   Acceptable range: ${MIN_PERCENTAGE}-${MAX_PERCENTAGE}% per position`
    );
    console.log(
      `   Tip: Redistribute correct answers to avoid predictable patterns.\n`
    );
    process.exit(1);
  }

  console.log('\n\u2705 All courses pass quiz balance check.\n');
  process.exit(0);
}

main();
