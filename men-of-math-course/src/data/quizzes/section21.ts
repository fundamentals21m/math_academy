import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'William Rowan Hamilton invented which number system that extends the complex numbers?',
    options: [
      'Octonions',
      'Quaternions',
      'Dual numbers',
      'p-adic numbers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hamilton invented quaternions, a 4-dimensional number system extending complex numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hamilton famously carved the quaternion formula on which Dublin landmark?',
    options: [
      'Dublin Castle',
      'Broom Bridge',
      'Trinity College',
      'St. Patrick\'s Cathedral'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hamilton carved $i^2 = j^2 = k^2 = ijk = -1$ on Broom Bridge after his eureka moment.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Quaternion multiplication is notable because it is:',
    options: [
      'Commutative',
      'Non-commutative',
      'Associative only',
      'Neither associative nor commutative'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Quaternion multiplication is non-commutative: $ij = k$ but $ji = -k$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hamilton reformulated classical mechanics using:',
    options: [
      'Force vectors',
      'Energy and phase space',
      'Acceleration only',
      'Stress tensors'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hamiltonian mechanics uses energy functions and phase space (position and momentum).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Quaternions are now widely used in:',
    options: [
      'Stock market analysis',
      '3D computer graphics and robotics',
      'Cryptography',
      'Machine learning only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Quaternions efficiently represent 3D rotations without gimbal lock, used in games and robotics.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'How many dimensions do quaternions have?',
    correctAnswer: 4,
    numericRange: { min: 3, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation: 'Quaternions have 4 dimensions: one real part and three imaginary parts (i, j, k).',
  },
];
