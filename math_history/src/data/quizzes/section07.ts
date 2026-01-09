import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Playfair\'s Axiom states that through a point not on a line, there is:',
    options: [
      'No line parallel to the given line',
      'Exactly one line parallel to the given line',
      'Infinitely many lines parallel to the given line',
      'Exactly two lines parallel to the given line'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Playfair\'s Axiom (1795) is equivalent to Euclid\'s fifth postulate: exactly one parallel exists.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is equivalent to the parallel postulate?',
    options: [
      'The sum of angles in a triangle is 180°',
      'All right angles are equal',
      'A line can be drawn through any two points',
      'A circle can be drawn with any center and radius'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The statement that angles in a triangle sum to 180° is logically equivalent to the parallel postulate.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who were the three mathematicians who independently discovered non-Euclidean geometry?',
    options: [
      'Newton, Leibniz, Euler',
      'Gauss, Bolyai, Lobachevsky',
      'Euclid, Archimedes, Ptolemy',
      'Descartes, Fermat, Pascal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gauss (Germany), Bolyai (Hungary), and Lobachevsky (Russia) independently discovered that consistent geometries exist where the parallel postulate fails.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The parallel postulate was eventually:',
    options: [
      'Proven from the other postulates',
      'Shown to be false',
      'Shown to be independent of the other postulates',
      'Removed from geometry'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The parallel postulate is independent: it cannot be proven from the other axioms, and geometries exist where it fails.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Saccheri\'s approach to the parallel postulate was to:',
    options: [
      'Prove it directly from the other axioms',
      'Assume it was false and try to derive a contradiction',
      'Ignore it entirely',
      'Replace it with a simpler statement'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Saccheri (1733) hoped to prove the postulate by contradiction, exploring what happens if it\'s false. He found strange but consistent results.',
  },
];
