import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a property that FROST achieves simultaneously?',
    options: [
      'No secret reconstruction during signing',
      'Non-interactive nonce generation',
      'Signatures indistinguishable from single-party Schnorr',
      'Requires all $n$ participants to sign',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'FROST achieves threshold flexibility where any $t$ of $n$ can sign, NOT requiring all $n$ participants. This is one of its key advantages over simpler additive schemes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the naive (insecure) approach to threshold signing, what security vulnerability exists?',
    options: [
      'The signature is too large',
      'The secret $s$ is temporarily exposed when shares are reconstructed',
      'The verification fails',
      'The nonces cannot be generated',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In naive threshold signing, shares are collected and reconstructed to compute $s$, then $z = k + s \\cdot c$. This briefly exposes the full secret at the reconstruction point, creating a single point of failure.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What historical cryptographic techniques does FROST build upon?',
    options: [
      'Shamir secret sharing, Schnorr signatures, and Feldman VSS',
      'Only Shamir secret sharing from 1979',
      'Only Schnorr signatures from 1989',
      'Only RSA encryption',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FROST synthesizes multiple foundational techniques: Shamir secret sharing (1979), Schnorr signatures (1989), Feldman verifiable secret sharing (1987), and modern threshold signature research.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can different signing sets (e.g., $\\{1,2,3\\}$ vs $\\{1,3,5\\}$) all produce valid signatures for the same public key?',
    options: [
      'Because Lagrange coefficients adjust the weighting so any $t$ shares reconstruct $s
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Different signing sets use different Lagrange coefficients $\\lambda_i$, but these coefficients always weight the shares correctly so that $\\sum s_i \\cdot \\lambda_i = s$ regardless of which $t$ participants are involved.',
  },
      'Because the public key changes for each signing set',
      'Because the signatures are different for each set',
      'Because the nonces are shared between sets',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Different signing sets use different Lagrange coefficients $\\lambda_i$, but these coefficients always weight the shares correctly so that $\\sum s_i \\cdot \\lambda_i = s$ regardless of which $t$ participants are involved.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What remaining security challenge does FROST need to address beyond share conversion?',
    options: [
      'Making signatures smaller',
      'Choosing better random numbers',
      'Preventing malicious manipulation across parallel signing sessions (Drijvers attack)',
      'Speeding up hash computations',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Share conversion solves the mathematical problem of combining different share types, but a malicious participant could still manipulate nonces across parallel sessions. FROST addresses this with its binding mechanism.',
  },
];
