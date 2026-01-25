import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 26: Klein's Definition of Geometry
 */
export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Klein, what defines a geometry?',
    options: [
      'Its axioms',
      'Its coordinate system',
      'Its dimensionality',
      'Its group of isometries',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Klein\'s Erlangen Program (1872) proposed that geometry is defined by its group of isometries. Euclidean geometry is everything preserved by Euclidean isometries.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In what year did Klein announce his Erlangen Program defining geometry via isometries?',
    correctAnswer: 1872,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Felix Klein announced his revolutionary viewpoint in 1872, showing that different groups of transformations give rise to different geometries.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In spherical geometry, what are the "lines"?',
    options: [
      'Small circles',
      'Parallels of latitude',
      'Great circles',
      'Meridians only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In spherical geometry, the "lines" are great circles—the intersections of the sphere with planes through its center. These are the "equidistant sets" of the spherical reflections.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a group of transformations?',
    options: [
      'A set closed under composition and inverses',
      'Any set of transformations',
      'A set containing only reflections',
      'A finite set of rotations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A group of transformations is a set of one-to-one functions that is closed under composition (combining two gives another in the set) and inverses (the reverse of each transformation is also in the set).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is each reflection its own inverse?',
    options: [
      'Reflections are undefined',
      'Reflections preserve distance',
      'Klein defined them that way',
      'Reflecting twice returns to the original',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Reflecting in the same line twice returns every point to its original position. So the composite of a reflection with itself is the identity function, meaning the reflection is its own inverse.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the orientation-preserving subgroup?',
    options: [
      'All isometries',
      'Composites of an even number of reflections',
      'Only translations',
      'Composites of an odd number of reflections'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The orientation-preserving subgroup consists of isometries that are composites of an even number of reflections. This includes rotations and translations, but not single reflections or glide reflections.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How do we know that orientation is a real geometric property?',
    options: [
      'Euclid defined it',
      'All isometries preserve it',
      'The orientation-preserving subgroup differs from the whole group',
      'It is visible on a clock face'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Orientation is a real property because the orientation-preserving subgroup is strictly smaller than the whole isometry group. A reflection maps exactly one line onto itself, while even composites (rotations, translations) have different behavior.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'On the sphere, what is the composite of two reflections?',
    options: ['A translation', 'Always a rotation', 'A glide reflection', 'Another reflection'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'On the sphere, any two "lines" (great circles) intersect, so the composite of two reflections is always a rotation. There are no translations on the sphere because there are no parallel lines.',
  },
];
