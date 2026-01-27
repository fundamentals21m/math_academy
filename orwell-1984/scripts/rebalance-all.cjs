#!/usr/bin/env node
/**
 * Quiz Rebalancer - handles both single-line and multi-line options
 */
const fs = require('fs');
const path = require('path');

const QUIZ_DIR = path.join(__dirname, '../src/data/quizzes');

// Get all quiz files sorted
const files = fs.readdirSync(QUIZ_DIR)
  .filter(f => f.startsWith('section') && f.endsWith('.ts'))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

console.log(`Found ${files.length} quiz files\n`);

let globalQuestionNum = 0;
let distribution = [0, 0, 0, 0];

files.forEach(file => {
  const filePath = path.join(QUIZ_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all MC questions with options and correctIndex
  // Pattern matches both single-line and multi-line options
  const questionRegex = /options:\s*\[([\s\S]*?)\],?\s*\n\s*correctIndex:\s*(\d+)/g;

  content = content.replace(questionRegex, (match, optionsContent, currentIdx) => {
    // Parse options - handle both formats
    let options;
    if (optionsContent.includes('\n')) {
      // Multi-line: split by lines that contain strings
      options = optionsContent.split('\n')
        .map(l => l.trim())
        .filter(l => l.startsWith("'") || l.startsWith('"'))
        .map(l => l.replace(/,\s*$/, '')); // Remove trailing comma
    } else {
      // Single-line: split by comma between quotes
      options = optionsContent.match(/'[^']*'|"[^"]*"/g) || [];
    }

    if (options.length !== 4) {
      return match; // Skip if not 4 options
    }

    const currentCorrectIdx = parseInt(currentIdx);
    const targetIdx = globalQuestionNum % 4;
    globalQuestionNum++;

    if (currentCorrectIdx === targetIdx) {
      distribution[targetIdx]++;
      return match; // No change needed
    }

    // Swap options to move correct answer to target position
    const temp = options[currentCorrectIdx];
    options[currentCorrectIdx] = options[targetIdx];
    options[targetIdx] = temp;

    distribution[targetIdx]++;
    modified = true;

    // Rebuild as single-line for consistency
    const newOptions = `options: [${options.join(', ')}],\n    correctIndex: ${targetIdx}`;
    return newOptions;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Modified: ${file}`);
  }
});

console.log('\n--- Final Distribution ---');
const total = distribution.reduce((a, b) => a + b, 0);
['A', 'B', 'C', 'D'].forEach((letter, i) => {
  const pct = total > 0 ? (100 * distribution[i] / total).toFixed(1) : 0;
  console.log(`  ${letter}: ${distribution[i]} (${pct}%)`);
});
console.log(`\nTotal MC questions: ${total}`);
