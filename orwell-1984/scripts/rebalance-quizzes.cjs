#!/usr/bin/env node
/**
 * Quiz Rebalancing Script v3
 *
 * This script swaps options to achieve balanced distribution of correct answer positions.
 * It works by swapping whole option lines, preserving all original formatting.
 *
 * Usage: node rebalance-quizzes.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const QUIZ_DIR = path.join(__dirname, '../src/data/quizzes');
const DRY_RUN = process.argv.includes('--dry-run');

// Track global statistics
let stats = {
  totalQuestions: 0,
  indexCounts: [0, 0, 0, 0],
  filesModified: 0
};

// Deterministic sequence for target indices
function getTargetIndex(questionNum, numOptions = 4) {
  return questionNum % numOptions;
}

function rebalanceFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const lines = content.split('\n');

  let i = 0;
  while (i < lines.length) {
    // Look for options: [ line
    if (lines[i].includes('options:') && lines[i].includes('[')) {
      const optionsStartLine = i;

      // Check if single-line options array
      if (lines[i].includes(']')) {
        i++;
        continue; // Skip single-line arrays for now
      }

      // Find all option lines (lines between [ and ])
      // The closing bracket line will start with whitespace followed by ]
      let optionLines = [];
      let optionIndices = [];
      let j = i + 1;

      while (j < lines.length) {
        const trimmed = lines[j].trim();
        // Closing bracket is a line that starts with ] (possibly with comma)
        if (trimmed.startsWith(']')) {
          break;
        }
        // Each option line
        optionLines.push(lines[j]);
        optionIndices.push(j);
        j++;
      }

      const closingBracketLine = j;

      // Find correctIndex line
      let correctIdxLineNum = closingBracketLine + 1;
      while (correctIdxLineNum < lines.length && !lines[correctIdxLineNum].includes('correctIndex:')) {
        correctIdxLineNum++;
        if (correctIdxLineNum - closingBracketLine > 3) break;
      }

      if (correctIdxLineNum < lines.length && lines[correctIdxLineNum].includes('correctIndex:')) {
        const idxMatch = lines[correctIdxLineNum].match(/correctIndex:\s*(\d+)/);

        if (idxMatch && optionLines.length >= 2) {
          const currentCorrectIdx = parseInt(idxMatch[1]);
          const numOptions = optionLines.length;

          stats.totalQuestions++;
          const targetIdx = getTargetIndex(stats.totalQuestions - 1, numOptions);

          if (currentCorrectIdx !== targetIdx && currentCorrectIdx < numOptions && targetIdx < numOptions) {
            // Normalize commas before swapping: ensure all have trailing comma
            optionLines = optionLines.map((line, idx) => {
              const trimmed = line.trimEnd();
              if (!trimmed.endsWith(',')) {
                return line.trimEnd() + ',';
              }
              return line;
            });

            // Swap the option lines
            const temp = optionLines[currentCorrectIdx];
            optionLines[currentCorrectIdx] = optionLines[targetIdx];
            optionLines[targetIdx] = temp;

            // Remove trailing comma from last option
            const lastIdx = optionLines.length - 1;
            optionLines[lastIdx] = optionLines[lastIdx].replace(/,\s*$/, '');

            // Update the actual lines array
            for (let k = 0; k < optionLines.length; k++) {
              lines[optionIndices[k]] = optionLines[k];
            }

            // Update correctIndex value
            lines[correctIdxLineNum] = lines[correctIdxLineNum].replace(
              /correctIndex:\s*\d+/,
              `correctIndex: ${targetIdx}`
            );
          }

          stats.indexCounts[targetIdx]++;
        }
      }

      i = correctIdxLineNum + 1;
    } else {
      i++;
    }
  }

  const newContent = lines.join('\n');
  const modified = newContent !== originalContent;

  if (modified) {
    stats.filesModified++;
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent);
    }
  }

  return modified;
}

function main() {
  console.log('Quiz Rebalancing Script v3');
  console.log('==========================');
  console.log(DRY_RUN ? '(DRY RUN - no files will be modified)\n' : '\n');

  const files = fs.readdirSync(QUIZ_DIR)
    .filter(f => f.startsWith('section') && f.endsWith('.ts'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  console.log(`Found ${files.length} quiz files\n`);

  files.forEach(file => {
    const filePath = path.join(QUIZ_DIR, file);
    try {
      const modified = rebalanceFile(filePath);
      if (modified) {
        console.log(`  ${DRY_RUN ? 'Would modify' : 'Modified'}: ${file}`);
      }
    } catch (err) {
      console.error(`  Error in ${file}: ${err.message}`);
    }
  });

  console.log('\n--- Statistics ---');
  console.log(`Total MC questions processed: ${stats.totalQuestions}`);
  console.log('\nTarget answer distribution:');
  ['A', 'B', 'C', 'D'].forEach((letter, i) => {
    const count = stats.indexCounts[i];
    const pct = stats.totalQuestions > 0 ? (100 * count / stats.totalQuestions).toFixed(1) : 0;
    console.log(`  ${letter}: ${count} (${pct}%)`);
  });
  console.log(`\nFiles ${DRY_RUN ? 'to be' : ''} modified: ${stats.filesModified}`);
}

main();
