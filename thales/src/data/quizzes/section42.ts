import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 42: Cardinal Numbers
 */
export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who developed the theory of cardinal numbers?',
    options: ['Dedekind', 'Georg Cantor', 'Kronecker', 'Hilbert'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Georg Cantor (1845-1918) developed the theory of cardinal numbers, though he faced significant opposition from mathematicians like Kronecker who rejected the concept of "actual infinity."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When do two sets have the same cardinality?',
    options: [
      'When they have the same number of elements',
      'When there exists a bijection (one-to-one correspondence) between them',
      'When one is a subset of the other',
      'When they are equal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Two sets A and B have the same cardinality if and only if there exists a one-to-one and onto function (bijection) f: A → B. This works for both finite and infinite sets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does ℵ₀ (aleph-null) represent?',
    options: [
      'The cardinality of the real numbers',
      'The cardinality of the natural numbers',
      'The smallest cardinal',
      'The cardinality of the power set of ℕ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'ℵ₀ (aleph-null) is the cardinality of the natural numbers ℕ. Sets with this cardinality are called "countably infinite" or just "countable."',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Galileo\'s Theorem state?',
    options: [
      'All infinite sets have the same cardinality',
      'Any infinite subset of a countable set is countable',
      'The power set is always larger',
      'ℕ and ℝ have different cardinalities',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Galileo\'s Theorem states that if a set S has cardinality ℵ₀, then any infinite subset of S also has cardinality ℵ₀. This might suggest there\'s only one infinity, but Cantor proved otherwise.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many elements does the power set of an n-element set have?',
    options: ['n', 'n²', '2n', '2ⁿ'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The power set of an n-element set has 2ⁿ elements. This is because each element can either be included or excluded from a subset, giving 2 choices per element.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does Cantor\'s Theorem state?',
    options: [
      'All infinite sets are countable',
      'Any set A has lower cardinality than its power set P(A)',
      'The natural numbers are the smallest infinite set',
      'There are only countably many infinities',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Cantor\'s Theorem states that |A| < |P(A)| for any set A. This is proved using the diagonal argument: assuming a bijection exists leads to a contradiction.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the Continuum Hypothesis?',
    options: [
      'There are infinitely many infinities',
      'ℵ₀ is the smallest infinity',
      'There is no cardinality strictly between ℵ₀ and 2^ℵ₀',
      'The real numbers are uncountable',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Continuum Hypothesis states that there is no set with cardinality strictly between ℵ₀ (the naturals) and 2^ℵ₀ (the reals). It is independent of the standard axioms of set theory.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who proved that the Continuum Hypothesis is independent of set theory axioms?',
    options: [
      'Cantor alone',
      'Hilbert and Russell',
      'Gödel and Cohen',
      'Dedekind and Peano',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In 1940, Gödel showed the Continuum Hypothesis is consistent with set theory axioms. In 1963, Cohen showed its negation is also consistent. Together, this proves it\'s independent.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What technique is used to prove Cantor\'s Theorem?',
    options: [
      'Mathematical induction',
      'The diagonal argument',
      'Proof by exhaustion',
      'The pigeonhole principle',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Cantor\'s Theorem is proved using the diagonal argument: assuming a bijection f: A → P(A) exists, we construct the set S = {x ∈ A | x ∉ f(x)}, which leads to a contradiction.',
  },
];
