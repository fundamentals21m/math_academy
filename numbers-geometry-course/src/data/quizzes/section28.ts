import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 28: Discussion - Algebra and Geometry
 */
export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two sides of geometry described in this chapter?',
    options: [
      'Euclidean and non-Euclidean',
      'Synthetic (visual) and analytic (algebraic)',
      'Plane and solid',
      'Finite and infinite',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Geometry has two sides: the synthetic (visual, self-contained) side that seems intuitively natural, and the analytic (algebraic) side that integrates geometry into the larger world of mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What discovery sparked the conflict between arithmetic and geometry?',
    options: [
      'The Pythagorean theorem',
      'Non-Euclidean geometry',
      'Irrational numbers like $\\sqrt{2}$',
      'The parallel postulate',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The conflict began with the discovery of irrational lengths such as √2. At the time, numbers were rational by definition, so irrational lengths could not be numbers, and geometry could not be based on arithmetic.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'In what year did Cantor discover that $\\mathbb{R}$ is uncountable?',
    correctAnswer: 1874,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Cantor discovered in 1874 that not all infinite sets have the same cardinality. In particular, ℝ is uncountable—there is no way to list its members.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is $\\mathbb{Q}$ called countable?',
    options: [
      'It contains only finitely many elements',
      'Its members can be listed (paired with natural numbers)',
      'Each rational has a unique decimal expansion',
      'It is a subset of $\\mathbb{R}$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The sets ℕ, ℤ, and ℚ are called countable because their members can be listed—given a first member, second member, third member, and so on. This means they can be paired with the natural numbers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What algebraic structure is the appropriate setting for geometry?',
    options: ['Group', 'Ring', 'Field', 'Vector space'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Around 1900, it became clear that the concept of field was the appropriate algebraic setting for geometry. We can build Euclid\'s geometry using the field ℝ, and conversely, we can build a field from Euclid\'s geometric concepts.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What distinguished "potential infinity" from "actual infinity" for the Greeks?',
    options: [
      'Potential infinity is smaller',
      'Potential infinity is a process; actual infinity is a completed set',
      'They are the same concept',
      'Actual infinity applies only to geometry',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Greeks accepted potential infinity (a process that continues indefinitely, like generating ℕ by repeatedly adding 1) but not actual infinity (a completed infinite set). Real numbers require actual infinity because they involve infinite subsets of ℚ given all at once.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is a similarity in Euclidean geometry?',
    options: [
      'A map that preserves all distances',
      'A map that multiplies all lengths by a constant',
      'A reflection in a line',
      'A map that preserves only angles less than 90°',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A similarity is a mapping of ℝ × ℝ that multiplies all lengths by a constant c. A typical example is the dilatation that sends (x, y) to (cx, cy).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Why can beings in a non-Euclidean world determine size from shape alone?',
    options: [
      'Non-Euclidean geometry has no shapes',
      'All figures in non-Euclidean geometry are congruent',
      'There are no similarities (except isometries), so each shape exists in only one size',
      'Non-Euclidean distance is always 1',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'In the non-Euclidean plane, the only angle-preserving maps are isometries. There are no maps that multiply all lengths by a constant ≠ 1. This means each shape (of a triangle, say) exists in only one size.',
  },
];
