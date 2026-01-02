import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 16: Non-Euclidean Geometry and Hilbert's Axioms
 */
export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'Why did mathematicians for over 2,000 years try to prove Euclid\'s fifth postulate from the other four?',
    options: [
      'Because Euclid asked them to',
      'Because it seemed less natural or self-evident than the others',
      'Because it was obviously false',
      'Because it contradicted the other postulates',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The parallel postulate seemed less natural or convincing than the other postulates, so mathematicians felt it should be deducible from them. We now know these attempts were doomed—the fifth postulate is independent of the others.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'Which of the following is equivalent to Euclid\'s parallel postulate (in absolute geometry)?',
    options: [
      'Every angle can be bisected',
      'There is at least one triangle whose angle sum is 180°',
      'Two points determine a unique line',
      'A circle can be drawn with any center and radius',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In absolute geometry (postulates I-IV only), the statement "there is at least one triangle whose angle sum is 180°" is equivalent to the parallel postulate. This was one of Legendre\'s equivalent formulations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Who was the first to publish results in hyperbolic geometry?',
    options: [
      'Gauss in 1824',
      'Lobachevsky in 1829',
      'Beltrami in 1868',
      'Hilbert in 1899',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'N. I. Lobachevsky of the University of Kazan published the first results in hyperbolic geometry in 1829. In the same year, J. Bolyai independently discovered essentially the same results.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'What is the key axiom of hyperbolic geometry that replaces Euclid\'s parallel postulate?',
    options: [
      'Through any point not on a line, there is exactly one parallel',
      'Through any point not on a line, there are no parallels',
      'Through any point not on a line, there are at least two parallels',
      'All lines eventually meet',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Hyperbolic geometry replaces the parallel postulate with: "Through any point not on a line, there are at least two lines through that point and parallel to that line."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'What did Beltrami prove in 1868 about hyperbolic geometry?',
    options: [
      'That it was false',
      'That it was the true geometry of space',
      'That it is consistent if Euclidean geometry is consistent',
      'That it contradicts Euclidean geometry',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Beltrami gave a Euclidean model for hyperbolic geometry, showing that any contradiction in hyperbolic geometry could be translated into a contradiction in Euclidean geometry. Thus hyperbolic geometry is consistent if Euclidean geometry is.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'In the Poincaré disk model of hyperbolic geometry, what are "lines"?',
    options: [
      'Ordinary straight lines',
      'Parabolas',
      'Diameters or circular arcs orthogonal to the boundary circle',
      'Ellipses inside the disk',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'In the Poincaré disk model, "lines" are either diameters of the unit circle (minus endpoints) or circular arcs in the interior of the unit circle that are orthogonal to the boundary.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What is true about triangles in hyperbolic geometry?',
    options: [
      'The angle sum is exactly 180°',
      'The angle sum is greater than 180°',
      'The angle sum is less than 180°',
      'Triangles do not exist in hyperbolic geometry',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In hyperbolic geometry, the angle sum of any triangle is less than 180°. In elliptic geometry, it is greater than 180°. Only in Euclidean geometry is it exactly 180°.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'How many axioms did Hilbert require for a complete axiomatization of Euclidean geometry (1899)?',
    options: [
      '5 axioms',
      '13 axioms',
      '21 axioms',
      '50 axioms',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Hilbert required 21 axioms to give a completely adequate axiomatic description of three-dimensional Euclidean space, finally fixing the gaps in Euclid\'s original treatment.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'Why did Hilbert add the "axiom of completeness" to his system?',
    options: [
      'To make the system more elegant',
      'Because without it, Euclid\'s Proposition 1 (equilateral triangle) could not be proved',
      'To replace the parallel postulate',
      'Because Gauss suggested it',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Hilbert reluctantly added the axiom of completeness when it became apparent that without it, one still could not deduce Euclid\'s Proposition 1—the construction of an equilateral triangle requires knowing that two circles actually intersect.',
  },
];
