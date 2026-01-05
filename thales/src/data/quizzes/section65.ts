import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 65: A Natural Transformation between Vector Spaces
 */
export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a linear functional on a vector space V?',
    options: [
      'A bijective function from V to V',
      'A linear transformation from V to ℝ',
      'An element of V',
      'A basis of V',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A linear functional on V is a linear transformation f: V → ℝ, i.e., a function from V to the real numbers that preserves addition and scalar multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the dual space V* of a vector space V?',
    options: [
      'The set of all subspaces of V',
      'The set of all bases of V',
      'The set of all linear functionals on V',
      'The set of all linear transformations from V to V',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The dual space V* is the set of all linear functionals on V. It is itself a vector space under pointwise addition and scalar multiplication.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the double dual V** of a vector space V?',
    options: ['V itself', '(V*)*', 'V × V', 'V ⊗ V'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The double dual V** is (V*)*, the dual of the dual space. It consists of linear functionals on V*.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the canonical embedding x̃ ∈ V** defined for x ∈ V?',
    options: ['x̃(f) = x + f', 'x̃(f) = f(x)', 'x̃(f) = x · f', 'x̃(f) = f'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'For x ∈ V, the element x̃ ∈ V** is defined by x̃(f) = f(x) for any linear functional f ∈ V*. This "evaluates" the functional at x.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When is the canonical embedding V → V** an isomorphism?',
    options: [
      'Always',
      'Never',
      'When V has finite dimension',
      'Only when V = ℝ',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The canonical embedding ~ : V → V** is an isomorphism when V has finite dimension. For infinite-dimensional spaces, it is injective but not surjective.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does the double dual functor F map a vector space V to?',
    options: ['V*', 'V**', 'V', 'ℝ'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The functor F: Vect → Vect maps each vector space V to its double dual V**.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The canonical embedding ~ defines a natural transformation from which functor to which functor?',
    options: [
      'From the dual functor to the identity functor',
      'From the identity functor I to the double dual functor F',
      'From F to F',
      'From V* to V**',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The canonical embedding defines a natural transformation t from the identity functor I (which maps V to V) to the double dual functor F (which maps V to V**).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What equation expresses the naturality of the canonical embedding?',
    options: [
      'h* ∘ ~ = ~ ∘ h',
      'h** ∘ ~ = ~ ∘ h',
      'h ∘ ~ = ~ ∘ h**',
      '~ ∘ ~ = h**',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The naturality condition states that h** ∘ ~ = ~ ∘ h, meaning F(h) ∘ t(V) = t(V\') ∘ I(h) for any linear transformation h: V → V\'.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'According to Lawvere\'s slogan, what are "the arrows between" interesting mathematical objects?',
    options: [
      'Functions',
      'Homomorphisms',
      'Natural transformations',
      'Isomorphisms',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Lawvere\'s slogan states that "many objects of interest in mathematics are functors and the arrows between them are natural transformations."',
  },
];
