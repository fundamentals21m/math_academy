import type { QuizQuestion } from './types';

export const section178Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.33 proves that in equal circles, central angles are related to their intercepted arcs:',
    options: [
      'Inversely proportional',
      'In the same ratio (directly proportional)',
      'Equal regardless of arc length',
      'In the duplicate ratio',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.33 establishes that in equal circles, central angles are proportional to their arcs: if one arc is twice another, its central angle is also twice as large.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'VI.33 applies specifically to:',
    options: [
      'Any circles of different sizes',
      'Inscribed angles only',
      'Equal circles only',
      'Semicircles only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VI.33 requires equal circles. In equal circles, arc length depends only on the central angle, making angles and arcs proportional.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.33 provides the foundation for:',
    options: [
      'The definition of radian measure',
      'The Pythagorean theorem',
      'Constructing parallel lines',
      'Finding square roots'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VI.33 shows angle and arc proportionality, which is the conceptual basis for radian measure where the angle equals the arc length divided by the radius.',
  },
];
