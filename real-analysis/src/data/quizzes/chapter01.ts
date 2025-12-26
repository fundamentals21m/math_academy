// Chapter 1: Foundations of Analysis
// Based on Kenneth A. Ross - Elementary Analysis
import type { QuizQuestion } from './types';

// Section 1: The Real Number System
export const section01Questions: QuizQuestion[] = [
  {
    id: 'ra-s01-q1',
    question: 'Which of the following is NOT a property of the real numbers?',
    options: [
      'Completeness (least upper bound property)',
      'Archimedean property',
      'Every Cauchy sequence converges',
      'The rationals are dense in the reals'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rationals are dense in the reals, but this is a property of the reals, not something that is NOT a property. All options listed are actually properties of the real numbers.'
  },
  {
    id: 'ra-s01-q2',
    question: 'The least upper bound property states that:',
    options: [
      'Every non-empty set of real numbers has a maximum',
      'Every non-empty set of real numbers bounded above has a supremum',
      'Every Cauchy sequence converges to a real number',
      'The reals are uncountably infinite'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The least upper bound property (completeness) states that every non-empty set of real numbers that is bounded above has a least upper bound (supremum).'
  },
  {
    id: 'ra-s01-q3',
    question: 'Which of these sets has the Archimedean property?',
    options: [
      'The natural numbers',
      'The rational numbers',
      'The real numbers',
      'All of the above'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Archimedean property holds for the natural numbers, rationals, and reals. It states that for any two positive numbers a and b, there exists a natural number n such that na > b.'
  }
];

// Section 2: Mathematical Induction
export const section02Questions: QuizQuestion[] = [
  {
    id: 'ra-s02-q1',
    question: 'Use mathematical induction to prove that the sum of the first n odd numbers equals n². What is the inductive hypothesis?',
    options: [
      'The sum of the first k odd numbers equals k²',
      'The sum of the first n odd numbers equals n²',
      'The nth odd number is 2n-1',
      'The sum of the first n natural numbers equals n(n+1)/2'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In mathematical induction, we assume the statement holds for some arbitrary k (the inductive hypothesis), then prove it holds for k+1.'
  },
  {
    id: 'ra-s02-q2',
    question: 'Which of these statements about mathematical induction is correct?',
    options: [
      'It can only be used to prove statements about natural numbers',
      'It requires proving the statement for infinitely many cases',
      'It consists of a base case and an inductive step',
      'It can only prove theorems, not identities'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Mathematical induction consists of two steps: proving the base case (usually n=1) and proving that if the statement holds for k, it holds for k+1.'
  },
  {
    id: 'ra-s02-q3',
    question: 'Prove by induction: 1 + 3 + 5 + ... + (2n-1) = n². For the inductive step, the sum becomes:',
    options: [
      'k² + (2(k+1)-1)',
      'k² + 2k + 1',
      'k² + 2(k+1) + 1',
      '(k+1)²'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If the sum of first k odd numbers is k², then adding the next odd number (2(k+1)-1 = 2k+1) gives k² + 2k + 1 = (k+1)².'
  }
];

// Section 3: Finite and Infinite Sets
export const section03Questions: QuizQuestion[] = [
  {
    id: 'ra-s03-q1',
    question: 'Which of these sets has the same cardinality as the natural numbers?',
    options: [
      'The integers',
      'The rationals',
      'The reals',
      'The natural numbers themselves'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The natural numbers ℕ = {1, 2, 3, ...} have cardinality ℵ₀. The integers ℤ and rationals ℚ also have cardinality ℵ₀, but the question asks for the same cardinality as the naturals, which is themselves.'
  },
  {
    id: 'ra-s03-q2',
    question: 'Cantor\'s diagonal argument shows that:',
    options: [
      'The rationals are countable',
      'The reals are uncountable',
      'The natural numbers are infinite',
      'Every infinite set has a countable subset'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cantor\'s diagonal argument proves that the real numbers are uncountably infinite by constructing a real number not in any countable list of reals.'
  },
  {
    id: 'ra-s03-q3',
    question: 'The cardinality of the continuum is:',
    options: [
      'ℵ₀ (aleph null)',
      '2^ℵ₀',
      'ℵ₁',
      'Finite'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The cardinality of the real numbers (the continuum) is 2^ℵ₀, which is strictly greater than ℵ₀ (the cardinality of the natural numbers).'
  }
];

// Section 4: Functions and Relations
export const section04Questions: QuizQuestion[] = [
  {
    id: 'ra-s04-q1',
    question: 'A function f: A → B is injective if:',
    options: [
      'f(a) = f(b) implies a = b for all a,b in A',
      'For every b in B, there exists a in A such that f(a) = b',
      'Both injective and surjective',
      'Defined for all elements in A'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function is injective (one-to-one) if different elements in the domain map to different elements in the codomain.'
  },
  {
    id: 'ra-s04-q2',
    question: 'The composition of two functions f and g, denoted g ∘ f, is defined as:',
    options: [
      '(g ∘ f)(x) = f(g(x))',
      '(g ∘ f)(x) = g(f(x))',
      '(g ∘ f)(x) = f(x) + g(x)',
      '(g ∘ f)(x) = f(x) · g(x)'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Function composition g ∘ f means "g after f", so (g ∘ f)(x) = g(f(x)).'
  },
  {
    id: 'ra-s04-q3',
    question: 'A function has an inverse if and only if it is:',
    options: [
      'Defined on the reals',
      'Continuous',
      'Bijective (both injective and surjective)',
      'Differentiable'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A function has an inverse if and only if it is bijective - both injective and surjective. This ensures the inverse is also a function.'
  }
];