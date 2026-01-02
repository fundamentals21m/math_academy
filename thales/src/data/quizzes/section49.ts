import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 49: What Is a Calculation?
 */
export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who first gave rigorous definitions of "calculation" in 1936?',
    options: [
      'Hilbert and Gödel',
      'Turing and Post',
      'Church and Kleene',
      'Fermat and Euler',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Alan Turing and Emil L. Post independently gave rigorous definitions of calculation in 1936. Turing invented the Turing machine, the theoretical ancestor of all modern computers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the Latin word "calculus" mean?',
    options: [
      'Calculation',
      'Number',
      'Pebble',
      'Machine',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The word "calculation" comes from Latin "calculus" meaning "pebble." The ancients performed calculations by moving pebbles on an abacus.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are the two basic functions from which others are built?',
    options: [
      'Addition and multiplication',
      'Identity f(x) = x and successor f(x) = x + 1',
      'Zero and one',
      'Max and min',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The basic functions are the identity function f(x) = x and the successor function f(x) = Sx = x + 1. All primitive recursive functions are built from these using five schemes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the recursion scheme for defining f(x̄, y)?',
    options: [
      'f(x̄, y) = g(x̄) + h(y)',
      'f(x̄, 0) = g(x̄), f(x̄, Sy) = h(x̄, y, f(x̄, y))',
      'f(x̄, y) = y × g(x̄)',
      'f(x̄, y) = f(y, x̄)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The recursion scheme defines f(x̄, 0) = g(x̄) for the base case and f(x̄, Sy) = h(x̄, y, f(x̄, y)) for the recursive step, allowing f to be computed from previously calculable functions g and h.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are primitive recursive functions?',
    options: [
      'Functions defined only using addition',
      'Functions built from basic functions using schemes (1)–(5)',
      'Functions that can only be computed on paper',
      'Functions discovered by primitive cultures',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Primitive recursive functions are those built from the identity and successor functions using substitution, interchange, contraction, superfluous variables, and recursion (schemes 1-5). They include +, ×, exponentiation, factorial, etc.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the minimization scheme (scheme 6)?',
    options: [
      'Finding the smallest function',
      'f(x̄) = the smallest y such that g(x̄, y) = 0',
      'Finding the minimum of two numbers',
      'Reducing a function to its simplest form',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The minimization scheme computes f(x̄) = μy[g(x̄, y) = 0], the smallest y making g(x̄, y) = 0. This extends primitive recursive functions to all (partial) recursive functions.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the Church-Turing thesis?',
    options: [
      'All computers are equivalent',
      'All reasonable models of computation define the same class of functions',
      'Church and Turing were the same person',
      'Mathematics is consistent',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Church-Turing thesis states that all reasonable models of computation (Turing machines, abacus, lambda calculus, modern computers) define exactly the same class of calculable functions.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What was Hilbert\'s 10th problem about?',
    options: [
      'Proving the Continuum Hypothesis',
      'Finding an algorithm for Diophantine equation solvability',
      'Defining prime numbers',
      'Computing square roots',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Hilbert\'s 10th problem asked for an algorithm to decide if a polynomial Diophantine equation has integer solutions. Matijasevič proved in 1970 that no such algorithm exists.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who introduced primitive recursive functions?',
    options: [
      'Hilbert',
      'Turing',
      'Gödel',
      'Church',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Kurt Gödel introduced primitive recursive functions in the proof of his famous Incompleteness Theorem, which showed that arithmetic cannot prove its own consistency.',
  },
];
