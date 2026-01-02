import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.16 prove about exterior angles?',
    options: [
      'An exterior angle equals the sum of the non-adjacent interior angles',
      'An exterior angle is greater than either non-adjacent interior angle',
      'Exterior angles sum to 360°',
      'Exterior angles are supplementary to interior angles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.16: "In any triangle, if one of the sides be produced, the exterior angle is greater than either of the interior and opposite angles."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is I.16 important in Euclidean geometry?',
    options: [
      'It proves triangles have three sides',
      'It is used to prove parallel line properties without using Postulate 5',
      'It establishes angle measurement',
      'It defines exterior angles'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'I.16 is proven without the Parallel Postulate and is used in proofs of I.27 and I.28 about parallel lines.',
  },
];
