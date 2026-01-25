import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 24: Isometries of the Euclidean Plane
 */
export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isometry of the Euclidean plane is determined by the images of:',
    options: [
      'Three non-collinear points',
      'One point',
      'Two points',
      'Four points',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'An isometry is completely determined by where it sends three non-collinear points. This is because any other point Q is determined by its distances from these three points, and isometries preserve distances.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the Three Reflections Theorem, every Euclidean isometry is a composite of:',
    options: [
      'At most two reflections',
      'One, two, or three reflections',
      'Exactly three reflections',
      'Any number of reflections',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Three Reflections Theorem states that each isometry of the Euclidean plane is the composite of one, two, or three reflections. This covers all cases: reflections (1), rotations and translations (2), and glide reflections (3).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The composite of reflections in two intersecting lines is:',
    options: [
      'A translation',
      'Another reflection',
      'A glide reflection',
      'A rotation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'When two reflection lines intersect, their composite is a rotation about the point of intersection. The rotation angle is twice the angle between the lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The composite of reflections in two parallel lines is:',
    options: [
      'A rotation',
      'A translation',
      'A reflection',
      'A glide reflection',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When two reflection lines are parallel, their composite is a translation in the direction perpendicular to the lines, by twice the distance between them.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a glide reflection?',
    options: [
      'A rotation followed by a reflection',
      'Two perpendicular reflections',
      'A single reflection',
      'A translation combined with reflection in a parallel line',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A glide reflection is the composite of a translation with a reflection in a line parallel to the direction of translation. It requires three reflections.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Is composition of isometries commutative?',
    options: [
      'Always',
      'Never',
      'Generally not',
      'Only for translations',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Composition of isometries is generally not commutative. For example, f₂f₁ may differ from f₁f₂. The order in which transformations are applied matters.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The half turn about O sends $(x, y)$ to:',
    options: [
      '$(x, -y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The half turn (rotation through π) about the origin sends (x, y) to (−x, −y). It is the composite of reflections in the x-axis and y-axis.',
  },
      '$(-x, y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The half turn (rotation through π) about the origin sends (x, y) to (−x, −y). It is the composite of reflections in the x-axis and y-axis.',
  },
      '$(y, x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The half turn (rotation through π) about the origin sends (x, y) to (−x, −y). It is the composite of reflections in the x-axis and y-axis.',
  },
      '$(-x, -y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The half turn (rotation through π) about the origin sends (x, y) to (−x, −y). It is the composite of reflections in the x-axis and y-axis.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The half turn (rotation through π) about the origin sends (x, y) to (−x, −y). It is the composite of reflections in the x-axis and y-axis.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In the notation $f_2 f_1$, which transformation is applied first?',
    options: [
      '$f_1
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In function composition notation, f₂f₁ means "apply f₁ first, then f₂." This is the standard convention: read right to left.',
  },
      '$f_2
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'In function composition notation, f₂f₁ means "apply f₁ first, then f₂." This is the standard convention: read right to left.',
  },
      'Both simultaneously',
      'It depends on the context',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'In function composition notation, f₂f₁ means "apply f₁ first, then f₂." This is the standard convention: read right to left.',
  },
];
