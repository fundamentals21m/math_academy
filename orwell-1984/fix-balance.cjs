#!/usr/bin/env node
/**
 * Fix quiz balance for orwell-1984
 * Redistributes correctIndex values to achieve ~25% per option
 */
const fs = require('fs');
const path = require('path');

const QUIZ_DIR = path.join(__dirname, 'src/data/quizzes');

// Get all quiz files
const files = fs.readdirSync(QUIZ_DIR)
  .filter(f => f.startsWith('section') && f.endsWith('.ts'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || 0);
    const numB = parseInt(b.match(/\d+/)?.[0] || 0);
    return numA - numB;
  });

// First pass: count all MC questions
let allQuestions = [];
files.forEach(file => {
  const filePath = path.join(QUIZ_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all correctIndex locations for multiple-choice
  const regex = /type:\s*['"]multiple-choice['"][\s\S]*?correctIndex:\s*(\d+)/g;
  let match;
  let pos = 0;

  while ((match = regex.exec(content)) !== null) {
    allQuestions.push({
      file,
      position: match.index,
      currentIndex: parseInt(match[1])
    });
  }
});

console.log(`Found ${allQuestions.length} multiple-choice questions`);

// Count current distribution
let dist = [0, 0, 0, 0];
allQuestions.forEach(q => dist[q.currentIndex]++);
console.log(`Current: A=${dist[0]}, B=${dist[1]}, C=${dist[2]}, D=${dist[3]}`);

// Assign new indices in round-robin
allQuestions.forEach((q, i) => {
  q.newIndex = i % 4;
});

// Count new distribution
let newDist = [0, 0, 0, 0];
allQuestions.forEach(q => newDist[q.newIndex]++);
console.log(`New:     A=${newDist[0]}, B=${newDist[1]}, C=${newDist[2]}, D=${newDist[3]}`);

// Group by file
const byFile = {};
allQuestions.forEach(q => {
  if (!byFile[q.file]) byFile[q.file] = [];
  byFile[q.file].push(q);
});

// Process each file
Object.entries(byFile).forEach(([file, questions]) => {
  const filePath = path.join(QUIZ_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // For each question, we need to rotate the options array and update correctIndex
  questions.forEach(q => {
    if (q.currentIndex === q.newIndex) return; // No change needed

    // Find the question block
    const regex = new RegExp(
      `(\\{[\\s\\S]*?type:\\s*['"]multiple-choice['"][\\s\\S]*?options:\\s*\\[)([\\s\\S]*?)(\\][\\s\\S]*?correctIndex:\\s*)(${q.currentIndex})(,)`,
      'g'
    );

    content = content.replace(regex, (match, before, options, middle, idx, after) => {
      // Parse options
      const optLines = options.split(/,(?=\s*['"])/);
      if (optLines.length < 4) {
        console.log(`  Skipping ${file}: not 4 options`);
        return match;
      }

      // Calculate rotation needed
      const currentCorrect = parseInt(idx);
      const targetCorrect = q.newIndex;
      const rotation = (targetCorrect - currentCorrect + 4) % 4;

      // Rotate options
      const rotatedOpts = [];
      for (let i = 0; i < 4; i++) {
        rotatedOpts.push(optLines[(i - rotation + 4) % 4]);
      }

      return before + rotatedOpts.join(',') + middle + targetCorrect + after;
    });
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});

console.log('Done!');
