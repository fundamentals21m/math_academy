import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 63: Functors
 */
export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does a functor F between categories A and B map?',
    options: [
      'Only objects of A to objects of B',
      'Both objects and arrows of A to objects and arrows of B',
      'Only arrows of A to arrows of B',
      'Sets to functions',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A functor F from category A to category B maps both objects of A to objects of B and arrows of A to arrows of B, while preserving the categorical structure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a condition for a functor?',
    options: [
      'F(g) has source F(a) and target F(a\\\\\') if g: a → a\\\\\'',
      'F(1ₐ) = 1_{F(a)}',
      'F(g ∘ h) = F(g) ∘ F(h)',
      'F must be injective on objects',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A functor must preserve source/target, identities, and composition. There is no requirement that a functor be injective on objects—multiple objects can map to the same object.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Why is every function between sets automatically a functor between discrete categories?',
    options: [
      'Because sets have no structure',
      'Because discrete categories have no arrows',
      'Because each element is both an object and its own identity arrow',
      'Because functions preserve order',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In a discrete category, each element a is both an object and the identity arrow 1ₐ. Since F(a) = F(1ₐ) = 1_{F(a)}, the functor conditions are automatically satisfied.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When a monoid is viewed as a category, what becomes the arrows?',
    options: [
      'The subsets of the monoid',
      'The identity element only',
      'The elements of the monoid',
      'The binary operation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When a monoid is viewed as a one-object category, the elements of the monoid become the arrows, and composition of arrows is the monoid operation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A monoid homomorphism between monoids viewed as categories is:',
    options: [
      'Not a functor',
      'A functor only if bijective',
      'A graph morphism',
      'Always a functor',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Every monoid homomorphism is automatically a functor between the corresponding one-object categories, because it preserves identity and composition (the monoid operation).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does "F preserves composition" mean for a functor?',
    options: [
      'F(g) = F(h) implies g = h',
      'F(g ∘ h) = F(g) ∘ F(h)',
      'F(g ∘ h) = F(h) ∘ F(g)',
      'F commutes with all arrows',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Preserving composition means F(g ∘ h) = F(g) ∘ F(h). The image of a composition equals the composition of the images.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is a "small" category?',
    options: [
      'A category whose objects and arrows both form sets (not proper classes)',
      'A category with finitely many objects',
      'A category with at most one arrow between any two objects',
      'A discrete category',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A small category is one where both the collection of objects and the collection of arrows are sets, rather than proper classes. This distinction matters in set theory.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What are the objects and arrows in the category Cat?',
    options: [
      'Objects are sets, arrows are functions',
      'Objects are graphs, arrows are graph morphisms',
      'Objects are small categories, arrows are functors',
      'Objects are groups, arrows are homomorphisms',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Cat is the category whose objects are small categories and whose arrows are functors from one small category to another.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'According to the text, which mathematical entities can be viewed as functors?',
    options: [
      'Sets, graphs, and M-sets',
      'Only continuous functions',
      'Only homomorphisms',
      'Only bijective functions',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The text shows that sets can be viewed as functors from a one-element category, graphs as functors from a two-object category, and M-sets as functors from a monoid category.',
  },
];
