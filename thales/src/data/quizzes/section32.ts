import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 32: Natural Numbers (Peano's Approach)
 */
export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In what year did Peano publish his Arithmetices Principia?',
    options: ['1879', '1889', '1899', '1909'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Giuseppe Peano (1858-1932) published his axioms for the natural numbers in his Arithmetices Principia in 1889, written in a language he invented.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the three primitive notions in Peano\'s system?',
    options: [
      'A set, zero, and the successor function',
      'Zero, one, and addition',
      'Addition, multiplication, and exponentiation',
      'Natural numbers, integers, and rationals',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Peano\'s natural number system is a triple (ℕ, 0, S) consisting of a set ℕ, a special element 0, and the successor function S.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of Peano\'s axioms?',
    options: [
      'Sx ≠ 0 (zero is not a successor)',
      'x + 0 = x (identity for addition)',
      'Sx = Sy implies x = y (S is injective)',
      'Mathematical induction',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The equation x + 0 = x is not an axiom but a definition. Peano\'s three axioms are: (1) 0 is not a successor, (2) S is injective, and (3) mathematical induction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the number 2 represented in Peano\'s system?',
    options: [
      'S0',
      'SSS0',
      'SS0',
      '2',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'In Peano\'s system, 1 = S0 (successor of 0) and 2 = SS0 = S(S(0)) (successor of successor of 0).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the recursive definition of multiplication x · Sy?',
    options: [
      'x · Sy = (x · y) + y',
      'x · Sy = S(x · y)',
      'x · Sy = (x · y) + x',
      'x · Sy = x · y · x',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Multiplication is defined recursively as: x · 0 = 0 and x · Sy = (x · y) + x. This means x · Sy adds one more copy of x to x · y.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is 0⁰ in Peano\'s recursive definition of exponentiation?',
    options: [
      '0',
      'Undefined',
      '1',
      'Indeterminate',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In Peano\'s recursive definition, x⁰ = 1 for all x, including x = 0. So 0⁰ = 1 by definition.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is the induction axiom called an "axiom scheme"?',
    options: [
      'Because it only applies to certain numbers',
      'Because it can be proved from the other axioms',
      'Because Peano did not fully formalize it',
      'Because it is one axiom for each proposition φ',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The induction axiom is an axiom scheme because it is not a single axiom but a whole class of axioms—one for each proposition φ(x) involving natural numbers.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is 1 ∸ 3 using naive subtraction?',
    options: [
      '-2',
      '2',
      'Undefined',
      '0',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Naive subtraction (∸) returns 0 when the result would be negative, since negative numbers are not natural numbers. So 1 ∸ 3 = 0.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What proof technique is used to show that 0 + x = x?',
    options: [
      'Mathematical induction',
      'Direct computation',
      'Proof by contradiction',
      'Case analysis',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The lemma 0 + x = x is proved by mathematical induction on x. The base case shows 0 + 0 = 0, and the inductive step shows that if 0 + x = x, then 0 + Sx = Sx.',
  },
];
