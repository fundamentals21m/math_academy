#!/usr/bin/env node
/**
 * Course Validation Script
 *
 * Validates course data consistency across the Magic Internet Math codebase.
 *
 * Checks:
 * 1. progressPrefix uniqueness - prevents localStorage key collisions
 * 2. Section references validity - ensures courses reference valid categories
 * 3. totalSections accuracy - compares declared count vs actual Section files
 * 4. Static/Seed data sync - ensures courses.js and seedCourseConfig.ts match
 * 5. Required fields - validates all required fields are present
 * 6. Deploy directories - verifies deploy directories exist for relative URLs
 * 7. URL consistency - warns about absolute URLs that should use hub subdirectories
 *
 * Usage:
 *   node scripts/validate-courses.js
 *   pnpm run validate:courses
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Import static course data
const coursesPath = path.join(ROOT_DIR, 'scripts', 'courses.js');

// Required fields for courses
const REQUIRED_FIELDS = [
  'id',
  'title',
  'description',
  'icon',
  'url',
  'tags',
  'sections',
  'totalSections',
  'progressPrefix',
];

// Mapping from course ID to source directory name
// This handles cases where the directory name doesn't match the course ID
const COURSE_DIR_MAP = {
  crypto: 'crypto-react',
  calc_easy: 'calc_easy',
  ba: 'basic-algebra',
  wm: 'why-math',
  calc1: 'calc1-course',
  calc_lib_art: 'calc_lib_art',
  ra: 'real-analysis',
  rudin: 'rudin-course',
  'tao-analysis-1': 'tao-analysis-1',
  tao2: 'tao2',
  linalg: 'linalg',
  advlinalg: 'advanced-linalg',
  aa: 'abstract-algebra',
  df: 'df-course',
  four_pillars: 'four-pillars',
  numbers_geometry: 'numbers-geometry-course',
  euclid: 'euclid',
  gauss: 'gauss',
  only_the_strong_survive: 'only-the-strong-survive',
  euler_intro: 'euler-intro',
  'saylor-diss': 'saylor-diss',
  mom: 'men-of-math-course',
  thales: 'thales',
  math_history: 'math_history',
  human_action: 'human-action',
  atlas_shrugged: 'atlas-shrugged',
  man_econ_state: 'man-econ-state',
  road_to_serfdom: 'road-to-serfdom',
  orange_btc: 'orange-is-new-green',
  rothbard_controversies: 'rothbard',
  west_graphs: 'west-graphs',
  coding_theory: 'coding-theory-course',
  'intro-discrete': 'intro-discrete',
  koblitz: 'koblitz-course',
  'ross-prob': 'probability',
  frost: 'frost',
  bfi: 'bfi',
  islr: 'islr',
  secp256k1: 'secp256k1',
  lcn: 'lcn',
  'mod-race': 'mod-race',
  'base-race': null, // external game, no local source
  tontines: 'tontines',
};

// Results tracking
const results = {
  progressPrefix: { passed: true, errors: [], warnings: [] },
  sectionRefs: { passed: true, errors: [], warnings: [] },
  totalSections: { passed: true, errors: [], warnings: [] },
  staticSeedSync: { passed: true, errors: [], warnings: [] },
  requiredFields: { passed: true, errors: [], warnings: [] },
  deployDirectories: { passed: true, errors: [], warnings: [] },
  urlConsistency: { passed: true, errors: [], warnings: [] },
};

/**
 * Parse the seed config TypeScript file to extract COURSES array
 */
function parseSeedConfig() {
  const seedPath = path.join(
    ROOT_DIR,
    'firebase',
    'functions',
    'src',
    'seedCourseConfig.ts'
  );
  const content = fs.readFileSync(seedPath, 'utf-8');

  // Find the COURSES array in the file
  const coursesMatch = content.match(
    /const COURSES\s*=\s*\[([\s\S]*?)\];(?=\s*\/\/|$)/
  );
  if (!coursesMatch) {
    throw new Error('Could not find COURSES array in seedCourseConfig.ts');
  }

  // Parse each course object - simple regex approach for the known format
  // Note: titles can use either single or double quotes (to handle apostrophes)
  const courses = [];
  const courseRegex =
    /\{\s*id:\s*'([^']+)'[^}]*title:\s*['"]([^'"]*)['"]\s*[^}]*totalSections:\s*(\d+)[^}]*progressPrefix:\s*'([^']+)'/g;

  let match;
  while ((match = courseRegex.exec(coursesMatch[1])) !== null) {
    courses.push({
      id: match[1],
      title: match[2],
      totalSections: parseInt(match[3], 10),
      progressPrefix: match[4],
    });
  }

  // Also extract SECTIONS for validation
  const sectionsMatch = content.match(
    /const SECTIONS\s*=\s*\[([\s\S]*?)\];(?=\s*\/\/|$)/
  );
  const sections = [];
  if (sectionsMatch) {
    const sectionRegex = /id:\s*'([^']+)'/g;
    let sMatch;
    while ((sMatch = sectionRegex.exec(sectionsMatch[1])) !== null) {
      sections.push(sMatch[1]);
    }
  }

  return { courses, sections };
}

/**
 * Count actual Section*.tsx files in a course directory
 */
function countSectionFiles(courseDir) {
  const sectionsPath = path.join(
    ROOT_DIR,
    courseDir,
    'src',
    'pages',
    'sections'
  );

  if (!fs.existsSync(sectionsPath)) {
    return null; // Directory doesn't exist
  }

  try {
    const files = fs.readdirSync(sectionsPath);
    // Count files matching Section*.tsx pattern (Section00.tsx, Section01.tsx, etc.)
    const sectionFiles = files.filter((f) => /^Section\d+\.tsx$/.test(f));
    return sectionFiles.length;
  } catch {
    return null;
  }
}

/**
 * Check progressPrefix uniqueness
 */
function checkProgressPrefixUniqueness(courses) {
  const prefixMap = new Map();

  for (const course of courses) {
    const prefix = course.progressPrefix;
    if (prefixMap.has(prefix)) {
      results.progressPrefix.passed = false;
      results.progressPrefix.errors.push(
        `Duplicate progressPrefix '${prefix}': courses '${prefixMap.get(prefix)}' and '${course.id}'`
      );
    } else {
      prefixMap.set(prefix, course.id);
    }
  }

  if (results.progressPrefix.passed) {
    results.progressPrefix.message = `PASS (${prefixMap.size} unique prefixes)`;
  }
}

/**
 * Check section references are valid
 */
function checkSectionReferences(courses, validSections) {
  const sectionSet = new Set(validSections);

  for (const course of courses) {
    if (!course.sections || !Array.isArray(course.sections)) continue;

    for (const sectionRef of course.sections) {
      if (!sectionSet.has(sectionRef)) {
        results.sectionRefs.passed = false;
        results.sectionRefs.errors.push(
          `Course '${course.id}' references non-existent section '${sectionRef}'`
        );
      }
    }
  }

  if (results.sectionRefs.passed) {
    results.sectionRefs.message = `PASS (all section references valid)`;
  }
}

/**
 * Check totalSections matches actual section file count
 */
function checkTotalSectionsAccuracy(courses) {
  let validated = 0;
  let skipped = 0;

  for (const course of courses) {
    const dirName = COURSE_DIR_MAP[course.id];

    if (!dirName) {
      // No local source directory - skip
      skipped++;
      continue;
    }

    const actualCount = countSectionFiles(dirName);

    if (actualCount === null) {
      // Directory or sections folder doesn't exist
      skipped++;
      continue;
    }

    validated++;

    if (actualCount !== course.totalSections) {
      results.totalSections.passed = false;
      results.totalSections.errors.push(
        `Course '${course.id}' (${course.title}): declared ${course.totalSections} sections, found ${actualCount} Section*.tsx files in ${dirName}/`
      );
    }
  }

  if (results.totalSections.passed) {
    results.totalSections.message = `PASS (${validated} courses validated, ${skipped} skipped - no local source)`;
  } else {
    results.totalSections.warnings.push(
      `${skipped} courses skipped (no local source directory)`
    );
  }
}

/**
 * Check static courses.js and Firebase seed are in sync
 */
function checkStaticSeedSync(staticCourses, seedCourses) {
  const staticIds = new Set(staticCourses.map((c) => c.id));
  const seedIds = new Set(seedCourses.map((c) => c.id));

  // Check for courses in static but not in seed
  for (const course of staticCourses) {
    if (!seedIds.has(course.id)) {
      results.staticSeedSync.passed = false;
      results.staticSeedSync.errors.push(
        `Course '${course.id}' in scripts/courses.js but NOT in seedCourseConfig.ts`
      );
    }
  }

  // Check for courses in seed but not in static
  for (const course of seedCourses) {
    if (!staticIds.has(course.id)) {
      results.staticSeedSync.passed = false;
      results.staticSeedSync.errors.push(
        `Course '${course.id}' in seedCourseConfig.ts but NOT in scripts/courses.js`
      );
    }
  }

  // Check for field mismatches (totalSections, progressPrefix)
  const seedMap = new Map(seedCourses.map((c) => [c.id, c]));
  for (const staticCourse of staticCourses) {
    const seedCourse = seedMap.get(staticCourse.id);
    if (!seedCourse) continue;

    if (staticCourse.totalSections !== seedCourse.totalSections) {
      results.staticSeedSync.passed = false;
      results.staticSeedSync.errors.push(
        `Course '${staticCourse.id}' totalSections mismatch: static=${staticCourse.totalSections}, seed=${seedCourse.totalSections}`
      );
    }

    if (staticCourse.progressPrefix !== seedCourse.progressPrefix) {
      results.staticSeedSync.passed = false;
      results.staticSeedSync.errors.push(
        `Course '${staticCourse.id}' progressPrefix mismatch: static='${staticCourse.progressPrefix}', seed='${seedCourse.progressPrefix}'`
      );
    }
  }

  if (results.staticSeedSync.passed && results.staticSeedSync.warnings.length === 0) {
    results.staticSeedSync.message = `PASS (${staticIds.size} static courses, ${seedIds.size} seed courses in sync)`;
  } else if (results.staticSeedSync.passed) {
    results.staticSeedSync.message = `WARN (in sync with ${results.staticSeedSync.warnings.length} field mismatches)`;
  }
}

/**
 * Check required fields are present
 */
function checkRequiredFields(courses) {
  for (const course of courses) {
    const missingFields = [];

    for (const field of REQUIRED_FIELDS) {
      if (
        course[field] === undefined ||
        course[field] === null ||
        course[field] === ''
      ) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      results.requiredFields.passed = false;
      results.requiredFields.errors.push(
        `Course '${course.id || 'UNKNOWN'}' missing required fields: ${missingFields.join(', ')}`
      );
    }
  }

  if (results.requiredFields.passed) {
    results.requiredFields.message = `PASS (all ${courses.length} courses have required fields)`;
  }
}

/**
 * Check deploy directories exist for courses with relative URLs
 */
function checkDeployDirectories(courses) {
  let checked = 0;
  let missing = 0;
  let skipped = 0;

  for (const course of courses) {
    const url = course.url;

    // Skip external URLs (absolute URLs)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      skipped++;
      continue;
    }

    checked++;

    // Extract deploy directory from relative URL (e.g., 'frost-deploy/' -> 'frost-deploy')
    const deployDir = url.replace(/\/$/, '');
    const deployPath = path.join(ROOT_DIR, deployDir);

    if (!fs.existsSync(deployPath)) {
      results.deployDirectories.passed = false;
      results.deployDirectories.errors.push(
        `Course '${course.id}': deploy directory '${deployDir}' does not exist`
      );
      missing++;
    } else {
      // Check if index.html exists
      const indexPath = path.join(deployPath, 'index.html');
      if (!fs.existsSync(indexPath)) {
        results.deployDirectories.passed = false;
        results.deployDirectories.errors.push(
          `Course '${course.id}': deploy directory '${deployDir}' exists but missing index.html`
        );
      }
    }
  }

  if (results.deployDirectories.passed) {
    results.deployDirectories.message = `PASS (${checked} relative URLs verified, ${skipped} absolute URLs skipped)`;
  } else {
    results.deployDirectories.warnings.push(
      `${skipped} courses use absolute URLs (external deployments)`
    );
  }
}

/**
 * Check URL format consistency (prefer relative URLs)
 */
function checkUrlConsistency(courses) {
  const absoluteUrls = [];
  const relativeUrls = [];

  for (const course of courses) {
    if (course.url.startsWith('http://') || course.url.startsWith('https://')) {
      absoluteUrls.push({ id: course.id, url: course.url });
    } else {
      relativeUrls.push(course.id);
    }
  }

  // Warn about courses using absolute URLs (they should use hub subdirectories when possible)
  if (absoluteUrls.length > 0) {
    results.urlConsistency.warnings.push(
      `${absoluteUrls.length} courses use absolute URLs (consider migrating to hub subdirectories):`
    );
    for (const course of absoluteUrls) {
      results.urlConsistency.warnings.push(
        `  - ${course.id}: ${course.url}`
      );
    }
    results.urlConsistency.message = `WARN (${relativeUrls.length} relative, ${absoluteUrls.length} absolute URLs)`;
  } else {
    results.urlConsistency.message = `PASS (all ${courses.length} courses use relative URLs)`;
  }
}

/**
 * Print results
 */
function printResults() {
  console.log('\n' + '='.repeat(60));
  console.log('Course Validation Results');
  console.log('='.repeat(60) + '\n');

  const checks = [
    { name: 'progressPrefix uniqueness', key: 'progressPrefix' },
    { name: 'Section references', key: 'sectionRefs' },
    { name: 'totalSections accuracy', key: 'totalSections' },
    { name: 'Static/Seed sync', key: 'staticSeedSync' },
    { name: 'Required fields', key: 'requiredFields' },
    { name: 'Deploy directories', key: 'deployDirectories' },
    { name: 'URL consistency', key: 'urlConsistency' },
  ];

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const check of checks) {
    const result = results[check.key];
    const icon = result.passed
      ? result.warnings?.length > 0
        ? '\u26A0\uFE0F '
        : '\u2705'
      : '\u274C';

    console.log(`${icon} ${check.name}: ${result.message || (result.passed ? 'PASS' : 'FAIL')}`);

    for (const error of result.errors || []) {
      console.log(`   - ${error}`);
      totalErrors++;
    }

    for (const warning of result.warnings || []) {
      console.log(`   \u26A0\uFE0F  ${warning}`);
      totalWarnings++;
    }
  }

  console.log('\n' + '-'.repeat(60));
  console.log(
    `Summary: ${totalErrors} error${totalErrors !== 1 ? 's' : ''}, ${totalWarnings} warning${totalWarnings !== 1 ? 's' : ''}`
  );
  console.log('-'.repeat(60) + '\n');

  // Exit with error code if there were errors
  if (totalErrors > 0) {
    process.exit(1);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('Loading course data...');

  // Dynamically import the ES module
  const { COURSES: staticCourses, SECTIONS: staticSections } = await import(
    coursesPath
  );

  // Parse seed config
  let seedData;
  try {
    seedData = parseSeedConfig();
  } catch (error) {
    console.error('Error parsing seedCourseConfig.ts:', error.message);
    process.exit(1);
  }

  console.log(
    `Loaded ${staticCourses.length} courses from courses.js, ${seedData.courses.length} from seed`
  );
  console.log(`Found ${staticSections.length} valid sections\n`);

  // Run all checks
  checkProgressPrefixUniqueness(staticCourses);
  checkSectionReferences(staticCourses, staticSections.map((s) => s.id));
  checkTotalSectionsAccuracy(staticCourses);
  checkStaticSeedSync(staticCourses, seedData.courses);
  checkRequiredFields(staticCourses);
  checkDeployDirectories(staticCourses);
  checkUrlConsistency(staticCourses);

  // Print results
  printResults();
}

main().catch((error) => {
  console.error('Validation failed:', error);
  process.exit(1);
});
