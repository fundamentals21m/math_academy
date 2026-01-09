import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 's30-e01',
    type: 'multiple-choice',
    question:
      'What does it mean for two triangles to be "in perspective from a point"?',
    difficulty: 'easy',
    options: [
      'They have the same area',
      'Their corresponding vertices lie on three concurrent lines',
      'They are congruent',
      'They share a common vertex',
    ],
    correctIndex: 1,
    explanation:
      'Two triangles $ABC$ and $A\'B\'C\'$ are in perspective from a point $O$ if lines $AA\'$, $BB\'$, and $CC\'$ all pass through $O$ (are concurrent). The point $O$ is called the center of perspectivity.',
  },
  {
    id: 's30-e02',
    type: 'multiple-choice',
    question: 'What does Desargues\' theorem conclude?',
    difficulty: 'easy',
    options: [
      'The triangles are congruent',
      'The triangles have equal areas',
      'Corresponding sides meet in collinear points',
      'The triangles are similar',
    ],
    correctIndex: 2,
    explanation:
      'Desargues\' theorem states: if two triangles are in perspective from a point, then they are in perspective from a line—meaning their corresponding sides meet in three collinear points (the "axis of perspectivity").',
  },
  {
    id: 's30-m01',
    type: 'multiple-choice',
    question:
      'Why is Desargues\' theorem easier to prove in 3D than in 2D?',
    difficulty: 'medium',
    options: [
      'There are more points to work with',
      'The triangles can be placed in different planes that intersect in a line',
      '3D coordinates are simpler',
      'The theorem is false in 2D',
    ],
    correctIndex: 1,
    explanation:
      'In 3D, place the two triangles in different planes $\\pi$ and $\\pi\'$. The three intersection points of corresponding sides must lie on both planes, hence on their intersection line $\\pi \\cap \\pi\'$. This gives collinearity immediately!',
  },
  {
    id: 's30-m02',
    type: 'multiple-choice',
    question: 'What is special about Desargues\' theorem under duality?',
    difficulty: 'medium',
    options: [
      'It becomes false',
      'It becomes a different theorem',
      'Its dual is its own converse (it\'s self-dual)',
      'It cannot be dualized',
    ],
    correctIndex: 2,
    explanation:
      'Desargues\' theorem is "self-dual"—when you swap "point" and "line" throughout the statement, you get the converse of the original theorem. This makes both the theorem and its converse equally fundamental.',
  },
  {
    id: 's30-h01',
    type: 'multiple-choice',
    question:
      'A projective plane satisfies Desargues\' theorem if and only if it can be:',
    difficulty: 'hard',
    options: [
      'Drawn on flat paper',
      'Coordinatized by a division ring',
      'Embedded in Euclidean space',
      'Colored with two colors',
    ],
    correctIndex: 1,
    explanation:
      'A projective plane satisfies Desargues\' theorem if and only if it can be coordinatized by a division ring (where division is possible but multiplication may not be commutative). This is equivalent to being embeddable in a projective 3-space.',
  },
  {
    id: 's30-h02',
    type: 'multiple-choice',
    question:
      'Why was Desargues\' original work largely forgotten for 200 years?',
    difficulty: 'hard',
    options: [
      'It contained mathematical errors',
      'It was written in Latin',
      'He used obscure botanical terminology for geometric concepts',
      'It was banned by the Church',
    ],
    correctIndex: 2,
    explanation:
      'Desargues used strange botanical terminology—calling lines "palms," points "eyes," and pencils of lines "trees." This made his work incomprehensible to most readers. Only one copy survived, rediscovered in 1845.',
  },
];
