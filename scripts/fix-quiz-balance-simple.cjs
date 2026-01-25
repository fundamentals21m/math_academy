#!/usr/bin/env node
/**
 * Simple Quiz Balance Fixer
 *
 * This script balances quiz answers by directly modifying correctIndex values
 * without trying to reorder options. This works on any question format.
 *
 * The approach:
 * 1. Find all correctIndex: N occurrences in a file
 * 2. Assign each a balanced position (0, 1, 2, or 3)
 * 3. Replace the correctIndex value AND reorder options array
 *
 * Usage: node scripts/fix-quiz-balance-simple.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const ROOT_DIR = path.resolve(__dirname, '..');

// Find all course directories
function findCourses() {
  const courses = [];
  const entries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || entry.name.endsWith('-deploy')) continue;
    if (['node_modules', 'scripts', 'shared', 'firebase', 'e2e', 'hub', 'nostr', 'youtube', 'skills', 'courses', 'styles', 'textbook-chunks'].includes(entry.name)) continue;

    const quizDir = path.join(ROOT_DIR, entry.name, 'src', 'data', 'quizzes');
    if (fs.existsSync(quizDir)) {
      courses.push({ name: entry.name, quizDir });
    }
  }

  return courses;
}

// Find quiz files in a directory
function findQuizFiles(quizDir) {
  try {
    return fs.readdirSync(quizDir)
      .filter(f => /^(section|chapter)\d+\.ts$/.test(f))
      .map(f => path.join(quizDir, f));
  } catch {
    return [];
  }
}

// Parse a question block to extract and reorder options
function reorderOptions(block, currentIndex, newIndex) {
  if (currentIndex === newIndex) return block;

  // Find options array
  const optionsMatch = block.match(/options:\s*\[([\s\S]*?)\]/);
  if (!optionsMatch) return block;

  // Parse options - find all quoted strings
  const optionsStr = optionsMatch[1];
  const options = [];
  let current = '';
  let inString = false;
  let quote = null;
  let depth = 0;

  for (let i = 0; i < optionsStr.length; i++) {
    const c = optionsStr[i];
    const prev = i > 0 ? optionsStr[i - 1] : '';

    if (!inString) {
      if (c === '"' || c === "'") {
        inString = true;
        quote = c;
        current = '';
      }
    } else {
      if (c === quote && prev !== '\\') {
        inString = false;
        options.push(current);
        current = '';
      } else {
        current += c;
      }
    }
  }

  if (options.length !== 4) return block;

  // Reorder options
  const correctAnswer = options[currentIndex];
  const newOptions = [...options];
  newOptions.splice(currentIndex, 1);
  newOptions.splice(newIndex, 0, correctAnswer);

  // Build new options string, preserving formatting
  const newOptionsStr = newOptions.map(opt => {
    const escaped = opt.replace(/'/g, "\\'");
    return `'${escaped}'`;
  }).join(',\n      ');

  // Replace options and correctIndex
  let newBlock = block.replace(
    /options:\s*\[[\s\S]*?\]/,
    `options: [\n      ${newOptionsStr}\n    ]`
  );
  newBlock = newBlock.replace(/correctIndex:\s*\d+/, `correctIndex: ${newIndex}`);

  return newBlock;
}

// Fix a single file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find all question blocks with options and correctIndex
  const questions = [];
  const optionsRegex = /options:\s*\[/g;
  let match;

  while ((match = optionsRegex.exec(content)) !== null) {
    const optionsStart = match.index;

    // Find containing object (search backward for {)
    let startIndex = optionsStart;
    let braceDepth = 0;
    for (let i = optionsStart - 1; i >= 0; i--) {
      if (content[i] === '}') braceDepth++;
      else if (content[i] === '{') {
        if (braceDepth === 0) {
          startIndex = i;
          break;
        }
        braceDepth--;
      }
    }

    // Find end of object
    braceDepth = 0;
    let inString = false;
    let stringChar = null;
    let endIndex = startIndex;

    for (let i = startIndex; i < content.length; i++) {
      const c = content[i];
      const prev = i > 0 ? content[i - 1] : '';

      if (!inString) {
        if (c === '"' || c === "'") {
          inString = true;
          stringChar = c;
        } else if (c === '{') {
          braceDepth++;
        } else if (c === '}') {
          braceDepth--;
          if (braceDepth === 0) {
            endIndex = i + 1;
            break;
          }
        }
      } else if (c === stringChar && prev !== '\\') {
        inString = false;
      }
    }

    const block = content.substring(startIndex, endIndex);

    // Check for 4 options and correctIndex
    const optMatch = block.match(/options:\s*\[([\s\S]*?)\]/);
    const ciMatch = block.match(/correctIndex:\s*(\d+)/);

    if (optMatch && ciMatch) {
      // Count options by counting quoted strings
      const optStr = optMatch[1];
      let optCount = 0;
      let inStr = false;
      let q = null;
      for (let i = 0; i < optStr.length; i++) {
        const c = optStr[i];
        const prev = i > 0 ? optStr[i - 1] : '';
        if (!inStr && (c === '"' || c === "'")) {
          inStr = true;
          q = c;
        } else if (inStr && c === q && prev !== '\\') {
          inStr = false;
          optCount++;
        }
      }

      if (optCount === 4) {
        questions.push({
          startIndex,
          endIndex,
          block,
          correctIndex: parseInt(ciMatch[1], 10)
        });
      }
    }
  }

  if (questions.length === 0) {
    return { questions: 0, changes: 0 };
  }

  // Calculate balanced positions
  const total = questions.length;
  const baseCount = Math.floor(total / 4);
  const remainder = total % 4;

  const targets = [baseCount, baseCount, baseCount, baseCount];
  for (let i = 0; i < remainder; i++) targets[i]++;

  // Shuffle targets
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targets[i], targets[j]] = [targets[j], targets[i]];
  }

  // Create and shuffle position pool
  const positions = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < targets[i]; j++) {
      positions.push(i);
    }
  }
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Apply changes from end to start
  let changes = 0;
  for (let i = questions.length - 1; i >= 0; i--) {
    const q = questions[i];
    const newIndex = positions[i];

    if (q.correctIndex !== newIndex) {
      const newBlock = reorderOptions(q.block, q.correctIndex, newIndex);
      content = content.substring(0, q.startIndex) + newBlock + content.substring(q.endIndex);
      changes++;
    }
  }

  if (changes > 0 && !DRY_RUN) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { questions: questions.length, changes };
}

// Main
function main() {
  console.log('Simple Quiz Balance Fixer');
  console.log('=========================');
  if (DRY_RUN) console.log('DRY RUN MODE\n');

  const courses = findCourses();
  console.log(`Found ${courses.length} courses\n`);

  let totalQuestions = 0;
  let totalChanges = 0;
  let totalFiles = 0;

  for (const course of courses) {
    const files = findQuizFiles(course.quizDir);
    let courseQuestions = 0;
    let courseChanges = 0;

    for (const file of files) {
      const result = fixFile(file);
      courseQuestions += result.questions;
      courseChanges += result.changes;
      totalFiles++;
    }

    if (courseQuestions > 0) {
      const status = courseChanges > 0 ? '✓' : '○';
      console.log(`${status} ${course.name}: ${courseQuestions} questions, ${courseChanges} changes`);
    }

    totalQuestions += courseQuestions;
    totalChanges += courseChanges;
  }

  console.log(`\nTotal: ${totalQuestions} questions, ${totalChanges} changes in ${totalFiles} files`);
  if (!DRY_RUN) console.log('\nRun: node scripts/validate-quiz-balance.cjs');
}

main();
