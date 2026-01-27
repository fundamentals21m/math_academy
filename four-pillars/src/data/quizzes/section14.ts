import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'David Hilbert\'s axiomatization of geometry (1899) addressed:',
    options: [
      'The need for coordinates',
      'Gaps in Euclid\'s logical foundations',
      'Calculus applications',
      'Three-dimensional only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hilbert filled logical gaps in Euclid, such as the implicit use of "betweenness."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hilbert\'s axiom groups include: incidence, order, congruence, continuity, and:',
    options: [
      'Area',
      'Trigonometry',
      'Parallels',
      'Measurement'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The five groups are: incidence, order, congruence, parallels, and continuity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Non-Euclidean geometry arises by:',
    options: [
      'Adding more axioms',
      'Using only circles',
      'Removing all axioms',
      'Changing or denying the parallel postulate'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hyperbolic and elliptic geometries result from alternative parallel axioms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, through a point P not on line L:',
    options: [
      'There are infinitely many parallels to L',
      'There is no parallel to L',
      'There is exactly one parallel to L',
      'Lines do not exist'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hyperbolic geometry has infinitely many lines through P that don\'t meet L.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The independence of the parallel postulate means:',
    options: [
      'It can be proved from the other axioms',
      'It cannot be proved or disproved from the other axioms',
      'It is false',
      'It is redundant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Models of hyperbolic geometry show the parallel postulate is independent of the other axioms.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Hilbert\'s formalist approach treats geometric terms like "point" and "line" as:',
    options: [
      'Physical objects',
      'Numbers',
      'Undefined terms satisfying certain axioms',
      'Coordinates'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In Hilbert\'s system, primitive terms are implicitly defined by the axioms they satisfy.',
  },
];
