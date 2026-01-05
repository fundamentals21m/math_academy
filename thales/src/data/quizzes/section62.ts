import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 62: Graphs and Categories
 */
export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the components of a graph (oriented multigraph)?',
    options: [
      'Objects and morphisms only',
      'Arrows, objects, and source/target mappings S and T',
      'Vertices and edges with weights',
      'Sets and functions between them',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A graph consists of a class of arrows (directed edges), a class of objects (nodes), and two mappings S (source) and T (target) from arrows to objects.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many conditions must a graph satisfy to be a category?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A category is a graph satisfying four conditions: (1) composition of arrows, (2) associativity, (3) existence of identity arrows, and (4) identity laws.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the associativity law for composition in a category?',
    options: [
      'f ∘ g = g ∘ f',
      '(h ∘ g) ∘ f = h ∘ (g ∘ f)',
      'f ∘ 1 = 1 ∘ f',
      'S(f ∘ g) = T(f ∘ g)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The associativity law states that for arrows f: A → B, g: B → C, and h: C → D, we have (h ∘ g) ∘ f = h ∘ (g ∘ f).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the discrete category corresponding to a set A, what is the composition a ∘ a?',
    options: ['Undefined', 'The empty set', 'a', '1'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In the discrete category, for any element a ∈ A, we define a ∘ a = a. Each element serves as both an object and its own identity arrow.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When a monoid is viewed as a category, how many objects does it have?',
    options: ['Zero', 'One', 'As many as the monoid has elements', 'Infinitely many'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A monoid viewed as a category has exactly one object (usually denoted *). The elements of the monoid become the arrows, and composition is the monoid operation.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'In a monoid viewed as a category, what does the monoid identity element correspond to?',
    options: [
      'The unique object',
      'The identity arrow on the unique object',
      'A special nonidentity arrow',
      'The source mapping',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The monoid identity element 1 becomes the identity arrow 1* on the unique object *. This satisfies 1* ∘ a = a ∘ 1* = a for all arrows a.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'In a pre-ordered set (A, ≤) viewed as a category, what are the arrows?',
    options: [
      'All elements of A',
      'All pairs (a, b) where a ≤ b',
      'All functions from A to A',
      'Only the identity elements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The arrows in this category are pairs (a, b) where a ≤ b. The source is S((a,b)) = a and the target is T((a,b)) = b.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Why does the identity arrow 1ₐ = (a, a) exist for each element in a pre-ordered set category?',
    options: [
      'By the transitivity of ≤',
      'By the reflexivity of ≤',
      'By the symmetry of ≤',
      'By the antisymmetry of ≤',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Reflexivity of ≤ means a ≤ a for all a, so (a, a) is always a valid arrow. This becomes the identity arrow for object a.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'The category "2" has how many objects and how many nonidentity arrows?',
    options: [
      '1 object, 2 nonidentity arrows',
      '2 objects, 0 nonidentity arrows',
      '2 objects, 1 nonidentity arrow',
      '2 objects, 2 nonidentity arrows',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The category "2" has exactly two objects (0 and 1) and exactly one nonidentity arrow (f: 0 → 1). It corresponds to the pre-ordered set {0, 1} with 0 ≤ 1.',
  },
];
