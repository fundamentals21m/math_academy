import type { QuizQuestion } from './types';

export const section166Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.21 proves what about similarity?',
    options: [
      'Similarity is transitive: if A is similar to B, and B to C, then A is similar to C',
      'All polygons are similar to each other',
      'Similar polygons have equal areas',
      'Only triangles can be similar',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.21 establishes transitivity: figures similar to the same figure are similar to one another.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the transitivity of similarity important?',
    options: [
      'It proves circles are polygons',
      'It proves all figures are congruent',
      'It shows similarity is the same as equality',
      'It allows comparing figures indirectly through an intermediate figure',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Transitivity allows us to establish similarity between two figures by showing each is similar to a common third figure.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of VI.21 relies on the fact that:',
    options: [
      'All figures have the same number of sides',
      'All angles in similar figures are right angles',
      'Equal ratios to the same ratio are equal to each other',
      'Similar figures have equal perimeters',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If A:B is the same ratio as X:Y, and C:D is also the same as X:Y, then A:B = C:D. This transfers the proportional sides through the common figure.',
  },
];
