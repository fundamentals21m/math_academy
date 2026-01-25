import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 61: Concrete Categories
 */
export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who was a prominent and influential proponent of abstract algebra in the 20th century?',
    options: [
      'Kurt Gödel',
      'Bertrand Russell',
      'Emmy Noether',
      'David Hilbert',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Emmy Noether (1882–1935) was a prominent and influential proponent of abstract algebra. The supreme abstraction of category theory emerged from this trend in mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a concrete category?',
    options: [
      'A class of sets with no additional structure',
      'A collection of abstract objects with no functions',
      'A single set with multiple operations',
      'A class of structured sets with all structure-preserving functions between them',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A concrete category is a class of sets, each endowed with a certain structure, together with the class of all functions which map one set to another while preserving this structure.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What makes the category of sets special among concrete categories?',
    options: [
      'It has the most structure',
      'It has no structure to preserve, so all functions qualify',
      'It only contains finite sets',
      'It requires special homomorphisms',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In the category of sets with all functions, there is no structure to preserve, so the condition on functions is trivially satisfied. Every function between sets qualifies as a morphism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are the two properties that define a monoid?',
    options: [
      'Associativity and existence of an identity element',
      'Commutativity and associativity',
      'Reflexivity and transitivity',
      'Invertibility and associativity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A monoid is a set with a binary operation that is associative ((a·b)·c = a·(b·c)) and has an identity element 1 such that 1·a = a·1 = a.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What must a monoid homomorphism preserve?',
    options: [
      'Only the binary operation',
      'Only the identity element',
      'Both the binary operation and the identity element',
      'The ordering relation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A monoid homomorphism f: A → A\' must preserve both structure: f(a·b) = f(a)·f(b) and f(1) = 1 (identity maps to identity).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What properties does a pre-ordered set\'s relation ≤ have?',
    options: [
      'Symmetric and transitive',
      'Antisymmetric and transitive',
      'Reflexive and symmetric',
      'Reflexive and transitive',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A pre-ordered set has a binary relation ≤ that is reflexive (a ≤ a) and transitive (if a ≤ b and b ≤ c, then a ≤ c).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is a monotone mapping?',
    options: [
      'A function that reverses order',
      'A function that preserves order: if a ≤ b then f(a) ≤ f(b)',
      'A function that maps to a single element',
      'A function that creates new orderings',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A monotone mapping is a function f from a pre-ordered set A to a pre-ordered set A\' that preserves order: if a ≤ b then f(a) ≤ f(b).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is the doubling function from natural numbers to even numbers a monotone mapping?',
    options: [
      'It preserves the ≤ relation: if a ≤ b then 2a ≤ 2b',
      'It doubles every number',
      'It maps odd numbers to even numbers',
      'It is injective',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The doubling function preserves order: if a ≤ b for natural numbers, then 2a ≤ 2b for even numbers. This makes it a monotone mapping between the two pre-ordered sets.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Which two properties always hold in concrete categories?',
    options: [
      'Identity preserves structure, and composition of structure-preserving functions preserves structure',
      'All functions are invertible, and composition is commutative',
      'All morphisms are bijections, and there are finite objects',
      'Every set has infinite elements, and functions are continuous',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In all concrete categories: (1) the identity function on any set always preserves structure, and (2) the composition of two structure-preserving functions also preserves structure.',
  },
];
