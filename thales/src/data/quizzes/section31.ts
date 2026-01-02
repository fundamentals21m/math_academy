import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 31: The Number System
 */
export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who proposed the standard notation ℕ, ℤ, ℚ, ℝ, ℂ for number sets?',
    options: ['Peano', 'Cantor', 'Bourbaki', 'Hilbert'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The notation ℕ, ℤ, ℚ, ℝ, ℂ, ℍ was first proposed by N. Bourbaki, a group of French mathematicians who systematically wrote the Elements of Mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the letter ℤ stand for in the notation for integers?',
    options: ['Zero', 'Zahlen (German for numbers)', 'Zermelo', 'Zone'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'ℤ comes from "Zahlen," the German word for "numbers." Similarly, ℚ comes from "quotients" and ℍ from "Hamilton" (who introduced quaternions).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which number system is needed to solve the equation x² + 1 = 0?',
    options: ['The integers ℤ', 'The rationals ℚ', 'The reals ℝ', 'The complex numbers ℂ'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The equation x² + 1 = 0 has no solutions in the real numbers, since x² ≥ 0 for all real x. We need the complex numbers ℂ, where x = i and x = -i are solutions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Kronecker, what did God create?',
    options: [
      'All numbers',
      'The natural numbers only',
      'The integers',
      'The real numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Kronecker famously said: "God created the natural numbers, all the other numbers were made by man." This reflects his view that other number systems are human constructions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How did Bertrand Russell (a logicist) define the number 2?',
    options: [
      'As the string SS0',
      'As the set of all unordered pairs',
      'As the set {0, 1}',
      'As a mental concept of "two-ity"',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'For Russell, 2 is the set of all unordered pairs. This logicist definition reduces numbers to pure logic and set theory.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In von Neumann\'s construction, what is the number 2?',
    options: [
      'The set {∅}',
      'The set {0, 1} = {∅, {∅}}',
      'The set of all pairs',
      'The successor of the successor of 0',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Von Neumann defined each natural number n as the set of all smaller natural numbers. So 0 = ∅, 1 = {0} = {∅}, and 2 = {0, 1} = {∅, {∅}}.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How did the formalist Peano represent the number 2?',
    options: ['As {0, 1}', 'As SS0', 'As the set of all pairs', 'As λf(f∘f)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In Peano\'s system, numbers are represented using the successor function S. We have 0 (zero), 1 = S0 (successor of 0), and 2 = SS0 = S(S(0)).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'For intuitionists like Brouwer, what are numbers?',
    options: [
      'Abstract, necessarily existing objects',
      'Sets defined in terms of logic',
      'Mental entities that exist because we think about them',
      'Strings of symbols manipulated by rules',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Intuitionists hold that numbers are mental entities which would not exist unless people thought about them. For Brouwer, 2 is the concept expressing "two-ity."',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What equation motivates extending from ℕ to ℤ?',
    options: ['x² = 2', 'x² + 1 = 0', '2x = 3', 'x + 2 = 0'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The equation x + 2 = 0 has no solution in the natural numbers ℕ (since x = -2 is negative). We need the integers ℤ to include negative numbers.',
  },
];
