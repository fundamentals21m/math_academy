import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 50: Recursive and Recursively Enumerable Sets
 */
export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does it mean for a set A of natural numbers to be recursive?',
    options: [
      'A can be listed by some function',
      'There is an algorithm to decide membership in A',
      'A is infinite',
      'A contains all prime numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A set is recursive (or decidable) if there is a recursive function f such that A = {x | f(x) = 0}. This means we can compute whether any given x is in A.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does it mean for a set A to be recursively enumerable (r.e.)?',
    options: [
      'A has finitely many elements',
      'A can be listed by a recursive function (possibly with repetitions)',
      'A is the same as its complement',
      'A contains only recursive functions',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A set A is recursively enumerable if there is a recursive function g such that A = {g(0), g(1), g(2), ...}. We can generate all elements, but may not know when the listing is complete.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "According to Kleene's proposition, when is a set A recursive?",
    options: [
      'When A is finite',
      'When A is infinite',
      'When both A and its complement are r.e.',
      'When A contains no primes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Kleene's proposition states that A is recursive if and only if both A and A^c (its complement) are recursively enumerable. This is a fundamental result connecting decidability and semi-decidability.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the set of mathematical theorems recursively enumerable?',
    options: [
      'Because theorems are short',
      'Because we can enumerate all proofs and output the last formula of each',
      'Because there are only finitely many theorems',
      'Because all formulas are theorems',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A theorem is the last formula of a valid proof. Since proofs are finite objects that can be systematically listed, a computer can enumerate all proofs and output the conclusion of each, thereby listing all theorems.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What does Church's Theorem state?",
    options: [
      'Every formula is a theorem',
      'There is an algorithm for determining if a formula is a theorem',
      'There is no algorithm for determining if a formula is a theorem',
      'The set of theorems is finite',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Church's Theorem states that there is no algorithm for determining, in general, whether a given formula is a theorem of mathematics. The set of theorems is not recursive.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Since the set of theorems is r.e. but not recursive, what follows from Kleene's proposition?",
    options: [
      'The set of nontheorems is also r.e.',
      'The set of nontheorems is recursive',
      'The set of nontheorems is not recursively enumerable',
      'The set of nontheorems is empty',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      "By Kleene's proposition, a set is recursive iff both it and its complement are r.e. Since theorems are r.e. but not recursive, the complement (nontheorems) cannot be r.e. We can list all theorems, but we cannot list all nontheorems!",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is the set of proofs recursive?',
    options: [
      'Because there are only finitely many proofs',
      'Because every formula is a proof',
      'Because there is a finite procedure to check if a list of formulas is a valid proof',
      'Because proofs cannot contain axioms',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A proof is a finite list of formulas where each is either an axiom or follows from earlier formulas by inference rules. Checking these conditions is a finite mechanical procedure, making the set of proofs recursive (decidable).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What does the Incompleteness Theorem state?',
    options: [
      'Every formula can be proved',
      'No formula can be proved',
      'There exist formulas p such that neither p nor ¬p are provable',
      'Mathematics is inconsistent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Incompleteness Theorem states that there are mathematical formulas p such that neither p nor its negation ¬p can be proved. These undecidable statements exist in any sufficiently strong consistent system.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who first proved the Incompleteness Theorem?',
    options: [
      'Turing',
      'Church',
      'Hilbert',
      'Gödel',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      "Kurt Gödel (1906–1978) first proved the Incompleteness Theorem. Church later used Gödel's result to prove Church's Theorem about the undecidability of theoremhood.",
  },
];
