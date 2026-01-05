import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 64: Natural Transformations
 */
export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In what year did category theory begin with Eilenberg and Mac Lane\'s article?',
    options: ['1935', '1945', '1955', '1965'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Category theory began in 1945 with Eilenberg and Mac Lane\'s article "General Theory of Natural Equivalences."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does a natural transformation t from F to G assign to each object a?',
    options: [
      'An object in A',
      'An arrow t(a) from F(a) to G(a) in B',
      'A functor from A to B',
      'An identity arrow',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A natural transformation t assigns to every object a of category A an arrow t(a) in B from F(a) to G(a).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the naturality condition for a natural transformation t?',
    options: [
      't(a) = t(b) for all objects a and b',
      'F(f) ∘ G(f) = t(a)',
      'G(f) ∘ t(a) = t(b) ∘ F(f)',
      't(f) = F(f) ∘ G(f)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The naturality condition states that for any arrow f: a → b in A, we have G(f) ∘ t(a) = t(b) ∘ F(f). This says the naturality square commutes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does it mean for the "naturality square to commute"?',
    options: [
      'All arrows are invertible',
      'Going around either way gives the same result',
      'The square has equal sides',
      'F equals G',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A commutative square means that following the arrows around either path (top then right, or left then bottom) yields the same composite arrow.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the naturality square, where do the objects a and b live?',
    options: [
      'In category B',
      'In category A',
      'In both A and B',
      'In neither A nor B',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Objects a and b are in category A, while all the objects and arrows shown in the naturality square (F(a), G(a), F(b), G(b), and the arrows between them) are in category B.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'When sets are viewed as functors from a one-object category, what corresponds to a function between sets?',
    options: [
      'A functor',
      'A natural transformation',
      'An identity arrow',
      'A composition',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When sets S and S\' are viewed as functors F and F\', a function f: S → S\' corresponds to a natural transformation from F to F\'.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'A graph morphism between small graphs can be viewed as:',
    options: [
      'A functor only',
      'An object in Cat',
      'A natural transformation between functors representing the graphs',
      'A category',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since graphs can be viewed as functors, a graph morphism (which preserves source and target) can be viewed as a natural transformation between those functors.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What property must an M-homomorphism f satisfy?',
    options: ['f(a + b) = f(a) + f(b)', 'f(ab) = af(b)', 'f(1) = 1', 'f is bijective'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'An M-homomorphism f from M-set (M, X, m) to (M, X\', m\') must satisfy f(ab) = af(b), meaning f is compatible with the monoid action.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'According to the text, what is the main value of category theory\'s abstract definitions?',
    options: [
      'They make simple ideas more complicated',
      'They embody methods of many branches of mathematics and unify their results',
      'They replace all other mathematical notation',
      'They only apply to set theory',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The abstract definitions of category theory embody the ideas and methods of many branches of mathematics at once, and thus serve to unify their separate proofs and results.',
  },
];
