import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition II.11 construct?',
    options: [
      'A line divided in extreme and mean ratio (golden ratio)',
      'A square equal to a given rectangle',
      'A perpendicular to a given line',
      'Two parallel lines',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'II.11 shows how to divide a line so that the whole : larger = larger : smaller, which defines the golden ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If AB = 1 and is divided at H according to II.11, what is the approximate length of AH?',
    options: [
      '0.5',
      '0.618',
      '0.786',
      '0.707',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The golden ratio φ ≈ 1.618, and AH = φ - 1 ≈ 0.618 when AB = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The golden ratio φ satisfies which equation?',
    options: [
      'φ² = φ - 1',
      'φ² = 2φ',
      'φ² = 1',
      'φ² = φ + 1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The golden ratio satisfies φ² = φ + 1, which can be rewritten as x² - x - 1 = 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which earlier proposition is essential to the proof of II.11?',
    options: [
      'II.1',
      'II.4',
      'II.6',
      'II.8',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'II.11 relies heavily on II.6, which relates rectangles and squares when a segment is added to a bisected line.',
  },
];
