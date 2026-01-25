import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 21: The Real Numbers
 */
export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who discovered the definition of real numbers using cuts?',
    options: [
      'Euclid',
      'Gauss',
      'Descartes',
      'Dedekind',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Dedekind discovered in 1858 that irrational numbers could be defined as "cuts" in the rational numbers.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In what year did Dedekind discover his definition of real numbers?',
    correctAnswer: 1858,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Dedekind realized in 1858 that calculus, geometry, and irrational numbers could all be clarified with his definition.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a Dedekind cut?',
    options: [
      'A way to divide a line segment',
      'A partition of rationals into lower and upper sets (L, U)',
      'A type of geometric construction',
      'A method for computing square roots',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A Dedekind cut is a partition of the rational numbers into two sets L and U, where every member of L is less than every member of U.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the definition of an irrational number as a cut (L, U):',
    options: [
      'L has a greatest member',
      'U has a least member',
      'Neither L nor U has an extreme member',
      'Both L and U have extreme members',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'For an irrational number, L has no greatest member and U has no least member. The "missing" number is the irrational itself.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'What makes the Dedekind cut definition elegant?',
    options: [
      'It uses complex numbers',
      'It uses infinite decimal expansions',
      'It requires only sets of rationals, which already exist',
      'It requires physical measurements',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Dedekind cuts define irrationals using only sets of rational numbers, which are already assumed to exist. No new objects need to be invented.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does a rational number $a$ differ from an irrational as a cut?',
    options: [
      'Rationals cannot be represented as cuts',
      'There is no difference',
      'For a rational, the lower set L has a greatest member',
      'For a rational, the upper set U has a least member (namely a)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'For a rational number a, the cut has U_a = {rationals ≥ a}, so U has a least member. For irrationals, neither L nor U has an extreme member.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      "Dedekind's definition resolved problems in which areas of mathematics?",
    options: [
      'Only calculus',
      'Geometry, algebra, and calculus',
      'Only geometry',
      'Only number theory',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Dedekind realized that his definition clarified problems in geometry (irrational lengths), calculus (limits), and algebra (complete ordered fields) all at once.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'The set L for $\\sqrt{2}$ consists of positive rationals whose squares are:',
    options: [
      'Less than 2',
      'Greater than 2',
      'Equal to 2',
      'Negative',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'L contains all positive rationals with squares less than 2. These are the rationals "below" √2. The set U contains those with squares greater than 2.',
  },
];
