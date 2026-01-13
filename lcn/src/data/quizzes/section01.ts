import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A commitment scheme is binding if:',
    options: [
      'The commitment reveals nothing about the committed value',
      'No PPT adversary can find two different values that produce the same commitment',
      'The commitment can be opened to any value',
      'The commitment is computationally efficient'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Binding means the committer cannot change their committed value - finding two different values with the same commitment has negligible probability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the binding definition, what does $\\text{Com}(x; r)$ represent?',
    options: [
      'The comparison of $x$ and $r$',
      'The commitment to value $x$ using randomness $r$',
      'The communication between parties',
      'The composite function of $x$ and $r$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{Com}(x; r)$ is the commitment algorithm that commits to value $x$ using randomness $r$ for hiding.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the hiding property of a commitment scheme?',
    options: [
      'The commitment cannot be computed efficiently',
      'The commitment does not reveal any information about the committed value',
      'The commitment can be opened by anyone',
      'The commitment requires a trusted setup'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hiding means the commitment reveals no information about the committed value before the reveal phase.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a hash-based commitment $\\text{Com}(x; r) = H(x \\| r)$, binding relies on:',
    options: [
      'The preimage resistance of $H$',
      'The collision resistance of $H$',
      'The randomness of $r$',
      'The size of $x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If an adversary could find $(x_0, r_0) \\neq (x_1, r_1)$ with the same hash, they would have found a collision in $H$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Computational binding holds against:',
    options: [
      'All adversaries regardless of computational power',
      'Only PPT (probabilistic polynomial-time) adversaries',
      'Only deterministic adversaries',
      'Only quantum adversaries'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Computational binding assumes the adversary is computationally bounded (PPT). Information-theoretic binding holds against unbounded adversaries.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What kind of function must the success probability of breaking binding be?',
    correctAnswer: 'negligible',
    difficulty: 'medium',
    explanation: 'The probability of breaking binding must be a negligible function $\\mu(\\lambda)$ in the security parameter.',
  },
];
