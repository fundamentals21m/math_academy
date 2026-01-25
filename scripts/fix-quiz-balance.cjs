#!/usr/bin/env node
/**
 * Fix Quiz Balance Script (Randomized)
 *
 * This script properly fixes quiz answer distribution by:
 * 1. Reading all source quiz files (src/data/quizzes/section*.ts)
 * 2. Reordering options arrays and updating correctIndex values
 * 3. Achieving ~25% distribution for each answer position (A/B/C/D)
 * 4. Using RANDOMIZATION to avoid predictable patterns
 *
 * Unlike the old rebalance script that used questionNum % 4 (predictable A,B,C,D,A,B,C,D...),
 * this script randomly shuffles positions while maintaining perfect balance.
 *
 * Usage: node scripts/fix-quiz-balance.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');

// Find all course directories
function findCourses(baseDir) {
  const courses = [];
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || entry.name.endsWith('-deploy')) continue;
    if (['node_modules', 'scripts', 'shared', 'firebase', 'e2e', 'hub', 'nostr', 'youtube', 'skills', 'courses', 'styles', 'textbook-chunks'].includes(entry.name)) continue;

    const quizDir = path.join(baseDir, entry.name, 'src', 'data', 'quizzes');
    if (fs.existsSync(quizDir)) {
      courses.push({
        name: entry.name,
        quizDir: quizDir
      });
    }
  }

  // Also check courses/ subdirectory if it exists
  const coursesSubdir = path.join(baseDir, 'courses');
  if (fs.existsSync(coursesSubdir)) {
    const subEntries = fs.readdirSync(coursesSubdir, { withFileTypes: true });
    for (const entry of subEntries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('.') || entry.name === 'shared') continue;

      const quizDir = path.join(coursesSubdir, entry.name, 'src', 'data', 'quizzes');
      if (fs.existsSync(quizDir)) {
        courses.push({
          name: entry.name,
          quizDir: quizDir
        });
      }
    }
  }

  return courses;
}

// Find all quiz section files in a directory
function findQuizFiles(quizDir) {
  const files = [];
  try {
    const entries = fs.readdirSync(quizDir);
    for (const entry of entries) {
      if (/^(section|chapter)\d+\.ts$/.test(entry)) {
        files.push(path.join(quizDir, entry));
      }
    }
  } catch (e) {
    // Directory doesn't exist or can't be read
  }
  return files;
}

// Parse quiz file and extract questions
// Handles ALL question formats - looks for options arrays with 4 elements and correctIndex
function parseQuizFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions = [];

  // Find all options arrays - this works for any question format
  const optionsRegex = /options:\s*\[/g;
  let optionsMatch;

  while ((optionsMatch = optionsRegex.exec(content)) !== null) {
    const optionsStart = optionsMatch.index;

    // Find the start of the containing object (the opening brace before options)
    let startIndex = optionsStart;
    let braceDepth = 0;
    for (let i = optionsStart - 1; i >= 0; i--) {
      const char = content[i];
      if (char === '}') braceDepth++;
      else if (char === '{') {
        if (braceDepth === 0) {
          startIndex = i;
          break;
        }
        braceDepth--;
      }
    }

    // Find the end of this question object (matching braces)
    braceDepth = 0;
    let inString = false;
    let stringChar = null;
    let endIndex = startIndex;

    for (let i = startIndex; i < content.length; i++) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';

      if (!inString) {
        if (char === '"' || char === "'") {
          inString = true;
          stringChar = char;
        } else if (char === '{') {
          braceDepth++;
        } else if (char === '}') {
          braceDepth--;
          if (braceDepth === 0) {
            endIndex = i + 1;
            break;
          }
        }
      } else {
        if (char === stringChar && prevChar !== '\\') {
          inString = false;
          stringChar = null;
        }
      }
    }

    const questionBlock = content.substring(startIndex, endIndex);

    // Extract options array
    const optionsArrayMatch = questionBlock.match(/options:\s*\[([\s\S]*?)\]/);
    if (!optionsArrayMatch) continue;

    // Extract correctIndex
    const correctIndexMatch = questionBlock.match(/correctIndex:\s*(\d+)/);
    if (!correctIndexMatch) continue;

    const correctIndex = parseInt(correctIndexMatch[1], 10);
    if (correctIndex < 0 || correctIndex > 3) continue;

    // Parse options - handle multi-line strings
    const optionsStr = optionsArrayMatch[1];
    const options = [];
    let currentOption = '';
    let inOptionString = false;
    let optionStringChar = null;

    for (let i = 0; i < optionsStr.length; i++) {
      const char = optionsStr[i];
      const prevChar = i > 0 ? optionsStr[i - 1] : '';

      if (!inOptionString) {
        if (char === '"' || char === "'") {
          inOptionString = true;
          optionStringChar = char;
          currentOption = '';
        }
      } else {
        if (char === optionStringChar && prevChar !== '\\') {
          inOptionString = false;
          options.push(currentOption);
          currentOption = '';
        } else {
          currentOption += char;
        }
      }
    }

    // Only process 4-option multiple choice questions
    if (options.length === 4) {
      questions.push({
        startIndex,
        endIndex,
        block: questionBlock,
        options,
        correctIndex
      });
    }
  }

  // Sort by startIndex to ensure proper ordering
  questions.sort((a, b) => a.startIndex - b.startIndex);

  return { content, questions };
}

// Reorder a question to have correctIndex at newIndex
function reorderQuestion(questionBlock, options, currentCorrectIndex, newCorrectIndex) {
  if (currentCorrectIndex === newCorrectIndex) {
    return questionBlock;
  }

  // Create new options array with correct answer at new position
  const correctAnswer = options[currentCorrectIndex];
  const newOptions = [...options];

  // Remove correct answer from current position
  newOptions.splice(currentCorrectIndex, 1);

  // Insert at new position
  newOptions.splice(newCorrectIndex, 0, correctAnswer);

  // Build new options string
  const newOptionsStr = newOptions.map(opt => {
    // Escape any quotes in the option
    const escaped = opt.replace(/'/g, "\\'");
    return `'${escaped}'`;
  }).join(',\n      ');

  // Replace options array in the block
  let newBlock = questionBlock.replace(
    /options:\s*\[[\s\S]*?\],/,
    `options: [\n      ${newOptionsStr},\n    ],`
  );

  // Replace correctIndex
  newBlock = newBlock.replace(
    /correctIndex:\s*\d+/,
    `correctIndex: ${newCorrectIndex}`
  );

  return newBlock;
}

// Fix quiz balance for a single file
function fixQuizFile(filePath) {
  const { content, questions } = parseQuizFile(filePath);

  if (questions.length === 0) {
    return { modified: false, questions: 0 };
  }

  // Calculate target counts for this file
  const total = questions.length;
  const targetCount = Math.floor(total / 4);
  const remainder = total % 4;

  // Target: distribute remainder across positions
  const targets = [targetCount, targetCount, targetCount, targetCount];
  for (let i = 0; i < remainder; i++) {
    targets[i]++;
  }

  // Shuffle targets to avoid bias
  for (let i = targets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targets[i], targets[j]] = [targets[j], targets[i]];
  }

  // Create pool of available positions
  const available = [
    ...Array(targets[0]).fill(0),
    ...Array(targets[1]).fill(1),
    ...Array(targets[2]).fill(2),
    ...Array(targets[3]).fill(3)
  ];

  // Shuffle available positions randomly
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }

  // Assign positions to questions
  const newPositions = [];
  for (let i = 0; i < questions.length; i++) {
    newPositions.push(available[i]);
  }

  // Apply changes (from end to start to preserve indices)
  let newContent = content;
  let changesCount = 0;

  for (let i = questions.length - 1; i >= 0; i--) {
    const q = questions[i];
    const newIndex = newPositions[i];

    if (q.correctIndex !== newIndex) {
      const newBlock = reorderQuestion(q.block, q.options, q.correctIndex, newIndex);
      newContent = newContent.substring(0, q.startIndex) + newBlock + newContent.substring(q.endIndex);
      changesCount++;
    }
  }

  if (changesCount > 0 && !DRY_RUN) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { modified: changesCount > 0, questions: questions.length, changes: changesCount };
}

// Main function
function main() {
  console.log('Quiz Balance Fixer (Randomized)');
  console.log('================================');
  if (DRY_RUN) {
    console.log('DRY RUN MODE - No files will be modified\n');
  }

  // Determine base directory
  const scriptDir = __dirname;
  const baseDir = path.dirname(scriptDir);

  console.log(`Scanning: ${baseDir}\n`);

  const courses = findCourses(baseDir);
  console.log(`Found ${courses.length} course(s) with quiz directories\n`);

  let totalFiles = 0;
  let totalModified = 0;
  let totalQuestions = 0;
  let totalChanges = 0;

  for (const course of courses) {
    const quizFiles = findQuizFiles(course.quizDir);
    if (quizFiles.length === 0) continue;

    let courseQuestions = 0;
    let courseChanges = 0;
    let courseModified = 0;

    for (const filePath of quizFiles) {
      const result = fixQuizFile(filePath);
      totalFiles++;
      courseQuestions += result.questions;
      totalQuestions += result.questions;

      if (result.modified) {
        courseModified++;
        totalModified++;
        courseChanges += result.changes;
        totalChanges += result.changes;
      }
    }

    if (courseQuestions > 0) {
      const status = courseModified > 0 ? '✓ FIXED' : '○ OK';
      console.log(`${status} ${course.name}: ${courseQuestions} MC questions, ${courseChanges} changes in ${courseModified}/${quizFiles.length} files`);
    }
  }

  console.log('\n================================');
  console.log(`Total: ${totalQuestions} questions across ${totalFiles} files`);
  console.log(`Modified: ${totalChanges} questions in ${totalModified} files`);

  if (DRY_RUN) {
    console.log('\nRun without --dry-run to apply changes');
  } else {
    console.log('\nChanges applied. Run the validation to verify:');
    console.log('  node scripts/validate-quiz-balance.cjs');
  }
}

main();
