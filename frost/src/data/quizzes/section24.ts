import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the complete FROST signature share formula?',
    options: [
      '$z_i = k_i + s_i \\cdot c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The complete formula is $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, combining the bound nonce $(d_i + e_i \\cdot \\rho_i)$ with the weighted secret share contribution $(\\lambda_i \\cdot s_i \\cdot c)$.',
  },
      '$z_i = d_i + s_i \\cdot c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The complete formula is $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, combining the bound nonce $(d_i + e_i \\cdot \\rho_i)$ with the weighted secret share contribution $(\\lambda_i \\cdot s_i \\cdot c)$.',
  },
      '$z_i = e_i \\cdot \\rho_i + s_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The complete formula is $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, combining the bound nonce $(d_i + e_i \\cdot \\rho_i)$ with the weighted secret share contribution $(\\lambda_i \\cdot s_i \\cdot c)$.',
  },
      '$z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The complete formula is $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, combining the bound nonce $(d_i + e_i \\cdot \\rho_i)$ with the weighted secret share contribution $(\\lambda_i \\cdot s_i \\cdot c)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The complete formula is $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, combining the bound nonce $(d_i + e_i \\cdot \\rho_i)$ with the weighted secret share contribution $(\\lambda_i \\cdot s_i \\cdot c)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the formula $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, what does the term $d_i + e_i \\cdot \\rho_i$ represent?',
    options: [
      'The secret key contribution',
      'The bound nonce $k_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The term $d_i + e_i \\cdot \\rho_i$ is the effective nonce $k_i$ that is bound to the session via $\\rho_i$.',
  },
      'The challenge hash',
      'The Lagrange coefficient',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The term $d_i + e_i \\cdot \\rho_i$ is the effective nonce $k_i$ that is bound to the session via $\\rho_i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the challenge $c$ in the FROST signing formula computed as?',
    options: [
      '$c = H_2(m)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The challenge is $c = H_2(R, Y, m)$ where $R$ is the group commitment, $Y$ is the group public key, and $m$ is the message. This is the standard Schnorr challenge.',
  },
      '$c = H_2(s, k)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The challenge is $c = H_2(R, Y, m)$ where $R$ is the group commitment, $Y$ is the group public key, and $m$ is the message. This is the standard Schnorr challenge.',
  },
      '$c = H_2(R, Y, m)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The challenge is $c = H_2(R, Y, m)$ where $R$ is the group commitment, $Y$ is the group public key, and $m$ is the message. This is the standard Schnorr challenge.',
  },
      '$c = H_2(\\rho_i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The challenge is $c = H_2(R, Y, m)$ where $R$ is the group commitment, $Y$ is the group public key, and $m$ is the message. This is the standard Schnorr challenge.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The challenge is $c = H_2(R, Y, m)$ where $R$ is the group commitment, $Y$ is the group public key, and $m$ is the message. This is the standard Schnorr challenge.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When all signature shares $z_i$ are aggregated as $z = \\sum_{i \\in S} z_i$, the result equals:',
    options: [
      '$z = k + s \\cdot c$ (standard Schnorr response)',
      '$z = k \\cdot c + s
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Expanding: $z = \\sum(d_i + e_i \\cdot \\rho_i) + c \\cdot \\sum \\lambda_i \\cdot s_i = k + s \\cdot c$, which is exactly the standard Schnorr response formula.',
  },
      '$z = k - s \\cdot c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Expanding: $z = \\sum(d_i + e_i \\cdot \\rho_i) + c \\cdot \\sum \\lambda_i \\cdot s_i = k + s \\cdot c$, which is exactly the standard Schnorr response formula.',
  },
      '$z = k / s \\cdot c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Expanding: $z = \\sum(d_i + e_i \\cdot \\rho_i) + c \\cdot \\sum \\lambda_i \\cdot s_i = k + s \\cdot c$, which is exactly the standard Schnorr response formula.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Expanding: $z = \\sum(d_i + e_i \\cdot \\rho_i) + c \\cdot \\sum \\lambda_i \\cdot s_i = k + s \\cdot c$, which is exactly the standard Schnorr response formula.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What makes FROST\'s signature share formula "magical" from a security perspective?',
    options: [
      'It produces smaller signatures',
      'No single party ever knows $s$ or $k$, yet the combined shares produce a valid Schnorr signature',
      'It uses quantum-resistant cryptography',
      'It doesn\\'t require a hash function',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The remarkable property is that the group computes $z = k + s \\cdot c$ without any participant ever reconstructing $s$ (the secret key) or $k$ (the group nonce). The secrets remain distributed throughout.',
  },
];
