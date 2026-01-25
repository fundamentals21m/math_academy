import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 22: The Line
 */
export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What two properties make the real numbers suitable as a model for the geometric line?',
    options: [
      'Order and completeness',
      'Addition and multiplication',
      'Positivity and negativity',
      'Finiteness and infinity',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The real numbers have order (any two distinct reals can be compared) and completeness (no gaps), which are exactly the properties needed to model the geometric line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the order $\\alpha \\leq \\beta$ defined for real numbers represented as Dedekind cuts?',
    options: [
      '$L_\\alpha$ contains $L_\\beta$',
      'They have the same upper set',
      '$U_\\alpha$ contains $U_\\beta$',
      '$L_\\alpha$ is contained in $L_\\beta$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'We say α ≤ β if and only if the lower set L_α is contained in L_β. This captures the idea that α separates rationals at a position ≤ where β separates them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "completeness" of the real numbers mean?',
    options: [
      'Every real number can be computed',
      'There are no gaps in the real numbers',
      'The real numbers are finite',
      'Every equation has a solution',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Completeness means the real numbers have no gaps. Any separation into lower and upper sets has either a greatest lower element or a least upper element—no gap remains.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is there no "next number" after any real number?',
    options: [
      'Real numbers are infinite',
      'Real numbers are irrational',
      'Between any two distinct reals lies their average',
      'Dedekind forbade it',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If α and β are distinct real numbers, then (α + β)/2 lies strictly between them. This shows there is always another number between any two, so no "next number" exists.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a least upper bound (LUB) of a set S?',
    options: [
      'The smallest element in S',
      'The largest element in S',
      'The average of all members of S',
      'The smallest number ≥ all members of S',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The least upper bound (LUB) of a set S is the smallest number λ that is ≥ all members of S. The existence of LUBs is equivalent to completeness.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does the Archimedean axiom state?',
    options: [
      'Infinitely small numbers exist',
      'For positive α < β, some multiple nα > β',
      'Any positive number exceeds all rationals',
      'All numbers are rational',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Archimedean axiom says that if α and β are positive with α < β, then there exists a natural number n such that nα > β. This rules out infinitesimals.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is 0.999... equal to 1?',
    options: [
      'It is a rounding convention',
      'They have the same decimal representation',
      'There is no real number between them',
      'Dedekind defined them to be equal',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'There is no "infinitesimal amount" by which 0.999... could differ from 1. Since the reals have no infinitesimals and no gaps, 0.999... and 1 must be the same number.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is $\\mathbb{R}$ called as the completion of $\\mathbb{Q}$?',
    options: [
      'The real line',
      'The rational line',
      'The complex line',
      'The integer line',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The set ℝ of real numbers is called the real line. It is the completion of the rationals ℚ—all gaps in ℚ have been filled by irrational numbers.',
  },
];
