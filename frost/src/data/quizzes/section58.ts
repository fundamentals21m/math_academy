import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What technique allows FROST to verify multiple signature shares more efficiently?',
    options: [
      'Batch verification using random linear combinations',
      'Sequential verification',
      'Skipping verification entirely',
      'Using smaller keys'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Batch verification combines multiple verification equations with random weights, checking them in one multi-scalar multiplication, which is faster than individual checks.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the aggregation step in FROST computationally inexpensive?',
    options: [
      'It requires solving discrete logarithms',
      'It only involves adding scalars and points, not multiplications',
      'It skips verification',
      'It uses quantum computers',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Aggregating shares ($z = \\sum z_i$) and points ($R = \\sum R_i$) uses scalar and point addition, which is much faster than the scalar multiplications in signing.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What preprocessing technique can reduce FROST signing latency?',
    options: [
      'Reducing the number of participants',
      'Pre-generating and storing nonce commitments for future sessions',
      'Using smaller threshold values',
      'Using weaker hash functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Participants can pre-generate nonce pairs and distribute commitments in advance. When a signing request arrives, the first round is already complete.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the main computational bottleneck in FROST signing?',
    options: [
      'Hashing the message',
      'Memory allocation',
      'Network communication',
      'Scalar multiplications on the elliptic curve'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Elliptic curve scalar multiplication (computing $k \\cdot G$ or $k \\cdot P$) dominates FROST computation time, requiring hundreds of point operations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does multi-scalar multiplication (MSM) optimize FROST operations?',
    options: [
      'By using multiple processors',
      'By reducing the key size',
      'By computing $\\sum a_i \\cdot P_i$ faster than individual multiplications',
      'By eliminating the need for verification',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'MSM algorithms like Pippenger\'s compute $\\sum a_i \\cdot P_i$ in sub-linear time relative to the number of terms, significantly speeding up verification and aggregation.',
  },
];
