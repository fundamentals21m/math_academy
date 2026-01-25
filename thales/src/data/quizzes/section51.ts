import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 51: Hilbert's Tenth Problem
 */
export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What did Hilbert's tenth problem ask for?",
    options: [
      'A proof that all equations have solutions',
      'A formula for all prime numbers',
      'A proof of the Continuum Hypothesis',
      'An algorithm to determine if a Diophantine equation has integer solutions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      "Hilbert's tenth problem (1900) asked for an algorithm to determine whether any given polynomial Diophantine equation has a solution in integers.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who finally proved that Hilbert\'s tenth problem is unsolvable?',
    options: [
      'Julia Robinson',
      'Martin Davis',
      'Yuri Matiyasevic',
      'Hilary Putnam',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Yuri Matiyasevic proved in 1970 that every recursively enumerable set is Diophantine, which implies Hilbert\'s tenth problem is unsolvable. He built on crucial work by Davis, Putnam, and Robinson.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a Diophantine set?',
    options: [
      'A set containing only prime numbers',
      'A set that is both recursive and recursively enumerable',
      'A set A where t is in A iff p(t, x1, ..., xn) = 0 has a positive integer solution',
      'A set discovered by Diophantus'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A set A of positive integers is Diophantine if there is a polynomial p with integer coefficients such that t is in A if and only if p(t, x1, ..., xn) = 0 has a solution in positive integers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the relationship between Diophantine sets and recursively enumerable sets?',
    options: [
      'Diophantine sets are a proper subset of r.e. sets',
      'They are exactly the same (Diophantine = r.e.)',
      'R.e. sets are a proper subset of Diophantine sets',
      'They are disjoint',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Matiyasevic's theorem (1970) proved that every r.e. set is Diophantine, and Lemma 21.1 shows every Diophantine set is r.e. Therefore, the two classes are identical.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What was Julia Robinson's key contribution to solving Hilbert's tenth problem?",
    options: [
      'She showed exponential growth in solutions suffices for r.e. = Diophantine',
      'She proved the problem was solvable',
      'She found all prime-representing polynomials',
      'She invented the Turing machine'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Julia Robinson proved that a sufficient condition for every r.e. set to be Diophantine is the existence of a polynomial equation whose solutions exhibit exponential growth. Matiyasevic later found such an equation using Fibonacci numbers.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why does Hilbert\'s tenth problem being unsolvable follow from Matiyasevic\'s theorem?',
    options: [
      'Because all polynomials have infinitely many solutions',
      'Because Diophantine = r.e., but not all r.e. sets are recursive',
      'Because the integers are uncountable',
      'Because Fibonacci numbers grow too fast',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Since Diophantine sets equal r.e. sets, and not all r.e. sets are recursive (e.g., the set of theorems), there cannot be an algorithm to decide membership in all Diophantine sets. Hence no algorithm exists for Diophantine equation solvability.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What surprising fact about primes follows from Matiyasevic\'s theorem?',
    options: [
      'There are infinitely many primes',
      'All primes are odd',
      'Primes cannot be represented by any polynomial',
      'There exists a polynomial whose positive values are exactly the primes',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "Since the set of primes is r.e. (hence Diophantine by Matiyasevic), Putnam's theorem implies there exists a polynomial with integer coefficients whose positive values for positive integer arguments are exactly the prime numbers.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In what year was Hilbert\'s tenth problem finally resolved?',
    options: [
      '1900',
      '1936',
      '1970',
      '1994',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Matiyasevic completed the proof in 1970, showing that Hilbert\'s tenth problem is unsolvable. The problem had been open for 70 years since Hilbert posed it in 1900.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Which sequence played a key role in Matiyasevic\'s proof?',
    options: [
      'The Fibonacci sequence',
      'The sequence of prime numbers',
      'The sequence of perfect squares',
      'The harmonic series'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Matiyasevic found a polynomial Diophantine equation whose solutions involve Fibonacci numbers F_{2m}, which grow exponentially. This satisfied Julia Robinson\'s condition for proving r.e. = Diophantine.',
  },
];
