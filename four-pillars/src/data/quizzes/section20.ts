import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isometry is a transformation that preserves:',
    options: [
      'Distance between points',
      'Only angles',
      'Only orientation',
      'Only area',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Isometry means "same measure" — it keeps distances unchanged.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The translation $t_{a,b}$ sends (x, y) to:',
    options: [
      '$(x - a, y - b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Translation adds the vector (a, b) to every point.',
  },
      '$(x + a, y + b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Translation adds the vector (a, b) to every point.',
  },
      '$(ax, by)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Translation adds the vector (a, b) to every point.',
  },
      '$(xa, yb)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Translation adds the vector (a, b) to every point.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Translation adds the vector (a, b) to every point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Reflection in the x-axis sends (x, y) to:',
    options: [
      '$(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Reflection in the x-axis negates the y-coordinate while keeping x unchanged.',
  },
      '$(-x, -y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reflection in the x-axis negates the y-coordinate while keeping x unchanged.',
  },
      '$(-x, y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reflection in the x-axis negates the y-coordinate while keeping x unchanged.',
  },
      '$(x, -y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reflection in the x-axis negates the y-coordinate while keeping x unchanged.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reflection in the x-axis negates the y-coordinate while keeping x unchanged.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every translation is the combination of:',
    options: [
      'Two reflections in intersecting lines',
      'Two reflections in parallel lines',
      'One reflection',
      'Three reflections',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reflecting in two parallel lines distance d/2 apart gives a translation of distance d perpendicular to the lines.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A glide reflection is:',
    options: [
      'A rotation followed by a translation',
      'A translation followed by a dilation',
      'A reflection followed by a translation parallel to the reflection line',
      'Two rotations composed',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A glide reflection combines a reflection with a translation in the direction of the reflection line.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every rotation about the origin is the combination of:',
    options: [
      'One reflection and one translation',
      'Two reflections in parallel lines',
      'Three translations',
      'Two reflections in lines meeting at the origin',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Reflections in lines meeting at angle θ/2 compose to give rotation through θ about their intersection.',
  },
];
