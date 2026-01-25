import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'William Rowan Hamilton invented which number system that extends the complex numbers?',
    options: [
      'Octonions',
      'Dual numbers',
      'p-adic numbers',
      'Quaternions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Hamilton invented quaternions, a 4-dimensional number system extending complex numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hamilton famously carved the quaternion formula on which Dublin landmark?',
    options: [
      'Broom Bridge',
      'Dublin Castle',
      'St. Patrick\\'s Cathedral',
      'Trinity College',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hamilton carved $i^2 = j^2 = k^2 = ijk = -1$ on Broom Bridge after his eureka moment.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Quaternion multiplication is notable because it is:',
    options: [
      'Commutative',
      'Associative only',
      'Neither associative nor commutative',
      'Non-commutative',
    ],
    correctIndex: 3,
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
      'Cryptography',
      '3D computer graphics and robotics',
      'Machine learning only'
    ],
    correctIndex: 2,
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
