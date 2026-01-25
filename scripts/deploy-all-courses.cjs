#!/usr/bin/env node
/**
 * Master Build and Deploy Script
 *
 * Builds and deploys all rebalanced courses to Vercel.
 *
 * Usage: node deploy-all-courses.cjs [--dry-run] [--build-only] [--deploy-only]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');
const BUILD_ONLY = process.argv.includes('--build-only');
const DEPLOY_ONLY = process.argv.includes('--deploy-only');

// Courses that were rebalanced (10+ questions)
const COURSES = [
  'atlas-shrugged',
  'basic-algebra',
  'calc_easy',
  'calc_lib_art',
  'calc1-course',
  'calc2-course',
  'coding-theory-course',
  'crypto-react',
  'df-course',
  'euclid',
  'euler-intro',
  'frost',
  'gauss',
  'human-action',
  'intro-discrete',
  'islr',
  'koblitz-course',
  'lcn',
  'man-econ-state',
  'math_history',
  'men-of-math-course',
  'numbers-geometry-course',
  'only-the-strong-survive',
  'orange-is-new-green',
  'real-analysis',
  'road-to-serfdom',
  'rothbard_controversies',
  'rudin-course',
  'saylor-diss',
  'secp256k1',
  'tao-analysis-1',
  'tao2',
  'thales',
  'west-graphs',
  'why-math'
];

// Map course to deploy directory
function getDeployDir(course) {
  const mappings = {
    'calc1-course': 'calc1-deploy',
    'calc2-course': 'calc2-deploy',
    'calc_easy': 'calceasy-deploy',
    'calc_lib_art': 'calc-lib-art-deploy',
    'coding-theory-course': 'coding-theory-deploy',
    'crypto-react': 'cryptography',
    'df-course': 'df-deploy',
    'men-of-math-course': 'men-of-math-deploy',
    'numbers-geometry-course': 'numbers-geometry-deploy',
    'tao-analysis-1': 'tao-analysis-1-deploy',
    'rudin-course': 'rudin-deploy',
    'koblitz-course': 'koblitz-course-deploy',
    'rothbard_controversies': 'rothbard-deploy'
  };

  if (mappings[course]) return mappings[course];
  return `${course}-deploy`;
}

let stats = {
  built: 0,
  deployed: 0,
  failed: [],
  skipped: []
};

function runCommand(cmd, cwd, description) {
  if (DRY_RUN) {
    console.log(`  [DRY RUN] Would run: ${cmd}`);
    return true;
  }

  try {
    execSync(cmd, {
      cwd,
      stdio: 'pipe',
      timeout: 300000 // 5 min timeout
    });
    return true;
  } catch (err) {
    console.error(`  ERROR: ${description} failed`);
    console.error(`  ${err.message}`);
    return false;
  }
}

function processCourse(course) {
  const courseDir = path.join(BASE_DIR, course);
  const deployDirName = getDeployDir(course);
  const deployDir = path.join(BASE_DIR, deployDirName);

  // Check if course directory exists
  if (!fs.existsSync(courseDir)) {
    console.log(`  SKIP: ${course} directory not found`);
    stats.skipped.push(course);
    return;
  }

  // Check if deploy directory exists
  if (!fs.existsSync(deployDir)) {
    console.log(`  SKIP: ${deployDirName} deploy directory not found`);
    stats.skipped.push(course);
    return;
  }

  console.log(`\n[${course}]`);

  // Build
  if (!DEPLOY_ONLY) {
    process.stdout.write('  Building... ');
    if (runCommand('npm run build', courseDir, 'Build')) {
      console.log('OK');
      stats.built++;
    } else {
      stats.failed.push({ course, step: 'build' });
      return;
    }

    // Copy dist to deploy
    process.stdout.write('  Copying to deploy... ');
    const distDir = path.join(courseDir, 'dist');
    if (fs.existsSync(distDir)) {
      // Remove old assets
      const assetsDir = path.join(deployDir, 'assets');
      if (fs.existsSync(assetsDir)) {
        if (!DRY_RUN) {
          fs.rmSync(assetsDir, { recursive: true });
        }
      }

      // Copy new dist
      if (runCommand(`cp -r dist/* "${deployDir}/"`, courseDir, 'Copy')) {
        console.log('OK');
      } else {
        stats.failed.push({ course, step: 'copy' });
        return;
      }
    }
  }

  // Deploy
  if (!BUILD_ONLY) {
    process.stdout.write('  Deploying to Vercel... ');
    if (runCommand('npx vercel --prod --yes', deployDir, 'Deploy')) {
      console.log('OK');
      stats.deployed++;
    } else {
      stats.failed.push({ course, step: 'deploy' });
    }
  }
}

function main() {
  console.log('Master Build and Deploy Script');
  console.log('==============================');
  if (DRY_RUN) console.log('(DRY RUN - no changes will be made)');
  if (BUILD_ONLY) console.log('(BUILD ONLY - no deployments)');
  if (DEPLOY_ONLY) console.log('(DEPLOY ONLY - no builds)');
  console.log(`\nProcessing ${COURSES.length} courses...`);

  const startTime = Date.now();

  COURSES.forEach(processCourse);

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n' + '='.repeat(50));
  console.log('SUMMARY');
  console.log('='.repeat(50));
  console.log(`Time elapsed: ${elapsed} minutes`);
  console.log(`Built: ${stats.built}`);
  console.log(`Deployed: ${stats.deployed}`);
  console.log(`Skipped: ${stats.skipped.length}`);
  console.log(`Failed: ${stats.failed.length}`);

  if (stats.skipped.length > 0) {
    console.log(`\nSkipped courses: ${stats.skipped.join(', ')}`);
  }

  if (stats.failed.length > 0) {
    console.log('\nFailed:');
    stats.failed.forEach(f => console.log(`  - ${f.course} (${f.step})`));
  }
}

main();
