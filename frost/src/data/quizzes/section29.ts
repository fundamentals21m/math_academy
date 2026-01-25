import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In FROST DKG, what does each participant $P_i$ generate in Round 1?',
    options: [
      'Only a random number',
      'Other participants\\' shares',
      'A random polynomial $f_i(x)$, Feldman commitments, and a proof of knowledge',
      'The final signature',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In Round 1, each $P_i$ samples a degree $t-1$ polynomial $f_i(x)$, computes Feldman commitments to coefficients $([a_{i,0}]G, [a_{i,1}]G, ...)$, and generates a Schnorr proof of knowledge for $a_{i,0}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are Feldman commitments used for in FROST DKG?',
    options: [
      'To allow verification that received shares are consistent with committed coefficients',
      'To encrypt the shares',
      'To hide the public key',
      'To speed up computation'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Feldman commitments $C_i = ([a_{i,0}]G, ..., [a_{i,t-1}]G)$ allow recipients to verify shares: $[s_{j,i}]G \\stackrel{?}{=} \\sum_k [i^k]C_{j,k}$ without revealing the polynomial coefficients.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is the group secret $s$ computed in FROST DKG?',
    options: [
      'One participant chooses it',
      '$s = \\sum_{i=1}^n a_{i,0}$ (sum of all participants\' constant terms)',
      '$s = a_{1,0}$ (first participant\'s term)',
      '$s$ is randomly generated after DKG',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The group secret is $s = f(0) = \\sum_i f_i(0) = \\sum_i a_{i,0}$. Each participant contributes their constant term, so no single party knows $s$ (only their own contribution).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does FROST DKG require a proof of knowledge for $a_{i,0}$?',
    options: [
      'To make the protocol faster',
      'To encrypt the shares',
      'To reduce storage requirements',
      'To ensure each participant actually knows their contribution and isn\\'t just copying others',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The proof of knowledge (a Schnorr proof) ensures each participant actually knows their secret contribution $a_{i,0}$. Without this, an adversary could copy commitments from others.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How is each participant\'s final share $s_i$ computed after DKG Round 2?',
    options: [
      '$s_i = \\sum_{j=1}^n s_{j,i} = \\sum_{j=1}^n f_j(i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each participant\'s share is the sum of shares received from all others: $s_i = \\sum_j f_j(i)$. This is a share of the combined polynomial $f(x) = \\sum_j f_j(x)$.',
  },
      '$s_i = f_1(i)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each participant\'s share is the sum of shares received from all others: $s_i = \\sum_j f_j(i)$. This is a share of the combined polynomial $f(x) = \\sum_j f_j(x)$.',
  },
      '$s_i$ is randomly assigned',
      '$s_i = s / n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each participant\'s share is the sum of shares received from all others: $s_i = \\sum_j f_j(i)$. This is a share of the combined polynomial $f(x) = \\sum_j f_j(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each participant\'s share is the sum of shares received from all others: $s_i = \\sum_j f_j(i)$. This is a share of the combined polynomial $f(x) = \\sum_j f_j(x)$.',
  },
];
