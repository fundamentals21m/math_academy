import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For quaternions, $\\mathbf{ij} = $',
    options: [
      '$\\mathbf{k}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'From i² = j² = k² = ijk = −1, we derive ij = k.',
  },
      '$-\\mathbf{k}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From i² = j² = k² = ijk = −1, we derive ij = k.',
  },
      '$\\mathbf{j}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From i² = j² = k² = ijk = −1, we derive ij = k.',
  },
      '$\\mathbf{i}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From i² = j² = k² = ijk = −1, we derive ij = k.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From i² = j² = k² = ijk = −1, we derive ij = k.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The quaternion rotation formula is $\\mathbf{p} \\mapsto$',
    options: [
      '$\\mathbf{qpq}^{-1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Rotation by unit quaternion q maps pure quaternion p to qpq⁻¹.',
  },
      '$\\mathbf{pq}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation by unit quaternion q maps pure quaternion p to qpq⁻¹.',
  },
      '$\\mathbf{qp}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation by unit quaternion q maps pure quaternion p to qpq⁻¹.',
  },
      '$\\mathbf{q}^{-1}\\mathbf{pq}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation by unit quaternion q maps pure quaternion p to qpq⁻¹.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotation by unit quaternion q maps pure quaternion p to qpq⁻¹.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The quaternion for rotation about axis $\\mathbf{n}$ through angle $\\theta$ uses:',
    options: [
      'The half-angle $\\theta/2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quaternion is q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k), using half the rotation angle.',
  },
      'The angle $\\theta$ directly',
      'The angle squared $\\theta^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quaternion is q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k), using half the rotation angle.',
  },
      'The double angle $2\\theta
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quaternion is q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k), using half the rotation angle.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quaternion is q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k), using half the rotation angle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The map from unit quaternions to rotations is:',
    options: [
      '2-to-1',
      '3-to-1',
      '1-to-1',
      '4-to-1',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Both q and −q produce the same rotation, so the map is 2-to-1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Composing rotations with quaternions requires:',
    options: [
      'Quaternion addition',
      'Taking inverses',
      '3×3 matrix multiplication',
      'Quaternion multiplication',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If R₁ corresponds to q₁ and R₂ to q₂, then R₁∘R₂ corresponds to q₁q₂.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An advantage of quaternions over rotation matrices is:',
    options: [
      'They are commutative',
      'They avoid gimbal lock and interpolate smoothly',
      'They use more numbers for greater precision',
      'They work only in 2D',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Quaternions are compact (4 numbers), avoid gimbal lock, and allow smooth SLERP interpolation.',
  },
];
