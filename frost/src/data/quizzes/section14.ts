import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why does naively using Shamir Secret Sharing for threshold Schnorr signatures fail?',
    options: [
      'Shamir shares are too large to fit in a signature',
      'Shamir polynomials are incompatible with elliptic curves',
      'Lagrange interpolation is too slow for real-time signing',
      'The secret $s$ must be reconstructed to compute $z = k + s \\cdot c$, creating a single point of failure'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To compute the Schnorr response $z = k + s \\cdot c$, naive SSS would require reconstructing $s$ on some device. That device then knows the full private key - exactly the single point of failure we wanted to avoid.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the two types of secrets needed for Schnorr threshold signing?',
    options: [
      'The message hash and the public key',
      'The long-term secret $s$ and the ephemeral nonce $k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Schnorr signing requires the long-term secret key $s$ (Shamir-shared, used for all signatures) and an ephemeral nonce $k$ (fresh for each signature, must never be reused).',
  },
      'The challenge $c$ and the response $z
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Schnorr signing requires the long-term secret key $s$ (Shamir-shared, used for all signatures) and an ephemeral nonce $k$ (fresh for each signature, must never be reused).',
  },
      'The commitment $R$ and the signature $\\sigma
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Schnorr signing requires the long-term secret key $s$ (Shamir-shared, used for all signatures) and an ephemeral nonce $k$ (fresh for each signature, must never be reused).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Schnorr signing requires the long-term secret key $s$ (Shamir-shared, used for all signatures) and an ephemeral nonce $k$ (fresh for each signature, must never be reused).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can\'t we simply run full Shamir sharing for the nonce $k$ each time we sign?',
    options: [
      'Shamir sharing only works with prime fields',
      'Nonces must be larger than the prime field order',
      'A dealer would need to choose $k$, meaning they would know it - defeating the purpose',
      'Lagrange coefficients cannot be computed for nonces',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Shamir sharing requires a dealer to generate the polynomial. If someone generates $k$ and distributes shares, they know $k$. Combined with $s$, they could forge signatures - creating a single point of failure.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the FROST insight for handling the nonce $k$?',
    options: [
      'Use additive shares $k = k_1 + k_2 + \\ldots + k_t$ where each participant generates their own $k_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FROST uses additive nonce shares: each participant generates their own random $k_i$, and $k = \\sum k_i$. This requires no coordination or trusted dealer - each participant acts independently.',
  },
      'Use the same nonce for all signatures',
      'Derive the nonce deterministically from the message',
      'Have a trusted third party generate all nonces',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST uses additive nonce shares: each participant generates their own random $k_i$, and $k = \\sum k_i$. This requires no coordination or trusted dealer - each participant acts independently.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the mathematical challenge in computing $z = k + s \\cdot c$ with both additive shares ($k$) and polynomial shares ($s$)?',
    options: [
      'Additive and polynomial shares use different prime fields',
      'Polynomial shares require more participants than additive shares',
      'They are different types of shares that cannot be directly combined',
      'The challenge $c$ depends on knowing $s$ first',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The nonce $k$ is additively shared ($k = \\sum k_i$) while $s$ is polynomially shared ($s = \\sum s_i \\lambda_i$). FROST\'s key innovation is a way to compute with both types without reconstruction.',
  },
];
