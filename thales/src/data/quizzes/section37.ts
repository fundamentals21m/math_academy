import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 37: The Fundamental Theorem of Algebra
 */
export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Fundamental Theorem of Algebra state?',
    options: [
      'Every integer can be factored into primes',
      'Every polynomial with complex coefficients has complex solutions',
      'Every real number is either rational or irrational',
      'Every equation has exactly one solution',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Fundamental Theorem of Algebra states that every polynomial equation with complex coefficients has complex solutions. This means ℂ is algebraically closed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who first stated the Fundamental Theorem of Algebra?',
    options: ['Gauss', 'Euler', 'Albert Girard', 'Weierstrass'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The theorem was first stated by Albert Girard (1595–1632) in 1629. Proofs were later given by d\'Alembert and Gauss.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the Fundamental Theorem of Algebra considered "curious"?',
    options: [
      'Because it has no known proof',
      'Because its proof uses continuity (analysis), not just algebra',
      'Because it only works for real numbers',
      'Because Gauss discovered it by accident',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The proof of this fundamental theorem of ALGEBRA requires the notion of continuity, which belongs to ANALYSIS rather than algebra. It often happens that proving properties of a system requires going outside that system.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many roots (counting multiplicity) does a degree-m polynomial have over ℂ?',
    options: ['At most m', 'Exactly m', 'At least m', 'm or m-1'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'By the corollary to the Fundamental Theorem, a polynomial of degree m with complex coefficients has exactly m linear factors: p(z) = (z - z₁)(z - z₂)···(z - zₘ). Thus it has exactly m roots, counting multiplicity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does it mean that ℂ is "algebraically closed"?',
    options: [
      'No further numbers can be added to ℂ',
      'Every polynomial over ℂ has all its roots in ℂ',
      'ℂ is a closed subset of some larger set',
      'Addition in ℂ is associative',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A field is algebraically closed if every polynomial with coefficients in that field has all its roots in that field. ℂ is algebraically closed—we don\'t need any further extension to solve polynomial equations.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the key topological idea in the proof of the theorem?',
    options: [
      'Fixed point theorem',
      'Winding numbers of curves around the origin',
      'Compactness of closed intervals',
      'The Jordan curve theorem',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The proof uses winding numbers: as z moves around a large circle, w = p(z) winds m times around the origin. As the circle shrinks, winding decreases to 0. By continuity, the curve must pass through the origin.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If a polynomial with real coefficients has root 3 + 2i, what other root must it have?',
    options: ['3 - 2i', '-3 + 2i', '-3 - 2i', '2 + 3i'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'For polynomials with real coefficients, complex roots come in conjugate pairs. If x + yi is a root, then x - yi is also a root. So if 3 + 2i is a root, so is 3 - 2i.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Whose proof of the Fundamental Theorem is argued to have a flaw by Stillwell?',
    options: ['d\'Alembert\'s', 'Girard\'s', 'Gauss\'s', 'Weierstrass\'s'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'John Stillwell [1989] argues that there is a flaw in Gauss\'s proof, and the first rigorous proof was given only after Weierstrass established the basic properties of continuous functions.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What was the mechanical device mentioned in the text used for?',
    options: [
      'Proving the theorem',
      'Finding roots of polynomials by tracing curves',
      'Computing complex number products',
      'Drawing regular polygons',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Before modern computers, a mechanical device traced out the w curve for any given radius. As the radius decreased, a bell would ring when the curve passed through the origin, indicating a root had been found.',
  },
];
