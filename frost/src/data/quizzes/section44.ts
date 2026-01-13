import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is proactive secret sharing?',
    options: [
      'Sharing secrets before they are needed',
      'Periodically refreshing shares while keeping the same secret and public key',
      'Sharing secrets with future participants',
      'Encrypting shares with time-locked encryption',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Proactive secret sharing periodically refreshes all shares so that old shares become useless. The secret $s$ and public key $Y$ remain unchanged, but an attacker who compromised old shares cannot combine them with new shares.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does proactive share refresh work mathematically?',
    options: [
      'Generate a new secret and distribute new shares',
      'Each participant adds shares of zero to their existing share: $s_i\' = s_i + \\delta_i$ where $\\sum \\delta_i = 0$',
      'Multiply all shares by a random factor',
      'Hash the old shares to create new ones',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Participants jointly generate a random polynomial with zero constant term and add the resulting shares to their existing shares. Since the new polynomial sums to zero, the secret $s$ is unchanged, but individual shares $s_i\' = s_i + \\delta_i$ are completely different.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What attack does proactive secret sharing defend against?',
    options: [
      'Quantum computing attacks',
      'Mobile adversaries who compromise different parties over time',
      'Denial of service attacks',
      'Man-in-the-middle attacks',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A mobile adversary might compromise participant 1 in epoch 1, participant 2 in epoch 2, etc. Without refresh, they eventually collect $t$ shares. With proactive refresh, shares from different epochs are incompatible and cannot be combined.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What must be true about share refreshes for security?',
    options: [
      'Refreshes must happen at unpredictable times',
      'Refreshes must complete before an adversary can compromise $t$ parties in one epoch',
      'Refreshes must change the public key each time',
      'Refreshes must use different threshold values',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The refresh period (epoch) must be short enough that an adversary cannot compromise $t$ parties within a single epoch. If they could, they could reconstruct the secret before the refresh invalidates their gathered shares.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'After a proactive refresh, what can an adversary do with shares collected from the previous epoch?',
    options: [
      'Combine them with new shares to reconstruct the secret',
      'Nothing useful - old shares are incompatible with new shares',
      'Verify signatures from the old epoch',
      'Derive the new shares from the old ones',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Old and new shares lie on different polynomials (differing by the refresh polynomial). They cannot be combined via Lagrange interpolation. An adversary\'s collected old shares become worthless after refresh.',
  },
];
