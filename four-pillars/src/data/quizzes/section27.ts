import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The inner product formula relates u · v to:',
    options: [
      '$|\\mathbf{u}| + |\\mathbf{v}|$',
      '$|\\mathbf{u}||\\mathbf{v}|\\sin\\theta$',
      '$|\\mathbf{u}| - |\\mathbf{v}|$',
      '$|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'u · v = |u||v|cos θ, where θ is the angle between the vectors.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a right triangle, the cosine of an angle equals:',
    options: [
      'Adjacent / Hypotenuse',
      'Opposite / Hypotenuse',
      'Opposite / Adjacent',
      'Hypotenuse / Adjacent'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Cosine = adjacent side / hypotenuse.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Law of Cosines states: $|\\mathbf{u} - \\mathbf{v}|^2 =$',
    options: [
      '$|\\mathbf{u}|^2 + |\\mathbf{v}|^2$',
      '$|\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$',
      '$2|\\mathbf{u}||\\mathbf{v}|$',
      '$(|\\mathbf{u}| - |\\mathbf{v}|)^2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This generalizes the Pythagorean theorem to non-right triangles.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When u and v are perpendicular, the Law of Cosines reduces to:',
    options: [
      '$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 - |\\mathbf{v}|^2$',
      '$|\\mathbf{u} - \\mathbf{v}|^2 = 2|\\mathbf{u}||\\mathbf{v}|$',
      '$|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2$',
      '$|\\mathbf{u} - \\mathbf{v}| = |\\mathbf{u}| + |\\mathbf{v}|$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When θ = 90°, cos θ = 0, and we get the Pythagorean theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a point v on a semicircle with diameter endpoints u and −u, the angle at v is:',
    options: [
      'Acute',
      'Obtuse',
      'Depends on the position of v',
      'A right angle'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '(v + u)·(v − u) = |v|² − |u|² = 0 since both are radii, so the angle is 90°.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The identity $(\\mathbf{v} + \\mathbf{u}) \\cdot (\\mathbf{v} - \\mathbf{u}) = |\\mathbf{v}|^2 - |\\mathbf{u}|^2$ is analogous to:',
    options: [
      '$(a + b)(a - b) = a^2 - b^2$',
      '$(a + b)^2 = a^2 + 2ab + b^2$',
      '$(a - b)^2 = a^2 - 2ab + b^2$',
      '$a^2 + b^2 = c^2$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'This is the difference of squares identity applied to vectors.',
  },
];
